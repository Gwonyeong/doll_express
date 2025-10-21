const express = require('express');
const { prisma } = require('../services/prisma');
const { optionalAuth } = require('../middleware/auth');

const router = express.Router();

/**
 * GET /api/stores
 * 매장 목록 조회 (지도용)
 */
router.get('/', optionalAuth, async (req, res) => {
  try {
    const {
      lat,
      lng,
      radius = 5000, // 기본 5km
      limit = 100,
      offset = 0,
      search
    } = req.query;

    let whereClause = {
      영업상태명: '영업중', // 영업 중인 매장만
    };

    // 검색 조건 추가
    if (search) {
      whereClause.OR = [
        { 사업장명: { contains: search, mode: 'insensitive' } },
        { 소재지전체주소: { contains: search, mode: 'insensitive' } },
        { 도로명전체주소: { contains: search, mode: 'insensitive' } }
      ];
    }

    // 좌표 기반 필터링 (PostgreSQL의 경우 더 정확한 거리 계산 가능)
    if (lat && lng) {
      const latFloat = parseFloat(lat);
      const lngFloat = parseFloat(lng);
      const radiusKm = parseFloat(radius) / 1000;

      // 간단한 박스 필터링 (더 정확한 거리 계산을 위해서는 PostGIS 사용 권장)
      const latDelta = radiusKm / 111; // 대략적인 위도 차이
      const lngDelta = radiusKm / (111 * Math.cos(latFloat * Math.PI / 180)); // 대략적인 경도 차이

      whereClause.좌표정보x = {
        gte: (lngFloat - lngDelta).toString(),
        lte: (lngFloat + lngDelta).toString()
      };
      whereClause.좌표정보y = {
        gte: (latFloat - latDelta).toString(),
        lte: (latFloat + latDelta).toString()
      };
    }

    const stores = await prisma.gameBusiness.findMany({
      where: whereClause,
      select: {
        id: true,
        사업장명: true,
        소재지전체주소: true,
        도로명전체주소: true,
        좌표정보x: true,
        좌표정보y: true,
        소재지전화: true,
        영업상태명: true,
        최종수정시점: true,
        reviews: {
          select: {
            id: true,
            rating: true,
            createdAt: true
          }
        }
      },
      skip: parseInt(offset),
      take: parseInt(limit),
      orderBy: {
        최종수정시점: 'desc'
      }
    });

    // 평균 평점 계산
    const storesWithRating = stores.map(store => {
      const ratings = store.reviews.map(r => r.rating);
      const avgRating = ratings.length > 0 ?
        ratings.reduce((sum, rating) => sum + rating, 0) / ratings.length : 0;

      return {
        id: store.id,
        name: store.사업장명,
        address: store.도로명전체주소 || store.소재지전체주소,
        phone: store.소재지전화,
        latitude: parseFloat(store.좌표정보y),
        longitude: parseFloat(store.좌표정보x),
        status: store.영업상태명,
        lastUpdated: store.최종수정시점,
        reviewCount: store.reviews.length,
        averageRating: Math.round(avgRating * 10) / 10,
        reviews: undefined // 리뷰 데이터는 제거
      };
    });

    res.json({
      success: true,
      data: storesWithRating,
      pagination: {
        limit: parseInt(limit),
        offset: parseInt(offset),
        total: stores.length
      }
    });

  } catch (error) {
    console.error('매장 목록 조회 오류:', error);
    res.status(500).json({
      error: 'Internal Server Error',
      message: '매장 목록을 불러오는 중 오류가 발생했습니다.'
    });
  }
});

/**
 * GET /api/stores/:id
 * 특정 매장 상세 정보 조회
 */
router.get('/:id', optionalAuth, async (req, res) => {
  try {
    const { id } = req.params;

    const store = await prisma.gameBusiness.findUnique({
      where: { id: parseInt(id) },
      include: {
        reviews: {
          include: {
            user: {
              select: {
                id: true,
                nickname: true,
                avatar: true
              }
            }
          },
          orderBy: {
            createdAt: 'desc'
          }
        }
      }
    });

    if (!store) {
      return res.status(404).json({
        error: 'Not Found',
        message: '매장을 찾을 수 없습니다.'
      });
    }

    // 평균 평점 계산
    const ratings = store.reviews.map(r => r.rating);
    const averageRating = ratings.length > 0 ?
      ratings.reduce((sum, rating) => sum + rating, 0) / ratings.length : 0;

    const storeData = {
      id: store.id,
      name: store.사업장명,
      address: store.도로명전체주소 || store.소재지전체주소,
      phone: store.소재지전화,
      latitude: parseFloat(store.좌표정보y),
      longitude: parseFloat(store.좌표정보x),
      status: store.영업상태명,
      businessType: store.업태구분명,
      totalFloors: store.총층수,
      facilityArea: store.시설면적,
      gameCount: store.총게임기수,
      lastUpdated: store.최종수정시점,
      reviewCount: store.reviews.length,
      averageRating: Math.round(averageRating * 10) / 10,
      reviews: store.reviews.map(review => ({
        id: review.id,
        rating: review.rating,
        content: review.content,
        images: review.images,
        tags: review.tags,
        userName: review.user ? review.user.nickname : review.userName,
        userAvatar: review.user?.avatar,
        createdAt: review.createdAt,
        updatedAt: review.updatedAt
      }))
    };

    res.json({
      success: true,
      data: storeData
    });

  } catch (error) {
    console.error('매장 상세 조회 오류:', error);
    res.status(500).json({
      error: 'Internal Server Error',
      message: '매장 정보를 불러오는 중 오류가 발생했습니다.'
    });
  }
});

/**
 * GET /api/stores/search
 * 매장 검색 (자동완성용)
 */
router.get('/search/suggestions', async (req, res) => {
  try {
    const { q, limit = 10 } = req.query;

    if (!q || q.length < 2) {
      return res.json({
        success: true,
        data: []
      });
    }

    const suggestions = await prisma.gameBusiness.findMany({
      where: {
        AND: [
          { 영업상태명: '영업중' },
          {
            OR: [
              { 사업장명: { contains: q, mode: 'insensitive' } },
              { 소재지전체주소: { contains: q, mode: 'insensitive' } },
              { 도로명전체주소: { contains: q, mode: 'insensitive' } }
            ]
          }
        ]
      },
      select: {
        id: true,
        사업장명: true,
        소재지전체주소: true,
        도로명전체주소: true,
        좌표정보x: true,
        좌표정보y: true
      },
      take: parseInt(limit),
      orderBy: {
        사업장명: 'asc'
      }
    });

    const formattedSuggestions = suggestions.map(store => ({
      id: store.id,
      name: store.사업장명,
      address: store.도로명전체주소 || store.소재지전체주소,
      latitude: parseFloat(store.좌표정보y),
      longitude: parseFloat(store.좌표정보x)
    }));

    res.json({
      success: true,
      data: formattedSuggestions
    });

  } catch (error) {
    console.error('매장 검색 오류:', error);
    res.status(500).json({
      error: 'Internal Server Error',
      message: '매장 검색 중 오류가 발생했습니다.'
    });
  }
});

module.exports = router;