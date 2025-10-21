
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model GameBusiness
 * 
 */
export type GameBusiness = $Result.DefaultSelection<Prisma.$GameBusinessPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Review
 * 
 */
export type Review = $Result.DefaultSelection<Prisma.$ReviewPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more GameBusinesses
 * const gameBusinesses = await prisma.gameBusiness.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more GameBusinesses
   * const gameBusinesses = await prisma.gameBusiness.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.gameBusiness`: Exposes CRUD operations for the **GameBusiness** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GameBusinesses
    * const gameBusinesses = await prisma.gameBusiness.findMany()
    * ```
    */
  get gameBusiness(): Prisma.GameBusinessDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.review`: Exposes CRUD operations for the **Review** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reviews
    * const reviews = await prisma.review.findMany()
    * ```
    */
  get review(): Prisma.ReviewDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.17.1
   * Query Engine version: 272a37d34178c2894197e17273bf937f25acdeac
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    GameBusiness: 'GameBusiness',
    User: 'User',
    Review: 'Review'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "gameBusiness" | "user" | "review"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      GameBusiness: {
        payload: Prisma.$GameBusinessPayload<ExtArgs>
        fields: Prisma.GameBusinessFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GameBusinessFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameBusinessPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GameBusinessFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameBusinessPayload>
          }
          findFirst: {
            args: Prisma.GameBusinessFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameBusinessPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GameBusinessFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameBusinessPayload>
          }
          findMany: {
            args: Prisma.GameBusinessFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameBusinessPayload>[]
          }
          create: {
            args: Prisma.GameBusinessCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameBusinessPayload>
          }
          createMany: {
            args: Prisma.GameBusinessCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GameBusinessCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameBusinessPayload>[]
          }
          delete: {
            args: Prisma.GameBusinessDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameBusinessPayload>
          }
          update: {
            args: Prisma.GameBusinessUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameBusinessPayload>
          }
          deleteMany: {
            args: Prisma.GameBusinessDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GameBusinessUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GameBusinessUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameBusinessPayload>[]
          }
          upsert: {
            args: Prisma.GameBusinessUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameBusinessPayload>
          }
          aggregate: {
            args: Prisma.GameBusinessAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGameBusiness>
          }
          groupBy: {
            args: Prisma.GameBusinessGroupByArgs<ExtArgs>
            result: $Utils.Optional<GameBusinessGroupByOutputType>[]
          }
          count: {
            args: Prisma.GameBusinessCountArgs<ExtArgs>
            result: $Utils.Optional<GameBusinessCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Review: {
        payload: Prisma.$ReviewPayload<ExtArgs>
        fields: Prisma.ReviewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReviewFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReviewFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findFirst: {
            args: Prisma.ReviewFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReviewFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findMany: {
            args: Prisma.ReviewFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          create: {
            args: Prisma.ReviewCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          createMany: {
            args: Prisma.ReviewCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReviewCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          delete: {
            args: Prisma.ReviewDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          update: {
            args: Prisma.ReviewUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          deleteMany: {
            args: Prisma.ReviewDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReviewUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReviewUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          upsert: {
            args: Prisma.ReviewUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          aggregate: {
            args: Prisma.ReviewAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReview>
          }
          groupBy: {
            args: Prisma.ReviewGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReviewGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReviewCountArgs<ExtArgs>
            result: $Utils.Optional<ReviewCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    gameBusiness?: GameBusinessOmit
    user?: UserOmit
    review?: ReviewOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type GameBusinessCountOutputType
   */

  export type GameBusinessCountOutputType = {
    reviews: number
  }

  export type GameBusinessCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reviews?: boolean | GameBusinessCountOutputTypeCountReviewsArgs
  }

  // Custom InputTypes
  /**
   * GameBusinessCountOutputType without action
   */
  export type GameBusinessCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameBusinessCountOutputType
     */
    select?: GameBusinessCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GameBusinessCountOutputType without action
   */
  export type GameBusinessCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    reviews: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reviews?: boolean | UserCountOutputTypeCountReviewsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }


  /**
   * Models
   */

  /**
   * Model GameBusiness
   */

  export type AggregateGameBusiness = {
    _count: GameBusinessCountAggregateOutputType | null
    _avg: GameBusinessAvgAggregateOutputType | null
    _sum: GameBusinessSumAggregateOutputType | null
    _min: GameBusinessMinAggregateOutputType | null
    _max: GameBusinessMaxAggregateOutputType | null
  }

  export type GameBusinessAvgAggregateOutputType = {
    id: number | null
    번호: number | null
  }

  export type GameBusinessSumAggregateOutputType = {
    id: number | null
    번호: number | null
  }

  export type GameBusinessMinAggregateOutputType = {
    id: number | null
    번호: number | null
    개방서비스명: string | null
    개방서비스아이디: string | null
    개방자치단체코드: string | null
    관리번호: string | null
    인허가일자: string | null
    인허가취소일자: string | null
    영업상태구분코드: string | null
    영업상태명: string | null
    상세영업상태코드: string | null
    상세영업상태명: string | null
    폐업일자: string | null
    휴업시작일자: string | null
    휴업종료일자: string | null
    재개업일자: string | null
    소재지전화: string | null
    소재지면적: string | null
    소재지우편번호: string | null
    소재지전체주소: string | null
    도로명전체주소: string | null
    도로명우편번호: string | null
    사업장명: string | null
    최종수정시점: string | null
    데이터갱신구분: string | null
    데이터갱신일자: string | null
    업태구분명: string | null
    좌표정보x: string | null
    좌표정보y: string | null
    문화체육업종명: string | null
    문화사업자구분명: string | null
    총층수: string | null
    주변환경명: string | null
    제작취급품목내용: string | null
    시설면적: string | null
    지상층수: string | null
    지하층수: string | null
    건물용도명: string | null
    통로너비: string | null
    조명시설조도: string | null
    노래방실수: string | null
    청소년실수: string | null
    비상계단여부: string | null
    비상구여부: string | null
    자동환기여부: string | null
    청소년실여부: string | null
    특수조명여부: string | null
    방음시설여부: string | null
    비디오재생기명: string | null
    조명시설유무: string | null
    음향시설여부: string | null
    편의시설여부: string | null
    소방시설여부: string | null
    총게임기수: string | null
    기존게임업외업종명: string | null
    제공게임물명: string | null
    공연장형태구분명: string | null
    품목명: string | null
    최초등록시점: string | null
    지역구분명: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GameBusinessMaxAggregateOutputType = {
    id: number | null
    번호: number | null
    개방서비스명: string | null
    개방서비스아이디: string | null
    개방자치단체코드: string | null
    관리번호: string | null
    인허가일자: string | null
    인허가취소일자: string | null
    영업상태구분코드: string | null
    영업상태명: string | null
    상세영업상태코드: string | null
    상세영업상태명: string | null
    폐업일자: string | null
    휴업시작일자: string | null
    휴업종료일자: string | null
    재개업일자: string | null
    소재지전화: string | null
    소재지면적: string | null
    소재지우편번호: string | null
    소재지전체주소: string | null
    도로명전체주소: string | null
    도로명우편번호: string | null
    사업장명: string | null
    최종수정시점: string | null
    데이터갱신구분: string | null
    데이터갱신일자: string | null
    업태구분명: string | null
    좌표정보x: string | null
    좌표정보y: string | null
    문화체육업종명: string | null
    문화사업자구분명: string | null
    총층수: string | null
    주변환경명: string | null
    제작취급품목내용: string | null
    시설면적: string | null
    지상층수: string | null
    지하층수: string | null
    건물용도명: string | null
    통로너비: string | null
    조명시설조도: string | null
    노래방실수: string | null
    청소년실수: string | null
    비상계단여부: string | null
    비상구여부: string | null
    자동환기여부: string | null
    청소년실여부: string | null
    특수조명여부: string | null
    방음시설여부: string | null
    비디오재생기명: string | null
    조명시설유무: string | null
    음향시설여부: string | null
    편의시설여부: string | null
    소방시설여부: string | null
    총게임기수: string | null
    기존게임업외업종명: string | null
    제공게임물명: string | null
    공연장형태구분명: string | null
    품목명: string | null
    최초등록시점: string | null
    지역구분명: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GameBusinessCountAggregateOutputType = {
    id: number
    번호: number
    개방서비스명: number
    개방서비스아이디: number
    개방자치단체코드: number
    관리번호: number
    인허가일자: number
    인허가취소일자: number
    영업상태구분코드: number
    영업상태명: number
    상세영업상태코드: number
    상세영업상태명: number
    폐업일자: number
    휴업시작일자: number
    휴업종료일자: number
    재개업일자: number
    소재지전화: number
    소재지면적: number
    소재지우편번호: number
    소재지전체주소: number
    도로명전체주소: number
    도로명우편번호: number
    사업장명: number
    최종수정시점: number
    데이터갱신구분: number
    데이터갱신일자: number
    업태구분명: number
    좌표정보x: number
    좌표정보y: number
    문화체육업종명: number
    문화사업자구분명: number
    총층수: number
    주변환경명: number
    제작취급품목내용: number
    시설면적: number
    지상층수: number
    지하층수: number
    건물용도명: number
    통로너비: number
    조명시설조도: number
    노래방실수: number
    청소년실수: number
    비상계단여부: number
    비상구여부: number
    자동환기여부: number
    청소년실여부: number
    특수조명여부: number
    방음시설여부: number
    비디오재생기명: number
    조명시설유무: number
    음향시설여부: number
    편의시설여부: number
    소방시설여부: number
    총게임기수: number
    기존게임업외업종명: number
    제공게임물명: number
    공연장형태구분명: number
    품목명: number
    최초등록시점: number
    지역구분명: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type GameBusinessAvgAggregateInputType = {
    id?: true
    번호?: true
  }

  export type GameBusinessSumAggregateInputType = {
    id?: true
    번호?: true
  }

  export type GameBusinessMinAggregateInputType = {
    id?: true
    번호?: true
    개방서비스명?: true
    개방서비스아이디?: true
    개방자치단체코드?: true
    관리번호?: true
    인허가일자?: true
    인허가취소일자?: true
    영업상태구분코드?: true
    영업상태명?: true
    상세영업상태코드?: true
    상세영업상태명?: true
    폐업일자?: true
    휴업시작일자?: true
    휴업종료일자?: true
    재개업일자?: true
    소재지전화?: true
    소재지면적?: true
    소재지우편번호?: true
    소재지전체주소?: true
    도로명전체주소?: true
    도로명우편번호?: true
    사업장명?: true
    최종수정시점?: true
    데이터갱신구분?: true
    데이터갱신일자?: true
    업태구분명?: true
    좌표정보x?: true
    좌표정보y?: true
    문화체육업종명?: true
    문화사업자구분명?: true
    총층수?: true
    주변환경명?: true
    제작취급품목내용?: true
    시설면적?: true
    지상층수?: true
    지하층수?: true
    건물용도명?: true
    통로너비?: true
    조명시설조도?: true
    노래방실수?: true
    청소년실수?: true
    비상계단여부?: true
    비상구여부?: true
    자동환기여부?: true
    청소년실여부?: true
    특수조명여부?: true
    방음시설여부?: true
    비디오재생기명?: true
    조명시설유무?: true
    음향시설여부?: true
    편의시설여부?: true
    소방시설여부?: true
    총게임기수?: true
    기존게임업외업종명?: true
    제공게임물명?: true
    공연장형태구분명?: true
    품목명?: true
    최초등록시점?: true
    지역구분명?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GameBusinessMaxAggregateInputType = {
    id?: true
    번호?: true
    개방서비스명?: true
    개방서비스아이디?: true
    개방자치단체코드?: true
    관리번호?: true
    인허가일자?: true
    인허가취소일자?: true
    영업상태구분코드?: true
    영업상태명?: true
    상세영업상태코드?: true
    상세영업상태명?: true
    폐업일자?: true
    휴업시작일자?: true
    휴업종료일자?: true
    재개업일자?: true
    소재지전화?: true
    소재지면적?: true
    소재지우편번호?: true
    소재지전체주소?: true
    도로명전체주소?: true
    도로명우편번호?: true
    사업장명?: true
    최종수정시점?: true
    데이터갱신구분?: true
    데이터갱신일자?: true
    업태구분명?: true
    좌표정보x?: true
    좌표정보y?: true
    문화체육업종명?: true
    문화사업자구분명?: true
    총층수?: true
    주변환경명?: true
    제작취급품목내용?: true
    시설면적?: true
    지상층수?: true
    지하층수?: true
    건물용도명?: true
    통로너비?: true
    조명시설조도?: true
    노래방실수?: true
    청소년실수?: true
    비상계단여부?: true
    비상구여부?: true
    자동환기여부?: true
    청소년실여부?: true
    특수조명여부?: true
    방음시설여부?: true
    비디오재생기명?: true
    조명시설유무?: true
    음향시설여부?: true
    편의시설여부?: true
    소방시설여부?: true
    총게임기수?: true
    기존게임업외업종명?: true
    제공게임물명?: true
    공연장형태구분명?: true
    품목명?: true
    최초등록시점?: true
    지역구분명?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GameBusinessCountAggregateInputType = {
    id?: true
    번호?: true
    개방서비스명?: true
    개방서비스아이디?: true
    개방자치단체코드?: true
    관리번호?: true
    인허가일자?: true
    인허가취소일자?: true
    영업상태구분코드?: true
    영업상태명?: true
    상세영업상태코드?: true
    상세영업상태명?: true
    폐업일자?: true
    휴업시작일자?: true
    휴업종료일자?: true
    재개업일자?: true
    소재지전화?: true
    소재지면적?: true
    소재지우편번호?: true
    소재지전체주소?: true
    도로명전체주소?: true
    도로명우편번호?: true
    사업장명?: true
    최종수정시점?: true
    데이터갱신구분?: true
    데이터갱신일자?: true
    업태구분명?: true
    좌표정보x?: true
    좌표정보y?: true
    문화체육업종명?: true
    문화사업자구분명?: true
    총층수?: true
    주변환경명?: true
    제작취급품목내용?: true
    시설면적?: true
    지상층수?: true
    지하층수?: true
    건물용도명?: true
    통로너비?: true
    조명시설조도?: true
    노래방실수?: true
    청소년실수?: true
    비상계단여부?: true
    비상구여부?: true
    자동환기여부?: true
    청소년실여부?: true
    특수조명여부?: true
    방음시설여부?: true
    비디오재생기명?: true
    조명시설유무?: true
    음향시설여부?: true
    편의시설여부?: true
    소방시설여부?: true
    총게임기수?: true
    기존게임업외업종명?: true
    제공게임물명?: true
    공연장형태구분명?: true
    품목명?: true
    최초등록시점?: true
    지역구분명?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type GameBusinessAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GameBusiness to aggregate.
     */
    where?: GameBusinessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameBusinesses to fetch.
     */
    orderBy?: GameBusinessOrderByWithRelationInput | GameBusinessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GameBusinessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameBusinesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameBusinesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GameBusinesses
    **/
    _count?: true | GameBusinessCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GameBusinessAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GameBusinessSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GameBusinessMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GameBusinessMaxAggregateInputType
  }

  export type GetGameBusinessAggregateType<T extends GameBusinessAggregateArgs> = {
        [P in keyof T & keyof AggregateGameBusiness]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGameBusiness[P]>
      : GetScalarType<T[P], AggregateGameBusiness[P]>
  }




  export type GameBusinessGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GameBusinessWhereInput
    orderBy?: GameBusinessOrderByWithAggregationInput | GameBusinessOrderByWithAggregationInput[]
    by: GameBusinessScalarFieldEnum[] | GameBusinessScalarFieldEnum
    having?: GameBusinessScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GameBusinessCountAggregateInputType | true
    _avg?: GameBusinessAvgAggregateInputType
    _sum?: GameBusinessSumAggregateInputType
    _min?: GameBusinessMinAggregateInputType
    _max?: GameBusinessMaxAggregateInputType
  }

  export type GameBusinessGroupByOutputType = {
    id: number
    번호: number | null
    개방서비스명: string | null
    개방서비스아이디: string | null
    개방자치단체코드: string | null
    관리번호: string | null
    인허가일자: string | null
    인허가취소일자: string | null
    영업상태구분코드: string | null
    영업상태명: string | null
    상세영업상태코드: string | null
    상세영업상태명: string | null
    폐업일자: string | null
    휴업시작일자: string | null
    휴업종료일자: string | null
    재개업일자: string | null
    소재지전화: string | null
    소재지면적: string | null
    소재지우편번호: string | null
    소재지전체주소: string | null
    도로명전체주소: string | null
    도로명우편번호: string | null
    사업장명: string | null
    최종수정시점: string | null
    데이터갱신구분: string | null
    데이터갱신일자: string | null
    업태구분명: string | null
    좌표정보x: string | null
    좌표정보y: string | null
    문화체육업종명: string | null
    문화사업자구분명: string | null
    총층수: string | null
    주변환경명: string | null
    제작취급품목내용: string | null
    시설면적: string | null
    지상층수: string | null
    지하층수: string | null
    건물용도명: string | null
    통로너비: string | null
    조명시설조도: string | null
    노래방실수: string | null
    청소년실수: string | null
    비상계단여부: string | null
    비상구여부: string | null
    자동환기여부: string | null
    청소년실여부: string | null
    특수조명여부: string | null
    방음시설여부: string | null
    비디오재생기명: string | null
    조명시설유무: string | null
    음향시설여부: string | null
    편의시설여부: string | null
    소방시설여부: string | null
    총게임기수: string | null
    기존게임업외업종명: string | null
    제공게임물명: string | null
    공연장형태구분명: string | null
    품목명: string | null
    최초등록시점: string | null
    지역구분명: string | null
    createdAt: Date
    updatedAt: Date
    _count: GameBusinessCountAggregateOutputType | null
    _avg: GameBusinessAvgAggregateOutputType | null
    _sum: GameBusinessSumAggregateOutputType | null
    _min: GameBusinessMinAggregateOutputType | null
    _max: GameBusinessMaxAggregateOutputType | null
  }

  type GetGameBusinessGroupByPayload<T extends GameBusinessGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GameBusinessGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GameBusinessGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GameBusinessGroupByOutputType[P]>
            : GetScalarType<T[P], GameBusinessGroupByOutputType[P]>
        }
      >
    >


  export type GameBusinessSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    번호?: boolean
    개방서비스명?: boolean
    개방서비스아이디?: boolean
    개방자치단체코드?: boolean
    관리번호?: boolean
    인허가일자?: boolean
    인허가취소일자?: boolean
    영업상태구분코드?: boolean
    영업상태명?: boolean
    상세영업상태코드?: boolean
    상세영업상태명?: boolean
    폐업일자?: boolean
    휴업시작일자?: boolean
    휴업종료일자?: boolean
    재개업일자?: boolean
    소재지전화?: boolean
    소재지면적?: boolean
    소재지우편번호?: boolean
    소재지전체주소?: boolean
    도로명전체주소?: boolean
    도로명우편번호?: boolean
    사업장명?: boolean
    최종수정시점?: boolean
    데이터갱신구분?: boolean
    데이터갱신일자?: boolean
    업태구분명?: boolean
    좌표정보x?: boolean
    좌표정보y?: boolean
    문화체육업종명?: boolean
    문화사업자구분명?: boolean
    총층수?: boolean
    주변환경명?: boolean
    제작취급품목내용?: boolean
    시설면적?: boolean
    지상층수?: boolean
    지하층수?: boolean
    건물용도명?: boolean
    통로너비?: boolean
    조명시설조도?: boolean
    노래방실수?: boolean
    청소년실수?: boolean
    비상계단여부?: boolean
    비상구여부?: boolean
    자동환기여부?: boolean
    청소년실여부?: boolean
    특수조명여부?: boolean
    방음시설여부?: boolean
    비디오재생기명?: boolean
    조명시설유무?: boolean
    음향시설여부?: boolean
    편의시설여부?: boolean
    소방시설여부?: boolean
    총게임기수?: boolean
    기존게임업외업종명?: boolean
    제공게임물명?: boolean
    공연장형태구분명?: boolean
    품목명?: boolean
    최초등록시점?: boolean
    지역구분명?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    reviews?: boolean | GameBusiness$reviewsArgs<ExtArgs>
    _count?: boolean | GameBusinessCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gameBusiness"]>

  export type GameBusinessSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    번호?: boolean
    개방서비스명?: boolean
    개방서비스아이디?: boolean
    개방자치단체코드?: boolean
    관리번호?: boolean
    인허가일자?: boolean
    인허가취소일자?: boolean
    영업상태구분코드?: boolean
    영업상태명?: boolean
    상세영업상태코드?: boolean
    상세영업상태명?: boolean
    폐업일자?: boolean
    휴업시작일자?: boolean
    휴업종료일자?: boolean
    재개업일자?: boolean
    소재지전화?: boolean
    소재지면적?: boolean
    소재지우편번호?: boolean
    소재지전체주소?: boolean
    도로명전체주소?: boolean
    도로명우편번호?: boolean
    사업장명?: boolean
    최종수정시점?: boolean
    데이터갱신구분?: boolean
    데이터갱신일자?: boolean
    업태구분명?: boolean
    좌표정보x?: boolean
    좌표정보y?: boolean
    문화체육업종명?: boolean
    문화사업자구분명?: boolean
    총층수?: boolean
    주변환경명?: boolean
    제작취급품목내용?: boolean
    시설면적?: boolean
    지상층수?: boolean
    지하층수?: boolean
    건물용도명?: boolean
    통로너비?: boolean
    조명시설조도?: boolean
    노래방실수?: boolean
    청소년실수?: boolean
    비상계단여부?: boolean
    비상구여부?: boolean
    자동환기여부?: boolean
    청소년실여부?: boolean
    특수조명여부?: boolean
    방음시설여부?: boolean
    비디오재생기명?: boolean
    조명시설유무?: boolean
    음향시설여부?: boolean
    편의시설여부?: boolean
    소방시설여부?: boolean
    총게임기수?: boolean
    기존게임업외업종명?: boolean
    제공게임물명?: boolean
    공연장형태구분명?: boolean
    품목명?: boolean
    최초등록시점?: boolean
    지역구분명?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["gameBusiness"]>

  export type GameBusinessSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    번호?: boolean
    개방서비스명?: boolean
    개방서비스아이디?: boolean
    개방자치단체코드?: boolean
    관리번호?: boolean
    인허가일자?: boolean
    인허가취소일자?: boolean
    영업상태구분코드?: boolean
    영업상태명?: boolean
    상세영업상태코드?: boolean
    상세영업상태명?: boolean
    폐업일자?: boolean
    휴업시작일자?: boolean
    휴업종료일자?: boolean
    재개업일자?: boolean
    소재지전화?: boolean
    소재지면적?: boolean
    소재지우편번호?: boolean
    소재지전체주소?: boolean
    도로명전체주소?: boolean
    도로명우편번호?: boolean
    사업장명?: boolean
    최종수정시점?: boolean
    데이터갱신구분?: boolean
    데이터갱신일자?: boolean
    업태구분명?: boolean
    좌표정보x?: boolean
    좌표정보y?: boolean
    문화체육업종명?: boolean
    문화사업자구분명?: boolean
    총층수?: boolean
    주변환경명?: boolean
    제작취급품목내용?: boolean
    시설면적?: boolean
    지상층수?: boolean
    지하층수?: boolean
    건물용도명?: boolean
    통로너비?: boolean
    조명시설조도?: boolean
    노래방실수?: boolean
    청소년실수?: boolean
    비상계단여부?: boolean
    비상구여부?: boolean
    자동환기여부?: boolean
    청소년실여부?: boolean
    특수조명여부?: boolean
    방음시설여부?: boolean
    비디오재생기명?: boolean
    조명시설유무?: boolean
    음향시설여부?: boolean
    편의시설여부?: boolean
    소방시설여부?: boolean
    총게임기수?: boolean
    기존게임업외업종명?: boolean
    제공게임물명?: boolean
    공연장형태구분명?: boolean
    품목명?: boolean
    최초등록시점?: boolean
    지역구분명?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["gameBusiness"]>

  export type GameBusinessSelectScalar = {
    id?: boolean
    번호?: boolean
    개방서비스명?: boolean
    개방서비스아이디?: boolean
    개방자치단체코드?: boolean
    관리번호?: boolean
    인허가일자?: boolean
    인허가취소일자?: boolean
    영업상태구분코드?: boolean
    영업상태명?: boolean
    상세영업상태코드?: boolean
    상세영업상태명?: boolean
    폐업일자?: boolean
    휴업시작일자?: boolean
    휴업종료일자?: boolean
    재개업일자?: boolean
    소재지전화?: boolean
    소재지면적?: boolean
    소재지우편번호?: boolean
    소재지전체주소?: boolean
    도로명전체주소?: boolean
    도로명우편번호?: boolean
    사업장명?: boolean
    최종수정시점?: boolean
    데이터갱신구분?: boolean
    데이터갱신일자?: boolean
    업태구분명?: boolean
    좌표정보x?: boolean
    좌표정보y?: boolean
    문화체육업종명?: boolean
    문화사업자구분명?: boolean
    총층수?: boolean
    주변환경명?: boolean
    제작취급품목내용?: boolean
    시설면적?: boolean
    지상층수?: boolean
    지하층수?: boolean
    건물용도명?: boolean
    통로너비?: boolean
    조명시설조도?: boolean
    노래방실수?: boolean
    청소년실수?: boolean
    비상계단여부?: boolean
    비상구여부?: boolean
    자동환기여부?: boolean
    청소년실여부?: boolean
    특수조명여부?: boolean
    방음시설여부?: boolean
    비디오재생기명?: boolean
    조명시설유무?: boolean
    음향시설여부?: boolean
    편의시설여부?: boolean
    소방시설여부?: boolean
    총게임기수?: boolean
    기존게임업외업종명?: boolean
    제공게임물명?: boolean
    공연장형태구분명?: boolean
    품목명?: boolean
    최초등록시점?: boolean
    지역구분명?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type GameBusinessOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "번호" | "개방서비스명" | "개방서비스아이디" | "개방자치단체코드" | "관리번호" | "인허가일자" | "인허가취소일자" | "영업상태구분코드" | "영업상태명" | "상세영업상태코드" | "상세영업상태명" | "폐업일자" | "휴업시작일자" | "휴업종료일자" | "재개업일자" | "소재지전화" | "소재지면적" | "소재지우편번호" | "소재지전체주소" | "도로명전체주소" | "도로명우편번호" | "사업장명" | "최종수정시점" | "데이터갱신구분" | "데이터갱신일자" | "업태구분명" | "좌표정보x" | "좌표정보y" | "문화체육업종명" | "문화사업자구분명" | "총층수" | "주변환경명" | "제작취급품목내용" | "시설면적" | "지상층수" | "지하층수" | "건물용도명" | "통로너비" | "조명시설조도" | "노래방실수" | "청소년실수" | "비상계단여부" | "비상구여부" | "자동환기여부" | "청소년실여부" | "특수조명여부" | "방음시설여부" | "비디오재생기명" | "조명시설유무" | "음향시설여부" | "편의시설여부" | "소방시설여부" | "총게임기수" | "기존게임업외업종명" | "제공게임물명" | "공연장형태구분명" | "품목명" | "최초등록시점" | "지역구분명" | "createdAt" | "updatedAt", ExtArgs["result"]["gameBusiness"]>
  export type GameBusinessInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reviews?: boolean | GameBusiness$reviewsArgs<ExtArgs>
    _count?: boolean | GameBusinessCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GameBusinessIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type GameBusinessIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $GameBusinessPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GameBusiness"
    objects: {
      reviews: Prisma.$ReviewPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      번호: number | null
      개방서비스명: string | null
      개방서비스아이디: string | null
      개방자치단체코드: string | null
      관리번호: string | null
      인허가일자: string | null
      인허가취소일자: string | null
      영업상태구분코드: string | null
      영업상태명: string | null
      상세영업상태코드: string | null
      상세영업상태명: string | null
      폐업일자: string | null
      휴업시작일자: string | null
      휴업종료일자: string | null
      재개업일자: string | null
      소재지전화: string | null
      소재지면적: string | null
      소재지우편번호: string | null
      소재지전체주소: string | null
      도로명전체주소: string | null
      도로명우편번호: string | null
      사업장명: string | null
      최종수정시점: string | null
      데이터갱신구분: string | null
      데이터갱신일자: string | null
      업태구분명: string | null
      좌표정보x: string | null
      좌표정보y: string | null
      문화체육업종명: string | null
      문화사업자구분명: string | null
      총층수: string | null
      주변환경명: string | null
      제작취급품목내용: string | null
      시설면적: string | null
      지상층수: string | null
      지하층수: string | null
      건물용도명: string | null
      통로너비: string | null
      조명시설조도: string | null
      노래방실수: string | null
      청소년실수: string | null
      비상계단여부: string | null
      비상구여부: string | null
      자동환기여부: string | null
      청소년실여부: string | null
      특수조명여부: string | null
      방음시설여부: string | null
      비디오재생기명: string | null
      조명시설유무: string | null
      음향시설여부: string | null
      편의시설여부: string | null
      소방시설여부: string | null
      총게임기수: string | null
      기존게임업외업종명: string | null
      제공게임물명: string | null
      공연장형태구분명: string | null
      품목명: string | null
      최초등록시점: string | null
      지역구분명: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["gameBusiness"]>
    composites: {}
  }

  type GameBusinessGetPayload<S extends boolean | null | undefined | GameBusinessDefaultArgs> = $Result.GetResult<Prisma.$GameBusinessPayload, S>

  type GameBusinessCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GameBusinessFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GameBusinessCountAggregateInputType | true
    }

  export interface GameBusinessDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GameBusiness'], meta: { name: 'GameBusiness' } }
    /**
     * Find zero or one GameBusiness that matches the filter.
     * @param {GameBusinessFindUniqueArgs} args - Arguments to find a GameBusiness
     * @example
     * // Get one GameBusiness
     * const gameBusiness = await prisma.gameBusiness.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GameBusinessFindUniqueArgs>(args: SelectSubset<T, GameBusinessFindUniqueArgs<ExtArgs>>): Prisma__GameBusinessClient<$Result.GetResult<Prisma.$GameBusinessPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GameBusiness that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GameBusinessFindUniqueOrThrowArgs} args - Arguments to find a GameBusiness
     * @example
     * // Get one GameBusiness
     * const gameBusiness = await prisma.gameBusiness.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GameBusinessFindUniqueOrThrowArgs>(args: SelectSubset<T, GameBusinessFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GameBusinessClient<$Result.GetResult<Prisma.$GameBusinessPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GameBusiness that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameBusinessFindFirstArgs} args - Arguments to find a GameBusiness
     * @example
     * // Get one GameBusiness
     * const gameBusiness = await prisma.gameBusiness.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GameBusinessFindFirstArgs>(args?: SelectSubset<T, GameBusinessFindFirstArgs<ExtArgs>>): Prisma__GameBusinessClient<$Result.GetResult<Prisma.$GameBusinessPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GameBusiness that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameBusinessFindFirstOrThrowArgs} args - Arguments to find a GameBusiness
     * @example
     * // Get one GameBusiness
     * const gameBusiness = await prisma.gameBusiness.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GameBusinessFindFirstOrThrowArgs>(args?: SelectSubset<T, GameBusinessFindFirstOrThrowArgs<ExtArgs>>): Prisma__GameBusinessClient<$Result.GetResult<Prisma.$GameBusinessPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GameBusinesses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameBusinessFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GameBusinesses
     * const gameBusinesses = await prisma.gameBusiness.findMany()
     * 
     * // Get first 10 GameBusinesses
     * const gameBusinesses = await prisma.gameBusiness.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gameBusinessWithIdOnly = await prisma.gameBusiness.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GameBusinessFindManyArgs>(args?: SelectSubset<T, GameBusinessFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameBusinessPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GameBusiness.
     * @param {GameBusinessCreateArgs} args - Arguments to create a GameBusiness.
     * @example
     * // Create one GameBusiness
     * const GameBusiness = await prisma.gameBusiness.create({
     *   data: {
     *     // ... data to create a GameBusiness
     *   }
     * })
     * 
     */
    create<T extends GameBusinessCreateArgs>(args: SelectSubset<T, GameBusinessCreateArgs<ExtArgs>>): Prisma__GameBusinessClient<$Result.GetResult<Prisma.$GameBusinessPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GameBusinesses.
     * @param {GameBusinessCreateManyArgs} args - Arguments to create many GameBusinesses.
     * @example
     * // Create many GameBusinesses
     * const gameBusiness = await prisma.gameBusiness.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GameBusinessCreateManyArgs>(args?: SelectSubset<T, GameBusinessCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GameBusinesses and returns the data saved in the database.
     * @param {GameBusinessCreateManyAndReturnArgs} args - Arguments to create many GameBusinesses.
     * @example
     * // Create many GameBusinesses
     * const gameBusiness = await prisma.gameBusiness.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GameBusinesses and only return the `id`
     * const gameBusinessWithIdOnly = await prisma.gameBusiness.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GameBusinessCreateManyAndReturnArgs>(args?: SelectSubset<T, GameBusinessCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameBusinessPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GameBusiness.
     * @param {GameBusinessDeleteArgs} args - Arguments to delete one GameBusiness.
     * @example
     * // Delete one GameBusiness
     * const GameBusiness = await prisma.gameBusiness.delete({
     *   where: {
     *     // ... filter to delete one GameBusiness
     *   }
     * })
     * 
     */
    delete<T extends GameBusinessDeleteArgs>(args: SelectSubset<T, GameBusinessDeleteArgs<ExtArgs>>): Prisma__GameBusinessClient<$Result.GetResult<Prisma.$GameBusinessPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GameBusiness.
     * @param {GameBusinessUpdateArgs} args - Arguments to update one GameBusiness.
     * @example
     * // Update one GameBusiness
     * const gameBusiness = await prisma.gameBusiness.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GameBusinessUpdateArgs>(args: SelectSubset<T, GameBusinessUpdateArgs<ExtArgs>>): Prisma__GameBusinessClient<$Result.GetResult<Prisma.$GameBusinessPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GameBusinesses.
     * @param {GameBusinessDeleteManyArgs} args - Arguments to filter GameBusinesses to delete.
     * @example
     * // Delete a few GameBusinesses
     * const { count } = await prisma.gameBusiness.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GameBusinessDeleteManyArgs>(args?: SelectSubset<T, GameBusinessDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GameBusinesses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameBusinessUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GameBusinesses
     * const gameBusiness = await prisma.gameBusiness.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GameBusinessUpdateManyArgs>(args: SelectSubset<T, GameBusinessUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GameBusinesses and returns the data updated in the database.
     * @param {GameBusinessUpdateManyAndReturnArgs} args - Arguments to update many GameBusinesses.
     * @example
     * // Update many GameBusinesses
     * const gameBusiness = await prisma.gameBusiness.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GameBusinesses and only return the `id`
     * const gameBusinessWithIdOnly = await prisma.gameBusiness.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GameBusinessUpdateManyAndReturnArgs>(args: SelectSubset<T, GameBusinessUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameBusinessPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GameBusiness.
     * @param {GameBusinessUpsertArgs} args - Arguments to update or create a GameBusiness.
     * @example
     * // Update or create a GameBusiness
     * const gameBusiness = await prisma.gameBusiness.upsert({
     *   create: {
     *     // ... data to create a GameBusiness
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GameBusiness we want to update
     *   }
     * })
     */
    upsert<T extends GameBusinessUpsertArgs>(args: SelectSubset<T, GameBusinessUpsertArgs<ExtArgs>>): Prisma__GameBusinessClient<$Result.GetResult<Prisma.$GameBusinessPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GameBusinesses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameBusinessCountArgs} args - Arguments to filter GameBusinesses to count.
     * @example
     * // Count the number of GameBusinesses
     * const count = await prisma.gameBusiness.count({
     *   where: {
     *     // ... the filter for the GameBusinesses we want to count
     *   }
     * })
    **/
    count<T extends GameBusinessCountArgs>(
      args?: Subset<T, GameBusinessCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GameBusinessCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GameBusiness.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameBusinessAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GameBusinessAggregateArgs>(args: Subset<T, GameBusinessAggregateArgs>): Prisma.PrismaPromise<GetGameBusinessAggregateType<T>>

    /**
     * Group by GameBusiness.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameBusinessGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GameBusinessGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GameBusinessGroupByArgs['orderBy'] }
        : { orderBy?: GameBusinessGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GameBusinessGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGameBusinessGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GameBusiness model
   */
  readonly fields: GameBusinessFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GameBusiness.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GameBusinessClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    reviews<T extends GameBusiness$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, GameBusiness$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the GameBusiness model
   */
  interface GameBusinessFieldRefs {
    readonly id: FieldRef<"GameBusiness", 'Int'>
    readonly 번호: FieldRef<"GameBusiness", 'Int'>
    readonly 개방서비스명: FieldRef<"GameBusiness", 'String'>
    readonly 개방서비스아이디: FieldRef<"GameBusiness", 'String'>
    readonly 개방자치단체코드: FieldRef<"GameBusiness", 'String'>
    readonly 관리번호: FieldRef<"GameBusiness", 'String'>
    readonly 인허가일자: FieldRef<"GameBusiness", 'String'>
    readonly 인허가취소일자: FieldRef<"GameBusiness", 'String'>
    readonly 영업상태구분코드: FieldRef<"GameBusiness", 'String'>
    readonly 영업상태명: FieldRef<"GameBusiness", 'String'>
    readonly 상세영업상태코드: FieldRef<"GameBusiness", 'String'>
    readonly 상세영업상태명: FieldRef<"GameBusiness", 'String'>
    readonly 폐업일자: FieldRef<"GameBusiness", 'String'>
    readonly 휴업시작일자: FieldRef<"GameBusiness", 'String'>
    readonly 휴업종료일자: FieldRef<"GameBusiness", 'String'>
    readonly 재개업일자: FieldRef<"GameBusiness", 'String'>
    readonly 소재지전화: FieldRef<"GameBusiness", 'String'>
    readonly 소재지면적: FieldRef<"GameBusiness", 'String'>
    readonly 소재지우편번호: FieldRef<"GameBusiness", 'String'>
    readonly 소재지전체주소: FieldRef<"GameBusiness", 'String'>
    readonly 도로명전체주소: FieldRef<"GameBusiness", 'String'>
    readonly 도로명우편번호: FieldRef<"GameBusiness", 'String'>
    readonly 사업장명: FieldRef<"GameBusiness", 'String'>
    readonly 최종수정시점: FieldRef<"GameBusiness", 'String'>
    readonly 데이터갱신구분: FieldRef<"GameBusiness", 'String'>
    readonly 데이터갱신일자: FieldRef<"GameBusiness", 'String'>
    readonly 업태구분명: FieldRef<"GameBusiness", 'String'>
    readonly 좌표정보x: FieldRef<"GameBusiness", 'String'>
    readonly 좌표정보y: FieldRef<"GameBusiness", 'String'>
    readonly 문화체육업종명: FieldRef<"GameBusiness", 'String'>
    readonly 문화사업자구분명: FieldRef<"GameBusiness", 'String'>
    readonly 총층수: FieldRef<"GameBusiness", 'String'>
    readonly 주변환경명: FieldRef<"GameBusiness", 'String'>
    readonly 제작취급품목내용: FieldRef<"GameBusiness", 'String'>
    readonly 시설면적: FieldRef<"GameBusiness", 'String'>
    readonly 지상층수: FieldRef<"GameBusiness", 'String'>
    readonly 지하층수: FieldRef<"GameBusiness", 'String'>
    readonly 건물용도명: FieldRef<"GameBusiness", 'String'>
    readonly 통로너비: FieldRef<"GameBusiness", 'String'>
    readonly 조명시설조도: FieldRef<"GameBusiness", 'String'>
    readonly 노래방실수: FieldRef<"GameBusiness", 'String'>
    readonly 청소년실수: FieldRef<"GameBusiness", 'String'>
    readonly 비상계단여부: FieldRef<"GameBusiness", 'String'>
    readonly 비상구여부: FieldRef<"GameBusiness", 'String'>
    readonly 자동환기여부: FieldRef<"GameBusiness", 'String'>
    readonly 청소년실여부: FieldRef<"GameBusiness", 'String'>
    readonly 특수조명여부: FieldRef<"GameBusiness", 'String'>
    readonly 방음시설여부: FieldRef<"GameBusiness", 'String'>
    readonly 비디오재생기명: FieldRef<"GameBusiness", 'String'>
    readonly 조명시설유무: FieldRef<"GameBusiness", 'String'>
    readonly 음향시설여부: FieldRef<"GameBusiness", 'String'>
    readonly 편의시설여부: FieldRef<"GameBusiness", 'String'>
    readonly 소방시설여부: FieldRef<"GameBusiness", 'String'>
    readonly 총게임기수: FieldRef<"GameBusiness", 'String'>
    readonly 기존게임업외업종명: FieldRef<"GameBusiness", 'String'>
    readonly 제공게임물명: FieldRef<"GameBusiness", 'String'>
    readonly 공연장형태구분명: FieldRef<"GameBusiness", 'String'>
    readonly 품목명: FieldRef<"GameBusiness", 'String'>
    readonly 최초등록시점: FieldRef<"GameBusiness", 'String'>
    readonly 지역구분명: FieldRef<"GameBusiness", 'String'>
    readonly createdAt: FieldRef<"GameBusiness", 'DateTime'>
    readonly updatedAt: FieldRef<"GameBusiness", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * GameBusiness findUnique
   */
  export type GameBusinessFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameBusiness
     */
    select?: GameBusinessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameBusiness
     */
    omit?: GameBusinessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameBusinessInclude<ExtArgs> | null
    /**
     * Filter, which GameBusiness to fetch.
     */
    where: GameBusinessWhereUniqueInput
  }

  /**
   * GameBusiness findUniqueOrThrow
   */
  export type GameBusinessFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameBusiness
     */
    select?: GameBusinessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameBusiness
     */
    omit?: GameBusinessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameBusinessInclude<ExtArgs> | null
    /**
     * Filter, which GameBusiness to fetch.
     */
    where: GameBusinessWhereUniqueInput
  }

  /**
   * GameBusiness findFirst
   */
  export type GameBusinessFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameBusiness
     */
    select?: GameBusinessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameBusiness
     */
    omit?: GameBusinessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameBusinessInclude<ExtArgs> | null
    /**
     * Filter, which GameBusiness to fetch.
     */
    where?: GameBusinessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameBusinesses to fetch.
     */
    orderBy?: GameBusinessOrderByWithRelationInput | GameBusinessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GameBusinesses.
     */
    cursor?: GameBusinessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameBusinesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameBusinesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GameBusinesses.
     */
    distinct?: GameBusinessScalarFieldEnum | GameBusinessScalarFieldEnum[]
  }

  /**
   * GameBusiness findFirstOrThrow
   */
  export type GameBusinessFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameBusiness
     */
    select?: GameBusinessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameBusiness
     */
    omit?: GameBusinessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameBusinessInclude<ExtArgs> | null
    /**
     * Filter, which GameBusiness to fetch.
     */
    where?: GameBusinessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameBusinesses to fetch.
     */
    orderBy?: GameBusinessOrderByWithRelationInput | GameBusinessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GameBusinesses.
     */
    cursor?: GameBusinessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameBusinesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameBusinesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GameBusinesses.
     */
    distinct?: GameBusinessScalarFieldEnum | GameBusinessScalarFieldEnum[]
  }

  /**
   * GameBusiness findMany
   */
  export type GameBusinessFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameBusiness
     */
    select?: GameBusinessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameBusiness
     */
    omit?: GameBusinessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameBusinessInclude<ExtArgs> | null
    /**
     * Filter, which GameBusinesses to fetch.
     */
    where?: GameBusinessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameBusinesses to fetch.
     */
    orderBy?: GameBusinessOrderByWithRelationInput | GameBusinessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GameBusinesses.
     */
    cursor?: GameBusinessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameBusinesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameBusinesses.
     */
    skip?: number
    distinct?: GameBusinessScalarFieldEnum | GameBusinessScalarFieldEnum[]
  }

  /**
   * GameBusiness create
   */
  export type GameBusinessCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameBusiness
     */
    select?: GameBusinessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameBusiness
     */
    omit?: GameBusinessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameBusinessInclude<ExtArgs> | null
    /**
     * The data needed to create a GameBusiness.
     */
    data: XOR<GameBusinessCreateInput, GameBusinessUncheckedCreateInput>
  }

  /**
   * GameBusiness createMany
   */
  export type GameBusinessCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GameBusinesses.
     */
    data: GameBusinessCreateManyInput | GameBusinessCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GameBusiness createManyAndReturn
   */
  export type GameBusinessCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameBusiness
     */
    select?: GameBusinessSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GameBusiness
     */
    omit?: GameBusinessOmit<ExtArgs> | null
    /**
     * The data used to create many GameBusinesses.
     */
    data: GameBusinessCreateManyInput | GameBusinessCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GameBusiness update
   */
  export type GameBusinessUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameBusiness
     */
    select?: GameBusinessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameBusiness
     */
    omit?: GameBusinessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameBusinessInclude<ExtArgs> | null
    /**
     * The data needed to update a GameBusiness.
     */
    data: XOR<GameBusinessUpdateInput, GameBusinessUncheckedUpdateInput>
    /**
     * Choose, which GameBusiness to update.
     */
    where: GameBusinessWhereUniqueInput
  }

  /**
   * GameBusiness updateMany
   */
  export type GameBusinessUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GameBusinesses.
     */
    data: XOR<GameBusinessUpdateManyMutationInput, GameBusinessUncheckedUpdateManyInput>
    /**
     * Filter which GameBusinesses to update
     */
    where?: GameBusinessWhereInput
    /**
     * Limit how many GameBusinesses to update.
     */
    limit?: number
  }

  /**
   * GameBusiness updateManyAndReturn
   */
  export type GameBusinessUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameBusiness
     */
    select?: GameBusinessSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GameBusiness
     */
    omit?: GameBusinessOmit<ExtArgs> | null
    /**
     * The data used to update GameBusinesses.
     */
    data: XOR<GameBusinessUpdateManyMutationInput, GameBusinessUncheckedUpdateManyInput>
    /**
     * Filter which GameBusinesses to update
     */
    where?: GameBusinessWhereInput
    /**
     * Limit how many GameBusinesses to update.
     */
    limit?: number
  }

  /**
   * GameBusiness upsert
   */
  export type GameBusinessUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameBusiness
     */
    select?: GameBusinessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameBusiness
     */
    omit?: GameBusinessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameBusinessInclude<ExtArgs> | null
    /**
     * The filter to search for the GameBusiness to update in case it exists.
     */
    where: GameBusinessWhereUniqueInput
    /**
     * In case the GameBusiness found by the `where` argument doesn't exist, create a new GameBusiness with this data.
     */
    create: XOR<GameBusinessCreateInput, GameBusinessUncheckedCreateInput>
    /**
     * In case the GameBusiness was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GameBusinessUpdateInput, GameBusinessUncheckedUpdateInput>
  }

  /**
   * GameBusiness delete
   */
  export type GameBusinessDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameBusiness
     */
    select?: GameBusinessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameBusiness
     */
    omit?: GameBusinessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameBusinessInclude<ExtArgs> | null
    /**
     * Filter which GameBusiness to delete.
     */
    where: GameBusinessWhereUniqueInput
  }

  /**
   * GameBusiness deleteMany
   */
  export type GameBusinessDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GameBusinesses to delete
     */
    where?: GameBusinessWhereInput
    /**
     * Limit how many GameBusinesses to delete.
     */
    limit?: number
  }

  /**
   * GameBusiness.reviews
   */
  export type GameBusiness$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * GameBusiness without action
   */
  export type GameBusinessDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameBusiness
     */
    select?: GameBusinessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameBusiness
     */
    omit?: GameBusinessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameBusinessInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    tossId: string | null
    nickname: string | null
    email: string | null
    avatar: string | null
    name: string | null
    phone: string | null
    birthday: string | null
    gender: string | null
    ci: string | null
    di: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    tossId: string | null
    nickname: string | null
    email: string | null
    avatar: string | null
    name: string | null
    phone: string | null
    birthday: string | null
    gender: string | null
    ci: string | null
    di: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    tossId: number
    nickname: number
    email: number
    avatar: number
    name: number
    phone: number
    birthday: number
    gender: number
    ci: number
    di: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    tossId?: true
    nickname?: true
    email?: true
    avatar?: true
    name?: true
    phone?: true
    birthday?: true
    gender?: true
    ci?: true
    di?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    tossId?: true
    nickname?: true
    email?: true
    avatar?: true
    name?: true
    phone?: true
    birthday?: true
    gender?: true
    ci?: true
    di?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    tossId?: true
    nickname?: true
    email?: true
    avatar?: true
    name?: true
    phone?: true
    birthday?: true
    gender?: true
    ci?: true
    di?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    tossId: string | null
    nickname: string | null
    email: string | null
    avatar: string | null
    name: string | null
    phone: string | null
    birthday: string | null
    gender: string | null
    ci: string | null
    di: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tossId?: boolean
    nickname?: boolean
    email?: boolean
    avatar?: boolean
    name?: boolean
    phone?: boolean
    birthday?: boolean
    gender?: boolean
    ci?: boolean
    di?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    reviews?: boolean | User$reviewsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tossId?: boolean
    nickname?: boolean
    email?: boolean
    avatar?: boolean
    name?: boolean
    phone?: boolean
    birthday?: boolean
    gender?: boolean
    ci?: boolean
    di?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tossId?: boolean
    nickname?: boolean
    email?: boolean
    avatar?: boolean
    name?: boolean
    phone?: boolean
    birthday?: boolean
    gender?: boolean
    ci?: boolean
    di?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    tossId?: boolean
    nickname?: boolean
    email?: boolean
    avatar?: boolean
    name?: boolean
    phone?: boolean
    birthday?: boolean
    gender?: boolean
    ci?: boolean
    di?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tossId" | "nickname" | "email" | "avatar" | "name" | "phone" | "birthday" | "gender" | "ci" | "di" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reviews?: boolean | User$reviewsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      reviews: Prisma.$ReviewPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tossId: string | null
      nickname: string | null
      email: string | null
      avatar: string | null
      name: string | null
      phone: string | null
      birthday: string | null
      gender: string | null
      ci: string | null
      di: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    reviews<T extends User$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, User$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly tossId: FieldRef<"User", 'String'>
    readonly nickname: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly avatar: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly birthday: FieldRef<"User", 'String'>
    readonly gender: FieldRef<"User", 'String'>
    readonly ci: FieldRef<"User", 'String'>
    readonly di: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.reviews
   */
  export type User$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Review
   */

  export type AggregateReview = {
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  export type ReviewAvgAggregateOutputType = {
    storeId: number | null
    rating: number | null
  }

  export type ReviewSumAggregateOutputType = {
    storeId: number | null
    rating: number | null
  }

  export type ReviewMinAggregateOutputType = {
    id: string | null
    storeId: number | null
    rating: number | null
    content: string | null
    userId: string | null
    userName: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReviewMaxAggregateOutputType = {
    id: string | null
    storeId: number | null
    rating: number | null
    content: string | null
    userId: string | null
    userName: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReviewCountAggregateOutputType = {
    id: number
    storeId: number
    rating: number
    content: number
    images: number
    tags: number
    userId: number
    userName: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ReviewAvgAggregateInputType = {
    storeId?: true
    rating?: true
  }

  export type ReviewSumAggregateInputType = {
    storeId?: true
    rating?: true
  }

  export type ReviewMinAggregateInputType = {
    id?: true
    storeId?: true
    rating?: true
    content?: true
    userId?: true
    userName?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReviewMaxAggregateInputType = {
    id?: true
    storeId?: true
    rating?: true
    content?: true
    userId?: true
    userName?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReviewCountAggregateInputType = {
    id?: true
    storeId?: true
    rating?: true
    content?: true
    images?: true
    tags?: true
    userId?: true
    userName?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ReviewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Review to aggregate.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reviews
    **/
    _count?: true | ReviewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReviewAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReviewSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReviewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReviewMaxAggregateInputType
  }

  export type GetReviewAggregateType<T extends ReviewAggregateArgs> = {
        [P in keyof T & keyof AggregateReview]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReview[P]>
      : GetScalarType<T[P], AggregateReview[P]>
  }




  export type ReviewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithAggregationInput | ReviewOrderByWithAggregationInput[]
    by: ReviewScalarFieldEnum[] | ReviewScalarFieldEnum
    having?: ReviewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReviewCountAggregateInputType | true
    _avg?: ReviewAvgAggregateInputType
    _sum?: ReviewSumAggregateInputType
    _min?: ReviewMinAggregateInputType
    _max?: ReviewMaxAggregateInputType
  }

  export type ReviewGroupByOutputType = {
    id: string
    storeId: number
    rating: number
    content: string
    images: string[]
    tags: string[]
    userId: string | null
    userName: string
    createdAt: Date
    updatedAt: Date
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  type GetReviewGroupByPayload<T extends ReviewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReviewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReviewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReviewGroupByOutputType[P]>
            : GetScalarType<T[P], ReviewGroupByOutputType[P]>
        }
      >
    >


  export type ReviewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    storeId?: boolean
    rating?: boolean
    content?: boolean
    images?: boolean
    tags?: boolean
    userId?: boolean
    userName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    store?: boolean | GameBusinessDefaultArgs<ExtArgs>
    user?: boolean | Review$userArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    storeId?: boolean
    rating?: boolean
    content?: boolean
    images?: boolean
    tags?: boolean
    userId?: boolean
    userName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    store?: boolean | GameBusinessDefaultArgs<ExtArgs>
    user?: boolean | Review$userArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    storeId?: boolean
    rating?: boolean
    content?: boolean
    images?: boolean
    tags?: boolean
    userId?: boolean
    userName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    store?: boolean | GameBusinessDefaultArgs<ExtArgs>
    user?: boolean | Review$userArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectScalar = {
    id?: boolean
    storeId?: boolean
    rating?: boolean
    content?: boolean
    images?: boolean
    tags?: boolean
    userId?: boolean
    userName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ReviewOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "storeId" | "rating" | "content" | "images" | "tags" | "userId" | "userName" | "createdAt" | "updatedAt", ExtArgs["result"]["review"]>
  export type ReviewInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    store?: boolean | GameBusinessDefaultArgs<ExtArgs>
    user?: boolean | Review$userArgs<ExtArgs>
  }
  export type ReviewIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    store?: boolean | GameBusinessDefaultArgs<ExtArgs>
    user?: boolean | Review$userArgs<ExtArgs>
  }
  export type ReviewIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    store?: boolean | GameBusinessDefaultArgs<ExtArgs>
    user?: boolean | Review$userArgs<ExtArgs>
  }

  export type $ReviewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Review"
    objects: {
      store: Prisma.$GameBusinessPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      storeId: number
      rating: number
      content: string
      images: string[]
      tags: string[]
      userId: string | null
      userName: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["review"]>
    composites: {}
  }

  type ReviewGetPayload<S extends boolean | null | undefined | ReviewDefaultArgs> = $Result.GetResult<Prisma.$ReviewPayload, S>

  type ReviewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReviewFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReviewCountAggregateInputType | true
    }

  export interface ReviewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Review'], meta: { name: 'Review' } }
    /**
     * Find zero or one Review that matches the filter.
     * @param {ReviewFindUniqueArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReviewFindUniqueArgs>(args: SelectSubset<T, ReviewFindUniqueArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Review that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReviewFindUniqueOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReviewFindUniqueOrThrowArgs>(args: SelectSubset<T, ReviewFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReviewFindFirstArgs>(args?: SelectSubset<T, ReviewFindFirstArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReviewFindFirstOrThrowArgs>(args?: SelectSubset<T, ReviewFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reviews
     * const reviews = await prisma.review.findMany()
     * 
     * // Get first 10 Reviews
     * const reviews = await prisma.review.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reviewWithIdOnly = await prisma.review.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReviewFindManyArgs>(args?: SelectSubset<T, ReviewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Review.
     * @param {ReviewCreateArgs} args - Arguments to create a Review.
     * @example
     * // Create one Review
     * const Review = await prisma.review.create({
     *   data: {
     *     // ... data to create a Review
     *   }
     * })
     * 
     */
    create<T extends ReviewCreateArgs>(args: SelectSubset<T, ReviewCreateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reviews.
     * @param {ReviewCreateManyArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReviewCreateManyArgs>(args?: SelectSubset<T, ReviewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reviews and returns the data saved in the database.
     * @param {ReviewCreateManyAndReturnArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reviews and only return the `id`
     * const reviewWithIdOnly = await prisma.review.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReviewCreateManyAndReturnArgs>(args?: SelectSubset<T, ReviewCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Review.
     * @param {ReviewDeleteArgs} args - Arguments to delete one Review.
     * @example
     * // Delete one Review
     * const Review = await prisma.review.delete({
     *   where: {
     *     // ... filter to delete one Review
     *   }
     * })
     * 
     */
    delete<T extends ReviewDeleteArgs>(args: SelectSubset<T, ReviewDeleteArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Review.
     * @param {ReviewUpdateArgs} args - Arguments to update one Review.
     * @example
     * // Update one Review
     * const review = await prisma.review.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReviewUpdateArgs>(args: SelectSubset<T, ReviewUpdateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reviews.
     * @param {ReviewDeleteManyArgs} args - Arguments to filter Reviews to delete.
     * @example
     * // Delete a few Reviews
     * const { count } = await prisma.review.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReviewDeleteManyArgs>(args?: SelectSubset<T, ReviewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReviewUpdateManyArgs>(args: SelectSubset<T, ReviewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews and returns the data updated in the database.
     * @param {ReviewUpdateManyAndReturnArgs} args - Arguments to update many Reviews.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reviews and only return the `id`
     * const reviewWithIdOnly = await prisma.review.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ReviewUpdateManyAndReturnArgs>(args: SelectSubset<T, ReviewUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Review.
     * @param {ReviewUpsertArgs} args - Arguments to update or create a Review.
     * @example
     * // Update or create a Review
     * const review = await prisma.review.upsert({
     *   create: {
     *     // ... data to create a Review
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Review we want to update
     *   }
     * })
     */
    upsert<T extends ReviewUpsertArgs>(args: SelectSubset<T, ReviewUpsertArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewCountArgs} args - Arguments to filter Reviews to count.
     * @example
     * // Count the number of Reviews
     * const count = await prisma.review.count({
     *   where: {
     *     // ... the filter for the Reviews we want to count
     *   }
     * })
    **/
    count<T extends ReviewCountArgs>(
      args?: Subset<T, ReviewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReviewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReviewAggregateArgs>(args: Subset<T, ReviewAggregateArgs>): Prisma.PrismaPromise<GetReviewAggregateType<T>>

    /**
     * Group by Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReviewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReviewGroupByArgs['orderBy'] }
        : { orderBy?: ReviewGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReviewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Review model
   */
  readonly fields: ReviewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Review.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReviewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    store<T extends GameBusinessDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GameBusinessDefaultArgs<ExtArgs>>): Prisma__GameBusinessClient<$Result.GetResult<Prisma.$GameBusinessPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends Review$userArgs<ExtArgs> = {}>(args?: Subset<T, Review$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Review model
   */
  interface ReviewFieldRefs {
    readonly id: FieldRef<"Review", 'String'>
    readonly storeId: FieldRef<"Review", 'Int'>
    readonly rating: FieldRef<"Review", 'Int'>
    readonly content: FieldRef<"Review", 'String'>
    readonly images: FieldRef<"Review", 'String[]'>
    readonly tags: FieldRef<"Review", 'String[]'>
    readonly userId: FieldRef<"Review", 'String'>
    readonly userName: FieldRef<"Review", 'String'>
    readonly createdAt: FieldRef<"Review", 'DateTime'>
    readonly updatedAt: FieldRef<"Review", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Review findUnique
   */
  export type ReviewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findUniqueOrThrow
   */
  export type ReviewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findFirst
   */
  export type ReviewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findFirstOrThrow
   */
  export type ReviewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findMany
   */
  export type ReviewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review create
   */
  export type ReviewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to create a Review.
     */
    data: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
  }

  /**
   * Review createMany
   */
  export type ReviewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reviews.
     */
    data: ReviewCreateManyInput | ReviewCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Review createManyAndReturn
   */
  export type ReviewCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * The data used to create many Reviews.
     */
    data: ReviewCreateManyInput | ReviewCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Review update
   */
  export type ReviewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to update a Review.
     */
    data: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
    /**
     * Choose, which Review to update.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review updateMany
   */
  export type ReviewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to update.
     */
    limit?: number
  }

  /**
   * Review updateManyAndReturn
   */
  export type ReviewUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Review upsert
   */
  export type ReviewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The filter to search for the Review to update in case it exists.
     */
    where: ReviewWhereUniqueInput
    /**
     * In case the Review found by the `where` argument doesn't exist, create a new Review with this data.
     */
    create: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
    /**
     * In case the Review was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
  }

  /**
   * Review delete
   */
  export type ReviewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter which Review to delete.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review deleteMany
   */
  export type ReviewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reviews to delete
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to delete.
     */
    limit?: number
  }

  /**
   * Review.user
   */
  export type Review$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Review without action
   */
  export type ReviewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const GameBusinessScalarFieldEnum: {
    id: 'id',
    번호: '번호',
    개방서비스명: '개방서비스명',
    개방서비스아이디: '개방서비스아이디',
    개방자치단체코드: '개방자치단체코드',
    관리번호: '관리번호',
    인허가일자: '인허가일자',
    인허가취소일자: '인허가취소일자',
    영업상태구분코드: '영업상태구분코드',
    영업상태명: '영업상태명',
    상세영업상태코드: '상세영업상태코드',
    상세영업상태명: '상세영업상태명',
    폐업일자: '폐업일자',
    휴업시작일자: '휴업시작일자',
    휴업종료일자: '휴업종료일자',
    재개업일자: '재개업일자',
    소재지전화: '소재지전화',
    소재지면적: '소재지면적',
    소재지우편번호: '소재지우편번호',
    소재지전체주소: '소재지전체주소',
    도로명전체주소: '도로명전체주소',
    도로명우편번호: '도로명우편번호',
    사업장명: '사업장명',
    최종수정시점: '최종수정시점',
    데이터갱신구분: '데이터갱신구분',
    데이터갱신일자: '데이터갱신일자',
    업태구분명: '업태구분명',
    좌표정보x: '좌표정보x',
    좌표정보y: '좌표정보y',
    문화체육업종명: '문화체육업종명',
    문화사업자구분명: '문화사업자구분명',
    총층수: '총층수',
    주변환경명: '주변환경명',
    제작취급품목내용: '제작취급품목내용',
    시설면적: '시설면적',
    지상층수: '지상층수',
    지하층수: '지하층수',
    건물용도명: '건물용도명',
    통로너비: '통로너비',
    조명시설조도: '조명시설조도',
    노래방실수: '노래방실수',
    청소년실수: '청소년실수',
    비상계단여부: '비상계단여부',
    비상구여부: '비상구여부',
    자동환기여부: '자동환기여부',
    청소년실여부: '청소년실여부',
    특수조명여부: '특수조명여부',
    방음시설여부: '방음시설여부',
    비디오재생기명: '비디오재생기명',
    조명시설유무: '조명시설유무',
    음향시설여부: '음향시설여부',
    편의시설여부: '편의시설여부',
    소방시설여부: '소방시설여부',
    총게임기수: '총게임기수',
    기존게임업외업종명: '기존게임업외업종명',
    제공게임물명: '제공게임물명',
    공연장형태구분명: '공연장형태구분명',
    품목명: '품목명',
    최초등록시점: '최초등록시점',
    지역구분명: '지역구분명',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type GameBusinessScalarFieldEnum = (typeof GameBusinessScalarFieldEnum)[keyof typeof GameBusinessScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    tossId: 'tossId',
    nickname: 'nickname',
    email: 'email',
    avatar: 'avatar',
    name: 'name',
    phone: 'phone',
    birthday: 'birthday',
    gender: 'gender',
    ci: 'ci',
    di: 'di',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ReviewScalarFieldEnum: {
    id: 'id',
    storeId: 'storeId',
    rating: 'rating',
    content: 'content',
    images: 'images',
    tags: 'tags',
    userId: 'userId',
    userName: 'userName',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ReviewScalarFieldEnum = (typeof ReviewScalarFieldEnum)[keyof typeof ReviewScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type GameBusinessWhereInput = {
    AND?: GameBusinessWhereInput | GameBusinessWhereInput[]
    OR?: GameBusinessWhereInput[]
    NOT?: GameBusinessWhereInput | GameBusinessWhereInput[]
    id?: IntFilter<"GameBusiness"> | number
    번호?: IntNullableFilter<"GameBusiness"> | number | null
    개방서비스명?: StringNullableFilter<"GameBusiness"> | string | null
    개방서비스아이디?: StringNullableFilter<"GameBusiness"> | string | null
    개방자치단체코드?: StringNullableFilter<"GameBusiness"> | string | null
    관리번호?: StringNullableFilter<"GameBusiness"> | string | null
    인허가일자?: StringNullableFilter<"GameBusiness"> | string | null
    인허가취소일자?: StringNullableFilter<"GameBusiness"> | string | null
    영업상태구분코드?: StringNullableFilter<"GameBusiness"> | string | null
    영업상태명?: StringNullableFilter<"GameBusiness"> | string | null
    상세영업상태코드?: StringNullableFilter<"GameBusiness"> | string | null
    상세영업상태명?: StringNullableFilter<"GameBusiness"> | string | null
    폐업일자?: StringNullableFilter<"GameBusiness"> | string | null
    휴업시작일자?: StringNullableFilter<"GameBusiness"> | string | null
    휴업종료일자?: StringNullableFilter<"GameBusiness"> | string | null
    재개업일자?: StringNullableFilter<"GameBusiness"> | string | null
    소재지전화?: StringNullableFilter<"GameBusiness"> | string | null
    소재지면적?: StringNullableFilter<"GameBusiness"> | string | null
    소재지우편번호?: StringNullableFilter<"GameBusiness"> | string | null
    소재지전체주소?: StringNullableFilter<"GameBusiness"> | string | null
    도로명전체주소?: StringNullableFilter<"GameBusiness"> | string | null
    도로명우편번호?: StringNullableFilter<"GameBusiness"> | string | null
    사업장명?: StringNullableFilter<"GameBusiness"> | string | null
    최종수정시점?: StringNullableFilter<"GameBusiness"> | string | null
    데이터갱신구분?: StringNullableFilter<"GameBusiness"> | string | null
    데이터갱신일자?: StringNullableFilter<"GameBusiness"> | string | null
    업태구분명?: StringNullableFilter<"GameBusiness"> | string | null
    좌표정보x?: StringNullableFilter<"GameBusiness"> | string | null
    좌표정보y?: StringNullableFilter<"GameBusiness"> | string | null
    문화체육업종명?: StringNullableFilter<"GameBusiness"> | string | null
    문화사업자구분명?: StringNullableFilter<"GameBusiness"> | string | null
    총층수?: StringNullableFilter<"GameBusiness"> | string | null
    주변환경명?: StringNullableFilter<"GameBusiness"> | string | null
    제작취급품목내용?: StringNullableFilter<"GameBusiness"> | string | null
    시설면적?: StringNullableFilter<"GameBusiness"> | string | null
    지상층수?: StringNullableFilter<"GameBusiness"> | string | null
    지하층수?: StringNullableFilter<"GameBusiness"> | string | null
    건물용도명?: StringNullableFilter<"GameBusiness"> | string | null
    통로너비?: StringNullableFilter<"GameBusiness"> | string | null
    조명시설조도?: StringNullableFilter<"GameBusiness"> | string | null
    노래방실수?: StringNullableFilter<"GameBusiness"> | string | null
    청소년실수?: StringNullableFilter<"GameBusiness"> | string | null
    비상계단여부?: StringNullableFilter<"GameBusiness"> | string | null
    비상구여부?: StringNullableFilter<"GameBusiness"> | string | null
    자동환기여부?: StringNullableFilter<"GameBusiness"> | string | null
    청소년실여부?: StringNullableFilter<"GameBusiness"> | string | null
    특수조명여부?: StringNullableFilter<"GameBusiness"> | string | null
    방음시설여부?: StringNullableFilter<"GameBusiness"> | string | null
    비디오재생기명?: StringNullableFilter<"GameBusiness"> | string | null
    조명시설유무?: StringNullableFilter<"GameBusiness"> | string | null
    음향시설여부?: StringNullableFilter<"GameBusiness"> | string | null
    편의시설여부?: StringNullableFilter<"GameBusiness"> | string | null
    소방시설여부?: StringNullableFilter<"GameBusiness"> | string | null
    총게임기수?: StringNullableFilter<"GameBusiness"> | string | null
    기존게임업외업종명?: StringNullableFilter<"GameBusiness"> | string | null
    제공게임물명?: StringNullableFilter<"GameBusiness"> | string | null
    공연장형태구분명?: StringNullableFilter<"GameBusiness"> | string | null
    품목명?: StringNullableFilter<"GameBusiness"> | string | null
    최초등록시점?: StringNullableFilter<"GameBusiness"> | string | null
    지역구분명?: StringNullableFilter<"GameBusiness"> | string | null
    createdAt?: DateTimeFilter<"GameBusiness"> | Date | string
    updatedAt?: DateTimeFilter<"GameBusiness"> | Date | string
    reviews?: ReviewListRelationFilter
  }

  export type GameBusinessOrderByWithRelationInput = {
    id?: SortOrder
    번호?: SortOrderInput | SortOrder
    개방서비스명?: SortOrderInput | SortOrder
    개방서비스아이디?: SortOrderInput | SortOrder
    개방자치단체코드?: SortOrderInput | SortOrder
    관리번호?: SortOrderInput | SortOrder
    인허가일자?: SortOrderInput | SortOrder
    인허가취소일자?: SortOrderInput | SortOrder
    영업상태구분코드?: SortOrderInput | SortOrder
    영업상태명?: SortOrderInput | SortOrder
    상세영업상태코드?: SortOrderInput | SortOrder
    상세영업상태명?: SortOrderInput | SortOrder
    폐업일자?: SortOrderInput | SortOrder
    휴업시작일자?: SortOrderInput | SortOrder
    휴업종료일자?: SortOrderInput | SortOrder
    재개업일자?: SortOrderInput | SortOrder
    소재지전화?: SortOrderInput | SortOrder
    소재지면적?: SortOrderInput | SortOrder
    소재지우편번호?: SortOrderInput | SortOrder
    소재지전체주소?: SortOrderInput | SortOrder
    도로명전체주소?: SortOrderInput | SortOrder
    도로명우편번호?: SortOrderInput | SortOrder
    사업장명?: SortOrderInput | SortOrder
    최종수정시점?: SortOrderInput | SortOrder
    데이터갱신구분?: SortOrderInput | SortOrder
    데이터갱신일자?: SortOrderInput | SortOrder
    업태구분명?: SortOrderInput | SortOrder
    좌표정보x?: SortOrderInput | SortOrder
    좌표정보y?: SortOrderInput | SortOrder
    문화체육업종명?: SortOrderInput | SortOrder
    문화사업자구분명?: SortOrderInput | SortOrder
    총층수?: SortOrderInput | SortOrder
    주변환경명?: SortOrderInput | SortOrder
    제작취급품목내용?: SortOrderInput | SortOrder
    시설면적?: SortOrderInput | SortOrder
    지상층수?: SortOrderInput | SortOrder
    지하층수?: SortOrderInput | SortOrder
    건물용도명?: SortOrderInput | SortOrder
    통로너비?: SortOrderInput | SortOrder
    조명시설조도?: SortOrderInput | SortOrder
    노래방실수?: SortOrderInput | SortOrder
    청소년실수?: SortOrderInput | SortOrder
    비상계단여부?: SortOrderInput | SortOrder
    비상구여부?: SortOrderInput | SortOrder
    자동환기여부?: SortOrderInput | SortOrder
    청소년실여부?: SortOrderInput | SortOrder
    특수조명여부?: SortOrderInput | SortOrder
    방음시설여부?: SortOrderInput | SortOrder
    비디오재생기명?: SortOrderInput | SortOrder
    조명시설유무?: SortOrderInput | SortOrder
    음향시설여부?: SortOrderInput | SortOrder
    편의시설여부?: SortOrderInput | SortOrder
    소방시설여부?: SortOrderInput | SortOrder
    총게임기수?: SortOrderInput | SortOrder
    기존게임업외업종명?: SortOrderInput | SortOrder
    제공게임물명?: SortOrderInput | SortOrder
    공연장형태구분명?: SortOrderInput | SortOrder
    품목명?: SortOrderInput | SortOrder
    최초등록시점?: SortOrderInput | SortOrder
    지역구분명?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    reviews?: ReviewOrderByRelationAggregateInput
  }

  export type GameBusinessWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: GameBusinessWhereInput | GameBusinessWhereInput[]
    OR?: GameBusinessWhereInput[]
    NOT?: GameBusinessWhereInput | GameBusinessWhereInput[]
    번호?: IntNullableFilter<"GameBusiness"> | number | null
    개방서비스명?: StringNullableFilter<"GameBusiness"> | string | null
    개방서비스아이디?: StringNullableFilter<"GameBusiness"> | string | null
    개방자치단체코드?: StringNullableFilter<"GameBusiness"> | string | null
    관리번호?: StringNullableFilter<"GameBusiness"> | string | null
    인허가일자?: StringNullableFilter<"GameBusiness"> | string | null
    인허가취소일자?: StringNullableFilter<"GameBusiness"> | string | null
    영업상태구분코드?: StringNullableFilter<"GameBusiness"> | string | null
    영업상태명?: StringNullableFilter<"GameBusiness"> | string | null
    상세영업상태코드?: StringNullableFilter<"GameBusiness"> | string | null
    상세영업상태명?: StringNullableFilter<"GameBusiness"> | string | null
    폐업일자?: StringNullableFilter<"GameBusiness"> | string | null
    휴업시작일자?: StringNullableFilter<"GameBusiness"> | string | null
    휴업종료일자?: StringNullableFilter<"GameBusiness"> | string | null
    재개업일자?: StringNullableFilter<"GameBusiness"> | string | null
    소재지전화?: StringNullableFilter<"GameBusiness"> | string | null
    소재지면적?: StringNullableFilter<"GameBusiness"> | string | null
    소재지우편번호?: StringNullableFilter<"GameBusiness"> | string | null
    소재지전체주소?: StringNullableFilter<"GameBusiness"> | string | null
    도로명전체주소?: StringNullableFilter<"GameBusiness"> | string | null
    도로명우편번호?: StringNullableFilter<"GameBusiness"> | string | null
    사업장명?: StringNullableFilter<"GameBusiness"> | string | null
    최종수정시점?: StringNullableFilter<"GameBusiness"> | string | null
    데이터갱신구분?: StringNullableFilter<"GameBusiness"> | string | null
    데이터갱신일자?: StringNullableFilter<"GameBusiness"> | string | null
    업태구분명?: StringNullableFilter<"GameBusiness"> | string | null
    좌표정보x?: StringNullableFilter<"GameBusiness"> | string | null
    좌표정보y?: StringNullableFilter<"GameBusiness"> | string | null
    문화체육업종명?: StringNullableFilter<"GameBusiness"> | string | null
    문화사업자구분명?: StringNullableFilter<"GameBusiness"> | string | null
    총층수?: StringNullableFilter<"GameBusiness"> | string | null
    주변환경명?: StringNullableFilter<"GameBusiness"> | string | null
    제작취급품목내용?: StringNullableFilter<"GameBusiness"> | string | null
    시설면적?: StringNullableFilter<"GameBusiness"> | string | null
    지상층수?: StringNullableFilter<"GameBusiness"> | string | null
    지하층수?: StringNullableFilter<"GameBusiness"> | string | null
    건물용도명?: StringNullableFilter<"GameBusiness"> | string | null
    통로너비?: StringNullableFilter<"GameBusiness"> | string | null
    조명시설조도?: StringNullableFilter<"GameBusiness"> | string | null
    노래방실수?: StringNullableFilter<"GameBusiness"> | string | null
    청소년실수?: StringNullableFilter<"GameBusiness"> | string | null
    비상계단여부?: StringNullableFilter<"GameBusiness"> | string | null
    비상구여부?: StringNullableFilter<"GameBusiness"> | string | null
    자동환기여부?: StringNullableFilter<"GameBusiness"> | string | null
    청소년실여부?: StringNullableFilter<"GameBusiness"> | string | null
    특수조명여부?: StringNullableFilter<"GameBusiness"> | string | null
    방음시설여부?: StringNullableFilter<"GameBusiness"> | string | null
    비디오재생기명?: StringNullableFilter<"GameBusiness"> | string | null
    조명시설유무?: StringNullableFilter<"GameBusiness"> | string | null
    음향시설여부?: StringNullableFilter<"GameBusiness"> | string | null
    편의시설여부?: StringNullableFilter<"GameBusiness"> | string | null
    소방시설여부?: StringNullableFilter<"GameBusiness"> | string | null
    총게임기수?: StringNullableFilter<"GameBusiness"> | string | null
    기존게임업외업종명?: StringNullableFilter<"GameBusiness"> | string | null
    제공게임물명?: StringNullableFilter<"GameBusiness"> | string | null
    공연장형태구분명?: StringNullableFilter<"GameBusiness"> | string | null
    품목명?: StringNullableFilter<"GameBusiness"> | string | null
    최초등록시점?: StringNullableFilter<"GameBusiness"> | string | null
    지역구분명?: StringNullableFilter<"GameBusiness"> | string | null
    createdAt?: DateTimeFilter<"GameBusiness"> | Date | string
    updatedAt?: DateTimeFilter<"GameBusiness"> | Date | string
    reviews?: ReviewListRelationFilter
  }, "id">

  export type GameBusinessOrderByWithAggregationInput = {
    id?: SortOrder
    번호?: SortOrderInput | SortOrder
    개방서비스명?: SortOrderInput | SortOrder
    개방서비스아이디?: SortOrderInput | SortOrder
    개방자치단체코드?: SortOrderInput | SortOrder
    관리번호?: SortOrderInput | SortOrder
    인허가일자?: SortOrderInput | SortOrder
    인허가취소일자?: SortOrderInput | SortOrder
    영업상태구분코드?: SortOrderInput | SortOrder
    영업상태명?: SortOrderInput | SortOrder
    상세영업상태코드?: SortOrderInput | SortOrder
    상세영업상태명?: SortOrderInput | SortOrder
    폐업일자?: SortOrderInput | SortOrder
    휴업시작일자?: SortOrderInput | SortOrder
    휴업종료일자?: SortOrderInput | SortOrder
    재개업일자?: SortOrderInput | SortOrder
    소재지전화?: SortOrderInput | SortOrder
    소재지면적?: SortOrderInput | SortOrder
    소재지우편번호?: SortOrderInput | SortOrder
    소재지전체주소?: SortOrderInput | SortOrder
    도로명전체주소?: SortOrderInput | SortOrder
    도로명우편번호?: SortOrderInput | SortOrder
    사업장명?: SortOrderInput | SortOrder
    최종수정시점?: SortOrderInput | SortOrder
    데이터갱신구분?: SortOrderInput | SortOrder
    데이터갱신일자?: SortOrderInput | SortOrder
    업태구분명?: SortOrderInput | SortOrder
    좌표정보x?: SortOrderInput | SortOrder
    좌표정보y?: SortOrderInput | SortOrder
    문화체육업종명?: SortOrderInput | SortOrder
    문화사업자구분명?: SortOrderInput | SortOrder
    총층수?: SortOrderInput | SortOrder
    주변환경명?: SortOrderInput | SortOrder
    제작취급품목내용?: SortOrderInput | SortOrder
    시설면적?: SortOrderInput | SortOrder
    지상층수?: SortOrderInput | SortOrder
    지하층수?: SortOrderInput | SortOrder
    건물용도명?: SortOrderInput | SortOrder
    통로너비?: SortOrderInput | SortOrder
    조명시설조도?: SortOrderInput | SortOrder
    노래방실수?: SortOrderInput | SortOrder
    청소년실수?: SortOrderInput | SortOrder
    비상계단여부?: SortOrderInput | SortOrder
    비상구여부?: SortOrderInput | SortOrder
    자동환기여부?: SortOrderInput | SortOrder
    청소년실여부?: SortOrderInput | SortOrder
    특수조명여부?: SortOrderInput | SortOrder
    방음시설여부?: SortOrderInput | SortOrder
    비디오재생기명?: SortOrderInput | SortOrder
    조명시설유무?: SortOrderInput | SortOrder
    음향시설여부?: SortOrderInput | SortOrder
    편의시설여부?: SortOrderInput | SortOrder
    소방시설여부?: SortOrderInput | SortOrder
    총게임기수?: SortOrderInput | SortOrder
    기존게임업외업종명?: SortOrderInput | SortOrder
    제공게임물명?: SortOrderInput | SortOrder
    공연장형태구분명?: SortOrderInput | SortOrder
    품목명?: SortOrderInput | SortOrder
    최초등록시점?: SortOrderInput | SortOrder
    지역구분명?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: GameBusinessCountOrderByAggregateInput
    _avg?: GameBusinessAvgOrderByAggregateInput
    _max?: GameBusinessMaxOrderByAggregateInput
    _min?: GameBusinessMinOrderByAggregateInput
    _sum?: GameBusinessSumOrderByAggregateInput
  }

  export type GameBusinessScalarWhereWithAggregatesInput = {
    AND?: GameBusinessScalarWhereWithAggregatesInput | GameBusinessScalarWhereWithAggregatesInput[]
    OR?: GameBusinessScalarWhereWithAggregatesInput[]
    NOT?: GameBusinessScalarWhereWithAggregatesInput | GameBusinessScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"GameBusiness"> | number
    번호?: IntNullableWithAggregatesFilter<"GameBusiness"> | number | null
    개방서비스명?: StringNullableWithAggregatesFilter<"GameBusiness"> | string | null
    개방서비스아이디?: StringNullableWithAggregatesFilter<"GameBusiness"> | string | null
    개방자치단체코드?: StringNullableWithAggregatesFilter<"GameBusiness"> | string | null
    관리번호?: StringNullableWithAggregatesFilter<"GameBusiness"> | string | null
    인허가일자?: StringNullableWithAggregatesFilter<"GameBusiness"> | string | null
    인허가취소일자?: StringNullableWithAggregatesFilter<"GameBusiness"> | string | null
    영업상태구분코드?: StringNullableWithAggregatesFilter<"GameBusiness"> | string | null
    영업상태명?: StringNullableWithAggregatesFilter<"GameBusiness"> | string | null
    상세영업상태코드?: StringNullableWithAggregatesFilter<"GameBusiness"> | string | null
    상세영업상태명?: StringNullableWithAggregatesFilter<"GameBusiness"> | string | null
    폐업일자?: StringNullableWithAggregatesFilter<"GameBusiness"> | string | null
    휴업시작일자?: StringNullableWithAggregatesFilter<"GameBusiness"> | string | null
    휴업종료일자?: StringNullableWithAggregatesFilter<"GameBusiness"> | string | null
    재개업일자?: StringNullableWithAggregatesFilter<"GameBusiness"> | string | null
    소재지전화?: StringNullableWithAggregatesFilter<"GameBusiness"> | string | null
    소재지면적?: StringNullableWithAggregatesFilter<"GameBusiness"> | string | null
    소재지우편번호?: StringNullableWithAggregatesFilter<"GameBusiness"> | string | null
    소재지전체주소?: StringNullableWithAggregatesFilter<"GameBusiness"> | string | null
    도로명전체주소?: StringNullableWithAggregatesFilter<"GameBusiness"> | string | null
    도로명우편번호?: StringNullableWithAggregatesFilter<"GameBusiness"> | string | null
    사업장명?: StringNullableWithAggregatesFilter<"GameBusiness"> | string | null
    최종수정시점?: StringNullableWithAggregatesFilter<"GameBusiness"> | string | null
    데이터갱신구분?: StringNullableWithAggregatesFilter<"GameBusiness"> | string | null
    데이터갱신일자?: StringNullableWithAggregatesFilter<"GameBusiness"> | string | null
    업태구분명?: StringNullableWithAggregatesFilter<"GameBusiness"> | string | null
    좌표정보x?: StringNullableWithAggregatesFilter<"GameBusiness"> | string | null
    좌표정보y?: StringNullableWithAggregatesFilter<"GameBusiness"> | string | null
    문화체육업종명?: StringNullableWithAggregatesFilter<"GameBusiness"> | string | null
    문화사업자구분명?: StringNullableWithAggregatesFilter<"GameBusiness"> | string | null
    총층수?: StringNullableWithAggregatesFilter<"GameBusiness"> | string | null
    주변환경명?: StringNullableWithAggregatesFilter<"GameBusiness"> | string | null
    제작취급품목내용?: StringNullableWithAggregatesFilter<"GameBusiness"> | string | null
    시설면적?: StringNullableWithAggregatesFilter<"GameBusiness"> | string | null
    지상층수?: StringNullableWithAggregatesFilter<"GameBusiness"> | string | null
    지하층수?: StringNullableWithAggregatesFilter<"GameBusiness"> | string | null
    건물용도명?: StringNullableWithAggregatesFilter<"GameBusiness"> | string | null
    통로너비?: StringNullableWithAggregatesFilter<"GameBusiness"> | string | null
    조명시설조도?: StringNullableWithAggregatesFilter<"GameBusiness"> | string | null
    노래방실수?: StringNullableWithAggregatesFilter<"GameBusiness"> | string | null
    청소년실수?: StringNullableWithAggregatesFilter<"GameBusiness"> | string | null
    비상계단여부?: StringNullableWithAggregatesFilter<"GameBusiness"> | string | null
    비상구여부?: StringNullableWithAggregatesFilter<"GameBusiness"> | string | null
    자동환기여부?: StringNullableWithAggregatesFilter<"GameBusiness"> | string | null
    청소년실여부?: StringNullableWithAggregatesFilter<"GameBusiness"> | string | null
    특수조명여부?: StringNullableWithAggregatesFilter<"GameBusiness"> | string | null
    방음시설여부?: StringNullableWithAggregatesFilter<"GameBusiness"> | string | null
    비디오재생기명?: StringNullableWithAggregatesFilter<"GameBusiness"> | string | null
    조명시설유무?: StringNullableWithAggregatesFilter<"GameBusiness"> | string | null
    음향시설여부?: StringNullableWithAggregatesFilter<"GameBusiness"> | string | null
    편의시설여부?: StringNullableWithAggregatesFilter<"GameBusiness"> | string | null
    소방시설여부?: StringNullableWithAggregatesFilter<"GameBusiness"> | string | null
    총게임기수?: StringNullableWithAggregatesFilter<"GameBusiness"> | string | null
    기존게임업외업종명?: StringNullableWithAggregatesFilter<"GameBusiness"> | string | null
    제공게임물명?: StringNullableWithAggregatesFilter<"GameBusiness"> | string | null
    공연장형태구분명?: StringNullableWithAggregatesFilter<"GameBusiness"> | string | null
    품목명?: StringNullableWithAggregatesFilter<"GameBusiness"> | string | null
    최초등록시점?: StringNullableWithAggregatesFilter<"GameBusiness"> | string | null
    지역구분명?: StringNullableWithAggregatesFilter<"GameBusiness"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"GameBusiness"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"GameBusiness"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    tossId?: StringNullableFilter<"User"> | string | null
    nickname?: StringNullableFilter<"User"> | string | null
    email?: StringNullableFilter<"User"> | string | null
    avatar?: StringNullableFilter<"User"> | string | null
    name?: StringNullableFilter<"User"> | string | null
    phone?: StringNullableFilter<"User"> | string | null
    birthday?: StringNullableFilter<"User"> | string | null
    gender?: StringNullableFilter<"User"> | string | null
    ci?: StringNullableFilter<"User"> | string | null
    di?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    reviews?: ReviewListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    tossId?: SortOrderInput | SortOrder
    nickname?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    birthday?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    ci?: SortOrderInput | SortOrder
    di?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    reviews?: ReviewOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    tossId?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    nickname?: StringNullableFilter<"User"> | string | null
    email?: StringNullableFilter<"User"> | string | null
    avatar?: StringNullableFilter<"User"> | string | null
    name?: StringNullableFilter<"User"> | string | null
    phone?: StringNullableFilter<"User"> | string | null
    birthday?: StringNullableFilter<"User"> | string | null
    gender?: StringNullableFilter<"User"> | string | null
    ci?: StringNullableFilter<"User"> | string | null
    di?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    reviews?: ReviewListRelationFilter
  }, "id" | "tossId">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    tossId?: SortOrderInput | SortOrder
    nickname?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    birthday?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    ci?: SortOrderInput | SortOrder
    di?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    tossId?: StringNullableWithAggregatesFilter<"User"> | string | null
    nickname?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    avatar?: StringNullableWithAggregatesFilter<"User"> | string | null
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    phone?: StringNullableWithAggregatesFilter<"User"> | string | null
    birthday?: StringNullableWithAggregatesFilter<"User"> | string | null
    gender?: StringNullableWithAggregatesFilter<"User"> | string | null
    ci?: StringNullableWithAggregatesFilter<"User"> | string | null
    di?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ReviewWhereInput = {
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    id?: StringFilter<"Review"> | string
    storeId?: IntFilter<"Review"> | number
    rating?: IntFilter<"Review"> | number
    content?: StringFilter<"Review"> | string
    images?: StringNullableListFilter<"Review">
    tags?: StringNullableListFilter<"Review">
    userId?: StringNullableFilter<"Review"> | string | null
    userName?: StringFilter<"Review"> | string
    createdAt?: DateTimeFilter<"Review"> | Date | string
    updatedAt?: DateTimeFilter<"Review"> | Date | string
    store?: XOR<GameBusinessScalarRelationFilter, GameBusinessWhereInput>
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type ReviewOrderByWithRelationInput = {
    id?: SortOrder
    storeId?: SortOrder
    rating?: SortOrder
    content?: SortOrder
    images?: SortOrder
    tags?: SortOrder
    userId?: SortOrderInput | SortOrder
    userName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    store?: GameBusinessOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type ReviewWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    storeId?: IntFilter<"Review"> | number
    rating?: IntFilter<"Review"> | number
    content?: StringFilter<"Review"> | string
    images?: StringNullableListFilter<"Review">
    tags?: StringNullableListFilter<"Review">
    userId?: StringNullableFilter<"Review"> | string | null
    userName?: StringFilter<"Review"> | string
    createdAt?: DateTimeFilter<"Review"> | Date | string
    updatedAt?: DateTimeFilter<"Review"> | Date | string
    store?: XOR<GameBusinessScalarRelationFilter, GameBusinessWhereInput>
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type ReviewOrderByWithAggregationInput = {
    id?: SortOrder
    storeId?: SortOrder
    rating?: SortOrder
    content?: SortOrder
    images?: SortOrder
    tags?: SortOrder
    userId?: SortOrderInput | SortOrder
    userName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ReviewCountOrderByAggregateInput
    _avg?: ReviewAvgOrderByAggregateInput
    _max?: ReviewMaxOrderByAggregateInput
    _min?: ReviewMinOrderByAggregateInput
    _sum?: ReviewSumOrderByAggregateInput
  }

  export type ReviewScalarWhereWithAggregatesInput = {
    AND?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    OR?: ReviewScalarWhereWithAggregatesInput[]
    NOT?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Review"> | string
    storeId?: IntWithAggregatesFilter<"Review"> | number
    rating?: IntWithAggregatesFilter<"Review"> | number
    content?: StringWithAggregatesFilter<"Review"> | string
    images?: StringNullableListFilter<"Review">
    tags?: StringNullableListFilter<"Review">
    userId?: StringNullableWithAggregatesFilter<"Review"> | string | null
    userName?: StringWithAggregatesFilter<"Review"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Review"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Review"> | Date | string
  }

  export type GameBusinessCreateInput = {
    번호?: number | null
    개방서비스명?: string | null
    개방서비스아이디?: string | null
    개방자치단체코드?: string | null
    관리번호?: string | null
    인허가일자?: string | null
    인허가취소일자?: string | null
    영업상태구분코드?: string | null
    영업상태명?: string | null
    상세영업상태코드?: string | null
    상세영업상태명?: string | null
    폐업일자?: string | null
    휴업시작일자?: string | null
    휴업종료일자?: string | null
    재개업일자?: string | null
    소재지전화?: string | null
    소재지면적?: string | null
    소재지우편번호?: string | null
    소재지전체주소?: string | null
    도로명전체주소?: string | null
    도로명우편번호?: string | null
    사업장명?: string | null
    최종수정시점?: string | null
    데이터갱신구분?: string | null
    데이터갱신일자?: string | null
    업태구분명?: string | null
    좌표정보x?: string | null
    좌표정보y?: string | null
    문화체육업종명?: string | null
    문화사업자구분명?: string | null
    총층수?: string | null
    주변환경명?: string | null
    제작취급품목내용?: string | null
    시설면적?: string | null
    지상층수?: string | null
    지하층수?: string | null
    건물용도명?: string | null
    통로너비?: string | null
    조명시설조도?: string | null
    노래방실수?: string | null
    청소년실수?: string | null
    비상계단여부?: string | null
    비상구여부?: string | null
    자동환기여부?: string | null
    청소년실여부?: string | null
    특수조명여부?: string | null
    방음시설여부?: string | null
    비디오재생기명?: string | null
    조명시설유무?: string | null
    음향시설여부?: string | null
    편의시설여부?: string | null
    소방시설여부?: string | null
    총게임기수?: string | null
    기존게임업외업종명?: string | null
    제공게임물명?: string | null
    공연장형태구분명?: string | null
    품목명?: string | null
    최초등록시점?: string | null
    지역구분명?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    reviews?: ReviewCreateNestedManyWithoutStoreInput
  }

  export type GameBusinessUncheckedCreateInput = {
    id?: number
    번호?: number | null
    개방서비스명?: string | null
    개방서비스아이디?: string | null
    개방자치단체코드?: string | null
    관리번호?: string | null
    인허가일자?: string | null
    인허가취소일자?: string | null
    영업상태구분코드?: string | null
    영업상태명?: string | null
    상세영업상태코드?: string | null
    상세영업상태명?: string | null
    폐업일자?: string | null
    휴업시작일자?: string | null
    휴업종료일자?: string | null
    재개업일자?: string | null
    소재지전화?: string | null
    소재지면적?: string | null
    소재지우편번호?: string | null
    소재지전체주소?: string | null
    도로명전체주소?: string | null
    도로명우편번호?: string | null
    사업장명?: string | null
    최종수정시점?: string | null
    데이터갱신구분?: string | null
    데이터갱신일자?: string | null
    업태구분명?: string | null
    좌표정보x?: string | null
    좌표정보y?: string | null
    문화체육업종명?: string | null
    문화사업자구분명?: string | null
    총층수?: string | null
    주변환경명?: string | null
    제작취급품목내용?: string | null
    시설면적?: string | null
    지상층수?: string | null
    지하층수?: string | null
    건물용도명?: string | null
    통로너비?: string | null
    조명시설조도?: string | null
    노래방실수?: string | null
    청소년실수?: string | null
    비상계단여부?: string | null
    비상구여부?: string | null
    자동환기여부?: string | null
    청소년실여부?: string | null
    특수조명여부?: string | null
    방음시설여부?: string | null
    비디오재생기명?: string | null
    조명시설유무?: string | null
    음향시설여부?: string | null
    편의시설여부?: string | null
    소방시설여부?: string | null
    총게임기수?: string | null
    기존게임업외업종명?: string | null
    제공게임물명?: string | null
    공연장형태구분명?: string | null
    품목명?: string | null
    최초등록시점?: string | null
    지역구분명?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    reviews?: ReviewUncheckedCreateNestedManyWithoutStoreInput
  }

  export type GameBusinessUpdateInput = {
    번호?: NullableIntFieldUpdateOperationsInput | number | null
    개방서비스명?: NullableStringFieldUpdateOperationsInput | string | null
    개방서비스아이디?: NullableStringFieldUpdateOperationsInput | string | null
    개방자치단체코드?: NullableStringFieldUpdateOperationsInput | string | null
    관리번호?: NullableStringFieldUpdateOperationsInput | string | null
    인허가일자?: NullableStringFieldUpdateOperationsInput | string | null
    인허가취소일자?: NullableStringFieldUpdateOperationsInput | string | null
    영업상태구분코드?: NullableStringFieldUpdateOperationsInput | string | null
    영업상태명?: NullableStringFieldUpdateOperationsInput | string | null
    상세영업상태코드?: NullableStringFieldUpdateOperationsInput | string | null
    상세영업상태명?: NullableStringFieldUpdateOperationsInput | string | null
    폐업일자?: NullableStringFieldUpdateOperationsInput | string | null
    휴업시작일자?: NullableStringFieldUpdateOperationsInput | string | null
    휴업종료일자?: NullableStringFieldUpdateOperationsInput | string | null
    재개업일자?: NullableStringFieldUpdateOperationsInput | string | null
    소재지전화?: NullableStringFieldUpdateOperationsInput | string | null
    소재지면적?: NullableStringFieldUpdateOperationsInput | string | null
    소재지우편번호?: NullableStringFieldUpdateOperationsInput | string | null
    소재지전체주소?: NullableStringFieldUpdateOperationsInput | string | null
    도로명전체주소?: NullableStringFieldUpdateOperationsInput | string | null
    도로명우편번호?: NullableStringFieldUpdateOperationsInput | string | null
    사업장명?: NullableStringFieldUpdateOperationsInput | string | null
    최종수정시점?: NullableStringFieldUpdateOperationsInput | string | null
    데이터갱신구분?: NullableStringFieldUpdateOperationsInput | string | null
    데이터갱신일자?: NullableStringFieldUpdateOperationsInput | string | null
    업태구분명?: NullableStringFieldUpdateOperationsInput | string | null
    좌표정보x?: NullableStringFieldUpdateOperationsInput | string | null
    좌표정보y?: NullableStringFieldUpdateOperationsInput | string | null
    문화체육업종명?: NullableStringFieldUpdateOperationsInput | string | null
    문화사업자구분명?: NullableStringFieldUpdateOperationsInput | string | null
    총층수?: NullableStringFieldUpdateOperationsInput | string | null
    주변환경명?: NullableStringFieldUpdateOperationsInput | string | null
    제작취급품목내용?: NullableStringFieldUpdateOperationsInput | string | null
    시설면적?: NullableStringFieldUpdateOperationsInput | string | null
    지상층수?: NullableStringFieldUpdateOperationsInput | string | null
    지하층수?: NullableStringFieldUpdateOperationsInput | string | null
    건물용도명?: NullableStringFieldUpdateOperationsInput | string | null
    통로너비?: NullableStringFieldUpdateOperationsInput | string | null
    조명시설조도?: NullableStringFieldUpdateOperationsInput | string | null
    노래방실수?: NullableStringFieldUpdateOperationsInput | string | null
    청소년실수?: NullableStringFieldUpdateOperationsInput | string | null
    비상계단여부?: NullableStringFieldUpdateOperationsInput | string | null
    비상구여부?: NullableStringFieldUpdateOperationsInput | string | null
    자동환기여부?: NullableStringFieldUpdateOperationsInput | string | null
    청소년실여부?: NullableStringFieldUpdateOperationsInput | string | null
    특수조명여부?: NullableStringFieldUpdateOperationsInput | string | null
    방음시설여부?: NullableStringFieldUpdateOperationsInput | string | null
    비디오재생기명?: NullableStringFieldUpdateOperationsInput | string | null
    조명시설유무?: NullableStringFieldUpdateOperationsInput | string | null
    음향시설여부?: NullableStringFieldUpdateOperationsInput | string | null
    편의시설여부?: NullableStringFieldUpdateOperationsInput | string | null
    소방시설여부?: NullableStringFieldUpdateOperationsInput | string | null
    총게임기수?: NullableStringFieldUpdateOperationsInput | string | null
    기존게임업외업종명?: NullableStringFieldUpdateOperationsInput | string | null
    제공게임물명?: NullableStringFieldUpdateOperationsInput | string | null
    공연장형태구분명?: NullableStringFieldUpdateOperationsInput | string | null
    품목명?: NullableStringFieldUpdateOperationsInput | string | null
    최초등록시점?: NullableStringFieldUpdateOperationsInput | string | null
    지역구분명?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviews?: ReviewUpdateManyWithoutStoreNestedInput
  }

  export type GameBusinessUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    번호?: NullableIntFieldUpdateOperationsInput | number | null
    개방서비스명?: NullableStringFieldUpdateOperationsInput | string | null
    개방서비스아이디?: NullableStringFieldUpdateOperationsInput | string | null
    개방자치단체코드?: NullableStringFieldUpdateOperationsInput | string | null
    관리번호?: NullableStringFieldUpdateOperationsInput | string | null
    인허가일자?: NullableStringFieldUpdateOperationsInput | string | null
    인허가취소일자?: NullableStringFieldUpdateOperationsInput | string | null
    영업상태구분코드?: NullableStringFieldUpdateOperationsInput | string | null
    영업상태명?: NullableStringFieldUpdateOperationsInput | string | null
    상세영업상태코드?: NullableStringFieldUpdateOperationsInput | string | null
    상세영업상태명?: NullableStringFieldUpdateOperationsInput | string | null
    폐업일자?: NullableStringFieldUpdateOperationsInput | string | null
    휴업시작일자?: NullableStringFieldUpdateOperationsInput | string | null
    휴업종료일자?: NullableStringFieldUpdateOperationsInput | string | null
    재개업일자?: NullableStringFieldUpdateOperationsInput | string | null
    소재지전화?: NullableStringFieldUpdateOperationsInput | string | null
    소재지면적?: NullableStringFieldUpdateOperationsInput | string | null
    소재지우편번호?: NullableStringFieldUpdateOperationsInput | string | null
    소재지전체주소?: NullableStringFieldUpdateOperationsInput | string | null
    도로명전체주소?: NullableStringFieldUpdateOperationsInput | string | null
    도로명우편번호?: NullableStringFieldUpdateOperationsInput | string | null
    사업장명?: NullableStringFieldUpdateOperationsInput | string | null
    최종수정시점?: NullableStringFieldUpdateOperationsInput | string | null
    데이터갱신구분?: NullableStringFieldUpdateOperationsInput | string | null
    데이터갱신일자?: NullableStringFieldUpdateOperationsInput | string | null
    업태구분명?: NullableStringFieldUpdateOperationsInput | string | null
    좌표정보x?: NullableStringFieldUpdateOperationsInput | string | null
    좌표정보y?: NullableStringFieldUpdateOperationsInput | string | null
    문화체육업종명?: NullableStringFieldUpdateOperationsInput | string | null
    문화사업자구분명?: NullableStringFieldUpdateOperationsInput | string | null
    총층수?: NullableStringFieldUpdateOperationsInput | string | null
    주변환경명?: NullableStringFieldUpdateOperationsInput | string | null
    제작취급품목내용?: NullableStringFieldUpdateOperationsInput | string | null
    시설면적?: NullableStringFieldUpdateOperationsInput | string | null
    지상층수?: NullableStringFieldUpdateOperationsInput | string | null
    지하층수?: NullableStringFieldUpdateOperationsInput | string | null
    건물용도명?: NullableStringFieldUpdateOperationsInput | string | null
    통로너비?: NullableStringFieldUpdateOperationsInput | string | null
    조명시설조도?: NullableStringFieldUpdateOperationsInput | string | null
    노래방실수?: NullableStringFieldUpdateOperationsInput | string | null
    청소년실수?: NullableStringFieldUpdateOperationsInput | string | null
    비상계단여부?: NullableStringFieldUpdateOperationsInput | string | null
    비상구여부?: NullableStringFieldUpdateOperationsInput | string | null
    자동환기여부?: NullableStringFieldUpdateOperationsInput | string | null
    청소년실여부?: NullableStringFieldUpdateOperationsInput | string | null
    특수조명여부?: NullableStringFieldUpdateOperationsInput | string | null
    방음시설여부?: NullableStringFieldUpdateOperationsInput | string | null
    비디오재생기명?: NullableStringFieldUpdateOperationsInput | string | null
    조명시설유무?: NullableStringFieldUpdateOperationsInput | string | null
    음향시설여부?: NullableStringFieldUpdateOperationsInput | string | null
    편의시설여부?: NullableStringFieldUpdateOperationsInput | string | null
    소방시설여부?: NullableStringFieldUpdateOperationsInput | string | null
    총게임기수?: NullableStringFieldUpdateOperationsInput | string | null
    기존게임업외업종명?: NullableStringFieldUpdateOperationsInput | string | null
    제공게임물명?: NullableStringFieldUpdateOperationsInput | string | null
    공연장형태구분명?: NullableStringFieldUpdateOperationsInput | string | null
    품목명?: NullableStringFieldUpdateOperationsInput | string | null
    최초등록시점?: NullableStringFieldUpdateOperationsInput | string | null
    지역구분명?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviews?: ReviewUncheckedUpdateManyWithoutStoreNestedInput
  }

  export type GameBusinessCreateManyInput = {
    id?: number
    번호?: number | null
    개방서비스명?: string | null
    개방서비스아이디?: string | null
    개방자치단체코드?: string | null
    관리번호?: string | null
    인허가일자?: string | null
    인허가취소일자?: string | null
    영업상태구분코드?: string | null
    영업상태명?: string | null
    상세영업상태코드?: string | null
    상세영업상태명?: string | null
    폐업일자?: string | null
    휴업시작일자?: string | null
    휴업종료일자?: string | null
    재개업일자?: string | null
    소재지전화?: string | null
    소재지면적?: string | null
    소재지우편번호?: string | null
    소재지전체주소?: string | null
    도로명전체주소?: string | null
    도로명우편번호?: string | null
    사업장명?: string | null
    최종수정시점?: string | null
    데이터갱신구분?: string | null
    데이터갱신일자?: string | null
    업태구분명?: string | null
    좌표정보x?: string | null
    좌표정보y?: string | null
    문화체육업종명?: string | null
    문화사업자구분명?: string | null
    총층수?: string | null
    주변환경명?: string | null
    제작취급품목내용?: string | null
    시설면적?: string | null
    지상층수?: string | null
    지하층수?: string | null
    건물용도명?: string | null
    통로너비?: string | null
    조명시설조도?: string | null
    노래방실수?: string | null
    청소년실수?: string | null
    비상계단여부?: string | null
    비상구여부?: string | null
    자동환기여부?: string | null
    청소년실여부?: string | null
    특수조명여부?: string | null
    방음시설여부?: string | null
    비디오재생기명?: string | null
    조명시설유무?: string | null
    음향시설여부?: string | null
    편의시설여부?: string | null
    소방시설여부?: string | null
    총게임기수?: string | null
    기존게임업외업종명?: string | null
    제공게임물명?: string | null
    공연장형태구분명?: string | null
    품목명?: string | null
    최초등록시점?: string | null
    지역구분명?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GameBusinessUpdateManyMutationInput = {
    번호?: NullableIntFieldUpdateOperationsInput | number | null
    개방서비스명?: NullableStringFieldUpdateOperationsInput | string | null
    개방서비스아이디?: NullableStringFieldUpdateOperationsInput | string | null
    개방자치단체코드?: NullableStringFieldUpdateOperationsInput | string | null
    관리번호?: NullableStringFieldUpdateOperationsInput | string | null
    인허가일자?: NullableStringFieldUpdateOperationsInput | string | null
    인허가취소일자?: NullableStringFieldUpdateOperationsInput | string | null
    영업상태구분코드?: NullableStringFieldUpdateOperationsInput | string | null
    영업상태명?: NullableStringFieldUpdateOperationsInput | string | null
    상세영업상태코드?: NullableStringFieldUpdateOperationsInput | string | null
    상세영업상태명?: NullableStringFieldUpdateOperationsInput | string | null
    폐업일자?: NullableStringFieldUpdateOperationsInput | string | null
    휴업시작일자?: NullableStringFieldUpdateOperationsInput | string | null
    휴업종료일자?: NullableStringFieldUpdateOperationsInput | string | null
    재개업일자?: NullableStringFieldUpdateOperationsInput | string | null
    소재지전화?: NullableStringFieldUpdateOperationsInput | string | null
    소재지면적?: NullableStringFieldUpdateOperationsInput | string | null
    소재지우편번호?: NullableStringFieldUpdateOperationsInput | string | null
    소재지전체주소?: NullableStringFieldUpdateOperationsInput | string | null
    도로명전체주소?: NullableStringFieldUpdateOperationsInput | string | null
    도로명우편번호?: NullableStringFieldUpdateOperationsInput | string | null
    사업장명?: NullableStringFieldUpdateOperationsInput | string | null
    최종수정시점?: NullableStringFieldUpdateOperationsInput | string | null
    데이터갱신구분?: NullableStringFieldUpdateOperationsInput | string | null
    데이터갱신일자?: NullableStringFieldUpdateOperationsInput | string | null
    업태구분명?: NullableStringFieldUpdateOperationsInput | string | null
    좌표정보x?: NullableStringFieldUpdateOperationsInput | string | null
    좌표정보y?: NullableStringFieldUpdateOperationsInput | string | null
    문화체육업종명?: NullableStringFieldUpdateOperationsInput | string | null
    문화사업자구분명?: NullableStringFieldUpdateOperationsInput | string | null
    총층수?: NullableStringFieldUpdateOperationsInput | string | null
    주변환경명?: NullableStringFieldUpdateOperationsInput | string | null
    제작취급품목내용?: NullableStringFieldUpdateOperationsInput | string | null
    시설면적?: NullableStringFieldUpdateOperationsInput | string | null
    지상층수?: NullableStringFieldUpdateOperationsInput | string | null
    지하층수?: NullableStringFieldUpdateOperationsInput | string | null
    건물용도명?: NullableStringFieldUpdateOperationsInput | string | null
    통로너비?: NullableStringFieldUpdateOperationsInput | string | null
    조명시설조도?: NullableStringFieldUpdateOperationsInput | string | null
    노래방실수?: NullableStringFieldUpdateOperationsInput | string | null
    청소년실수?: NullableStringFieldUpdateOperationsInput | string | null
    비상계단여부?: NullableStringFieldUpdateOperationsInput | string | null
    비상구여부?: NullableStringFieldUpdateOperationsInput | string | null
    자동환기여부?: NullableStringFieldUpdateOperationsInput | string | null
    청소년실여부?: NullableStringFieldUpdateOperationsInput | string | null
    특수조명여부?: NullableStringFieldUpdateOperationsInput | string | null
    방음시설여부?: NullableStringFieldUpdateOperationsInput | string | null
    비디오재생기명?: NullableStringFieldUpdateOperationsInput | string | null
    조명시설유무?: NullableStringFieldUpdateOperationsInput | string | null
    음향시설여부?: NullableStringFieldUpdateOperationsInput | string | null
    편의시설여부?: NullableStringFieldUpdateOperationsInput | string | null
    소방시설여부?: NullableStringFieldUpdateOperationsInput | string | null
    총게임기수?: NullableStringFieldUpdateOperationsInput | string | null
    기존게임업외업종명?: NullableStringFieldUpdateOperationsInput | string | null
    제공게임물명?: NullableStringFieldUpdateOperationsInput | string | null
    공연장형태구분명?: NullableStringFieldUpdateOperationsInput | string | null
    품목명?: NullableStringFieldUpdateOperationsInput | string | null
    최초등록시점?: NullableStringFieldUpdateOperationsInput | string | null
    지역구분명?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameBusinessUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    번호?: NullableIntFieldUpdateOperationsInput | number | null
    개방서비스명?: NullableStringFieldUpdateOperationsInput | string | null
    개방서비스아이디?: NullableStringFieldUpdateOperationsInput | string | null
    개방자치단체코드?: NullableStringFieldUpdateOperationsInput | string | null
    관리번호?: NullableStringFieldUpdateOperationsInput | string | null
    인허가일자?: NullableStringFieldUpdateOperationsInput | string | null
    인허가취소일자?: NullableStringFieldUpdateOperationsInput | string | null
    영업상태구분코드?: NullableStringFieldUpdateOperationsInput | string | null
    영업상태명?: NullableStringFieldUpdateOperationsInput | string | null
    상세영업상태코드?: NullableStringFieldUpdateOperationsInput | string | null
    상세영업상태명?: NullableStringFieldUpdateOperationsInput | string | null
    폐업일자?: NullableStringFieldUpdateOperationsInput | string | null
    휴업시작일자?: NullableStringFieldUpdateOperationsInput | string | null
    휴업종료일자?: NullableStringFieldUpdateOperationsInput | string | null
    재개업일자?: NullableStringFieldUpdateOperationsInput | string | null
    소재지전화?: NullableStringFieldUpdateOperationsInput | string | null
    소재지면적?: NullableStringFieldUpdateOperationsInput | string | null
    소재지우편번호?: NullableStringFieldUpdateOperationsInput | string | null
    소재지전체주소?: NullableStringFieldUpdateOperationsInput | string | null
    도로명전체주소?: NullableStringFieldUpdateOperationsInput | string | null
    도로명우편번호?: NullableStringFieldUpdateOperationsInput | string | null
    사업장명?: NullableStringFieldUpdateOperationsInput | string | null
    최종수정시점?: NullableStringFieldUpdateOperationsInput | string | null
    데이터갱신구분?: NullableStringFieldUpdateOperationsInput | string | null
    데이터갱신일자?: NullableStringFieldUpdateOperationsInput | string | null
    업태구분명?: NullableStringFieldUpdateOperationsInput | string | null
    좌표정보x?: NullableStringFieldUpdateOperationsInput | string | null
    좌표정보y?: NullableStringFieldUpdateOperationsInput | string | null
    문화체육업종명?: NullableStringFieldUpdateOperationsInput | string | null
    문화사업자구분명?: NullableStringFieldUpdateOperationsInput | string | null
    총층수?: NullableStringFieldUpdateOperationsInput | string | null
    주변환경명?: NullableStringFieldUpdateOperationsInput | string | null
    제작취급품목내용?: NullableStringFieldUpdateOperationsInput | string | null
    시설면적?: NullableStringFieldUpdateOperationsInput | string | null
    지상층수?: NullableStringFieldUpdateOperationsInput | string | null
    지하층수?: NullableStringFieldUpdateOperationsInput | string | null
    건물용도명?: NullableStringFieldUpdateOperationsInput | string | null
    통로너비?: NullableStringFieldUpdateOperationsInput | string | null
    조명시설조도?: NullableStringFieldUpdateOperationsInput | string | null
    노래방실수?: NullableStringFieldUpdateOperationsInput | string | null
    청소년실수?: NullableStringFieldUpdateOperationsInput | string | null
    비상계단여부?: NullableStringFieldUpdateOperationsInput | string | null
    비상구여부?: NullableStringFieldUpdateOperationsInput | string | null
    자동환기여부?: NullableStringFieldUpdateOperationsInput | string | null
    청소년실여부?: NullableStringFieldUpdateOperationsInput | string | null
    특수조명여부?: NullableStringFieldUpdateOperationsInput | string | null
    방음시설여부?: NullableStringFieldUpdateOperationsInput | string | null
    비디오재생기명?: NullableStringFieldUpdateOperationsInput | string | null
    조명시설유무?: NullableStringFieldUpdateOperationsInput | string | null
    음향시설여부?: NullableStringFieldUpdateOperationsInput | string | null
    편의시설여부?: NullableStringFieldUpdateOperationsInput | string | null
    소방시설여부?: NullableStringFieldUpdateOperationsInput | string | null
    총게임기수?: NullableStringFieldUpdateOperationsInput | string | null
    기존게임업외업종명?: NullableStringFieldUpdateOperationsInput | string | null
    제공게임물명?: NullableStringFieldUpdateOperationsInput | string | null
    공연장형태구분명?: NullableStringFieldUpdateOperationsInput | string | null
    품목명?: NullableStringFieldUpdateOperationsInput | string | null
    최초등록시점?: NullableStringFieldUpdateOperationsInput | string | null
    지역구분명?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id?: string
    tossId?: string | null
    nickname?: string | null
    email?: string | null
    avatar?: string | null
    name?: string | null
    phone?: string | null
    birthday?: string | null
    gender?: string | null
    ci?: string | null
    di?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    reviews?: ReviewCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    tossId?: string | null
    nickname?: string | null
    email?: string | null
    avatar?: string | null
    name?: string | null
    phone?: string | null
    birthday?: string | null
    gender?: string | null
    ci?: string | null
    di?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tossId?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    birthday?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    ci?: NullableStringFieldUpdateOperationsInput | string | null
    di?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviews?: ReviewUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tossId?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    birthday?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    ci?: NullableStringFieldUpdateOperationsInput | string | null
    di?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    tossId?: string | null
    nickname?: string | null
    email?: string | null
    avatar?: string | null
    name?: string | null
    phone?: string | null
    birthday?: string | null
    gender?: string | null
    ci?: string | null
    di?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tossId?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    birthday?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    ci?: NullableStringFieldUpdateOperationsInput | string | null
    di?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tossId?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    birthday?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    ci?: NullableStringFieldUpdateOperationsInput | string | null
    di?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewCreateInput = {
    id?: string
    rating: number
    content: string
    images?: ReviewCreateimagesInput | string[]
    tags?: ReviewCreatetagsInput | string[]
    userName?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    store: GameBusinessCreateNestedOneWithoutReviewsInput
    user?: UserCreateNestedOneWithoutReviewsInput
  }

  export type ReviewUncheckedCreateInput = {
    id?: string
    storeId: number
    rating: number
    content: string
    images?: ReviewCreateimagesInput | string[]
    tags?: ReviewCreatetagsInput | string[]
    userId?: string | null
    userName?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    images?: ReviewUpdateimagesInput | string[]
    tags?: ReviewUpdatetagsInput | string[]
    userName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    store?: GameBusinessUpdateOneRequiredWithoutReviewsNestedInput
    user?: UserUpdateOneWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    storeId?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    images?: ReviewUpdateimagesInput | string[]
    tags?: ReviewUpdatetagsInput | string[]
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    userName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewCreateManyInput = {
    id?: string
    storeId: number
    rating: number
    content: string
    images?: ReviewCreateimagesInput | string[]
    tags?: ReviewCreatetagsInput | string[]
    userId?: string | null
    userName?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    images?: ReviewUpdateimagesInput | string[]
    tags?: ReviewUpdatetagsInput | string[]
    userName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    storeId?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    images?: ReviewUpdateimagesInput | string[]
    tags?: ReviewUpdatetagsInput | string[]
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    userName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ReviewListRelationFilter = {
    every?: ReviewWhereInput
    some?: ReviewWhereInput
    none?: ReviewWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ReviewOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GameBusinessCountOrderByAggregateInput = {
    id?: SortOrder
    번호?: SortOrder
    개방서비스명?: SortOrder
    개방서비스아이디?: SortOrder
    개방자치단체코드?: SortOrder
    관리번호?: SortOrder
    인허가일자?: SortOrder
    인허가취소일자?: SortOrder
    영업상태구분코드?: SortOrder
    영업상태명?: SortOrder
    상세영업상태코드?: SortOrder
    상세영업상태명?: SortOrder
    폐업일자?: SortOrder
    휴업시작일자?: SortOrder
    휴업종료일자?: SortOrder
    재개업일자?: SortOrder
    소재지전화?: SortOrder
    소재지면적?: SortOrder
    소재지우편번호?: SortOrder
    소재지전체주소?: SortOrder
    도로명전체주소?: SortOrder
    도로명우편번호?: SortOrder
    사업장명?: SortOrder
    최종수정시점?: SortOrder
    데이터갱신구분?: SortOrder
    데이터갱신일자?: SortOrder
    업태구분명?: SortOrder
    좌표정보x?: SortOrder
    좌표정보y?: SortOrder
    문화체육업종명?: SortOrder
    문화사업자구분명?: SortOrder
    총층수?: SortOrder
    주변환경명?: SortOrder
    제작취급품목내용?: SortOrder
    시설면적?: SortOrder
    지상층수?: SortOrder
    지하층수?: SortOrder
    건물용도명?: SortOrder
    통로너비?: SortOrder
    조명시설조도?: SortOrder
    노래방실수?: SortOrder
    청소년실수?: SortOrder
    비상계단여부?: SortOrder
    비상구여부?: SortOrder
    자동환기여부?: SortOrder
    청소년실여부?: SortOrder
    특수조명여부?: SortOrder
    방음시설여부?: SortOrder
    비디오재생기명?: SortOrder
    조명시설유무?: SortOrder
    음향시설여부?: SortOrder
    편의시설여부?: SortOrder
    소방시설여부?: SortOrder
    총게임기수?: SortOrder
    기존게임업외업종명?: SortOrder
    제공게임물명?: SortOrder
    공연장형태구분명?: SortOrder
    품목명?: SortOrder
    최초등록시점?: SortOrder
    지역구분명?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GameBusinessAvgOrderByAggregateInput = {
    id?: SortOrder
    번호?: SortOrder
  }

  export type GameBusinessMaxOrderByAggregateInput = {
    id?: SortOrder
    번호?: SortOrder
    개방서비스명?: SortOrder
    개방서비스아이디?: SortOrder
    개방자치단체코드?: SortOrder
    관리번호?: SortOrder
    인허가일자?: SortOrder
    인허가취소일자?: SortOrder
    영업상태구분코드?: SortOrder
    영업상태명?: SortOrder
    상세영업상태코드?: SortOrder
    상세영업상태명?: SortOrder
    폐업일자?: SortOrder
    휴업시작일자?: SortOrder
    휴업종료일자?: SortOrder
    재개업일자?: SortOrder
    소재지전화?: SortOrder
    소재지면적?: SortOrder
    소재지우편번호?: SortOrder
    소재지전체주소?: SortOrder
    도로명전체주소?: SortOrder
    도로명우편번호?: SortOrder
    사업장명?: SortOrder
    최종수정시점?: SortOrder
    데이터갱신구분?: SortOrder
    데이터갱신일자?: SortOrder
    업태구분명?: SortOrder
    좌표정보x?: SortOrder
    좌표정보y?: SortOrder
    문화체육업종명?: SortOrder
    문화사업자구분명?: SortOrder
    총층수?: SortOrder
    주변환경명?: SortOrder
    제작취급품목내용?: SortOrder
    시설면적?: SortOrder
    지상층수?: SortOrder
    지하층수?: SortOrder
    건물용도명?: SortOrder
    통로너비?: SortOrder
    조명시설조도?: SortOrder
    노래방실수?: SortOrder
    청소년실수?: SortOrder
    비상계단여부?: SortOrder
    비상구여부?: SortOrder
    자동환기여부?: SortOrder
    청소년실여부?: SortOrder
    특수조명여부?: SortOrder
    방음시설여부?: SortOrder
    비디오재생기명?: SortOrder
    조명시설유무?: SortOrder
    음향시설여부?: SortOrder
    편의시설여부?: SortOrder
    소방시설여부?: SortOrder
    총게임기수?: SortOrder
    기존게임업외업종명?: SortOrder
    제공게임물명?: SortOrder
    공연장형태구분명?: SortOrder
    품목명?: SortOrder
    최초등록시점?: SortOrder
    지역구분명?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GameBusinessMinOrderByAggregateInput = {
    id?: SortOrder
    번호?: SortOrder
    개방서비스명?: SortOrder
    개방서비스아이디?: SortOrder
    개방자치단체코드?: SortOrder
    관리번호?: SortOrder
    인허가일자?: SortOrder
    인허가취소일자?: SortOrder
    영업상태구분코드?: SortOrder
    영업상태명?: SortOrder
    상세영업상태코드?: SortOrder
    상세영업상태명?: SortOrder
    폐업일자?: SortOrder
    휴업시작일자?: SortOrder
    휴업종료일자?: SortOrder
    재개업일자?: SortOrder
    소재지전화?: SortOrder
    소재지면적?: SortOrder
    소재지우편번호?: SortOrder
    소재지전체주소?: SortOrder
    도로명전체주소?: SortOrder
    도로명우편번호?: SortOrder
    사업장명?: SortOrder
    최종수정시점?: SortOrder
    데이터갱신구분?: SortOrder
    데이터갱신일자?: SortOrder
    업태구분명?: SortOrder
    좌표정보x?: SortOrder
    좌표정보y?: SortOrder
    문화체육업종명?: SortOrder
    문화사업자구분명?: SortOrder
    총층수?: SortOrder
    주변환경명?: SortOrder
    제작취급품목내용?: SortOrder
    시설면적?: SortOrder
    지상층수?: SortOrder
    지하층수?: SortOrder
    건물용도명?: SortOrder
    통로너비?: SortOrder
    조명시설조도?: SortOrder
    노래방실수?: SortOrder
    청소년실수?: SortOrder
    비상계단여부?: SortOrder
    비상구여부?: SortOrder
    자동환기여부?: SortOrder
    청소년실여부?: SortOrder
    특수조명여부?: SortOrder
    방음시설여부?: SortOrder
    비디오재생기명?: SortOrder
    조명시설유무?: SortOrder
    음향시설여부?: SortOrder
    편의시설여부?: SortOrder
    소방시설여부?: SortOrder
    총게임기수?: SortOrder
    기존게임업외업종명?: SortOrder
    제공게임물명?: SortOrder
    공연장형태구분명?: SortOrder
    품목명?: SortOrder
    최초등록시점?: SortOrder
    지역구분명?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GameBusinessSumOrderByAggregateInput = {
    id?: SortOrder
    번호?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    tossId?: SortOrder
    nickname?: SortOrder
    email?: SortOrder
    avatar?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    birthday?: SortOrder
    gender?: SortOrder
    ci?: SortOrder
    di?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    tossId?: SortOrder
    nickname?: SortOrder
    email?: SortOrder
    avatar?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    birthday?: SortOrder
    gender?: SortOrder
    ci?: SortOrder
    di?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    tossId?: SortOrder
    nickname?: SortOrder
    email?: SortOrder
    avatar?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    birthday?: SortOrder
    gender?: SortOrder
    ci?: SortOrder
    di?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type GameBusinessScalarRelationFilter = {
    is?: GameBusinessWhereInput
    isNot?: GameBusinessWhereInput
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type ReviewCountOrderByAggregateInput = {
    id?: SortOrder
    storeId?: SortOrder
    rating?: SortOrder
    content?: SortOrder
    images?: SortOrder
    tags?: SortOrder
    userId?: SortOrder
    userName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReviewAvgOrderByAggregateInput = {
    storeId?: SortOrder
    rating?: SortOrder
  }

  export type ReviewMaxOrderByAggregateInput = {
    id?: SortOrder
    storeId?: SortOrder
    rating?: SortOrder
    content?: SortOrder
    userId?: SortOrder
    userName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReviewMinOrderByAggregateInput = {
    id?: SortOrder
    storeId?: SortOrder
    rating?: SortOrder
    content?: SortOrder
    userId?: SortOrder
    userName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReviewSumOrderByAggregateInput = {
    storeId?: SortOrder
    rating?: SortOrder
  }

  export type ReviewCreateNestedManyWithoutStoreInput = {
    create?: XOR<ReviewCreateWithoutStoreInput, ReviewUncheckedCreateWithoutStoreInput> | ReviewCreateWithoutStoreInput[] | ReviewUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutStoreInput | ReviewCreateOrConnectWithoutStoreInput[]
    createMany?: ReviewCreateManyStoreInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutStoreInput = {
    create?: XOR<ReviewCreateWithoutStoreInput, ReviewUncheckedCreateWithoutStoreInput> | ReviewCreateWithoutStoreInput[] | ReviewUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutStoreInput | ReviewCreateOrConnectWithoutStoreInput[]
    createMany?: ReviewCreateManyStoreInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ReviewUpdateManyWithoutStoreNestedInput = {
    create?: XOR<ReviewCreateWithoutStoreInput, ReviewUncheckedCreateWithoutStoreInput> | ReviewCreateWithoutStoreInput[] | ReviewUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutStoreInput | ReviewCreateOrConnectWithoutStoreInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutStoreInput | ReviewUpsertWithWhereUniqueWithoutStoreInput[]
    createMany?: ReviewCreateManyStoreInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutStoreInput | ReviewUpdateWithWhereUniqueWithoutStoreInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutStoreInput | ReviewUpdateManyWithWhereWithoutStoreInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ReviewUncheckedUpdateManyWithoutStoreNestedInput = {
    create?: XOR<ReviewCreateWithoutStoreInput, ReviewUncheckedCreateWithoutStoreInput> | ReviewCreateWithoutStoreInput[] | ReviewUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutStoreInput | ReviewCreateOrConnectWithoutStoreInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutStoreInput | ReviewUpsertWithWhereUniqueWithoutStoreInput[]
    createMany?: ReviewCreateManyStoreInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutStoreInput | ReviewUpdateWithWhereUniqueWithoutStoreInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutStoreInput | ReviewUpdateManyWithWhereWithoutStoreInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type ReviewCreateNestedManyWithoutUserInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput> | ReviewCreateWithoutUserInput[] | ReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput | ReviewCreateOrConnectWithoutUserInput[]
    createMany?: ReviewCreateManyUserInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput> | ReviewCreateWithoutUserInput[] | ReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput | ReviewCreateOrConnectWithoutUserInput[]
    createMany?: ReviewCreateManyUserInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type ReviewUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput> | ReviewCreateWithoutUserInput[] | ReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput | ReviewCreateOrConnectWithoutUserInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutUserInput | ReviewUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReviewCreateManyUserInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutUserInput | ReviewUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutUserInput | ReviewUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type ReviewUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput> | ReviewCreateWithoutUserInput[] | ReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput | ReviewCreateOrConnectWithoutUserInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutUserInput | ReviewUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReviewCreateManyUserInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutUserInput | ReviewUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutUserInput | ReviewUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type ReviewCreateimagesInput = {
    set: string[]
  }

  export type ReviewCreatetagsInput = {
    set: string[]
  }

  export type GameBusinessCreateNestedOneWithoutReviewsInput = {
    create?: XOR<GameBusinessCreateWithoutReviewsInput, GameBusinessUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: GameBusinessCreateOrConnectWithoutReviewsInput
    connect?: GameBusinessWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutReviewsInput = {
    create?: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewsInput
    connect?: UserWhereUniqueInput
  }

  export type ReviewUpdateimagesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type ReviewUpdatetagsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type GameBusinessUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<GameBusinessCreateWithoutReviewsInput, GameBusinessUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: GameBusinessCreateOrConnectWithoutReviewsInput
    upsert?: GameBusinessUpsertWithoutReviewsInput
    connect?: GameBusinessWhereUniqueInput
    update?: XOR<XOR<GameBusinessUpdateToOneWithWhereWithoutReviewsInput, GameBusinessUpdateWithoutReviewsInput>, GameBusinessUncheckedUpdateWithoutReviewsInput>
  }

  export type UserUpdateOneWithoutReviewsNestedInput = {
    create?: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewsInput
    upsert?: UserUpsertWithoutReviewsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReviewsInput, UserUpdateWithoutReviewsInput>, UserUncheckedUpdateWithoutReviewsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type ReviewCreateWithoutStoreInput = {
    id?: string
    rating: number
    content: string
    images?: ReviewCreateimagesInput | string[]
    tags?: ReviewCreatetagsInput | string[]
    userName?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutReviewsInput
  }

  export type ReviewUncheckedCreateWithoutStoreInput = {
    id?: string
    rating: number
    content: string
    images?: ReviewCreateimagesInput | string[]
    tags?: ReviewCreatetagsInput | string[]
    userId?: string | null
    userName?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewCreateOrConnectWithoutStoreInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutStoreInput, ReviewUncheckedCreateWithoutStoreInput>
  }

  export type ReviewCreateManyStoreInputEnvelope = {
    data: ReviewCreateManyStoreInput | ReviewCreateManyStoreInput[]
    skipDuplicates?: boolean
  }

  export type ReviewUpsertWithWhereUniqueWithoutStoreInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutStoreInput, ReviewUncheckedUpdateWithoutStoreInput>
    create: XOR<ReviewCreateWithoutStoreInput, ReviewUncheckedCreateWithoutStoreInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutStoreInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutStoreInput, ReviewUncheckedUpdateWithoutStoreInput>
  }

  export type ReviewUpdateManyWithWhereWithoutStoreInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutStoreInput>
  }

  export type ReviewScalarWhereInput = {
    AND?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
    OR?: ReviewScalarWhereInput[]
    NOT?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
    id?: StringFilter<"Review"> | string
    storeId?: IntFilter<"Review"> | number
    rating?: IntFilter<"Review"> | number
    content?: StringFilter<"Review"> | string
    images?: StringNullableListFilter<"Review">
    tags?: StringNullableListFilter<"Review">
    userId?: StringNullableFilter<"Review"> | string | null
    userName?: StringFilter<"Review"> | string
    createdAt?: DateTimeFilter<"Review"> | Date | string
    updatedAt?: DateTimeFilter<"Review"> | Date | string
  }

  export type ReviewCreateWithoutUserInput = {
    id?: string
    rating: number
    content: string
    images?: ReviewCreateimagesInput | string[]
    tags?: ReviewCreatetagsInput | string[]
    userName?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    store: GameBusinessCreateNestedOneWithoutReviewsInput
  }

  export type ReviewUncheckedCreateWithoutUserInput = {
    id?: string
    storeId: number
    rating: number
    content: string
    images?: ReviewCreateimagesInput | string[]
    tags?: ReviewCreatetagsInput | string[]
    userName?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewCreateOrConnectWithoutUserInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput>
  }

  export type ReviewCreateManyUserInputEnvelope = {
    data: ReviewCreateManyUserInput | ReviewCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ReviewUpsertWithWhereUniqueWithoutUserInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutUserInput, ReviewUncheckedUpdateWithoutUserInput>
    create: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutUserInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutUserInput, ReviewUncheckedUpdateWithoutUserInput>
  }

  export type ReviewUpdateManyWithWhereWithoutUserInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutUserInput>
  }

  export type GameBusinessCreateWithoutReviewsInput = {
    번호?: number | null
    개방서비스명?: string | null
    개방서비스아이디?: string | null
    개방자치단체코드?: string | null
    관리번호?: string | null
    인허가일자?: string | null
    인허가취소일자?: string | null
    영업상태구분코드?: string | null
    영업상태명?: string | null
    상세영업상태코드?: string | null
    상세영업상태명?: string | null
    폐업일자?: string | null
    휴업시작일자?: string | null
    휴업종료일자?: string | null
    재개업일자?: string | null
    소재지전화?: string | null
    소재지면적?: string | null
    소재지우편번호?: string | null
    소재지전체주소?: string | null
    도로명전체주소?: string | null
    도로명우편번호?: string | null
    사업장명?: string | null
    최종수정시점?: string | null
    데이터갱신구분?: string | null
    데이터갱신일자?: string | null
    업태구분명?: string | null
    좌표정보x?: string | null
    좌표정보y?: string | null
    문화체육업종명?: string | null
    문화사업자구분명?: string | null
    총층수?: string | null
    주변환경명?: string | null
    제작취급품목내용?: string | null
    시설면적?: string | null
    지상층수?: string | null
    지하층수?: string | null
    건물용도명?: string | null
    통로너비?: string | null
    조명시설조도?: string | null
    노래방실수?: string | null
    청소년실수?: string | null
    비상계단여부?: string | null
    비상구여부?: string | null
    자동환기여부?: string | null
    청소년실여부?: string | null
    특수조명여부?: string | null
    방음시설여부?: string | null
    비디오재생기명?: string | null
    조명시설유무?: string | null
    음향시설여부?: string | null
    편의시설여부?: string | null
    소방시설여부?: string | null
    총게임기수?: string | null
    기존게임업외업종명?: string | null
    제공게임물명?: string | null
    공연장형태구분명?: string | null
    품목명?: string | null
    최초등록시점?: string | null
    지역구분명?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GameBusinessUncheckedCreateWithoutReviewsInput = {
    id?: number
    번호?: number | null
    개방서비스명?: string | null
    개방서비스아이디?: string | null
    개방자치단체코드?: string | null
    관리번호?: string | null
    인허가일자?: string | null
    인허가취소일자?: string | null
    영업상태구분코드?: string | null
    영업상태명?: string | null
    상세영업상태코드?: string | null
    상세영업상태명?: string | null
    폐업일자?: string | null
    휴업시작일자?: string | null
    휴업종료일자?: string | null
    재개업일자?: string | null
    소재지전화?: string | null
    소재지면적?: string | null
    소재지우편번호?: string | null
    소재지전체주소?: string | null
    도로명전체주소?: string | null
    도로명우편번호?: string | null
    사업장명?: string | null
    최종수정시점?: string | null
    데이터갱신구분?: string | null
    데이터갱신일자?: string | null
    업태구분명?: string | null
    좌표정보x?: string | null
    좌표정보y?: string | null
    문화체육업종명?: string | null
    문화사업자구분명?: string | null
    총층수?: string | null
    주변환경명?: string | null
    제작취급품목내용?: string | null
    시설면적?: string | null
    지상층수?: string | null
    지하층수?: string | null
    건물용도명?: string | null
    통로너비?: string | null
    조명시설조도?: string | null
    노래방실수?: string | null
    청소년실수?: string | null
    비상계단여부?: string | null
    비상구여부?: string | null
    자동환기여부?: string | null
    청소년실여부?: string | null
    특수조명여부?: string | null
    방음시설여부?: string | null
    비디오재생기명?: string | null
    조명시설유무?: string | null
    음향시설여부?: string | null
    편의시설여부?: string | null
    소방시설여부?: string | null
    총게임기수?: string | null
    기존게임업외업종명?: string | null
    제공게임물명?: string | null
    공연장형태구분명?: string | null
    품목명?: string | null
    최초등록시점?: string | null
    지역구분명?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GameBusinessCreateOrConnectWithoutReviewsInput = {
    where: GameBusinessWhereUniqueInput
    create: XOR<GameBusinessCreateWithoutReviewsInput, GameBusinessUncheckedCreateWithoutReviewsInput>
  }

  export type UserCreateWithoutReviewsInput = {
    id?: string
    tossId?: string | null
    nickname?: string | null
    email?: string | null
    avatar?: string | null
    name?: string | null
    phone?: string | null
    birthday?: string | null
    gender?: string | null
    ci?: string | null
    di?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateWithoutReviewsInput = {
    id?: string
    tossId?: string | null
    nickname?: string | null
    email?: string | null
    avatar?: string | null
    name?: string | null
    phone?: string | null
    birthday?: string | null
    gender?: string | null
    ci?: string | null
    di?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutReviewsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
  }

  export type GameBusinessUpsertWithoutReviewsInput = {
    update: XOR<GameBusinessUpdateWithoutReviewsInput, GameBusinessUncheckedUpdateWithoutReviewsInput>
    create: XOR<GameBusinessCreateWithoutReviewsInput, GameBusinessUncheckedCreateWithoutReviewsInput>
    where?: GameBusinessWhereInput
  }

  export type GameBusinessUpdateToOneWithWhereWithoutReviewsInput = {
    where?: GameBusinessWhereInput
    data: XOR<GameBusinessUpdateWithoutReviewsInput, GameBusinessUncheckedUpdateWithoutReviewsInput>
  }

  export type GameBusinessUpdateWithoutReviewsInput = {
    번호?: NullableIntFieldUpdateOperationsInput | number | null
    개방서비스명?: NullableStringFieldUpdateOperationsInput | string | null
    개방서비스아이디?: NullableStringFieldUpdateOperationsInput | string | null
    개방자치단체코드?: NullableStringFieldUpdateOperationsInput | string | null
    관리번호?: NullableStringFieldUpdateOperationsInput | string | null
    인허가일자?: NullableStringFieldUpdateOperationsInput | string | null
    인허가취소일자?: NullableStringFieldUpdateOperationsInput | string | null
    영업상태구분코드?: NullableStringFieldUpdateOperationsInput | string | null
    영업상태명?: NullableStringFieldUpdateOperationsInput | string | null
    상세영업상태코드?: NullableStringFieldUpdateOperationsInput | string | null
    상세영업상태명?: NullableStringFieldUpdateOperationsInput | string | null
    폐업일자?: NullableStringFieldUpdateOperationsInput | string | null
    휴업시작일자?: NullableStringFieldUpdateOperationsInput | string | null
    휴업종료일자?: NullableStringFieldUpdateOperationsInput | string | null
    재개업일자?: NullableStringFieldUpdateOperationsInput | string | null
    소재지전화?: NullableStringFieldUpdateOperationsInput | string | null
    소재지면적?: NullableStringFieldUpdateOperationsInput | string | null
    소재지우편번호?: NullableStringFieldUpdateOperationsInput | string | null
    소재지전체주소?: NullableStringFieldUpdateOperationsInput | string | null
    도로명전체주소?: NullableStringFieldUpdateOperationsInput | string | null
    도로명우편번호?: NullableStringFieldUpdateOperationsInput | string | null
    사업장명?: NullableStringFieldUpdateOperationsInput | string | null
    최종수정시점?: NullableStringFieldUpdateOperationsInput | string | null
    데이터갱신구분?: NullableStringFieldUpdateOperationsInput | string | null
    데이터갱신일자?: NullableStringFieldUpdateOperationsInput | string | null
    업태구분명?: NullableStringFieldUpdateOperationsInput | string | null
    좌표정보x?: NullableStringFieldUpdateOperationsInput | string | null
    좌표정보y?: NullableStringFieldUpdateOperationsInput | string | null
    문화체육업종명?: NullableStringFieldUpdateOperationsInput | string | null
    문화사업자구분명?: NullableStringFieldUpdateOperationsInput | string | null
    총층수?: NullableStringFieldUpdateOperationsInput | string | null
    주변환경명?: NullableStringFieldUpdateOperationsInput | string | null
    제작취급품목내용?: NullableStringFieldUpdateOperationsInput | string | null
    시설면적?: NullableStringFieldUpdateOperationsInput | string | null
    지상층수?: NullableStringFieldUpdateOperationsInput | string | null
    지하층수?: NullableStringFieldUpdateOperationsInput | string | null
    건물용도명?: NullableStringFieldUpdateOperationsInput | string | null
    통로너비?: NullableStringFieldUpdateOperationsInput | string | null
    조명시설조도?: NullableStringFieldUpdateOperationsInput | string | null
    노래방실수?: NullableStringFieldUpdateOperationsInput | string | null
    청소년실수?: NullableStringFieldUpdateOperationsInput | string | null
    비상계단여부?: NullableStringFieldUpdateOperationsInput | string | null
    비상구여부?: NullableStringFieldUpdateOperationsInput | string | null
    자동환기여부?: NullableStringFieldUpdateOperationsInput | string | null
    청소년실여부?: NullableStringFieldUpdateOperationsInput | string | null
    특수조명여부?: NullableStringFieldUpdateOperationsInput | string | null
    방음시설여부?: NullableStringFieldUpdateOperationsInput | string | null
    비디오재생기명?: NullableStringFieldUpdateOperationsInput | string | null
    조명시설유무?: NullableStringFieldUpdateOperationsInput | string | null
    음향시설여부?: NullableStringFieldUpdateOperationsInput | string | null
    편의시설여부?: NullableStringFieldUpdateOperationsInput | string | null
    소방시설여부?: NullableStringFieldUpdateOperationsInput | string | null
    총게임기수?: NullableStringFieldUpdateOperationsInput | string | null
    기존게임업외업종명?: NullableStringFieldUpdateOperationsInput | string | null
    제공게임물명?: NullableStringFieldUpdateOperationsInput | string | null
    공연장형태구분명?: NullableStringFieldUpdateOperationsInput | string | null
    품목명?: NullableStringFieldUpdateOperationsInput | string | null
    최초등록시점?: NullableStringFieldUpdateOperationsInput | string | null
    지역구분명?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameBusinessUncheckedUpdateWithoutReviewsInput = {
    id?: IntFieldUpdateOperationsInput | number
    번호?: NullableIntFieldUpdateOperationsInput | number | null
    개방서비스명?: NullableStringFieldUpdateOperationsInput | string | null
    개방서비스아이디?: NullableStringFieldUpdateOperationsInput | string | null
    개방자치단체코드?: NullableStringFieldUpdateOperationsInput | string | null
    관리번호?: NullableStringFieldUpdateOperationsInput | string | null
    인허가일자?: NullableStringFieldUpdateOperationsInput | string | null
    인허가취소일자?: NullableStringFieldUpdateOperationsInput | string | null
    영업상태구분코드?: NullableStringFieldUpdateOperationsInput | string | null
    영업상태명?: NullableStringFieldUpdateOperationsInput | string | null
    상세영업상태코드?: NullableStringFieldUpdateOperationsInput | string | null
    상세영업상태명?: NullableStringFieldUpdateOperationsInput | string | null
    폐업일자?: NullableStringFieldUpdateOperationsInput | string | null
    휴업시작일자?: NullableStringFieldUpdateOperationsInput | string | null
    휴업종료일자?: NullableStringFieldUpdateOperationsInput | string | null
    재개업일자?: NullableStringFieldUpdateOperationsInput | string | null
    소재지전화?: NullableStringFieldUpdateOperationsInput | string | null
    소재지면적?: NullableStringFieldUpdateOperationsInput | string | null
    소재지우편번호?: NullableStringFieldUpdateOperationsInput | string | null
    소재지전체주소?: NullableStringFieldUpdateOperationsInput | string | null
    도로명전체주소?: NullableStringFieldUpdateOperationsInput | string | null
    도로명우편번호?: NullableStringFieldUpdateOperationsInput | string | null
    사업장명?: NullableStringFieldUpdateOperationsInput | string | null
    최종수정시점?: NullableStringFieldUpdateOperationsInput | string | null
    데이터갱신구분?: NullableStringFieldUpdateOperationsInput | string | null
    데이터갱신일자?: NullableStringFieldUpdateOperationsInput | string | null
    업태구분명?: NullableStringFieldUpdateOperationsInput | string | null
    좌표정보x?: NullableStringFieldUpdateOperationsInput | string | null
    좌표정보y?: NullableStringFieldUpdateOperationsInput | string | null
    문화체육업종명?: NullableStringFieldUpdateOperationsInput | string | null
    문화사업자구분명?: NullableStringFieldUpdateOperationsInput | string | null
    총층수?: NullableStringFieldUpdateOperationsInput | string | null
    주변환경명?: NullableStringFieldUpdateOperationsInput | string | null
    제작취급품목내용?: NullableStringFieldUpdateOperationsInput | string | null
    시설면적?: NullableStringFieldUpdateOperationsInput | string | null
    지상층수?: NullableStringFieldUpdateOperationsInput | string | null
    지하층수?: NullableStringFieldUpdateOperationsInput | string | null
    건물용도명?: NullableStringFieldUpdateOperationsInput | string | null
    통로너비?: NullableStringFieldUpdateOperationsInput | string | null
    조명시설조도?: NullableStringFieldUpdateOperationsInput | string | null
    노래방실수?: NullableStringFieldUpdateOperationsInput | string | null
    청소년실수?: NullableStringFieldUpdateOperationsInput | string | null
    비상계단여부?: NullableStringFieldUpdateOperationsInput | string | null
    비상구여부?: NullableStringFieldUpdateOperationsInput | string | null
    자동환기여부?: NullableStringFieldUpdateOperationsInput | string | null
    청소년실여부?: NullableStringFieldUpdateOperationsInput | string | null
    특수조명여부?: NullableStringFieldUpdateOperationsInput | string | null
    방음시설여부?: NullableStringFieldUpdateOperationsInput | string | null
    비디오재생기명?: NullableStringFieldUpdateOperationsInput | string | null
    조명시설유무?: NullableStringFieldUpdateOperationsInput | string | null
    음향시설여부?: NullableStringFieldUpdateOperationsInput | string | null
    편의시설여부?: NullableStringFieldUpdateOperationsInput | string | null
    소방시설여부?: NullableStringFieldUpdateOperationsInput | string | null
    총게임기수?: NullableStringFieldUpdateOperationsInput | string | null
    기존게임업외업종명?: NullableStringFieldUpdateOperationsInput | string | null
    제공게임물명?: NullableStringFieldUpdateOperationsInput | string | null
    공연장형태구분명?: NullableStringFieldUpdateOperationsInput | string | null
    품목명?: NullableStringFieldUpdateOperationsInput | string | null
    최초등록시점?: NullableStringFieldUpdateOperationsInput | string | null
    지역구분명?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutReviewsInput = {
    update: XOR<UserUpdateWithoutReviewsInput, UserUncheckedUpdateWithoutReviewsInput>
    create: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReviewsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReviewsInput, UserUncheckedUpdateWithoutReviewsInput>
  }

  export type UserUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tossId?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    birthday?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    ci?: NullableStringFieldUpdateOperationsInput | string | null
    di?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tossId?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    birthday?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    ci?: NullableStringFieldUpdateOperationsInput | string | null
    di?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewCreateManyStoreInput = {
    id?: string
    rating: number
    content: string
    images?: ReviewCreateimagesInput | string[]
    tags?: ReviewCreatetagsInput | string[]
    userId?: string | null
    userName?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewUpdateWithoutStoreInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    images?: ReviewUpdateimagesInput | string[]
    tags?: ReviewUpdatetagsInput | string[]
    userName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateWithoutStoreInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    images?: ReviewUpdateimagesInput | string[]
    tags?: ReviewUpdatetagsInput | string[]
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    userName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyWithoutStoreInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    images?: ReviewUpdateimagesInput | string[]
    tags?: ReviewUpdatetagsInput | string[]
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    userName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewCreateManyUserInput = {
    id?: string
    storeId: number
    rating: number
    content: string
    images?: ReviewCreateimagesInput | string[]
    tags?: ReviewCreatetagsInput | string[]
    userName?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    images?: ReviewUpdateimagesInput | string[]
    tags?: ReviewUpdatetagsInput | string[]
    userName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    store?: GameBusinessUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    storeId?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    images?: ReviewUpdateimagesInput | string[]
    tags?: ReviewUpdatetagsInput | string[]
    userName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    storeId?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    images?: ReviewUpdateimagesInput | string[]
    tags?: ReviewUpdatetagsInput | string[]
    userName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}