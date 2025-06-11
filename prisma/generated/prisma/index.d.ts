
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Entry
 * 
 */
export type Entry = $Result.DefaultSelection<Prisma.$EntryPayload>
/**
 * Model Engram
 * 
 */
export type Engram = $Result.DefaultSelection<Prisma.$EngramPayload>
/**
 * Model Synapse
 * 
 */
export type Synapse = $Result.DefaultSelection<Prisma.$SynapsePayload>
/**
 * Model HippocampusStore
 * 
 */
export type HippocampusStore = $Result.DefaultSelection<Prisma.$HippocampusStorePayload>
/**
 * Model CortexStore
 * 
 */
export type CortexStore = $Result.DefaultSelection<Prisma.$CortexStorePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Provider: {
  GOOGLE: 'GOOGLE',
  APPLE: 'APPLE'
};

export type Provider = (typeof Provider)[keyof typeof Provider]


export const MemoryType: {
  EXPERIENCE: 'EXPERIENCE',
  EMOTION: 'EMOTION',
  PERSON: 'PERSON',
  PLACE: 'PLACE',
  LEARNING: 'LEARNING',
  WORK: 'WORK',
  RELATIONSHIP: 'RELATIONSHIP',
  HOBBY: 'HOBBY',
  HEALTH: 'HEALTH',
  FOOD: 'FOOD',
  TRAVEL: 'TRAVEL',
  OTHER: 'OTHER'
};

export type MemoryType = (typeof MemoryType)[keyof typeof MemoryType]


export const ConsolidationState: {
  FRESH: 'FRESH',
  CONSOLIDATING: 'CONSOLIDATING',
  CONSOLIDATED: 'CONSOLIDATED',
  DECAYING: 'DECAYING'
};

export type ConsolidationState = (typeof ConsolidationState)[keyof typeof ConsolidationState]


export const SynapseType: {
  ASSOCIATIVE: 'ASSOCIATIVE',
  TEMPORAL: 'TEMPORAL',
  EMOTIONAL: 'EMOTIONAL',
  SEMANTIC: 'SEMANTIC'
};

export type SynapseType = (typeof SynapseType)[keyof typeof SynapseType]

}

export type Provider = $Enums.Provider

export const Provider: typeof $Enums.Provider

export type MemoryType = $Enums.MemoryType

export const MemoryType: typeof $Enums.MemoryType

export type ConsolidationState = $Enums.ConsolidationState

export const ConsolidationState: typeof $Enums.ConsolidationState

export type SynapseType = $Enums.SynapseType

export const SynapseType: typeof $Enums.SynapseType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.entry`: Exposes CRUD operations for the **Entry** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Entries
    * const entries = await prisma.entry.findMany()
    * ```
    */
  get entry(): Prisma.EntryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.engram`: Exposes CRUD operations for the **Engram** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Engrams
    * const engrams = await prisma.engram.findMany()
    * ```
    */
  get engram(): Prisma.EngramDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.synapse`: Exposes CRUD operations for the **Synapse** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Synapses
    * const synapses = await prisma.synapse.findMany()
    * ```
    */
  get synapse(): Prisma.SynapseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.hippocampusStore`: Exposes CRUD operations for the **HippocampusStore** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more HippocampusStores
    * const hippocampusStores = await prisma.hippocampusStore.findMany()
    * ```
    */
  get hippocampusStore(): Prisma.HippocampusStoreDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cortexStore`: Exposes CRUD operations for the **CortexStore** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CortexStores
    * const cortexStores = await prisma.cortexStore.findMany()
    * ```
    */
  get cortexStore(): Prisma.CortexStoreDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.9.0
   * Query Engine version: 81e4af48011447c3cc503a190e86995b66d2a28e
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
    User: 'User',
    Entry: 'Entry',
    Engram: 'Engram',
    Synapse: 'Synapse',
    HippocampusStore: 'HippocampusStore',
    CortexStore: 'CortexStore'
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
      modelProps: "user" | "entry" | "engram" | "synapse" | "hippocampusStore" | "cortexStore"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
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
      Entry: {
        payload: Prisma.$EntryPayload<ExtArgs>
        fields: Prisma.EntryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EntryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EntryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntryPayload>
          }
          findFirst: {
            args: Prisma.EntryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EntryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntryPayload>
          }
          findMany: {
            args: Prisma.EntryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntryPayload>[]
          }
          create: {
            args: Prisma.EntryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntryPayload>
          }
          createMany: {
            args: Prisma.EntryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EntryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntryPayload>[]
          }
          delete: {
            args: Prisma.EntryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntryPayload>
          }
          update: {
            args: Prisma.EntryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntryPayload>
          }
          deleteMany: {
            args: Prisma.EntryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EntryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EntryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntryPayload>[]
          }
          upsert: {
            args: Prisma.EntryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntryPayload>
          }
          aggregate: {
            args: Prisma.EntryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEntry>
          }
          groupBy: {
            args: Prisma.EntryGroupByArgs<ExtArgs>
            result: $Utils.Optional<EntryGroupByOutputType>[]
          }
          count: {
            args: Prisma.EntryCountArgs<ExtArgs>
            result: $Utils.Optional<EntryCountAggregateOutputType> | number
          }
        }
      }
      Engram: {
        payload: Prisma.$EngramPayload<ExtArgs>
        fields: Prisma.EngramFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EngramFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EngramPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EngramFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EngramPayload>
          }
          findFirst: {
            args: Prisma.EngramFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EngramPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EngramFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EngramPayload>
          }
          findMany: {
            args: Prisma.EngramFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EngramPayload>[]
          }
          create: {
            args: Prisma.EngramCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EngramPayload>
          }
          createMany: {
            args: Prisma.EngramCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EngramCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EngramPayload>[]
          }
          delete: {
            args: Prisma.EngramDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EngramPayload>
          }
          update: {
            args: Prisma.EngramUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EngramPayload>
          }
          deleteMany: {
            args: Prisma.EngramDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EngramUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EngramUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EngramPayload>[]
          }
          upsert: {
            args: Prisma.EngramUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EngramPayload>
          }
          aggregate: {
            args: Prisma.EngramAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEngram>
          }
          groupBy: {
            args: Prisma.EngramGroupByArgs<ExtArgs>
            result: $Utils.Optional<EngramGroupByOutputType>[]
          }
          count: {
            args: Prisma.EngramCountArgs<ExtArgs>
            result: $Utils.Optional<EngramCountAggregateOutputType> | number
          }
        }
      }
      Synapse: {
        payload: Prisma.$SynapsePayload<ExtArgs>
        fields: Prisma.SynapseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SynapseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SynapsePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SynapseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SynapsePayload>
          }
          findFirst: {
            args: Prisma.SynapseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SynapsePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SynapseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SynapsePayload>
          }
          findMany: {
            args: Prisma.SynapseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SynapsePayload>[]
          }
          create: {
            args: Prisma.SynapseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SynapsePayload>
          }
          createMany: {
            args: Prisma.SynapseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SynapseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SynapsePayload>[]
          }
          delete: {
            args: Prisma.SynapseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SynapsePayload>
          }
          update: {
            args: Prisma.SynapseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SynapsePayload>
          }
          deleteMany: {
            args: Prisma.SynapseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SynapseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SynapseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SynapsePayload>[]
          }
          upsert: {
            args: Prisma.SynapseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SynapsePayload>
          }
          aggregate: {
            args: Prisma.SynapseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSynapse>
          }
          groupBy: {
            args: Prisma.SynapseGroupByArgs<ExtArgs>
            result: $Utils.Optional<SynapseGroupByOutputType>[]
          }
          count: {
            args: Prisma.SynapseCountArgs<ExtArgs>
            result: $Utils.Optional<SynapseCountAggregateOutputType> | number
          }
        }
      }
      HippocampusStore: {
        payload: Prisma.$HippocampusStorePayload<ExtArgs>
        fields: Prisma.HippocampusStoreFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HippocampusStoreFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HippocampusStorePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HippocampusStoreFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HippocampusStorePayload>
          }
          findFirst: {
            args: Prisma.HippocampusStoreFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HippocampusStorePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HippocampusStoreFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HippocampusStorePayload>
          }
          findMany: {
            args: Prisma.HippocampusStoreFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HippocampusStorePayload>[]
          }
          create: {
            args: Prisma.HippocampusStoreCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HippocampusStorePayload>
          }
          createMany: {
            args: Prisma.HippocampusStoreCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HippocampusStoreCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HippocampusStorePayload>[]
          }
          delete: {
            args: Prisma.HippocampusStoreDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HippocampusStorePayload>
          }
          update: {
            args: Prisma.HippocampusStoreUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HippocampusStorePayload>
          }
          deleteMany: {
            args: Prisma.HippocampusStoreDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HippocampusStoreUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HippocampusStoreUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HippocampusStorePayload>[]
          }
          upsert: {
            args: Prisma.HippocampusStoreUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HippocampusStorePayload>
          }
          aggregate: {
            args: Prisma.HippocampusStoreAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHippocampusStore>
          }
          groupBy: {
            args: Prisma.HippocampusStoreGroupByArgs<ExtArgs>
            result: $Utils.Optional<HippocampusStoreGroupByOutputType>[]
          }
          count: {
            args: Prisma.HippocampusStoreCountArgs<ExtArgs>
            result: $Utils.Optional<HippocampusStoreCountAggregateOutputType> | number
          }
        }
      }
      CortexStore: {
        payload: Prisma.$CortexStorePayload<ExtArgs>
        fields: Prisma.CortexStoreFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CortexStoreFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CortexStorePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CortexStoreFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CortexStorePayload>
          }
          findFirst: {
            args: Prisma.CortexStoreFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CortexStorePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CortexStoreFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CortexStorePayload>
          }
          findMany: {
            args: Prisma.CortexStoreFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CortexStorePayload>[]
          }
          create: {
            args: Prisma.CortexStoreCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CortexStorePayload>
          }
          createMany: {
            args: Prisma.CortexStoreCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CortexStoreCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CortexStorePayload>[]
          }
          delete: {
            args: Prisma.CortexStoreDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CortexStorePayload>
          }
          update: {
            args: Prisma.CortexStoreUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CortexStorePayload>
          }
          deleteMany: {
            args: Prisma.CortexStoreDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CortexStoreUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CortexStoreUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CortexStorePayload>[]
          }
          upsert: {
            args: Prisma.CortexStoreUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CortexStorePayload>
          }
          aggregate: {
            args: Prisma.CortexStoreAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCortexStore>
          }
          groupBy: {
            args: Prisma.CortexStoreGroupByArgs<ExtArgs>
            result: $Utils.Optional<CortexStoreGroupByOutputType>[]
          }
          count: {
            args: Prisma.CortexStoreCountArgs<ExtArgs>
            result: $Utils.Optional<CortexStoreCountAggregateOutputType> | number
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
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
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
    user?: UserOmit
    entry?: EntryOmit
    engram?: EngramOmit
    synapse?: SynapseOmit
    hippocampusStore?: HippocampusStoreOmit
    cortexStore?: CortexStoreOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    entries: number
    engrams: number
    hippocampusStore: number
    cortexStore: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    entries?: boolean | UserCountOutputTypeCountEntriesArgs
    engrams?: boolean | UserCountOutputTypeCountEngramsArgs
    hippocampusStore?: boolean | UserCountOutputTypeCountHippocampusStoreArgs
    cortexStore?: boolean | UserCountOutputTypeCountCortexStoreArgs
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
  export type UserCountOutputTypeCountEntriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EntryWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountEngramsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EngramWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountHippocampusStoreArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HippocampusStoreWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCortexStoreArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CortexStoreWhereInput
  }


  /**
   * Count Type EntryCountOutputType
   */

  export type EntryCountOutputType = {
    engrams: number
  }

  export type EntryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    engrams?: boolean | EntryCountOutputTypeCountEngramsArgs
  }

  // Custom InputTypes
  /**
   * EntryCountOutputType without action
   */
  export type EntryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EntryCountOutputType
     */
    select?: EntryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EntryCountOutputType without action
   */
  export type EntryCountOutputTypeCountEngramsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EngramWhereInput
  }


  /**
   * Count Type EngramCountOutputType
   */

  export type EngramCountOutputType = {
    synapseFrom: number
    synapseTo: number
  }

  export type EngramCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    synapseFrom?: boolean | EngramCountOutputTypeCountSynapseFromArgs
    synapseTo?: boolean | EngramCountOutputTypeCountSynapseToArgs
  }

  // Custom InputTypes
  /**
   * EngramCountOutputType without action
   */
  export type EngramCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EngramCountOutputType
     */
    select?: EngramCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EngramCountOutputType without action
   */
  export type EngramCountOutputTypeCountSynapseFromArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SynapseWhereInput
  }

  /**
   * EngramCountOutputType without action
   */
  export type EngramCountOutputTypeCountSynapseToArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SynapseWhereInput
  }


  /**
   * Models
   */

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
    name: string | null
    email: string | null
    provider: $Enums.Provider | null
    providerId: string | null
    avatar: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    provider: $Enums.Provider | null
    providerId: string | null
    avatar: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    provider: number
    providerId: number
    avatar: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    provider?: true
    providerId?: true
    avatar?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    provider?: true
    providerId?: true
    avatar?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    provider?: true
    providerId?: true
    avatar?: true
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
    name: string
    email: string
    provider: $Enums.Provider
    providerId: string
    avatar: string | null
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
    name?: boolean
    email?: boolean
    provider?: boolean
    providerId?: boolean
    avatar?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    entries?: boolean | User$entriesArgs<ExtArgs>
    engrams?: boolean | User$engramsArgs<ExtArgs>
    hippocampusStore?: boolean | User$hippocampusStoreArgs<ExtArgs>
    cortexStore?: boolean | User$cortexStoreArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    provider?: boolean
    providerId?: boolean
    avatar?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    provider?: boolean
    providerId?: boolean
    avatar?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    provider?: boolean
    providerId?: boolean
    avatar?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "provider" | "providerId" | "avatar" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    entries?: boolean | User$entriesArgs<ExtArgs>
    engrams?: boolean | User$engramsArgs<ExtArgs>
    hippocampusStore?: boolean | User$hippocampusStoreArgs<ExtArgs>
    cortexStore?: boolean | User$cortexStoreArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      entries: Prisma.$EntryPayload<ExtArgs>[]
      engrams: Prisma.$EngramPayload<ExtArgs>[]
      hippocampusStore: Prisma.$HippocampusStorePayload<ExtArgs>[]
      cortexStore: Prisma.$CortexStorePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      provider: $Enums.Provider
      providerId: string
      avatar: string | null
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
    entries<T extends User$entriesArgs<ExtArgs> = {}>(args?: Subset<T, User$entriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    engrams<T extends User$engramsArgs<ExtArgs> = {}>(args?: Subset<T, User$engramsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EngramPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    hippocampusStore<T extends User$hippocampusStoreArgs<ExtArgs> = {}>(args?: Subset<T, User$hippocampusStoreArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HippocampusStorePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    cortexStore<T extends User$cortexStoreArgs<ExtArgs> = {}>(args?: Subset<T, User$cortexStoreArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CortexStorePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly provider: FieldRef<"User", 'Provider'>
    readonly providerId: FieldRef<"User", 'String'>
    readonly avatar: FieldRef<"User", 'String'>
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
   * User.entries
   */
  export type User$entriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entry
     */
    select?: EntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entry
     */
    omit?: EntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntryInclude<ExtArgs> | null
    where?: EntryWhereInput
    orderBy?: EntryOrderByWithRelationInput | EntryOrderByWithRelationInput[]
    cursor?: EntryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EntryScalarFieldEnum | EntryScalarFieldEnum[]
  }

  /**
   * User.engrams
   */
  export type User$engramsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Engram
     */
    select?: EngramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Engram
     */
    omit?: EngramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EngramInclude<ExtArgs> | null
    where?: EngramWhereInput
    orderBy?: EngramOrderByWithRelationInput | EngramOrderByWithRelationInput[]
    cursor?: EngramWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EngramScalarFieldEnum | EngramScalarFieldEnum[]
  }

  /**
   * User.hippocampusStore
   */
  export type User$hippocampusStoreArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HippocampusStore
     */
    select?: HippocampusStoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HippocampusStore
     */
    omit?: HippocampusStoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HippocampusStoreInclude<ExtArgs> | null
    where?: HippocampusStoreWhereInput
    orderBy?: HippocampusStoreOrderByWithRelationInput | HippocampusStoreOrderByWithRelationInput[]
    cursor?: HippocampusStoreWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HippocampusStoreScalarFieldEnum | HippocampusStoreScalarFieldEnum[]
  }

  /**
   * User.cortexStore
   */
  export type User$cortexStoreArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CortexStore
     */
    select?: CortexStoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CortexStore
     */
    omit?: CortexStoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CortexStoreInclude<ExtArgs> | null
    where?: CortexStoreWhereInput
    orderBy?: CortexStoreOrderByWithRelationInput | CortexStoreOrderByWithRelationInput[]
    cursor?: CortexStoreWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CortexStoreScalarFieldEnum | CortexStoreScalarFieldEnum[]
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
   * Model Entry
   */

  export type AggregateEntry = {
    _count: EntryCountAggregateOutputType | null
    _min: EntryMinAggregateOutputType | null
    _max: EntryMaxAggregateOutputType | null
  }

  export type EntryMinAggregateOutputType = {
    id: string | null
    content: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EntryMaxAggregateOutputType = {
    id: string | null
    content: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EntryCountAggregateOutputType = {
    id: number
    content: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EntryMinAggregateInputType = {
    id?: true
    content?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EntryMaxAggregateInputType = {
    id?: true
    content?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EntryCountAggregateInputType = {
    id?: true
    content?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EntryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Entry to aggregate.
     */
    where?: EntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Entries to fetch.
     */
    orderBy?: EntryOrderByWithRelationInput | EntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Entries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Entries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Entries
    **/
    _count?: true | EntryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EntryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EntryMaxAggregateInputType
  }

  export type GetEntryAggregateType<T extends EntryAggregateArgs> = {
        [P in keyof T & keyof AggregateEntry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEntry[P]>
      : GetScalarType<T[P], AggregateEntry[P]>
  }




  export type EntryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EntryWhereInput
    orderBy?: EntryOrderByWithAggregationInput | EntryOrderByWithAggregationInput[]
    by: EntryScalarFieldEnum[] | EntryScalarFieldEnum
    having?: EntryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EntryCountAggregateInputType | true
    _min?: EntryMinAggregateInputType
    _max?: EntryMaxAggregateInputType
  }

  export type EntryGroupByOutputType = {
    id: string
    content: string
    userId: string
    createdAt: Date
    updatedAt: Date
    _count: EntryCountAggregateOutputType | null
    _min: EntryMinAggregateOutputType | null
    _max: EntryMaxAggregateOutputType | null
  }

  type GetEntryGroupByPayload<T extends EntryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EntryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EntryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EntryGroupByOutputType[P]>
            : GetScalarType<T[P], EntryGroupByOutputType[P]>
        }
      >
    >


  export type EntrySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    engrams?: boolean | Entry$engramsArgs<ExtArgs>
    _count?: boolean | EntryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["entry"]>

  export type EntrySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["entry"]>

  export type EntrySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["entry"]>

  export type EntrySelectScalar = {
    id?: boolean
    content?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EntryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "content" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["entry"]>
  export type EntryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    engrams?: boolean | Entry$engramsArgs<ExtArgs>
    _count?: boolean | EntryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EntryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type EntryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $EntryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Entry"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      engrams: Prisma.$EngramPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      content: string
      userId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["entry"]>
    composites: {}
  }

  type EntryGetPayload<S extends boolean | null | undefined | EntryDefaultArgs> = $Result.GetResult<Prisma.$EntryPayload, S>

  type EntryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EntryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EntryCountAggregateInputType | true
    }

  export interface EntryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Entry'], meta: { name: 'Entry' } }
    /**
     * Find zero or one Entry that matches the filter.
     * @param {EntryFindUniqueArgs} args - Arguments to find a Entry
     * @example
     * // Get one Entry
     * const entry = await prisma.entry.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EntryFindUniqueArgs>(args: SelectSubset<T, EntryFindUniqueArgs<ExtArgs>>): Prisma__EntryClient<$Result.GetResult<Prisma.$EntryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Entry that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EntryFindUniqueOrThrowArgs} args - Arguments to find a Entry
     * @example
     * // Get one Entry
     * const entry = await prisma.entry.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EntryFindUniqueOrThrowArgs>(args: SelectSubset<T, EntryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EntryClient<$Result.GetResult<Prisma.$EntryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Entry that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntryFindFirstArgs} args - Arguments to find a Entry
     * @example
     * // Get one Entry
     * const entry = await prisma.entry.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EntryFindFirstArgs>(args?: SelectSubset<T, EntryFindFirstArgs<ExtArgs>>): Prisma__EntryClient<$Result.GetResult<Prisma.$EntryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Entry that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntryFindFirstOrThrowArgs} args - Arguments to find a Entry
     * @example
     * // Get one Entry
     * const entry = await prisma.entry.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EntryFindFirstOrThrowArgs>(args?: SelectSubset<T, EntryFindFirstOrThrowArgs<ExtArgs>>): Prisma__EntryClient<$Result.GetResult<Prisma.$EntryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Entries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Entries
     * const entries = await prisma.entry.findMany()
     * 
     * // Get first 10 Entries
     * const entries = await prisma.entry.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const entryWithIdOnly = await prisma.entry.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EntryFindManyArgs>(args?: SelectSubset<T, EntryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Entry.
     * @param {EntryCreateArgs} args - Arguments to create a Entry.
     * @example
     * // Create one Entry
     * const Entry = await prisma.entry.create({
     *   data: {
     *     // ... data to create a Entry
     *   }
     * })
     * 
     */
    create<T extends EntryCreateArgs>(args: SelectSubset<T, EntryCreateArgs<ExtArgs>>): Prisma__EntryClient<$Result.GetResult<Prisma.$EntryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Entries.
     * @param {EntryCreateManyArgs} args - Arguments to create many Entries.
     * @example
     * // Create many Entries
     * const entry = await prisma.entry.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EntryCreateManyArgs>(args?: SelectSubset<T, EntryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Entries and returns the data saved in the database.
     * @param {EntryCreateManyAndReturnArgs} args - Arguments to create many Entries.
     * @example
     * // Create many Entries
     * const entry = await prisma.entry.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Entries and only return the `id`
     * const entryWithIdOnly = await prisma.entry.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EntryCreateManyAndReturnArgs>(args?: SelectSubset<T, EntryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EntryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Entry.
     * @param {EntryDeleteArgs} args - Arguments to delete one Entry.
     * @example
     * // Delete one Entry
     * const Entry = await prisma.entry.delete({
     *   where: {
     *     // ... filter to delete one Entry
     *   }
     * })
     * 
     */
    delete<T extends EntryDeleteArgs>(args: SelectSubset<T, EntryDeleteArgs<ExtArgs>>): Prisma__EntryClient<$Result.GetResult<Prisma.$EntryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Entry.
     * @param {EntryUpdateArgs} args - Arguments to update one Entry.
     * @example
     * // Update one Entry
     * const entry = await prisma.entry.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EntryUpdateArgs>(args: SelectSubset<T, EntryUpdateArgs<ExtArgs>>): Prisma__EntryClient<$Result.GetResult<Prisma.$EntryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Entries.
     * @param {EntryDeleteManyArgs} args - Arguments to filter Entries to delete.
     * @example
     * // Delete a few Entries
     * const { count } = await prisma.entry.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EntryDeleteManyArgs>(args?: SelectSubset<T, EntryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Entries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Entries
     * const entry = await prisma.entry.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EntryUpdateManyArgs>(args: SelectSubset<T, EntryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Entries and returns the data updated in the database.
     * @param {EntryUpdateManyAndReturnArgs} args - Arguments to update many Entries.
     * @example
     * // Update many Entries
     * const entry = await prisma.entry.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Entries and only return the `id`
     * const entryWithIdOnly = await prisma.entry.updateManyAndReturn({
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
    updateManyAndReturn<T extends EntryUpdateManyAndReturnArgs>(args: SelectSubset<T, EntryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EntryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Entry.
     * @param {EntryUpsertArgs} args - Arguments to update or create a Entry.
     * @example
     * // Update or create a Entry
     * const entry = await prisma.entry.upsert({
     *   create: {
     *     // ... data to create a Entry
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Entry we want to update
     *   }
     * })
     */
    upsert<T extends EntryUpsertArgs>(args: SelectSubset<T, EntryUpsertArgs<ExtArgs>>): Prisma__EntryClient<$Result.GetResult<Prisma.$EntryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Entries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntryCountArgs} args - Arguments to filter Entries to count.
     * @example
     * // Count the number of Entries
     * const count = await prisma.entry.count({
     *   where: {
     *     // ... the filter for the Entries we want to count
     *   }
     * })
    **/
    count<T extends EntryCountArgs>(
      args?: Subset<T, EntryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EntryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Entry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EntryAggregateArgs>(args: Subset<T, EntryAggregateArgs>): Prisma.PrismaPromise<GetEntryAggregateType<T>>

    /**
     * Group by Entry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntryGroupByArgs} args - Group by arguments.
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
      T extends EntryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EntryGroupByArgs['orderBy'] }
        : { orderBy?: EntryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EntryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEntryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Entry model
   */
  readonly fields: EntryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Entry.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EntryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    engrams<T extends Entry$engramsArgs<ExtArgs> = {}>(args?: Subset<T, Entry$engramsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EngramPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Entry model
   */
  interface EntryFieldRefs {
    readonly id: FieldRef<"Entry", 'String'>
    readonly content: FieldRef<"Entry", 'String'>
    readonly userId: FieldRef<"Entry", 'String'>
    readonly createdAt: FieldRef<"Entry", 'DateTime'>
    readonly updatedAt: FieldRef<"Entry", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Entry findUnique
   */
  export type EntryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entry
     */
    select?: EntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entry
     */
    omit?: EntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntryInclude<ExtArgs> | null
    /**
     * Filter, which Entry to fetch.
     */
    where: EntryWhereUniqueInput
  }

  /**
   * Entry findUniqueOrThrow
   */
  export type EntryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entry
     */
    select?: EntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entry
     */
    omit?: EntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntryInclude<ExtArgs> | null
    /**
     * Filter, which Entry to fetch.
     */
    where: EntryWhereUniqueInput
  }

  /**
   * Entry findFirst
   */
  export type EntryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entry
     */
    select?: EntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entry
     */
    omit?: EntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntryInclude<ExtArgs> | null
    /**
     * Filter, which Entry to fetch.
     */
    where?: EntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Entries to fetch.
     */
    orderBy?: EntryOrderByWithRelationInput | EntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Entries.
     */
    cursor?: EntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Entries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Entries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Entries.
     */
    distinct?: EntryScalarFieldEnum | EntryScalarFieldEnum[]
  }

  /**
   * Entry findFirstOrThrow
   */
  export type EntryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entry
     */
    select?: EntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entry
     */
    omit?: EntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntryInclude<ExtArgs> | null
    /**
     * Filter, which Entry to fetch.
     */
    where?: EntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Entries to fetch.
     */
    orderBy?: EntryOrderByWithRelationInput | EntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Entries.
     */
    cursor?: EntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Entries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Entries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Entries.
     */
    distinct?: EntryScalarFieldEnum | EntryScalarFieldEnum[]
  }

  /**
   * Entry findMany
   */
  export type EntryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entry
     */
    select?: EntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entry
     */
    omit?: EntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntryInclude<ExtArgs> | null
    /**
     * Filter, which Entries to fetch.
     */
    where?: EntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Entries to fetch.
     */
    orderBy?: EntryOrderByWithRelationInput | EntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Entries.
     */
    cursor?: EntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Entries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Entries.
     */
    skip?: number
    distinct?: EntryScalarFieldEnum | EntryScalarFieldEnum[]
  }

  /**
   * Entry create
   */
  export type EntryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entry
     */
    select?: EntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entry
     */
    omit?: EntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntryInclude<ExtArgs> | null
    /**
     * The data needed to create a Entry.
     */
    data: XOR<EntryCreateInput, EntryUncheckedCreateInput>
  }

  /**
   * Entry createMany
   */
  export type EntryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Entries.
     */
    data: EntryCreateManyInput | EntryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Entry createManyAndReturn
   */
  export type EntryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entry
     */
    select?: EntrySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Entry
     */
    omit?: EntryOmit<ExtArgs> | null
    /**
     * The data used to create many Entries.
     */
    data: EntryCreateManyInput | EntryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Entry update
   */
  export type EntryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entry
     */
    select?: EntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entry
     */
    omit?: EntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntryInclude<ExtArgs> | null
    /**
     * The data needed to update a Entry.
     */
    data: XOR<EntryUpdateInput, EntryUncheckedUpdateInput>
    /**
     * Choose, which Entry to update.
     */
    where: EntryWhereUniqueInput
  }

  /**
   * Entry updateMany
   */
  export type EntryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Entries.
     */
    data: XOR<EntryUpdateManyMutationInput, EntryUncheckedUpdateManyInput>
    /**
     * Filter which Entries to update
     */
    where?: EntryWhereInput
    /**
     * Limit how many Entries to update.
     */
    limit?: number
  }

  /**
   * Entry updateManyAndReturn
   */
  export type EntryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entry
     */
    select?: EntrySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Entry
     */
    omit?: EntryOmit<ExtArgs> | null
    /**
     * The data used to update Entries.
     */
    data: XOR<EntryUpdateManyMutationInput, EntryUncheckedUpdateManyInput>
    /**
     * Filter which Entries to update
     */
    where?: EntryWhereInput
    /**
     * Limit how many Entries to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Entry upsert
   */
  export type EntryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entry
     */
    select?: EntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entry
     */
    omit?: EntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntryInclude<ExtArgs> | null
    /**
     * The filter to search for the Entry to update in case it exists.
     */
    where: EntryWhereUniqueInput
    /**
     * In case the Entry found by the `where` argument doesn't exist, create a new Entry with this data.
     */
    create: XOR<EntryCreateInput, EntryUncheckedCreateInput>
    /**
     * In case the Entry was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EntryUpdateInput, EntryUncheckedUpdateInput>
  }

  /**
   * Entry delete
   */
  export type EntryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entry
     */
    select?: EntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entry
     */
    omit?: EntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntryInclude<ExtArgs> | null
    /**
     * Filter which Entry to delete.
     */
    where: EntryWhereUniqueInput
  }

  /**
   * Entry deleteMany
   */
  export type EntryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Entries to delete
     */
    where?: EntryWhereInput
    /**
     * Limit how many Entries to delete.
     */
    limit?: number
  }

  /**
   * Entry.engrams
   */
  export type Entry$engramsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Engram
     */
    select?: EngramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Engram
     */
    omit?: EngramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EngramInclude<ExtArgs> | null
    where?: EngramWhereInput
    orderBy?: EngramOrderByWithRelationInput | EngramOrderByWithRelationInput[]
    cursor?: EngramWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EngramScalarFieldEnum | EngramScalarFieldEnum[]
  }

  /**
   * Entry without action
   */
  export type EntryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entry
     */
    select?: EntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entry
     */
    omit?: EntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntryInclude<ExtArgs> | null
  }


  /**
   * Model Engram
   */

  export type AggregateEngram = {
    _count: EngramCountAggregateOutputType | null
    _avg: EngramAvgAggregateOutputType | null
    _sum: EngramSumAggregateOutputType | null
    _min: EngramMinAggregateOutputType | null
    _max: EngramMaxAggregateOutputType | null
  }

  export type EngramAvgAggregateOutputType = {
    embedding: number | null
    crebScore: number | null
    emotionScore: number | null
    importance: number | null
    rehearsalCount: number | null
  }

  export type EngramSumAggregateOutputType = {
    embedding: number[]
    crebScore: number | null
    emotionScore: number | null
    importance: number | null
    rehearsalCount: number | null
  }

  export type EngramMinAggregateOutputType = {
    id: string | null
    content: string | null
    crebScore: number | null
    emotionScore: number | null
    importance: number | null
    rehearsalCount: number | null
    consolidationState: $Enums.ConsolidationState | null
    category: $Enums.MemoryType | null
    entryId: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EngramMaxAggregateOutputType = {
    id: string | null
    content: string | null
    crebScore: number | null
    emotionScore: number | null
    importance: number | null
    rehearsalCount: number | null
    consolidationState: $Enums.ConsolidationState | null
    category: $Enums.MemoryType | null
    entryId: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EngramCountAggregateOutputType = {
    id: number
    content: number
    embedding: number
    crebScore: number
    emotionScore: number
    importance: number
    rehearsalCount: number
    consolidationState: number
    category: number
    keywords: number
    entryId: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EngramAvgAggregateInputType = {
    embedding?: true
    crebScore?: true
    emotionScore?: true
    importance?: true
    rehearsalCount?: true
  }

  export type EngramSumAggregateInputType = {
    embedding?: true
    crebScore?: true
    emotionScore?: true
    importance?: true
    rehearsalCount?: true
  }

  export type EngramMinAggregateInputType = {
    id?: true
    content?: true
    crebScore?: true
    emotionScore?: true
    importance?: true
    rehearsalCount?: true
    consolidationState?: true
    category?: true
    entryId?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EngramMaxAggregateInputType = {
    id?: true
    content?: true
    crebScore?: true
    emotionScore?: true
    importance?: true
    rehearsalCount?: true
    consolidationState?: true
    category?: true
    entryId?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EngramCountAggregateInputType = {
    id?: true
    content?: true
    embedding?: true
    crebScore?: true
    emotionScore?: true
    importance?: true
    rehearsalCount?: true
    consolidationState?: true
    category?: true
    keywords?: true
    entryId?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EngramAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Engram to aggregate.
     */
    where?: EngramWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Engrams to fetch.
     */
    orderBy?: EngramOrderByWithRelationInput | EngramOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EngramWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Engrams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Engrams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Engrams
    **/
    _count?: true | EngramCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EngramAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EngramSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EngramMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EngramMaxAggregateInputType
  }

  export type GetEngramAggregateType<T extends EngramAggregateArgs> = {
        [P in keyof T & keyof AggregateEngram]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEngram[P]>
      : GetScalarType<T[P], AggregateEngram[P]>
  }




  export type EngramGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EngramWhereInput
    orderBy?: EngramOrderByWithAggregationInput | EngramOrderByWithAggregationInput[]
    by: EngramScalarFieldEnum[] | EngramScalarFieldEnum
    having?: EngramScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EngramCountAggregateInputType | true
    _avg?: EngramAvgAggregateInputType
    _sum?: EngramSumAggregateInputType
    _min?: EngramMinAggregateInputType
    _max?: EngramMaxAggregateInputType
  }

  export type EngramGroupByOutputType = {
    id: string
    content: string
    embedding: number[]
    crebScore: number
    emotionScore: number
    importance: number
    rehearsalCount: number
    consolidationState: $Enums.ConsolidationState
    category: $Enums.MemoryType
    keywords: string[]
    entryId: string
    userId: string
    createdAt: Date
    updatedAt: Date
    _count: EngramCountAggregateOutputType | null
    _avg: EngramAvgAggregateOutputType | null
    _sum: EngramSumAggregateOutputType | null
    _min: EngramMinAggregateOutputType | null
    _max: EngramMaxAggregateOutputType | null
  }

  type GetEngramGroupByPayload<T extends EngramGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EngramGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EngramGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EngramGroupByOutputType[P]>
            : GetScalarType<T[P], EngramGroupByOutputType[P]>
        }
      >
    >


  export type EngramSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    embedding?: boolean
    crebScore?: boolean
    emotionScore?: boolean
    importance?: boolean
    rehearsalCount?: boolean
    consolidationState?: boolean
    category?: boolean
    keywords?: boolean
    entryId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    entry?: boolean | EntryDefaultArgs<ExtArgs>
    synapseFrom?: boolean | Engram$synapseFromArgs<ExtArgs>
    synapseTo?: boolean | Engram$synapseToArgs<ExtArgs>
    hippocampus?: boolean | Engram$hippocampusArgs<ExtArgs>
    cortex?: boolean | Engram$cortexArgs<ExtArgs>
    _count?: boolean | EngramCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["engram"]>

  export type EngramSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    embedding?: boolean
    crebScore?: boolean
    emotionScore?: boolean
    importance?: boolean
    rehearsalCount?: boolean
    consolidationState?: boolean
    category?: boolean
    keywords?: boolean
    entryId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    entry?: boolean | EntryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["engram"]>

  export type EngramSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    embedding?: boolean
    crebScore?: boolean
    emotionScore?: boolean
    importance?: boolean
    rehearsalCount?: boolean
    consolidationState?: boolean
    category?: boolean
    keywords?: boolean
    entryId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    entry?: boolean | EntryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["engram"]>

  export type EngramSelectScalar = {
    id?: boolean
    content?: boolean
    embedding?: boolean
    crebScore?: boolean
    emotionScore?: boolean
    importance?: boolean
    rehearsalCount?: boolean
    consolidationState?: boolean
    category?: boolean
    keywords?: boolean
    entryId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EngramOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "content" | "embedding" | "crebScore" | "emotionScore" | "importance" | "rehearsalCount" | "consolidationState" | "category" | "keywords" | "entryId" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["engram"]>
  export type EngramInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    entry?: boolean | EntryDefaultArgs<ExtArgs>
    synapseFrom?: boolean | Engram$synapseFromArgs<ExtArgs>
    synapseTo?: boolean | Engram$synapseToArgs<ExtArgs>
    hippocampus?: boolean | Engram$hippocampusArgs<ExtArgs>
    cortex?: boolean | Engram$cortexArgs<ExtArgs>
    _count?: boolean | EngramCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EngramIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    entry?: boolean | EntryDefaultArgs<ExtArgs>
  }
  export type EngramIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    entry?: boolean | EntryDefaultArgs<ExtArgs>
  }

  export type $EngramPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Engram"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      entry: Prisma.$EntryPayload<ExtArgs>
      synapseFrom: Prisma.$SynapsePayload<ExtArgs>[]
      synapseTo: Prisma.$SynapsePayload<ExtArgs>[]
      hippocampus: Prisma.$HippocampusStorePayload<ExtArgs> | null
      cortex: Prisma.$CortexStorePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      content: string
      embedding: number[]
      crebScore: number
      emotionScore: number
      importance: number
      rehearsalCount: number
      consolidationState: $Enums.ConsolidationState
      category: $Enums.MemoryType
      keywords: string[]
      entryId: string
      userId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["engram"]>
    composites: {}
  }

  type EngramGetPayload<S extends boolean | null | undefined | EngramDefaultArgs> = $Result.GetResult<Prisma.$EngramPayload, S>

  type EngramCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EngramFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EngramCountAggregateInputType | true
    }

  export interface EngramDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Engram'], meta: { name: 'Engram' } }
    /**
     * Find zero or one Engram that matches the filter.
     * @param {EngramFindUniqueArgs} args - Arguments to find a Engram
     * @example
     * // Get one Engram
     * const engram = await prisma.engram.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EngramFindUniqueArgs>(args: SelectSubset<T, EngramFindUniqueArgs<ExtArgs>>): Prisma__EngramClient<$Result.GetResult<Prisma.$EngramPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Engram that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EngramFindUniqueOrThrowArgs} args - Arguments to find a Engram
     * @example
     * // Get one Engram
     * const engram = await prisma.engram.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EngramFindUniqueOrThrowArgs>(args: SelectSubset<T, EngramFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EngramClient<$Result.GetResult<Prisma.$EngramPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Engram that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EngramFindFirstArgs} args - Arguments to find a Engram
     * @example
     * // Get one Engram
     * const engram = await prisma.engram.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EngramFindFirstArgs>(args?: SelectSubset<T, EngramFindFirstArgs<ExtArgs>>): Prisma__EngramClient<$Result.GetResult<Prisma.$EngramPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Engram that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EngramFindFirstOrThrowArgs} args - Arguments to find a Engram
     * @example
     * // Get one Engram
     * const engram = await prisma.engram.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EngramFindFirstOrThrowArgs>(args?: SelectSubset<T, EngramFindFirstOrThrowArgs<ExtArgs>>): Prisma__EngramClient<$Result.GetResult<Prisma.$EngramPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Engrams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EngramFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Engrams
     * const engrams = await prisma.engram.findMany()
     * 
     * // Get first 10 Engrams
     * const engrams = await prisma.engram.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const engramWithIdOnly = await prisma.engram.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EngramFindManyArgs>(args?: SelectSubset<T, EngramFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EngramPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Engram.
     * @param {EngramCreateArgs} args - Arguments to create a Engram.
     * @example
     * // Create one Engram
     * const Engram = await prisma.engram.create({
     *   data: {
     *     // ... data to create a Engram
     *   }
     * })
     * 
     */
    create<T extends EngramCreateArgs>(args: SelectSubset<T, EngramCreateArgs<ExtArgs>>): Prisma__EngramClient<$Result.GetResult<Prisma.$EngramPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Engrams.
     * @param {EngramCreateManyArgs} args - Arguments to create many Engrams.
     * @example
     * // Create many Engrams
     * const engram = await prisma.engram.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EngramCreateManyArgs>(args?: SelectSubset<T, EngramCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Engrams and returns the data saved in the database.
     * @param {EngramCreateManyAndReturnArgs} args - Arguments to create many Engrams.
     * @example
     * // Create many Engrams
     * const engram = await prisma.engram.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Engrams and only return the `id`
     * const engramWithIdOnly = await prisma.engram.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EngramCreateManyAndReturnArgs>(args?: SelectSubset<T, EngramCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EngramPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Engram.
     * @param {EngramDeleteArgs} args - Arguments to delete one Engram.
     * @example
     * // Delete one Engram
     * const Engram = await prisma.engram.delete({
     *   where: {
     *     // ... filter to delete one Engram
     *   }
     * })
     * 
     */
    delete<T extends EngramDeleteArgs>(args: SelectSubset<T, EngramDeleteArgs<ExtArgs>>): Prisma__EngramClient<$Result.GetResult<Prisma.$EngramPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Engram.
     * @param {EngramUpdateArgs} args - Arguments to update one Engram.
     * @example
     * // Update one Engram
     * const engram = await prisma.engram.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EngramUpdateArgs>(args: SelectSubset<T, EngramUpdateArgs<ExtArgs>>): Prisma__EngramClient<$Result.GetResult<Prisma.$EngramPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Engrams.
     * @param {EngramDeleteManyArgs} args - Arguments to filter Engrams to delete.
     * @example
     * // Delete a few Engrams
     * const { count } = await prisma.engram.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EngramDeleteManyArgs>(args?: SelectSubset<T, EngramDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Engrams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EngramUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Engrams
     * const engram = await prisma.engram.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EngramUpdateManyArgs>(args: SelectSubset<T, EngramUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Engrams and returns the data updated in the database.
     * @param {EngramUpdateManyAndReturnArgs} args - Arguments to update many Engrams.
     * @example
     * // Update many Engrams
     * const engram = await prisma.engram.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Engrams and only return the `id`
     * const engramWithIdOnly = await prisma.engram.updateManyAndReturn({
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
    updateManyAndReturn<T extends EngramUpdateManyAndReturnArgs>(args: SelectSubset<T, EngramUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EngramPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Engram.
     * @param {EngramUpsertArgs} args - Arguments to update or create a Engram.
     * @example
     * // Update or create a Engram
     * const engram = await prisma.engram.upsert({
     *   create: {
     *     // ... data to create a Engram
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Engram we want to update
     *   }
     * })
     */
    upsert<T extends EngramUpsertArgs>(args: SelectSubset<T, EngramUpsertArgs<ExtArgs>>): Prisma__EngramClient<$Result.GetResult<Prisma.$EngramPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Engrams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EngramCountArgs} args - Arguments to filter Engrams to count.
     * @example
     * // Count the number of Engrams
     * const count = await prisma.engram.count({
     *   where: {
     *     // ... the filter for the Engrams we want to count
     *   }
     * })
    **/
    count<T extends EngramCountArgs>(
      args?: Subset<T, EngramCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EngramCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Engram.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EngramAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EngramAggregateArgs>(args: Subset<T, EngramAggregateArgs>): Prisma.PrismaPromise<GetEngramAggregateType<T>>

    /**
     * Group by Engram.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EngramGroupByArgs} args - Group by arguments.
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
      T extends EngramGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EngramGroupByArgs['orderBy'] }
        : { orderBy?: EngramGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EngramGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEngramGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Engram model
   */
  readonly fields: EngramFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Engram.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EngramClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    entry<T extends EntryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EntryDefaultArgs<ExtArgs>>): Prisma__EntryClient<$Result.GetResult<Prisma.$EntryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    synapseFrom<T extends Engram$synapseFromArgs<ExtArgs> = {}>(args?: Subset<T, Engram$synapseFromArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SynapsePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    synapseTo<T extends Engram$synapseToArgs<ExtArgs> = {}>(args?: Subset<T, Engram$synapseToArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SynapsePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    hippocampus<T extends Engram$hippocampusArgs<ExtArgs> = {}>(args?: Subset<T, Engram$hippocampusArgs<ExtArgs>>): Prisma__HippocampusStoreClient<$Result.GetResult<Prisma.$HippocampusStorePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    cortex<T extends Engram$cortexArgs<ExtArgs> = {}>(args?: Subset<T, Engram$cortexArgs<ExtArgs>>): Prisma__CortexStoreClient<$Result.GetResult<Prisma.$CortexStorePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Engram model
   */
  interface EngramFieldRefs {
    readonly id: FieldRef<"Engram", 'String'>
    readonly content: FieldRef<"Engram", 'String'>
    readonly embedding: FieldRef<"Engram", 'Float[]'>
    readonly crebScore: FieldRef<"Engram", 'Float'>
    readonly emotionScore: FieldRef<"Engram", 'Float'>
    readonly importance: FieldRef<"Engram", 'Float'>
    readonly rehearsalCount: FieldRef<"Engram", 'Int'>
    readonly consolidationState: FieldRef<"Engram", 'ConsolidationState'>
    readonly category: FieldRef<"Engram", 'MemoryType'>
    readonly keywords: FieldRef<"Engram", 'String[]'>
    readonly entryId: FieldRef<"Engram", 'String'>
    readonly userId: FieldRef<"Engram", 'String'>
    readonly createdAt: FieldRef<"Engram", 'DateTime'>
    readonly updatedAt: FieldRef<"Engram", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Engram findUnique
   */
  export type EngramFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Engram
     */
    select?: EngramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Engram
     */
    omit?: EngramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EngramInclude<ExtArgs> | null
    /**
     * Filter, which Engram to fetch.
     */
    where: EngramWhereUniqueInput
  }

  /**
   * Engram findUniqueOrThrow
   */
  export type EngramFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Engram
     */
    select?: EngramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Engram
     */
    omit?: EngramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EngramInclude<ExtArgs> | null
    /**
     * Filter, which Engram to fetch.
     */
    where: EngramWhereUniqueInput
  }

  /**
   * Engram findFirst
   */
  export type EngramFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Engram
     */
    select?: EngramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Engram
     */
    omit?: EngramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EngramInclude<ExtArgs> | null
    /**
     * Filter, which Engram to fetch.
     */
    where?: EngramWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Engrams to fetch.
     */
    orderBy?: EngramOrderByWithRelationInput | EngramOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Engrams.
     */
    cursor?: EngramWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Engrams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Engrams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Engrams.
     */
    distinct?: EngramScalarFieldEnum | EngramScalarFieldEnum[]
  }

  /**
   * Engram findFirstOrThrow
   */
  export type EngramFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Engram
     */
    select?: EngramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Engram
     */
    omit?: EngramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EngramInclude<ExtArgs> | null
    /**
     * Filter, which Engram to fetch.
     */
    where?: EngramWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Engrams to fetch.
     */
    orderBy?: EngramOrderByWithRelationInput | EngramOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Engrams.
     */
    cursor?: EngramWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Engrams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Engrams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Engrams.
     */
    distinct?: EngramScalarFieldEnum | EngramScalarFieldEnum[]
  }

  /**
   * Engram findMany
   */
  export type EngramFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Engram
     */
    select?: EngramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Engram
     */
    omit?: EngramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EngramInclude<ExtArgs> | null
    /**
     * Filter, which Engrams to fetch.
     */
    where?: EngramWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Engrams to fetch.
     */
    orderBy?: EngramOrderByWithRelationInput | EngramOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Engrams.
     */
    cursor?: EngramWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Engrams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Engrams.
     */
    skip?: number
    distinct?: EngramScalarFieldEnum | EngramScalarFieldEnum[]
  }

  /**
   * Engram create
   */
  export type EngramCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Engram
     */
    select?: EngramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Engram
     */
    omit?: EngramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EngramInclude<ExtArgs> | null
    /**
     * The data needed to create a Engram.
     */
    data: XOR<EngramCreateInput, EngramUncheckedCreateInput>
  }

  /**
   * Engram createMany
   */
  export type EngramCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Engrams.
     */
    data: EngramCreateManyInput | EngramCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Engram createManyAndReturn
   */
  export type EngramCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Engram
     */
    select?: EngramSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Engram
     */
    omit?: EngramOmit<ExtArgs> | null
    /**
     * The data used to create many Engrams.
     */
    data: EngramCreateManyInput | EngramCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EngramIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Engram update
   */
  export type EngramUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Engram
     */
    select?: EngramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Engram
     */
    omit?: EngramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EngramInclude<ExtArgs> | null
    /**
     * The data needed to update a Engram.
     */
    data: XOR<EngramUpdateInput, EngramUncheckedUpdateInput>
    /**
     * Choose, which Engram to update.
     */
    where: EngramWhereUniqueInput
  }

  /**
   * Engram updateMany
   */
  export type EngramUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Engrams.
     */
    data: XOR<EngramUpdateManyMutationInput, EngramUncheckedUpdateManyInput>
    /**
     * Filter which Engrams to update
     */
    where?: EngramWhereInput
    /**
     * Limit how many Engrams to update.
     */
    limit?: number
  }

  /**
   * Engram updateManyAndReturn
   */
  export type EngramUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Engram
     */
    select?: EngramSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Engram
     */
    omit?: EngramOmit<ExtArgs> | null
    /**
     * The data used to update Engrams.
     */
    data: XOR<EngramUpdateManyMutationInput, EngramUncheckedUpdateManyInput>
    /**
     * Filter which Engrams to update
     */
    where?: EngramWhereInput
    /**
     * Limit how many Engrams to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EngramIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Engram upsert
   */
  export type EngramUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Engram
     */
    select?: EngramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Engram
     */
    omit?: EngramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EngramInclude<ExtArgs> | null
    /**
     * The filter to search for the Engram to update in case it exists.
     */
    where: EngramWhereUniqueInput
    /**
     * In case the Engram found by the `where` argument doesn't exist, create a new Engram with this data.
     */
    create: XOR<EngramCreateInput, EngramUncheckedCreateInput>
    /**
     * In case the Engram was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EngramUpdateInput, EngramUncheckedUpdateInput>
  }

  /**
   * Engram delete
   */
  export type EngramDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Engram
     */
    select?: EngramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Engram
     */
    omit?: EngramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EngramInclude<ExtArgs> | null
    /**
     * Filter which Engram to delete.
     */
    where: EngramWhereUniqueInput
  }

  /**
   * Engram deleteMany
   */
  export type EngramDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Engrams to delete
     */
    where?: EngramWhereInput
    /**
     * Limit how many Engrams to delete.
     */
    limit?: number
  }

  /**
   * Engram.synapseFrom
   */
  export type Engram$synapseFromArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Synapse
     */
    select?: SynapseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Synapse
     */
    omit?: SynapseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SynapseInclude<ExtArgs> | null
    where?: SynapseWhereInput
    orderBy?: SynapseOrderByWithRelationInput | SynapseOrderByWithRelationInput[]
    cursor?: SynapseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SynapseScalarFieldEnum | SynapseScalarFieldEnum[]
  }

  /**
   * Engram.synapseTo
   */
  export type Engram$synapseToArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Synapse
     */
    select?: SynapseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Synapse
     */
    omit?: SynapseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SynapseInclude<ExtArgs> | null
    where?: SynapseWhereInput
    orderBy?: SynapseOrderByWithRelationInput | SynapseOrderByWithRelationInput[]
    cursor?: SynapseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SynapseScalarFieldEnum | SynapseScalarFieldEnum[]
  }

  /**
   * Engram.hippocampus
   */
  export type Engram$hippocampusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HippocampusStore
     */
    select?: HippocampusStoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HippocampusStore
     */
    omit?: HippocampusStoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HippocampusStoreInclude<ExtArgs> | null
    where?: HippocampusStoreWhereInput
  }

  /**
   * Engram.cortex
   */
  export type Engram$cortexArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CortexStore
     */
    select?: CortexStoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CortexStore
     */
    omit?: CortexStoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CortexStoreInclude<ExtArgs> | null
    where?: CortexStoreWhereInput
  }

  /**
   * Engram without action
   */
  export type EngramDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Engram
     */
    select?: EngramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Engram
     */
    omit?: EngramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EngramInclude<ExtArgs> | null
  }


  /**
   * Model Synapse
   */

  export type AggregateSynapse = {
    _count: SynapseCountAggregateOutputType | null
    _avg: SynapseAvgAggregateOutputType | null
    _sum: SynapseSumAggregateOutputType | null
    _min: SynapseMinAggregateOutputType | null
    _max: SynapseMaxAggregateOutputType | null
  }

  export type SynapseAvgAggregateOutputType = {
    strength: number | null
  }

  export type SynapseSumAggregateOutputType = {
    strength: number | null
  }

  export type SynapseMinAggregateOutputType = {
    id: string | null
    fromEngramId: string | null
    toEngramId: string | null
    strength: number | null
    type: $Enums.SynapseType | null
    createdAt: Date | null
  }

  export type SynapseMaxAggregateOutputType = {
    id: string | null
    fromEngramId: string | null
    toEngramId: string | null
    strength: number | null
    type: $Enums.SynapseType | null
    createdAt: Date | null
  }

  export type SynapseCountAggregateOutputType = {
    id: number
    fromEngramId: number
    toEngramId: number
    strength: number
    type: number
    createdAt: number
    _all: number
  }


  export type SynapseAvgAggregateInputType = {
    strength?: true
  }

  export type SynapseSumAggregateInputType = {
    strength?: true
  }

  export type SynapseMinAggregateInputType = {
    id?: true
    fromEngramId?: true
    toEngramId?: true
    strength?: true
    type?: true
    createdAt?: true
  }

  export type SynapseMaxAggregateInputType = {
    id?: true
    fromEngramId?: true
    toEngramId?: true
    strength?: true
    type?: true
    createdAt?: true
  }

  export type SynapseCountAggregateInputType = {
    id?: true
    fromEngramId?: true
    toEngramId?: true
    strength?: true
    type?: true
    createdAt?: true
    _all?: true
  }

  export type SynapseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Synapse to aggregate.
     */
    where?: SynapseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Synapses to fetch.
     */
    orderBy?: SynapseOrderByWithRelationInput | SynapseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SynapseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Synapses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Synapses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Synapses
    **/
    _count?: true | SynapseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SynapseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SynapseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SynapseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SynapseMaxAggregateInputType
  }

  export type GetSynapseAggregateType<T extends SynapseAggregateArgs> = {
        [P in keyof T & keyof AggregateSynapse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSynapse[P]>
      : GetScalarType<T[P], AggregateSynapse[P]>
  }




  export type SynapseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SynapseWhereInput
    orderBy?: SynapseOrderByWithAggregationInput | SynapseOrderByWithAggregationInput[]
    by: SynapseScalarFieldEnum[] | SynapseScalarFieldEnum
    having?: SynapseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SynapseCountAggregateInputType | true
    _avg?: SynapseAvgAggregateInputType
    _sum?: SynapseSumAggregateInputType
    _min?: SynapseMinAggregateInputType
    _max?: SynapseMaxAggregateInputType
  }

  export type SynapseGroupByOutputType = {
    id: string
    fromEngramId: string
    toEngramId: string
    strength: number
    type: $Enums.SynapseType
    createdAt: Date
    _count: SynapseCountAggregateOutputType | null
    _avg: SynapseAvgAggregateOutputType | null
    _sum: SynapseSumAggregateOutputType | null
    _min: SynapseMinAggregateOutputType | null
    _max: SynapseMaxAggregateOutputType | null
  }

  type GetSynapseGroupByPayload<T extends SynapseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SynapseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SynapseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SynapseGroupByOutputType[P]>
            : GetScalarType<T[P], SynapseGroupByOutputType[P]>
        }
      >
    >


  export type SynapseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fromEngramId?: boolean
    toEngramId?: boolean
    strength?: boolean
    type?: boolean
    createdAt?: boolean
    fromEngram?: boolean | EngramDefaultArgs<ExtArgs>
    toEngram?: boolean | EngramDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["synapse"]>

  export type SynapseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fromEngramId?: boolean
    toEngramId?: boolean
    strength?: boolean
    type?: boolean
    createdAt?: boolean
    fromEngram?: boolean | EngramDefaultArgs<ExtArgs>
    toEngram?: boolean | EngramDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["synapse"]>

  export type SynapseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fromEngramId?: boolean
    toEngramId?: boolean
    strength?: boolean
    type?: boolean
    createdAt?: boolean
    fromEngram?: boolean | EngramDefaultArgs<ExtArgs>
    toEngram?: boolean | EngramDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["synapse"]>

  export type SynapseSelectScalar = {
    id?: boolean
    fromEngramId?: boolean
    toEngramId?: boolean
    strength?: boolean
    type?: boolean
    createdAt?: boolean
  }

  export type SynapseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fromEngramId" | "toEngramId" | "strength" | "type" | "createdAt", ExtArgs["result"]["synapse"]>
  export type SynapseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fromEngram?: boolean | EngramDefaultArgs<ExtArgs>
    toEngram?: boolean | EngramDefaultArgs<ExtArgs>
  }
  export type SynapseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fromEngram?: boolean | EngramDefaultArgs<ExtArgs>
    toEngram?: boolean | EngramDefaultArgs<ExtArgs>
  }
  export type SynapseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fromEngram?: boolean | EngramDefaultArgs<ExtArgs>
    toEngram?: boolean | EngramDefaultArgs<ExtArgs>
  }

  export type $SynapsePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Synapse"
    objects: {
      fromEngram: Prisma.$EngramPayload<ExtArgs>
      toEngram: Prisma.$EngramPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      fromEngramId: string
      toEngramId: string
      strength: number
      type: $Enums.SynapseType
      createdAt: Date
    }, ExtArgs["result"]["synapse"]>
    composites: {}
  }

  type SynapseGetPayload<S extends boolean | null | undefined | SynapseDefaultArgs> = $Result.GetResult<Prisma.$SynapsePayload, S>

  type SynapseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SynapseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SynapseCountAggregateInputType | true
    }

  export interface SynapseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Synapse'], meta: { name: 'Synapse' } }
    /**
     * Find zero or one Synapse that matches the filter.
     * @param {SynapseFindUniqueArgs} args - Arguments to find a Synapse
     * @example
     * // Get one Synapse
     * const synapse = await prisma.synapse.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SynapseFindUniqueArgs>(args: SelectSubset<T, SynapseFindUniqueArgs<ExtArgs>>): Prisma__SynapseClient<$Result.GetResult<Prisma.$SynapsePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Synapse that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SynapseFindUniqueOrThrowArgs} args - Arguments to find a Synapse
     * @example
     * // Get one Synapse
     * const synapse = await prisma.synapse.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SynapseFindUniqueOrThrowArgs>(args: SelectSubset<T, SynapseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SynapseClient<$Result.GetResult<Prisma.$SynapsePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Synapse that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SynapseFindFirstArgs} args - Arguments to find a Synapse
     * @example
     * // Get one Synapse
     * const synapse = await prisma.synapse.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SynapseFindFirstArgs>(args?: SelectSubset<T, SynapseFindFirstArgs<ExtArgs>>): Prisma__SynapseClient<$Result.GetResult<Prisma.$SynapsePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Synapse that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SynapseFindFirstOrThrowArgs} args - Arguments to find a Synapse
     * @example
     * // Get one Synapse
     * const synapse = await prisma.synapse.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SynapseFindFirstOrThrowArgs>(args?: SelectSubset<T, SynapseFindFirstOrThrowArgs<ExtArgs>>): Prisma__SynapseClient<$Result.GetResult<Prisma.$SynapsePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Synapses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SynapseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Synapses
     * const synapses = await prisma.synapse.findMany()
     * 
     * // Get first 10 Synapses
     * const synapses = await prisma.synapse.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const synapseWithIdOnly = await prisma.synapse.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SynapseFindManyArgs>(args?: SelectSubset<T, SynapseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SynapsePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Synapse.
     * @param {SynapseCreateArgs} args - Arguments to create a Synapse.
     * @example
     * // Create one Synapse
     * const Synapse = await prisma.synapse.create({
     *   data: {
     *     // ... data to create a Synapse
     *   }
     * })
     * 
     */
    create<T extends SynapseCreateArgs>(args: SelectSubset<T, SynapseCreateArgs<ExtArgs>>): Prisma__SynapseClient<$Result.GetResult<Prisma.$SynapsePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Synapses.
     * @param {SynapseCreateManyArgs} args - Arguments to create many Synapses.
     * @example
     * // Create many Synapses
     * const synapse = await prisma.synapse.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SynapseCreateManyArgs>(args?: SelectSubset<T, SynapseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Synapses and returns the data saved in the database.
     * @param {SynapseCreateManyAndReturnArgs} args - Arguments to create many Synapses.
     * @example
     * // Create many Synapses
     * const synapse = await prisma.synapse.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Synapses and only return the `id`
     * const synapseWithIdOnly = await prisma.synapse.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SynapseCreateManyAndReturnArgs>(args?: SelectSubset<T, SynapseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SynapsePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Synapse.
     * @param {SynapseDeleteArgs} args - Arguments to delete one Synapse.
     * @example
     * // Delete one Synapse
     * const Synapse = await prisma.synapse.delete({
     *   where: {
     *     // ... filter to delete one Synapse
     *   }
     * })
     * 
     */
    delete<T extends SynapseDeleteArgs>(args: SelectSubset<T, SynapseDeleteArgs<ExtArgs>>): Prisma__SynapseClient<$Result.GetResult<Prisma.$SynapsePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Synapse.
     * @param {SynapseUpdateArgs} args - Arguments to update one Synapse.
     * @example
     * // Update one Synapse
     * const synapse = await prisma.synapse.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SynapseUpdateArgs>(args: SelectSubset<T, SynapseUpdateArgs<ExtArgs>>): Prisma__SynapseClient<$Result.GetResult<Prisma.$SynapsePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Synapses.
     * @param {SynapseDeleteManyArgs} args - Arguments to filter Synapses to delete.
     * @example
     * // Delete a few Synapses
     * const { count } = await prisma.synapse.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SynapseDeleteManyArgs>(args?: SelectSubset<T, SynapseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Synapses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SynapseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Synapses
     * const synapse = await prisma.synapse.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SynapseUpdateManyArgs>(args: SelectSubset<T, SynapseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Synapses and returns the data updated in the database.
     * @param {SynapseUpdateManyAndReturnArgs} args - Arguments to update many Synapses.
     * @example
     * // Update many Synapses
     * const synapse = await prisma.synapse.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Synapses and only return the `id`
     * const synapseWithIdOnly = await prisma.synapse.updateManyAndReturn({
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
    updateManyAndReturn<T extends SynapseUpdateManyAndReturnArgs>(args: SelectSubset<T, SynapseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SynapsePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Synapse.
     * @param {SynapseUpsertArgs} args - Arguments to update or create a Synapse.
     * @example
     * // Update or create a Synapse
     * const synapse = await prisma.synapse.upsert({
     *   create: {
     *     // ... data to create a Synapse
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Synapse we want to update
     *   }
     * })
     */
    upsert<T extends SynapseUpsertArgs>(args: SelectSubset<T, SynapseUpsertArgs<ExtArgs>>): Prisma__SynapseClient<$Result.GetResult<Prisma.$SynapsePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Synapses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SynapseCountArgs} args - Arguments to filter Synapses to count.
     * @example
     * // Count the number of Synapses
     * const count = await prisma.synapse.count({
     *   where: {
     *     // ... the filter for the Synapses we want to count
     *   }
     * })
    **/
    count<T extends SynapseCountArgs>(
      args?: Subset<T, SynapseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SynapseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Synapse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SynapseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SynapseAggregateArgs>(args: Subset<T, SynapseAggregateArgs>): Prisma.PrismaPromise<GetSynapseAggregateType<T>>

    /**
     * Group by Synapse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SynapseGroupByArgs} args - Group by arguments.
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
      T extends SynapseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SynapseGroupByArgs['orderBy'] }
        : { orderBy?: SynapseGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SynapseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSynapseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Synapse model
   */
  readonly fields: SynapseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Synapse.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SynapseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    fromEngram<T extends EngramDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EngramDefaultArgs<ExtArgs>>): Prisma__EngramClient<$Result.GetResult<Prisma.$EngramPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    toEngram<T extends EngramDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EngramDefaultArgs<ExtArgs>>): Prisma__EngramClient<$Result.GetResult<Prisma.$EngramPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Synapse model
   */
  interface SynapseFieldRefs {
    readonly id: FieldRef<"Synapse", 'String'>
    readonly fromEngramId: FieldRef<"Synapse", 'String'>
    readonly toEngramId: FieldRef<"Synapse", 'String'>
    readonly strength: FieldRef<"Synapse", 'Float'>
    readonly type: FieldRef<"Synapse", 'SynapseType'>
    readonly createdAt: FieldRef<"Synapse", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Synapse findUnique
   */
  export type SynapseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Synapse
     */
    select?: SynapseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Synapse
     */
    omit?: SynapseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SynapseInclude<ExtArgs> | null
    /**
     * Filter, which Synapse to fetch.
     */
    where: SynapseWhereUniqueInput
  }

  /**
   * Synapse findUniqueOrThrow
   */
  export type SynapseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Synapse
     */
    select?: SynapseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Synapse
     */
    omit?: SynapseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SynapseInclude<ExtArgs> | null
    /**
     * Filter, which Synapse to fetch.
     */
    where: SynapseWhereUniqueInput
  }

  /**
   * Synapse findFirst
   */
  export type SynapseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Synapse
     */
    select?: SynapseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Synapse
     */
    omit?: SynapseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SynapseInclude<ExtArgs> | null
    /**
     * Filter, which Synapse to fetch.
     */
    where?: SynapseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Synapses to fetch.
     */
    orderBy?: SynapseOrderByWithRelationInput | SynapseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Synapses.
     */
    cursor?: SynapseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Synapses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Synapses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Synapses.
     */
    distinct?: SynapseScalarFieldEnum | SynapseScalarFieldEnum[]
  }

  /**
   * Synapse findFirstOrThrow
   */
  export type SynapseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Synapse
     */
    select?: SynapseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Synapse
     */
    omit?: SynapseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SynapseInclude<ExtArgs> | null
    /**
     * Filter, which Synapse to fetch.
     */
    where?: SynapseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Synapses to fetch.
     */
    orderBy?: SynapseOrderByWithRelationInput | SynapseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Synapses.
     */
    cursor?: SynapseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Synapses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Synapses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Synapses.
     */
    distinct?: SynapseScalarFieldEnum | SynapseScalarFieldEnum[]
  }

  /**
   * Synapse findMany
   */
  export type SynapseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Synapse
     */
    select?: SynapseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Synapse
     */
    omit?: SynapseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SynapseInclude<ExtArgs> | null
    /**
     * Filter, which Synapses to fetch.
     */
    where?: SynapseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Synapses to fetch.
     */
    orderBy?: SynapseOrderByWithRelationInput | SynapseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Synapses.
     */
    cursor?: SynapseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Synapses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Synapses.
     */
    skip?: number
    distinct?: SynapseScalarFieldEnum | SynapseScalarFieldEnum[]
  }

  /**
   * Synapse create
   */
  export type SynapseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Synapse
     */
    select?: SynapseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Synapse
     */
    omit?: SynapseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SynapseInclude<ExtArgs> | null
    /**
     * The data needed to create a Synapse.
     */
    data: XOR<SynapseCreateInput, SynapseUncheckedCreateInput>
  }

  /**
   * Synapse createMany
   */
  export type SynapseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Synapses.
     */
    data: SynapseCreateManyInput | SynapseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Synapse createManyAndReturn
   */
  export type SynapseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Synapse
     */
    select?: SynapseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Synapse
     */
    omit?: SynapseOmit<ExtArgs> | null
    /**
     * The data used to create many Synapses.
     */
    data: SynapseCreateManyInput | SynapseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SynapseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Synapse update
   */
  export type SynapseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Synapse
     */
    select?: SynapseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Synapse
     */
    omit?: SynapseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SynapseInclude<ExtArgs> | null
    /**
     * The data needed to update a Synapse.
     */
    data: XOR<SynapseUpdateInput, SynapseUncheckedUpdateInput>
    /**
     * Choose, which Synapse to update.
     */
    where: SynapseWhereUniqueInput
  }

  /**
   * Synapse updateMany
   */
  export type SynapseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Synapses.
     */
    data: XOR<SynapseUpdateManyMutationInput, SynapseUncheckedUpdateManyInput>
    /**
     * Filter which Synapses to update
     */
    where?: SynapseWhereInput
    /**
     * Limit how many Synapses to update.
     */
    limit?: number
  }

  /**
   * Synapse updateManyAndReturn
   */
  export type SynapseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Synapse
     */
    select?: SynapseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Synapse
     */
    omit?: SynapseOmit<ExtArgs> | null
    /**
     * The data used to update Synapses.
     */
    data: XOR<SynapseUpdateManyMutationInput, SynapseUncheckedUpdateManyInput>
    /**
     * Filter which Synapses to update
     */
    where?: SynapseWhereInput
    /**
     * Limit how many Synapses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SynapseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Synapse upsert
   */
  export type SynapseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Synapse
     */
    select?: SynapseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Synapse
     */
    omit?: SynapseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SynapseInclude<ExtArgs> | null
    /**
     * The filter to search for the Synapse to update in case it exists.
     */
    where: SynapseWhereUniqueInput
    /**
     * In case the Synapse found by the `where` argument doesn't exist, create a new Synapse with this data.
     */
    create: XOR<SynapseCreateInput, SynapseUncheckedCreateInput>
    /**
     * In case the Synapse was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SynapseUpdateInput, SynapseUncheckedUpdateInput>
  }

  /**
   * Synapse delete
   */
  export type SynapseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Synapse
     */
    select?: SynapseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Synapse
     */
    omit?: SynapseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SynapseInclude<ExtArgs> | null
    /**
     * Filter which Synapse to delete.
     */
    where: SynapseWhereUniqueInput
  }

  /**
   * Synapse deleteMany
   */
  export type SynapseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Synapses to delete
     */
    where?: SynapseWhereInput
    /**
     * Limit how many Synapses to delete.
     */
    limit?: number
  }

  /**
   * Synapse without action
   */
  export type SynapseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Synapse
     */
    select?: SynapseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Synapse
     */
    omit?: SynapseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SynapseInclude<ExtArgs> | null
  }


  /**
   * Model HippocampusStore
   */

  export type AggregateHippocampusStore = {
    _count: HippocampusStoreCountAggregateOutputType | null
    _avg: HippocampusStoreAvgAggregateOutputType | null
    _sum: HippocampusStoreSumAggregateOutputType | null
    _min: HippocampusStoreMinAggregateOutputType | null
    _max: HippocampusStoreMaxAggregateOutputType | null
  }

  export type HippocampusStoreAvgAggregateOutputType = {
    accessCount: number | null
  }

  export type HippocampusStoreSumAggregateOutputType = {
    accessCount: number | null
  }

  export type HippocampusStoreMinAggregateOutputType = {
    id: string | null
    engramId: string | null
    accessCount: number | null
    lastAccessedAt: Date | null
    expiresAt: Date | null
    createdAt: Date | null
    userId: string | null
  }

  export type HippocampusStoreMaxAggregateOutputType = {
    id: string | null
    engramId: string | null
    accessCount: number | null
    lastAccessedAt: Date | null
    expiresAt: Date | null
    createdAt: Date | null
    userId: string | null
  }

  export type HippocampusStoreCountAggregateOutputType = {
    id: number
    engramId: number
    rawData: number
    accessCount: number
    lastAccessedAt: number
    expiresAt: number
    createdAt: number
    userId: number
    _all: number
  }


  export type HippocampusStoreAvgAggregateInputType = {
    accessCount?: true
  }

  export type HippocampusStoreSumAggregateInputType = {
    accessCount?: true
  }

  export type HippocampusStoreMinAggregateInputType = {
    id?: true
    engramId?: true
    accessCount?: true
    lastAccessedAt?: true
    expiresAt?: true
    createdAt?: true
    userId?: true
  }

  export type HippocampusStoreMaxAggregateInputType = {
    id?: true
    engramId?: true
    accessCount?: true
    lastAccessedAt?: true
    expiresAt?: true
    createdAt?: true
    userId?: true
  }

  export type HippocampusStoreCountAggregateInputType = {
    id?: true
    engramId?: true
    rawData?: true
    accessCount?: true
    lastAccessedAt?: true
    expiresAt?: true
    createdAt?: true
    userId?: true
    _all?: true
  }

  export type HippocampusStoreAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HippocampusStore to aggregate.
     */
    where?: HippocampusStoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HippocampusStores to fetch.
     */
    orderBy?: HippocampusStoreOrderByWithRelationInput | HippocampusStoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HippocampusStoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HippocampusStores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HippocampusStores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned HippocampusStores
    **/
    _count?: true | HippocampusStoreCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HippocampusStoreAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HippocampusStoreSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HippocampusStoreMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HippocampusStoreMaxAggregateInputType
  }

  export type GetHippocampusStoreAggregateType<T extends HippocampusStoreAggregateArgs> = {
        [P in keyof T & keyof AggregateHippocampusStore]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHippocampusStore[P]>
      : GetScalarType<T[P], AggregateHippocampusStore[P]>
  }




  export type HippocampusStoreGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HippocampusStoreWhereInput
    orderBy?: HippocampusStoreOrderByWithAggregationInput | HippocampusStoreOrderByWithAggregationInput[]
    by: HippocampusStoreScalarFieldEnum[] | HippocampusStoreScalarFieldEnum
    having?: HippocampusStoreScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HippocampusStoreCountAggregateInputType | true
    _avg?: HippocampusStoreAvgAggregateInputType
    _sum?: HippocampusStoreSumAggregateInputType
    _min?: HippocampusStoreMinAggregateInputType
    _max?: HippocampusStoreMaxAggregateInputType
  }

  export type HippocampusStoreGroupByOutputType = {
    id: string
    engramId: string
    rawData: JsonValue
    accessCount: number
    lastAccessedAt: Date
    expiresAt: Date
    createdAt: Date
    userId: string
    _count: HippocampusStoreCountAggregateOutputType | null
    _avg: HippocampusStoreAvgAggregateOutputType | null
    _sum: HippocampusStoreSumAggregateOutputType | null
    _min: HippocampusStoreMinAggregateOutputType | null
    _max: HippocampusStoreMaxAggregateOutputType | null
  }

  type GetHippocampusStoreGroupByPayload<T extends HippocampusStoreGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HippocampusStoreGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HippocampusStoreGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HippocampusStoreGroupByOutputType[P]>
            : GetScalarType<T[P], HippocampusStoreGroupByOutputType[P]>
        }
      >
    >


  export type HippocampusStoreSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    engramId?: boolean
    rawData?: boolean
    accessCount?: boolean
    lastAccessedAt?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    engram?: boolean | EngramDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["hippocampusStore"]>

  export type HippocampusStoreSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    engramId?: boolean
    rawData?: boolean
    accessCount?: boolean
    lastAccessedAt?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    engram?: boolean | EngramDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["hippocampusStore"]>

  export type HippocampusStoreSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    engramId?: boolean
    rawData?: boolean
    accessCount?: boolean
    lastAccessedAt?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    engram?: boolean | EngramDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["hippocampusStore"]>

  export type HippocampusStoreSelectScalar = {
    id?: boolean
    engramId?: boolean
    rawData?: boolean
    accessCount?: boolean
    lastAccessedAt?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    userId?: boolean
  }

  export type HippocampusStoreOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "engramId" | "rawData" | "accessCount" | "lastAccessedAt" | "expiresAt" | "createdAt" | "userId", ExtArgs["result"]["hippocampusStore"]>
  export type HippocampusStoreInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    engram?: boolean | EngramDefaultArgs<ExtArgs>
  }
  export type HippocampusStoreIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    engram?: boolean | EngramDefaultArgs<ExtArgs>
  }
  export type HippocampusStoreIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    engram?: boolean | EngramDefaultArgs<ExtArgs>
  }

  export type $HippocampusStorePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "HippocampusStore"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      engram: Prisma.$EngramPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      engramId: string
      rawData: Prisma.JsonValue
      accessCount: number
      lastAccessedAt: Date
      expiresAt: Date
      createdAt: Date
      userId: string
    }, ExtArgs["result"]["hippocampusStore"]>
    composites: {}
  }

  type HippocampusStoreGetPayload<S extends boolean | null | undefined | HippocampusStoreDefaultArgs> = $Result.GetResult<Prisma.$HippocampusStorePayload, S>

  type HippocampusStoreCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HippocampusStoreFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HippocampusStoreCountAggregateInputType | true
    }

  export interface HippocampusStoreDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['HippocampusStore'], meta: { name: 'HippocampusStore' } }
    /**
     * Find zero or one HippocampusStore that matches the filter.
     * @param {HippocampusStoreFindUniqueArgs} args - Arguments to find a HippocampusStore
     * @example
     * // Get one HippocampusStore
     * const hippocampusStore = await prisma.hippocampusStore.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HippocampusStoreFindUniqueArgs>(args: SelectSubset<T, HippocampusStoreFindUniqueArgs<ExtArgs>>): Prisma__HippocampusStoreClient<$Result.GetResult<Prisma.$HippocampusStorePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one HippocampusStore that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HippocampusStoreFindUniqueOrThrowArgs} args - Arguments to find a HippocampusStore
     * @example
     * // Get one HippocampusStore
     * const hippocampusStore = await prisma.hippocampusStore.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HippocampusStoreFindUniqueOrThrowArgs>(args: SelectSubset<T, HippocampusStoreFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HippocampusStoreClient<$Result.GetResult<Prisma.$HippocampusStorePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HippocampusStore that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HippocampusStoreFindFirstArgs} args - Arguments to find a HippocampusStore
     * @example
     * // Get one HippocampusStore
     * const hippocampusStore = await prisma.hippocampusStore.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HippocampusStoreFindFirstArgs>(args?: SelectSubset<T, HippocampusStoreFindFirstArgs<ExtArgs>>): Prisma__HippocampusStoreClient<$Result.GetResult<Prisma.$HippocampusStorePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HippocampusStore that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HippocampusStoreFindFirstOrThrowArgs} args - Arguments to find a HippocampusStore
     * @example
     * // Get one HippocampusStore
     * const hippocampusStore = await prisma.hippocampusStore.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HippocampusStoreFindFirstOrThrowArgs>(args?: SelectSubset<T, HippocampusStoreFindFirstOrThrowArgs<ExtArgs>>): Prisma__HippocampusStoreClient<$Result.GetResult<Prisma.$HippocampusStorePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more HippocampusStores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HippocampusStoreFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HippocampusStores
     * const hippocampusStores = await prisma.hippocampusStore.findMany()
     * 
     * // Get first 10 HippocampusStores
     * const hippocampusStores = await prisma.hippocampusStore.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const hippocampusStoreWithIdOnly = await prisma.hippocampusStore.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HippocampusStoreFindManyArgs>(args?: SelectSubset<T, HippocampusStoreFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HippocampusStorePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a HippocampusStore.
     * @param {HippocampusStoreCreateArgs} args - Arguments to create a HippocampusStore.
     * @example
     * // Create one HippocampusStore
     * const HippocampusStore = await prisma.hippocampusStore.create({
     *   data: {
     *     // ... data to create a HippocampusStore
     *   }
     * })
     * 
     */
    create<T extends HippocampusStoreCreateArgs>(args: SelectSubset<T, HippocampusStoreCreateArgs<ExtArgs>>): Prisma__HippocampusStoreClient<$Result.GetResult<Prisma.$HippocampusStorePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many HippocampusStores.
     * @param {HippocampusStoreCreateManyArgs} args - Arguments to create many HippocampusStores.
     * @example
     * // Create many HippocampusStores
     * const hippocampusStore = await prisma.hippocampusStore.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HippocampusStoreCreateManyArgs>(args?: SelectSubset<T, HippocampusStoreCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many HippocampusStores and returns the data saved in the database.
     * @param {HippocampusStoreCreateManyAndReturnArgs} args - Arguments to create many HippocampusStores.
     * @example
     * // Create many HippocampusStores
     * const hippocampusStore = await prisma.hippocampusStore.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many HippocampusStores and only return the `id`
     * const hippocampusStoreWithIdOnly = await prisma.hippocampusStore.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HippocampusStoreCreateManyAndReturnArgs>(args?: SelectSubset<T, HippocampusStoreCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HippocampusStorePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a HippocampusStore.
     * @param {HippocampusStoreDeleteArgs} args - Arguments to delete one HippocampusStore.
     * @example
     * // Delete one HippocampusStore
     * const HippocampusStore = await prisma.hippocampusStore.delete({
     *   where: {
     *     // ... filter to delete one HippocampusStore
     *   }
     * })
     * 
     */
    delete<T extends HippocampusStoreDeleteArgs>(args: SelectSubset<T, HippocampusStoreDeleteArgs<ExtArgs>>): Prisma__HippocampusStoreClient<$Result.GetResult<Prisma.$HippocampusStorePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one HippocampusStore.
     * @param {HippocampusStoreUpdateArgs} args - Arguments to update one HippocampusStore.
     * @example
     * // Update one HippocampusStore
     * const hippocampusStore = await prisma.hippocampusStore.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HippocampusStoreUpdateArgs>(args: SelectSubset<T, HippocampusStoreUpdateArgs<ExtArgs>>): Prisma__HippocampusStoreClient<$Result.GetResult<Prisma.$HippocampusStorePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more HippocampusStores.
     * @param {HippocampusStoreDeleteManyArgs} args - Arguments to filter HippocampusStores to delete.
     * @example
     * // Delete a few HippocampusStores
     * const { count } = await prisma.hippocampusStore.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HippocampusStoreDeleteManyArgs>(args?: SelectSubset<T, HippocampusStoreDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HippocampusStores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HippocampusStoreUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HippocampusStores
     * const hippocampusStore = await prisma.hippocampusStore.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HippocampusStoreUpdateManyArgs>(args: SelectSubset<T, HippocampusStoreUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HippocampusStores and returns the data updated in the database.
     * @param {HippocampusStoreUpdateManyAndReturnArgs} args - Arguments to update many HippocampusStores.
     * @example
     * // Update many HippocampusStores
     * const hippocampusStore = await prisma.hippocampusStore.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more HippocampusStores and only return the `id`
     * const hippocampusStoreWithIdOnly = await prisma.hippocampusStore.updateManyAndReturn({
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
    updateManyAndReturn<T extends HippocampusStoreUpdateManyAndReturnArgs>(args: SelectSubset<T, HippocampusStoreUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HippocampusStorePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one HippocampusStore.
     * @param {HippocampusStoreUpsertArgs} args - Arguments to update or create a HippocampusStore.
     * @example
     * // Update or create a HippocampusStore
     * const hippocampusStore = await prisma.hippocampusStore.upsert({
     *   create: {
     *     // ... data to create a HippocampusStore
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HippocampusStore we want to update
     *   }
     * })
     */
    upsert<T extends HippocampusStoreUpsertArgs>(args: SelectSubset<T, HippocampusStoreUpsertArgs<ExtArgs>>): Prisma__HippocampusStoreClient<$Result.GetResult<Prisma.$HippocampusStorePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of HippocampusStores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HippocampusStoreCountArgs} args - Arguments to filter HippocampusStores to count.
     * @example
     * // Count the number of HippocampusStores
     * const count = await prisma.hippocampusStore.count({
     *   where: {
     *     // ... the filter for the HippocampusStores we want to count
     *   }
     * })
    **/
    count<T extends HippocampusStoreCountArgs>(
      args?: Subset<T, HippocampusStoreCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HippocampusStoreCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a HippocampusStore.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HippocampusStoreAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HippocampusStoreAggregateArgs>(args: Subset<T, HippocampusStoreAggregateArgs>): Prisma.PrismaPromise<GetHippocampusStoreAggregateType<T>>

    /**
     * Group by HippocampusStore.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HippocampusStoreGroupByArgs} args - Group by arguments.
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
      T extends HippocampusStoreGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HippocampusStoreGroupByArgs['orderBy'] }
        : { orderBy?: HippocampusStoreGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, HippocampusStoreGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHippocampusStoreGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the HippocampusStore model
   */
  readonly fields: HippocampusStoreFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for HippocampusStore.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HippocampusStoreClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    engram<T extends EngramDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EngramDefaultArgs<ExtArgs>>): Prisma__EngramClient<$Result.GetResult<Prisma.$EngramPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the HippocampusStore model
   */
  interface HippocampusStoreFieldRefs {
    readonly id: FieldRef<"HippocampusStore", 'String'>
    readonly engramId: FieldRef<"HippocampusStore", 'String'>
    readonly rawData: FieldRef<"HippocampusStore", 'Json'>
    readonly accessCount: FieldRef<"HippocampusStore", 'Int'>
    readonly lastAccessedAt: FieldRef<"HippocampusStore", 'DateTime'>
    readonly expiresAt: FieldRef<"HippocampusStore", 'DateTime'>
    readonly createdAt: FieldRef<"HippocampusStore", 'DateTime'>
    readonly userId: FieldRef<"HippocampusStore", 'String'>
  }
    

  // Custom InputTypes
  /**
   * HippocampusStore findUnique
   */
  export type HippocampusStoreFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HippocampusStore
     */
    select?: HippocampusStoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HippocampusStore
     */
    omit?: HippocampusStoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HippocampusStoreInclude<ExtArgs> | null
    /**
     * Filter, which HippocampusStore to fetch.
     */
    where: HippocampusStoreWhereUniqueInput
  }

  /**
   * HippocampusStore findUniqueOrThrow
   */
  export type HippocampusStoreFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HippocampusStore
     */
    select?: HippocampusStoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HippocampusStore
     */
    omit?: HippocampusStoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HippocampusStoreInclude<ExtArgs> | null
    /**
     * Filter, which HippocampusStore to fetch.
     */
    where: HippocampusStoreWhereUniqueInput
  }

  /**
   * HippocampusStore findFirst
   */
  export type HippocampusStoreFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HippocampusStore
     */
    select?: HippocampusStoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HippocampusStore
     */
    omit?: HippocampusStoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HippocampusStoreInclude<ExtArgs> | null
    /**
     * Filter, which HippocampusStore to fetch.
     */
    where?: HippocampusStoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HippocampusStores to fetch.
     */
    orderBy?: HippocampusStoreOrderByWithRelationInput | HippocampusStoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HippocampusStores.
     */
    cursor?: HippocampusStoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HippocampusStores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HippocampusStores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HippocampusStores.
     */
    distinct?: HippocampusStoreScalarFieldEnum | HippocampusStoreScalarFieldEnum[]
  }

  /**
   * HippocampusStore findFirstOrThrow
   */
  export type HippocampusStoreFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HippocampusStore
     */
    select?: HippocampusStoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HippocampusStore
     */
    omit?: HippocampusStoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HippocampusStoreInclude<ExtArgs> | null
    /**
     * Filter, which HippocampusStore to fetch.
     */
    where?: HippocampusStoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HippocampusStores to fetch.
     */
    orderBy?: HippocampusStoreOrderByWithRelationInput | HippocampusStoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HippocampusStores.
     */
    cursor?: HippocampusStoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HippocampusStores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HippocampusStores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HippocampusStores.
     */
    distinct?: HippocampusStoreScalarFieldEnum | HippocampusStoreScalarFieldEnum[]
  }

  /**
   * HippocampusStore findMany
   */
  export type HippocampusStoreFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HippocampusStore
     */
    select?: HippocampusStoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HippocampusStore
     */
    omit?: HippocampusStoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HippocampusStoreInclude<ExtArgs> | null
    /**
     * Filter, which HippocampusStores to fetch.
     */
    where?: HippocampusStoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HippocampusStores to fetch.
     */
    orderBy?: HippocampusStoreOrderByWithRelationInput | HippocampusStoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing HippocampusStores.
     */
    cursor?: HippocampusStoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HippocampusStores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HippocampusStores.
     */
    skip?: number
    distinct?: HippocampusStoreScalarFieldEnum | HippocampusStoreScalarFieldEnum[]
  }

  /**
   * HippocampusStore create
   */
  export type HippocampusStoreCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HippocampusStore
     */
    select?: HippocampusStoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HippocampusStore
     */
    omit?: HippocampusStoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HippocampusStoreInclude<ExtArgs> | null
    /**
     * The data needed to create a HippocampusStore.
     */
    data: XOR<HippocampusStoreCreateInput, HippocampusStoreUncheckedCreateInput>
  }

  /**
   * HippocampusStore createMany
   */
  export type HippocampusStoreCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many HippocampusStores.
     */
    data: HippocampusStoreCreateManyInput | HippocampusStoreCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * HippocampusStore createManyAndReturn
   */
  export type HippocampusStoreCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HippocampusStore
     */
    select?: HippocampusStoreSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HippocampusStore
     */
    omit?: HippocampusStoreOmit<ExtArgs> | null
    /**
     * The data used to create many HippocampusStores.
     */
    data: HippocampusStoreCreateManyInput | HippocampusStoreCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HippocampusStoreIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * HippocampusStore update
   */
  export type HippocampusStoreUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HippocampusStore
     */
    select?: HippocampusStoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HippocampusStore
     */
    omit?: HippocampusStoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HippocampusStoreInclude<ExtArgs> | null
    /**
     * The data needed to update a HippocampusStore.
     */
    data: XOR<HippocampusStoreUpdateInput, HippocampusStoreUncheckedUpdateInput>
    /**
     * Choose, which HippocampusStore to update.
     */
    where: HippocampusStoreWhereUniqueInput
  }

  /**
   * HippocampusStore updateMany
   */
  export type HippocampusStoreUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update HippocampusStores.
     */
    data: XOR<HippocampusStoreUpdateManyMutationInput, HippocampusStoreUncheckedUpdateManyInput>
    /**
     * Filter which HippocampusStores to update
     */
    where?: HippocampusStoreWhereInput
    /**
     * Limit how many HippocampusStores to update.
     */
    limit?: number
  }

  /**
   * HippocampusStore updateManyAndReturn
   */
  export type HippocampusStoreUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HippocampusStore
     */
    select?: HippocampusStoreSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HippocampusStore
     */
    omit?: HippocampusStoreOmit<ExtArgs> | null
    /**
     * The data used to update HippocampusStores.
     */
    data: XOR<HippocampusStoreUpdateManyMutationInput, HippocampusStoreUncheckedUpdateManyInput>
    /**
     * Filter which HippocampusStores to update
     */
    where?: HippocampusStoreWhereInput
    /**
     * Limit how many HippocampusStores to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HippocampusStoreIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * HippocampusStore upsert
   */
  export type HippocampusStoreUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HippocampusStore
     */
    select?: HippocampusStoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HippocampusStore
     */
    omit?: HippocampusStoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HippocampusStoreInclude<ExtArgs> | null
    /**
     * The filter to search for the HippocampusStore to update in case it exists.
     */
    where: HippocampusStoreWhereUniqueInput
    /**
     * In case the HippocampusStore found by the `where` argument doesn't exist, create a new HippocampusStore with this data.
     */
    create: XOR<HippocampusStoreCreateInput, HippocampusStoreUncheckedCreateInput>
    /**
     * In case the HippocampusStore was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HippocampusStoreUpdateInput, HippocampusStoreUncheckedUpdateInput>
  }

  /**
   * HippocampusStore delete
   */
  export type HippocampusStoreDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HippocampusStore
     */
    select?: HippocampusStoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HippocampusStore
     */
    omit?: HippocampusStoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HippocampusStoreInclude<ExtArgs> | null
    /**
     * Filter which HippocampusStore to delete.
     */
    where: HippocampusStoreWhereUniqueInput
  }

  /**
   * HippocampusStore deleteMany
   */
  export type HippocampusStoreDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HippocampusStores to delete
     */
    where?: HippocampusStoreWhereInput
    /**
     * Limit how many HippocampusStores to delete.
     */
    limit?: number
  }

  /**
   * HippocampusStore without action
   */
  export type HippocampusStoreDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HippocampusStore
     */
    select?: HippocampusStoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HippocampusStore
     */
    omit?: HippocampusStoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HippocampusStoreInclude<ExtArgs> | null
  }


  /**
   * Model CortexStore
   */

  export type AggregateCortexStore = {
    _count: CortexStoreCountAggregateOutputType | null
    _avg: CortexStoreAvgAggregateOutputType | null
    _sum: CortexStoreSumAggregateOutputType | null
    _min: CortexStoreMinAggregateOutputType | null
    _max: CortexStoreMaxAggregateOutputType | null
  }

  export type CortexStoreAvgAggregateOutputType = {
    generalization: number | null
  }

  export type CortexStoreSumAggregateOutputType = {
    generalization: number | null
  }

  export type CortexStoreMinAggregateOutputType = {
    id: string | null
    engramId: string | null
    generalization: number | null
    integratedAt: Date | null
    createdAt: Date | null
    userId: string | null
  }

  export type CortexStoreMaxAggregateOutputType = {
    id: string | null
    engramId: string | null
    generalization: number | null
    integratedAt: Date | null
    createdAt: Date | null
    userId: string | null
  }

  export type CortexStoreCountAggregateOutputType = {
    id: number
    engramId: number
    compressedData: number
    generalization: number
    integratedAt: number
    createdAt: number
    userId: number
    _all: number
  }


  export type CortexStoreAvgAggregateInputType = {
    generalization?: true
  }

  export type CortexStoreSumAggregateInputType = {
    generalization?: true
  }

  export type CortexStoreMinAggregateInputType = {
    id?: true
    engramId?: true
    generalization?: true
    integratedAt?: true
    createdAt?: true
    userId?: true
  }

  export type CortexStoreMaxAggregateInputType = {
    id?: true
    engramId?: true
    generalization?: true
    integratedAt?: true
    createdAt?: true
    userId?: true
  }

  export type CortexStoreCountAggregateInputType = {
    id?: true
    engramId?: true
    compressedData?: true
    generalization?: true
    integratedAt?: true
    createdAt?: true
    userId?: true
    _all?: true
  }

  export type CortexStoreAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CortexStore to aggregate.
     */
    where?: CortexStoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CortexStores to fetch.
     */
    orderBy?: CortexStoreOrderByWithRelationInput | CortexStoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CortexStoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CortexStores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CortexStores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CortexStores
    **/
    _count?: true | CortexStoreCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CortexStoreAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CortexStoreSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CortexStoreMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CortexStoreMaxAggregateInputType
  }

  export type GetCortexStoreAggregateType<T extends CortexStoreAggregateArgs> = {
        [P in keyof T & keyof AggregateCortexStore]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCortexStore[P]>
      : GetScalarType<T[P], AggregateCortexStore[P]>
  }




  export type CortexStoreGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CortexStoreWhereInput
    orderBy?: CortexStoreOrderByWithAggregationInput | CortexStoreOrderByWithAggregationInput[]
    by: CortexStoreScalarFieldEnum[] | CortexStoreScalarFieldEnum
    having?: CortexStoreScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CortexStoreCountAggregateInputType | true
    _avg?: CortexStoreAvgAggregateInputType
    _sum?: CortexStoreSumAggregateInputType
    _min?: CortexStoreMinAggregateInputType
    _max?: CortexStoreMaxAggregateInputType
  }

  export type CortexStoreGroupByOutputType = {
    id: string
    engramId: string
    compressedData: JsonValue
    generalization: number
    integratedAt: Date
    createdAt: Date
    userId: string
    _count: CortexStoreCountAggregateOutputType | null
    _avg: CortexStoreAvgAggregateOutputType | null
    _sum: CortexStoreSumAggregateOutputType | null
    _min: CortexStoreMinAggregateOutputType | null
    _max: CortexStoreMaxAggregateOutputType | null
  }

  type GetCortexStoreGroupByPayload<T extends CortexStoreGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CortexStoreGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CortexStoreGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CortexStoreGroupByOutputType[P]>
            : GetScalarType<T[P], CortexStoreGroupByOutputType[P]>
        }
      >
    >


  export type CortexStoreSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    engramId?: boolean
    compressedData?: boolean
    generalization?: boolean
    integratedAt?: boolean
    createdAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    engram?: boolean | EngramDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cortexStore"]>

  export type CortexStoreSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    engramId?: boolean
    compressedData?: boolean
    generalization?: boolean
    integratedAt?: boolean
    createdAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    engram?: boolean | EngramDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cortexStore"]>

  export type CortexStoreSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    engramId?: boolean
    compressedData?: boolean
    generalization?: boolean
    integratedAt?: boolean
    createdAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    engram?: boolean | EngramDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cortexStore"]>

  export type CortexStoreSelectScalar = {
    id?: boolean
    engramId?: boolean
    compressedData?: boolean
    generalization?: boolean
    integratedAt?: boolean
    createdAt?: boolean
    userId?: boolean
  }

  export type CortexStoreOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "engramId" | "compressedData" | "generalization" | "integratedAt" | "createdAt" | "userId", ExtArgs["result"]["cortexStore"]>
  export type CortexStoreInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    engram?: boolean | EngramDefaultArgs<ExtArgs>
  }
  export type CortexStoreIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    engram?: boolean | EngramDefaultArgs<ExtArgs>
  }
  export type CortexStoreIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    engram?: boolean | EngramDefaultArgs<ExtArgs>
  }

  export type $CortexStorePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CortexStore"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      engram: Prisma.$EngramPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      engramId: string
      compressedData: Prisma.JsonValue
      generalization: number
      integratedAt: Date
      createdAt: Date
      userId: string
    }, ExtArgs["result"]["cortexStore"]>
    composites: {}
  }

  type CortexStoreGetPayload<S extends boolean | null | undefined | CortexStoreDefaultArgs> = $Result.GetResult<Prisma.$CortexStorePayload, S>

  type CortexStoreCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CortexStoreFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CortexStoreCountAggregateInputType | true
    }

  export interface CortexStoreDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CortexStore'], meta: { name: 'CortexStore' } }
    /**
     * Find zero or one CortexStore that matches the filter.
     * @param {CortexStoreFindUniqueArgs} args - Arguments to find a CortexStore
     * @example
     * // Get one CortexStore
     * const cortexStore = await prisma.cortexStore.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CortexStoreFindUniqueArgs>(args: SelectSubset<T, CortexStoreFindUniqueArgs<ExtArgs>>): Prisma__CortexStoreClient<$Result.GetResult<Prisma.$CortexStorePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CortexStore that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CortexStoreFindUniqueOrThrowArgs} args - Arguments to find a CortexStore
     * @example
     * // Get one CortexStore
     * const cortexStore = await prisma.cortexStore.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CortexStoreFindUniqueOrThrowArgs>(args: SelectSubset<T, CortexStoreFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CortexStoreClient<$Result.GetResult<Prisma.$CortexStorePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CortexStore that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CortexStoreFindFirstArgs} args - Arguments to find a CortexStore
     * @example
     * // Get one CortexStore
     * const cortexStore = await prisma.cortexStore.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CortexStoreFindFirstArgs>(args?: SelectSubset<T, CortexStoreFindFirstArgs<ExtArgs>>): Prisma__CortexStoreClient<$Result.GetResult<Prisma.$CortexStorePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CortexStore that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CortexStoreFindFirstOrThrowArgs} args - Arguments to find a CortexStore
     * @example
     * // Get one CortexStore
     * const cortexStore = await prisma.cortexStore.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CortexStoreFindFirstOrThrowArgs>(args?: SelectSubset<T, CortexStoreFindFirstOrThrowArgs<ExtArgs>>): Prisma__CortexStoreClient<$Result.GetResult<Prisma.$CortexStorePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CortexStores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CortexStoreFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CortexStores
     * const cortexStores = await prisma.cortexStore.findMany()
     * 
     * // Get first 10 CortexStores
     * const cortexStores = await prisma.cortexStore.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cortexStoreWithIdOnly = await prisma.cortexStore.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CortexStoreFindManyArgs>(args?: SelectSubset<T, CortexStoreFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CortexStorePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CortexStore.
     * @param {CortexStoreCreateArgs} args - Arguments to create a CortexStore.
     * @example
     * // Create one CortexStore
     * const CortexStore = await prisma.cortexStore.create({
     *   data: {
     *     // ... data to create a CortexStore
     *   }
     * })
     * 
     */
    create<T extends CortexStoreCreateArgs>(args: SelectSubset<T, CortexStoreCreateArgs<ExtArgs>>): Prisma__CortexStoreClient<$Result.GetResult<Prisma.$CortexStorePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CortexStores.
     * @param {CortexStoreCreateManyArgs} args - Arguments to create many CortexStores.
     * @example
     * // Create many CortexStores
     * const cortexStore = await prisma.cortexStore.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CortexStoreCreateManyArgs>(args?: SelectSubset<T, CortexStoreCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CortexStores and returns the data saved in the database.
     * @param {CortexStoreCreateManyAndReturnArgs} args - Arguments to create many CortexStores.
     * @example
     * // Create many CortexStores
     * const cortexStore = await prisma.cortexStore.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CortexStores and only return the `id`
     * const cortexStoreWithIdOnly = await prisma.cortexStore.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CortexStoreCreateManyAndReturnArgs>(args?: SelectSubset<T, CortexStoreCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CortexStorePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CortexStore.
     * @param {CortexStoreDeleteArgs} args - Arguments to delete one CortexStore.
     * @example
     * // Delete one CortexStore
     * const CortexStore = await prisma.cortexStore.delete({
     *   where: {
     *     // ... filter to delete one CortexStore
     *   }
     * })
     * 
     */
    delete<T extends CortexStoreDeleteArgs>(args: SelectSubset<T, CortexStoreDeleteArgs<ExtArgs>>): Prisma__CortexStoreClient<$Result.GetResult<Prisma.$CortexStorePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CortexStore.
     * @param {CortexStoreUpdateArgs} args - Arguments to update one CortexStore.
     * @example
     * // Update one CortexStore
     * const cortexStore = await prisma.cortexStore.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CortexStoreUpdateArgs>(args: SelectSubset<T, CortexStoreUpdateArgs<ExtArgs>>): Prisma__CortexStoreClient<$Result.GetResult<Prisma.$CortexStorePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CortexStores.
     * @param {CortexStoreDeleteManyArgs} args - Arguments to filter CortexStores to delete.
     * @example
     * // Delete a few CortexStores
     * const { count } = await prisma.cortexStore.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CortexStoreDeleteManyArgs>(args?: SelectSubset<T, CortexStoreDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CortexStores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CortexStoreUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CortexStores
     * const cortexStore = await prisma.cortexStore.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CortexStoreUpdateManyArgs>(args: SelectSubset<T, CortexStoreUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CortexStores and returns the data updated in the database.
     * @param {CortexStoreUpdateManyAndReturnArgs} args - Arguments to update many CortexStores.
     * @example
     * // Update many CortexStores
     * const cortexStore = await prisma.cortexStore.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CortexStores and only return the `id`
     * const cortexStoreWithIdOnly = await prisma.cortexStore.updateManyAndReturn({
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
    updateManyAndReturn<T extends CortexStoreUpdateManyAndReturnArgs>(args: SelectSubset<T, CortexStoreUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CortexStorePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CortexStore.
     * @param {CortexStoreUpsertArgs} args - Arguments to update or create a CortexStore.
     * @example
     * // Update or create a CortexStore
     * const cortexStore = await prisma.cortexStore.upsert({
     *   create: {
     *     // ... data to create a CortexStore
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CortexStore we want to update
     *   }
     * })
     */
    upsert<T extends CortexStoreUpsertArgs>(args: SelectSubset<T, CortexStoreUpsertArgs<ExtArgs>>): Prisma__CortexStoreClient<$Result.GetResult<Prisma.$CortexStorePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CortexStores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CortexStoreCountArgs} args - Arguments to filter CortexStores to count.
     * @example
     * // Count the number of CortexStores
     * const count = await prisma.cortexStore.count({
     *   where: {
     *     // ... the filter for the CortexStores we want to count
     *   }
     * })
    **/
    count<T extends CortexStoreCountArgs>(
      args?: Subset<T, CortexStoreCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CortexStoreCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CortexStore.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CortexStoreAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CortexStoreAggregateArgs>(args: Subset<T, CortexStoreAggregateArgs>): Prisma.PrismaPromise<GetCortexStoreAggregateType<T>>

    /**
     * Group by CortexStore.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CortexStoreGroupByArgs} args - Group by arguments.
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
      T extends CortexStoreGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CortexStoreGroupByArgs['orderBy'] }
        : { orderBy?: CortexStoreGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CortexStoreGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCortexStoreGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CortexStore model
   */
  readonly fields: CortexStoreFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CortexStore.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CortexStoreClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    engram<T extends EngramDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EngramDefaultArgs<ExtArgs>>): Prisma__EngramClient<$Result.GetResult<Prisma.$EngramPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the CortexStore model
   */
  interface CortexStoreFieldRefs {
    readonly id: FieldRef<"CortexStore", 'String'>
    readonly engramId: FieldRef<"CortexStore", 'String'>
    readonly compressedData: FieldRef<"CortexStore", 'Json'>
    readonly generalization: FieldRef<"CortexStore", 'Float'>
    readonly integratedAt: FieldRef<"CortexStore", 'DateTime'>
    readonly createdAt: FieldRef<"CortexStore", 'DateTime'>
    readonly userId: FieldRef<"CortexStore", 'String'>
  }
    

  // Custom InputTypes
  /**
   * CortexStore findUnique
   */
  export type CortexStoreFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CortexStore
     */
    select?: CortexStoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CortexStore
     */
    omit?: CortexStoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CortexStoreInclude<ExtArgs> | null
    /**
     * Filter, which CortexStore to fetch.
     */
    where: CortexStoreWhereUniqueInput
  }

  /**
   * CortexStore findUniqueOrThrow
   */
  export type CortexStoreFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CortexStore
     */
    select?: CortexStoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CortexStore
     */
    omit?: CortexStoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CortexStoreInclude<ExtArgs> | null
    /**
     * Filter, which CortexStore to fetch.
     */
    where: CortexStoreWhereUniqueInput
  }

  /**
   * CortexStore findFirst
   */
  export type CortexStoreFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CortexStore
     */
    select?: CortexStoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CortexStore
     */
    omit?: CortexStoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CortexStoreInclude<ExtArgs> | null
    /**
     * Filter, which CortexStore to fetch.
     */
    where?: CortexStoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CortexStores to fetch.
     */
    orderBy?: CortexStoreOrderByWithRelationInput | CortexStoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CortexStores.
     */
    cursor?: CortexStoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CortexStores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CortexStores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CortexStores.
     */
    distinct?: CortexStoreScalarFieldEnum | CortexStoreScalarFieldEnum[]
  }

  /**
   * CortexStore findFirstOrThrow
   */
  export type CortexStoreFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CortexStore
     */
    select?: CortexStoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CortexStore
     */
    omit?: CortexStoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CortexStoreInclude<ExtArgs> | null
    /**
     * Filter, which CortexStore to fetch.
     */
    where?: CortexStoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CortexStores to fetch.
     */
    orderBy?: CortexStoreOrderByWithRelationInput | CortexStoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CortexStores.
     */
    cursor?: CortexStoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CortexStores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CortexStores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CortexStores.
     */
    distinct?: CortexStoreScalarFieldEnum | CortexStoreScalarFieldEnum[]
  }

  /**
   * CortexStore findMany
   */
  export type CortexStoreFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CortexStore
     */
    select?: CortexStoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CortexStore
     */
    omit?: CortexStoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CortexStoreInclude<ExtArgs> | null
    /**
     * Filter, which CortexStores to fetch.
     */
    where?: CortexStoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CortexStores to fetch.
     */
    orderBy?: CortexStoreOrderByWithRelationInput | CortexStoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CortexStores.
     */
    cursor?: CortexStoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CortexStores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CortexStores.
     */
    skip?: number
    distinct?: CortexStoreScalarFieldEnum | CortexStoreScalarFieldEnum[]
  }

  /**
   * CortexStore create
   */
  export type CortexStoreCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CortexStore
     */
    select?: CortexStoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CortexStore
     */
    omit?: CortexStoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CortexStoreInclude<ExtArgs> | null
    /**
     * The data needed to create a CortexStore.
     */
    data: XOR<CortexStoreCreateInput, CortexStoreUncheckedCreateInput>
  }

  /**
   * CortexStore createMany
   */
  export type CortexStoreCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CortexStores.
     */
    data: CortexStoreCreateManyInput | CortexStoreCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CortexStore createManyAndReturn
   */
  export type CortexStoreCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CortexStore
     */
    select?: CortexStoreSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CortexStore
     */
    omit?: CortexStoreOmit<ExtArgs> | null
    /**
     * The data used to create many CortexStores.
     */
    data: CortexStoreCreateManyInput | CortexStoreCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CortexStoreIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CortexStore update
   */
  export type CortexStoreUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CortexStore
     */
    select?: CortexStoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CortexStore
     */
    omit?: CortexStoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CortexStoreInclude<ExtArgs> | null
    /**
     * The data needed to update a CortexStore.
     */
    data: XOR<CortexStoreUpdateInput, CortexStoreUncheckedUpdateInput>
    /**
     * Choose, which CortexStore to update.
     */
    where: CortexStoreWhereUniqueInput
  }

  /**
   * CortexStore updateMany
   */
  export type CortexStoreUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CortexStores.
     */
    data: XOR<CortexStoreUpdateManyMutationInput, CortexStoreUncheckedUpdateManyInput>
    /**
     * Filter which CortexStores to update
     */
    where?: CortexStoreWhereInput
    /**
     * Limit how many CortexStores to update.
     */
    limit?: number
  }

  /**
   * CortexStore updateManyAndReturn
   */
  export type CortexStoreUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CortexStore
     */
    select?: CortexStoreSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CortexStore
     */
    omit?: CortexStoreOmit<ExtArgs> | null
    /**
     * The data used to update CortexStores.
     */
    data: XOR<CortexStoreUpdateManyMutationInput, CortexStoreUncheckedUpdateManyInput>
    /**
     * Filter which CortexStores to update
     */
    where?: CortexStoreWhereInput
    /**
     * Limit how many CortexStores to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CortexStoreIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CortexStore upsert
   */
  export type CortexStoreUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CortexStore
     */
    select?: CortexStoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CortexStore
     */
    omit?: CortexStoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CortexStoreInclude<ExtArgs> | null
    /**
     * The filter to search for the CortexStore to update in case it exists.
     */
    where: CortexStoreWhereUniqueInput
    /**
     * In case the CortexStore found by the `where` argument doesn't exist, create a new CortexStore with this data.
     */
    create: XOR<CortexStoreCreateInput, CortexStoreUncheckedCreateInput>
    /**
     * In case the CortexStore was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CortexStoreUpdateInput, CortexStoreUncheckedUpdateInput>
  }

  /**
   * CortexStore delete
   */
  export type CortexStoreDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CortexStore
     */
    select?: CortexStoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CortexStore
     */
    omit?: CortexStoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CortexStoreInclude<ExtArgs> | null
    /**
     * Filter which CortexStore to delete.
     */
    where: CortexStoreWhereUniqueInput
  }

  /**
   * CortexStore deleteMany
   */
  export type CortexStoreDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CortexStores to delete
     */
    where?: CortexStoreWhereInput
    /**
     * Limit how many CortexStores to delete.
     */
    limit?: number
  }

  /**
   * CortexStore without action
   */
  export type CortexStoreDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CortexStore
     */
    select?: CortexStoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CortexStore
     */
    omit?: CortexStoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CortexStoreInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    provider: 'provider',
    providerId: 'providerId',
    avatar: 'avatar',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const EntryScalarFieldEnum: {
    id: 'id',
    content: 'content',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EntryScalarFieldEnum = (typeof EntryScalarFieldEnum)[keyof typeof EntryScalarFieldEnum]


  export const EngramScalarFieldEnum: {
    id: 'id',
    content: 'content',
    embedding: 'embedding',
    crebScore: 'crebScore',
    emotionScore: 'emotionScore',
    importance: 'importance',
    rehearsalCount: 'rehearsalCount',
    consolidationState: 'consolidationState',
    category: 'category',
    keywords: 'keywords',
    entryId: 'entryId',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EngramScalarFieldEnum = (typeof EngramScalarFieldEnum)[keyof typeof EngramScalarFieldEnum]


  export const SynapseScalarFieldEnum: {
    id: 'id',
    fromEngramId: 'fromEngramId',
    toEngramId: 'toEngramId',
    strength: 'strength',
    type: 'type',
    createdAt: 'createdAt'
  };

  export type SynapseScalarFieldEnum = (typeof SynapseScalarFieldEnum)[keyof typeof SynapseScalarFieldEnum]


  export const HippocampusStoreScalarFieldEnum: {
    id: 'id',
    engramId: 'engramId',
    rawData: 'rawData',
    accessCount: 'accessCount',
    lastAccessedAt: 'lastAccessedAt',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt',
    userId: 'userId'
  };

  export type HippocampusStoreScalarFieldEnum = (typeof HippocampusStoreScalarFieldEnum)[keyof typeof HippocampusStoreScalarFieldEnum]


  export const CortexStoreScalarFieldEnum: {
    id: 'id',
    engramId: 'engramId',
    compressedData: 'compressedData',
    generalization: 'generalization',
    integratedAt: 'integratedAt',
    createdAt: 'createdAt',
    userId: 'userId'
  };

  export type CortexStoreScalarFieldEnum = (typeof CortexStoreScalarFieldEnum)[keyof typeof CortexStoreScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


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


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Provider'
   */
  export type EnumProviderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Provider'>
    


  /**
   * Reference to a field of type 'Provider[]'
   */
  export type ListEnumProviderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Provider[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'ConsolidationState'
   */
  export type EnumConsolidationStateFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ConsolidationState'>
    


  /**
   * Reference to a field of type 'ConsolidationState[]'
   */
  export type ListEnumConsolidationStateFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ConsolidationState[]'>
    


  /**
   * Reference to a field of type 'MemoryType'
   */
  export type EnumMemoryTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MemoryType'>
    


  /**
   * Reference to a field of type 'MemoryType[]'
   */
  export type ListEnumMemoryTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MemoryType[]'>
    


  /**
   * Reference to a field of type 'SynapseType'
   */
  export type EnumSynapseTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SynapseType'>
    


  /**
   * Reference to a field of type 'SynapseType[]'
   */
  export type ListEnumSynapseTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SynapseType[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    provider?: EnumProviderFilter<"User"> | $Enums.Provider
    providerId?: StringFilter<"User"> | string
    avatar?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    entries?: EntryListRelationFilter
    engrams?: EngramListRelationFilter
    hippocampusStore?: HippocampusStoreListRelationFilter
    cortexStore?: CortexStoreListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    provider?: SortOrder
    providerId?: SortOrder
    avatar?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    entries?: EntryOrderByRelationAggregateInput
    engrams?: EngramOrderByRelationAggregateInput
    hippocampusStore?: HippocampusStoreOrderByRelationAggregateInput
    cortexStore?: CortexStoreOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    provider_providerId?: UserProviderProviderIdCompoundUniqueInput
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    provider?: EnumProviderFilter<"User"> | $Enums.Provider
    providerId?: StringFilter<"User"> | string
    avatar?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    entries?: EntryListRelationFilter
    engrams?: EngramListRelationFilter
    hippocampusStore?: HippocampusStoreListRelationFilter
    cortexStore?: CortexStoreListRelationFilter
  }, "id" | "email" | "provider_providerId">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    provider?: SortOrder
    providerId?: SortOrder
    avatar?: SortOrderInput | SortOrder
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
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    provider?: EnumProviderWithAggregatesFilter<"User"> | $Enums.Provider
    providerId?: StringWithAggregatesFilter<"User"> | string
    avatar?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type EntryWhereInput = {
    AND?: EntryWhereInput | EntryWhereInput[]
    OR?: EntryWhereInput[]
    NOT?: EntryWhereInput | EntryWhereInput[]
    id?: StringFilter<"Entry"> | string
    content?: StringFilter<"Entry"> | string
    userId?: StringFilter<"Entry"> | string
    createdAt?: DateTimeFilter<"Entry"> | Date | string
    updatedAt?: DateTimeFilter<"Entry"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    engrams?: EngramListRelationFilter
  }

  export type EntryOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    engrams?: EngramOrderByRelationAggregateInput
  }

  export type EntryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EntryWhereInput | EntryWhereInput[]
    OR?: EntryWhereInput[]
    NOT?: EntryWhereInput | EntryWhereInput[]
    content?: StringFilter<"Entry"> | string
    userId?: StringFilter<"Entry"> | string
    createdAt?: DateTimeFilter<"Entry"> | Date | string
    updatedAt?: DateTimeFilter<"Entry"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    engrams?: EngramListRelationFilter
  }, "id">

  export type EntryOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EntryCountOrderByAggregateInput
    _max?: EntryMaxOrderByAggregateInput
    _min?: EntryMinOrderByAggregateInput
  }

  export type EntryScalarWhereWithAggregatesInput = {
    AND?: EntryScalarWhereWithAggregatesInput | EntryScalarWhereWithAggregatesInput[]
    OR?: EntryScalarWhereWithAggregatesInput[]
    NOT?: EntryScalarWhereWithAggregatesInput | EntryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Entry"> | string
    content?: StringWithAggregatesFilter<"Entry"> | string
    userId?: StringWithAggregatesFilter<"Entry"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Entry"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Entry"> | Date | string
  }

  export type EngramWhereInput = {
    AND?: EngramWhereInput | EngramWhereInput[]
    OR?: EngramWhereInput[]
    NOT?: EngramWhereInput | EngramWhereInput[]
    id?: StringFilter<"Engram"> | string
    content?: StringFilter<"Engram"> | string
    embedding?: FloatNullableListFilter<"Engram">
    crebScore?: FloatFilter<"Engram"> | number
    emotionScore?: FloatFilter<"Engram"> | number
    importance?: FloatFilter<"Engram"> | number
    rehearsalCount?: IntFilter<"Engram"> | number
    consolidationState?: EnumConsolidationStateFilter<"Engram"> | $Enums.ConsolidationState
    category?: EnumMemoryTypeFilter<"Engram"> | $Enums.MemoryType
    keywords?: StringNullableListFilter<"Engram">
    entryId?: StringFilter<"Engram"> | string
    userId?: StringFilter<"Engram"> | string
    createdAt?: DateTimeFilter<"Engram"> | Date | string
    updatedAt?: DateTimeFilter<"Engram"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    entry?: XOR<EntryScalarRelationFilter, EntryWhereInput>
    synapseFrom?: SynapseListRelationFilter
    synapseTo?: SynapseListRelationFilter
    hippocampus?: XOR<HippocampusStoreNullableScalarRelationFilter, HippocampusStoreWhereInput> | null
    cortex?: XOR<CortexStoreNullableScalarRelationFilter, CortexStoreWhereInput> | null
  }

  export type EngramOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrder
    embedding?: SortOrder
    crebScore?: SortOrder
    emotionScore?: SortOrder
    importance?: SortOrder
    rehearsalCount?: SortOrder
    consolidationState?: SortOrder
    category?: SortOrder
    keywords?: SortOrder
    entryId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    entry?: EntryOrderByWithRelationInput
    synapseFrom?: SynapseOrderByRelationAggregateInput
    synapseTo?: SynapseOrderByRelationAggregateInput
    hippocampus?: HippocampusStoreOrderByWithRelationInput
    cortex?: CortexStoreOrderByWithRelationInput
  }

  export type EngramWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EngramWhereInput | EngramWhereInput[]
    OR?: EngramWhereInput[]
    NOT?: EngramWhereInput | EngramWhereInput[]
    content?: StringFilter<"Engram"> | string
    embedding?: FloatNullableListFilter<"Engram">
    crebScore?: FloatFilter<"Engram"> | number
    emotionScore?: FloatFilter<"Engram"> | number
    importance?: FloatFilter<"Engram"> | number
    rehearsalCount?: IntFilter<"Engram"> | number
    consolidationState?: EnumConsolidationStateFilter<"Engram"> | $Enums.ConsolidationState
    category?: EnumMemoryTypeFilter<"Engram"> | $Enums.MemoryType
    keywords?: StringNullableListFilter<"Engram">
    entryId?: StringFilter<"Engram"> | string
    userId?: StringFilter<"Engram"> | string
    createdAt?: DateTimeFilter<"Engram"> | Date | string
    updatedAt?: DateTimeFilter<"Engram"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    entry?: XOR<EntryScalarRelationFilter, EntryWhereInput>
    synapseFrom?: SynapseListRelationFilter
    synapseTo?: SynapseListRelationFilter
    hippocampus?: XOR<HippocampusStoreNullableScalarRelationFilter, HippocampusStoreWhereInput> | null
    cortex?: XOR<CortexStoreNullableScalarRelationFilter, CortexStoreWhereInput> | null
  }, "id">

  export type EngramOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrder
    embedding?: SortOrder
    crebScore?: SortOrder
    emotionScore?: SortOrder
    importance?: SortOrder
    rehearsalCount?: SortOrder
    consolidationState?: SortOrder
    category?: SortOrder
    keywords?: SortOrder
    entryId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EngramCountOrderByAggregateInput
    _avg?: EngramAvgOrderByAggregateInput
    _max?: EngramMaxOrderByAggregateInput
    _min?: EngramMinOrderByAggregateInput
    _sum?: EngramSumOrderByAggregateInput
  }

  export type EngramScalarWhereWithAggregatesInput = {
    AND?: EngramScalarWhereWithAggregatesInput | EngramScalarWhereWithAggregatesInput[]
    OR?: EngramScalarWhereWithAggregatesInput[]
    NOT?: EngramScalarWhereWithAggregatesInput | EngramScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Engram"> | string
    content?: StringWithAggregatesFilter<"Engram"> | string
    embedding?: FloatNullableListFilter<"Engram">
    crebScore?: FloatWithAggregatesFilter<"Engram"> | number
    emotionScore?: FloatWithAggregatesFilter<"Engram"> | number
    importance?: FloatWithAggregatesFilter<"Engram"> | number
    rehearsalCount?: IntWithAggregatesFilter<"Engram"> | number
    consolidationState?: EnumConsolidationStateWithAggregatesFilter<"Engram"> | $Enums.ConsolidationState
    category?: EnumMemoryTypeWithAggregatesFilter<"Engram"> | $Enums.MemoryType
    keywords?: StringNullableListFilter<"Engram">
    entryId?: StringWithAggregatesFilter<"Engram"> | string
    userId?: StringWithAggregatesFilter<"Engram"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Engram"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Engram"> | Date | string
  }

  export type SynapseWhereInput = {
    AND?: SynapseWhereInput | SynapseWhereInput[]
    OR?: SynapseWhereInput[]
    NOT?: SynapseWhereInput | SynapseWhereInput[]
    id?: StringFilter<"Synapse"> | string
    fromEngramId?: StringFilter<"Synapse"> | string
    toEngramId?: StringFilter<"Synapse"> | string
    strength?: FloatFilter<"Synapse"> | number
    type?: EnumSynapseTypeFilter<"Synapse"> | $Enums.SynapseType
    createdAt?: DateTimeFilter<"Synapse"> | Date | string
    fromEngram?: XOR<EngramScalarRelationFilter, EngramWhereInput>
    toEngram?: XOR<EngramScalarRelationFilter, EngramWhereInput>
  }

  export type SynapseOrderByWithRelationInput = {
    id?: SortOrder
    fromEngramId?: SortOrder
    toEngramId?: SortOrder
    strength?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    fromEngram?: EngramOrderByWithRelationInput
    toEngram?: EngramOrderByWithRelationInput
  }

  export type SynapseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    fromEngramId_toEngramId?: SynapseFromEngramIdToEngramIdCompoundUniqueInput
    AND?: SynapseWhereInput | SynapseWhereInput[]
    OR?: SynapseWhereInput[]
    NOT?: SynapseWhereInput | SynapseWhereInput[]
    fromEngramId?: StringFilter<"Synapse"> | string
    toEngramId?: StringFilter<"Synapse"> | string
    strength?: FloatFilter<"Synapse"> | number
    type?: EnumSynapseTypeFilter<"Synapse"> | $Enums.SynapseType
    createdAt?: DateTimeFilter<"Synapse"> | Date | string
    fromEngram?: XOR<EngramScalarRelationFilter, EngramWhereInput>
    toEngram?: XOR<EngramScalarRelationFilter, EngramWhereInput>
  }, "id" | "fromEngramId_toEngramId">

  export type SynapseOrderByWithAggregationInput = {
    id?: SortOrder
    fromEngramId?: SortOrder
    toEngramId?: SortOrder
    strength?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    _count?: SynapseCountOrderByAggregateInput
    _avg?: SynapseAvgOrderByAggregateInput
    _max?: SynapseMaxOrderByAggregateInput
    _min?: SynapseMinOrderByAggregateInput
    _sum?: SynapseSumOrderByAggregateInput
  }

  export type SynapseScalarWhereWithAggregatesInput = {
    AND?: SynapseScalarWhereWithAggregatesInput | SynapseScalarWhereWithAggregatesInput[]
    OR?: SynapseScalarWhereWithAggregatesInput[]
    NOT?: SynapseScalarWhereWithAggregatesInput | SynapseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Synapse"> | string
    fromEngramId?: StringWithAggregatesFilter<"Synapse"> | string
    toEngramId?: StringWithAggregatesFilter<"Synapse"> | string
    strength?: FloatWithAggregatesFilter<"Synapse"> | number
    type?: EnumSynapseTypeWithAggregatesFilter<"Synapse"> | $Enums.SynapseType
    createdAt?: DateTimeWithAggregatesFilter<"Synapse"> | Date | string
  }

  export type HippocampusStoreWhereInput = {
    AND?: HippocampusStoreWhereInput | HippocampusStoreWhereInput[]
    OR?: HippocampusStoreWhereInput[]
    NOT?: HippocampusStoreWhereInput | HippocampusStoreWhereInput[]
    id?: StringFilter<"HippocampusStore"> | string
    engramId?: StringFilter<"HippocampusStore"> | string
    rawData?: JsonFilter<"HippocampusStore">
    accessCount?: IntFilter<"HippocampusStore"> | number
    lastAccessedAt?: DateTimeFilter<"HippocampusStore"> | Date | string
    expiresAt?: DateTimeFilter<"HippocampusStore"> | Date | string
    createdAt?: DateTimeFilter<"HippocampusStore"> | Date | string
    userId?: StringFilter<"HippocampusStore"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    engram?: XOR<EngramScalarRelationFilter, EngramWhereInput>
  }

  export type HippocampusStoreOrderByWithRelationInput = {
    id?: SortOrder
    engramId?: SortOrder
    rawData?: SortOrder
    accessCount?: SortOrder
    lastAccessedAt?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
    engram?: EngramOrderByWithRelationInput
  }

  export type HippocampusStoreWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    engramId?: string
    AND?: HippocampusStoreWhereInput | HippocampusStoreWhereInput[]
    OR?: HippocampusStoreWhereInput[]
    NOT?: HippocampusStoreWhereInput | HippocampusStoreWhereInput[]
    rawData?: JsonFilter<"HippocampusStore">
    accessCount?: IntFilter<"HippocampusStore"> | number
    lastAccessedAt?: DateTimeFilter<"HippocampusStore"> | Date | string
    expiresAt?: DateTimeFilter<"HippocampusStore"> | Date | string
    createdAt?: DateTimeFilter<"HippocampusStore"> | Date | string
    userId?: StringFilter<"HippocampusStore"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    engram?: XOR<EngramScalarRelationFilter, EngramWhereInput>
  }, "id" | "engramId">

  export type HippocampusStoreOrderByWithAggregationInput = {
    id?: SortOrder
    engramId?: SortOrder
    rawData?: SortOrder
    accessCount?: SortOrder
    lastAccessedAt?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    _count?: HippocampusStoreCountOrderByAggregateInput
    _avg?: HippocampusStoreAvgOrderByAggregateInput
    _max?: HippocampusStoreMaxOrderByAggregateInput
    _min?: HippocampusStoreMinOrderByAggregateInput
    _sum?: HippocampusStoreSumOrderByAggregateInput
  }

  export type HippocampusStoreScalarWhereWithAggregatesInput = {
    AND?: HippocampusStoreScalarWhereWithAggregatesInput | HippocampusStoreScalarWhereWithAggregatesInput[]
    OR?: HippocampusStoreScalarWhereWithAggregatesInput[]
    NOT?: HippocampusStoreScalarWhereWithAggregatesInput | HippocampusStoreScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"HippocampusStore"> | string
    engramId?: StringWithAggregatesFilter<"HippocampusStore"> | string
    rawData?: JsonWithAggregatesFilter<"HippocampusStore">
    accessCount?: IntWithAggregatesFilter<"HippocampusStore"> | number
    lastAccessedAt?: DateTimeWithAggregatesFilter<"HippocampusStore"> | Date | string
    expiresAt?: DateTimeWithAggregatesFilter<"HippocampusStore"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"HippocampusStore"> | Date | string
    userId?: StringWithAggregatesFilter<"HippocampusStore"> | string
  }

  export type CortexStoreWhereInput = {
    AND?: CortexStoreWhereInput | CortexStoreWhereInput[]
    OR?: CortexStoreWhereInput[]
    NOT?: CortexStoreWhereInput | CortexStoreWhereInput[]
    id?: StringFilter<"CortexStore"> | string
    engramId?: StringFilter<"CortexStore"> | string
    compressedData?: JsonFilter<"CortexStore">
    generalization?: FloatFilter<"CortexStore"> | number
    integratedAt?: DateTimeFilter<"CortexStore"> | Date | string
    createdAt?: DateTimeFilter<"CortexStore"> | Date | string
    userId?: StringFilter<"CortexStore"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    engram?: XOR<EngramScalarRelationFilter, EngramWhereInput>
  }

  export type CortexStoreOrderByWithRelationInput = {
    id?: SortOrder
    engramId?: SortOrder
    compressedData?: SortOrder
    generalization?: SortOrder
    integratedAt?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
    engram?: EngramOrderByWithRelationInput
  }

  export type CortexStoreWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    engramId?: string
    AND?: CortexStoreWhereInput | CortexStoreWhereInput[]
    OR?: CortexStoreWhereInput[]
    NOT?: CortexStoreWhereInput | CortexStoreWhereInput[]
    compressedData?: JsonFilter<"CortexStore">
    generalization?: FloatFilter<"CortexStore"> | number
    integratedAt?: DateTimeFilter<"CortexStore"> | Date | string
    createdAt?: DateTimeFilter<"CortexStore"> | Date | string
    userId?: StringFilter<"CortexStore"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    engram?: XOR<EngramScalarRelationFilter, EngramWhereInput>
  }, "id" | "engramId">

  export type CortexStoreOrderByWithAggregationInput = {
    id?: SortOrder
    engramId?: SortOrder
    compressedData?: SortOrder
    generalization?: SortOrder
    integratedAt?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    _count?: CortexStoreCountOrderByAggregateInput
    _avg?: CortexStoreAvgOrderByAggregateInput
    _max?: CortexStoreMaxOrderByAggregateInput
    _min?: CortexStoreMinOrderByAggregateInput
    _sum?: CortexStoreSumOrderByAggregateInput
  }

  export type CortexStoreScalarWhereWithAggregatesInput = {
    AND?: CortexStoreScalarWhereWithAggregatesInput | CortexStoreScalarWhereWithAggregatesInput[]
    OR?: CortexStoreScalarWhereWithAggregatesInput[]
    NOT?: CortexStoreScalarWhereWithAggregatesInput | CortexStoreScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CortexStore"> | string
    engramId?: StringWithAggregatesFilter<"CortexStore"> | string
    compressedData?: JsonWithAggregatesFilter<"CortexStore">
    generalization?: FloatWithAggregatesFilter<"CortexStore"> | number
    integratedAt?: DateTimeWithAggregatesFilter<"CortexStore"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"CortexStore"> | Date | string
    userId?: StringWithAggregatesFilter<"CortexStore"> | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    provider: $Enums.Provider
    providerId: string
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    entries?: EntryCreateNestedManyWithoutUserInput
    engrams?: EngramCreateNestedManyWithoutUserInput
    hippocampusStore?: HippocampusStoreCreateNestedManyWithoutUserInput
    cortexStore?: CortexStoreCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    provider: $Enums.Provider
    providerId: string
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    entries?: EntryUncheckedCreateNestedManyWithoutUserInput
    engrams?: EngramUncheckedCreateNestedManyWithoutUserInput
    hippocampusStore?: HippocampusStoreUncheckedCreateNestedManyWithoutUserInput
    cortexStore?: CortexStoreUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider
    providerId?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    entries?: EntryUpdateManyWithoutUserNestedInput
    engrams?: EngramUpdateManyWithoutUserNestedInput
    hippocampusStore?: HippocampusStoreUpdateManyWithoutUserNestedInput
    cortexStore?: CortexStoreUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider
    providerId?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    entries?: EntryUncheckedUpdateManyWithoutUserNestedInput
    engrams?: EngramUncheckedUpdateManyWithoutUserNestedInput
    hippocampusStore?: HippocampusStoreUncheckedUpdateManyWithoutUserNestedInput
    cortexStore?: CortexStoreUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    provider: $Enums.Provider
    providerId: string
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider
    providerId?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider
    providerId?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EntryCreateInput = {
    id?: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutEntriesInput
    engrams?: EngramCreateNestedManyWithoutEntryInput
  }

  export type EntryUncheckedCreateInput = {
    id?: string
    content: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    engrams?: EngramUncheckedCreateNestedManyWithoutEntryInput
  }

  export type EntryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutEntriesNestedInput
    engrams?: EngramUpdateManyWithoutEntryNestedInput
  }

  export type EntryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    engrams?: EngramUncheckedUpdateManyWithoutEntryNestedInput
  }

  export type EntryCreateManyInput = {
    id?: string
    content: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EntryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EntryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EngramCreateInput = {
    id?: string
    content: string
    embedding?: EngramCreateembeddingInput | number[]
    crebScore?: number
    emotionScore?: number
    importance?: number
    rehearsalCount?: number
    consolidationState?: $Enums.ConsolidationState
    category: $Enums.MemoryType
    keywords?: EngramCreatekeywordsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutEngramsInput
    entry: EntryCreateNestedOneWithoutEngramsInput
    synapseFrom?: SynapseCreateNestedManyWithoutFromEngramInput
    synapseTo?: SynapseCreateNestedManyWithoutToEngramInput
    hippocampus?: HippocampusStoreCreateNestedOneWithoutEngramInput
    cortex?: CortexStoreCreateNestedOneWithoutEngramInput
  }

  export type EngramUncheckedCreateInput = {
    id?: string
    content: string
    embedding?: EngramCreateembeddingInput | number[]
    crebScore?: number
    emotionScore?: number
    importance?: number
    rehearsalCount?: number
    consolidationState?: $Enums.ConsolidationState
    category: $Enums.MemoryType
    keywords?: EngramCreatekeywordsInput | string[]
    entryId: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    synapseFrom?: SynapseUncheckedCreateNestedManyWithoutFromEngramInput
    synapseTo?: SynapseUncheckedCreateNestedManyWithoutToEngramInput
    hippocampus?: HippocampusStoreUncheckedCreateNestedOneWithoutEngramInput
    cortex?: CortexStoreUncheckedCreateNestedOneWithoutEngramInput
  }

  export type EngramUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    embedding?: EngramUpdateembeddingInput | number[]
    crebScore?: FloatFieldUpdateOperationsInput | number
    emotionScore?: FloatFieldUpdateOperationsInput | number
    importance?: FloatFieldUpdateOperationsInput | number
    rehearsalCount?: IntFieldUpdateOperationsInput | number
    consolidationState?: EnumConsolidationStateFieldUpdateOperationsInput | $Enums.ConsolidationState
    category?: EnumMemoryTypeFieldUpdateOperationsInput | $Enums.MemoryType
    keywords?: EngramUpdatekeywordsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutEngramsNestedInput
    entry?: EntryUpdateOneRequiredWithoutEngramsNestedInput
    synapseFrom?: SynapseUpdateManyWithoutFromEngramNestedInput
    synapseTo?: SynapseUpdateManyWithoutToEngramNestedInput
    hippocampus?: HippocampusStoreUpdateOneWithoutEngramNestedInput
    cortex?: CortexStoreUpdateOneWithoutEngramNestedInput
  }

  export type EngramUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    embedding?: EngramUpdateembeddingInput | number[]
    crebScore?: FloatFieldUpdateOperationsInput | number
    emotionScore?: FloatFieldUpdateOperationsInput | number
    importance?: FloatFieldUpdateOperationsInput | number
    rehearsalCount?: IntFieldUpdateOperationsInput | number
    consolidationState?: EnumConsolidationStateFieldUpdateOperationsInput | $Enums.ConsolidationState
    category?: EnumMemoryTypeFieldUpdateOperationsInput | $Enums.MemoryType
    keywords?: EngramUpdatekeywordsInput | string[]
    entryId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    synapseFrom?: SynapseUncheckedUpdateManyWithoutFromEngramNestedInput
    synapseTo?: SynapseUncheckedUpdateManyWithoutToEngramNestedInput
    hippocampus?: HippocampusStoreUncheckedUpdateOneWithoutEngramNestedInput
    cortex?: CortexStoreUncheckedUpdateOneWithoutEngramNestedInput
  }

  export type EngramCreateManyInput = {
    id?: string
    content: string
    embedding?: EngramCreateembeddingInput | number[]
    crebScore?: number
    emotionScore?: number
    importance?: number
    rehearsalCount?: number
    consolidationState?: $Enums.ConsolidationState
    category: $Enums.MemoryType
    keywords?: EngramCreatekeywordsInput | string[]
    entryId: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EngramUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    embedding?: EngramUpdateembeddingInput | number[]
    crebScore?: FloatFieldUpdateOperationsInput | number
    emotionScore?: FloatFieldUpdateOperationsInput | number
    importance?: FloatFieldUpdateOperationsInput | number
    rehearsalCount?: IntFieldUpdateOperationsInput | number
    consolidationState?: EnumConsolidationStateFieldUpdateOperationsInput | $Enums.ConsolidationState
    category?: EnumMemoryTypeFieldUpdateOperationsInput | $Enums.MemoryType
    keywords?: EngramUpdatekeywordsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EngramUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    embedding?: EngramUpdateembeddingInput | number[]
    crebScore?: FloatFieldUpdateOperationsInput | number
    emotionScore?: FloatFieldUpdateOperationsInput | number
    importance?: FloatFieldUpdateOperationsInput | number
    rehearsalCount?: IntFieldUpdateOperationsInput | number
    consolidationState?: EnumConsolidationStateFieldUpdateOperationsInput | $Enums.ConsolidationState
    category?: EnumMemoryTypeFieldUpdateOperationsInput | $Enums.MemoryType
    keywords?: EngramUpdatekeywordsInput | string[]
    entryId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SynapseCreateInput = {
    id?: string
    strength?: number
    type?: $Enums.SynapseType
    createdAt?: Date | string
    fromEngram: EngramCreateNestedOneWithoutSynapseFromInput
    toEngram: EngramCreateNestedOneWithoutSynapseToInput
  }

  export type SynapseUncheckedCreateInput = {
    id?: string
    fromEngramId: string
    toEngramId: string
    strength?: number
    type?: $Enums.SynapseType
    createdAt?: Date | string
  }

  export type SynapseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    strength?: FloatFieldUpdateOperationsInput | number
    type?: EnumSynapseTypeFieldUpdateOperationsInput | $Enums.SynapseType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fromEngram?: EngramUpdateOneRequiredWithoutSynapseFromNestedInput
    toEngram?: EngramUpdateOneRequiredWithoutSynapseToNestedInput
  }

  export type SynapseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromEngramId?: StringFieldUpdateOperationsInput | string
    toEngramId?: StringFieldUpdateOperationsInput | string
    strength?: FloatFieldUpdateOperationsInput | number
    type?: EnumSynapseTypeFieldUpdateOperationsInput | $Enums.SynapseType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SynapseCreateManyInput = {
    id?: string
    fromEngramId: string
    toEngramId: string
    strength?: number
    type?: $Enums.SynapseType
    createdAt?: Date | string
  }

  export type SynapseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    strength?: FloatFieldUpdateOperationsInput | number
    type?: EnumSynapseTypeFieldUpdateOperationsInput | $Enums.SynapseType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SynapseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromEngramId?: StringFieldUpdateOperationsInput | string
    toEngramId?: StringFieldUpdateOperationsInput | string
    strength?: FloatFieldUpdateOperationsInput | number
    type?: EnumSynapseTypeFieldUpdateOperationsInput | $Enums.SynapseType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HippocampusStoreCreateInput = {
    id?: string
    rawData: JsonNullValueInput | InputJsonValue
    accessCount?: number
    lastAccessedAt?: Date | string
    expiresAt: Date | string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutHippocampusStoreInput
    engram: EngramCreateNestedOneWithoutHippocampusInput
  }

  export type HippocampusStoreUncheckedCreateInput = {
    id?: string
    engramId: string
    rawData: JsonNullValueInput | InputJsonValue
    accessCount?: number
    lastAccessedAt?: Date | string
    expiresAt: Date | string
    createdAt?: Date | string
    userId: string
  }

  export type HippocampusStoreUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    rawData?: JsonNullValueInput | InputJsonValue
    accessCount?: IntFieldUpdateOperationsInput | number
    lastAccessedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutHippocampusStoreNestedInput
    engram?: EngramUpdateOneRequiredWithoutHippocampusNestedInput
  }

  export type HippocampusStoreUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    engramId?: StringFieldUpdateOperationsInput | string
    rawData?: JsonNullValueInput | InputJsonValue
    accessCount?: IntFieldUpdateOperationsInput | number
    lastAccessedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type HippocampusStoreCreateManyInput = {
    id?: string
    engramId: string
    rawData: JsonNullValueInput | InputJsonValue
    accessCount?: number
    lastAccessedAt?: Date | string
    expiresAt: Date | string
    createdAt?: Date | string
    userId: string
  }

  export type HippocampusStoreUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    rawData?: JsonNullValueInput | InputJsonValue
    accessCount?: IntFieldUpdateOperationsInput | number
    lastAccessedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HippocampusStoreUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    engramId?: StringFieldUpdateOperationsInput | string
    rawData?: JsonNullValueInput | InputJsonValue
    accessCount?: IntFieldUpdateOperationsInput | number
    lastAccessedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type CortexStoreCreateInput = {
    id?: string
    compressedData: JsonNullValueInput | InputJsonValue
    generalization?: number
    integratedAt: Date | string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutCortexStoreInput
    engram: EngramCreateNestedOneWithoutCortexInput
  }

  export type CortexStoreUncheckedCreateInput = {
    id?: string
    engramId: string
    compressedData: JsonNullValueInput | InputJsonValue
    generalization?: number
    integratedAt: Date | string
    createdAt?: Date | string
    userId: string
  }

  export type CortexStoreUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    compressedData?: JsonNullValueInput | InputJsonValue
    generalization?: FloatFieldUpdateOperationsInput | number
    integratedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCortexStoreNestedInput
    engram?: EngramUpdateOneRequiredWithoutCortexNestedInput
  }

  export type CortexStoreUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    engramId?: StringFieldUpdateOperationsInput | string
    compressedData?: JsonNullValueInput | InputJsonValue
    generalization?: FloatFieldUpdateOperationsInput | number
    integratedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type CortexStoreCreateManyInput = {
    id?: string
    engramId: string
    compressedData: JsonNullValueInput | InputJsonValue
    generalization?: number
    integratedAt: Date | string
    createdAt?: Date | string
    userId: string
  }

  export type CortexStoreUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    compressedData?: JsonNullValueInput | InputJsonValue
    generalization?: FloatFieldUpdateOperationsInput | number
    integratedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CortexStoreUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    engramId?: StringFieldUpdateOperationsInput | string
    compressedData?: JsonNullValueInput | InputJsonValue
    generalization?: FloatFieldUpdateOperationsInput | number
    integratedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
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

  export type EnumProviderFilter<$PrismaModel = never> = {
    equals?: $Enums.Provider | EnumProviderFieldRefInput<$PrismaModel>
    in?: $Enums.Provider[] | ListEnumProviderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Provider[] | ListEnumProviderFieldRefInput<$PrismaModel>
    not?: NestedEnumProviderFilter<$PrismaModel> | $Enums.Provider
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

  export type EntryListRelationFilter = {
    every?: EntryWhereInput
    some?: EntryWhereInput
    none?: EntryWhereInput
  }

  export type EngramListRelationFilter = {
    every?: EngramWhereInput
    some?: EngramWhereInput
    none?: EngramWhereInput
  }

  export type HippocampusStoreListRelationFilter = {
    every?: HippocampusStoreWhereInput
    some?: HippocampusStoreWhereInput
    none?: HippocampusStoreWhereInput
  }

  export type CortexStoreListRelationFilter = {
    every?: CortexStoreWhereInput
    some?: CortexStoreWhereInput
    none?: CortexStoreWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type EntryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EngramOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type HippocampusStoreOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CortexStoreOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserProviderProviderIdCompoundUniqueInput = {
    provider: $Enums.Provider
    providerId: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    provider?: SortOrder
    providerId?: SortOrder
    avatar?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    provider?: SortOrder
    providerId?: SortOrder
    avatar?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    provider?: SortOrder
    providerId?: SortOrder
    avatar?: SortOrder
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

  export type EnumProviderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Provider | EnumProviderFieldRefInput<$PrismaModel>
    in?: $Enums.Provider[] | ListEnumProviderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Provider[] | ListEnumProviderFieldRefInput<$PrismaModel>
    not?: NestedEnumProviderWithAggregatesFilter<$PrismaModel> | $Enums.Provider
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProviderFilter<$PrismaModel>
    _max?: NestedEnumProviderFilter<$PrismaModel>
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type EntryCountOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EntryMaxOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EntryMinOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FloatNullableListFilter<$PrismaModel = never> = {
    equals?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    has?: number | FloatFieldRefInput<$PrismaModel> | null
    hasEvery?: number[] | ListFloatFieldRefInput<$PrismaModel>
    hasSome?: number[] | ListFloatFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
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

  export type EnumConsolidationStateFilter<$PrismaModel = never> = {
    equals?: $Enums.ConsolidationState | EnumConsolidationStateFieldRefInput<$PrismaModel>
    in?: $Enums.ConsolidationState[] | ListEnumConsolidationStateFieldRefInput<$PrismaModel>
    notIn?: $Enums.ConsolidationState[] | ListEnumConsolidationStateFieldRefInput<$PrismaModel>
    not?: NestedEnumConsolidationStateFilter<$PrismaModel> | $Enums.ConsolidationState
  }

  export type EnumMemoryTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.MemoryType | EnumMemoryTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MemoryType[] | ListEnumMemoryTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MemoryType[] | ListEnumMemoryTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMemoryTypeFilter<$PrismaModel> | $Enums.MemoryType
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type EntryScalarRelationFilter = {
    is?: EntryWhereInput
    isNot?: EntryWhereInput
  }

  export type SynapseListRelationFilter = {
    every?: SynapseWhereInput
    some?: SynapseWhereInput
    none?: SynapseWhereInput
  }

  export type HippocampusStoreNullableScalarRelationFilter = {
    is?: HippocampusStoreWhereInput | null
    isNot?: HippocampusStoreWhereInput | null
  }

  export type CortexStoreNullableScalarRelationFilter = {
    is?: CortexStoreWhereInput | null
    isNot?: CortexStoreWhereInput | null
  }

  export type SynapseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EngramCountOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    embedding?: SortOrder
    crebScore?: SortOrder
    emotionScore?: SortOrder
    importance?: SortOrder
    rehearsalCount?: SortOrder
    consolidationState?: SortOrder
    category?: SortOrder
    keywords?: SortOrder
    entryId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EngramAvgOrderByAggregateInput = {
    embedding?: SortOrder
    crebScore?: SortOrder
    emotionScore?: SortOrder
    importance?: SortOrder
    rehearsalCount?: SortOrder
  }

  export type EngramMaxOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    crebScore?: SortOrder
    emotionScore?: SortOrder
    importance?: SortOrder
    rehearsalCount?: SortOrder
    consolidationState?: SortOrder
    category?: SortOrder
    entryId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EngramMinOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    crebScore?: SortOrder
    emotionScore?: SortOrder
    importance?: SortOrder
    rehearsalCount?: SortOrder
    consolidationState?: SortOrder
    category?: SortOrder
    entryId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EngramSumOrderByAggregateInput = {
    embedding?: SortOrder
    crebScore?: SortOrder
    emotionScore?: SortOrder
    importance?: SortOrder
    rehearsalCount?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
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

  export type EnumConsolidationStateWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ConsolidationState | EnumConsolidationStateFieldRefInput<$PrismaModel>
    in?: $Enums.ConsolidationState[] | ListEnumConsolidationStateFieldRefInput<$PrismaModel>
    notIn?: $Enums.ConsolidationState[] | ListEnumConsolidationStateFieldRefInput<$PrismaModel>
    not?: NestedEnumConsolidationStateWithAggregatesFilter<$PrismaModel> | $Enums.ConsolidationState
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumConsolidationStateFilter<$PrismaModel>
    _max?: NestedEnumConsolidationStateFilter<$PrismaModel>
  }

  export type EnumMemoryTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MemoryType | EnumMemoryTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MemoryType[] | ListEnumMemoryTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MemoryType[] | ListEnumMemoryTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMemoryTypeWithAggregatesFilter<$PrismaModel> | $Enums.MemoryType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMemoryTypeFilter<$PrismaModel>
    _max?: NestedEnumMemoryTypeFilter<$PrismaModel>
  }

  export type EnumSynapseTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.SynapseType | EnumSynapseTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SynapseType[] | ListEnumSynapseTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SynapseType[] | ListEnumSynapseTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumSynapseTypeFilter<$PrismaModel> | $Enums.SynapseType
  }

  export type EngramScalarRelationFilter = {
    is?: EngramWhereInput
    isNot?: EngramWhereInput
  }

  export type SynapseFromEngramIdToEngramIdCompoundUniqueInput = {
    fromEngramId: string
    toEngramId: string
  }

  export type SynapseCountOrderByAggregateInput = {
    id?: SortOrder
    fromEngramId?: SortOrder
    toEngramId?: SortOrder
    strength?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
  }

  export type SynapseAvgOrderByAggregateInput = {
    strength?: SortOrder
  }

  export type SynapseMaxOrderByAggregateInput = {
    id?: SortOrder
    fromEngramId?: SortOrder
    toEngramId?: SortOrder
    strength?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
  }

  export type SynapseMinOrderByAggregateInput = {
    id?: SortOrder
    fromEngramId?: SortOrder
    toEngramId?: SortOrder
    strength?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
  }

  export type SynapseSumOrderByAggregateInput = {
    strength?: SortOrder
  }

  export type EnumSynapseTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SynapseType | EnumSynapseTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SynapseType[] | ListEnumSynapseTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SynapseType[] | ListEnumSynapseTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumSynapseTypeWithAggregatesFilter<$PrismaModel> | $Enums.SynapseType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSynapseTypeFilter<$PrismaModel>
    _max?: NestedEnumSynapseTypeFilter<$PrismaModel>
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type HippocampusStoreCountOrderByAggregateInput = {
    id?: SortOrder
    engramId?: SortOrder
    rawData?: SortOrder
    accessCount?: SortOrder
    lastAccessedAt?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type HippocampusStoreAvgOrderByAggregateInput = {
    accessCount?: SortOrder
  }

  export type HippocampusStoreMaxOrderByAggregateInput = {
    id?: SortOrder
    engramId?: SortOrder
    accessCount?: SortOrder
    lastAccessedAt?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type HippocampusStoreMinOrderByAggregateInput = {
    id?: SortOrder
    engramId?: SortOrder
    accessCount?: SortOrder
    lastAccessedAt?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type HippocampusStoreSumOrderByAggregateInput = {
    accessCount?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type CortexStoreCountOrderByAggregateInput = {
    id?: SortOrder
    engramId?: SortOrder
    compressedData?: SortOrder
    generalization?: SortOrder
    integratedAt?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type CortexStoreAvgOrderByAggregateInput = {
    generalization?: SortOrder
  }

  export type CortexStoreMaxOrderByAggregateInput = {
    id?: SortOrder
    engramId?: SortOrder
    generalization?: SortOrder
    integratedAt?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type CortexStoreMinOrderByAggregateInput = {
    id?: SortOrder
    engramId?: SortOrder
    generalization?: SortOrder
    integratedAt?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type CortexStoreSumOrderByAggregateInput = {
    generalization?: SortOrder
  }

  export type EntryCreateNestedManyWithoutUserInput = {
    create?: XOR<EntryCreateWithoutUserInput, EntryUncheckedCreateWithoutUserInput> | EntryCreateWithoutUserInput[] | EntryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EntryCreateOrConnectWithoutUserInput | EntryCreateOrConnectWithoutUserInput[]
    createMany?: EntryCreateManyUserInputEnvelope
    connect?: EntryWhereUniqueInput | EntryWhereUniqueInput[]
  }

  export type EngramCreateNestedManyWithoutUserInput = {
    create?: XOR<EngramCreateWithoutUserInput, EngramUncheckedCreateWithoutUserInput> | EngramCreateWithoutUserInput[] | EngramUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EngramCreateOrConnectWithoutUserInput | EngramCreateOrConnectWithoutUserInput[]
    createMany?: EngramCreateManyUserInputEnvelope
    connect?: EngramWhereUniqueInput | EngramWhereUniqueInput[]
  }

  export type HippocampusStoreCreateNestedManyWithoutUserInput = {
    create?: XOR<HippocampusStoreCreateWithoutUserInput, HippocampusStoreUncheckedCreateWithoutUserInput> | HippocampusStoreCreateWithoutUserInput[] | HippocampusStoreUncheckedCreateWithoutUserInput[]
    connectOrCreate?: HippocampusStoreCreateOrConnectWithoutUserInput | HippocampusStoreCreateOrConnectWithoutUserInput[]
    createMany?: HippocampusStoreCreateManyUserInputEnvelope
    connect?: HippocampusStoreWhereUniqueInput | HippocampusStoreWhereUniqueInput[]
  }

  export type CortexStoreCreateNestedManyWithoutUserInput = {
    create?: XOR<CortexStoreCreateWithoutUserInput, CortexStoreUncheckedCreateWithoutUserInput> | CortexStoreCreateWithoutUserInput[] | CortexStoreUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CortexStoreCreateOrConnectWithoutUserInput | CortexStoreCreateOrConnectWithoutUserInput[]
    createMany?: CortexStoreCreateManyUserInputEnvelope
    connect?: CortexStoreWhereUniqueInput | CortexStoreWhereUniqueInput[]
  }

  export type EntryUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<EntryCreateWithoutUserInput, EntryUncheckedCreateWithoutUserInput> | EntryCreateWithoutUserInput[] | EntryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EntryCreateOrConnectWithoutUserInput | EntryCreateOrConnectWithoutUserInput[]
    createMany?: EntryCreateManyUserInputEnvelope
    connect?: EntryWhereUniqueInput | EntryWhereUniqueInput[]
  }

  export type EngramUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<EngramCreateWithoutUserInput, EngramUncheckedCreateWithoutUserInput> | EngramCreateWithoutUserInput[] | EngramUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EngramCreateOrConnectWithoutUserInput | EngramCreateOrConnectWithoutUserInput[]
    createMany?: EngramCreateManyUserInputEnvelope
    connect?: EngramWhereUniqueInput | EngramWhereUniqueInput[]
  }

  export type HippocampusStoreUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<HippocampusStoreCreateWithoutUserInput, HippocampusStoreUncheckedCreateWithoutUserInput> | HippocampusStoreCreateWithoutUserInput[] | HippocampusStoreUncheckedCreateWithoutUserInput[]
    connectOrCreate?: HippocampusStoreCreateOrConnectWithoutUserInput | HippocampusStoreCreateOrConnectWithoutUserInput[]
    createMany?: HippocampusStoreCreateManyUserInputEnvelope
    connect?: HippocampusStoreWhereUniqueInput | HippocampusStoreWhereUniqueInput[]
  }

  export type CortexStoreUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CortexStoreCreateWithoutUserInput, CortexStoreUncheckedCreateWithoutUserInput> | CortexStoreCreateWithoutUserInput[] | CortexStoreUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CortexStoreCreateOrConnectWithoutUserInput | CortexStoreCreateOrConnectWithoutUserInput[]
    createMany?: CortexStoreCreateManyUserInputEnvelope
    connect?: CortexStoreWhereUniqueInput | CortexStoreWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumProviderFieldUpdateOperationsInput = {
    set?: $Enums.Provider
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EntryUpdateManyWithoutUserNestedInput = {
    create?: XOR<EntryCreateWithoutUserInput, EntryUncheckedCreateWithoutUserInput> | EntryCreateWithoutUserInput[] | EntryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EntryCreateOrConnectWithoutUserInput | EntryCreateOrConnectWithoutUserInput[]
    upsert?: EntryUpsertWithWhereUniqueWithoutUserInput | EntryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EntryCreateManyUserInputEnvelope
    set?: EntryWhereUniqueInput | EntryWhereUniqueInput[]
    disconnect?: EntryWhereUniqueInput | EntryWhereUniqueInput[]
    delete?: EntryWhereUniqueInput | EntryWhereUniqueInput[]
    connect?: EntryWhereUniqueInput | EntryWhereUniqueInput[]
    update?: EntryUpdateWithWhereUniqueWithoutUserInput | EntryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EntryUpdateManyWithWhereWithoutUserInput | EntryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EntryScalarWhereInput | EntryScalarWhereInput[]
  }

  export type EngramUpdateManyWithoutUserNestedInput = {
    create?: XOR<EngramCreateWithoutUserInput, EngramUncheckedCreateWithoutUserInput> | EngramCreateWithoutUserInput[] | EngramUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EngramCreateOrConnectWithoutUserInput | EngramCreateOrConnectWithoutUserInput[]
    upsert?: EngramUpsertWithWhereUniqueWithoutUserInput | EngramUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EngramCreateManyUserInputEnvelope
    set?: EngramWhereUniqueInput | EngramWhereUniqueInput[]
    disconnect?: EngramWhereUniqueInput | EngramWhereUniqueInput[]
    delete?: EngramWhereUniqueInput | EngramWhereUniqueInput[]
    connect?: EngramWhereUniqueInput | EngramWhereUniqueInput[]
    update?: EngramUpdateWithWhereUniqueWithoutUserInput | EngramUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EngramUpdateManyWithWhereWithoutUserInput | EngramUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EngramScalarWhereInput | EngramScalarWhereInput[]
  }

  export type HippocampusStoreUpdateManyWithoutUserNestedInput = {
    create?: XOR<HippocampusStoreCreateWithoutUserInput, HippocampusStoreUncheckedCreateWithoutUserInput> | HippocampusStoreCreateWithoutUserInput[] | HippocampusStoreUncheckedCreateWithoutUserInput[]
    connectOrCreate?: HippocampusStoreCreateOrConnectWithoutUserInput | HippocampusStoreCreateOrConnectWithoutUserInput[]
    upsert?: HippocampusStoreUpsertWithWhereUniqueWithoutUserInput | HippocampusStoreUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: HippocampusStoreCreateManyUserInputEnvelope
    set?: HippocampusStoreWhereUniqueInput | HippocampusStoreWhereUniqueInput[]
    disconnect?: HippocampusStoreWhereUniqueInput | HippocampusStoreWhereUniqueInput[]
    delete?: HippocampusStoreWhereUniqueInput | HippocampusStoreWhereUniqueInput[]
    connect?: HippocampusStoreWhereUniqueInput | HippocampusStoreWhereUniqueInput[]
    update?: HippocampusStoreUpdateWithWhereUniqueWithoutUserInput | HippocampusStoreUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: HippocampusStoreUpdateManyWithWhereWithoutUserInput | HippocampusStoreUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: HippocampusStoreScalarWhereInput | HippocampusStoreScalarWhereInput[]
  }

  export type CortexStoreUpdateManyWithoutUserNestedInput = {
    create?: XOR<CortexStoreCreateWithoutUserInput, CortexStoreUncheckedCreateWithoutUserInput> | CortexStoreCreateWithoutUserInput[] | CortexStoreUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CortexStoreCreateOrConnectWithoutUserInput | CortexStoreCreateOrConnectWithoutUserInput[]
    upsert?: CortexStoreUpsertWithWhereUniqueWithoutUserInput | CortexStoreUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CortexStoreCreateManyUserInputEnvelope
    set?: CortexStoreWhereUniqueInput | CortexStoreWhereUniqueInput[]
    disconnect?: CortexStoreWhereUniqueInput | CortexStoreWhereUniqueInput[]
    delete?: CortexStoreWhereUniqueInput | CortexStoreWhereUniqueInput[]
    connect?: CortexStoreWhereUniqueInput | CortexStoreWhereUniqueInput[]
    update?: CortexStoreUpdateWithWhereUniqueWithoutUserInput | CortexStoreUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CortexStoreUpdateManyWithWhereWithoutUserInput | CortexStoreUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CortexStoreScalarWhereInput | CortexStoreScalarWhereInput[]
  }

  export type EntryUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<EntryCreateWithoutUserInput, EntryUncheckedCreateWithoutUserInput> | EntryCreateWithoutUserInput[] | EntryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EntryCreateOrConnectWithoutUserInput | EntryCreateOrConnectWithoutUserInput[]
    upsert?: EntryUpsertWithWhereUniqueWithoutUserInput | EntryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EntryCreateManyUserInputEnvelope
    set?: EntryWhereUniqueInput | EntryWhereUniqueInput[]
    disconnect?: EntryWhereUniqueInput | EntryWhereUniqueInput[]
    delete?: EntryWhereUniqueInput | EntryWhereUniqueInput[]
    connect?: EntryWhereUniqueInput | EntryWhereUniqueInput[]
    update?: EntryUpdateWithWhereUniqueWithoutUserInput | EntryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EntryUpdateManyWithWhereWithoutUserInput | EntryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EntryScalarWhereInput | EntryScalarWhereInput[]
  }

  export type EngramUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<EngramCreateWithoutUserInput, EngramUncheckedCreateWithoutUserInput> | EngramCreateWithoutUserInput[] | EngramUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EngramCreateOrConnectWithoutUserInput | EngramCreateOrConnectWithoutUserInput[]
    upsert?: EngramUpsertWithWhereUniqueWithoutUserInput | EngramUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EngramCreateManyUserInputEnvelope
    set?: EngramWhereUniqueInput | EngramWhereUniqueInput[]
    disconnect?: EngramWhereUniqueInput | EngramWhereUniqueInput[]
    delete?: EngramWhereUniqueInput | EngramWhereUniqueInput[]
    connect?: EngramWhereUniqueInput | EngramWhereUniqueInput[]
    update?: EngramUpdateWithWhereUniqueWithoutUserInput | EngramUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EngramUpdateManyWithWhereWithoutUserInput | EngramUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EngramScalarWhereInput | EngramScalarWhereInput[]
  }

  export type HippocampusStoreUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<HippocampusStoreCreateWithoutUserInput, HippocampusStoreUncheckedCreateWithoutUserInput> | HippocampusStoreCreateWithoutUserInput[] | HippocampusStoreUncheckedCreateWithoutUserInput[]
    connectOrCreate?: HippocampusStoreCreateOrConnectWithoutUserInput | HippocampusStoreCreateOrConnectWithoutUserInput[]
    upsert?: HippocampusStoreUpsertWithWhereUniqueWithoutUserInput | HippocampusStoreUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: HippocampusStoreCreateManyUserInputEnvelope
    set?: HippocampusStoreWhereUniqueInput | HippocampusStoreWhereUniqueInput[]
    disconnect?: HippocampusStoreWhereUniqueInput | HippocampusStoreWhereUniqueInput[]
    delete?: HippocampusStoreWhereUniqueInput | HippocampusStoreWhereUniqueInput[]
    connect?: HippocampusStoreWhereUniqueInput | HippocampusStoreWhereUniqueInput[]
    update?: HippocampusStoreUpdateWithWhereUniqueWithoutUserInput | HippocampusStoreUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: HippocampusStoreUpdateManyWithWhereWithoutUserInput | HippocampusStoreUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: HippocampusStoreScalarWhereInput | HippocampusStoreScalarWhereInput[]
  }

  export type CortexStoreUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CortexStoreCreateWithoutUserInput, CortexStoreUncheckedCreateWithoutUserInput> | CortexStoreCreateWithoutUserInput[] | CortexStoreUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CortexStoreCreateOrConnectWithoutUserInput | CortexStoreCreateOrConnectWithoutUserInput[]
    upsert?: CortexStoreUpsertWithWhereUniqueWithoutUserInput | CortexStoreUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CortexStoreCreateManyUserInputEnvelope
    set?: CortexStoreWhereUniqueInput | CortexStoreWhereUniqueInput[]
    disconnect?: CortexStoreWhereUniqueInput | CortexStoreWhereUniqueInput[]
    delete?: CortexStoreWhereUniqueInput | CortexStoreWhereUniqueInput[]
    connect?: CortexStoreWhereUniqueInput | CortexStoreWhereUniqueInput[]
    update?: CortexStoreUpdateWithWhereUniqueWithoutUserInput | CortexStoreUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CortexStoreUpdateManyWithWhereWithoutUserInput | CortexStoreUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CortexStoreScalarWhereInput | CortexStoreScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutEntriesInput = {
    create?: XOR<UserCreateWithoutEntriesInput, UserUncheckedCreateWithoutEntriesInput>
    connectOrCreate?: UserCreateOrConnectWithoutEntriesInput
    connect?: UserWhereUniqueInput
  }

  export type EngramCreateNestedManyWithoutEntryInput = {
    create?: XOR<EngramCreateWithoutEntryInput, EngramUncheckedCreateWithoutEntryInput> | EngramCreateWithoutEntryInput[] | EngramUncheckedCreateWithoutEntryInput[]
    connectOrCreate?: EngramCreateOrConnectWithoutEntryInput | EngramCreateOrConnectWithoutEntryInput[]
    createMany?: EngramCreateManyEntryInputEnvelope
    connect?: EngramWhereUniqueInput | EngramWhereUniqueInput[]
  }

  export type EngramUncheckedCreateNestedManyWithoutEntryInput = {
    create?: XOR<EngramCreateWithoutEntryInput, EngramUncheckedCreateWithoutEntryInput> | EngramCreateWithoutEntryInput[] | EngramUncheckedCreateWithoutEntryInput[]
    connectOrCreate?: EngramCreateOrConnectWithoutEntryInput | EngramCreateOrConnectWithoutEntryInput[]
    createMany?: EngramCreateManyEntryInputEnvelope
    connect?: EngramWhereUniqueInput | EngramWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutEntriesNestedInput = {
    create?: XOR<UserCreateWithoutEntriesInput, UserUncheckedCreateWithoutEntriesInput>
    connectOrCreate?: UserCreateOrConnectWithoutEntriesInput
    upsert?: UserUpsertWithoutEntriesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutEntriesInput, UserUpdateWithoutEntriesInput>, UserUncheckedUpdateWithoutEntriesInput>
  }

  export type EngramUpdateManyWithoutEntryNestedInput = {
    create?: XOR<EngramCreateWithoutEntryInput, EngramUncheckedCreateWithoutEntryInput> | EngramCreateWithoutEntryInput[] | EngramUncheckedCreateWithoutEntryInput[]
    connectOrCreate?: EngramCreateOrConnectWithoutEntryInput | EngramCreateOrConnectWithoutEntryInput[]
    upsert?: EngramUpsertWithWhereUniqueWithoutEntryInput | EngramUpsertWithWhereUniqueWithoutEntryInput[]
    createMany?: EngramCreateManyEntryInputEnvelope
    set?: EngramWhereUniqueInput | EngramWhereUniqueInput[]
    disconnect?: EngramWhereUniqueInput | EngramWhereUniqueInput[]
    delete?: EngramWhereUniqueInput | EngramWhereUniqueInput[]
    connect?: EngramWhereUniqueInput | EngramWhereUniqueInput[]
    update?: EngramUpdateWithWhereUniqueWithoutEntryInput | EngramUpdateWithWhereUniqueWithoutEntryInput[]
    updateMany?: EngramUpdateManyWithWhereWithoutEntryInput | EngramUpdateManyWithWhereWithoutEntryInput[]
    deleteMany?: EngramScalarWhereInput | EngramScalarWhereInput[]
  }

  export type EngramUncheckedUpdateManyWithoutEntryNestedInput = {
    create?: XOR<EngramCreateWithoutEntryInput, EngramUncheckedCreateWithoutEntryInput> | EngramCreateWithoutEntryInput[] | EngramUncheckedCreateWithoutEntryInput[]
    connectOrCreate?: EngramCreateOrConnectWithoutEntryInput | EngramCreateOrConnectWithoutEntryInput[]
    upsert?: EngramUpsertWithWhereUniqueWithoutEntryInput | EngramUpsertWithWhereUniqueWithoutEntryInput[]
    createMany?: EngramCreateManyEntryInputEnvelope
    set?: EngramWhereUniqueInput | EngramWhereUniqueInput[]
    disconnect?: EngramWhereUniqueInput | EngramWhereUniqueInput[]
    delete?: EngramWhereUniqueInput | EngramWhereUniqueInput[]
    connect?: EngramWhereUniqueInput | EngramWhereUniqueInput[]
    update?: EngramUpdateWithWhereUniqueWithoutEntryInput | EngramUpdateWithWhereUniqueWithoutEntryInput[]
    updateMany?: EngramUpdateManyWithWhereWithoutEntryInput | EngramUpdateManyWithWhereWithoutEntryInput[]
    deleteMany?: EngramScalarWhereInput | EngramScalarWhereInput[]
  }

  export type EngramCreateembeddingInput = {
    set: number[]
  }

  export type EngramCreatekeywordsInput = {
    set: string[]
  }

  export type UserCreateNestedOneWithoutEngramsInput = {
    create?: XOR<UserCreateWithoutEngramsInput, UserUncheckedCreateWithoutEngramsInput>
    connectOrCreate?: UserCreateOrConnectWithoutEngramsInput
    connect?: UserWhereUniqueInput
  }

  export type EntryCreateNestedOneWithoutEngramsInput = {
    create?: XOR<EntryCreateWithoutEngramsInput, EntryUncheckedCreateWithoutEngramsInput>
    connectOrCreate?: EntryCreateOrConnectWithoutEngramsInput
    connect?: EntryWhereUniqueInput
  }

  export type SynapseCreateNestedManyWithoutFromEngramInput = {
    create?: XOR<SynapseCreateWithoutFromEngramInput, SynapseUncheckedCreateWithoutFromEngramInput> | SynapseCreateWithoutFromEngramInput[] | SynapseUncheckedCreateWithoutFromEngramInput[]
    connectOrCreate?: SynapseCreateOrConnectWithoutFromEngramInput | SynapseCreateOrConnectWithoutFromEngramInput[]
    createMany?: SynapseCreateManyFromEngramInputEnvelope
    connect?: SynapseWhereUniqueInput | SynapseWhereUniqueInput[]
  }

  export type SynapseCreateNestedManyWithoutToEngramInput = {
    create?: XOR<SynapseCreateWithoutToEngramInput, SynapseUncheckedCreateWithoutToEngramInput> | SynapseCreateWithoutToEngramInput[] | SynapseUncheckedCreateWithoutToEngramInput[]
    connectOrCreate?: SynapseCreateOrConnectWithoutToEngramInput | SynapseCreateOrConnectWithoutToEngramInput[]
    createMany?: SynapseCreateManyToEngramInputEnvelope
    connect?: SynapseWhereUniqueInput | SynapseWhereUniqueInput[]
  }

  export type HippocampusStoreCreateNestedOneWithoutEngramInput = {
    create?: XOR<HippocampusStoreCreateWithoutEngramInput, HippocampusStoreUncheckedCreateWithoutEngramInput>
    connectOrCreate?: HippocampusStoreCreateOrConnectWithoutEngramInput
    connect?: HippocampusStoreWhereUniqueInput
  }

  export type CortexStoreCreateNestedOneWithoutEngramInput = {
    create?: XOR<CortexStoreCreateWithoutEngramInput, CortexStoreUncheckedCreateWithoutEngramInput>
    connectOrCreate?: CortexStoreCreateOrConnectWithoutEngramInput
    connect?: CortexStoreWhereUniqueInput
  }

  export type SynapseUncheckedCreateNestedManyWithoutFromEngramInput = {
    create?: XOR<SynapseCreateWithoutFromEngramInput, SynapseUncheckedCreateWithoutFromEngramInput> | SynapseCreateWithoutFromEngramInput[] | SynapseUncheckedCreateWithoutFromEngramInput[]
    connectOrCreate?: SynapseCreateOrConnectWithoutFromEngramInput | SynapseCreateOrConnectWithoutFromEngramInput[]
    createMany?: SynapseCreateManyFromEngramInputEnvelope
    connect?: SynapseWhereUniqueInput | SynapseWhereUniqueInput[]
  }

  export type SynapseUncheckedCreateNestedManyWithoutToEngramInput = {
    create?: XOR<SynapseCreateWithoutToEngramInput, SynapseUncheckedCreateWithoutToEngramInput> | SynapseCreateWithoutToEngramInput[] | SynapseUncheckedCreateWithoutToEngramInput[]
    connectOrCreate?: SynapseCreateOrConnectWithoutToEngramInput | SynapseCreateOrConnectWithoutToEngramInput[]
    createMany?: SynapseCreateManyToEngramInputEnvelope
    connect?: SynapseWhereUniqueInput | SynapseWhereUniqueInput[]
  }

  export type HippocampusStoreUncheckedCreateNestedOneWithoutEngramInput = {
    create?: XOR<HippocampusStoreCreateWithoutEngramInput, HippocampusStoreUncheckedCreateWithoutEngramInput>
    connectOrCreate?: HippocampusStoreCreateOrConnectWithoutEngramInput
    connect?: HippocampusStoreWhereUniqueInput
  }

  export type CortexStoreUncheckedCreateNestedOneWithoutEngramInput = {
    create?: XOR<CortexStoreCreateWithoutEngramInput, CortexStoreUncheckedCreateWithoutEngramInput>
    connectOrCreate?: CortexStoreCreateOrConnectWithoutEngramInput
    connect?: CortexStoreWhereUniqueInput
  }

  export type EngramUpdateembeddingInput = {
    set?: number[]
    push?: number | number[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumConsolidationStateFieldUpdateOperationsInput = {
    set?: $Enums.ConsolidationState
  }

  export type EnumMemoryTypeFieldUpdateOperationsInput = {
    set?: $Enums.MemoryType
  }

  export type EngramUpdatekeywordsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UserUpdateOneRequiredWithoutEngramsNestedInput = {
    create?: XOR<UserCreateWithoutEngramsInput, UserUncheckedCreateWithoutEngramsInput>
    connectOrCreate?: UserCreateOrConnectWithoutEngramsInput
    upsert?: UserUpsertWithoutEngramsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutEngramsInput, UserUpdateWithoutEngramsInput>, UserUncheckedUpdateWithoutEngramsInput>
  }

  export type EntryUpdateOneRequiredWithoutEngramsNestedInput = {
    create?: XOR<EntryCreateWithoutEngramsInput, EntryUncheckedCreateWithoutEngramsInput>
    connectOrCreate?: EntryCreateOrConnectWithoutEngramsInput
    upsert?: EntryUpsertWithoutEngramsInput
    connect?: EntryWhereUniqueInput
    update?: XOR<XOR<EntryUpdateToOneWithWhereWithoutEngramsInput, EntryUpdateWithoutEngramsInput>, EntryUncheckedUpdateWithoutEngramsInput>
  }

  export type SynapseUpdateManyWithoutFromEngramNestedInput = {
    create?: XOR<SynapseCreateWithoutFromEngramInput, SynapseUncheckedCreateWithoutFromEngramInput> | SynapseCreateWithoutFromEngramInput[] | SynapseUncheckedCreateWithoutFromEngramInput[]
    connectOrCreate?: SynapseCreateOrConnectWithoutFromEngramInput | SynapseCreateOrConnectWithoutFromEngramInput[]
    upsert?: SynapseUpsertWithWhereUniqueWithoutFromEngramInput | SynapseUpsertWithWhereUniqueWithoutFromEngramInput[]
    createMany?: SynapseCreateManyFromEngramInputEnvelope
    set?: SynapseWhereUniqueInput | SynapseWhereUniqueInput[]
    disconnect?: SynapseWhereUniqueInput | SynapseWhereUniqueInput[]
    delete?: SynapseWhereUniqueInput | SynapseWhereUniqueInput[]
    connect?: SynapseWhereUniqueInput | SynapseWhereUniqueInput[]
    update?: SynapseUpdateWithWhereUniqueWithoutFromEngramInput | SynapseUpdateWithWhereUniqueWithoutFromEngramInput[]
    updateMany?: SynapseUpdateManyWithWhereWithoutFromEngramInput | SynapseUpdateManyWithWhereWithoutFromEngramInput[]
    deleteMany?: SynapseScalarWhereInput | SynapseScalarWhereInput[]
  }

  export type SynapseUpdateManyWithoutToEngramNestedInput = {
    create?: XOR<SynapseCreateWithoutToEngramInput, SynapseUncheckedCreateWithoutToEngramInput> | SynapseCreateWithoutToEngramInput[] | SynapseUncheckedCreateWithoutToEngramInput[]
    connectOrCreate?: SynapseCreateOrConnectWithoutToEngramInput | SynapseCreateOrConnectWithoutToEngramInput[]
    upsert?: SynapseUpsertWithWhereUniqueWithoutToEngramInput | SynapseUpsertWithWhereUniqueWithoutToEngramInput[]
    createMany?: SynapseCreateManyToEngramInputEnvelope
    set?: SynapseWhereUniqueInput | SynapseWhereUniqueInput[]
    disconnect?: SynapseWhereUniqueInput | SynapseWhereUniqueInput[]
    delete?: SynapseWhereUniqueInput | SynapseWhereUniqueInput[]
    connect?: SynapseWhereUniqueInput | SynapseWhereUniqueInput[]
    update?: SynapseUpdateWithWhereUniqueWithoutToEngramInput | SynapseUpdateWithWhereUniqueWithoutToEngramInput[]
    updateMany?: SynapseUpdateManyWithWhereWithoutToEngramInput | SynapseUpdateManyWithWhereWithoutToEngramInput[]
    deleteMany?: SynapseScalarWhereInput | SynapseScalarWhereInput[]
  }

  export type HippocampusStoreUpdateOneWithoutEngramNestedInput = {
    create?: XOR<HippocampusStoreCreateWithoutEngramInput, HippocampusStoreUncheckedCreateWithoutEngramInput>
    connectOrCreate?: HippocampusStoreCreateOrConnectWithoutEngramInput
    upsert?: HippocampusStoreUpsertWithoutEngramInput
    disconnect?: HippocampusStoreWhereInput | boolean
    delete?: HippocampusStoreWhereInput | boolean
    connect?: HippocampusStoreWhereUniqueInput
    update?: XOR<XOR<HippocampusStoreUpdateToOneWithWhereWithoutEngramInput, HippocampusStoreUpdateWithoutEngramInput>, HippocampusStoreUncheckedUpdateWithoutEngramInput>
  }

  export type CortexStoreUpdateOneWithoutEngramNestedInput = {
    create?: XOR<CortexStoreCreateWithoutEngramInput, CortexStoreUncheckedCreateWithoutEngramInput>
    connectOrCreate?: CortexStoreCreateOrConnectWithoutEngramInput
    upsert?: CortexStoreUpsertWithoutEngramInput
    disconnect?: CortexStoreWhereInput | boolean
    delete?: CortexStoreWhereInput | boolean
    connect?: CortexStoreWhereUniqueInput
    update?: XOR<XOR<CortexStoreUpdateToOneWithWhereWithoutEngramInput, CortexStoreUpdateWithoutEngramInput>, CortexStoreUncheckedUpdateWithoutEngramInput>
  }

  export type SynapseUncheckedUpdateManyWithoutFromEngramNestedInput = {
    create?: XOR<SynapseCreateWithoutFromEngramInput, SynapseUncheckedCreateWithoutFromEngramInput> | SynapseCreateWithoutFromEngramInput[] | SynapseUncheckedCreateWithoutFromEngramInput[]
    connectOrCreate?: SynapseCreateOrConnectWithoutFromEngramInput | SynapseCreateOrConnectWithoutFromEngramInput[]
    upsert?: SynapseUpsertWithWhereUniqueWithoutFromEngramInput | SynapseUpsertWithWhereUniqueWithoutFromEngramInput[]
    createMany?: SynapseCreateManyFromEngramInputEnvelope
    set?: SynapseWhereUniqueInput | SynapseWhereUniqueInput[]
    disconnect?: SynapseWhereUniqueInput | SynapseWhereUniqueInput[]
    delete?: SynapseWhereUniqueInput | SynapseWhereUniqueInput[]
    connect?: SynapseWhereUniqueInput | SynapseWhereUniqueInput[]
    update?: SynapseUpdateWithWhereUniqueWithoutFromEngramInput | SynapseUpdateWithWhereUniqueWithoutFromEngramInput[]
    updateMany?: SynapseUpdateManyWithWhereWithoutFromEngramInput | SynapseUpdateManyWithWhereWithoutFromEngramInput[]
    deleteMany?: SynapseScalarWhereInput | SynapseScalarWhereInput[]
  }

  export type SynapseUncheckedUpdateManyWithoutToEngramNestedInput = {
    create?: XOR<SynapseCreateWithoutToEngramInput, SynapseUncheckedCreateWithoutToEngramInput> | SynapseCreateWithoutToEngramInput[] | SynapseUncheckedCreateWithoutToEngramInput[]
    connectOrCreate?: SynapseCreateOrConnectWithoutToEngramInput | SynapseCreateOrConnectWithoutToEngramInput[]
    upsert?: SynapseUpsertWithWhereUniqueWithoutToEngramInput | SynapseUpsertWithWhereUniqueWithoutToEngramInput[]
    createMany?: SynapseCreateManyToEngramInputEnvelope
    set?: SynapseWhereUniqueInput | SynapseWhereUniqueInput[]
    disconnect?: SynapseWhereUniqueInput | SynapseWhereUniqueInput[]
    delete?: SynapseWhereUniqueInput | SynapseWhereUniqueInput[]
    connect?: SynapseWhereUniqueInput | SynapseWhereUniqueInput[]
    update?: SynapseUpdateWithWhereUniqueWithoutToEngramInput | SynapseUpdateWithWhereUniqueWithoutToEngramInput[]
    updateMany?: SynapseUpdateManyWithWhereWithoutToEngramInput | SynapseUpdateManyWithWhereWithoutToEngramInput[]
    deleteMany?: SynapseScalarWhereInput | SynapseScalarWhereInput[]
  }

  export type HippocampusStoreUncheckedUpdateOneWithoutEngramNestedInput = {
    create?: XOR<HippocampusStoreCreateWithoutEngramInput, HippocampusStoreUncheckedCreateWithoutEngramInput>
    connectOrCreate?: HippocampusStoreCreateOrConnectWithoutEngramInput
    upsert?: HippocampusStoreUpsertWithoutEngramInput
    disconnect?: HippocampusStoreWhereInput | boolean
    delete?: HippocampusStoreWhereInput | boolean
    connect?: HippocampusStoreWhereUniqueInput
    update?: XOR<XOR<HippocampusStoreUpdateToOneWithWhereWithoutEngramInput, HippocampusStoreUpdateWithoutEngramInput>, HippocampusStoreUncheckedUpdateWithoutEngramInput>
  }

  export type CortexStoreUncheckedUpdateOneWithoutEngramNestedInput = {
    create?: XOR<CortexStoreCreateWithoutEngramInput, CortexStoreUncheckedCreateWithoutEngramInput>
    connectOrCreate?: CortexStoreCreateOrConnectWithoutEngramInput
    upsert?: CortexStoreUpsertWithoutEngramInput
    disconnect?: CortexStoreWhereInput | boolean
    delete?: CortexStoreWhereInput | boolean
    connect?: CortexStoreWhereUniqueInput
    update?: XOR<XOR<CortexStoreUpdateToOneWithWhereWithoutEngramInput, CortexStoreUpdateWithoutEngramInput>, CortexStoreUncheckedUpdateWithoutEngramInput>
  }

  export type EngramCreateNestedOneWithoutSynapseFromInput = {
    create?: XOR<EngramCreateWithoutSynapseFromInput, EngramUncheckedCreateWithoutSynapseFromInput>
    connectOrCreate?: EngramCreateOrConnectWithoutSynapseFromInput
    connect?: EngramWhereUniqueInput
  }

  export type EngramCreateNestedOneWithoutSynapseToInput = {
    create?: XOR<EngramCreateWithoutSynapseToInput, EngramUncheckedCreateWithoutSynapseToInput>
    connectOrCreate?: EngramCreateOrConnectWithoutSynapseToInput
    connect?: EngramWhereUniqueInput
  }

  export type EnumSynapseTypeFieldUpdateOperationsInput = {
    set?: $Enums.SynapseType
  }

  export type EngramUpdateOneRequiredWithoutSynapseFromNestedInput = {
    create?: XOR<EngramCreateWithoutSynapseFromInput, EngramUncheckedCreateWithoutSynapseFromInput>
    connectOrCreate?: EngramCreateOrConnectWithoutSynapseFromInput
    upsert?: EngramUpsertWithoutSynapseFromInput
    connect?: EngramWhereUniqueInput
    update?: XOR<XOR<EngramUpdateToOneWithWhereWithoutSynapseFromInput, EngramUpdateWithoutSynapseFromInput>, EngramUncheckedUpdateWithoutSynapseFromInput>
  }

  export type EngramUpdateOneRequiredWithoutSynapseToNestedInput = {
    create?: XOR<EngramCreateWithoutSynapseToInput, EngramUncheckedCreateWithoutSynapseToInput>
    connectOrCreate?: EngramCreateOrConnectWithoutSynapseToInput
    upsert?: EngramUpsertWithoutSynapseToInput
    connect?: EngramWhereUniqueInput
    update?: XOR<XOR<EngramUpdateToOneWithWhereWithoutSynapseToInput, EngramUpdateWithoutSynapseToInput>, EngramUncheckedUpdateWithoutSynapseToInput>
  }

  export type UserCreateNestedOneWithoutHippocampusStoreInput = {
    create?: XOR<UserCreateWithoutHippocampusStoreInput, UserUncheckedCreateWithoutHippocampusStoreInput>
    connectOrCreate?: UserCreateOrConnectWithoutHippocampusStoreInput
    connect?: UserWhereUniqueInput
  }

  export type EngramCreateNestedOneWithoutHippocampusInput = {
    create?: XOR<EngramCreateWithoutHippocampusInput, EngramUncheckedCreateWithoutHippocampusInput>
    connectOrCreate?: EngramCreateOrConnectWithoutHippocampusInput
    connect?: EngramWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutHippocampusStoreNestedInput = {
    create?: XOR<UserCreateWithoutHippocampusStoreInput, UserUncheckedCreateWithoutHippocampusStoreInput>
    connectOrCreate?: UserCreateOrConnectWithoutHippocampusStoreInput
    upsert?: UserUpsertWithoutHippocampusStoreInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutHippocampusStoreInput, UserUpdateWithoutHippocampusStoreInput>, UserUncheckedUpdateWithoutHippocampusStoreInput>
  }

  export type EngramUpdateOneRequiredWithoutHippocampusNestedInput = {
    create?: XOR<EngramCreateWithoutHippocampusInput, EngramUncheckedCreateWithoutHippocampusInput>
    connectOrCreate?: EngramCreateOrConnectWithoutHippocampusInput
    upsert?: EngramUpsertWithoutHippocampusInput
    connect?: EngramWhereUniqueInput
    update?: XOR<XOR<EngramUpdateToOneWithWhereWithoutHippocampusInput, EngramUpdateWithoutHippocampusInput>, EngramUncheckedUpdateWithoutHippocampusInput>
  }

  export type UserCreateNestedOneWithoutCortexStoreInput = {
    create?: XOR<UserCreateWithoutCortexStoreInput, UserUncheckedCreateWithoutCortexStoreInput>
    connectOrCreate?: UserCreateOrConnectWithoutCortexStoreInput
    connect?: UserWhereUniqueInput
  }

  export type EngramCreateNestedOneWithoutCortexInput = {
    create?: XOR<EngramCreateWithoutCortexInput, EngramUncheckedCreateWithoutCortexInput>
    connectOrCreate?: EngramCreateOrConnectWithoutCortexInput
    connect?: EngramWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutCortexStoreNestedInput = {
    create?: XOR<UserCreateWithoutCortexStoreInput, UserUncheckedCreateWithoutCortexStoreInput>
    connectOrCreate?: UserCreateOrConnectWithoutCortexStoreInput
    upsert?: UserUpsertWithoutCortexStoreInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCortexStoreInput, UserUpdateWithoutCortexStoreInput>, UserUncheckedUpdateWithoutCortexStoreInput>
  }

  export type EngramUpdateOneRequiredWithoutCortexNestedInput = {
    create?: XOR<EngramCreateWithoutCortexInput, EngramUncheckedCreateWithoutCortexInput>
    connectOrCreate?: EngramCreateOrConnectWithoutCortexInput
    upsert?: EngramUpsertWithoutCortexInput
    connect?: EngramWhereUniqueInput
    update?: XOR<XOR<EngramUpdateToOneWithWhereWithoutCortexInput, EngramUpdateWithoutCortexInput>, EngramUncheckedUpdateWithoutCortexInput>
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

  export type NestedEnumProviderFilter<$PrismaModel = never> = {
    equals?: $Enums.Provider | EnumProviderFieldRefInput<$PrismaModel>
    in?: $Enums.Provider[] | ListEnumProviderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Provider[] | ListEnumProviderFieldRefInput<$PrismaModel>
    not?: NestedEnumProviderFilter<$PrismaModel> | $Enums.Provider
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

  export type NestedEnumProviderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Provider | EnumProviderFieldRefInput<$PrismaModel>
    in?: $Enums.Provider[] | ListEnumProviderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Provider[] | ListEnumProviderFieldRefInput<$PrismaModel>
    not?: NestedEnumProviderWithAggregatesFilter<$PrismaModel> | $Enums.Provider
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProviderFilter<$PrismaModel>
    _max?: NestedEnumProviderFilter<$PrismaModel>
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

  export type NestedEnumConsolidationStateFilter<$PrismaModel = never> = {
    equals?: $Enums.ConsolidationState | EnumConsolidationStateFieldRefInput<$PrismaModel>
    in?: $Enums.ConsolidationState[] | ListEnumConsolidationStateFieldRefInput<$PrismaModel>
    notIn?: $Enums.ConsolidationState[] | ListEnumConsolidationStateFieldRefInput<$PrismaModel>
    not?: NestedEnumConsolidationStateFilter<$PrismaModel> | $Enums.ConsolidationState
  }

  export type NestedEnumMemoryTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.MemoryType | EnumMemoryTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MemoryType[] | ListEnumMemoryTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MemoryType[] | ListEnumMemoryTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMemoryTypeFilter<$PrismaModel> | $Enums.MemoryType
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
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

  export type NestedEnumConsolidationStateWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ConsolidationState | EnumConsolidationStateFieldRefInput<$PrismaModel>
    in?: $Enums.ConsolidationState[] | ListEnumConsolidationStateFieldRefInput<$PrismaModel>
    notIn?: $Enums.ConsolidationState[] | ListEnumConsolidationStateFieldRefInput<$PrismaModel>
    not?: NestedEnumConsolidationStateWithAggregatesFilter<$PrismaModel> | $Enums.ConsolidationState
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumConsolidationStateFilter<$PrismaModel>
    _max?: NestedEnumConsolidationStateFilter<$PrismaModel>
  }

  export type NestedEnumMemoryTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MemoryType | EnumMemoryTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MemoryType[] | ListEnumMemoryTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MemoryType[] | ListEnumMemoryTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMemoryTypeWithAggregatesFilter<$PrismaModel> | $Enums.MemoryType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMemoryTypeFilter<$PrismaModel>
    _max?: NestedEnumMemoryTypeFilter<$PrismaModel>
  }

  export type NestedEnumSynapseTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.SynapseType | EnumSynapseTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SynapseType[] | ListEnumSynapseTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SynapseType[] | ListEnumSynapseTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumSynapseTypeFilter<$PrismaModel> | $Enums.SynapseType
  }

  export type NestedEnumSynapseTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SynapseType | EnumSynapseTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SynapseType[] | ListEnumSynapseTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SynapseType[] | ListEnumSynapseTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumSynapseTypeWithAggregatesFilter<$PrismaModel> | $Enums.SynapseType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSynapseTypeFilter<$PrismaModel>
    _max?: NestedEnumSynapseTypeFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type EntryCreateWithoutUserInput = {
    id?: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    engrams?: EngramCreateNestedManyWithoutEntryInput
  }

  export type EntryUncheckedCreateWithoutUserInput = {
    id?: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    engrams?: EngramUncheckedCreateNestedManyWithoutEntryInput
  }

  export type EntryCreateOrConnectWithoutUserInput = {
    where: EntryWhereUniqueInput
    create: XOR<EntryCreateWithoutUserInput, EntryUncheckedCreateWithoutUserInput>
  }

  export type EntryCreateManyUserInputEnvelope = {
    data: EntryCreateManyUserInput | EntryCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type EngramCreateWithoutUserInput = {
    id?: string
    content: string
    embedding?: EngramCreateembeddingInput | number[]
    crebScore?: number
    emotionScore?: number
    importance?: number
    rehearsalCount?: number
    consolidationState?: $Enums.ConsolidationState
    category: $Enums.MemoryType
    keywords?: EngramCreatekeywordsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    entry: EntryCreateNestedOneWithoutEngramsInput
    synapseFrom?: SynapseCreateNestedManyWithoutFromEngramInput
    synapseTo?: SynapseCreateNestedManyWithoutToEngramInput
    hippocampus?: HippocampusStoreCreateNestedOneWithoutEngramInput
    cortex?: CortexStoreCreateNestedOneWithoutEngramInput
  }

  export type EngramUncheckedCreateWithoutUserInput = {
    id?: string
    content: string
    embedding?: EngramCreateembeddingInput | number[]
    crebScore?: number
    emotionScore?: number
    importance?: number
    rehearsalCount?: number
    consolidationState?: $Enums.ConsolidationState
    category: $Enums.MemoryType
    keywords?: EngramCreatekeywordsInput | string[]
    entryId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    synapseFrom?: SynapseUncheckedCreateNestedManyWithoutFromEngramInput
    synapseTo?: SynapseUncheckedCreateNestedManyWithoutToEngramInput
    hippocampus?: HippocampusStoreUncheckedCreateNestedOneWithoutEngramInput
    cortex?: CortexStoreUncheckedCreateNestedOneWithoutEngramInput
  }

  export type EngramCreateOrConnectWithoutUserInput = {
    where: EngramWhereUniqueInput
    create: XOR<EngramCreateWithoutUserInput, EngramUncheckedCreateWithoutUserInput>
  }

  export type EngramCreateManyUserInputEnvelope = {
    data: EngramCreateManyUserInput | EngramCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type HippocampusStoreCreateWithoutUserInput = {
    id?: string
    rawData: JsonNullValueInput | InputJsonValue
    accessCount?: number
    lastAccessedAt?: Date | string
    expiresAt: Date | string
    createdAt?: Date | string
    engram: EngramCreateNestedOneWithoutHippocampusInput
  }

  export type HippocampusStoreUncheckedCreateWithoutUserInput = {
    id?: string
    engramId: string
    rawData: JsonNullValueInput | InputJsonValue
    accessCount?: number
    lastAccessedAt?: Date | string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type HippocampusStoreCreateOrConnectWithoutUserInput = {
    where: HippocampusStoreWhereUniqueInput
    create: XOR<HippocampusStoreCreateWithoutUserInput, HippocampusStoreUncheckedCreateWithoutUserInput>
  }

  export type HippocampusStoreCreateManyUserInputEnvelope = {
    data: HippocampusStoreCreateManyUserInput | HippocampusStoreCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CortexStoreCreateWithoutUserInput = {
    id?: string
    compressedData: JsonNullValueInput | InputJsonValue
    generalization?: number
    integratedAt: Date | string
    createdAt?: Date | string
    engram: EngramCreateNestedOneWithoutCortexInput
  }

  export type CortexStoreUncheckedCreateWithoutUserInput = {
    id?: string
    engramId: string
    compressedData: JsonNullValueInput | InputJsonValue
    generalization?: number
    integratedAt: Date | string
    createdAt?: Date | string
  }

  export type CortexStoreCreateOrConnectWithoutUserInput = {
    where: CortexStoreWhereUniqueInput
    create: XOR<CortexStoreCreateWithoutUserInput, CortexStoreUncheckedCreateWithoutUserInput>
  }

  export type CortexStoreCreateManyUserInputEnvelope = {
    data: CortexStoreCreateManyUserInput | CortexStoreCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type EntryUpsertWithWhereUniqueWithoutUserInput = {
    where: EntryWhereUniqueInput
    update: XOR<EntryUpdateWithoutUserInput, EntryUncheckedUpdateWithoutUserInput>
    create: XOR<EntryCreateWithoutUserInput, EntryUncheckedCreateWithoutUserInput>
  }

  export type EntryUpdateWithWhereUniqueWithoutUserInput = {
    where: EntryWhereUniqueInput
    data: XOR<EntryUpdateWithoutUserInput, EntryUncheckedUpdateWithoutUserInput>
  }

  export type EntryUpdateManyWithWhereWithoutUserInput = {
    where: EntryScalarWhereInput
    data: XOR<EntryUpdateManyMutationInput, EntryUncheckedUpdateManyWithoutUserInput>
  }

  export type EntryScalarWhereInput = {
    AND?: EntryScalarWhereInput | EntryScalarWhereInput[]
    OR?: EntryScalarWhereInput[]
    NOT?: EntryScalarWhereInput | EntryScalarWhereInput[]
    id?: StringFilter<"Entry"> | string
    content?: StringFilter<"Entry"> | string
    userId?: StringFilter<"Entry"> | string
    createdAt?: DateTimeFilter<"Entry"> | Date | string
    updatedAt?: DateTimeFilter<"Entry"> | Date | string
  }

  export type EngramUpsertWithWhereUniqueWithoutUserInput = {
    where: EngramWhereUniqueInput
    update: XOR<EngramUpdateWithoutUserInput, EngramUncheckedUpdateWithoutUserInput>
    create: XOR<EngramCreateWithoutUserInput, EngramUncheckedCreateWithoutUserInput>
  }

  export type EngramUpdateWithWhereUniqueWithoutUserInput = {
    where: EngramWhereUniqueInput
    data: XOR<EngramUpdateWithoutUserInput, EngramUncheckedUpdateWithoutUserInput>
  }

  export type EngramUpdateManyWithWhereWithoutUserInput = {
    where: EngramScalarWhereInput
    data: XOR<EngramUpdateManyMutationInput, EngramUncheckedUpdateManyWithoutUserInput>
  }

  export type EngramScalarWhereInput = {
    AND?: EngramScalarWhereInput | EngramScalarWhereInput[]
    OR?: EngramScalarWhereInput[]
    NOT?: EngramScalarWhereInput | EngramScalarWhereInput[]
    id?: StringFilter<"Engram"> | string
    content?: StringFilter<"Engram"> | string
    embedding?: FloatNullableListFilter<"Engram">
    crebScore?: FloatFilter<"Engram"> | number
    emotionScore?: FloatFilter<"Engram"> | number
    importance?: FloatFilter<"Engram"> | number
    rehearsalCount?: IntFilter<"Engram"> | number
    consolidationState?: EnumConsolidationStateFilter<"Engram"> | $Enums.ConsolidationState
    category?: EnumMemoryTypeFilter<"Engram"> | $Enums.MemoryType
    keywords?: StringNullableListFilter<"Engram">
    entryId?: StringFilter<"Engram"> | string
    userId?: StringFilter<"Engram"> | string
    createdAt?: DateTimeFilter<"Engram"> | Date | string
    updatedAt?: DateTimeFilter<"Engram"> | Date | string
  }

  export type HippocampusStoreUpsertWithWhereUniqueWithoutUserInput = {
    where: HippocampusStoreWhereUniqueInput
    update: XOR<HippocampusStoreUpdateWithoutUserInput, HippocampusStoreUncheckedUpdateWithoutUserInput>
    create: XOR<HippocampusStoreCreateWithoutUserInput, HippocampusStoreUncheckedCreateWithoutUserInput>
  }

  export type HippocampusStoreUpdateWithWhereUniqueWithoutUserInput = {
    where: HippocampusStoreWhereUniqueInput
    data: XOR<HippocampusStoreUpdateWithoutUserInput, HippocampusStoreUncheckedUpdateWithoutUserInput>
  }

  export type HippocampusStoreUpdateManyWithWhereWithoutUserInput = {
    where: HippocampusStoreScalarWhereInput
    data: XOR<HippocampusStoreUpdateManyMutationInput, HippocampusStoreUncheckedUpdateManyWithoutUserInput>
  }

  export type HippocampusStoreScalarWhereInput = {
    AND?: HippocampusStoreScalarWhereInput | HippocampusStoreScalarWhereInput[]
    OR?: HippocampusStoreScalarWhereInput[]
    NOT?: HippocampusStoreScalarWhereInput | HippocampusStoreScalarWhereInput[]
    id?: StringFilter<"HippocampusStore"> | string
    engramId?: StringFilter<"HippocampusStore"> | string
    rawData?: JsonFilter<"HippocampusStore">
    accessCount?: IntFilter<"HippocampusStore"> | number
    lastAccessedAt?: DateTimeFilter<"HippocampusStore"> | Date | string
    expiresAt?: DateTimeFilter<"HippocampusStore"> | Date | string
    createdAt?: DateTimeFilter<"HippocampusStore"> | Date | string
    userId?: StringFilter<"HippocampusStore"> | string
  }

  export type CortexStoreUpsertWithWhereUniqueWithoutUserInput = {
    where: CortexStoreWhereUniqueInput
    update: XOR<CortexStoreUpdateWithoutUserInput, CortexStoreUncheckedUpdateWithoutUserInput>
    create: XOR<CortexStoreCreateWithoutUserInput, CortexStoreUncheckedCreateWithoutUserInput>
  }

  export type CortexStoreUpdateWithWhereUniqueWithoutUserInput = {
    where: CortexStoreWhereUniqueInput
    data: XOR<CortexStoreUpdateWithoutUserInput, CortexStoreUncheckedUpdateWithoutUserInput>
  }

  export type CortexStoreUpdateManyWithWhereWithoutUserInput = {
    where: CortexStoreScalarWhereInput
    data: XOR<CortexStoreUpdateManyMutationInput, CortexStoreUncheckedUpdateManyWithoutUserInput>
  }

  export type CortexStoreScalarWhereInput = {
    AND?: CortexStoreScalarWhereInput | CortexStoreScalarWhereInput[]
    OR?: CortexStoreScalarWhereInput[]
    NOT?: CortexStoreScalarWhereInput | CortexStoreScalarWhereInput[]
    id?: StringFilter<"CortexStore"> | string
    engramId?: StringFilter<"CortexStore"> | string
    compressedData?: JsonFilter<"CortexStore">
    generalization?: FloatFilter<"CortexStore"> | number
    integratedAt?: DateTimeFilter<"CortexStore"> | Date | string
    createdAt?: DateTimeFilter<"CortexStore"> | Date | string
    userId?: StringFilter<"CortexStore"> | string
  }

  export type UserCreateWithoutEntriesInput = {
    id?: string
    name: string
    email: string
    provider: $Enums.Provider
    providerId: string
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    engrams?: EngramCreateNestedManyWithoutUserInput
    hippocampusStore?: HippocampusStoreCreateNestedManyWithoutUserInput
    cortexStore?: CortexStoreCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutEntriesInput = {
    id?: string
    name: string
    email: string
    provider: $Enums.Provider
    providerId: string
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    engrams?: EngramUncheckedCreateNestedManyWithoutUserInput
    hippocampusStore?: HippocampusStoreUncheckedCreateNestedManyWithoutUserInput
    cortexStore?: CortexStoreUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutEntriesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutEntriesInput, UserUncheckedCreateWithoutEntriesInput>
  }

  export type EngramCreateWithoutEntryInput = {
    id?: string
    content: string
    embedding?: EngramCreateembeddingInput | number[]
    crebScore?: number
    emotionScore?: number
    importance?: number
    rehearsalCount?: number
    consolidationState?: $Enums.ConsolidationState
    category: $Enums.MemoryType
    keywords?: EngramCreatekeywordsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutEngramsInput
    synapseFrom?: SynapseCreateNestedManyWithoutFromEngramInput
    synapseTo?: SynapseCreateNestedManyWithoutToEngramInput
    hippocampus?: HippocampusStoreCreateNestedOneWithoutEngramInput
    cortex?: CortexStoreCreateNestedOneWithoutEngramInput
  }

  export type EngramUncheckedCreateWithoutEntryInput = {
    id?: string
    content: string
    embedding?: EngramCreateembeddingInput | number[]
    crebScore?: number
    emotionScore?: number
    importance?: number
    rehearsalCount?: number
    consolidationState?: $Enums.ConsolidationState
    category: $Enums.MemoryType
    keywords?: EngramCreatekeywordsInput | string[]
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    synapseFrom?: SynapseUncheckedCreateNestedManyWithoutFromEngramInput
    synapseTo?: SynapseUncheckedCreateNestedManyWithoutToEngramInput
    hippocampus?: HippocampusStoreUncheckedCreateNestedOneWithoutEngramInput
    cortex?: CortexStoreUncheckedCreateNestedOneWithoutEngramInput
  }

  export type EngramCreateOrConnectWithoutEntryInput = {
    where: EngramWhereUniqueInput
    create: XOR<EngramCreateWithoutEntryInput, EngramUncheckedCreateWithoutEntryInput>
  }

  export type EngramCreateManyEntryInputEnvelope = {
    data: EngramCreateManyEntryInput | EngramCreateManyEntryInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutEntriesInput = {
    update: XOR<UserUpdateWithoutEntriesInput, UserUncheckedUpdateWithoutEntriesInput>
    create: XOR<UserCreateWithoutEntriesInput, UserUncheckedCreateWithoutEntriesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutEntriesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutEntriesInput, UserUncheckedUpdateWithoutEntriesInput>
  }

  export type UserUpdateWithoutEntriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider
    providerId?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    engrams?: EngramUpdateManyWithoutUserNestedInput
    hippocampusStore?: HippocampusStoreUpdateManyWithoutUserNestedInput
    cortexStore?: CortexStoreUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutEntriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider
    providerId?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    engrams?: EngramUncheckedUpdateManyWithoutUserNestedInput
    hippocampusStore?: HippocampusStoreUncheckedUpdateManyWithoutUserNestedInput
    cortexStore?: CortexStoreUncheckedUpdateManyWithoutUserNestedInput
  }

  export type EngramUpsertWithWhereUniqueWithoutEntryInput = {
    where: EngramWhereUniqueInput
    update: XOR<EngramUpdateWithoutEntryInput, EngramUncheckedUpdateWithoutEntryInput>
    create: XOR<EngramCreateWithoutEntryInput, EngramUncheckedCreateWithoutEntryInput>
  }

  export type EngramUpdateWithWhereUniqueWithoutEntryInput = {
    where: EngramWhereUniqueInput
    data: XOR<EngramUpdateWithoutEntryInput, EngramUncheckedUpdateWithoutEntryInput>
  }

  export type EngramUpdateManyWithWhereWithoutEntryInput = {
    where: EngramScalarWhereInput
    data: XOR<EngramUpdateManyMutationInput, EngramUncheckedUpdateManyWithoutEntryInput>
  }

  export type UserCreateWithoutEngramsInput = {
    id?: string
    name: string
    email: string
    provider: $Enums.Provider
    providerId: string
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    entries?: EntryCreateNestedManyWithoutUserInput
    hippocampusStore?: HippocampusStoreCreateNestedManyWithoutUserInput
    cortexStore?: CortexStoreCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutEngramsInput = {
    id?: string
    name: string
    email: string
    provider: $Enums.Provider
    providerId: string
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    entries?: EntryUncheckedCreateNestedManyWithoutUserInput
    hippocampusStore?: HippocampusStoreUncheckedCreateNestedManyWithoutUserInput
    cortexStore?: CortexStoreUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutEngramsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutEngramsInput, UserUncheckedCreateWithoutEngramsInput>
  }

  export type EntryCreateWithoutEngramsInput = {
    id?: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutEntriesInput
  }

  export type EntryUncheckedCreateWithoutEngramsInput = {
    id?: string
    content: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EntryCreateOrConnectWithoutEngramsInput = {
    where: EntryWhereUniqueInput
    create: XOR<EntryCreateWithoutEngramsInput, EntryUncheckedCreateWithoutEngramsInput>
  }

  export type SynapseCreateWithoutFromEngramInput = {
    id?: string
    strength?: number
    type?: $Enums.SynapseType
    createdAt?: Date | string
    toEngram: EngramCreateNestedOneWithoutSynapseToInput
  }

  export type SynapseUncheckedCreateWithoutFromEngramInput = {
    id?: string
    toEngramId: string
    strength?: number
    type?: $Enums.SynapseType
    createdAt?: Date | string
  }

  export type SynapseCreateOrConnectWithoutFromEngramInput = {
    where: SynapseWhereUniqueInput
    create: XOR<SynapseCreateWithoutFromEngramInput, SynapseUncheckedCreateWithoutFromEngramInput>
  }

  export type SynapseCreateManyFromEngramInputEnvelope = {
    data: SynapseCreateManyFromEngramInput | SynapseCreateManyFromEngramInput[]
    skipDuplicates?: boolean
  }

  export type SynapseCreateWithoutToEngramInput = {
    id?: string
    strength?: number
    type?: $Enums.SynapseType
    createdAt?: Date | string
    fromEngram: EngramCreateNestedOneWithoutSynapseFromInput
  }

  export type SynapseUncheckedCreateWithoutToEngramInput = {
    id?: string
    fromEngramId: string
    strength?: number
    type?: $Enums.SynapseType
    createdAt?: Date | string
  }

  export type SynapseCreateOrConnectWithoutToEngramInput = {
    where: SynapseWhereUniqueInput
    create: XOR<SynapseCreateWithoutToEngramInput, SynapseUncheckedCreateWithoutToEngramInput>
  }

  export type SynapseCreateManyToEngramInputEnvelope = {
    data: SynapseCreateManyToEngramInput | SynapseCreateManyToEngramInput[]
    skipDuplicates?: boolean
  }

  export type HippocampusStoreCreateWithoutEngramInput = {
    id?: string
    rawData: JsonNullValueInput | InputJsonValue
    accessCount?: number
    lastAccessedAt?: Date | string
    expiresAt: Date | string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutHippocampusStoreInput
  }

  export type HippocampusStoreUncheckedCreateWithoutEngramInput = {
    id?: string
    rawData: JsonNullValueInput | InputJsonValue
    accessCount?: number
    lastAccessedAt?: Date | string
    expiresAt: Date | string
    createdAt?: Date | string
    userId: string
  }

  export type HippocampusStoreCreateOrConnectWithoutEngramInput = {
    where: HippocampusStoreWhereUniqueInput
    create: XOR<HippocampusStoreCreateWithoutEngramInput, HippocampusStoreUncheckedCreateWithoutEngramInput>
  }

  export type CortexStoreCreateWithoutEngramInput = {
    id?: string
    compressedData: JsonNullValueInput | InputJsonValue
    generalization?: number
    integratedAt: Date | string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutCortexStoreInput
  }

  export type CortexStoreUncheckedCreateWithoutEngramInput = {
    id?: string
    compressedData: JsonNullValueInput | InputJsonValue
    generalization?: number
    integratedAt: Date | string
    createdAt?: Date | string
    userId: string
  }

  export type CortexStoreCreateOrConnectWithoutEngramInput = {
    where: CortexStoreWhereUniqueInput
    create: XOR<CortexStoreCreateWithoutEngramInput, CortexStoreUncheckedCreateWithoutEngramInput>
  }

  export type UserUpsertWithoutEngramsInput = {
    update: XOR<UserUpdateWithoutEngramsInput, UserUncheckedUpdateWithoutEngramsInput>
    create: XOR<UserCreateWithoutEngramsInput, UserUncheckedCreateWithoutEngramsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutEngramsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutEngramsInput, UserUncheckedUpdateWithoutEngramsInput>
  }

  export type UserUpdateWithoutEngramsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider
    providerId?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    entries?: EntryUpdateManyWithoutUserNestedInput
    hippocampusStore?: HippocampusStoreUpdateManyWithoutUserNestedInput
    cortexStore?: CortexStoreUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutEngramsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider
    providerId?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    entries?: EntryUncheckedUpdateManyWithoutUserNestedInput
    hippocampusStore?: HippocampusStoreUncheckedUpdateManyWithoutUserNestedInput
    cortexStore?: CortexStoreUncheckedUpdateManyWithoutUserNestedInput
  }

  export type EntryUpsertWithoutEngramsInput = {
    update: XOR<EntryUpdateWithoutEngramsInput, EntryUncheckedUpdateWithoutEngramsInput>
    create: XOR<EntryCreateWithoutEngramsInput, EntryUncheckedCreateWithoutEngramsInput>
    where?: EntryWhereInput
  }

  export type EntryUpdateToOneWithWhereWithoutEngramsInput = {
    where?: EntryWhereInput
    data: XOR<EntryUpdateWithoutEngramsInput, EntryUncheckedUpdateWithoutEngramsInput>
  }

  export type EntryUpdateWithoutEngramsInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutEntriesNestedInput
  }

  export type EntryUncheckedUpdateWithoutEngramsInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SynapseUpsertWithWhereUniqueWithoutFromEngramInput = {
    where: SynapseWhereUniqueInput
    update: XOR<SynapseUpdateWithoutFromEngramInput, SynapseUncheckedUpdateWithoutFromEngramInput>
    create: XOR<SynapseCreateWithoutFromEngramInput, SynapseUncheckedCreateWithoutFromEngramInput>
  }

  export type SynapseUpdateWithWhereUniqueWithoutFromEngramInput = {
    where: SynapseWhereUniqueInput
    data: XOR<SynapseUpdateWithoutFromEngramInput, SynapseUncheckedUpdateWithoutFromEngramInput>
  }

  export type SynapseUpdateManyWithWhereWithoutFromEngramInput = {
    where: SynapseScalarWhereInput
    data: XOR<SynapseUpdateManyMutationInput, SynapseUncheckedUpdateManyWithoutFromEngramInput>
  }

  export type SynapseScalarWhereInput = {
    AND?: SynapseScalarWhereInput | SynapseScalarWhereInput[]
    OR?: SynapseScalarWhereInput[]
    NOT?: SynapseScalarWhereInput | SynapseScalarWhereInput[]
    id?: StringFilter<"Synapse"> | string
    fromEngramId?: StringFilter<"Synapse"> | string
    toEngramId?: StringFilter<"Synapse"> | string
    strength?: FloatFilter<"Synapse"> | number
    type?: EnumSynapseTypeFilter<"Synapse"> | $Enums.SynapseType
    createdAt?: DateTimeFilter<"Synapse"> | Date | string
  }

  export type SynapseUpsertWithWhereUniqueWithoutToEngramInput = {
    where: SynapseWhereUniqueInput
    update: XOR<SynapseUpdateWithoutToEngramInput, SynapseUncheckedUpdateWithoutToEngramInput>
    create: XOR<SynapseCreateWithoutToEngramInput, SynapseUncheckedCreateWithoutToEngramInput>
  }

  export type SynapseUpdateWithWhereUniqueWithoutToEngramInput = {
    where: SynapseWhereUniqueInput
    data: XOR<SynapseUpdateWithoutToEngramInput, SynapseUncheckedUpdateWithoutToEngramInput>
  }

  export type SynapseUpdateManyWithWhereWithoutToEngramInput = {
    where: SynapseScalarWhereInput
    data: XOR<SynapseUpdateManyMutationInput, SynapseUncheckedUpdateManyWithoutToEngramInput>
  }

  export type HippocampusStoreUpsertWithoutEngramInput = {
    update: XOR<HippocampusStoreUpdateWithoutEngramInput, HippocampusStoreUncheckedUpdateWithoutEngramInput>
    create: XOR<HippocampusStoreCreateWithoutEngramInput, HippocampusStoreUncheckedCreateWithoutEngramInput>
    where?: HippocampusStoreWhereInput
  }

  export type HippocampusStoreUpdateToOneWithWhereWithoutEngramInput = {
    where?: HippocampusStoreWhereInput
    data: XOR<HippocampusStoreUpdateWithoutEngramInput, HippocampusStoreUncheckedUpdateWithoutEngramInput>
  }

  export type HippocampusStoreUpdateWithoutEngramInput = {
    id?: StringFieldUpdateOperationsInput | string
    rawData?: JsonNullValueInput | InputJsonValue
    accessCount?: IntFieldUpdateOperationsInput | number
    lastAccessedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutHippocampusStoreNestedInput
  }

  export type HippocampusStoreUncheckedUpdateWithoutEngramInput = {
    id?: StringFieldUpdateOperationsInput | string
    rawData?: JsonNullValueInput | InputJsonValue
    accessCount?: IntFieldUpdateOperationsInput | number
    lastAccessedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type CortexStoreUpsertWithoutEngramInput = {
    update: XOR<CortexStoreUpdateWithoutEngramInput, CortexStoreUncheckedUpdateWithoutEngramInput>
    create: XOR<CortexStoreCreateWithoutEngramInput, CortexStoreUncheckedCreateWithoutEngramInput>
    where?: CortexStoreWhereInput
  }

  export type CortexStoreUpdateToOneWithWhereWithoutEngramInput = {
    where?: CortexStoreWhereInput
    data: XOR<CortexStoreUpdateWithoutEngramInput, CortexStoreUncheckedUpdateWithoutEngramInput>
  }

  export type CortexStoreUpdateWithoutEngramInput = {
    id?: StringFieldUpdateOperationsInput | string
    compressedData?: JsonNullValueInput | InputJsonValue
    generalization?: FloatFieldUpdateOperationsInput | number
    integratedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCortexStoreNestedInput
  }

  export type CortexStoreUncheckedUpdateWithoutEngramInput = {
    id?: StringFieldUpdateOperationsInput | string
    compressedData?: JsonNullValueInput | InputJsonValue
    generalization?: FloatFieldUpdateOperationsInput | number
    integratedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type EngramCreateWithoutSynapseFromInput = {
    id?: string
    content: string
    embedding?: EngramCreateembeddingInput | number[]
    crebScore?: number
    emotionScore?: number
    importance?: number
    rehearsalCount?: number
    consolidationState?: $Enums.ConsolidationState
    category: $Enums.MemoryType
    keywords?: EngramCreatekeywordsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutEngramsInput
    entry: EntryCreateNestedOneWithoutEngramsInput
    synapseTo?: SynapseCreateNestedManyWithoutToEngramInput
    hippocampus?: HippocampusStoreCreateNestedOneWithoutEngramInput
    cortex?: CortexStoreCreateNestedOneWithoutEngramInput
  }

  export type EngramUncheckedCreateWithoutSynapseFromInput = {
    id?: string
    content: string
    embedding?: EngramCreateembeddingInput | number[]
    crebScore?: number
    emotionScore?: number
    importance?: number
    rehearsalCount?: number
    consolidationState?: $Enums.ConsolidationState
    category: $Enums.MemoryType
    keywords?: EngramCreatekeywordsInput | string[]
    entryId: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    synapseTo?: SynapseUncheckedCreateNestedManyWithoutToEngramInput
    hippocampus?: HippocampusStoreUncheckedCreateNestedOneWithoutEngramInput
    cortex?: CortexStoreUncheckedCreateNestedOneWithoutEngramInput
  }

  export type EngramCreateOrConnectWithoutSynapseFromInput = {
    where: EngramWhereUniqueInput
    create: XOR<EngramCreateWithoutSynapseFromInput, EngramUncheckedCreateWithoutSynapseFromInput>
  }

  export type EngramCreateWithoutSynapseToInput = {
    id?: string
    content: string
    embedding?: EngramCreateembeddingInput | number[]
    crebScore?: number
    emotionScore?: number
    importance?: number
    rehearsalCount?: number
    consolidationState?: $Enums.ConsolidationState
    category: $Enums.MemoryType
    keywords?: EngramCreatekeywordsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutEngramsInput
    entry: EntryCreateNestedOneWithoutEngramsInput
    synapseFrom?: SynapseCreateNestedManyWithoutFromEngramInput
    hippocampus?: HippocampusStoreCreateNestedOneWithoutEngramInput
    cortex?: CortexStoreCreateNestedOneWithoutEngramInput
  }

  export type EngramUncheckedCreateWithoutSynapseToInput = {
    id?: string
    content: string
    embedding?: EngramCreateembeddingInput | number[]
    crebScore?: number
    emotionScore?: number
    importance?: number
    rehearsalCount?: number
    consolidationState?: $Enums.ConsolidationState
    category: $Enums.MemoryType
    keywords?: EngramCreatekeywordsInput | string[]
    entryId: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    synapseFrom?: SynapseUncheckedCreateNestedManyWithoutFromEngramInput
    hippocampus?: HippocampusStoreUncheckedCreateNestedOneWithoutEngramInput
    cortex?: CortexStoreUncheckedCreateNestedOneWithoutEngramInput
  }

  export type EngramCreateOrConnectWithoutSynapseToInput = {
    where: EngramWhereUniqueInput
    create: XOR<EngramCreateWithoutSynapseToInput, EngramUncheckedCreateWithoutSynapseToInput>
  }

  export type EngramUpsertWithoutSynapseFromInput = {
    update: XOR<EngramUpdateWithoutSynapseFromInput, EngramUncheckedUpdateWithoutSynapseFromInput>
    create: XOR<EngramCreateWithoutSynapseFromInput, EngramUncheckedCreateWithoutSynapseFromInput>
    where?: EngramWhereInput
  }

  export type EngramUpdateToOneWithWhereWithoutSynapseFromInput = {
    where?: EngramWhereInput
    data: XOR<EngramUpdateWithoutSynapseFromInput, EngramUncheckedUpdateWithoutSynapseFromInput>
  }

  export type EngramUpdateWithoutSynapseFromInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    embedding?: EngramUpdateembeddingInput | number[]
    crebScore?: FloatFieldUpdateOperationsInput | number
    emotionScore?: FloatFieldUpdateOperationsInput | number
    importance?: FloatFieldUpdateOperationsInput | number
    rehearsalCount?: IntFieldUpdateOperationsInput | number
    consolidationState?: EnumConsolidationStateFieldUpdateOperationsInput | $Enums.ConsolidationState
    category?: EnumMemoryTypeFieldUpdateOperationsInput | $Enums.MemoryType
    keywords?: EngramUpdatekeywordsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutEngramsNestedInput
    entry?: EntryUpdateOneRequiredWithoutEngramsNestedInput
    synapseTo?: SynapseUpdateManyWithoutToEngramNestedInput
    hippocampus?: HippocampusStoreUpdateOneWithoutEngramNestedInput
    cortex?: CortexStoreUpdateOneWithoutEngramNestedInput
  }

  export type EngramUncheckedUpdateWithoutSynapseFromInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    embedding?: EngramUpdateembeddingInput | number[]
    crebScore?: FloatFieldUpdateOperationsInput | number
    emotionScore?: FloatFieldUpdateOperationsInput | number
    importance?: FloatFieldUpdateOperationsInput | number
    rehearsalCount?: IntFieldUpdateOperationsInput | number
    consolidationState?: EnumConsolidationStateFieldUpdateOperationsInput | $Enums.ConsolidationState
    category?: EnumMemoryTypeFieldUpdateOperationsInput | $Enums.MemoryType
    keywords?: EngramUpdatekeywordsInput | string[]
    entryId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    synapseTo?: SynapseUncheckedUpdateManyWithoutToEngramNestedInput
    hippocampus?: HippocampusStoreUncheckedUpdateOneWithoutEngramNestedInput
    cortex?: CortexStoreUncheckedUpdateOneWithoutEngramNestedInput
  }

  export type EngramUpsertWithoutSynapseToInput = {
    update: XOR<EngramUpdateWithoutSynapseToInput, EngramUncheckedUpdateWithoutSynapseToInput>
    create: XOR<EngramCreateWithoutSynapseToInput, EngramUncheckedCreateWithoutSynapseToInput>
    where?: EngramWhereInput
  }

  export type EngramUpdateToOneWithWhereWithoutSynapseToInput = {
    where?: EngramWhereInput
    data: XOR<EngramUpdateWithoutSynapseToInput, EngramUncheckedUpdateWithoutSynapseToInput>
  }

  export type EngramUpdateWithoutSynapseToInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    embedding?: EngramUpdateembeddingInput | number[]
    crebScore?: FloatFieldUpdateOperationsInput | number
    emotionScore?: FloatFieldUpdateOperationsInput | number
    importance?: FloatFieldUpdateOperationsInput | number
    rehearsalCount?: IntFieldUpdateOperationsInput | number
    consolidationState?: EnumConsolidationStateFieldUpdateOperationsInput | $Enums.ConsolidationState
    category?: EnumMemoryTypeFieldUpdateOperationsInput | $Enums.MemoryType
    keywords?: EngramUpdatekeywordsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutEngramsNestedInput
    entry?: EntryUpdateOneRequiredWithoutEngramsNestedInput
    synapseFrom?: SynapseUpdateManyWithoutFromEngramNestedInput
    hippocampus?: HippocampusStoreUpdateOneWithoutEngramNestedInput
    cortex?: CortexStoreUpdateOneWithoutEngramNestedInput
  }

  export type EngramUncheckedUpdateWithoutSynapseToInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    embedding?: EngramUpdateembeddingInput | number[]
    crebScore?: FloatFieldUpdateOperationsInput | number
    emotionScore?: FloatFieldUpdateOperationsInput | number
    importance?: FloatFieldUpdateOperationsInput | number
    rehearsalCount?: IntFieldUpdateOperationsInput | number
    consolidationState?: EnumConsolidationStateFieldUpdateOperationsInput | $Enums.ConsolidationState
    category?: EnumMemoryTypeFieldUpdateOperationsInput | $Enums.MemoryType
    keywords?: EngramUpdatekeywordsInput | string[]
    entryId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    synapseFrom?: SynapseUncheckedUpdateManyWithoutFromEngramNestedInput
    hippocampus?: HippocampusStoreUncheckedUpdateOneWithoutEngramNestedInput
    cortex?: CortexStoreUncheckedUpdateOneWithoutEngramNestedInput
  }

  export type UserCreateWithoutHippocampusStoreInput = {
    id?: string
    name: string
    email: string
    provider: $Enums.Provider
    providerId: string
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    entries?: EntryCreateNestedManyWithoutUserInput
    engrams?: EngramCreateNestedManyWithoutUserInput
    cortexStore?: CortexStoreCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutHippocampusStoreInput = {
    id?: string
    name: string
    email: string
    provider: $Enums.Provider
    providerId: string
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    entries?: EntryUncheckedCreateNestedManyWithoutUserInput
    engrams?: EngramUncheckedCreateNestedManyWithoutUserInput
    cortexStore?: CortexStoreUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutHippocampusStoreInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutHippocampusStoreInput, UserUncheckedCreateWithoutHippocampusStoreInput>
  }

  export type EngramCreateWithoutHippocampusInput = {
    id?: string
    content: string
    embedding?: EngramCreateembeddingInput | number[]
    crebScore?: number
    emotionScore?: number
    importance?: number
    rehearsalCount?: number
    consolidationState?: $Enums.ConsolidationState
    category: $Enums.MemoryType
    keywords?: EngramCreatekeywordsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutEngramsInput
    entry: EntryCreateNestedOneWithoutEngramsInput
    synapseFrom?: SynapseCreateNestedManyWithoutFromEngramInput
    synapseTo?: SynapseCreateNestedManyWithoutToEngramInput
    cortex?: CortexStoreCreateNestedOneWithoutEngramInput
  }

  export type EngramUncheckedCreateWithoutHippocampusInput = {
    id?: string
    content: string
    embedding?: EngramCreateembeddingInput | number[]
    crebScore?: number
    emotionScore?: number
    importance?: number
    rehearsalCount?: number
    consolidationState?: $Enums.ConsolidationState
    category: $Enums.MemoryType
    keywords?: EngramCreatekeywordsInput | string[]
    entryId: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    synapseFrom?: SynapseUncheckedCreateNestedManyWithoutFromEngramInput
    synapseTo?: SynapseUncheckedCreateNestedManyWithoutToEngramInput
    cortex?: CortexStoreUncheckedCreateNestedOneWithoutEngramInput
  }

  export type EngramCreateOrConnectWithoutHippocampusInput = {
    where: EngramWhereUniqueInput
    create: XOR<EngramCreateWithoutHippocampusInput, EngramUncheckedCreateWithoutHippocampusInput>
  }

  export type UserUpsertWithoutHippocampusStoreInput = {
    update: XOR<UserUpdateWithoutHippocampusStoreInput, UserUncheckedUpdateWithoutHippocampusStoreInput>
    create: XOR<UserCreateWithoutHippocampusStoreInput, UserUncheckedCreateWithoutHippocampusStoreInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutHippocampusStoreInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutHippocampusStoreInput, UserUncheckedUpdateWithoutHippocampusStoreInput>
  }

  export type UserUpdateWithoutHippocampusStoreInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider
    providerId?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    entries?: EntryUpdateManyWithoutUserNestedInput
    engrams?: EngramUpdateManyWithoutUserNestedInput
    cortexStore?: CortexStoreUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutHippocampusStoreInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider
    providerId?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    entries?: EntryUncheckedUpdateManyWithoutUserNestedInput
    engrams?: EngramUncheckedUpdateManyWithoutUserNestedInput
    cortexStore?: CortexStoreUncheckedUpdateManyWithoutUserNestedInput
  }

  export type EngramUpsertWithoutHippocampusInput = {
    update: XOR<EngramUpdateWithoutHippocampusInput, EngramUncheckedUpdateWithoutHippocampusInput>
    create: XOR<EngramCreateWithoutHippocampusInput, EngramUncheckedCreateWithoutHippocampusInput>
    where?: EngramWhereInput
  }

  export type EngramUpdateToOneWithWhereWithoutHippocampusInput = {
    where?: EngramWhereInput
    data: XOR<EngramUpdateWithoutHippocampusInput, EngramUncheckedUpdateWithoutHippocampusInput>
  }

  export type EngramUpdateWithoutHippocampusInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    embedding?: EngramUpdateembeddingInput | number[]
    crebScore?: FloatFieldUpdateOperationsInput | number
    emotionScore?: FloatFieldUpdateOperationsInput | number
    importance?: FloatFieldUpdateOperationsInput | number
    rehearsalCount?: IntFieldUpdateOperationsInput | number
    consolidationState?: EnumConsolidationStateFieldUpdateOperationsInput | $Enums.ConsolidationState
    category?: EnumMemoryTypeFieldUpdateOperationsInput | $Enums.MemoryType
    keywords?: EngramUpdatekeywordsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutEngramsNestedInput
    entry?: EntryUpdateOneRequiredWithoutEngramsNestedInput
    synapseFrom?: SynapseUpdateManyWithoutFromEngramNestedInput
    synapseTo?: SynapseUpdateManyWithoutToEngramNestedInput
    cortex?: CortexStoreUpdateOneWithoutEngramNestedInput
  }

  export type EngramUncheckedUpdateWithoutHippocampusInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    embedding?: EngramUpdateembeddingInput | number[]
    crebScore?: FloatFieldUpdateOperationsInput | number
    emotionScore?: FloatFieldUpdateOperationsInput | number
    importance?: FloatFieldUpdateOperationsInput | number
    rehearsalCount?: IntFieldUpdateOperationsInput | number
    consolidationState?: EnumConsolidationStateFieldUpdateOperationsInput | $Enums.ConsolidationState
    category?: EnumMemoryTypeFieldUpdateOperationsInput | $Enums.MemoryType
    keywords?: EngramUpdatekeywordsInput | string[]
    entryId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    synapseFrom?: SynapseUncheckedUpdateManyWithoutFromEngramNestedInput
    synapseTo?: SynapseUncheckedUpdateManyWithoutToEngramNestedInput
    cortex?: CortexStoreUncheckedUpdateOneWithoutEngramNestedInput
  }

  export type UserCreateWithoutCortexStoreInput = {
    id?: string
    name: string
    email: string
    provider: $Enums.Provider
    providerId: string
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    entries?: EntryCreateNestedManyWithoutUserInput
    engrams?: EngramCreateNestedManyWithoutUserInput
    hippocampusStore?: HippocampusStoreCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCortexStoreInput = {
    id?: string
    name: string
    email: string
    provider: $Enums.Provider
    providerId: string
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    entries?: EntryUncheckedCreateNestedManyWithoutUserInput
    engrams?: EngramUncheckedCreateNestedManyWithoutUserInput
    hippocampusStore?: HippocampusStoreUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCortexStoreInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCortexStoreInput, UserUncheckedCreateWithoutCortexStoreInput>
  }

  export type EngramCreateWithoutCortexInput = {
    id?: string
    content: string
    embedding?: EngramCreateembeddingInput | number[]
    crebScore?: number
    emotionScore?: number
    importance?: number
    rehearsalCount?: number
    consolidationState?: $Enums.ConsolidationState
    category: $Enums.MemoryType
    keywords?: EngramCreatekeywordsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutEngramsInput
    entry: EntryCreateNestedOneWithoutEngramsInput
    synapseFrom?: SynapseCreateNestedManyWithoutFromEngramInput
    synapseTo?: SynapseCreateNestedManyWithoutToEngramInput
    hippocampus?: HippocampusStoreCreateNestedOneWithoutEngramInput
  }

  export type EngramUncheckedCreateWithoutCortexInput = {
    id?: string
    content: string
    embedding?: EngramCreateembeddingInput | number[]
    crebScore?: number
    emotionScore?: number
    importance?: number
    rehearsalCount?: number
    consolidationState?: $Enums.ConsolidationState
    category: $Enums.MemoryType
    keywords?: EngramCreatekeywordsInput | string[]
    entryId: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    synapseFrom?: SynapseUncheckedCreateNestedManyWithoutFromEngramInput
    synapseTo?: SynapseUncheckedCreateNestedManyWithoutToEngramInput
    hippocampus?: HippocampusStoreUncheckedCreateNestedOneWithoutEngramInput
  }

  export type EngramCreateOrConnectWithoutCortexInput = {
    where: EngramWhereUniqueInput
    create: XOR<EngramCreateWithoutCortexInput, EngramUncheckedCreateWithoutCortexInput>
  }

  export type UserUpsertWithoutCortexStoreInput = {
    update: XOR<UserUpdateWithoutCortexStoreInput, UserUncheckedUpdateWithoutCortexStoreInput>
    create: XOR<UserCreateWithoutCortexStoreInput, UserUncheckedCreateWithoutCortexStoreInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCortexStoreInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCortexStoreInput, UserUncheckedUpdateWithoutCortexStoreInput>
  }

  export type UserUpdateWithoutCortexStoreInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider
    providerId?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    entries?: EntryUpdateManyWithoutUserNestedInput
    engrams?: EngramUpdateManyWithoutUserNestedInput
    hippocampusStore?: HippocampusStoreUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCortexStoreInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider
    providerId?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    entries?: EntryUncheckedUpdateManyWithoutUserNestedInput
    engrams?: EngramUncheckedUpdateManyWithoutUserNestedInput
    hippocampusStore?: HippocampusStoreUncheckedUpdateManyWithoutUserNestedInput
  }

  export type EngramUpsertWithoutCortexInput = {
    update: XOR<EngramUpdateWithoutCortexInput, EngramUncheckedUpdateWithoutCortexInput>
    create: XOR<EngramCreateWithoutCortexInput, EngramUncheckedCreateWithoutCortexInput>
    where?: EngramWhereInput
  }

  export type EngramUpdateToOneWithWhereWithoutCortexInput = {
    where?: EngramWhereInput
    data: XOR<EngramUpdateWithoutCortexInput, EngramUncheckedUpdateWithoutCortexInput>
  }

  export type EngramUpdateWithoutCortexInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    embedding?: EngramUpdateembeddingInput | number[]
    crebScore?: FloatFieldUpdateOperationsInput | number
    emotionScore?: FloatFieldUpdateOperationsInput | number
    importance?: FloatFieldUpdateOperationsInput | number
    rehearsalCount?: IntFieldUpdateOperationsInput | number
    consolidationState?: EnumConsolidationStateFieldUpdateOperationsInput | $Enums.ConsolidationState
    category?: EnumMemoryTypeFieldUpdateOperationsInput | $Enums.MemoryType
    keywords?: EngramUpdatekeywordsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutEngramsNestedInput
    entry?: EntryUpdateOneRequiredWithoutEngramsNestedInput
    synapseFrom?: SynapseUpdateManyWithoutFromEngramNestedInput
    synapseTo?: SynapseUpdateManyWithoutToEngramNestedInput
    hippocampus?: HippocampusStoreUpdateOneWithoutEngramNestedInput
  }

  export type EngramUncheckedUpdateWithoutCortexInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    embedding?: EngramUpdateembeddingInput | number[]
    crebScore?: FloatFieldUpdateOperationsInput | number
    emotionScore?: FloatFieldUpdateOperationsInput | number
    importance?: FloatFieldUpdateOperationsInput | number
    rehearsalCount?: IntFieldUpdateOperationsInput | number
    consolidationState?: EnumConsolidationStateFieldUpdateOperationsInput | $Enums.ConsolidationState
    category?: EnumMemoryTypeFieldUpdateOperationsInput | $Enums.MemoryType
    keywords?: EngramUpdatekeywordsInput | string[]
    entryId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    synapseFrom?: SynapseUncheckedUpdateManyWithoutFromEngramNestedInput
    synapseTo?: SynapseUncheckedUpdateManyWithoutToEngramNestedInput
    hippocampus?: HippocampusStoreUncheckedUpdateOneWithoutEngramNestedInput
  }

  export type EntryCreateManyUserInput = {
    id?: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EngramCreateManyUserInput = {
    id?: string
    content: string
    embedding?: EngramCreateembeddingInput | number[]
    crebScore?: number
    emotionScore?: number
    importance?: number
    rehearsalCount?: number
    consolidationState?: $Enums.ConsolidationState
    category: $Enums.MemoryType
    keywords?: EngramCreatekeywordsInput | string[]
    entryId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HippocampusStoreCreateManyUserInput = {
    id?: string
    engramId: string
    rawData: JsonNullValueInput | InputJsonValue
    accessCount?: number
    lastAccessedAt?: Date | string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type CortexStoreCreateManyUserInput = {
    id?: string
    engramId: string
    compressedData: JsonNullValueInput | InputJsonValue
    generalization?: number
    integratedAt: Date | string
    createdAt?: Date | string
  }

  export type EntryUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    engrams?: EngramUpdateManyWithoutEntryNestedInput
  }

  export type EntryUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    engrams?: EngramUncheckedUpdateManyWithoutEntryNestedInput
  }

  export type EntryUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EngramUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    embedding?: EngramUpdateembeddingInput | number[]
    crebScore?: FloatFieldUpdateOperationsInput | number
    emotionScore?: FloatFieldUpdateOperationsInput | number
    importance?: FloatFieldUpdateOperationsInput | number
    rehearsalCount?: IntFieldUpdateOperationsInput | number
    consolidationState?: EnumConsolidationStateFieldUpdateOperationsInput | $Enums.ConsolidationState
    category?: EnumMemoryTypeFieldUpdateOperationsInput | $Enums.MemoryType
    keywords?: EngramUpdatekeywordsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    entry?: EntryUpdateOneRequiredWithoutEngramsNestedInput
    synapseFrom?: SynapseUpdateManyWithoutFromEngramNestedInput
    synapseTo?: SynapseUpdateManyWithoutToEngramNestedInput
    hippocampus?: HippocampusStoreUpdateOneWithoutEngramNestedInput
    cortex?: CortexStoreUpdateOneWithoutEngramNestedInput
  }

  export type EngramUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    embedding?: EngramUpdateembeddingInput | number[]
    crebScore?: FloatFieldUpdateOperationsInput | number
    emotionScore?: FloatFieldUpdateOperationsInput | number
    importance?: FloatFieldUpdateOperationsInput | number
    rehearsalCount?: IntFieldUpdateOperationsInput | number
    consolidationState?: EnumConsolidationStateFieldUpdateOperationsInput | $Enums.ConsolidationState
    category?: EnumMemoryTypeFieldUpdateOperationsInput | $Enums.MemoryType
    keywords?: EngramUpdatekeywordsInput | string[]
    entryId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    synapseFrom?: SynapseUncheckedUpdateManyWithoutFromEngramNestedInput
    synapseTo?: SynapseUncheckedUpdateManyWithoutToEngramNestedInput
    hippocampus?: HippocampusStoreUncheckedUpdateOneWithoutEngramNestedInput
    cortex?: CortexStoreUncheckedUpdateOneWithoutEngramNestedInput
  }

  export type EngramUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    embedding?: EngramUpdateembeddingInput | number[]
    crebScore?: FloatFieldUpdateOperationsInput | number
    emotionScore?: FloatFieldUpdateOperationsInput | number
    importance?: FloatFieldUpdateOperationsInput | number
    rehearsalCount?: IntFieldUpdateOperationsInput | number
    consolidationState?: EnumConsolidationStateFieldUpdateOperationsInput | $Enums.ConsolidationState
    category?: EnumMemoryTypeFieldUpdateOperationsInput | $Enums.MemoryType
    keywords?: EngramUpdatekeywordsInput | string[]
    entryId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HippocampusStoreUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    rawData?: JsonNullValueInput | InputJsonValue
    accessCount?: IntFieldUpdateOperationsInput | number
    lastAccessedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    engram?: EngramUpdateOneRequiredWithoutHippocampusNestedInput
  }

  export type HippocampusStoreUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    engramId?: StringFieldUpdateOperationsInput | string
    rawData?: JsonNullValueInput | InputJsonValue
    accessCount?: IntFieldUpdateOperationsInput | number
    lastAccessedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HippocampusStoreUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    engramId?: StringFieldUpdateOperationsInput | string
    rawData?: JsonNullValueInput | InputJsonValue
    accessCount?: IntFieldUpdateOperationsInput | number
    lastAccessedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CortexStoreUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    compressedData?: JsonNullValueInput | InputJsonValue
    generalization?: FloatFieldUpdateOperationsInput | number
    integratedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    engram?: EngramUpdateOneRequiredWithoutCortexNestedInput
  }

  export type CortexStoreUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    engramId?: StringFieldUpdateOperationsInput | string
    compressedData?: JsonNullValueInput | InputJsonValue
    generalization?: FloatFieldUpdateOperationsInput | number
    integratedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CortexStoreUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    engramId?: StringFieldUpdateOperationsInput | string
    compressedData?: JsonNullValueInput | InputJsonValue
    generalization?: FloatFieldUpdateOperationsInput | number
    integratedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EngramCreateManyEntryInput = {
    id?: string
    content: string
    embedding?: EngramCreateembeddingInput | number[]
    crebScore?: number
    emotionScore?: number
    importance?: number
    rehearsalCount?: number
    consolidationState?: $Enums.ConsolidationState
    category: $Enums.MemoryType
    keywords?: EngramCreatekeywordsInput | string[]
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EngramUpdateWithoutEntryInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    embedding?: EngramUpdateembeddingInput | number[]
    crebScore?: FloatFieldUpdateOperationsInput | number
    emotionScore?: FloatFieldUpdateOperationsInput | number
    importance?: FloatFieldUpdateOperationsInput | number
    rehearsalCount?: IntFieldUpdateOperationsInput | number
    consolidationState?: EnumConsolidationStateFieldUpdateOperationsInput | $Enums.ConsolidationState
    category?: EnumMemoryTypeFieldUpdateOperationsInput | $Enums.MemoryType
    keywords?: EngramUpdatekeywordsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutEngramsNestedInput
    synapseFrom?: SynapseUpdateManyWithoutFromEngramNestedInput
    synapseTo?: SynapseUpdateManyWithoutToEngramNestedInput
    hippocampus?: HippocampusStoreUpdateOneWithoutEngramNestedInput
    cortex?: CortexStoreUpdateOneWithoutEngramNestedInput
  }

  export type EngramUncheckedUpdateWithoutEntryInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    embedding?: EngramUpdateembeddingInput | number[]
    crebScore?: FloatFieldUpdateOperationsInput | number
    emotionScore?: FloatFieldUpdateOperationsInput | number
    importance?: FloatFieldUpdateOperationsInput | number
    rehearsalCount?: IntFieldUpdateOperationsInput | number
    consolidationState?: EnumConsolidationStateFieldUpdateOperationsInput | $Enums.ConsolidationState
    category?: EnumMemoryTypeFieldUpdateOperationsInput | $Enums.MemoryType
    keywords?: EngramUpdatekeywordsInput | string[]
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    synapseFrom?: SynapseUncheckedUpdateManyWithoutFromEngramNestedInput
    synapseTo?: SynapseUncheckedUpdateManyWithoutToEngramNestedInput
    hippocampus?: HippocampusStoreUncheckedUpdateOneWithoutEngramNestedInput
    cortex?: CortexStoreUncheckedUpdateOneWithoutEngramNestedInput
  }

  export type EngramUncheckedUpdateManyWithoutEntryInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    embedding?: EngramUpdateembeddingInput | number[]
    crebScore?: FloatFieldUpdateOperationsInput | number
    emotionScore?: FloatFieldUpdateOperationsInput | number
    importance?: FloatFieldUpdateOperationsInput | number
    rehearsalCount?: IntFieldUpdateOperationsInput | number
    consolidationState?: EnumConsolidationStateFieldUpdateOperationsInput | $Enums.ConsolidationState
    category?: EnumMemoryTypeFieldUpdateOperationsInput | $Enums.MemoryType
    keywords?: EngramUpdatekeywordsInput | string[]
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SynapseCreateManyFromEngramInput = {
    id?: string
    toEngramId: string
    strength?: number
    type?: $Enums.SynapseType
    createdAt?: Date | string
  }

  export type SynapseCreateManyToEngramInput = {
    id?: string
    fromEngramId: string
    strength?: number
    type?: $Enums.SynapseType
    createdAt?: Date | string
  }

  export type SynapseUpdateWithoutFromEngramInput = {
    id?: StringFieldUpdateOperationsInput | string
    strength?: FloatFieldUpdateOperationsInput | number
    type?: EnumSynapseTypeFieldUpdateOperationsInput | $Enums.SynapseType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    toEngram?: EngramUpdateOneRequiredWithoutSynapseToNestedInput
  }

  export type SynapseUncheckedUpdateWithoutFromEngramInput = {
    id?: StringFieldUpdateOperationsInput | string
    toEngramId?: StringFieldUpdateOperationsInput | string
    strength?: FloatFieldUpdateOperationsInput | number
    type?: EnumSynapseTypeFieldUpdateOperationsInput | $Enums.SynapseType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SynapseUncheckedUpdateManyWithoutFromEngramInput = {
    id?: StringFieldUpdateOperationsInput | string
    toEngramId?: StringFieldUpdateOperationsInput | string
    strength?: FloatFieldUpdateOperationsInput | number
    type?: EnumSynapseTypeFieldUpdateOperationsInput | $Enums.SynapseType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SynapseUpdateWithoutToEngramInput = {
    id?: StringFieldUpdateOperationsInput | string
    strength?: FloatFieldUpdateOperationsInput | number
    type?: EnumSynapseTypeFieldUpdateOperationsInput | $Enums.SynapseType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fromEngram?: EngramUpdateOneRequiredWithoutSynapseFromNestedInput
  }

  export type SynapseUncheckedUpdateWithoutToEngramInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromEngramId?: StringFieldUpdateOperationsInput | string
    strength?: FloatFieldUpdateOperationsInput | number
    type?: EnumSynapseTypeFieldUpdateOperationsInput | $Enums.SynapseType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SynapseUncheckedUpdateManyWithoutToEngramInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromEngramId?: StringFieldUpdateOperationsInput | string
    strength?: FloatFieldUpdateOperationsInput | number
    type?: EnumSynapseTypeFieldUpdateOperationsInput | $Enums.SynapseType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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