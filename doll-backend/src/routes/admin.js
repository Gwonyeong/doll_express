const express = require('express');
const { prisma } = require('../services/prisma');
const { authenticateToken, requireAdmin } = require('../middleware/auth');

const router = express.Router();

// 모든 관리자 라우트에 인증 및 관리자 권한 확인 적용
router.use(authenticateToken);
router.use(requireAdmin);

/**
 * GET /api/admin/stats
 * 대시보드 통계 데이터
 */
router.get('/stats', async (req, res) => {
  try {
    const [
      totalStores,
      activeStores,
      totalReviews,
      totalUsers,
      recentReviews
    ] = await Promise.all([
      // 전체 매장 수
      prisma.gameBusiness.count(),

      // 영업 중인 매장 수
      prisma.gameBusiness.count({
        where: { 영업상태명: '영업중' }
      }),

      // 전체 리뷰 수
      prisma.review.count(),

      // 전체 사용자 수
      prisma.user.count(),

      // 최근 리뷰 (최근 7일)
      prisma.review.count({
        where: {
          createdAt: {
            gte: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
          }
        }
      })
    ]);

    // 월별 리뷰 통계 (최근 6개월)
    const sixMonthsAgo = new Date();
    sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);

    const monthlyReviews = await prisma.review.groupBy({
      by: ['createdAt'],
      where: {
        createdAt: {
          gte: sixMonthsAgo
        }
      },
      _count: {
        id: true
      }
    });

    // 월별 데이터 정리
    const monthlyStats = {};
    monthlyReviews.forEach(review => {
      const month = review.createdAt.toISOString().substring(0, 7); // YYYY-MM
      monthlyStats[month] = (monthlyStats[month] || 0) + review._count.id;
    });

    res.json({
      success: true,
      data: {
        overview: {
          totalStores,
          activeStores,
          totalReviews,
          totalUsers,
          recentReviews
        },
        monthlyReviews: monthlyStats
      }
    });

  } catch (error) {
    console.error('관리자 통계 조회 오류:', error);
    res.status(500).json({
      error: 'Internal Server Error',
      message: '통계 데이터를 불러오는 중 오류가 발생했습니다.'
    });
  }
});

/**
 * GET /api/admin/stores
 * 매장 관리 목록
 */
router.get('/stores', async (req, res) => {
  try {
    const {
      page = 1,
      limit = 20,
      search,
      status,
      sortBy = 'updatedAt',
      sortOrder = 'desc'
    } = req.query;

    const offset = (parseInt(page) - 1) * parseInt(limit);

    // 검색 조건 구성
    let whereClause = {};

    if (search) {
      whereClause.OR = [
        { 사업장명: { contains: search, mode: 'insensitive' } },
        { 소재지전체주소: { contains: search, mode: 'insensitive' } },
        { 도로명전체주소: { contains: search, mode: 'insensitive' } }
      ];
    }

    if (status) {
      whereClause.영업상태명 = status;
    }

    // 정렬 조건
    const orderBy = {};
    orderBy[sortBy] = sortOrder;

    const [stores, totalCount] = await Promise.all([
      prisma.gameBusiness.findMany({
        where: whereClause,
        include: {
          reviews: {
            select: {
              id: true,
              rating: true
            }
          }
        },
        orderBy,
        skip: offset,
        take: parseInt(limit)
      }),
      prisma.gameBusiness.count({ where: whereClause })
    ]);

    // 매장 데이터 가공
    const formattedStores = stores.map(store => {
      const ratings = store.reviews.map(r => r.rating);
      const avgRating = ratings.length > 0 ?
        ratings.reduce((sum, rating) => sum + rating, 0) / ratings.length : 0;

      return {
        id: store.id,
        name: store.사업장명,
        address: store.도로명전체주소 || store.소재지전체주소,
        phone: store.소재지전화,
        status: store.영업상태명,
        businessType: store.업태구분명,
        gameCount: store.총게임기수,
        reviewCount: store.reviews.length,
        averageRating: Math.round(avgRating * 10) / 10,
        lastUpdated: store.최종수정시점,
        createdAt: store.createdAt,
        updatedAt: store.updatedAt
      };
    });

    res.json({
      success: true,
      data: formattedStores,
      pagination: {
        page: parseInt(page),
        limit: parseInt(limit),
        total: totalCount,
        totalPages: Math.ceil(totalCount / parseInt(limit))
      }
    });

  } catch (error) {
    console.error('관리자 매장 목록 조회 오류:', error);
    res.status(500).json({
      error: 'Internal Server Error',
      message: '매장 목록을 불러오는 중 오류가 발생했습니다.'
    });
  }
});

/**
 * GET /api/admin/reviews
 * 리뷰 관리 목록
 */
router.get('/reviews', async (req, res) => {
  try {
    const {
      page = 1,
      limit = 20,
      storeId,
      rating,
      sortBy = 'createdAt',
      sortOrder = 'desc'
    } = req.query;

    const offset = (parseInt(page) - 1) * parseInt(limit);

    // 검색 조건 구성
    let whereClause = {};

    if (storeId) {
      whereClause.storeId = parseInt(storeId);
    }

    if (rating) {
      whereClause.rating = parseInt(rating);
    }

    // 정렬 조건
    const orderBy = {};
    orderBy[sortBy] = sortOrder;

    const [reviews, totalCount] = await Promise.all([
      prisma.review.findMany({
        where: whereClause,
        include: {
          store: {
            select: {
              id: true,
              사업장명: true,
              소재지전체주소: true
            }
          },
          user: {
            select: {
              id: true,
              nickname: true,
              email: true
            }
          }
        },
        orderBy,
        skip: offset,
        take: parseInt(limit)
      }),
      prisma.review.count({ where: whereClause })
    ]);

    const formattedReviews = reviews.map(review => ({
      id: review.id,
      rating: review.rating,
      content: review.content,
      images: review.images,
      tags: review.tags,
      store: {
        id: review.store.id,
        name: review.store.사업장명,
        address: review.store.소재지전체주소
      },
      user: review.user ? {
        id: review.user.id,
        nickname: review.user.nickname,
        email: review.user.email
      } : {
        nickname: review.userName
      },
      createdAt: review.createdAt,
      updatedAt: review.updatedAt
    }));

    res.json({
      success: true,
      data: formattedReviews,
      pagination: {
        page: parseInt(page),
        limit: parseInt(limit),
        total: totalCount,
        totalPages: Math.ceil(totalCount / parseInt(limit))
      }
    });

  } catch (error) {
    console.error('관리자 리뷰 목록 조회 오류:', error);
    res.status(500).json({
      error: 'Internal Server Error',
      message: '리뷰 목록을 불러오는 중 오류가 발생했습니다.'
    });
  }
});

/**
 * DELETE /api/admin/reviews/:id
 * 리뷰 삭제 (관리자)
 */
router.delete('/reviews/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const review = await prisma.review.findUnique({
      where: { id }
    });

    if (!review) {
      return res.status(404).json({
        error: 'Not Found',
        message: '리뷰를 찾을 수 없습니다.'
      });
    }

    await prisma.review.delete({
      where: { id }
    });

    res.json({
      success: true,
      message: '리뷰가 삭제되었습니다.'
    });

  } catch (error) {
    console.error('관리자 리뷰 삭제 오류:', error);
    res.status(500).json({
      error: 'Internal Server Error',
      message: '리뷰 삭제 중 오류가 발생했습니다.'
    });
  }
});

/**
 * GET /api/admin/users
 * 사용자 관리 목록
 */
router.get('/users', async (req, res) => {
  try {
    const {
      page = 1,
      limit = 20,
      search,
      sortBy = 'createdAt',
      sortOrder = 'desc'
    } = req.query;

    const offset = (parseInt(page) - 1) * parseInt(limit);

    // 검색 조건 구성
    let whereClause = {};

    if (search) {
      whereClause.OR = [
        { nickname: { contains: search, mode: 'insensitive' } },
        { email: { contains: search, mode: 'insensitive' } },
        { name: { contains: search, mode: 'insensitive' } }
      ];
    }

    // 정렬 조건
    const orderBy = {};
    orderBy[sortBy] = sortOrder;

    const [users, totalCount] = await Promise.all([
      prisma.user.findMany({
        where: whereClause,
        include: {
          reviews: {
            select: {
              id: true,
              rating: true,
              createdAt: true
            }
          }
        },
        orderBy,
        skip: offset,
        take: parseInt(limit)
      }),
      prisma.user.count({ where: whereClause })
    ]);

    const formattedUsers = users.map(user => ({
      id: user.id,
      tossId: user.tossId,
      nickname: user.nickname,
      email: user.email,
      name: user.name,
      phone: user.phone,
      reviewCount: user.reviews.length,
      lastReviewAt: user.reviews.length > 0 ?
        Math.max(...user.reviews.map(r => new Date(r.createdAt).getTime())) : null,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt
    }));

    res.json({
      success: true,
      data: formattedUsers,
      pagination: {
        page: parseInt(page),
        limit: parseInt(limit),
        total: totalCount,
        totalPages: Math.ceil(totalCount / parseInt(limit))
      }
    });

  } catch (error) {
    console.error('관리자 사용자 목록 조회 오류:', error);
    res.status(500).json({
      error: 'Internal Server Error',
      message: '사용자 목록을 불러오는 중 오류가 발생했습니다.'
    });
  }
});

module.exports = router;