
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
 * Model Colaborador
 * 
 */
export type Colaborador = $Result.DefaultSelection<Prisma.$ColaboradorPayload>
/**
 * Model Demanda
 * 
 */
export type Demanda = $Result.DefaultSelection<Prisma.$DemandaPayload>
/**
 * Model Projeto
 * 
 */
export type Projeto = $Result.DefaultSelection<Prisma.$ProjetoPayload>
/**
 * Model Receita
 * 
 */
export type Receita = $Result.DefaultSelection<Prisma.$ReceitaPayload>
/**
 * Model Evento
 * 
 */
export type Evento = $Result.DefaultSelection<Prisma.$EventoPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Atendimento
 * 
 */
export type Atendimento = $Result.DefaultSelection<Prisma.$AtendimentoPayload>
/**
 * Model Logging
 * 
 */
export type Logging = $Result.DefaultSelection<Prisma.$LoggingPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const StatusDefault: {
  PENDENTE: 'PENDENTE',
  CONCLUIDO: 'CONCLUIDO'
};

export type StatusDefault = (typeof StatusDefault)[keyof typeof StatusDefault]


export const UserRole: {
  ADMIN: 'ADMIN',
  DEFAULT: 'DEFAULT'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const Prioridade: {
  ALTA: 'ALTA',
  MEDIA: 'MEDIA',
  BAIXA: 'BAIXA'
};

export type Prioridade = (typeof Prioridade)[keyof typeof Prioridade]


export const StatusEvento: {
  CANCELADO: 'CANCELADO',
  AGENDADO: 'AGENDADO',
  ACONTECENDO: 'ACONTECENDO',
  CONCLUIDO: 'CONCLUIDO'
};

export type StatusEvento = (typeof StatusEvento)[keyof typeof StatusEvento]


export const Zona: {
  NORTE: 'NORTE',
  SUL: 'SUL',
  LESTE: 'LESTE',
  OESTE: 'OESTE',
  CENTRO: 'CENTRO',
  RURAL: 'RURAL',
  SUDESTE: 'SUDESTE'
};

export type Zona = (typeof Zona)[keyof typeof Zona]


export const AtendimentoTipo: {
  PRESENCIAL: 'PRESENCIAL',
  WHATSAPP: 'WHATSAPP',
  EMAIL: 'EMAIL',
  TELEFONE: 'TELEFONE'
};

export type AtendimentoTipo = (typeof AtendimentoTipo)[keyof typeof AtendimentoTipo]


export const Despesa: {
  FIXA: 'FIXA',
  AVULSA: 'AVULSA'
};

export type Despesa = (typeof Despesa)[keyof typeof Despesa]

}

export type StatusDefault = $Enums.StatusDefault

export const StatusDefault: typeof $Enums.StatusDefault

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type Prioridade = $Enums.Prioridade

export const Prioridade: typeof $Enums.Prioridade

export type StatusEvento = $Enums.StatusEvento

export const StatusEvento: typeof $Enums.StatusEvento

export type Zona = $Enums.Zona

export const Zona: typeof $Enums.Zona

export type AtendimentoTipo = $Enums.AtendimentoTipo

export const AtendimentoTipo: typeof $Enums.AtendimentoTipo

export type Despesa = $Enums.Despesa

export const Despesa: typeof $Enums.Despesa

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Colaboradors
 * const colaboradors = await prisma.colaborador.findMany()
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
   * // Fetch zero or more Colaboradors
   * const colaboradors = await prisma.colaborador.findMany()
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
   * `prisma.colaborador`: Exposes CRUD operations for the **Colaborador** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Colaboradors
    * const colaboradors = await prisma.colaborador.findMany()
    * ```
    */
  get colaborador(): Prisma.ColaboradorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.demanda`: Exposes CRUD operations for the **Demanda** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Demandas
    * const demandas = await prisma.demanda.findMany()
    * ```
    */
  get demanda(): Prisma.DemandaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.projeto`: Exposes CRUD operations for the **Projeto** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projetos
    * const projetos = await prisma.projeto.findMany()
    * ```
    */
  get projeto(): Prisma.ProjetoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.receita`: Exposes CRUD operations for the **Receita** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Receitas
    * const receitas = await prisma.receita.findMany()
    * ```
    */
  get receita(): Prisma.ReceitaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.evento`: Exposes CRUD operations for the **Evento** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Eventos
    * const eventos = await prisma.evento.findMany()
    * ```
    */
  get evento(): Prisma.EventoDelegate<ExtArgs, ClientOptions>;

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
   * `prisma.atendimento`: Exposes CRUD operations for the **Atendimento** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Atendimentos
    * const atendimentos = await prisma.atendimento.findMany()
    * ```
    */
  get atendimento(): Prisma.AtendimentoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.logging`: Exposes CRUD operations for the **Logging** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Loggings
    * const loggings = await prisma.logging.findMany()
    * ```
    */
  get logging(): Prisma.LoggingDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
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
    Colaborador: 'Colaborador',
    Demanda: 'Demanda',
    Projeto: 'Projeto',
    Receita: 'Receita',
    Evento: 'Evento',
    User: 'User',
    Atendimento: 'Atendimento',
    Logging: 'Logging'
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
      modelProps: "colaborador" | "demanda" | "projeto" | "receita" | "evento" | "user" | "atendimento" | "logging"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Colaborador: {
        payload: Prisma.$ColaboradorPayload<ExtArgs>
        fields: Prisma.ColaboradorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ColaboradorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColaboradorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ColaboradorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColaboradorPayload>
          }
          findFirst: {
            args: Prisma.ColaboradorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColaboradorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ColaboradorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColaboradorPayload>
          }
          findMany: {
            args: Prisma.ColaboradorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColaboradorPayload>[]
          }
          create: {
            args: Prisma.ColaboradorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColaboradorPayload>
          }
          createMany: {
            args: Prisma.ColaboradorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ColaboradorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColaboradorPayload>[]
          }
          delete: {
            args: Prisma.ColaboradorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColaboradorPayload>
          }
          update: {
            args: Prisma.ColaboradorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColaboradorPayload>
          }
          deleteMany: {
            args: Prisma.ColaboradorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ColaboradorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ColaboradorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColaboradorPayload>[]
          }
          upsert: {
            args: Prisma.ColaboradorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColaboradorPayload>
          }
          aggregate: {
            args: Prisma.ColaboradorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateColaborador>
          }
          groupBy: {
            args: Prisma.ColaboradorGroupByArgs<ExtArgs>
            result: $Utils.Optional<ColaboradorGroupByOutputType>[]
          }
          count: {
            args: Prisma.ColaboradorCountArgs<ExtArgs>
            result: $Utils.Optional<ColaboradorCountAggregateOutputType> | number
          }
        }
      }
      Demanda: {
        payload: Prisma.$DemandaPayload<ExtArgs>
        fields: Prisma.DemandaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DemandaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DemandaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DemandaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DemandaPayload>
          }
          findFirst: {
            args: Prisma.DemandaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DemandaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DemandaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DemandaPayload>
          }
          findMany: {
            args: Prisma.DemandaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DemandaPayload>[]
          }
          create: {
            args: Prisma.DemandaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DemandaPayload>
          }
          createMany: {
            args: Prisma.DemandaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DemandaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DemandaPayload>[]
          }
          delete: {
            args: Prisma.DemandaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DemandaPayload>
          }
          update: {
            args: Prisma.DemandaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DemandaPayload>
          }
          deleteMany: {
            args: Prisma.DemandaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DemandaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DemandaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DemandaPayload>[]
          }
          upsert: {
            args: Prisma.DemandaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DemandaPayload>
          }
          aggregate: {
            args: Prisma.DemandaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDemanda>
          }
          groupBy: {
            args: Prisma.DemandaGroupByArgs<ExtArgs>
            result: $Utils.Optional<DemandaGroupByOutputType>[]
          }
          count: {
            args: Prisma.DemandaCountArgs<ExtArgs>
            result: $Utils.Optional<DemandaCountAggregateOutputType> | number
          }
        }
      }
      Projeto: {
        payload: Prisma.$ProjetoPayload<ExtArgs>
        fields: Prisma.ProjetoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjetoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjetoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjetoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjetoPayload>
          }
          findFirst: {
            args: Prisma.ProjetoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjetoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjetoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjetoPayload>
          }
          findMany: {
            args: Prisma.ProjetoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjetoPayload>[]
          }
          create: {
            args: Prisma.ProjetoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjetoPayload>
          }
          createMany: {
            args: Prisma.ProjetoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjetoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjetoPayload>[]
          }
          delete: {
            args: Prisma.ProjetoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjetoPayload>
          }
          update: {
            args: Prisma.ProjetoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjetoPayload>
          }
          deleteMany: {
            args: Prisma.ProjetoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjetoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProjetoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjetoPayload>[]
          }
          upsert: {
            args: Prisma.ProjetoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjetoPayload>
          }
          aggregate: {
            args: Prisma.ProjetoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProjeto>
          }
          groupBy: {
            args: Prisma.ProjetoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjetoGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjetoCountArgs<ExtArgs>
            result: $Utils.Optional<ProjetoCountAggregateOutputType> | number
          }
        }
      }
      Receita: {
        payload: Prisma.$ReceitaPayload<ExtArgs>
        fields: Prisma.ReceitaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReceitaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceitaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReceitaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceitaPayload>
          }
          findFirst: {
            args: Prisma.ReceitaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceitaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReceitaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceitaPayload>
          }
          findMany: {
            args: Prisma.ReceitaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceitaPayload>[]
          }
          create: {
            args: Prisma.ReceitaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceitaPayload>
          }
          createMany: {
            args: Prisma.ReceitaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReceitaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceitaPayload>[]
          }
          delete: {
            args: Prisma.ReceitaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceitaPayload>
          }
          update: {
            args: Prisma.ReceitaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceitaPayload>
          }
          deleteMany: {
            args: Prisma.ReceitaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReceitaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReceitaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceitaPayload>[]
          }
          upsert: {
            args: Prisma.ReceitaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceitaPayload>
          }
          aggregate: {
            args: Prisma.ReceitaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReceita>
          }
          groupBy: {
            args: Prisma.ReceitaGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReceitaGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReceitaCountArgs<ExtArgs>
            result: $Utils.Optional<ReceitaCountAggregateOutputType> | number
          }
        }
      }
      Evento: {
        payload: Prisma.$EventoPayload<ExtArgs>
        fields: Prisma.EventoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventoPayload>
          }
          findFirst: {
            args: Prisma.EventoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventoPayload>
          }
          findMany: {
            args: Prisma.EventoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventoPayload>[]
          }
          create: {
            args: Prisma.EventoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventoPayload>
          }
          createMany: {
            args: Prisma.EventoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EventoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventoPayload>[]
          }
          delete: {
            args: Prisma.EventoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventoPayload>
          }
          update: {
            args: Prisma.EventoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventoPayload>
          }
          deleteMany: {
            args: Prisma.EventoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EventoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventoPayload>[]
          }
          upsert: {
            args: Prisma.EventoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventoPayload>
          }
          aggregate: {
            args: Prisma.EventoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEvento>
          }
          groupBy: {
            args: Prisma.EventoGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventoGroupByOutputType>[]
          }
          count: {
            args: Prisma.EventoCountArgs<ExtArgs>
            result: $Utils.Optional<EventoCountAggregateOutputType> | number
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
      Atendimento: {
        payload: Prisma.$AtendimentoPayload<ExtArgs>
        fields: Prisma.AtendimentoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AtendimentoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtendimentoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AtendimentoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtendimentoPayload>
          }
          findFirst: {
            args: Prisma.AtendimentoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtendimentoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AtendimentoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtendimentoPayload>
          }
          findMany: {
            args: Prisma.AtendimentoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtendimentoPayload>[]
          }
          create: {
            args: Prisma.AtendimentoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtendimentoPayload>
          }
          createMany: {
            args: Prisma.AtendimentoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AtendimentoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtendimentoPayload>[]
          }
          delete: {
            args: Prisma.AtendimentoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtendimentoPayload>
          }
          update: {
            args: Prisma.AtendimentoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtendimentoPayload>
          }
          deleteMany: {
            args: Prisma.AtendimentoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AtendimentoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AtendimentoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtendimentoPayload>[]
          }
          upsert: {
            args: Prisma.AtendimentoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtendimentoPayload>
          }
          aggregate: {
            args: Prisma.AtendimentoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAtendimento>
          }
          groupBy: {
            args: Prisma.AtendimentoGroupByArgs<ExtArgs>
            result: $Utils.Optional<AtendimentoGroupByOutputType>[]
          }
          count: {
            args: Prisma.AtendimentoCountArgs<ExtArgs>
            result: $Utils.Optional<AtendimentoCountAggregateOutputType> | number
          }
        }
      }
      Logging: {
        payload: Prisma.$LoggingPayload<ExtArgs>
        fields: Prisma.LoggingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LoggingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoggingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LoggingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoggingPayload>
          }
          findFirst: {
            args: Prisma.LoggingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoggingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LoggingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoggingPayload>
          }
          findMany: {
            args: Prisma.LoggingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoggingPayload>[]
          }
          create: {
            args: Prisma.LoggingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoggingPayload>
          }
          createMany: {
            args: Prisma.LoggingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LoggingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoggingPayload>[]
          }
          delete: {
            args: Prisma.LoggingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoggingPayload>
          }
          update: {
            args: Prisma.LoggingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoggingPayload>
          }
          deleteMany: {
            args: Prisma.LoggingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LoggingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LoggingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoggingPayload>[]
          }
          upsert: {
            args: Prisma.LoggingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoggingPayload>
          }
          aggregate: {
            args: Prisma.LoggingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLogging>
          }
          groupBy: {
            args: Prisma.LoggingGroupByArgs<ExtArgs>
            result: $Utils.Optional<LoggingGroupByOutputType>[]
          }
          count: {
            args: Prisma.LoggingCountArgs<ExtArgs>
            result: $Utils.Optional<LoggingCountAggregateOutputType> | number
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
    colaborador?: ColaboradorOmit
    demanda?: DemandaOmit
    projeto?: ProjetoOmit
    receita?: ReceitaOmit
    evento?: EventoOmit
    user?: UserOmit
    atendimento?: AtendimentoOmit
    logging?: LoggingOmit
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
   * Count Type ColaboradorCountOutputType
   */

  export type ColaboradorCountOutputType = {
    colaboradores: number
    eventos: number
    atendimentos: number
    projetos: number
  }

  export type ColaboradorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    colaboradores?: boolean | ColaboradorCountOutputTypeCountColaboradoresArgs
    eventos?: boolean | ColaboradorCountOutputTypeCountEventosArgs
    atendimentos?: boolean | ColaboradorCountOutputTypeCountAtendimentosArgs
    projetos?: boolean | ColaboradorCountOutputTypeCountProjetosArgs
  }

  // Custom InputTypes
  /**
   * ColaboradorCountOutputType without action
   */
  export type ColaboradorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ColaboradorCountOutputType
     */
    select?: ColaboradorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ColaboradorCountOutputType without action
   */
  export type ColaboradorCountOutputTypeCountColaboradoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ColaboradorWhereInput
  }

  /**
   * ColaboradorCountOutputType without action
   */
  export type ColaboradorCountOutputTypeCountEventosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventoWhereInput
  }

  /**
   * ColaboradorCountOutputType without action
   */
  export type ColaboradorCountOutputTypeCountAtendimentosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AtendimentoWhereInput
  }

  /**
   * ColaboradorCountOutputType without action
   */
  export type ColaboradorCountOutputTypeCountProjetosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjetoWhereInput
  }


  /**
   * Count Type DemandaCountOutputType
   */

  export type DemandaCountOutputType = {
    atendimentos: number
  }

  export type DemandaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    atendimentos?: boolean | DemandaCountOutputTypeCountAtendimentosArgs
  }

  // Custom InputTypes
  /**
   * DemandaCountOutputType without action
   */
  export type DemandaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DemandaCountOutputType
     */
    select?: DemandaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DemandaCountOutputType without action
   */
  export type DemandaCountOutputTypeCountAtendimentosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AtendimentoWhereInput
  }


  /**
   * Count Type ProjetoCountOutputType
   */

  export type ProjetoCountOutputType = {
    atendimentos: number
  }

  export type ProjetoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    atendimentos?: boolean | ProjetoCountOutputTypeCountAtendimentosArgs
  }

  // Custom InputTypes
  /**
   * ProjetoCountOutputType without action
   */
  export type ProjetoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjetoCountOutputType
     */
    select?: ProjetoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProjetoCountOutputType without action
   */
  export type ProjetoCountOutputTypeCountAtendimentosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AtendimentoWhereInput
  }


  /**
   * Count Type EventoCountOutputType
   */

  export type EventoCountOutputType = {
    participantes: number
  }

  export type EventoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    participantes?: boolean | EventoCountOutputTypeCountParticipantesArgs
  }

  // Custom InputTypes
  /**
   * EventoCountOutputType without action
   */
  export type EventoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventoCountOutputType
     */
    select?: EventoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EventoCountOutputType without action
   */
  export type EventoCountOutputTypeCountParticipantesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ColaboradorWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    atendimentos: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    atendimentos?: boolean | UserCountOutputTypeCountAtendimentosArgs
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
  export type UserCountOutputTypeCountAtendimentosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AtendimentoWhereInput
  }


  /**
   * Count Type AtendimentoCountOutputType
   */

  export type AtendimentoCountOutputType = {
    projeto: number
    demanda: number
  }

  export type AtendimentoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projeto?: boolean | AtendimentoCountOutputTypeCountProjetoArgs
    demanda?: boolean | AtendimentoCountOutputTypeCountDemandaArgs
  }

  // Custom InputTypes
  /**
   * AtendimentoCountOutputType without action
   */
  export type AtendimentoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AtendimentoCountOutputType
     */
    select?: AtendimentoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AtendimentoCountOutputType without action
   */
  export type AtendimentoCountOutputTypeCountProjetoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjetoWhereInput
  }

  /**
   * AtendimentoCountOutputType without action
   */
  export type AtendimentoCountOutputTypeCountDemandaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DemandaWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Colaborador
   */

  export type AggregateColaborador = {
    _count: ColaboradorCountAggregateOutputType | null
    _min: ColaboradorMinAggregateOutputType | null
    _max: ColaboradorMaxAggregateOutputType | null
  }

  export type ColaboradorMinAggregateOutputType = {
    id: string | null
    nome: string | null
    cpf: string | null
    email: string | null
    telefone: string | null
    dataNascimento: Date | null
    cep: string | null
    zona: $Enums.Zona | null
    cidade: string | null
    bairro: string | null
    logradouro: string | null
    categoria: string | null
    observacao: string | null
    curriculo: string | null
    isLideranca: boolean | null
    liderancaId: string | null
    criadosEm: Date | null
    atualizadosEm: Date | null
  }

  export type ColaboradorMaxAggregateOutputType = {
    id: string | null
    nome: string | null
    cpf: string | null
    email: string | null
    telefone: string | null
    dataNascimento: Date | null
    cep: string | null
    zona: $Enums.Zona | null
    cidade: string | null
    bairro: string | null
    logradouro: string | null
    categoria: string | null
    observacao: string | null
    curriculo: string | null
    isLideranca: boolean | null
    liderancaId: string | null
    criadosEm: Date | null
    atualizadosEm: Date | null
  }

  export type ColaboradorCountAggregateOutputType = {
    id: number
    nome: number
    cpf: number
    email: number
    telefone: number
    dataNascimento: number
    cep: number
    zona: number
    cidade: number
    bairro: number
    logradouro: number
    categoria: number
    observacao: number
    curriculo: number
    isLideranca: number
    liderancaId: number
    criadosEm: number
    atualizadosEm: number
    _all: number
  }


  export type ColaboradorMinAggregateInputType = {
    id?: true
    nome?: true
    cpf?: true
    email?: true
    telefone?: true
    dataNascimento?: true
    cep?: true
    zona?: true
    cidade?: true
    bairro?: true
    logradouro?: true
    categoria?: true
    observacao?: true
    curriculo?: true
    isLideranca?: true
    liderancaId?: true
    criadosEm?: true
    atualizadosEm?: true
  }

  export type ColaboradorMaxAggregateInputType = {
    id?: true
    nome?: true
    cpf?: true
    email?: true
    telefone?: true
    dataNascimento?: true
    cep?: true
    zona?: true
    cidade?: true
    bairro?: true
    logradouro?: true
    categoria?: true
    observacao?: true
    curriculo?: true
    isLideranca?: true
    liderancaId?: true
    criadosEm?: true
    atualizadosEm?: true
  }

  export type ColaboradorCountAggregateInputType = {
    id?: true
    nome?: true
    cpf?: true
    email?: true
    telefone?: true
    dataNascimento?: true
    cep?: true
    zona?: true
    cidade?: true
    bairro?: true
    logradouro?: true
    categoria?: true
    observacao?: true
    curriculo?: true
    isLideranca?: true
    liderancaId?: true
    criadosEm?: true
    atualizadosEm?: true
    _all?: true
  }

  export type ColaboradorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Colaborador to aggregate.
     */
    where?: ColaboradorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Colaboradors to fetch.
     */
    orderBy?: ColaboradorOrderByWithRelationInput | ColaboradorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ColaboradorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Colaboradors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Colaboradors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Colaboradors
    **/
    _count?: true | ColaboradorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ColaboradorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ColaboradorMaxAggregateInputType
  }

  export type GetColaboradorAggregateType<T extends ColaboradorAggregateArgs> = {
        [P in keyof T & keyof AggregateColaborador]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateColaborador[P]>
      : GetScalarType<T[P], AggregateColaborador[P]>
  }




  export type ColaboradorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ColaboradorWhereInput
    orderBy?: ColaboradorOrderByWithAggregationInput | ColaboradorOrderByWithAggregationInput[]
    by: ColaboradorScalarFieldEnum[] | ColaboradorScalarFieldEnum
    having?: ColaboradorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ColaboradorCountAggregateInputType | true
    _min?: ColaboradorMinAggregateInputType
    _max?: ColaboradorMaxAggregateInputType
  }

  export type ColaboradorGroupByOutputType = {
    id: string
    nome: string
    cpf: string | null
    email: string | null
    telefone: string | null
    dataNascimento: Date | null
    cep: string | null
    zona: $Enums.Zona | null
    cidade: string | null
    bairro: string | null
    logradouro: string | null
    categoria: string | null
    observacao: string | null
    curriculo: string | null
    isLideranca: boolean
    liderancaId: string | null
    criadosEm: Date
    atualizadosEm: Date
    _count: ColaboradorCountAggregateOutputType | null
    _min: ColaboradorMinAggregateOutputType | null
    _max: ColaboradorMaxAggregateOutputType | null
  }

  type GetColaboradorGroupByPayload<T extends ColaboradorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ColaboradorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ColaboradorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ColaboradorGroupByOutputType[P]>
            : GetScalarType<T[P], ColaboradorGroupByOutputType[P]>
        }
      >
    >


  export type ColaboradorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    cpf?: boolean
    email?: boolean
    telefone?: boolean
    dataNascimento?: boolean
    cep?: boolean
    zona?: boolean
    cidade?: boolean
    bairro?: boolean
    logradouro?: boolean
    categoria?: boolean
    observacao?: boolean
    curriculo?: boolean
    isLideranca?: boolean
    liderancaId?: boolean
    criadosEm?: boolean
    atualizadosEm?: boolean
    lideranca?: boolean | Colaborador$liderancaArgs<ExtArgs>
    colaboradores?: boolean | Colaborador$colaboradoresArgs<ExtArgs>
    eventos?: boolean | Colaborador$eventosArgs<ExtArgs>
    atendimentos?: boolean | Colaborador$atendimentosArgs<ExtArgs>
    projetos?: boolean | Colaborador$projetosArgs<ExtArgs>
    _count?: boolean | ColaboradorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["colaborador"]>

  export type ColaboradorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    cpf?: boolean
    email?: boolean
    telefone?: boolean
    dataNascimento?: boolean
    cep?: boolean
    zona?: boolean
    cidade?: boolean
    bairro?: boolean
    logradouro?: boolean
    categoria?: boolean
    observacao?: boolean
    curriculo?: boolean
    isLideranca?: boolean
    liderancaId?: boolean
    criadosEm?: boolean
    atualizadosEm?: boolean
    lideranca?: boolean | Colaborador$liderancaArgs<ExtArgs>
  }, ExtArgs["result"]["colaborador"]>

  export type ColaboradorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    cpf?: boolean
    email?: boolean
    telefone?: boolean
    dataNascimento?: boolean
    cep?: boolean
    zona?: boolean
    cidade?: boolean
    bairro?: boolean
    logradouro?: boolean
    categoria?: boolean
    observacao?: boolean
    curriculo?: boolean
    isLideranca?: boolean
    liderancaId?: boolean
    criadosEm?: boolean
    atualizadosEm?: boolean
    lideranca?: boolean | Colaborador$liderancaArgs<ExtArgs>
  }, ExtArgs["result"]["colaborador"]>

  export type ColaboradorSelectScalar = {
    id?: boolean
    nome?: boolean
    cpf?: boolean
    email?: boolean
    telefone?: boolean
    dataNascimento?: boolean
    cep?: boolean
    zona?: boolean
    cidade?: boolean
    bairro?: boolean
    logradouro?: boolean
    categoria?: boolean
    observacao?: boolean
    curriculo?: boolean
    isLideranca?: boolean
    liderancaId?: boolean
    criadosEm?: boolean
    atualizadosEm?: boolean
  }

  export type ColaboradorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "cpf" | "email" | "telefone" | "dataNascimento" | "cep" | "zona" | "cidade" | "bairro" | "logradouro" | "categoria" | "observacao" | "curriculo" | "isLideranca" | "liderancaId" | "criadosEm" | "atualizadosEm", ExtArgs["result"]["colaborador"]>
  export type ColaboradorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lideranca?: boolean | Colaborador$liderancaArgs<ExtArgs>
    colaboradores?: boolean | Colaborador$colaboradoresArgs<ExtArgs>
    eventos?: boolean | Colaborador$eventosArgs<ExtArgs>
    atendimentos?: boolean | Colaborador$atendimentosArgs<ExtArgs>
    projetos?: boolean | Colaborador$projetosArgs<ExtArgs>
    _count?: boolean | ColaboradorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ColaboradorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lideranca?: boolean | Colaborador$liderancaArgs<ExtArgs>
  }
  export type ColaboradorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lideranca?: boolean | Colaborador$liderancaArgs<ExtArgs>
  }

  export type $ColaboradorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Colaborador"
    objects: {
      lideranca: Prisma.$ColaboradorPayload<ExtArgs> | null
      colaboradores: Prisma.$ColaboradorPayload<ExtArgs>[]
      eventos: Prisma.$EventoPayload<ExtArgs>[]
      atendimentos: Prisma.$AtendimentoPayload<ExtArgs>[]
      projetos: Prisma.$ProjetoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nome: string
      cpf: string | null
      email: string | null
      telefone: string | null
      dataNascimento: Date | null
      cep: string | null
      zona: $Enums.Zona | null
      cidade: string | null
      bairro: string | null
      logradouro: string | null
      categoria: string | null
      observacao: string | null
      curriculo: string | null
      isLideranca: boolean
      liderancaId: string | null
      criadosEm: Date
      atualizadosEm: Date
    }, ExtArgs["result"]["colaborador"]>
    composites: {}
  }

  type ColaboradorGetPayload<S extends boolean | null | undefined | ColaboradorDefaultArgs> = $Result.GetResult<Prisma.$ColaboradorPayload, S>

  type ColaboradorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ColaboradorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ColaboradorCountAggregateInputType | true
    }

  export interface ColaboradorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Colaborador'], meta: { name: 'Colaborador' } }
    /**
     * Find zero or one Colaborador that matches the filter.
     * @param {ColaboradorFindUniqueArgs} args - Arguments to find a Colaborador
     * @example
     * // Get one Colaborador
     * const colaborador = await prisma.colaborador.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ColaboradorFindUniqueArgs>(args: SelectSubset<T, ColaboradorFindUniqueArgs<ExtArgs>>): Prisma__ColaboradorClient<$Result.GetResult<Prisma.$ColaboradorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Colaborador that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ColaboradorFindUniqueOrThrowArgs} args - Arguments to find a Colaborador
     * @example
     * // Get one Colaborador
     * const colaborador = await prisma.colaborador.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ColaboradorFindUniqueOrThrowArgs>(args: SelectSubset<T, ColaboradorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ColaboradorClient<$Result.GetResult<Prisma.$ColaboradorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Colaborador that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColaboradorFindFirstArgs} args - Arguments to find a Colaborador
     * @example
     * // Get one Colaborador
     * const colaborador = await prisma.colaborador.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ColaboradorFindFirstArgs>(args?: SelectSubset<T, ColaboradorFindFirstArgs<ExtArgs>>): Prisma__ColaboradorClient<$Result.GetResult<Prisma.$ColaboradorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Colaborador that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColaboradorFindFirstOrThrowArgs} args - Arguments to find a Colaborador
     * @example
     * // Get one Colaborador
     * const colaborador = await prisma.colaborador.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ColaboradorFindFirstOrThrowArgs>(args?: SelectSubset<T, ColaboradorFindFirstOrThrowArgs<ExtArgs>>): Prisma__ColaboradorClient<$Result.GetResult<Prisma.$ColaboradorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Colaboradors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColaboradorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Colaboradors
     * const colaboradors = await prisma.colaborador.findMany()
     * 
     * // Get first 10 Colaboradors
     * const colaboradors = await prisma.colaborador.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const colaboradorWithIdOnly = await prisma.colaborador.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ColaboradorFindManyArgs>(args?: SelectSubset<T, ColaboradorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ColaboradorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Colaborador.
     * @param {ColaboradorCreateArgs} args - Arguments to create a Colaborador.
     * @example
     * // Create one Colaborador
     * const Colaborador = await prisma.colaborador.create({
     *   data: {
     *     // ... data to create a Colaborador
     *   }
     * })
     * 
     */
    create<T extends ColaboradorCreateArgs>(args: SelectSubset<T, ColaboradorCreateArgs<ExtArgs>>): Prisma__ColaboradorClient<$Result.GetResult<Prisma.$ColaboradorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Colaboradors.
     * @param {ColaboradorCreateManyArgs} args - Arguments to create many Colaboradors.
     * @example
     * // Create many Colaboradors
     * const colaborador = await prisma.colaborador.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ColaboradorCreateManyArgs>(args?: SelectSubset<T, ColaboradorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Colaboradors and returns the data saved in the database.
     * @param {ColaboradorCreateManyAndReturnArgs} args - Arguments to create many Colaboradors.
     * @example
     * // Create many Colaboradors
     * const colaborador = await prisma.colaborador.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Colaboradors and only return the `id`
     * const colaboradorWithIdOnly = await prisma.colaborador.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ColaboradorCreateManyAndReturnArgs>(args?: SelectSubset<T, ColaboradorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ColaboradorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Colaborador.
     * @param {ColaboradorDeleteArgs} args - Arguments to delete one Colaborador.
     * @example
     * // Delete one Colaborador
     * const Colaborador = await prisma.colaborador.delete({
     *   where: {
     *     // ... filter to delete one Colaborador
     *   }
     * })
     * 
     */
    delete<T extends ColaboradorDeleteArgs>(args: SelectSubset<T, ColaboradorDeleteArgs<ExtArgs>>): Prisma__ColaboradorClient<$Result.GetResult<Prisma.$ColaboradorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Colaborador.
     * @param {ColaboradorUpdateArgs} args - Arguments to update one Colaborador.
     * @example
     * // Update one Colaborador
     * const colaborador = await prisma.colaborador.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ColaboradorUpdateArgs>(args: SelectSubset<T, ColaboradorUpdateArgs<ExtArgs>>): Prisma__ColaboradorClient<$Result.GetResult<Prisma.$ColaboradorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Colaboradors.
     * @param {ColaboradorDeleteManyArgs} args - Arguments to filter Colaboradors to delete.
     * @example
     * // Delete a few Colaboradors
     * const { count } = await prisma.colaborador.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ColaboradorDeleteManyArgs>(args?: SelectSubset<T, ColaboradorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Colaboradors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColaboradorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Colaboradors
     * const colaborador = await prisma.colaborador.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ColaboradorUpdateManyArgs>(args: SelectSubset<T, ColaboradorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Colaboradors and returns the data updated in the database.
     * @param {ColaboradorUpdateManyAndReturnArgs} args - Arguments to update many Colaboradors.
     * @example
     * // Update many Colaboradors
     * const colaborador = await prisma.colaborador.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Colaboradors and only return the `id`
     * const colaboradorWithIdOnly = await prisma.colaborador.updateManyAndReturn({
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
    updateManyAndReturn<T extends ColaboradorUpdateManyAndReturnArgs>(args: SelectSubset<T, ColaboradorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ColaboradorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Colaborador.
     * @param {ColaboradorUpsertArgs} args - Arguments to update or create a Colaborador.
     * @example
     * // Update or create a Colaborador
     * const colaborador = await prisma.colaborador.upsert({
     *   create: {
     *     // ... data to create a Colaborador
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Colaborador we want to update
     *   }
     * })
     */
    upsert<T extends ColaboradorUpsertArgs>(args: SelectSubset<T, ColaboradorUpsertArgs<ExtArgs>>): Prisma__ColaboradorClient<$Result.GetResult<Prisma.$ColaboradorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Colaboradors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColaboradorCountArgs} args - Arguments to filter Colaboradors to count.
     * @example
     * // Count the number of Colaboradors
     * const count = await prisma.colaborador.count({
     *   where: {
     *     // ... the filter for the Colaboradors we want to count
     *   }
     * })
    **/
    count<T extends ColaboradorCountArgs>(
      args?: Subset<T, ColaboradorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ColaboradorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Colaborador.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColaboradorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ColaboradorAggregateArgs>(args: Subset<T, ColaboradorAggregateArgs>): Prisma.PrismaPromise<GetColaboradorAggregateType<T>>

    /**
     * Group by Colaborador.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColaboradorGroupByArgs} args - Group by arguments.
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
      T extends ColaboradorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ColaboradorGroupByArgs['orderBy'] }
        : { orderBy?: ColaboradorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ColaboradorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetColaboradorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Colaborador model
   */
  readonly fields: ColaboradorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Colaborador.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ColaboradorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    lideranca<T extends Colaborador$liderancaArgs<ExtArgs> = {}>(args?: Subset<T, Colaborador$liderancaArgs<ExtArgs>>): Prisma__ColaboradorClient<$Result.GetResult<Prisma.$ColaboradorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    colaboradores<T extends Colaborador$colaboradoresArgs<ExtArgs> = {}>(args?: Subset<T, Colaborador$colaboradoresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ColaboradorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    eventos<T extends Colaborador$eventosArgs<ExtArgs> = {}>(args?: Subset<T, Colaborador$eventosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    atendimentos<T extends Colaborador$atendimentosArgs<ExtArgs> = {}>(args?: Subset<T, Colaborador$atendimentosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AtendimentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    projetos<T extends Colaborador$projetosArgs<ExtArgs> = {}>(args?: Subset<T, Colaborador$projetosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjetoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Colaborador model
   */
  interface ColaboradorFieldRefs {
    readonly id: FieldRef<"Colaborador", 'String'>
    readonly nome: FieldRef<"Colaborador", 'String'>
    readonly cpf: FieldRef<"Colaborador", 'String'>
    readonly email: FieldRef<"Colaborador", 'String'>
    readonly telefone: FieldRef<"Colaborador", 'String'>
    readonly dataNascimento: FieldRef<"Colaborador", 'DateTime'>
    readonly cep: FieldRef<"Colaborador", 'String'>
    readonly zona: FieldRef<"Colaborador", 'Zona'>
    readonly cidade: FieldRef<"Colaborador", 'String'>
    readonly bairro: FieldRef<"Colaborador", 'String'>
    readonly logradouro: FieldRef<"Colaborador", 'String'>
    readonly categoria: FieldRef<"Colaborador", 'String'>
    readonly observacao: FieldRef<"Colaborador", 'String'>
    readonly curriculo: FieldRef<"Colaborador", 'String'>
    readonly isLideranca: FieldRef<"Colaborador", 'Boolean'>
    readonly liderancaId: FieldRef<"Colaborador", 'String'>
    readonly criadosEm: FieldRef<"Colaborador", 'DateTime'>
    readonly atualizadosEm: FieldRef<"Colaborador", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Colaborador findUnique
   */
  export type ColaboradorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Colaborador
     */
    select?: ColaboradorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Colaborador
     */
    omit?: ColaboradorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColaboradorInclude<ExtArgs> | null
    /**
     * Filter, which Colaborador to fetch.
     */
    where: ColaboradorWhereUniqueInput
  }

  /**
   * Colaborador findUniqueOrThrow
   */
  export type ColaboradorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Colaborador
     */
    select?: ColaboradorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Colaborador
     */
    omit?: ColaboradorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColaboradorInclude<ExtArgs> | null
    /**
     * Filter, which Colaborador to fetch.
     */
    where: ColaboradorWhereUniqueInput
  }

  /**
   * Colaborador findFirst
   */
  export type ColaboradorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Colaborador
     */
    select?: ColaboradorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Colaborador
     */
    omit?: ColaboradorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColaboradorInclude<ExtArgs> | null
    /**
     * Filter, which Colaborador to fetch.
     */
    where?: ColaboradorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Colaboradors to fetch.
     */
    orderBy?: ColaboradorOrderByWithRelationInput | ColaboradorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Colaboradors.
     */
    cursor?: ColaboradorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Colaboradors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Colaboradors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Colaboradors.
     */
    distinct?: ColaboradorScalarFieldEnum | ColaboradorScalarFieldEnum[]
  }

  /**
   * Colaborador findFirstOrThrow
   */
  export type ColaboradorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Colaborador
     */
    select?: ColaboradorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Colaborador
     */
    omit?: ColaboradorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColaboradorInclude<ExtArgs> | null
    /**
     * Filter, which Colaborador to fetch.
     */
    where?: ColaboradorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Colaboradors to fetch.
     */
    orderBy?: ColaboradorOrderByWithRelationInput | ColaboradorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Colaboradors.
     */
    cursor?: ColaboradorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Colaboradors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Colaboradors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Colaboradors.
     */
    distinct?: ColaboradorScalarFieldEnum | ColaboradorScalarFieldEnum[]
  }

  /**
   * Colaborador findMany
   */
  export type ColaboradorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Colaborador
     */
    select?: ColaboradorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Colaborador
     */
    omit?: ColaboradorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColaboradorInclude<ExtArgs> | null
    /**
     * Filter, which Colaboradors to fetch.
     */
    where?: ColaboradorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Colaboradors to fetch.
     */
    orderBy?: ColaboradorOrderByWithRelationInput | ColaboradorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Colaboradors.
     */
    cursor?: ColaboradorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Colaboradors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Colaboradors.
     */
    skip?: number
    distinct?: ColaboradorScalarFieldEnum | ColaboradorScalarFieldEnum[]
  }

  /**
   * Colaborador create
   */
  export type ColaboradorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Colaborador
     */
    select?: ColaboradorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Colaborador
     */
    omit?: ColaboradorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColaboradorInclude<ExtArgs> | null
    /**
     * The data needed to create a Colaborador.
     */
    data: XOR<ColaboradorCreateInput, ColaboradorUncheckedCreateInput>
  }

  /**
   * Colaborador createMany
   */
  export type ColaboradorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Colaboradors.
     */
    data: ColaboradorCreateManyInput | ColaboradorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Colaborador createManyAndReturn
   */
  export type ColaboradorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Colaborador
     */
    select?: ColaboradorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Colaborador
     */
    omit?: ColaboradorOmit<ExtArgs> | null
    /**
     * The data used to create many Colaboradors.
     */
    data: ColaboradorCreateManyInput | ColaboradorCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColaboradorIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Colaborador update
   */
  export type ColaboradorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Colaborador
     */
    select?: ColaboradorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Colaborador
     */
    omit?: ColaboradorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColaboradorInclude<ExtArgs> | null
    /**
     * The data needed to update a Colaborador.
     */
    data: XOR<ColaboradorUpdateInput, ColaboradorUncheckedUpdateInput>
    /**
     * Choose, which Colaborador to update.
     */
    where: ColaboradorWhereUniqueInput
  }

  /**
   * Colaborador updateMany
   */
  export type ColaboradorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Colaboradors.
     */
    data: XOR<ColaboradorUpdateManyMutationInput, ColaboradorUncheckedUpdateManyInput>
    /**
     * Filter which Colaboradors to update
     */
    where?: ColaboradorWhereInput
    /**
     * Limit how many Colaboradors to update.
     */
    limit?: number
  }

  /**
   * Colaborador updateManyAndReturn
   */
  export type ColaboradorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Colaborador
     */
    select?: ColaboradorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Colaborador
     */
    omit?: ColaboradorOmit<ExtArgs> | null
    /**
     * The data used to update Colaboradors.
     */
    data: XOR<ColaboradorUpdateManyMutationInput, ColaboradorUncheckedUpdateManyInput>
    /**
     * Filter which Colaboradors to update
     */
    where?: ColaboradorWhereInput
    /**
     * Limit how many Colaboradors to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColaboradorIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Colaborador upsert
   */
  export type ColaboradorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Colaborador
     */
    select?: ColaboradorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Colaborador
     */
    omit?: ColaboradorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColaboradorInclude<ExtArgs> | null
    /**
     * The filter to search for the Colaborador to update in case it exists.
     */
    where: ColaboradorWhereUniqueInput
    /**
     * In case the Colaborador found by the `where` argument doesn't exist, create a new Colaborador with this data.
     */
    create: XOR<ColaboradorCreateInput, ColaboradorUncheckedCreateInput>
    /**
     * In case the Colaborador was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ColaboradorUpdateInput, ColaboradorUncheckedUpdateInput>
  }

  /**
   * Colaborador delete
   */
  export type ColaboradorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Colaborador
     */
    select?: ColaboradorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Colaborador
     */
    omit?: ColaboradorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColaboradorInclude<ExtArgs> | null
    /**
     * Filter which Colaborador to delete.
     */
    where: ColaboradorWhereUniqueInput
  }

  /**
   * Colaborador deleteMany
   */
  export type ColaboradorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Colaboradors to delete
     */
    where?: ColaboradorWhereInput
    /**
     * Limit how many Colaboradors to delete.
     */
    limit?: number
  }

  /**
   * Colaborador.lideranca
   */
  export type Colaborador$liderancaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Colaborador
     */
    select?: ColaboradorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Colaborador
     */
    omit?: ColaboradorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColaboradorInclude<ExtArgs> | null
    where?: ColaboradorWhereInput
  }

  /**
   * Colaborador.colaboradores
   */
  export type Colaborador$colaboradoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Colaborador
     */
    select?: ColaboradorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Colaborador
     */
    omit?: ColaboradorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColaboradorInclude<ExtArgs> | null
    where?: ColaboradorWhereInput
    orderBy?: ColaboradorOrderByWithRelationInput | ColaboradorOrderByWithRelationInput[]
    cursor?: ColaboradorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ColaboradorScalarFieldEnum | ColaboradorScalarFieldEnum[]
  }

  /**
   * Colaborador.eventos
   */
  export type Colaborador$eventosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evento
     */
    select?: EventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evento
     */
    omit?: EventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventoInclude<ExtArgs> | null
    where?: EventoWhereInput
    orderBy?: EventoOrderByWithRelationInput | EventoOrderByWithRelationInput[]
    cursor?: EventoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventoScalarFieldEnum | EventoScalarFieldEnum[]
  }

  /**
   * Colaborador.atendimentos
   */
  export type Colaborador$atendimentosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atendimento
     */
    select?: AtendimentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Atendimento
     */
    omit?: AtendimentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtendimentoInclude<ExtArgs> | null
    where?: AtendimentoWhereInput
    orderBy?: AtendimentoOrderByWithRelationInput | AtendimentoOrderByWithRelationInput[]
    cursor?: AtendimentoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AtendimentoScalarFieldEnum | AtendimentoScalarFieldEnum[]
  }

  /**
   * Colaborador.projetos
   */
  export type Colaborador$projetosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projeto
     */
    select?: ProjetoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Projeto
     */
    omit?: ProjetoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjetoInclude<ExtArgs> | null
    where?: ProjetoWhereInput
    orderBy?: ProjetoOrderByWithRelationInput | ProjetoOrderByWithRelationInput[]
    cursor?: ProjetoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjetoScalarFieldEnum | ProjetoScalarFieldEnum[]
  }

  /**
   * Colaborador without action
   */
  export type ColaboradorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Colaborador
     */
    select?: ColaboradorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Colaborador
     */
    omit?: ColaboradorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColaboradorInclude<ExtArgs> | null
  }


  /**
   * Model Demanda
   */

  export type AggregateDemanda = {
    _count: DemandaCountAggregateOutputType | null
    _min: DemandaMinAggregateOutputType | null
    _max: DemandaMaxAggregateOutputType | null
  }

  export type DemandaMinAggregateOutputType = {
    id: string | null
    titulo: string | null
    descricao: string | null
    intervalo: boolean | null
    dataInicio: Date | null
    dataFim: Date | null
    status: $Enums.StatusDefault | null
  }

  export type DemandaMaxAggregateOutputType = {
    id: string | null
    titulo: string | null
    descricao: string | null
    intervalo: boolean | null
    dataInicio: Date | null
    dataFim: Date | null
    status: $Enums.StatusDefault | null
  }

  export type DemandaCountAggregateOutputType = {
    id: number
    titulo: number
    descricao: number
    intervalo: number
    dataInicio: number
    dataFim: number
    status: number
    _all: number
  }


  export type DemandaMinAggregateInputType = {
    id?: true
    titulo?: true
    descricao?: true
    intervalo?: true
    dataInicio?: true
    dataFim?: true
    status?: true
  }

  export type DemandaMaxAggregateInputType = {
    id?: true
    titulo?: true
    descricao?: true
    intervalo?: true
    dataInicio?: true
    dataFim?: true
    status?: true
  }

  export type DemandaCountAggregateInputType = {
    id?: true
    titulo?: true
    descricao?: true
    intervalo?: true
    dataInicio?: true
    dataFim?: true
    status?: true
    _all?: true
  }

  export type DemandaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Demanda to aggregate.
     */
    where?: DemandaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Demandas to fetch.
     */
    orderBy?: DemandaOrderByWithRelationInput | DemandaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DemandaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Demandas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Demandas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Demandas
    **/
    _count?: true | DemandaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DemandaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DemandaMaxAggregateInputType
  }

  export type GetDemandaAggregateType<T extends DemandaAggregateArgs> = {
        [P in keyof T & keyof AggregateDemanda]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDemanda[P]>
      : GetScalarType<T[P], AggregateDemanda[P]>
  }




  export type DemandaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DemandaWhereInput
    orderBy?: DemandaOrderByWithAggregationInput | DemandaOrderByWithAggregationInput[]
    by: DemandaScalarFieldEnum[] | DemandaScalarFieldEnum
    having?: DemandaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DemandaCountAggregateInputType | true
    _min?: DemandaMinAggregateInputType
    _max?: DemandaMaxAggregateInputType
  }

  export type DemandaGroupByOutputType = {
    id: string
    titulo: string
    descricao: string
    intervalo: boolean
    dataInicio: Date
    dataFim: Date | null
    status: $Enums.StatusDefault
    _count: DemandaCountAggregateOutputType | null
    _min: DemandaMinAggregateOutputType | null
    _max: DemandaMaxAggregateOutputType | null
  }

  type GetDemandaGroupByPayload<T extends DemandaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DemandaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DemandaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DemandaGroupByOutputType[P]>
            : GetScalarType<T[P], DemandaGroupByOutputType[P]>
        }
      >
    >


  export type DemandaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    descricao?: boolean
    intervalo?: boolean
    dataInicio?: boolean
    dataFim?: boolean
    status?: boolean
    atendimentos?: boolean | Demanda$atendimentosArgs<ExtArgs>
    _count?: boolean | DemandaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["demanda"]>

  export type DemandaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    descricao?: boolean
    intervalo?: boolean
    dataInicio?: boolean
    dataFim?: boolean
    status?: boolean
  }, ExtArgs["result"]["demanda"]>

  export type DemandaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    descricao?: boolean
    intervalo?: boolean
    dataInicio?: boolean
    dataFim?: boolean
    status?: boolean
  }, ExtArgs["result"]["demanda"]>

  export type DemandaSelectScalar = {
    id?: boolean
    titulo?: boolean
    descricao?: boolean
    intervalo?: boolean
    dataInicio?: boolean
    dataFim?: boolean
    status?: boolean
  }

  export type DemandaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "titulo" | "descricao" | "intervalo" | "dataInicio" | "dataFim" | "status", ExtArgs["result"]["demanda"]>
  export type DemandaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    atendimentos?: boolean | Demanda$atendimentosArgs<ExtArgs>
    _count?: boolean | DemandaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DemandaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type DemandaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $DemandaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Demanda"
    objects: {
      atendimentos: Prisma.$AtendimentoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      titulo: string
      descricao: string
      intervalo: boolean
      dataInicio: Date
      dataFim: Date | null
      status: $Enums.StatusDefault
    }, ExtArgs["result"]["demanda"]>
    composites: {}
  }

  type DemandaGetPayload<S extends boolean | null | undefined | DemandaDefaultArgs> = $Result.GetResult<Prisma.$DemandaPayload, S>

  type DemandaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DemandaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DemandaCountAggregateInputType | true
    }

  export interface DemandaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Demanda'], meta: { name: 'Demanda' } }
    /**
     * Find zero or one Demanda that matches the filter.
     * @param {DemandaFindUniqueArgs} args - Arguments to find a Demanda
     * @example
     * // Get one Demanda
     * const demanda = await prisma.demanda.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DemandaFindUniqueArgs>(args: SelectSubset<T, DemandaFindUniqueArgs<ExtArgs>>): Prisma__DemandaClient<$Result.GetResult<Prisma.$DemandaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Demanda that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DemandaFindUniqueOrThrowArgs} args - Arguments to find a Demanda
     * @example
     * // Get one Demanda
     * const demanda = await prisma.demanda.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DemandaFindUniqueOrThrowArgs>(args: SelectSubset<T, DemandaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DemandaClient<$Result.GetResult<Prisma.$DemandaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Demanda that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DemandaFindFirstArgs} args - Arguments to find a Demanda
     * @example
     * // Get one Demanda
     * const demanda = await prisma.demanda.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DemandaFindFirstArgs>(args?: SelectSubset<T, DemandaFindFirstArgs<ExtArgs>>): Prisma__DemandaClient<$Result.GetResult<Prisma.$DemandaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Demanda that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DemandaFindFirstOrThrowArgs} args - Arguments to find a Demanda
     * @example
     * // Get one Demanda
     * const demanda = await prisma.demanda.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DemandaFindFirstOrThrowArgs>(args?: SelectSubset<T, DemandaFindFirstOrThrowArgs<ExtArgs>>): Prisma__DemandaClient<$Result.GetResult<Prisma.$DemandaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Demandas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DemandaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Demandas
     * const demandas = await prisma.demanda.findMany()
     * 
     * // Get first 10 Demandas
     * const demandas = await prisma.demanda.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const demandaWithIdOnly = await prisma.demanda.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DemandaFindManyArgs>(args?: SelectSubset<T, DemandaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DemandaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Demanda.
     * @param {DemandaCreateArgs} args - Arguments to create a Demanda.
     * @example
     * // Create one Demanda
     * const Demanda = await prisma.demanda.create({
     *   data: {
     *     // ... data to create a Demanda
     *   }
     * })
     * 
     */
    create<T extends DemandaCreateArgs>(args: SelectSubset<T, DemandaCreateArgs<ExtArgs>>): Prisma__DemandaClient<$Result.GetResult<Prisma.$DemandaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Demandas.
     * @param {DemandaCreateManyArgs} args - Arguments to create many Demandas.
     * @example
     * // Create many Demandas
     * const demanda = await prisma.demanda.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DemandaCreateManyArgs>(args?: SelectSubset<T, DemandaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Demandas and returns the data saved in the database.
     * @param {DemandaCreateManyAndReturnArgs} args - Arguments to create many Demandas.
     * @example
     * // Create many Demandas
     * const demanda = await prisma.demanda.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Demandas and only return the `id`
     * const demandaWithIdOnly = await prisma.demanda.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DemandaCreateManyAndReturnArgs>(args?: SelectSubset<T, DemandaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DemandaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Demanda.
     * @param {DemandaDeleteArgs} args - Arguments to delete one Demanda.
     * @example
     * // Delete one Demanda
     * const Demanda = await prisma.demanda.delete({
     *   where: {
     *     // ... filter to delete one Demanda
     *   }
     * })
     * 
     */
    delete<T extends DemandaDeleteArgs>(args: SelectSubset<T, DemandaDeleteArgs<ExtArgs>>): Prisma__DemandaClient<$Result.GetResult<Prisma.$DemandaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Demanda.
     * @param {DemandaUpdateArgs} args - Arguments to update one Demanda.
     * @example
     * // Update one Demanda
     * const demanda = await prisma.demanda.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DemandaUpdateArgs>(args: SelectSubset<T, DemandaUpdateArgs<ExtArgs>>): Prisma__DemandaClient<$Result.GetResult<Prisma.$DemandaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Demandas.
     * @param {DemandaDeleteManyArgs} args - Arguments to filter Demandas to delete.
     * @example
     * // Delete a few Demandas
     * const { count } = await prisma.demanda.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DemandaDeleteManyArgs>(args?: SelectSubset<T, DemandaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Demandas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DemandaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Demandas
     * const demanda = await prisma.demanda.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DemandaUpdateManyArgs>(args: SelectSubset<T, DemandaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Demandas and returns the data updated in the database.
     * @param {DemandaUpdateManyAndReturnArgs} args - Arguments to update many Demandas.
     * @example
     * // Update many Demandas
     * const demanda = await prisma.demanda.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Demandas and only return the `id`
     * const demandaWithIdOnly = await prisma.demanda.updateManyAndReturn({
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
    updateManyAndReturn<T extends DemandaUpdateManyAndReturnArgs>(args: SelectSubset<T, DemandaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DemandaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Demanda.
     * @param {DemandaUpsertArgs} args - Arguments to update or create a Demanda.
     * @example
     * // Update or create a Demanda
     * const demanda = await prisma.demanda.upsert({
     *   create: {
     *     // ... data to create a Demanda
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Demanda we want to update
     *   }
     * })
     */
    upsert<T extends DemandaUpsertArgs>(args: SelectSubset<T, DemandaUpsertArgs<ExtArgs>>): Prisma__DemandaClient<$Result.GetResult<Prisma.$DemandaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Demandas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DemandaCountArgs} args - Arguments to filter Demandas to count.
     * @example
     * // Count the number of Demandas
     * const count = await prisma.demanda.count({
     *   where: {
     *     // ... the filter for the Demandas we want to count
     *   }
     * })
    **/
    count<T extends DemandaCountArgs>(
      args?: Subset<T, DemandaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DemandaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Demanda.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DemandaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DemandaAggregateArgs>(args: Subset<T, DemandaAggregateArgs>): Prisma.PrismaPromise<GetDemandaAggregateType<T>>

    /**
     * Group by Demanda.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DemandaGroupByArgs} args - Group by arguments.
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
      T extends DemandaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DemandaGroupByArgs['orderBy'] }
        : { orderBy?: DemandaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DemandaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDemandaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Demanda model
   */
  readonly fields: DemandaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Demanda.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DemandaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    atendimentos<T extends Demanda$atendimentosArgs<ExtArgs> = {}>(args?: Subset<T, Demanda$atendimentosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AtendimentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Demanda model
   */
  interface DemandaFieldRefs {
    readonly id: FieldRef<"Demanda", 'String'>
    readonly titulo: FieldRef<"Demanda", 'String'>
    readonly descricao: FieldRef<"Demanda", 'String'>
    readonly intervalo: FieldRef<"Demanda", 'Boolean'>
    readonly dataInicio: FieldRef<"Demanda", 'DateTime'>
    readonly dataFim: FieldRef<"Demanda", 'DateTime'>
    readonly status: FieldRef<"Demanda", 'StatusDefault'>
  }
    

  // Custom InputTypes
  /**
   * Demanda findUnique
   */
  export type DemandaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Demanda
     */
    select?: DemandaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Demanda
     */
    omit?: DemandaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DemandaInclude<ExtArgs> | null
    /**
     * Filter, which Demanda to fetch.
     */
    where: DemandaWhereUniqueInput
  }

  /**
   * Demanda findUniqueOrThrow
   */
  export type DemandaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Demanda
     */
    select?: DemandaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Demanda
     */
    omit?: DemandaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DemandaInclude<ExtArgs> | null
    /**
     * Filter, which Demanda to fetch.
     */
    where: DemandaWhereUniqueInput
  }

  /**
   * Demanda findFirst
   */
  export type DemandaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Demanda
     */
    select?: DemandaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Demanda
     */
    omit?: DemandaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DemandaInclude<ExtArgs> | null
    /**
     * Filter, which Demanda to fetch.
     */
    where?: DemandaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Demandas to fetch.
     */
    orderBy?: DemandaOrderByWithRelationInput | DemandaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Demandas.
     */
    cursor?: DemandaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Demandas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Demandas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Demandas.
     */
    distinct?: DemandaScalarFieldEnum | DemandaScalarFieldEnum[]
  }

  /**
   * Demanda findFirstOrThrow
   */
  export type DemandaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Demanda
     */
    select?: DemandaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Demanda
     */
    omit?: DemandaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DemandaInclude<ExtArgs> | null
    /**
     * Filter, which Demanda to fetch.
     */
    where?: DemandaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Demandas to fetch.
     */
    orderBy?: DemandaOrderByWithRelationInput | DemandaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Demandas.
     */
    cursor?: DemandaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Demandas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Demandas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Demandas.
     */
    distinct?: DemandaScalarFieldEnum | DemandaScalarFieldEnum[]
  }

  /**
   * Demanda findMany
   */
  export type DemandaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Demanda
     */
    select?: DemandaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Demanda
     */
    omit?: DemandaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DemandaInclude<ExtArgs> | null
    /**
     * Filter, which Demandas to fetch.
     */
    where?: DemandaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Demandas to fetch.
     */
    orderBy?: DemandaOrderByWithRelationInput | DemandaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Demandas.
     */
    cursor?: DemandaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Demandas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Demandas.
     */
    skip?: number
    distinct?: DemandaScalarFieldEnum | DemandaScalarFieldEnum[]
  }

  /**
   * Demanda create
   */
  export type DemandaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Demanda
     */
    select?: DemandaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Demanda
     */
    omit?: DemandaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DemandaInclude<ExtArgs> | null
    /**
     * The data needed to create a Demanda.
     */
    data: XOR<DemandaCreateInput, DemandaUncheckedCreateInput>
  }

  /**
   * Demanda createMany
   */
  export type DemandaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Demandas.
     */
    data: DemandaCreateManyInput | DemandaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Demanda createManyAndReturn
   */
  export type DemandaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Demanda
     */
    select?: DemandaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Demanda
     */
    omit?: DemandaOmit<ExtArgs> | null
    /**
     * The data used to create many Demandas.
     */
    data: DemandaCreateManyInput | DemandaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Demanda update
   */
  export type DemandaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Demanda
     */
    select?: DemandaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Demanda
     */
    omit?: DemandaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DemandaInclude<ExtArgs> | null
    /**
     * The data needed to update a Demanda.
     */
    data: XOR<DemandaUpdateInput, DemandaUncheckedUpdateInput>
    /**
     * Choose, which Demanda to update.
     */
    where: DemandaWhereUniqueInput
  }

  /**
   * Demanda updateMany
   */
  export type DemandaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Demandas.
     */
    data: XOR<DemandaUpdateManyMutationInput, DemandaUncheckedUpdateManyInput>
    /**
     * Filter which Demandas to update
     */
    where?: DemandaWhereInput
    /**
     * Limit how many Demandas to update.
     */
    limit?: number
  }

  /**
   * Demanda updateManyAndReturn
   */
  export type DemandaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Demanda
     */
    select?: DemandaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Demanda
     */
    omit?: DemandaOmit<ExtArgs> | null
    /**
     * The data used to update Demandas.
     */
    data: XOR<DemandaUpdateManyMutationInput, DemandaUncheckedUpdateManyInput>
    /**
     * Filter which Demandas to update
     */
    where?: DemandaWhereInput
    /**
     * Limit how many Demandas to update.
     */
    limit?: number
  }

  /**
   * Demanda upsert
   */
  export type DemandaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Demanda
     */
    select?: DemandaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Demanda
     */
    omit?: DemandaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DemandaInclude<ExtArgs> | null
    /**
     * The filter to search for the Demanda to update in case it exists.
     */
    where: DemandaWhereUniqueInput
    /**
     * In case the Demanda found by the `where` argument doesn't exist, create a new Demanda with this data.
     */
    create: XOR<DemandaCreateInput, DemandaUncheckedCreateInput>
    /**
     * In case the Demanda was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DemandaUpdateInput, DemandaUncheckedUpdateInput>
  }

  /**
   * Demanda delete
   */
  export type DemandaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Demanda
     */
    select?: DemandaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Demanda
     */
    omit?: DemandaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DemandaInclude<ExtArgs> | null
    /**
     * Filter which Demanda to delete.
     */
    where: DemandaWhereUniqueInput
  }

  /**
   * Demanda deleteMany
   */
  export type DemandaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Demandas to delete
     */
    where?: DemandaWhereInput
    /**
     * Limit how many Demandas to delete.
     */
    limit?: number
  }

  /**
   * Demanda.atendimentos
   */
  export type Demanda$atendimentosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atendimento
     */
    select?: AtendimentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Atendimento
     */
    omit?: AtendimentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtendimentoInclude<ExtArgs> | null
    where?: AtendimentoWhereInput
    orderBy?: AtendimentoOrderByWithRelationInput | AtendimentoOrderByWithRelationInput[]
    cursor?: AtendimentoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AtendimentoScalarFieldEnum | AtendimentoScalarFieldEnum[]
  }

  /**
   * Demanda without action
   */
  export type DemandaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Demanda
     */
    select?: DemandaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Demanda
     */
    omit?: DemandaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DemandaInclude<ExtArgs> | null
  }


  /**
   * Model Projeto
   */

  export type AggregateProjeto = {
    _count: ProjetoCountAggregateOutputType | null
    _min: ProjetoMinAggregateOutputType | null
    _max: ProjetoMaxAggregateOutputType | null
  }

  export type ProjetoMinAggregateOutputType = {
    id: string | null
    titulo: string | null
    descricao: string | null
    data: Date | null
    cep: string | null
    zona: $Enums.Zona | null
    cidade: string | null
    bairro: string | null
    logradouro: string | null
    colaboradorId: string | null
  }

  export type ProjetoMaxAggregateOutputType = {
    id: string | null
    titulo: string | null
    descricao: string | null
    data: Date | null
    cep: string | null
    zona: $Enums.Zona | null
    cidade: string | null
    bairro: string | null
    logradouro: string | null
    colaboradorId: string | null
  }

  export type ProjetoCountAggregateOutputType = {
    id: number
    titulo: number
    descricao: number
    data: number
    cep: number
    zona: number
    cidade: number
    bairro: number
    logradouro: number
    colaboradorId: number
    _all: number
  }


  export type ProjetoMinAggregateInputType = {
    id?: true
    titulo?: true
    descricao?: true
    data?: true
    cep?: true
    zona?: true
    cidade?: true
    bairro?: true
    logradouro?: true
    colaboradorId?: true
  }

  export type ProjetoMaxAggregateInputType = {
    id?: true
    titulo?: true
    descricao?: true
    data?: true
    cep?: true
    zona?: true
    cidade?: true
    bairro?: true
    logradouro?: true
    colaboradorId?: true
  }

  export type ProjetoCountAggregateInputType = {
    id?: true
    titulo?: true
    descricao?: true
    data?: true
    cep?: true
    zona?: true
    cidade?: true
    bairro?: true
    logradouro?: true
    colaboradorId?: true
    _all?: true
  }

  export type ProjetoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Projeto to aggregate.
     */
    where?: ProjetoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projetos to fetch.
     */
    orderBy?: ProjetoOrderByWithRelationInput | ProjetoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjetoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projetos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projetos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Projetos
    **/
    _count?: true | ProjetoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjetoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjetoMaxAggregateInputType
  }

  export type GetProjetoAggregateType<T extends ProjetoAggregateArgs> = {
        [P in keyof T & keyof AggregateProjeto]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProjeto[P]>
      : GetScalarType<T[P], AggregateProjeto[P]>
  }




  export type ProjetoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjetoWhereInput
    orderBy?: ProjetoOrderByWithAggregationInput | ProjetoOrderByWithAggregationInput[]
    by: ProjetoScalarFieldEnum[] | ProjetoScalarFieldEnum
    having?: ProjetoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjetoCountAggregateInputType | true
    _min?: ProjetoMinAggregateInputType
    _max?: ProjetoMaxAggregateInputType
  }

  export type ProjetoGroupByOutputType = {
    id: string
    titulo: string
    descricao: string
    data: Date
    cep: string
    zona: $Enums.Zona
    cidade: string
    bairro: string
    logradouro: string
    colaboradorId: string | null
    _count: ProjetoCountAggregateOutputType | null
    _min: ProjetoMinAggregateOutputType | null
    _max: ProjetoMaxAggregateOutputType | null
  }

  type GetProjetoGroupByPayload<T extends ProjetoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjetoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjetoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjetoGroupByOutputType[P]>
            : GetScalarType<T[P], ProjetoGroupByOutputType[P]>
        }
      >
    >


  export type ProjetoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    descricao?: boolean
    data?: boolean
    cep?: boolean
    zona?: boolean
    cidade?: boolean
    bairro?: boolean
    logradouro?: boolean
    colaboradorId?: boolean
    colaborador?: boolean | Projeto$colaboradorArgs<ExtArgs>
    atendimentos?: boolean | Projeto$atendimentosArgs<ExtArgs>
    _count?: boolean | ProjetoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projeto"]>

  export type ProjetoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    descricao?: boolean
    data?: boolean
    cep?: boolean
    zona?: boolean
    cidade?: boolean
    bairro?: boolean
    logradouro?: boolean
    colaboradorId?: boolean
    colaborador?: boolean | Projeto$colaboradorArgs<ExtArgs>
  }, ExtArgs["result"]["projeto"]>

  export type ProjetoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    descricao?: boolean
    data?: boolean
    cep?: boolean
    zona?: boolean
    cidade?: boolean
    bairro?: boolean
    logradouro?: boolean
    colaboradorId?: boolean
    colaborador?: boolean | Projeto$colaboradorArgs<ExtArgs>
  }, ExtArgs["result"]["projeto"]>

  export type ProjetoSelectScalar = {
    id?: boolean
    titulo?: boolean
    descricao?: boolean
    data?: boolean
    cep?: boolean
    zona?: boolean
    cidade?: boolean
    bairro?: boolean
    logradouro?: boolean
    colaboradorId?: boolean
  }

  export type ProjetoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "titulo" | "descricao" | "data" | "cep" | "zona" | "cidade" | "bairro" | "logradouro" | "colaboradorId", ExtArgs["result"]["projeto"]>
  export type ProjetoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    colaborador?: boolean | Projeto$colaboradorArgs<ExtArgs>
    atendimentos?: boolean | Projeto$atendimentosArgs<ExtArgs>
    _count?: boolean | ProjetoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProjetoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    colaborador?: boolean | Projeto$colaboradorArgs<ExtArgs>
  }
  export type ProjetoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    colaborador?: boolean | Projeto$colaboradorArgs<ExtArgs>
  }

  export type $ProjetoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Projeto"
    objects: {
      colaborador: Prisma.$ColaboradorPayload<ExtArgs> | null
      atendimentos: Prisma.$AtendimentoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      titulo: string
      descricao: string
      data: Date
      cep: string
      zona: $Enums.Zona
      cidade: string
      bairro: string
      logradouro: string
      colaboradorId: string | null
    }, ExtArgs["result"]["projeto"]>
    composites: {}
  }

  type ProjetoGetPayload<S extends boolean | null | undefined | ProjetoDefaultArgs> = $Result.GetResult<Prisma.$ProjetoPayload, S>

  type ProjetoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjetoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjetoCountAggregateInputType | true
    }

  export interface ProjetoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Projeto'], meta: { name: 'Projeto' } }
    /**
     * Find zero or one Projeto that matches the filter.
     * @param {ProjetoFindUniqueArgs} args - Arguments to find a Projeto
     * @example
     * // Get one Projeto
     * const projeto = await prisma.projeto.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjetoFindUniqueArgs>(args: SelectSubset<T, ProjetoFindUniqueArgs<ExtArgs>>): Prisma__ProjetoClient<$Result.GetResult<Prisma.$ProjetoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Projeto that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjetoFindUniqueOrThrowArgs} args - Arguments to find a Projeto
     * @example
     * // Get one Projeto
     * const projeto = await prisma.projeto.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjetoFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjetoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjetoClient<$Result.GetResult<Prisma.$ProjetoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Projeto that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjetoFindFirstArgs} args - Arguments to find a Projeto
     * @example
     * // Get one Projeto
     * const projeto = await prisma.projeto.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjetoFindFirstArgs>(args?: SelectSubset<T, ProjetoFindFirstArgs<ExtArgs>>): Prisma__ProjetoClient<$Result.GetResult<Prisma.$ProjetoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Projeto that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjetoFindFirstOrThrowArgs} args - Arguments to find a Projeto
     * @example
     * // Get one Projeto
     * const projeto = await prisma.projeto.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjetoFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjetoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjetoClient<$Result.GetResult<Prisma.$ProjetoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Projetos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjetoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projetos
     * const projetos = await prisma.projeto.findMany()
     * 
     * // Get first 10 Projetos
     * const projetos = await prisma.projeto.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projetoWithIdOnly = await prisma.projeto.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjetoFindManyArgs>(args?: SelectSubset<T, ProjetoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjetoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Projeto.
     * @param {ProjetoCreateArgs} args - Arguments to create a Projeto.
     * @example
     * // Create one Projeto
     * const Projeto = await prisma.projeto.create({
     *   data: {
     *     // ... data to create a Projeto
     *   }
     * })
     * 
     */
    create<T extends ProjetoCreateArgs>(args: SelectSubset<T, ProjetoCreateArgs<ExtArgs>>): Prisma__ProjetoClient<$Result.GetResult<Prisma.$ProjetoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Projetos.
     * @param {ProjetoCreateManyArgs} args - Arguments to create many Projetos.
     * @example
     * // Create many Projetos
     * const projeto = await prisma.projeto.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjetoCreateManyArgs>(args?: SelectSubset<T, ProjetoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Projetos and returns the data saved in the database.
     * @param {ProjetoCreateManyAndReturnArgs} args - Arguments to create many Projetos.
     * @example
     * // Create many Projetos
     * const projeto = await prisma.projeto.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Projetos and only return the `id`
     * const projetoWithIdOnly = await prisma.projeto.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjetoCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjetoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjetoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Projeto.
     * @param {ProjetoDeleteArgs} args - Arguments to delete one Projeto.
     * @example
     * // Delete one Projeto
     * const Projeto = await prisma.projeto.delete({
     *   where: {
     *     // ... filter to delete one Projeto
     *   }
     * })
     * 
     */
    delete<T extends ProjetoDeleteArgs>(args: SelectSubset<T, ProjetoDeleteArgs<ExtArgs>>): Prisma__ProjetoClient<$Result.GetResult<Prisma.$ProjetoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Projeto.
     * @param {ProjetoUpdateArgs} args - Arguments to update one Projeto.
     * @example
     * // Update one Projeto
     * const projeto = await prisma.projeto.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjetoUpdateArgs>(args: SelectSubset<T, ProjetoUpdateArgs<ExtArgs>>): Prisma__ProjetoClient<$Result.GetResult<Prisma.$ProjetoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Projetos.
     * @param {ProjetoDeleteManyArgs} args - Arguments to filter Projetos to delete.
     * @example
     * // Delete a few Projetos
     * const { count } = await prisma.projeto.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjetoDeleteManyArgs>(args?: SelectSubset<T, ProjetoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projetos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjetoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projetos
     * const projeto = await prisma.projeto.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjetoUpdateManyArgs>(args: SelectSubset<T, ProjetoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projetos and returns the data updated in the database.
     * @param {ProjetoUpdateManyAndReturnArgs} args - Arguments to update many Projetos.
     * @example
     * // Update many Projetos
     * const projeto = await prisma.projeto.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Projetos and only return the `id`
     * const projetoWithIdOnly = await prisma.projeto.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProjetoUpdateManyAndReturnArgs>(args: SelectSubset<T, ProjetoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjetoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Projeto.
     * @param {ProjetoUpsertArgs} args - Arguments to update or create a Projeto.
     * @example
     * // Update or create a Projeto
     * const projeto = await prisma.projeto.upsert({
     *   create: {
     *     // ... data to create a Projeto
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Projeto we want to update
     *   }
     * })
     */
    upsert<T extends ProjetoUpsertArgs>(args: SelectSubset<T, ProjetoUpsertArgs<ExtArgs>>): Prisma__ProjetoClient<$Result.GetResult<Prisma.$ProjetoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Projetos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjetoCountArgs} args - Arguments to filter Projetos to count.
     * @example
     * // Count the number of Projetos
     * const count = await prisma.projeto.count({
     *   where: {
     *     // ... the filter for the Projetos we want to count
     *   }
     * })
    **/
    count<T extends ProjetoCountArgs>(
      args?: Subset<T, ProjetoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjetoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Projeto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjetoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProjetoAggregateArgs>(args: Subset<T, ProjetoAggregateArgs>): Prisma.PrismaPromise<GetProjetoAggregateType<T>>

    /**
     * Group by Projeto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjetoGroupByArgs} args - Group by arguments.
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
      T extends ProjetoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjetoGroupByArgs['orderBy'] }
        : { orderBy?: ProjetoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProjetoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjetoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Projeto model
   */
  readonly fields: ProjetoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Projeto.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjetoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    colaborador<T extends Projeto$colaboradorArgs<ExtArgs> = {}>(args?: Subset<T, Projeto$colaboradorArgs<ExtArgs>>): Prisma__ColaboradorClient<$Result.GetResult<Prisma.$ColaboradorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    atendimentos<T extends Projeto$atendimentosArgs<ExtArgs> = {}>(args?: Subset<T, Projeto$atendimentosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AtendimentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Projeto model
   */
  interface ProjetoFieldRefs {
    readonly id: FieldRef<"Projeto", 'String'>
    readonly titulo: FieldRef<"Projeto", 'String'>
    readonly descricao: FieldRef<"Projeto", 'String'>
    readonly data: FieldRef<"Projeto", 'DateTime'>
    readonly cep: FieldRef<"Projeto", 'String'>
    readonly zona: FieldRef<"Projeto", 'Zona'>
    readonly cidade: FieldRef<"Projeto", 'String'>
    readonly bairro: FieldRef<"Projeto", 'String'>
    readonly logradouro: FieldRef<"Projeto", 'String'>
    readonly colaboradorId: FieldRef<"Projeto", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Projeto findUnique
   */
  export type ProjetoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projeto
     */
    select?: ProjetoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Projeto
     */
    omit?: ProjetoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjetoInclude<ExtArgs> | null
    /**
     * Filter, which Projeto to fetch.
     */
    where: ProjetoWhereUniqueInput
  }

  /**
   * Projeto findUniqueOrThrow
   */
  export type ProjetoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projeto
     */
    select?: ProjetoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Projeto
     */
    omit?: ProjetoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjetoInclude<ExtArgs> | null
    /**
     * Filter, which Projeto to fetch.
     */
    where: ProjetoWhereUniqueInput
  }

  /**
   * Projeto findFirst
   */
  export type ProjetoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projeto
     */
    select?: ProjetoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Projeto
     */
    omit?: ProjetoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjetoInclude<ExtArgs> | null
    /**
     * Filter, which Projeto to fetch.
     */
    where?: ProjetoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projetos to fetch.
     */
    orderBy?: ProjetoOrderByWithRelationInput | ProjetoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projetos.
     */
    cursor?: ProjetoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projetos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projetos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projetos.
     */
    distinct?: ProjetoScalarFieldEnum | ProjetoScalarFieldEnum[]
  }

  /**
   * Projeto findFirstOrThrow
   */
  export type ProjetoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projeto
     */
    select?: ProjetoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Projeto
     */
    omit?: ProjetoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjetoInclude<ExtArgs> | null
    /**
     * Filter, which Projeto to fetch.
     */
    where?: ProjetoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projetos to fetch.
     */
    orderBy?: ProjetoOrderByWithRelationInput | ProjetoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projetos.
     */
    cursor?: ProjetoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projetos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projetos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projetos.
     */
    distinct?: ProjetoScalarFieldEnum | ProjetoScalarFieldEnum[]
  }

  /**
   * Projeto findMany
   */
  export type ProjetoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projeto
     */
    select?: ProjetoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Projeto
     */
    omit?: ProjetoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjetoInclude<ExtArgs> | null
    /**
     * Filter, which Projetos to fetch.
     */
    where?: ProjetoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projetos to fetch.
     */
    orderBy?: ProjetoOrderByWithRelationInput | ProjetoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Projetos.
     */
    cursor?: ProjetoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projetos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projetos.
     */
    skip?: number
    distinct?: ProjetoScalarFieldEnum | ProjetoScalarFieldEnum[]
  }

  /**
   * Projeto create
   */
  export type ProjetoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projeto
     */
    select?: ProjetoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Projeto
     */
    omit?: ProjetoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjetoInclude<ExtArgs> | null
    /**
     * The data needed to create a Projeto.
     */
    data: XOR<ProjetoCreateInput, ProjetoUncheckedCreateInput>
  }

  /**
   * Projeto createMany
   */
  export type ProjetoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Projetos.
     */
    data: ProjetoCreateManyInput | ProjetoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Projeto createManyAndReturn
   */
  export type ProjetoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projeto
     */
    select?: ProjetoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Projeto
     */
    omit?: ProjetoOmit<ExtArgs> | null
    /**
     * The data used to create many Projetos.
     */
    data: ProjetoCreateManyInput | ProjetoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjetoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Projeto update
   */
  export type ProjetoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projeto
     */
    select?: ProjetoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Projeto
     */
    omit?: ProjetoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjetoInclude<ExtArgs> | null
    /**
     * The data needed to update a Projeto.
     */
    data: XOR<ProjetoUpdateInput, ProjetoUncheckedUpdateInput>
    /**
     * Choose, which Projeto to update.
     */
    where: ProjetoWhereUniqueInput
  }

  /**
   * Projeto updateMany
   */
  export type ProjetoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Projetos.
     */
    data: XOR<ProjetoUpdateManyMutationInput, ProjetoUncheckedUpdateManyInput>
    /**
     * Filter which Projetos to update
     */
    where?: ProjetoWhereInput
    /**
     * Limit how many Projetos to update.
     */
    limit?: number
  }

  /**
   * Projeto updateManyAndReturn
   */
  export type ProjetoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projeto
     */
    select?: ProjetoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Projeto
     */
    omit?: ProjetoOmit<ExtArgs> | null
    /**
     * The data used to update Projetos.
     */
    data: XOR<ProjetoUpdateManyMutationInput, ProjetoUncheckedUpdateManyInput>
    /**
     * Filter which Projetos to update
     */
    where?: ProjetoWhereInput
    /**
     * Limit how many Projetos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjetoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Projeto upsert
   */
  export type ProjetoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projeto
     */
    select?: ProjetoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Projeto
     */
    omit?: ProjetoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjetoInclude<ExtArgs> | null
    /**
     * The filter to search for the Projeto to update in case it exists.
     */
    where: ProjetoWhereUniqueInput
    /**
     * In case the Projeto found by the `where` argument doesn't exist, create a new Projeto with this data.
     */
    create: XOR<ProjetoCreateInput, ProjetoUncheckedCreateInput>
    /**
     * In case the Projeto was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjetoUpdateInput, ProjetoUncheckedUpdateInput>
  }

  /**
   * Projeto delete
   */
  export type ProjetoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projeto
     */
    select?: ProjetoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Projeto
     */
    omit?: ProjetoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjetoInclude<ExtArgs> | null
    /**
     * Filter which Projeto to delete.
     */
    where: ProjetoWhereUniqueInput
  }

  /**
   * Projeto deleteMany
   */
  export type ProjetoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Projetos to delete
     */
    where?: ProjetoWhereInput
    /**
     * Limit how many Projetos to delete.
     */
    limit?: number
  }

  /**
   * Projeto.colaborador
   */
  export type Projeto$colaboradorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Colaborador
     */
    select?: ColaboradorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Colaborador
     */
    omit?: ColaboradorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColaboradorInclude<ExtArgs> | null
    where?: ColaboradorWhereInput
  }

  /**
   * Projeto.atendimentos
   */
  export type Projeto$atendimentosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atendimento
     */
    select?: AtendimentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Atendimento
     */
    omit?: AtendimentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtendimentoInclude<ExtArgs> | null
    where?: AtendimentoWhereInput
    orderBy?: AtendimentoOrderByWithRelationInput | AtendimentoOrderByWithRelationInput[]
    cursor?: AtendimentoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AtendimentoScalarFieldEnum | AtendimentoScalarFieldEnum[]
  }

  /**
   * Projeto without action
   */
  export type ProjetoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projeto
     */
    select?: ProjetoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Projeto
     */
    omit?: ProjetoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjetoInclude<ExtArgs> | null
  }


  /**
   * Model Receita
   */

  export type AggregateReceita = {
    _count: ReceitaCountAggregateOutputType | null
    _avg: ReceitaAvgAggregateOutputType | null
    _sum: ReceitaSumAggregateOutputType | null
    _min: ReceitaMinAggregateOutputType | null
    _max: ReceitaMaxAggregateOutputType | null
  }

  export type ReceitaAvgAggregateOutputType = {
    valor: number | null
  }

  export type ReceitaSumAggregateOutputType = {
    valor: number | null
  }

  export type ReceitaMinAggregateOutputType = {
    id: string | null
    descricao: string | null
    valor: number | null
    data: Date | null
    origem: string | null
  }

  export type ReceitaMaxAggregateOutputType = {
    id: string | null
    descricao: string | null
    valor: number | null
    data: Date | null
    origem: string | null
  }

  export type ReceitaCountAggregateOutputType = {
    id: number
    descricao: number
    valor: number
    data: number
    origem: number
    _all: number
  }


  export type ReceitaAvgAggregateInputType = {
    valor?: true
  }

  export type ReceitaSumAggregateInputType = {
    valor?: true
  }

  export type ReceitaMinAggregateInputType = {
    id?: true
    descricao?: true
    valor?: true
    data?: true
    origem?: true
  }

  export type ReceitaMaxAggregateInputType = {
    id?: true
    descricao?: true
    valor?: true
    data?: true
    origem?: true
  }

  export type ReceitaCountAggregateInputType = {
    id?: true
    descricao?: true
    valor?: true
    data?: true
    origem?: true
    _all?: true
  }

  export type ReceitaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Receita to aggregate.
     */
    where?: ReceitaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Receitas to fetch.
     */
    orderBy?: ReceitaOrderByWithRelationInput | ReceitaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReceitaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Receitas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Receitas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Receitas
    **/
    _count?: true | ReceitaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReceitaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReceitaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReceitaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReceitaMaxAggregateInputType
  }

  export type GetReceitaAggregateType<T extends ReceitaAggregateArgs> = {
        [P in keyof T & keyof AggregateReceita]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReceita[P]>
      : GetScalarType<T[P], AggregateReceita[P]>
  }




  export type ReceitaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReceitaWhereInput
    orderBy?: ReceitaOrderByWithAggregationInput | ReceitaOrderByWithAggregationInput[]
    by: ReceitaScalarFieldEnum[] | ReceitaScalarFieldEnum
    having?: ReceitaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReceitaCountAggregateInputType | true
    _avg?: ReceitaAvgAggregateInputType
    _sum?: ReceitaSumAggregateInputType
    _min?: ReceitaMinAggregateInputType
    _max?: ReceitaMaxAggregateInputType
  }

  export type ReceitaGroupByOutputType = {
    id: string
    descricao: string
    valor: number
    data: Date
    origem: string | null
    _count: ReceitaCountAggregateOutputType | null
    _avg: ReceitaAvgAggregateOutputType | null
    _sum: ReceitaSumAggregateOutputType | null
    _min: ReceitaMinAggregateOutputType | null
    _max: ReceitaMaxAggregateOutputType | null
  }

  type GetReceitaGroupByPayload<T extends ReceitaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReceitaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReceitaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReceitaGroupByOutputType[P]>
            : GetScalarType<T[P], ReceitaGroupByOutputType[P]>
        }
      >
    >


  export type ReceitaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    descricao?: boolean
    valor?: boolean
    data?: boolean
    origem?: boolean
    atendimento?: boolean | Receita$atendimentoArgs<ExtArgs>
  }, ExtArgs["result"]["receita"]>

  export type ReceitaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    descricao?: boolean
    valor?: boolean
    data?: boolean
    origem?: boolean
  }, ExtArgs["result"]["receita"]>

  export type ReceitaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    descricao?: boolean
    valor?: boolean
    data?: boolean
    origem?: boolean
  }, ExtArgs["result"]["receita"]>

  export type ReceitaSelectScalar = {
    id?: boolean
    descricao?: boolean
    valor?: boolean
    data?: boolean
    origem?: boolean
  }

  export type ReceitaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "descricao" | "valor" | "data" | "origem", ExtArgs["result"]["receita"]>
  export type ReceitaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    atendimento?: boolean | Receita$atendimentoArgs<ExtArgs>
  }
  export type ReceitaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ReceitaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ReceitaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Receita"
    objects: {
      atendimento: Prisma.$AtendimentoPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      descricao: string
      valor: number
      data: Date
      origem: string | null
    }, ExtArgs["result"]["receita"]>
    composites: {}
  }

  type ReceitaGetPayload<S extends boolean | null | undefined | ReceitaDefaultArgs> = $Result.GetResult<Prisma.$ReceitaPayload, S>

  type ReceitaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReceitaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReceitaCountAggregateInputType | true
    }

  export interface ReceitaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Receita'], meta: { name: 'Receita' } }
    /**
     * Find zero or one Receita that matches the filter.
     * @param {ReceitaFindUniqueArgs} args - Arguments to find a Receita
     * @example
     * // Get one Receita
     * const receita = await prisma.receita.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReceitaFindUniqueArgs>(args: SelectSubset<T, ReceitaFindUniqueArgs<ExtArgs>>): Prisma__ReceitaClient<$Result.GetResult<Prisma.$ReceitaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Receita that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReceitaFindUniqueOrThrowArgs} args - Arguments to find a Receita
     * @example
     * // Get one Receita
     * const receita = await prisma.receita.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReceitaFindUniqueOrThrowArgs>(args: SelectSubset<T, ReceitaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReceitaClient<$Result.GetResult<Prisma.$ReceitaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Receita that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReceitaFindFirstArgs} args - Arguments to find a Receita
     * @example
     * // Get one Receita
     * const receita = await prisma.receita.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReceitaFindFirstArgs>(args?: SelectSubset<T, ReceitaFindFirstArgs<ExtArgs>>): Prisma__ReceitaClient<$Result.GetResult<Prisma.$ReceitaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Receita that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReceitaFindFirstOrThrowArgs} args - Arguments to find a Receita
     * @example
     * // Get one Receita
     * const receita = await prisma.receita.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReceitaFindFirstOrThrowArgs>(args?: SelectSubset<T, ReceitaFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReceitaClient<$Result.GetResult<Prisma.$ReceitaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Receitas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReceitaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Receitas
     * const receitas = await prisma.receita.findMany()
     * 
     * // Get first 10 Receitas
     * const receitas = await prisma.receita.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const receitaWithIdOnly = await prisma.receita.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReceitaFindManyArgs>(args?: SelectSubset<T, ReceitaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReceitaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Receita.
     * @param {ReceitaCreateArgs} args - Arguments to create a Receita.
     * @example
     * // Create one Receita
     * const Receita = await prisma.receita.create({
     *   data: {
     *     // ... data to create a Receita
     *   }
     * })
     * 
     */
    create<T extends ReceitaCreateArgs>(args: SelectSubset<T, ReceitaCreateArgs<ExtArgs>>): Prisma__ReceitaClient<$Result.GetResult<Prisma.$ReceitaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Receitas.
     * @param {ReceitaCreateManyArgs} args - Arguments to create many Receitas.
     * @example
     * // Create many Receitas
     * const receita = await prisma.receita.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReceitaCreateManyArgs>(args?: SelectSubset<T, ReceitaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Receitas and returns the data saved in the database.
     * @param {ReceitaCreateManyAndReturnArgs} args - Arguments to create many Receitas.
     * @example
     * // Create many Receitas
     * const receita = await prisma.receita.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Receitas and only return the `id`
     * const receitaWithIdOnly = await prisma.receita.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReceitaCreateManyAndReturnArgs>(args?: SelectSubset<T, ReceitaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReceitaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Receita.
     * @param {ReceitaDeleteArgs} args - Arguments to delete one Receita.
     * @example
     * // Delete one Receita
     * const Receita = await prisma.receita.delete({
     *   where: {
     *     // ... filter to delete one Receita
     *   }
     * })
     * 
     */
    delete<T extends ReceitaDeleteArgs>(args: SelectSubset<T, ReceitaDeleteArgs<ExtArgs>>): Prisma__ReceitaClient<$Result.GetResult<Prisma.$ReceitaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Receita.
     * @param {ReceitaUpdateArgs} args - Arguments to update one Receita.
     * @example
     * // Update one Receita
     * const receita = await prisma.receita.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReceitaUpdateArgs>(args: SelectSubset<T, ReceitaUpdateArgs<ExtArgs>>): Prisma__ReceitaClient<$Result.GetResult<Prisma.$ReceitaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Receitas.
     * @param {ReceitaDeleteManyArgs} args - Arguments to filter Receitas to delete.
     * @example
     * // Delete a few Receitas
     * const { count } = await prisma.receita.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReceitaDeleteManyArgs>(args?: SelectSubset<T, ReceitaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Receitas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReceitaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Receitas
     * const receita = await prisma.receita.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReceitaUpdateManyArgs>(args: SelectSubset<T, ReceitaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Receitas and returns the data updated in the database.
     * @param {ReceitaUpdateManyAndReturnArgs} args - Arguments to update many Receitas.
     * @example
     * // Update many Receitas
     * const receita = await prisma.receita.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Receitas and only return the `id`
     * const receitaWithIdOnly = await prisma.receita.updateManyAndReturn({
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
    updateManyAndReturn<T extends ReceitaUpdateManyAndReturnArgs>(args: SelectSubset<T, ReceitaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReceitaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Receita.
     * @param {ReceitaUpsertArgs} args - Arguments to update or create a Receita.
     * @example
     * // Update or create a Receita
     * const receita = await prisma.receita.upsert({
     *   create: {
     *     // ... data to create a Receita
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Receita we want to update
     *   }
     * })
     */
    upsert<T extends ReceitaUpsertArgs>(args: SelectSubset<T, ReceitaUpsertArgs<ExtArgs>>): Prisma__ReceitaClient<$Result.GetResult<Prisma.$ReceitaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Receitas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReceitaCountArgs} args - Arguments to filter Receitas to count.
     * @example
     * // Count the number of Receitas
     * const count = await prisma.receita.count({
     *   where: {
     *     // ... the filter for the Receitas we want to count
     *   }
     * })
    **/
    count<T extends ReceitaCountArgs>(
      args?: Subset<T, ReceitaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReceitaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Receita.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReceitaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReceitaAggregateArgs>(args: Subset<T, ReceitaAggregateArgs>): Prisma.PrismaPromise<GetReceitaAggregateType<T>>

    /**
     * Group by Receita.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReceitaGroupByArgs} args - Group by arguments.
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
      T extends ReceitaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReceitaGroupByArgs['orderBy'] }
        : { orderBy?: ReceitaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReceitaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReceitaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Receita model
   */
  readonly fields: ReceitaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Receita.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReceitaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    atendimento<T extends Receita$atendimentoArgs<ExtArgs> = {}>(args?: Subset<T, Receita$atendimentoArgs<ExtArgs>>): Prisma__AtendimentoClient<$Result.GetResult<Prisma.$AtendimentoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Receita model
   */
  interface ReceitaFieldRefs {
    readonly id: FieldRef<"Receita", 'String'>
    readonly descricao: FieldRef<"Receita", 'String'>
    readonly valor: FieldRef<"Receita", 'Int'>
    readonly data: FieldRef<"Receita", 'DateTime'>
    readonly origem: FieldRef<"Receita", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Receita findUnique
   */
  export type ReceitaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Receita
     */
    select?: ReceitaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Receita
     */
    omit?: ReceitaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceitaInclude<ExtArgs> | null
    /**
     * Filter, which Receita to fetch.
     */
    where: ReceitaWhereUniqueInput
  }

  /**
   * Receita findUniqueOrThrow
   */
  export type ReceitaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Receita
     */
    select?: ReceitaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Receita
     */
    omit?: ReceitaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceitaInclude<ExtArgs> | null
    /**
     * Filter, which Receita to fetch.
     */
    where: ReceitaWhereUniqueInput
  }

  /**
   * Receita findFirst
   */
  export type ReceitaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Receita
     */
    select?: ReceitaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Receita
     */
    omit?: ReceitaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceitaInclude<ExtArgs> | null
    /**
     * Filter, which Receita to fetch.
     */
    where?: ReceitaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Receitas to fetch.
     */
    orderBy?: ReceitaOrderByWithRelationInput | ReceitaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Receitas.
     */
    cursor?: ReceitaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Receitas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Receitas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Receitas.
     */
    distinct?: ReceitaScalarFieldEnum | ReceitaScalarFieldEnum[]
  }

  /**
   * Receita findFirstOrThrow
   */
  export type ReceitaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Receita
     */
    select?: ReceitaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Receita
     */
    omit?: ReceitaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceitaInclude<ExtArgs> | null
    /**
     * Filter, which Receita to fetch.
     */
    where?: ReceitaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Receitas to fetch.
     */
    orderBy?: ReceitaOrderByWithRelationInput | ReceitaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Receitas.
     */
    cursor?: ReceitaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Receitas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Receitas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Receitas.
     */
    distinct?: ReceitaScalarFieldEnum | ReceitaScalarFieldEnum[]
  }

  /**
   * Receita findMany
   */
  export type ReceitaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Receita
     */
    select?: ReceitaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Receita
     */
    omit?: ReceitaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceitaInclude<ExtArgs> | null
    /**
     * Filter, which Receitas to fetch.
     */
    where?: ReceitaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Receitas to fetch.
     */
    orderBy?: ReceitaOrderByWithRelationInput | ReceitaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Receitas.
     */
    cursor?: ReceitaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Receitas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Receitas.
     */
    skip?: number
    distinct?: ReceitaScalarFieldEnum | ReceitaScalarFieldEnum[]
  }

  /**
   * Receita create
   */
  export type ReceitaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Receita
     */
    select?: ReceitaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Receita
     */
    omit?: ReceitaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceitaInclude<ExtArgs> | null
    /**
     * The data needed to create a Receita.
     */
    data: XOR<ReceitaCreateInput, ReceitaUncheckedCreateInput>
  }

  /**
   * Receita createMany
   */
  export type ReceitaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Receitas.
     */
    data: ReceitaCreateManyInput | ReceitaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Receita createManyAndReturn
   */
  export type ReceitaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Receita
     */
    select?: ReceitaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Receita
     */
    omit?: ReceitaOmit<ExtArgs> | null
    /**
     * The data used to create many Receitas.
     */
    data: ReceitaCreateManyInput | ReceitaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Receita update
   */
  export type ReceitaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Receita
     */
    select?: ReceitaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Receita
     */
    omit?: ReceitaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceitaInclude<ExtArgs> | null
    /**
     * The data needed to update a Receita.
     */
    data: XOR<ReceitaUpdateInput, ReceitaUncheckedUpdateInput>
    /**
     * Choose, which Receita to update.
     */
    where: ReceitaWhereUniqueInput
  }

  /**
   * Receita updateMany
   */
  export type ReceitaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Receitas.
     */
    data: XOR<ReceitaUpdateManyMutationInput, ReceitaUncheckedUpdateManyInput>
    /**
     * Filter which Receitas to update
     */
    where?: ReceitaWhereInput
    /**
     * Limit how many Receitas to update.
     */
    limit?: number
  }

  /**
   * Receita updateManyAndReturn
   */
  export type ReceitaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Receita
     */
    select?: ReceitaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Receita
     */
    omit?: ReceitaOmit<ExtArgs> | null
    /**
     * The data used to update Receitas.
     */
    data: XOR<ReceitaUpdateManyMutationInput, ReceitaUncheckedUpdateManyInput>
    /**
     * Filter which Receitas to update
     */
    where?: ReceitaWhereInput
    /**
     * Limit how many Receitas to update.
     */
    limit?: number
  }

  /**
   * Receita upsert
   */
  export type ReceitaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Receita
     */
    select?: ReceitaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Receita
     */
    omit?: ReceitaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceitaInclude<ExtArgs> | null
    /**
     * The filter to search for the Receita to update in case it exists.
     */
    where: ReceitaWhereUniqueInput
    /**
     * In case the Receita found by the `where` argument doesn't exist, create a new Receita with this data.
     */
    create: XOR<ReceitaCreateInput, ReceitaUncheckedCreateInput>
    /**
     * In case the Receita was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReceitaUpdateInput, ReceitaUncheckedUpdateInput>
  }

  /**
   * Receita delete
   */
  export type ReceitaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Receita
     */
    select?: ReceitaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Receita
     */
    omit?: ReceitaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceitaInclude<ExtArgs> | null
    /**
     * Filter which Receita to delete.
     */
    where: ReceitaWhereUniqueInput
  }

  /**
   * Receita deleteMany
   */
  export type ReceitaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Receitas to delete
     */
    where?: ReceitaWhereInput
    /**
     * Limit how many Receitas to delete.
     */
    limit?: number
  }

  /**
   * Receita.atendimento
   */
  export type Receita$atendimentoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atendimento
     */
    select?: AtendimentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Atendimento
     */
    omit?: AtendimentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtendimentoInclude<ExtArgs> | null
    where?: AtendimentoWhereInput
  }

  /**
   * Receita without action
   */
  export type ReceitaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Receita
     */
    select?: ReceitaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Receita
     */
    omit?: ReceitaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceitaInclude<ExtArgs> | null
  }


  /**
   * Model Evento
   */

  export type AggregateEvento = {
    _count: EventoCountAggregateOutputType | null
    _min: EventoMinAggregateOutputType | null
    _max: EventoMaxAggregateOutputType | null
  }

  export type EventoMinAggregateOutputType = {
    id: string | null
    nome: string | null
    descricao: string | null
    localizacao: string | null
    categoria: string | null
    status: $Enums.StatusEvento | null
    prioridade: $Enums.Prioridade | null
    dataInicio: Date | null
    dataFim: Date | null
  }

  export type EventoMaxAggregateOutputType = {
    id: string | null
    nome: string | null
    descricao: string | null
    localizacao: string | null
    categoria: string | null
    status: $Enums.StatusEvento | null
    prioridade: $Enums.Prioridade | null
    dataInicio: Date | null
    dataFim: Date | null
  }

  export type EventoCountAggregateOutputType = {
    id: number
    nome: number
    descricao: number
    localizacao: number
    categoria: number
    status: number
    prioridade: number
    dataInicio: number
    dataFim: number
    _all: number
  }


  export type EventoMinAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    localizacao?: true
    categoria?: true
    status?: true
    prioridade?: true
    dataInicio?: true
    dataFim?: true
  }

  export type EventoMaxAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    localizacao?: true
    categoria?: true
    status?: true
    prioridade?: true
    dataInicio?: true
    dataFim?: true
  }

  export type EventoCountAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    localizacao?: true
    categoria?: true
    status?: true
    prioridade?: true
    dataInicio?: true
    dataFim?: true
    _all?: true
  }

  export type EventoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Evento to aggregate.
     */
    where?: EventoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Eventos to fetch.
     */
    orderBy?: EventoOrderByWithRelationInput | EventoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Eventos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Eventos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Eventos
    **/
    _count?: true | EventoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventoMaxAggregateInputType
  }

  export type GetEventoAggregateType<T extends EventoAggregateArgs> = {
        [P in keyof T & keyof AggregateEvento]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvento[P]>
      : GetScalarType<T[P], AggregateEvento[P]>
  }




  export type EventoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventoWhereInput
    orderBy?: EventoOrderByWithAggregationInput | EventoOrderByWithAggregationInput[]
    by: EventoScalarFieldEnum[] | EventoScalarFieldEnum
    having?: EventoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventoCountAggregateInputType | true
    _min?: EventoMinAggregateInputType
    _max?: EventoMaxAggregateInputType
  }

  export type EventoGroupByOutputType = {
    id: string
    nome: string
    descricao: string
    localizacao: string
    categoria: string
    status: $Enums.StatusEvento
    prioridade: $Enums.Prioridade
    dataInicio: Date
    dataFim: Date
    _count: EventoCountAggregateOutputType | null
    _min: EventoMinAggregateOutputType | null
    _max: EventoMaxAggregateOutputType | null
  }

  type GetEventoGroupByPayload<T extends EventoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventoGroupByOutputType[P]>
            : GetScalarType<T[P], EventoGroupByOutputType[P]>
        }
      >
    >


  export type EventoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    descricao?: boolean
    localizacao?: boolean
    categoria?: boolean
    status?: boolean
    prioridade?: boolean
    dataInicio?: boolean
    dataFim?: boolean
    participantes?: boolean | Evento$participantesArgs<ExtArgs>
    _count?: boolean | EventoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["evento"]>

  export type EventoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    descricao?: boolean
    localizacao?: boolean
    categoria?: boolean
    status?: boolean
    prioridade?: boolean
    dataInicio?: boolean
    dataFim?: boolean
  }, ExtArgs["result"]["evento"]>

  export type EventoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    descricao?: boolean
    localizacao?: boolean
    categoria?: boolean
    status?: boolean
    prioridade?: boolean
    dataInicio?: boolean
    dataFim?: boolean
  }, ExtArgs["result"]["evento"]>

  export type EventoSelectScalar = {
    id?: boolean
    nome?: boolean
    descricao?: boolean
    localizacao?: boolean
    categoria?: boolean
    status?: boolean
    prioridade?: boolean
    dataInicio?: boolean
    dataFim?: boolean
  }

  export type EventoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "descricao" | "localizacao" | "categoria" | "status" | "prioridade" | "dataInicio" | "dataFim", ExtArgs["result"]["evento"]>
  export type EventoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    participantes?: boolean | Evento$participantesArgs<ExtArgs>
    _count?: boolean | EventoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EventoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type EventoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $EventoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Evento"
    objects: {
      participantes: Prisma.$ColaboradorPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nome: string
      descricao: string
      localizacao: string
      categoria: string
      status: $Enums.StatusEvento
      prioridade: $Enums.Prioridade
      dataInicio: Date
      dataFim: Date
    }, ExtArgs["result"]["evento"]>
    composites: {}
  }

  type EventoGetPayload<S extends boolean | null | undefined | EventoDefaultArgs> = $Result.GetResult<Prisma.$EventoPayload, S>

  type EventoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EventoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EventoCountAggregateInputType | true
    }

  export interface EventoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Evento'], meta: { name: 'Evento' } }
    /**
     * Find zero or one Evento that matches the filter.
     * @param {EventoFindUniqueArgs} args - Arguments to find a Evento
     * @example
     * // Get one Evento
     * const evento = await prisma.evento.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventoFindUniqueArgs>(args: SelectSubset<T, EventoFindUniqueArgs<ExtArgs>>): Prisma__EventoClient<$Result.GetResult<Prisma.$EventoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Evento that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EventoFindUniqueOrThrowArgs} args - Arguments to find a Evento
     * @example
     * // Get one Evento
     * const evento = await prisma.evento.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventoFindUniqueOrThrowArgs>(args: SelectSubset<T, EventoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventoClient<$Result.GetResult<Prisma.$EventoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Evento that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventoFindFirstArgs} args - Arguments to find a Evento
     * @example
     * // Get one Evento
     * const evento = await prisma.evento.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventoFindFirstArgs>(args?: SelectSubset<T, EventoFindFirstArgs<ExtArgs>>): Prisma__EventoClient<$Result.GetResult<Prisma.$EventoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Evento that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventoFindFirstOrThrowArgs} args - Arguments to find a Evento
     * @example
     * // Get one Evento
     * const evento = await prisma.evento.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventoFindFirstOrThrowArgs>(args?: SelectSubset<T, EventoFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventoClient<$Result.GetResult<Prisma.$EventoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Eventos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Eventos
     * const eventos = await prisma.evento.findMany()
     * 
     * // Get first 10 Eventos
     * const eventos = await prisma.evento.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventoWithIdOnly = await prisma.evento.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EventoFindManyArgs>(args?: SelectSubset<T, EventoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Evento.
     * @param {EventoCreateArgs} args - Arguments to create a Evento.
     * @example
     * // Create one Evento
     * const Evento = await prisma.evento.create({
     *   data: {
     *     // ... data to create a Evento
     *   }
     * })
     * 
     */
    create<T extends EventoCreateArgs>(args: SelectSubset<T, EventoCreateArgs<ExtArgs>>): Prisma__EventoClient<$Result.GetResult<Prisma.$EventoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Eventos.
     * @param {EventoCreateManyArgs} args - Arguments to create many Eventos.
     * @example
     * // Create many Eventos
     * const evento = await prisma.evento.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventoCreateManyArgs>(args?: SelectSubset<T, EventoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Eventos and returns the data saved in the database.
     * @param {EventoCreateManyAndReturnArgs} args - Arguments to create many Eventos.
     * @example
     * // Create many Eventos
     * const evento = await prisma.evento.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Eventos and only return the `id`
     * const eventoWithIdOnly = await prisma.evento.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EventoCreateManyAndReturnArgs>(args?: SelectSubset<T, EventoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Evento.
     * @param {EventoDeleteArgs} args - Arguments to delete one Evento.
     * @example
     * // Delete one Evento
     * const Evento = await prisma.evento.delete({
     *   where: {
     *     // ... filter to delete one Evento
     *   }
     * })
     * 
     */
    delete<T extends EventoDeleteArgs>(args: SelectSubset<T, EventoDeleteArgs<ExtArgs>>): Prisma__EventoClient<$Result.GetResult<Prisma.$EventoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Evento.
     * @param {EventoUpdateArgs} args - Arguments to update one Evento.
     * @example
     * // Update one Evento
     * const evento = await prisma.evento.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EventoUpdateArgs>(args: SelectSubset<T, EventoUpdateArgs<ExtArgs>>): Prisma__EventoClient<$Result.GetResult<Prisma.$EventoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Eventos.
     * @param {EventoDeleteManyArgs} args - Arguments to filter Eventos to delete.
     * @example
     * // Delete a few Eventos
     * const { count } = await prisma.evento.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventoDeleteManyArgs>(args?: SelectSubset<T, EventoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Eventos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Eventos
     * const evento = await prisma.evento.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EventoUpdateManyArgs>(args: SelectSubset<T, EventoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Eventos and returns the data updated in the database.
     * @param {EventoUpdateManyAndReturnArgs} args - Arguments to update many Eventos.
     * @example
     * // Update many Eventos
     * const evento = await prisma.evento.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Eventos and only return the `id`
     * const eventoWithIdOnly = await prisma.evento.updateManyAndReturn({
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
    updateManyAndReturn<T extends EventoUpdateManyAndReturnArgs>(args: SelectSubset<T, EventoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Evento.
     * @param {EventoUpsertArgs} args - Arguments to update or create a Evento.
     * @example
     * // Update or create a Evento
     * const evento = await prisma.evento.upsert({
     *   create: {
     *     // ... data to create a Evento
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Evento we want to update
     *   }
     * })
     */
    upsert<T extends EventoUpsertArgs>(args: SelectSubset<T, EventoUpsertArgs<ExtArgs>>): Prisma__EventoClient<$Result.GetResult<Prisma.$EventoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Eventos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventoCountArgs} args - Arguments to filter Eventos to count.
     * @example
     * // Count the number of Eventos
     * const count = await prisma.evento.count({
     *   where: {
     *     // ... the filter for the Eventos we want to count
     *   }
     * })
    **/
    count<T extends EventoCountArgs>(
      args?: Subset<T, EventoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Evento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EventoAggregateArgs>(args: Subset<T, EventoAggregateArgs>): Prisma.PrismaPromise<GetEventoAggregateType<T>>

    /**
     * Group by Evento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventoGroupByArgs} args - Group by arguments.
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
      T extends EventoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventoGroupByArgs['orderBy'] }
        : { orderBy?: EventoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EventoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Evento model
   */
  readonly fields: EventoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Evento.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    participantes<T extends Evento$participantesArgs<ExtArgs> = {}>(args?: Subset<T, Evento$participantesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ColaboradorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Evento model
   */
  interface EventoFieldRefs {
    readonly id: FieldRef<"Evento", 'String'>
    readonly nome: FieldRef<"Evento", 'String'>
    readonly descricao: FieldRef<"Evento", 'String'>
    readonly localizacao: FieldRef<"Evento", 'String'>
    readonly categoria: FieldRef<"Evento", 'String'>
    readonly status: FieldRef<"Evento", 'StatusEvento'>
    readonly prioridade: FieldRef<"Evento", 'Prioridade'>
    readonly dataInicio: FieldRef<"Evento", 'DateTime'>
    readonly dataFim: FieldRef<"Evento", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Evento findUnique
   */
  export type EventoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evento
     */
    select?: EventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evento
     */
    omit?: EventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventoInclude<ExtArgs> | null
    /**
     * Filter, which Evento to fetch.
     */
    where: EventoWhereUniqueInput
  }

  /**
   * Evento findUniqueOrThrow
   */
  export type EventoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evento
     */
    select?: EventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evento
     */
    omit?: EventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventoInclude<ExtArgs> | null
    /**
     * Filter, which Evento to fetch.
     */
    where: EventoWhereUniqueInput
  }

  /**
   * Evento findFirst
   */
  export type EventoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evento
     */
    select?: EventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evento
     */
    omit?: EventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventoInclude<ExtArgs> | null
    /**
     * Filter, which Evento to fetch.
     */
    where?: EventoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Eventos to fetch.
     */
    orderBy?: EventoOrderByWithRelationInput | EventoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Eventos.
     */
    cursor?: EventoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Eventos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Eventos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Eventos.
     */
    distinct?: EventoScalarFieldEnum | EventoScalarFieldEnum[]
  }

  /**
   * Evento findFirstOrThrow
   */
  export type EventoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evento
     */
    select?: EventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evento
     */
    omit?: EventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventoInclude<ExtArgs> | null
    /**
     * Filter, which Evento to fetch.
     */
    where?: EventoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Eventos to fetch.
     */
    orderBy?: EventoOrderByWithRelationInput | EventoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Eventos.
     */
    cursor?: EventoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Eventos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Eventos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Eventos.
     */
    distinct?: EventoScalarFieldEnum | EventoScalarFieldEnum[]
  }

  /**
   * Evento findMany
   */
  export type EventoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evento
     */
    select?: EventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evento
     */
    omit?: EventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventoInclude<ExtArgs> | null
    /**
     * Filter, which Eventos to fetch.
     */
    where?: EventoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Eventos to fetch.
     */
    orderBy?: EventoOrderByWithRelationInput | EventoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Eventos.
     */
    cursor?: EventoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Eventos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Eventos.
     */
    skip?: number
    distinct?: EventoScalarFieldEnum | EventoScalarFieldEnum[]
  }

  /**
   * Evento create
   */
  export type EventoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evento
     */
    select?: EventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evento
     */
    omit?: EventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventoInclude<ExtArgs> | null
    /**
     * The data needed to create a Evento.
     */
    data: XOR<EventoCreateInput, EventoUncheckedCreateInput>
  }

  /**
   * Evento createMany
   */
  export type EventoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Eventos.
     */
    data: EventoCreateManyInput | EventoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Evento createManyAndReturn
   */
  export type EventoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evento
     */
    select?: EventoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Evento
     */
    omit?: EventoOmit<ExtArgs> | null
    /**
     * The data used to create many Eventos.
     */
    data: EventoCreateManyInput | EventoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Evento update
   */
  export type EventoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evento
     */
    select?: EventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evento
     */
    omit?: EventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventoInclude<ExtArgs> | null
    /**
     * The data needed to update a Evento.
     */
    data: XOR<EventoUpdateInput, EventoUncheckedUpdateInput>
    /**
     * Choose, which Evento to update.
     */
    where: EventoWhereUniqueInput
  }

  /**
   * Evento updateMany
   */
  export type EventoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Eventos.
     */
    data: XOR<EventoUpdateManyMutationInput, EventoUncheckedUpdateManyInput>
    /**
     * Filter which Eventos to update
     */
    where?: EventoWhereInput
    /**
     * Limit how many Eventos to update.
     */
    limit?: number
  }

  /**
   * Evento updateManyAndReturn
   */
  export type EventoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evento
     */
    select?: EventoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Evento
     */
    omit?: EventoOmit<ExtArgs> | null
    /**
     * The data used to update Eventos.
     */
    data: XOR<EventoUpdateManyMutationInput, EventoUncheckedUpdateManyInput>
    /**
     * Filter which Eventos to update
     */
    where?: EventoWhereInput
    /**
     * Limit how many Eventos to update.
     */
    limit?: number
  }

  /**
   * Evento upsert
   */
  export type EventoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evento
     */
    select?: EventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evento
     */
    omit?: EventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventoInclude<ExtArgs> | null
    /**
     * The filter to search for the Evento to update in case it exists.
     */
    where: EventoWhereUniqueInput
    /**
     * In case the Evento found by the `where` argument doesn't exist, create a new Evento with this data.
     */
    create: XOR<EventoCreateInput, EventoUncheckedCreateInput>
    /**
     * In case the Evento was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventoUpdateInput, EventoUncheckedUpdateInput>
  }

  /**
   * Evento delete
   */
  export type EventoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evento
     */
    select?: EventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evento
     */
    omit?: EventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventoInclude<ExtArgs> | null
    /**
     * Filter which Evento to delete.
     */
    where: EventoWhereUniqueInput
  }

  /**
   * Evento deleteMany
   */
  export type EventoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Eventos to delete
     */
    where?: EventoWhereInput
    /**
     * Limit how many Eventos to delete.
     */
    limit?: number
  }

  /**
   * Evento.participantes
   */
  export type Evento$participantesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Colaborador
     */
    select?: ColaboradorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Colaborador
     */
    omit?: ColaboradorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColaboradorInclude<ExtArgs> | null
    where?: ColaboradorWhereInput
    orderBy?: ColaboradorOrderByWithRelationInput | ColaboradorOrderByWithRelationInput[]
    cursor?: ColaboradorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ColaboradorScalarFieldEnum | ColaboradorScalarFieldEnum[]
  }

  /**
   * Evento without action
   */
  export type EventoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evento
     */
    select?: EventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evento
     */
    omit?: EventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventoInclude<ExtArgs> | null
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
    userName: string | null
    name: string | null
    email: string | null
    password: string | null
    role: $Enums.UserRole | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    userName: string | null
    name: string | null
    email: string | null
    password: string | null
    role: $Enums.UserRole | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    userName: number
    name: number
    email: number
    password: number
    role: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    userName?: true
    name?: true
    email?: true
    password?: true
    role?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    userName?: true
    name?: true
    email?: true
    password?: true
    role?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    userName?: true
    name?: true
    email?: true
    password?: true
    role?: true
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
    userName: string
    name: string
    email: string
    password: string
    role: $Enums.UserRole
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
    userName?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    atendimentos?: boolean | User$atendimentosArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userName?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userName?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    userName?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userName" | "name" | "email" | "password" | "role", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    atendimentos?: boolean | User$atendimentosArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      atendimentos: Prisma.$AtendimentoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userName: string
      name: string
      email: string
      password: string
      role: $Enums.UserRole
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
    atendimentos<T extends User$atendimentosArgs<ExtArgs> = {}>(args?: Subset<T, User$atendimentosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AtendimentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly userName: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
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
   * User.atendimentos
   */
  export type User$atendimentosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atendimento
     */
    select?: AtendimentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Atendimento
     */
    omit?: AtendimentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtendimentoInclude<ExtArgs> | null
    where?: AtendimentoWhereInput
    orderBy?: AtendimentoOrderByWithRelationInput | AtendimentoOrderByWithRelationInput[]
    cursor?: AtendimentoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AtendimentoScalarFieldEnum | AtendimentoScalarFieldEnum[]
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
   * Model Atendimento
   */

  export type AggregateAtendimento = {
    _count: AtendimentoCountAggregateOutputType | null
    _min: AtendimentoMinAggregateOutputType | null
    _max: AtendimentoMaxAggregateOutputType | null
  }

  export type AtendimentoMinAggregateOutputType = {
    id: string | null
    descricao: string | null
    tipo: $Enums.AtendimentoTipo | null
    receitaId: string | null
    colaboradorId: string | null
    userId: string | null
    criadoEm: Date | null
  }

  export type AtendimentoMaxAggregateOutputType = {
    id: string | null
    descricao: string | null
    tipo: $Enums.AtendimentoTipo | null
    receitaId: string | null
    colaboradorId: string | null
    userId: string | null
    criadoEm: Date | null
  }

  export type AtendimentoCountAggregateOutputType = {
    id: number
    descricao: number
    tipo: number
    receitaId: number
    colaboradorId: number
    userId: number
    criadoEm: number
    _all: number
  }


  export type AtendimentoMinAggregateInputType = {
    id?: true
    descricao?: true
    tipo?: true
    receitaId?: true
    colaboradorId?: true
    userId?: true
    criadoEm?: true
  }

  export type AtendimentoMaxAggregateInputType = {
    id?: true
    descricao?: true
    tipo?: true
    receitaId?: true
    colaboradorId?: true
    userId?: true
    criadoEm?: true
  }

  export type AtendimentoCountAggregateInputType = {
    id?: true
    descricao?: true
    tipo?: true
    receitaId?: true
    colaboradorId?: true
    userId?: true
    criadoEm?: true
    _all?: true
  }

  export type AtendimentoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Atendimento to aggregate.
     */
    where?: AtendimentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Atendimentos to fetch.
     */
    orderBy?: AtendimentoOrderByWithRelationInput | AtendimentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AtendimentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Atendimentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Atendimentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Atendimentos
    **/
    _count?: true | AtendimentoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AtendimentoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AtendimentoMaxAggregateInputType
  }

  export type GetAtendimentoAggregateType<T extends AtendimentoAggregateArgs> = {
        [P in keyof T & keyof AggregateAtendimento]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAtendimento[P]>
      : GetScalarType<T[P], AggregateAtendimento[P]>
  }




  export type AtendimentoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AtendimentoWhereInput
    orderBy?: AtendimentoOrderByWithAggregationInput | AtendimentoOrderByWithAggregationInput[]
    by: AtendimentoScalarFieldEnum[] | AtendimentoScalarFieldEnum
    having?: AtendimentoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AtendimentoCountAggregateInputType | true
    _min?: AtendimentoMinAggregateInputType
    _max?: AtendimentoMaxAggregateInputType
  }

  export type AtendimentoGroupByOutputType = {
    id: string
    descricao: string
    tipo: $Enums.AtendimentoTipo
    receitaId: string | null
    colaboradorId: string | null
    userId: string
    criadoEm: Date
    _count: AtendimentoCountAggregateOutputType | null
    _min: AtendimentoMinAggregateOutputType | null
    _max: AtendimentoMaxAggregateOutputType | null
  }

  type GetAtendimentoGroupByPayload<T extends AtendimentoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AtendimentoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AtendimentoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AtendimentoGroupByOutputType[P]>
            : GetScalarType<T[P], AtendimentoGroupByOutputType[P]>
        }
      >
    >


  export type AtendimentoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    descricao?: boolean
    tipo?: boolean
    receitaId?: boolean
    colaboradorId?: boolean
    userId?: boolean
    criadoEm?: boolean
    receita?: boolean | Atendimento$receitaArgs<ExtArgs>
    projeto?: boolean | Atendimento$projetoArgs<ExtArgs>
    demanda?: boolean | Atendimento$demandaArgs<ExtArgs>
    colaborador?: boolean | Atendimento$colaboradorArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | AtendimentoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["atendimento"]>

  export type AtendimentoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    descricao?: boolean
    tipo?: boolean
    receitaId?: boolean
    colaboradorId?: boolean
    userId?: boolean
    criadoEm?: boolean
    receita?: boolean | Atendimento$receitaArgs<ExtArgs>
    colaborador?: boolean | Atendimento$colaboradorArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["atendimento"]>

  export type AtendimentoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    descricao?: boolean
    tipo?: boolean
    receitaId?: boolean
    colaboradorId?: boolean
    userId?: boolean
    criadoEm?: boolean
    receita?: boolean | Atendimento$receitaArgs<ExtArgs>
    colaborador?: boolean | Atendimento$colaboradorArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["atendimento"]>

  export type AtendimentoSelectScalar = {
    id?: boolean
    descricao?: boolean
    tipo?: boolean
    receitaId?: boolean
    colaboradorId?: boolean
    userId?: boolean
    criadoEm?: boolean
  }

  export type AtendimentoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "descricao" | "tipo" | "receitaId" | "colaboradorId" | "userId" | "criadoEm", ExtArgs["result"]["atendimento"]>
  export type AtendimentoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    receita?: boolean | Atendimento$receitaArgs<ExtArgs>
    projeto?: boolean | Atendimento$projetoArgs<ExtArgs>
    demanda?: boolean | Atendimento$demandaArgs<ExtArgs>
    colaborador?: boolean | Atendimento$colaboradorArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | AtendimentoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AtendimentoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    receita?: boolean | Atendimento$receitaArgs<ExtArgs>
    colaborador?: boolean | Atendimento$colaboradorArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AtendimentoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    receita?: boolean | Atendimento$receitaArgs<ExtArgs>
    colaborador?: boolean | Atendimento$colaboradorArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AtendimentoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Atendimento"
    objects: {
      receita: Prisma.$ReceitaPayload<ExtArgs> | null
      projeto: Prisma.$ProjetoPayload<ExtArgs>[]
      demanda: Prisma.$DemandaPayload<ExtArgs>[]
      colaborador: Prisma.$ColaboradorPayload<ExtArgs> | null
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      descricao: string
      tipo: $Enums.AtendimentoTipo
      receitaId: string | null
      colaboradorId: string | null
      userId: string
      criadoEm: Date
    }, ExtArgs["result"]["atendimento"]>
    composites: {}
  }

  type AtendimentoGetPayload<S extends boolean | null | undefined | AtendimentoDefaultArgs> = $Result.GetResult<Prisma.$AtendimentoPayload, S>

  type AtendimentoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AtendimentoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AtendimentoCountAggregateInputType | true
    }

  export interface AtendimentoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Atendimento'], meta: { name: 'Atendimento' } }
    /**
     * Find zero or one Atendimento that matches the filter.
     * @param {AtendimentoFindUniqueArgs} args - Arguments to find a Atendimento
     * @example
     * // Get one Atendimento
     * const atendimento = await prisma.atendimento.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AtendimentoFindUniqueArgs>(args: SelectSubset<T, AtendimentoFindUniqueArgs<ExtArgs>>): Prisma__AtendimentoClient<$Result.GetResult<Prisma.$AtendimentoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Atendimento that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AtendimentoFindUniqueOrThrowArgs} args - Arguments to find a Atendimento
     * @example
     * // Get one Atendimento
     * const atendimento = await prisma.atendimento.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AtendimentoFindUniqueOrThrowArgs>(args: SelectSubset<T, AtendimentoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AtendimentoClient<$Result.GetResult<Prisma.$AtendimentoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Atendimento that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtendimentoFindFirstArgs} args - Arguments to find a Atendimento
     * @example
     * // Get one Atendimento
     * const atendimento = await prisma.atendimento.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AtendimentoFindFirstArgs>(args?: SelectSubset<T, AtendimentoFindFirstArgs<ExtArgs>>): Prisma__AtendimentoClient<$Result.GetResult<Prisma.$AtendimentoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Atendimento that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtendimentoFindFirstOrThrowArgs} args - Arguments to find a Atendimento
     * @example
     * // Get one Atendimento
     * const atendimento = await prisma.atendimento.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AtendimentoFindFirstOrThrowArgs>(args?: SelectSubset<T, AtendimentoFindFirstOrThrowArgs<ExtArgs>>): Prisma__AtendimentoClient<$Result.GetResult<Prisma.$AtendimentoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Atendimentos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtendimentoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Atendimentos
     * const atendimentos = await prisma.atendimento.findMany()
     * 
     * // Get first 10 Atendimentos
     * const atendimentos = await prisma.atendimento.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const atendimentoWithIdOnly = await prisma.atendimento.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AtendimentoFindManyArgs>(args?: SelectSubset<T, AtendimentoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AtendimentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Atendimento.
     * @param {AtendimentoCreateArgs} args - Arguments to create a Atendimento.
     * @example
     * // Create one Atendimento
     * const Atendimento = await prisma.atendimento.create({
     *   data: {
     *     // ... data to create a Atendimento
     *   }
     * })
     * 
     */
    create<T extends AtendimentoCreateArgs>(args: SelectSubset<T, AtendimentoCreateArgs<ExtArgs>>): Prisma__AtendimentoClient<$Result.GetResult<Prisma.$AtendimentoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Atendimentos.
     * @param {AtendimentoCreateManyArgs} args - Arguments to create many Atendimentos.
     * @example
     * // Create many Atendimentos
     * const atendimento = await prisma.atendimento.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AtendimentoCreateManyArgs>(args?: SelectSubset<T, AtendimentoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Atendimentos and returns the data saved in the database.
     * @param {AtendimentoCreateManyAndReturnArgs} args - Arguments to create many Atendimentos.
     * @example
     * // Create many Atendimentos
     * const atendimento = await prisma.atendimento.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Atendimentos and only return the `id`
     * const atendimentoWithIdOnly = await prisma.atendimento.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AtendimentoCreateManyAndReturnArgs>(args?: SelectSubset<T, AtendimentoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AtendimentoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Atendimento.
     * @param {AtendimentoDeleteArgs} args - Arguments to delete one Atendimento.
     * @example
     * // Delete one Atendimento
     * const Atendimento = await prisma.atendimento.delete({
     *   where: {
     *     // ... filter to delete one Atendimento
     *   }
     * })
     * 
     */
    delete<T extends AtendimentoDeleteArgs>(args: SelectSubset<T, AtendimentoDeleteArgs<ExtArgs>>): Prisma__AtendimentoClient<$Result.GetResult<Prisma.$AtendimentoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Atendimento.
     * @param {AtendimentoUpdateArgs} args - Arguments to update one Atendimento.
     * @example
     * // Update one Atendimento
     * const atendimento = await prisma.atendimento.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AtendimentoUpdateArgs>(args: SelectSubset<T, AtendimentoUpdateArgs<ExtArgs>>): Prisma__AtendimentoClient<$Result.GetResult<Prisma.$AtendimentoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Atendimentos.
     * @param {AtendimentoDeleteManyArgs} args - Arguments to filter Atendimentos to delete.
     * @example
     * // Delete a few Atendimentos
     * const { count } = await prisma.atendimento.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AtendimentoDeleteManyArgs>(args?: SelectSubset<T, AtendimentoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Atendimentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtendimentoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Atendimentos
     * const atendimento = await prisma.atendimento.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AtendimentoUpdateManyArgs>(args: SelectSubset<T, AtendimentoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Atendimentos and returns the data updated in the database.
     * @param {AtendimentoUpdateManyAndReturnArgs} args - Arguments to update many Atendimentos.
     * @example
     * // Update many Atendimentos
     * const atendimento = await prisma.atendimento.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Atendimentos and only return the `id`
     * const atendimentoWithIdOnly = await prisma.atendimento.updateManyAndReturn({
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
    updateManyAndReturn<T extends AtendimentoUpdateManyAndReturnArgs>(args: SelectSubset<T, AtendimentoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AtendimentoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Atendimento.
     * @param {AtendimentoUpsertArgs} args - Arguments to update or create a Atendimento.
     * @example
     * // Update or create a Atendimento
     * const atendimento = await prisma.atendimento.upsert({
     *   create: {
     *     // ... data to create a Atendimento
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Atendimento we want to update
     *   }
     * })
     */
    upsert<T extends AtendimentoUpsertArgs>(args: SelectSubset<T, AtendimentoUpsertArgs<ExtArgs>>): Prisma__AtendimentoClient<$Result.GetResult<Prisma.$AtendimentoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Atendimentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtendimentoCountArgs} args - Arguments to filter Atendimentos to count.
     * @example
     * // Count the number of Atendimentos
     * const count = await prisma.atendimento.count({
     *   where: {
     *     // ... the filter for the Atendimentos we want to count
     *   }
     * })
    **/
    count<T extends AtendimentoCountArgs>(
      args?: Subset<T, AtendimentoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AtendimentoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Atendimento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtendimentoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AtendimentoAggregateArgs>(args: Subset<T, AtendimentoAggregateArgs>): Prisma.PrismaPromise<GetAtendimentoAggregateType<T>>

    /**
     * Group by Atendimento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtendimentoGroupByArgs} args - Group by arguments.
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
      T extends AtendimentoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AtendimentoGroupByArgs['orderBy'] }
        : { orderBy?: AtendimentoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AtendimentoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAtendimentoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Atendimento model
   */
  readonly fields: AtendimentoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Atendimento.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AtendimentoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    receita<T extends Atendimento$receitaArgs<ExtArgs> = {}>(args?: Subset<T, Atendimento$receitaArgs<ExtArgs>>): Prisma__ReceitaClient<$Result.GetResult<Prisma.$ReceitaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    projeto<T extends Atendimento$projetoArgs<ExtArgs> = {}>(args?: Subset<T, Atendimento$projetoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjetoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    demanda<T extends Atendimento$demandaArgs<ExtArgs> = {}>(args?: Subset<T, Atendimento$demandaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DemandaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    colaborador<T extends Atendimento$colaboradorArgs<ExtArgs> = {}>(args?: Subset<T, Atendimento$colaboradorArgs<ExtArgs>>): Prisma__ColaboradorClient<$Result.GetResult<Prisma.$ColaboradorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Atendimento model
   */
  interface AtendimentoFieldRefs {
    readonly id: FieldRef<"Atendimento", 'String'>
    readonly descricao: FieldRef<"Atendimento", 'String'>
    readonly tipo: FieldRef<"Atendimento", 'AtendimentoTipo'>
    readonly receitaId: FieldRef<"Atendimento", 'String'>
    readonly colaboradorId: FieldRef<"Atendimento", 'String'>
    readonly userId: FieldRef<"Atendimento", 'String'>
    readonly criadoEm: FieldRef<"Atendimento", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Atendimento findUnique
   */
  export type AtendimentoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atendimento
     */
    select?: AtendimentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Atendimento
     */
    omit?: AtendimentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtendimentoInclude<ExtArgs> | null
    /**
     * Filter, which Atendimento to fetch.
     */
    where: AtendimentoWhereUniqueInput
  }

  /**
   * Atendimento findUniqueOrThrow
   */
  export type AtendimentoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atendimento
     */
    select?: AtendimentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Atendimento
     */
    omit?: AtendimentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtendimentoInclude<ExtArgs> | null
    /**
     * Filter, which Atendimento to fetch.
     */
    where: AtendimentoWhereUniqueInput
  }

  /**
   * Atendimento findFirst
   */
  export type AtendimentoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atendimento
     */
    select?: AtendimentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Atendimento
     */
    omit?: AtendimentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtendimentoInclude<ExtArgs> | null
    /**
     * Filter, which Atendimento to fetch.
     */
    where?: AtendimentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Atendimentos to fetch.
     */
    orderBy?: AtendimentoOrderByWithRelationInput | AtendimentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Atendimentos.
     */
    cursor?: AtendimentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Atendimentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Atendimentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Atendimentos.
     */
    distinct?: AtendimentoScalarFieldEnum | AtendimentoScalarFieldEnum[]
  }

  /**
   * Atendimento findFirstOrThrow
   */
  export type AtendimentoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atendimento
     */
    select?: AtendimentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Atendimento
     */
    omit?: AtendimentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtendimentoInclude<ExtArgs> | null
    /**
     * Filter, which Atendimento to fetch.
     */
    where?: AtendimentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Atendimentos to fetch.
     */
    orderBy?: AtendimentoOrderByWithRelationInput | AtendimentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Atendimentos.
     */
    cursor?: AtendimentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Atendimentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Atendimentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Atendimentos.
     */
    distinct?: AtendimentoScalarFieldEnum | AtendimentoScalarFieldEnum[]
  }

  /**
   * Atendimento findMany
   */
  export type AtendimentoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atendimento
     */
    select?: AtendimentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Atendimento
     */
    omit?: AtendimentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtendimentoInclude<ExtArgs> | null
    /**
     * Filter, which Atendimentos to fetch.
     */
    where?: AtendimentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Atendimentos to fetch.
     */
    orderBy?: AtendimentoOrderByWithRelationInput | AtendimentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Atendimentos.
     */
    cursor?: AtendimentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Atendimentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Atendimentos.
     */
    skip?: number
    distinct?: AtendimentoScalarFieldEnum | AtendimentoScalarFieldEnum[]
  }

  /**
   * Atendimento create
   */
  export type AtendimentoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atendimento
     */
    select?: AtendimentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Atendimento
     */
    omit?: AtendimentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtendimentoInclude<ExtArgs> | null
    /**
     * The data needed to create a Atendimento.
     */
    data: XOR<AtendimentoCreateInput, AtendimentoUncheckedCreateInput>
  }

  /**
   * Atendimento createMany
   */
  export type AtendimentoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Atendimentos.
     */
    data: AtendimentoCreateManyInput | AtendimentoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Atendimento createManyAndReturn
   */
  export type AtendimentoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atendimento
     */
    select?: AtendimentoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Atendimento
     */
    omit?: AtendimentoOmit<ExtArgs> | null
    /**
     * The data used to create many Atendimentos.
     */
    data: AtendimentoCreateManyInput | AtendimentoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtendimentoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Atendimento update
   */
  export type AtendimentoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atendimento
     */
    select?: AtendimentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Atendimento
     */
    omit?: AtendimentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtendimentoInclude<ExtArgs> | null
    /**
     * The data needed to update a Atendimento.
     */
    data: XOR<AtendimentoUpdateInput, AtendimentoUncheckedUpdateInput>
    /**
     * Choose, which Atendimento to update.
     */
    where: AtendimentoWhereUniqueInput
  }

  /**
   * Atendimento updateMany
   */
  export type AtendimentoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Atendimentos.
     */
    data: XOR<AtendimentoUpdateManyMutationInput, AtendimentoUncheckedUpdateManyInput>
    /**
     * Filter which Atendimentos to update
     */
    where?: AtendimentoWhereInput
    /**
     * Limit how many Atendimentos to update.
     */
    limit?: number
  }

  /**
   * Atendimento updateManyAndReturn
   */
  export type AtendimentoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atendimento
     */
    select?: AtendimentoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Atendimento
     */
    omit?: AtendimentoOmit<ExtArgs> | null
    /**
     * The data used to update Atendimentos.
     */
    data: XOR<AtendimentoUpdateManyMutationInput, AtendimentoUncheckedUpdateManyInput>
    /**
     * Filter which Atendimentos to update
     */
    where?: AtendimentoWhereInput
    /**
     * Limit how many Atendimentos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtendimentoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Atendimento upsert
   */
  export type AtendimentoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atendimento
     */
    select?: AtendimentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Atendimento
     */
    omit?: AtendimentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtendimentoInclude<ExtArgs> | null
    /**
     * The filter to search for the Atendimento to update in case it exists.
     */
    where: AtendimentoWhereUniqueInput
    /**
     * In case the Atendimento found by the `where` argument doesn't exist, create a new Atendimento with this data.
     */
    create: XOR<AtendimentoCreateInput, AtendimentoUncheckedCreateInput>
    /**
     * In case the Atendimento was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AtendimentoUpdateInput, AtendimentoUncheckedUpdateInput>
  }

  /**
   * Atendimento delete
   */
  export type AtendimentoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atendimento
     */
    select?: AtendimentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Atendimento
     */
    omit?: AtendimentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtendimentoInclude<ExtArgs> | null
    /**
     * Filter which Atendimento to delete.
     */
    where: AtendimentoWhereUniqueInput
  }

  /**
   * Atendimento deleteMany
   */
  export type AtendimentoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Atendimentos to delete
     */
    where?: AtendimentoWhereInput
    /**
     * Limit how many Atendimentos to delete.
     */
    limit?: number
  }

  /**
   * Atendimento.receita
   */
  export type Atendimento$receitaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Receita
     */
    select?: ReceitaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Receita
     */
    omit?: ReceitaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceitaInclude<ExtArgs> | null
    where?: ReceitaWhereInput
  }

  /**
   * Atendimento.projeto
   */
  export type Atendimento$projetoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projeto
     */
    select?: ProjetoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Projeto
     */
    omit?: ProjetoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjetoInclude<ExtArgs> | null
    where?: ProjetoWhereInput
    orderBy?: ProjetoOrderByWithRelationInput | ProjetoOrderByWithRelationInput[]
    cursor?: ProjetoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjetoScalarFieldEnum | ProjetoScalarFieldEnum[]
  }

  /**
   * Atendimento.demanda
   */
  export type Atendimento$demandaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Demanda
     */
    select?: DemandaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Demanda
     */
    omit?: DemandaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DemandaInclude<ExtArgs> | null
    where?: DemandaWhereInput
    orderBy?: DemandaOrderByWithRelationInput | DemandaOrderByWithRelationInput[]
    cursor?: DemandaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DemandaScalarFieldEnum | DemandaScalarFieldEnum[]
  }

  /**
   * Atendimento.colaborador
   */
  export type Atendimento$colaboradorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Colaborador
     */
    select?: ColaboradorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Colaborador
     */
    omit?: ColaboradorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColaboradorInclude<ExtArgs> | null
    where?: ColaboradorWhereInput
  }

  /**
   * Atendimento without action
   */
  export type AtendimentoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atendimento
     */
    select?: AtendimentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Atendimento
     */
    omit?: AtendimentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtendimentoInclude<ExtArgs> | null
  }


  /**
   * Model Logging
   */

  export type AggregateLogging = {
    _count: LoggingCountAggregateOutputType | null
    _min: LoggingMinAggregateOutputType | null
    _max: LoggingMaxAggregateOutputType | null
  }

  export type LoggingMinAggregateOutputType = {
    id: string | null
    userName: string | null
    action: string | null
    lastChange: Date | null
  }

  export type LoggingMaxAggregateOutputType = {
    id: string | null
    userName: string | null
    action: string | null
    lastChange: Date | null
  }

  export type LoggingCountAggregateOutputType = {
    id: number
    userName: number
    action: number
    lastChange: number
    updates: number
    _all: number
  }


  export type LoggingMinAggregateInputType = {
    id?: true
    userName?: true
    action?: true
    lastChange?: true
  }

  export type LoggingMaxAggregateInputType = {
    id?: true
    userName?: true
    action?: true
    lastChange?: true
  }

  export type LoggingCountAggregateInputType = {
    id?: true
    userName?: true
    action?: true
    lastChange?: true
    updates?: true
    _all?: true
  }

  export type LoggingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Logging to aggregate.
     */
    where?: LoggingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Loggings to fetch.
     */
    orderBy?: LoggingOrderByWithRelationInput | LoggingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LoggingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Loggings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Loggings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Loggings
    **/
    _count?: true | LoggingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LoggingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LoggingMaxAggregateInputType
  }

  export type GetLoggingAggregateType<T extends LoggingAggregateArgs> = {
        [P in keyof T & keyof AggregateLogging]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLogging[P]>
      : GetScalarType<T[P], AggregateLogging[P]>
  }




  export type LoggingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LoggingWhereInput
    orderBy?: LoggingOrderByWithAggregationInput | LoggingOrderByWithAggregationInput[]
    by: LoggingScalarFieldEnum[] | LoggingScalarFieldEnum
    having?: LoggingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LoggingCountAggregateInputType | true
    _min?: LoggingMinAggregateInputType
    _max?: LoggingMaxAggregateInputType
  }

  export type LoggingGroupByOutputType = {
    id: string
    userName: string
    action: string
    lastChange: Date
    updates: string[]
    _count: LoggingCountAggregateOutputType | null
    _min: LoggingMinAggregateOutputType | null
    _max: LoggingMaxAggregateOutputType | null
  }

  type GetLoggingGroupByPayload<T extends LoggingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LoggingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LoggingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LoggingGroupByOutputType[P]>
            : GetScalarType<T[P], LoggingGroupByOutputType[P]>
        }
      >
    >


  export type LoggingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userName?: boolean
    action?: boolean
    lastChange?: boolean
    updates?: boolean
  }, ExtArgs["result"]["logging"]>

  export type LoggingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userName?: boolean
    action?: boolean
    lastChange?: boolean
    updates?: boolean
  }, ExtArgs["result"]["logging"]>

  export type LoggingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userName?: boolean
    action?: boolean
    lastChange?: boolean
    updates?: boolean
  }, ExtArgs["result"]["logging"]>

  export type LoggingSelectScalar = {
    id?: boolean
    userName?: boolean
    action?: boolean
    lastChange?: boolean
    updates?: boolean
  }

  export type LoggingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userName" | "action" | "lastChange" | "updates", ExtArgs["result"]["logging"]>

  export type $LoggingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Logging"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userName: string
      action: string
      lastChange: Date
      updates: string[]
    }, ExtArgs["result"]["logging"]>
    composites: {}
  }

  type LoggingGetPayload<S extends boolean | null | undefined | LoggingDefaultArgs> = $Result.GetResult<Prisma.$LoggingPayload, S>

  type LoggingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LoggingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LoggingCountAggregateInputType | true
    }

  export interface LoggingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Logging'], meta: { name: 'Logging' } }
    /**
     * Find zero or one Logging that matches the filter.
     * @param {LoggingFindUniqueArgs} args - Arguments to find a Logging
     * @example
     * // Get one Logging
     * const logging = await prisma.logging.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LoggingFindUniqueArgs>(args: SelectSubset<T, LoggingFindUniqueArgs<ExtArgs>>): Prisma__LoggingClient<$Result.GetResult<Prisma.$LoggingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Logging that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LoggingFindUniqueOrThrowArgs} args - Arguments to find a Logging
     * @example
     * // Get one Logging
     * const logging = await prisma.logging.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LoggingFindUniqueOrThrowArgs>(args: SelectSubset<T, LoggingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LoggingClient<$Result.GetResult<Prisma.$LoggingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Logging that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoggingFindFirstArgs} args - Arguments to find a Logging
     * @example
     * // Get one Logging
     * const logging = await prisma.logging.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LoggingFindFirstArgs>(args?: SelectSubset<T, LoggingFindFirstArgs<ExtArgs>>): Prisma__LoggingClient<$Result.GetResult<Prisma.$LoggingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Logging that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoggingFindFirstOrThrowArgs} args - Arguments to find a Logging
     * @example
     * // Get one Logging
     * const logging = await prisma.logging.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LoggingFindFirstOrThrowArgs>(args?: SelectSubset<T, LoggingFindFirstOrThrowArgs<ExtArgs>>): Prisma__LoggingClient<$Result.GetResult<Prisma.$LoggingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Loggings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoggingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Loggings
     * const loggings = await prisma.logging.findMany()
     * 
     * // Get first 10 Loggings
     * const loggings = await prisma.logging.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const loggingWithIdOnly = await prisma.logging.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LoggingFindManyArgs>(args?: SelectSubset<T, LoggingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LoggingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Logging.
     * @param {LoggingCreateArgs} args - Arguments to create a Logging.
     * @example
     * // Create one Logging
     * const Logging = await prisma.logging.create({
     *   data: {
     *     // ... data to create a Logging
     *   }
     * })
     * 
     */
    create<T extends LoggingCreateArgs>(args: SelectSubset<T, LoggingCreateArgs<ExtArgs>>): Prisma__LoggingClient<$Result.GetResult<Prisma.$LoggingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Loggings.
     * @param {LoggingCreateManyArgs} args - Arguments to create many Loggings.
     * @example
     * // Create many Loggings
     * const logging = await prisma.logging.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LoggingCreateManyArgs>(args?: SelectSubset<T, LoggingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Loggings and returns the data saved in the database.
     * @param {LoggingCreateManyAndReturnArgs} args - Arguments to create many Loggings.
     * @example
     * // Create many Loggings
     * const logging = await prisma.logging.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Loggings and only return the `id`
     * const loggingWithIdOnly = await prisma.logging.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LoggingCreateManyAndReturnArgs>(args?: SelectSubset<T, LoggingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LoggingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Logging.
     * @param {LoggingDeleteArgs} args - Arguments to delete one Logging.
     * @example
     * // Delete one Logging
     * const Logging = await prisma.logging.delete({
     *   where: {
     *     // ... filter to delete one Logging
     *   }
     * })
     * 
     */
    delete<T extends LoggingDeleteArgs>(args: SelectSubset<T, LoggingDeleteArgs<ExtArgs>>): Prisma__LoggingClient<$Result.GetResult<Prisma.$LoggingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Logging.
     * @param {LoggingUpdateArgs} args - Arguments to update one Logging.
     * @example
     * // Update one Logging
     * const logging = await prisma.logging.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LoggingUpdateArgs>(args: SelectSubset<T, LoggingUpdateArgs<ExtArgs>>): Prisma__LoggingClient<$Result.GetResult<Prisma.$LoggingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Loggings.
     * @param {LoggingDeleteManyArgs} args - Arguments to filter Loggings to delete.
     * @example
     * // Delete a few Loggings
     * const { count } = await prisma.logging.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LoggingDeleteManyArgs>(args?: SelectSubset<T, LoggingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Loggings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoggingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Loggings
     * const logging = await prisma.logging.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LoggingUpdateManyArgs>(args: SelectSubset<T, LoggingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Loggings and returns the data updated in the database.
     * @param {LoggingUpdateManyAndReturnArgs} args - Arguments to update many Loggings.
     * @example
     * // Update many Loggings
     * const logging = await prisma.logging.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Loggings and only return the `id`
     * const loggingWithIdOnly = await prisma.logging.updateManyAndReturn({
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
    updateManyAndReturn<T extends LoggingUpdateManyAndReturnArgs>(args: SelectSubset<T, LoggingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LoggingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Logging.
     * @param {LoggingUpsertArgs} args - Arguments to update or create a Logging.
     * @example
     * // Update or create a Logging
     * const logging = await prisma.logging.upsert({
     *   create: {
     *     // ... data to create a Logging
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Logging we want to update
     *   }
     * })
     */
    upsert<T extends LoggingUpsertArgs>(args: SelectSubset<T, LoggingUpsertArgs<ExtArgs>>): Prisma__LoggingClient<$Result.GetResult<Prisma.$LoggingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Loggings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoggingCountArgs} args - Arguments to filter Loggings to count.
     * @example
     * // Count the number of Loggings
     * const count = await prisma.logging.count({
     *   where: {
     *     // ... the filter for the Loggings we want to count
     *   }
     * })
    **/
    count<T extends LoggingCountArgs>(
      args?: Subset<T, LoggingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LoggingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Logging.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoggingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LoggingAggregateArgs>(args: Subset<T, LoggingAggregateArgs>): Prisma.PrismaPromise<GetLoggingAggregateType<T>>

    /**
     * Group by Logging.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoggingGroupByArgs} args - Group by arguments.
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
      T extends LoggingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LoggingGroupByArgs['orderBy'] }
        : { orderBy?: LoggingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LoggingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLoggingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Logging model
   */
  readonly fields: LoggingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Logging.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LoggingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Logging model
   */
  interface LoggingFieldRefs {
    readonly id: FieldRef<"Logging", 'String'>
    readonly userName: FieldRef<"Logging", 'String'>
    readonly action: FieldRef<"Logging", 'String'>
    readonly lastChange: FieldRef<"Logging", 'DateTime'>
    readonly updates: FieldRef<"Logging", 'String[]'>
  }
    

  // Custom InputTypes
  /**
   * Logging findUnique
   */
  export type LoggingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Logging
     */
    select?: LoggingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Logging
     */
    omit?: LoggingOmit<ExtArgs> | null
    /**
     * Filter, which Logging to fetch.
     */
    where: LoggingWhereUniqueInput
  }

  /**
   * Logging findUniqueOrThrow
   */
  export type LoggingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Logging
     */
    select?: LoggingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Logging
     */
    omit?: LoggingOmit<ExtArgs> | null
    /**
     * Filter, which Logging to fetch.
     */
    where: LoggingWhereUniqueInput
  }

  /**
   * Logging findFirst
   */
  export type LoggingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Logging
     */
    select?: LoggingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Logging
     */
    omit?: LoggingOmit<ExtArgs> | null
    /**
     * Filter, which Logging to fetch.
     */
    where?: LoggingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Loggings to fetch.
     */
    orderBy?: LoggingOrderByWithRelationInput | LoggingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Loggings.
     */
    cursor?: LoggingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Loggings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Loggings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Loggings.
     */
    distinct?: LoggingScalarFieldEnum | LoggingScalarFieldEnum[]
  }

  /**
   * Logging findFirstOrThrow
   */
  export type LoggingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Logging
     */
    select?: LoggingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Logging
     */
    omit?: LoggingOmit<ExtArgs> | null
    /**
     * Filter, which Logging to fetch.
     */
    where?: LoggingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Loggings to fetch.
     */
    orderBy?: LoggingOrderByWithRelationInput | LoggingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Loggings.
     */
    cursor?: LoggingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Loggings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Loggings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Loggings.
     */
    distinct?: LoggingScalarFieldEnum | LoggingScalarFieldEnum[]
  }

  /**
   * Logging findMany
   */
  export type LoggingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Logging
     */
    select?: LoggingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Logging
     */
    omit?: LoggingOmit<ExtArgs> | null
    /**
     * Filter, which Loggings to fetch.
     */
    where?: LoggingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Loggings to fetch.
     */
    orderBy?: LoggingOrderByWithRelationInput | LoggingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Loggings.
     */
    cursor?: LoggingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Loggings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Loggings.
     */
    skip?: number
    distinct?: LoggingScalarFieldEnum | LoggingScalarFieldEnum[]
  }

  /**
   * Logging create
   */
  export type LoggingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Logging
     */
    select?: LoggingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Logging
     */
    omit?: LoggingOmit<ExtArgs> | null
    /**
     * The data needed to create a Logging.
     */
    data: XOR<LoggingCreateInput, LoggingUncheckedCreateInput>
  }

  /**
   * Logging createMany
   */
  export type LoggingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Loggings.
     */
    data: LoggingCreateManyInput | LoggingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Logging createManyAndReturn
   */
  export type LoggingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Logging
     */
    select?: LoggingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Logging
     */
    omit?: LoggingOmit<ExtArgs> | null
    /**
     * The data used to create many Loggings.
     */
    data: LoggingCreateManyInput | LoggingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Logging update
   */
  export type LoggingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Logging
     */
    select?: LoggingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Logging
     */
    omit?: LoggingOmit<ExtArgs> | null
    /**
     * The data needed to update a Logging.
     */
    data: XOR<LoggingUpdateInput, LoggingUncheckedUpdateInput>
    /**
     * Choose, which Logging to update.
     */
    where: LoggingWhereUniqueInput
  }

  /**
   * Logging updateMany
   */
  export type LoggingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Loggings.
     */
    data: XOR<LoggingUpdateManyMutationInput, LoggingUncheckedUpdateManyInput>
    /**
     * Filter which Loggings to update
     */
    where?: LoggingWhereInput
    /**
     * Limit how many Loggings to update.
     */
    limit?: number
  }

  /**
   * Logging updateManyAndReturn
   */
  export type LoggingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Logging
     */
    select?: LoggingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Logging
     */
    omit?: LoggingOmit<ExtArgs> | null
    /**
     * The data used to update Loggings.
     */
    data: XOR<LoggingUpdateManyMutationInput, LoggingUncheckedUpdateManyInput>
    /**
     * Filter which Loggings to update
     */
    where?: LoggingWhereInput
    /**
     * Limit how many Loggings to update.
     */
    limit?: number
  }

  /**
   * Logging upsert
   */
  export type LoggingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Logging
     */
    select?: LoggingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Logging
     */
    omit?: LoggingOmit<ExtArgs> | null
    /**
     * The filter to search for the Logging to update in case it exists.
     */
    where: LoggingWhereUniqueInput
    /**
     * In case the Logging found by the `where` argument doesn't exist, create a new Logging with this data.
     */
    create: XOR<LoggingCreateInput, LoggingUncheckedCreateInput>
    /**
     * In case the Logging was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LoggingUpdateInput, LoggingUncheckedUpdateInput>
  }

  /**
   * Logging delete
   */
  export type LoggingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Logging
     */
    select?: LoggingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Logging
     */
    omit?: LoggingOmit<ExtArgs> | null
    /**
     * Filter which Logging to delete.
     */
    where: LoggingWhereUniqueInput
  }

  /**
   * Logging deleteMany
   */
  export type LoggingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Loggings to delete
     */
    where?: LoggingWhereInput
    /**
     * Limit how many Loggings to delete.
     */
    limit?: number
  }

  /**
   * Logging without action
   */
  export type LoggingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Logging
     */
    select?: LoggingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Logging
     */
    omit?: LoggingOmit<ExtArgs> | null
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


  export const ColaboradorScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    cpf: 'cpf',
    email: 'email',
    telefone: 'telefone',
    dataNascimento: 'dataNascimento',
    cep: 'cep',
    zona: 'zona',
    cidade: 'cidade',
    bairro: 'bairro',
    logradouro: 'logradouro',
    categoria: 'categoria',
    observacao: 'observacao',
    curriculo: 'curriculo',
    isLideranca: 'isLideranca',
    liderancaId: 'liderancaId',
    criadosEm: 'criadosEm',
    atualizadosEm: 'atualizadosEm'
  };

  export type ColaboradorScalarFieldEnum = (typeof ColaboradorScalarFieldEnum)[keyof typeof ColaboradorScalarFieldEnum]


  export const DemandaScalarFieldEnum: {
    id: 'id',
    titulo: 'titulo',
    descricao: 'descricao',
    intervalo: 'intervalo',
    dataInicio: 'dataInicio',
    dataFim: 'dataFim',
    status: 'status'
  };

  export type DemandaScalarFieldEnum = (typeof DemandaScalarFieldEnum)[keyof typeof DemandaScalarFieldEnum]


  export const ProjetoScalarFieldEnum: {
    id: 'id',
    titulo: 'titulo',
    descricao: 'descricao',
    data: 'data',
    cep: 'cep',
    zona: 'zona',
    cidade: 'cidade',
    bairro: 'bairro',
    logradouro: 'logradouro',
    colaboradorId: 'colaboradorId'
  };

  export type ProjetoScalarFieldEnum = (typeof ProjetoScalarFieldEnum)[keyof typeof ProjetoScalarFieldEnum]


  export const ReceitaScalarFieldEnum: {
    id: 'id',
    descricao: 'descricao',
    valor: 'valor',
    data: 'data',
    origem: 'origem'
  };

  export type ReceitaScalarFieldEnum = (typeof ReceitaScalarFieldEnum)[keyof typeof ReceitaScalarFieldEnum]


  export const EventoScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    descricao: 'descricao',
    localizacao: 'localizacao',
    categoria: 'categoria',
    status: 'status',
    prioridade: 'prioridade',
    dataInicio: 'dataInicio',
    dataFim: 'dataFim'
  };

  export type EventoScalarFieldEnum = (typeof EventoScalarFieldEnum)[keyof typeof EventoScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    userName: 'userName',
    name: 'name',
    email: 'email',
    password: 'password',
    role: 'role'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const AtendimentoScalarFieldEnum: {
    id: 'id',
    descricao: 'descricao',
    tipo: 'tipo',
    receitaId: 'receitaId',
    colaboradorId: 'colaboradorId',
    userId: 'userId',
    criadoEm: 'criadoEm'
  };

  export type AtendimentoScalarFieldEnum = (typeof AtendimentoScalarFieldEnum)[keyof typeof AtendimentoScalarFieldEnum]


  export const LoggingScalarFieldEnum: {
    id: 'id',
    userName: 'userName',
    action: 'action',
    lastChange: 'lastChange',
    updates: 'updates'
  };

  export type LoggingScalarFieldEnum = (typeof LoggingScalarFieldEnum)[keyof typeof LoggingScalarFieldEnum]


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
   * Reference to a field of type 'Zona'
   */
  export type EnumZonaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Zona'>
    


  /**
   * Reference to a field of type 'Zona[]'
   */
  export type ListEnumZonaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Zona[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'StatusDefault'
   */
  export type EnumStatusDefaultFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusDefault'>
    


  /**
   * Reference to a field of type 'StatusDefault[]'
   */
  export type ListEnumStatusDefaultFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusDefault[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'StatusEvento'
   */
  export type EnumStatusEventoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusEvento'>
    


  /**
   * Reference to a field of type 'StatusEvento[]'
   */
  export type ListEnumStatusEventoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusEvento[]'>
    


  /**
   * Reference to a field of type 'Prioridade'
   */
  export type EnumPrioridadeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Prioridade'>
    


  /**
   * Reference to a field of type 'Prioridade[]'
   */
  export type ListEnumPrioridadeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Prioridade[]'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'AtendimentoTipo'
   */
  export type EnumAtendimentoTipoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AtendimentoTipo'>
    


  /**
   * Reference to a field of type 'AtendimentoTipo[]'
   */
  export type ListEnumAtendimentoTipoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AtendimentoTipo[]'>
    


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


  export type ColaboradorWhereInput = {
    AND?: ColaboradorWhereInput | ColaboradorWhereInput[]
    OR?: ColaboradorWhereInput[]
    NOT?: ColaboradorWhereInput | ColaboradorWhereInput[]
    id?: StringFilter<"Colaborador"> | string
    nome?: StringFilter<"Colaborador"> | string
    cpf?: StringNullableFilter<"Colaborador"> | string | null
    email?: StringNullableFilter<"Colaborador"> | string | null
    telefone?: StringNullableFilter<"Colaborador"> | string | null
    dataNascimento?: DateTimeNullableFilter<"Colaborador"> | Date | string | null
    cep?: StringNullableFilter<"Colaborador"> | string | null
    zona?: EnumZonaNullableFilter<"Colaborador"> | $Enums.Zona | null
    cidade?: StringNullableFilter<"Colaborador"> | string | null
    bairro?: StringNullableFilter<"Colaborador"> | string | null
    logradouro?: StringNullableFilter<"Colaborador"> | string | null
    categoria?: StringNullableFilter<"Colaborador"> | string | null
    observacao?: StringNullableFilter<"Colaborador"> | string | null
    curriculo?: StringNullableFilter<"Colaborador"> | string | null
    isLideranca?: BoolFilter<"Colaborador"> | boolean
    liderancaId?: StringNullableFilter<"Colaborador"> | string | null
    criadosEm?: DateTimeFilter<"Colaborador"> | Date | string
    atualizadosEm?: DateTimeFilter<"Colaborador"> | Date | string
    lideranca?: XOR<ColaboradorNullableScalarRelationFilter, ColaboradorWhereInput> | null
    colaboradores?: ColaboradorListRelationFilter
    eventos?: EventoListRelationFilter
    atendimentos?: AtendimentoListRelationFilter
    projetos?: ProjetoListRelationFilter
  }

  export type ColaboradorOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    cpf?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    telefone?: SortOrderInput | SortOrder
    dataNascimento?: SortOrderInput | SortOrder
    cep?: SortOrderInput | SortOrder
    zona?: SortOrderInput | SortOrder
    cidade?: SortOrderInput | SortOrder
    bairro?: SortOrderInput | SortOrder
    logradouro?: SortOrderInput | SortOrder
    categoria?: SortOrderInput | SortOrder
    observacao?: SortOrderInput | SortOrder
    curriculo?: SortOrderInput | SortOrder
    isLideranca?: SortOrder
    liderancaId?: SortOrderInput | SortOrder
    criadosEm?: SortOrder
    atualizadosEm?: SortOrder
    lideranca?: ColaboradorOrderByWithRelationInput
    colaboradores?: ColaboradorOrderByRelationAggregateInput
    eventos?: EventoOrderByRelationAggregateInput
    atendimentos?: AtendimentoOrderByRelationAggregateInput
    projetos?: ProjetoOrderByRelationAggregateInput
  }

  export type ColaboradorWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ColaboradorWhereInput | ColaboradorWhereInput[]
    OR?: ColaboradorWhereInput[]
    NOT?: ColaboradorWhereInput | ColaboradorWhereInput[]
    nome?: StringFilter<"Colaborador"> | string
    cpf?: StringNullableFilter<"Colaborador"> | string | null
    email?: StringNullableFilter<"Colaborador"> | string | null
    telefone?: StringNullableFilter<"Colaborador"> | string | null
    dataNascimento?: DateTimeNullableFilter<"Colaborador"> | Date | string | null
    cep?: StringNullableFilter<"Colaborador"> | string | null
    zona?: EnumZonaNullableFilter<"Colaborador"> | $Enums.Zona | null
    cidade?: StringNullableFilter<"Colaborador"> | string | null
    bairro?: StringNullableFilter<"Colaborador"> | string | null
    logradouro?: StringNullableFilter<"Colaborador"> | string | null
    categoria?: StringNullableFilter<"Colaborador"> | string | null
    observacao?: StringNullableFilter<"Colaborador"> | string | null
    curriculo?: StringNullableFilter<"Colaborador"> | string | null
    isLideranca?: BoolFilter<"Colaborador"> | boolean
    liderancaId?: StringNullableFilter<"Colaborador"> | string | null
    criadosEm?: DateTimeFilter<"Colaborador"> | Date | string
    atualizadosEm?: DateTimeFilter<"Colaborador"> | Date | string
    lideranca?: XOR<ColaboradorNullableScalarRelationFilter, ColaboradorWhereInput> | null
    colaboradores?: ColaboradorListRelationFilter
    eventos?: EventoListRelationFilter
    atendimentos?: AtendimentoListRelationFilter
    projetos?: ProjetoListRelationFilter
  }, "id">

  export type ColaboradorOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    cpf?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    telefone?: SortOrderInput | SortOrder
    dataNascimento?: SortOrderInput | SortOrder
    cep?: SortOrderInput | SortOrder
    zona?: SortOrderInput | SortOrder
    cidade?: SortOrderInput | SortOrder
    bairro?: SortOrderInput | SortOrder
    logradouro?: SortOrderInput | SortOrder
    categoria?: SortOrderInput | SortOrder
    observacao?: SortOrderInput | SortOrder
    curriculo?: SortOrderInput | SortOrder
    isLideranca?: SortOrder
    liderancaId?: SortOrderInput | SortOrder
    criadosEm?: SortOrder
    atualizadosEm?: SortOrder
    _count?: ColaboradorCountOrderByAggregateInput
    _max?: ColaboradorMaxOrderByAggregateInput
    _min?: ColaboradorMinOrderByAggregateInput
  }

  export type ColaboradorScalarWhereWithAggregatesInput = {
    AND?: ColaboradorScalarWhereWithAggregatesInput | ColaboradorScalarWhereWithAggregatesInput[]
    OR?: ColaboradorScalarWhereWithAggregatesInput[]
    NOT?: ColaboradorScalarWhereWithAggregatesInput | ColaboradorScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Colaborador"> | string
    nome?: StringWithAggregatesFilter<"Colaborador"> | string
    cpf?: StringNullableWithAggregatesFilter<"Colaborador"> | string | null
    email?: StringNullableWithAggregatesFilter<"Colaborador"> | string | null
    telefone?: StringNullableWithAggregatesFilter<"Colaborador"> | string | null
    dataNascimento?: DateTimeNullableWithAggregatesFilter<"Colaborador"> | Date | string | null
    cep?: StringNullableWithAggregatesFilter<"Colaborador"> | string | null
    zona?: EnumZonaNullableWithAggregatesFilter<"Colaborador"> | $Enums.Zona | null
    cidade?: StringNullableWithAggregatesFilter<"Colaborador"> | string | null
    bairro?: StringNullableWithAggregatesFilter<"Colaborador"> | string | null
    logradouro?: StringNullableWithAggregatesFilter<"Colaborador"> | string | null
    categoria?: StringNullableWithAggregatesFilter<"Colaborador"> | string | null
    observacao?: StringNullableWithAggregatesFilter<"Colaborador"> | string | null
    curriculo?: StringNullableWithAggregatesFilter<"Colaborador"> | string | null
    isLideranca?: BoolWithAggregatesFilter<"Colaborador"> | boolean
    liderancaId?: StringNullableWithAggregatesFilter<"Colaborador"> | string | null
    criadosEm?: DateTimeWithAggregatesFilter<"Colaborador"> | Date | string
    atualizadosEm?: DateTimeWithAggregatesFilter<"Colaborador"> | Date | string
  }

  export type DemandaWhereInput = {
    AND?: DemandaWhereInput | DemandaWhereInput[]
    OR?: DemandaWhereInput[]
    NOT?: DemandaWhereInput | DemandaWhereInput[]
    id?: StringFilter<"Demanda"> | string
    titulo?: StringFilter<"Demanda"> | string
    descricao?: StringFilter<"Demanda"> | string
    intervalo?: BoolFilter<"Demanda"> | boolean
    dataInicio?: DateTimeFilter<"Demanda"> | Date | string
    dataFim?: DateTimeNullableFilter<"Demanda"> | Date | string | null
    status?: EnumStatusDefaultFilter<"Demanda"> | $Enums.StatusDefault
    atendimentos?: AtendimentoListRelationFilter
  }

  export type DemandaOrderByWithRelationInput = {
    id?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrder
    intervalo?: SortOrder
    dataInicio?: SortOrder
    dataFim?: SortOrderInput | SortOrder
    status?: SortOrder
    atendimentos?: AtendimentoOrderByRelationAggregateInput
  }

  export type DemandaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DemandaWhereInput | DemandaWhereInput[]
    OR?: DemandaWhereInput[]
    NOT?: DemandaWhereInput | DemandaWhereInput[]
    titulo?: StringFilter<"Demanda"> | string
    descricao?: StringFilter<"Demanda"> | string
    intervalo?: BoolFilter<"Demanda"> | boolean
    dataInicio?: DateTimeFilter<"Demanda"> | Date | string
    dataFim?: DateTimeNullableFilter<"Demanda"> | Date | string | null
    status?: EnumStatusDefaultFilter<"Demanda"> | $Enums.StatusDefault
    atendimentos?: AtendimentoListRelationFilter
  }, "id">

  export type DemandaOrderByWithAggregationInput = {
    id?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrder
    intervalo?: SortOrder
    dataInicio?: SortOrder
    dataFim?: SortOrderInput | SortOrder
    status?: SortOrder
    _count?: DemandaCountOrderByAggregateInput
    _max?: DemandaMaxOrderByAggregateInput
    _min?: DemandaMinOrderByAggregateInput
  }

  export type DemandaScalarWhereWithAggregatesInput = {
    AND?: DemandaScalarWhereWithAggregatesInput | DemandaScalarWhereWithAggregatesInput[]
    OR?: DemandaScalarWhereWithAggregatesInput[]
    NOT?: DemandaScalarWhereWithAggregatesInput | DemandaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Demanda"> | string
    titulo?: StringWithAggregatesFilter<"Demanda"> | string
    descricao?: StringWithAggregatesFilter<"Demanda"> | string
    intervalo?: BoolWithAggregatesFilter<"Demanda"> | boolean
    dataInicio?: DateTimeWithAggregatesFilter<"Demanda"> | Date | string
    dataFim?: DateTimeNullableWithAggregatesFilter<"Demanda"> | Date | string | null
    status?: EnumStatusDefaultWithAggregatesFilter<"Demanda"> | $Enums.StatusDefault
  }

  export type ProjetoWhereInput = {
    AND?: ProjetoWhereInput | ProjetoWhereInput[]
    OR?: ProjetoWhereInput[]
    NOT?: ProjetoWhereInput | ProjetoWhereInput[]
    id?: StringFilter<"Projeto"> | string
    titulo?: StringFilter<"Projeto"> | string
    descricao?: StringFilter<"Projeto"> | string
    data?: DateTimeFilter<"Projeto"> | Date | string
    cep?: StringFilter<"Projeto"> | string
    zona?: EnumZonaFilter<"Projeto"> | $Enums.Zona
    cidade?: StringFilter<"Projeto"> | string
    bairro?: StringFilter<"Projeto"> | string
    logradouro?: StringFilter<"Projeto"> | string
    colaboradorId?: StringNullableFilter<"Projeto"> | string | null
    colaborador?: XOR<ColaboradorNullableScalarRelationFilter, ColaboradorWhereInput> | null
    atendimentos?: AtendimentoListRelationFilter
  }

  export type ProjetoOrderByWithRelationInput = {
    id?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrder
    data?: SortOrder
    cep?: SortOrder
    zona?: SortOrder
    cidade?: SortOrder
    bairro?: SortOrder
    logradouro?: SortOrder
    colaboradorId?: SortOrderInput | SortOrder
    colaborador?: ColaboradorOrderByWithRelationInput
    atendimentos?: AtendimentoOrderByRelationAggregateInput
  }

  export type ProjetoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProjetoWhereInput | ProjetoWhereInput[]
    OR?: ProjetoWhereInput[]
    NOT?: ProjetoWhereInput | ProjetoWhereInput[]
    titulo?: StringFilter<"Projeto"> | string
    descricao?: StringFilter<"Projeto"> | string
    data?: DateTimeFilter<"Projeto"> | Date | string
    cep?: StringFilter<"Projeto"> | string
    zona?: EnumZonaFilter<"Projeto"> | $Enums.Zona
    cidade?: StringFilter<"Projeto"> | string
    bairro?: StringFilter<"Projeto"> | string
    logradouro?: StringFilter<"Projeto"> | string
    colaboradorId?: StringNullableFilter<"Projeto"> | string | null
    colaborador?: XOR<ColaboradorNullableScalarRelationFilter, ColaboradorWhereInput> | null
    atendimentos?: AtendimentoListRelationFilter
  }, "id">

  export type ProjetoOrderByWithAggregationInput = {
    id?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrder
    data?: SortOrder
    cep?: SortOrder
    zona?: SortOrder
    cidade?: SortOrder
    bairro?: SortOrder
    logradouro?: SortOrder
    colaboradorId?: SortOrderInput | SortOrder
    _count?: ProjetoCountOrderByAggregateInput
    _max?: ProjetoMaxOrderByAggregateInput
    _min?: ProjetoMinOrderByAggregateInput
  }

  export type ProjetoScalarWhereWithAggregatesInput = {
    AND?: ProjetoScalarWhereWithAggregatesInput | ProjetoScalarWhereWithAggregatesInput[]
    OR?: ProjetoScalarWhereWithAggregatesInput[]
    NOT?: ProjetoScalarWhereWithAggregatesInput | ProjetoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Projeto"> | string
    titulo?: StringWithAggregatesFilter<"Projeto"> | string
    descricao?: StringWithAggregatesFilter<"Projeto"> | string
    data?: DateTimeWithAggregatesFilter<"Projeto"> | Date | string
    cep?: StringWithAggregatesFilter<"Projeto"> | string
    zona?: EnumZonaWithAggregatesFilter<"Projeto"> | $Enums.Zona
    cidade?: StringWithAggregatesFilter<"Projeto"> | string
    bairro?: StringWithAggregatesFilter<"Projeto"> | string
    logradouro?: StringWithAggregatesFilter<"Projeto"> | string
    colaboradorId?: StringNullableWithAggregatesFilter<"Projeto"> | string | null
  }

  export type ReceitaWhereInput = {
    AND?: ReceitaWhereInput | ReceitaWhereInput[]
    OR?: ReceitaWhereInput[]
    NOT?: ReceitaWhereInput | ReceitaWhereInput[]
    id?: StringFilter<"Receita"> | string
    descricao?: StringFilter<"Receita"> | string
    valor?: IntFilter<"Receita"> | number
    data?: DateTimeFilter<"Receita"> | Date | string
    origem?: StringNullableFilter<"Receita"> | string | null
    atendimento?: XOR<AtendimentoNullableScalarRelationFilter, AtendimentoWhereInput> | null
  }

  export type ReceitaOrderByWithRelationInput = {
    id?: SortOrder
    descricao?: SortOrder
    valor?: SortOrder
    data?: SortOrder
    origem?: SortOrderInput | SortOrder
    atendimento?: AtendimentoOrderByWithRelationInput
  }

  export type ReceitaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ReceitaWhereInput | ReceitaWhereInput[]
    OR?: ReceitaWhereInput[]
    NOT?: ReceitaWhereInput | ReceitaWhereInput[]
    descricao?: StringFilter<"Receita"> | string
    valor?: IntFilter<"Receita"> | number
    data?: DateTimeFilter<"Receita"> | Date | string
    origem?: StringNullableFilter<"Receita"> | string | null
    atendimento?: XOR<AtendimentoNullableScalarRelationFilter, AtendimentoWhereInput> | null
  }, "id">

  export type ReceitaOrderByWithAggregationInput = {
    id?: SortOrder
    descricao?: SortOrder
    valor?: SortOrder
    data?: SortOrder
    origem?: SortOrderInput | SortOrder
    _count?: ReceitaCountOrderByAggregateInput
    _avg?: ReceitaAvgOrderByAggregateInput
    _max?: ReceitaMaxOrderByAggregateInput
    _min?: ReceitaMinOrderByAggregateInput
    _sum?: ReceitaSumOrderByAggregateInput
  }

  export type ReceitaScalarWhereWithAggregatesInput = {
    AND?: ReceitaScalarWhereWithAggregatesInput | ReceitaScalarWhereWithAggregatesInput[]
    OR?: ReceitaScalarWhereWithAggregatesInput[]
    NOT?: ReceitaScalarWhereWithAggregatesInput | ReceitaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Receita"> | string
    descricao?: StringWithAggregatesFilter<"Receita"> | string
    valor?: IntWithAggregatesFilter<"Receita"> | number
    data?: DateTimeWithAggregatesFilter<"Receita"> | Date | string
    origem?: StringNullableWithAggregatesFilter<"Receita"> | string | null
  }

  export type EventoWhereInput = {
    AND?: EventoWhereInput | EventoWhereInput[]
    OR?: EventoWhereInput[]
    NOT?: EventoWhereInput | EventoWhereInput[]
    id?: StringFilter<"Evento"> | string
    nome?: StringFilter<"Evento"> | string
    descricao?: StringFilter<"Evento"> | string
    localizacao?: StringFilter<"Evento"> | string
    categoria?: StringFilter<"Evento"> | string
    status?: EnumStatusEventoFilter<"Evento"> | $Enums.StatusEvento
    prioridade?: EnumPrioridadeFilter<"Evento"> | $Enums.Prioridade
    dataInicio?: DateTimeFilter<"Evento"> | Date | string
    dataFim?: DateTimeFilter<"Evento"> | Date | string
    participantes?: ColaboradorListRelationFilter
  }

  export type EventoOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    localizacao?: SortOrder
    categoria?: SortOrder
    status?: SortOrder
    prioridade?: SortOrder
    dataInicio?: SortOrder
    dataFim?: SortOrder
    participantes?: ColaboradorOrderByRelationAggregateInput
  }

  export type EventoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EventoWhereInput | EventoWhereInput[]
    OR?: EventoWhereInput[]
    NOT?: EventoWhereInput | EventoWhereInput[]
    nome?: StringFilter<"Evento"> | string
    descricao?: StringFilter<"Evento"> | string
    localizacao?: StringFilter<"Evento"> | string
    categoria?: StringFilter<"Evento"> | string
    status?: EnumStatusEventoFilter<"Evento"> | $Enums.StatusEvento
    prioridade?: EnumPrioridadeFilter<"Evento"> | $Enums.Prioridade
    dataInicio?: DateTimeFilter<"Evento"> | Date | string
    dataFim?: DateTimeFilter<"Evento"> | Date | string
    participantes?: ColaboradorListRelationFilter
  }, "id">

  export type EventoOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    localizacao?: SortOrder
    categoria?: SortOrder
    status?: SortOrder
    prioridade?: SortOrder
    dataInicio?: SortOrder
    dataFim?: SortOrder
    _count?: EventoCountOrderByAggregateInput
    _max?: EventoMaxOrderByAggregateInput
    _min?: EventoMinOrderByAggregateInput
  }

  export type EventoScalarWhereWithAggregatesInput = {
    AND?: EventoScalarWhereWithAggregatesInput | EventoScalarWhereWithAggregatesInput[]
    OR?: EventoScalarWhereWithAggregatesInput[]
    NOT?: EventoScalarWhereWithAggregatesInput | EventoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Evento"> | string
    nome?: StringWithAggregatesFilter<"Evento"> | string
    descricao?: StringWithAggregatesFilter<"Evento"> | string
    localizacao?: StringWithAggregatesFilter<"Evento"> | string
    categoria?: StringWithAggregatesFilter<"Evento"> | string
    status?: EnumStatusEventoWithAggregatesFilter<"Evento"> | $Enums.StatusEvento
    prioridade?: EnumPrioridadeWithAggregatesFilter<"Evento"> | $Enums.Prioridade
    dataInicio?: DateTimeWithAggregatesFilter<"Evento"> | Date | string
    dataFim?: DateTimeWithAggregatesFilter<"Evento"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    userName?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    atendimentos?: AtendimentoListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    userName?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    atendimentos?: AtendimentoOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    userName?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    atendimentos?: AtendimentoListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    userName?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    userName?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
  }

  export type AtendimentoWhereInput = {
    AND?: AtendimentoWhereInput | AtendimentoWhereInput[]
    OR?: AtendimentoWhereInput[]
    NOT?: AtendimentoWhereInput | AtendimentoWhereInput[]
    id?: StringFilter<"Atendimento"> | string
    descricao?: StringFilter<"Atendimento"> | string
    tipo?: EnumAtendimentoTipoFilter<"Atendimento"> | $Enums.AtendimentoTipo
    receitaId?: StringNullableFilter<"Atendimento"> | string | null
    colaboradorId?: StringNullableFilter<"Atendimento"> | string | null
    userId?: StringFilter<"Atendimento"> | string
    criadoEm?: DateTimeFilter<"Atendimento"> | Date | string
    receita?: XOR<ReceitaNullableScalarRelationFilter, ReceitaWhereInput> | null
    projeto?: ProjetoListRelationFilter
    demanda?: DemandaListRelationFilter
    colaborador?: XOR<ColaboradorNullableScalarRelationFilter, ColaboradorWhereInput> | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AtendimentoOrderByWithRelationInput = {
    id?: SortOrder
    descricao?: SortOrder
    tipo?: SortOrder
    receitaId?: SortOrderInput | SortOrder
    colaboradorId?: SortOrderInput | SortOrder
    userId?: SortOrder
    criadoEm?: SortOrder
    receita?: ReceitaOrderByWithRelationInput
    projeto?: ProjetoOrderByRelationAggregateInput
    demanda?: DemandaOrderByRelationAggregateInput
    colaborador?: ColaboradorOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type AtendimentoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    receitaId?: string
    AND?: AtendimentoWhereInput | AtendimentoWhereInput[]
    OR?: AtendimentoWhereInput[]
    NOT?: AtendimentoWhereInput | AtendimentoWhereInput[]
    descricao?: StringFilter<"Atendimento"> | string
    tipo?: EnumAtendimentoTipoFilter<"Atendimento"> | $Enums.AtendimentoTipo
    colaboradorId?: StringNullableFilter<"Atendimento"> | string | null
    userId?: StringFilter<"Atendimento"> | string
    criadoEm?: DateTimeFilter<"Atendimento"> | Date | string
    receita?: XOR<ReceitaNullableScalarRelationFilter, ReceitaWhereInput> | null
    projeto?: ProjetoListRelationFilter
    demanda?: DemandaListRelationFilter
    colaborador?: XOR<ColaboradorNullableScalarRelationFilter, ColaboradorWhereInput> | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "receitaId">

  export type AtendimentoOrderByWithAggregationInput = {
    id?: SortOrder
    descricao?: SortOrder
    tipo?: SortOrder
    receitaId?: SortOrderInput | SortOrder
    colaboradorId?: SortOrderInput | SortOrder
    userId?: SortOrder
    criadoEm?: SortOrder
    _count?: AtendimentoCountOrderByAggregateInput
    _max?: AtendimentoMaxOrderByAggregateInput
    _min?: AtendimentoMinOrderByAggregateInput
  }

  export type AtendimentoScalarWhereWithAggregatesInput = {
    AND?: AtendimentoScalarWhereWithAggregatesInput | AtendimentoScalarWhereWithAggregatesInput[]
    OR?: AtendimentoScalarWhereWithAggregatesInput[]
    NOT?: AtendimentoScalarWhereWithAggregatesInput | AtendimentoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Atendimento"> | string
    descricao?: StringWithAggregatesFilter<"Atendimento"> | string
    tipo?: EnumAtendimentoTipoWithAggregatesFilter<"Atendimento"> | $Enums.AtendimentoTipo
    receitaId?: StringNullableWithAggregatesFilter<"Atendimento"> | string | null
    colaboradorId?: StringNullableWithAggregatesFilter<"Atendimento"> | string | null
    userId?: StringWithAggregatesFilter<"Atendimento"> | string
    criadoEm?: DateTimeWithAggregatesFilter<"Atendimento"> | Date | string
  }

  export type LoggingWhereInput = {
    AND?: LoggingWhereInput | LoggingWhereInput[]
    OR?: LoggingWhereInput[]
    NOT?: LoggingWhereInput | LoggingWhereInput[]
    id?: StringFilter<"Logging"> | string
    userName?: StringFilter<"Logging"> | string
    action?: StringFilter<"Logging"> | string
    lastChange?: DateTimeFilter<"Logging"> | Date | string
    updates?: StringNullableListFilter<"Logging">
  }

  export type LoggingOrderByWithRelationInput = {
    id?: SortOrder
    userName?: SortOrder
    action?: SortOrder
    lastChange?: SortOrder
    updates?: SortOrder
  }

  export type LoggingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LoggingWhereInput | LoggingWhereInput[]
    OR?: LoggingWhereInput[]
    NOT?: LoggingWhereInput | LoggingWhereInput[]
    userName?: StringFilter<"Logging"> | string
    action?: StringFilter<"Logging"> | string
    lastChange?: DateTimeFilter<"Logging"> | Date | string
    updates?: StringNullableListFilter<"Logging">
  }, "id">

  export type LoggingOrderByWithAggregationInput = {
    id?: SortOrder
    userName?: SortOrder
    action?: SortOrder
    lastChange?: SortOrder
    updates?: SortOrder
    _count?: LoggingCountOrderByAggregateInput
    _max?: LoggingMaxOrderByAggregateInput
    _min?: LoggingMinOrderByAggregateInput
  }

  export type LoggingScalarWhereWithAggregatesInput = {
    AND?: LoggingScalarWhereWithAggregatesInput | LoggingScalarWhereWithAggregatesInput[]
    OR?: LoggingScalarWhereWithAggregatesInput[]
    NOT?: LoggingScalarWhereWithAggregatesInput | LoggingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Logging"> | string
    userName?: StringWithAggregatesFilter<"Logging"> | string
    action?: StringWithAggregatesFilter<"Logging"> | string
    lastChange?: DateTimeWithAggregatesFilter<"Logging"> | Date | string
    updates?: StringNullableListFilter<"Logging">
  }

  export type ColaboradorCreateInput = {
    id?: string
    nome: string
    cpf?: string | null
    email?: string | null
    telefone?: string | null
    dataNascimento?: Date | string | null
    cep?: string | null
    zona?: $Enums.Zona | null
    cidade?: string | null
    bairro?: string | null
    logradouro?: string | null
    categoria?: string | null
    observacao?: string | null
    curriculo?: string | null
    isLideranca?: boolean
    criadosEm?: Date | string
    atualizadosEm?: Date | string
    lideranca?: ColaboradorCreateNestedOneWithoutColaboradoresInput
    colaboradores?: ColaboradorCreateNestedManyWithoutLiderancaInput
    eventos?: EventoCreateNestedManyWithoutParticipantesInput
    atendimentos?: AtendimentoCreateNestedManyWithoutColaboradorInput
    projetos?: ProjetoCreateNestedManyWithoutColaboradorInput
  }

  export type ColaboradorUncheckedCreateInput = {
    id?: string
    nome: string
    cpf?: string | null
    email?: string | null
    telefone?: string | null
    dataNascimento?: Date | string | null
    cep?: string | null
    zona?: $Enums.Zona | null
    cidade?: string | null
    bairro?: string | null
    logradouro?: string | null
    categoria?: string | null
    observacao?: string | null
    curriculo?: string | null
    isLideranca?: boolean
    liderancaId?: string | null
    criadosEm?: Date | string
    atualizadosEm?: Date | string
    colaboradores?: ColaboradorUncheckedCreateNestedManyWithoutLiderancaInput
    eventos?: EventoUncheckedCreateNestedManyWithoutParticipantesInput
    atendimentos?: AtendimentoUncheckedCreateNestedManyWithoutColaboradorInput
    projetos?: ProjetoUncheckedCreateNestedManyWithoutColaboradorInput
  }

  export type ColaboradorUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    dataNascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    zona?: NullableEnumZonaFieldUpdateOperationsInput | $Enums.Zona | null
    cidade?: NullableStringFieldUpdateOperationsInput | string | null
    bairro?: NullableStringFieldUpdateOperationsInput | string | null
    logradouro?: NullableStringFieldUpdateOperationsInput | string | null
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    curriculo?: NullableStringFieldUpdateOperationsInput | string | null
    isLideranca?: BoolFieldUpdateOperationsInput | boolean
    criadosEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadosEm?: DateTimeFieldUpdateOperationsInput | Date | string
    lideranca?: ColaboradorUpdateOneWithoutColaboradoresNestedInput
    colaboradores?: ColaboradorUpdateManyWithoutLiderancaNestedInput
    eventos?: EventoUpdateManyWithoutParticipantesNestedInput
    atendimentos?: AtendimentoUpdateManyWithoutColaboradorNestedInput
    projetos?: ProjetoUpdateManyWithoutColaboradorNestedInput
  }

  export type ColaboradorUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    dataNascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    zona?: NullableEnumZonaFieldUpdateOperationsInput | $Enums.Zona | null
    cidade?: NullableStringFieldUpdateOperationsInput | string | null
    bairro?: NullableStringFieldUpdateOperationsInput | string | null
    logradouro?: NullableStringFieldUpdateOperationsInput | string | null
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    curriculo?: NullableStringFieldUpdateOperationsInput | string | null
    isLideranca?: BoolFieldUpdateOperationsInput | boolean
    liderancaId?: NullableStringFieldUpdateOperationsInput | string | null
    criadosEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadosEm?: DateTimeFieldUpdateOperationsInput | Date | string
    colaboradores?: ColaboradorUncheckedUpdateManyWithoutLiderancaNestedInput
    eventos?: EventoUncheckedUpdateManyWithoutParticipantesNestedInput
    atendimentos?: AtendimentoUncheckedUpdateManyWithoutColaboradorNestedInput
    projetos?: ProjetoUncheckedUpdateManyWithoutColaboradorNestedInput
  }

  export type ColaboradorCreateManyInput = {
    id?: string
    nome: string
    cpf?: string | null
    email?: string | null
    telefone?: string | null
    dataNascimento?: Date | string | null
    cep?: string | null
    zona?: $Enums.Zona | null
    cidade?: string | null
    bairro?: string | null
    logradouro?: string | null
    categoria?: string | null
    observacao?: string | null
    curriculo?: string | null
    isLideranca?: boolean
    liderancaId?: string | null
    criadosEm?: Date | string
    atualizadosEm?: Date | string
  }

  export type ColaboradorUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    dataNascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    zona?: NullableEnumZonaFieldUpdateOperationsInput | $Enums.Zona | null
    cidade?: NullableStringFieldUpdateOperationsInput | string | null
    bairro?: NullableStringFieldUpdateOperationsInput | string | null
    logradouro?: NullableStringFieldUpdateOperationsInput | string | null
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    curriculo?: NullableStringFieldUpdateOperationsInput | string | null
    isLideranca?: BoolFieldUpdateOperationsInput | boolean
    criadosEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadosEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ColaboradorUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    dataNascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    zona?: NullableEnumZonaFieldUpdateOperationsInput | $Enums.Zona | null
    cidade?: NullableStringFieldUpdateOperationsInput | string | null
    bairro?: NullableStringFieldUpdateOperationsInput | string | null
    logradouro?: NullableStringFieldUpdateOperationsInput | string | null
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    curriculo?: NullableStringFieldUpdateOperationsInput | string | null
    isLideranca?: BoolFieldUpdateOperationsInput | boolean
    liderancaId?: NullableStringFieldUpdateOperationsInput | string | null
    criadosEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadosEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DemandaCreateInput = {
    id?: string
    titulo: string
    descricao: string
    intervalo?: boolean
    dataInicio: Date | string
    dataFim?: Date | string | null
    status?: $Enums.StatusDefault
    atendimentos?: AtendimentoCreateNestedManyWithoutDemandaInput
  }

  export type DemandaUncheckedCreateInput = {
    id?: string
    titulo: string
    descricao: string
    intervalo?: boolean
    dataInicio: Date | string
    dataFim?: Date | string | null
    status?: $Enums.StatusDefault
    atendimentos?: AtendimentoUncheckedCreateNestedManyWithoutDemandaInput
  }

  export type DemandaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    intervalo?: BoolFieldUpdateOperationsInput | boolean
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumStatusDefaultFieldUpdateOperationsInput | $Enums.StatusDefault
    atendimentos?: AtendimentoUpdateManyWithoutDemandaNestedInput
  }

  export type DemandaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    intervalo?: BoolFieldUpdateOperationsInput | boolean
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumStatusDefaultFieldUpdateOperationsInput | $Enums.StatusDefault
    atendimentos?: AtendimentoUncheckedUpdateManyWithoutDemandaNestedInput
  }

  export type DemandaCreateManyInput = {
    id?: string
    titulo: string
    descricao: string
    intervalo?: boolean
    dataInicio: Date | string
    dataFim?: Date | string | null
    status?: $Enums.StatusDefault
  }

  export type DemandaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    intervalo?: BoolFieldUpdateOperationsInput | boolean
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumStatusDefaultFieldUpdateOperationsInput | $Enums.StatusDefault
  }

  export type DemandaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    intervalo?: BoolFieldUpdateOperationsInput | boolean
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumStatusDefaultFieldUpdateOperationsInput | $Enums.StatusDefault
  }

  export type ProjetoCreateInput = {
    id?: string
    titulo: string
    descricao: string
    data: Date | string
    cep: string
    zona: $Enums.Zona
    cidade: string
    bairro: string
    logradouro: string
    colaborador?: ColaboradorCreateNestedOneWithoutProjetosInput
    atendimentos?: AtendimentoCreateNestedManyWithoutProjetoInput
  }

  export type ProjetoUncheckedCreateInput = {
    id?: string
    titulo: string
    descricao: string
    data: Date | string
    cep: string
    zona: $Enums.Zona
    cidade: string
    bairro: string
    logradouro: string
    colaboradorId?: string | null
    atendimentos?: AtendimentoUncheckedCreateNestedManyWithoutProjetoInput
  }

  export type ProjetoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    cep?: StringFieldUpdateOperationsInput | string
    zona?: EnumZonaFieldUpdateOperationsInput | $Enums.Zona
    cidade?: StringFieldUpdateOperationsInput | string
    bairro?: StringFieldUpdateOperationsInput | string
    logradouro?: StringFieldUpdateOperationsInput | string
    colaborador?: ColaboradorUpdateOneWithoutProjetosNestedInput
    atendimentos?: AtendimentoUpdateManyWithoutProjetoNestedInput
  }

  export type ProjetoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    cep?: StringFieldUpdateOperationsInput | string
    zona?: EnumZonaFieldUpdateOperationsInput | $Enums.Zona
    cidade?: StringFieldUpdateOperationsInput | string
    bairro?: StringFieldUpdateOperationsInput | string
    logradouro?: StringFieldUpdateOperationsInput | string
    colaboradorId?: NullableStringFieldUpdateOperationsInput | string | null
    atendimentos?: AtendimentoUncheckedUpdateManyWithoutProjetoNestedInput
  }

  export type ProjetoCreateManyInput = {
    id?: string
    titulo: string
    descricao: string
    data: Date | string
    cep: string
    zona: $Enums.Zona
    cidade: string
    bairro: string
    logradouro: string
    colaboradorId?: string | null
  }

  export type ProjetoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    cep?: StringFieldUpdateOperationsInput | string
    zona?: EnumZonaFieldUpdateOperationsInput | $Enums.Zona
    cidade?: StringFieldUpdateOperationsInput | string
    bairro?: StringFieldUpdateOperationsInput | string
    logradouro?: StringFieldUpdateOperationsInput | string
  }

  export type ProjetoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    cep?: StringFieldUpdateOperationsInput | string
    zona?: EnumZonaFieldUpdateOperationsInput | $Enums.Zona
    cidade?: StringFieldUpdateOperationsInput | string
    bairro?: StringFieldUpdateOperationsInput | string
    logradouro?: StringFieldUpdateOperationsInput | string
    colaboradorId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ReceitaCreateInput = {
    id?: string
    descricao: string
    valor?: number
    data: Date | string
    origem?: string | null
    atendimento?: AtendimentoCreateNestedOneWithoutReceitaInput
  }

  export type ReceitaUncheckedCreateInput = {
    id?: string
    descricao: string
    valor?: number
    data: Date | string
    origem?: string | null
    atendimento?: AtendimentoUncheckedCreateNestedOneWithoutReceitaInput
  }

  export type ReceitaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    valor?: IntFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    origem?: NullableStringFieldUpdateOperationsInput | string | null
    atendimento?: AtendimentoUpdateOneWithoutReceitaNestedInput
  }

  export type ReceitaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    valor?: IntFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    origem?: NullableStringFieldUpdateOperationsInput | string | null
    atendimento?: AtendimentoUncheckedUpdateOneWithoutReceitaNestedInput
  }

  export type ReceitaCreateManyInput = {
    id?: string
    descricao: string
    valor?: number
    data: Date | string
    origem?: string | null
  }

  export type ReceitaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    valor?: IntFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    origem?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ReceitaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    valor?: IntFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    origem?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EventoCreateInput = {
    id?: string
    nome: string
    descricao: string
    localizacao: string
    categoria: string
    status?: $Enums.StatusEvento
    prioridade: $Enums.Prioridade
    dataInicio: Date | string
    dataFim: Date | string
    participantes?: ColaboradorCreateNestedManyWithoutEventosInput
  }

  export type EventoUncheckedCreateInput = {
    id?: string
    nome: string
    descricao: string
    localizacao: string
    categoria: string
    status?: $Enums.StatusEvento
    prioridade: $Enums.Prioridade
    dataInicio: Date | string
    dataFim: Date | string
    participantes?: ColaboradorUncheckedCreateNestedManyWithoutEventosInput
  }

  export type EventoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    localizacao?: StringFieldUpdateOperationsInput | string
    categoria?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusEventoFieldUpdateOperationsInput | $Enums.StatusEvento
    prioridade?: EnumPrioridadeFieldUpdateOperationsInput | $Enums.Prioridade
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: DateTimeFieldUpdateOperationsInput | Date | string
    participantes?: ColaboradorUpdateManyWithoutEventosNestedInput
  }

  export type EventoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    localizacao?: StringFieldUpdateOperationsInput | string
    categoria?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusEventoFieldUpdateOperationsInput | $Enums.StatusEvento
    prioridade?: EnumPrioridadeFieldUpdateOperationsInput | $Enums.Prioridade
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: DateTimeFieldUpdateOperationsInput | Date | string
    participantes?: ColaboradorUncheckedUpdateManyWithoutEventosNestedInput
  }

  export type EventoCreateManyInput = {
    id?: string
    nome: string
    descricao: string
    localizacao: string
    categoria: string
    status?: $Enums.StatusEvento
    prioridade: $Enums.Prioridade
    dataInicio: Date | string
    dataFim: Date | string
  }

  export type EventoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    localizacao?: StringFieldUpdateOperationsInput | string
    categoria?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusEventoFieldUpdateOperationsInput | $Enums.StatusEvento
    prioridade?: EnumPrioridadeFieldUpdateOperationsInput | $Enums.Prioridade
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    localizacao?: StringFieldUpdateOperationsInput | string
    categoria?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusEventoFieldUpdateOperationsInput | $Enums.StatusEvento
    prioridade?: EnumPrioridadeFieldUpdateOperationsInput | $Enums.Prioridade
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id?: string
    userName: string
    name: string
    email: string
    password: string
    role?: $Enums.UserRole
    atendimentos?: AtendimentoCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    userName: string
    name: string
    email: string
    password: string
    role?: $Enums.UserRole
    atendimentos?: AtendimentoUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    atendimentos?: AtendimentoUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    atendimentos?: AtendimentoUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    userName: string
    name: string
    email: string
    password: string
    role?: $Enums.UserRole
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
  }

  export type AtendimentoCreateInput = {
    id?: string
    descricao: string
    tipo: $Enums.AtendimentoTipo
    criadoEm?: Date | string
    receita?: ReceitaCreateNestedOneWithoutAtendimentoInput
    projeto?: ProjetoCreateNestedManyWithoutAtendimentosInput
    demanda?: DemandaCreateNestedManyWithoutAtendimentosInput
    colaborador?: ColaboradorCreateNestedOneWithoutAtendimentosInput
    user: UserCreateNestedOneWithoutAtendimentosInput
  }

  export type AtendimentoUncheckedCreateInput = {
    id?: string
    descricao: string
    tipo: $Enums.AtendimentoTipo
    receitaId?: string | null
    colaboradorId?: string | null
    userId: string
    criadoEm?: Date | string
    projeto?: ProjetoUncheckedCreateNestedManyWithoutAtendimentosInput
    demanda?: DemandaUncheckedCreateNestedManyWithoutAtendimentosInput
  }

  export type AtendimentoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    tipo?: EnumAtendimentoTipoFieldUpdateOperationsInput | $Enums.AtendimentoTipo
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    receita?: ReceitaUpdateOneWithoutAtendimentoNestedInput
    projeto?: ProjetoUpdateManyWithoutAtendimentosNestedInput
    demanda?: DemandaUpdateManyWithoutAtendimentosNestedInput
    colaborador?: ColaboradorUpdateOneWithoutAtendimentosNestedInput
    user?: UserUpdateOneRequiredWithoutAtendimentosNestedInput
  }

  export type AtendimentoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    tipo?: EnumAtendimentoTipoFieldUpdateOperationsInput | $Enums.AtendimentoTipo
    receitaId?: NullableStringFieldUpdateOperationsInput | string | null
    colaboradorId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    projeto?: ProjetoUncheckedUpdateManyWithoutAtendimentosNestedInput
    demanda?: DemandaUncheckedUpdateManyWithoutAtendimentosNestedInput
  }

  export type AtendimentoCreateManyInput = {
    id?: string
    descricao: string
    tipo: $Enums.AtendimentoTipo
    receitaId?: string | null
    colaboradorId?: string | null
    userId: string
    criadoEm?: Date | string
  }

  export type AtendimentoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    tipo?: EnumAtendimentoTipoFieldUpdateOperationsInput | $Enums.AtendimentoTipo
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AtendimentoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    tipo?: EnumAtendimentoTipoFieldUpdateOperationsInput | $Enums.AtendimentoTipo
    receitaId?: NullableStringFieldUpdateOperationsInput | string | null
    colaboradorId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LoggingCreateInput = {
    id?: string
    userName: string
    action: string
    lastChange?: Date | string
    updates?: LoggingCreateupdatesInput | string[]
  }

  export type LoggingUncheckedCreateInput = {
    id?: string
    userName: string
    action: string
    lastChange?: Date | string
    updates?: LoggingCreateupdatesInput | string[]
  }

  export type LoggingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    lastChange?: DateTimeFieldUpdateOperationsInput | Date | string
    updates?: LoggingUpdateupdatesInput | string[]
  }

  export type LoggingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    lastChange?: DateTimeFieldUpdateOperationsInput | Date | string
    updates?: LoggingUpdateupdatesInput | string[]
  }

  export type LoggingCreateManyInput = {
    id?: string
    userName: string
    action: string
    lastChange?: Date | string
    updates?: LoggingCreateupdatesInput | string[]
  }

  export type LoggingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    lastChange?: DateTimeFieldUpdateOperationsInput | Date | string
    updates?: LoggingUpdateupdatesInput | string[]
  }

  export type LoggingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    lastChange?: DateTimeFieldUpdateOperationsInput | Date | string
    updates?: LoggingUpdateupdatesInput | string[]
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

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type EnumZonaNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Zona | EnumZonaFieldRefInput<$PrismaModel> | null
    in?: $Enums.Zona[] | ListEnumZonaFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Zona[] | ListEnumZonaFieldRefInput<$PrismaModel> | null
    not?: NestedEnumZonaNullableFilter<$PrismaModel> | $Enums.Zona | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type ColaboradorNullableScalarRelationFilter = {
    is?: ColaboradorWhereInput | null
    isNot?: ColaboradorWhereInput | null
  }

  export type ColaboradorListRelationFilter = {
    every?: ColaboradorWhereInput
    some?: ColaboradorWhereInput
    none?: ColaboradorWhereInput
  }

  export type EventoListRelationFilter = {
    every?: EventoWhereInput
    some?: EventoWhereInput
    none?: EventoWhereInput
  }

  export type AtendimentoListRelationFilter = {
    every?: AtendimentoWhereInput
    some?: AtendimentoWhereInput
    none?: AtendimentoWhereInput
  }

  export type ProjetoListRelationFilter = {
    every?: ProjetoWhereInput
    some?: ProjetoWhereInput
    none?: ProjetoWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ColaboradorOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EventoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AtendimentoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjetoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ColaboradorCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    cpf?: SortOrder
    email?: SortOrder
    telefone?: SortOrder
    dataNascimento?: SortOrder
    cep?: SortOrder
    zona?: SortOrder
    cidade?: SortOrder
    bairro?: SortOrder
    logradouro?: SortOrder
    categoria?: SortOrder
    observacao?: SortOrder
    curriculo?: SortOrder
    isLideranca?: SortOrder
    liderancaId?: SortOrder
    criadosEm?: SortOrder
    atualizadosEm?: SortOrder
  }

  export type ColaboradorMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    cpf?: SortOrder
    email?: SortOrder
    telefone?: SortOrder
    dataNascimento?: SortOrder
    cep?: SortOrder
    zona?: SortOrder
    cidade?: SortOrder
    bairro?: SortOrder
    logradouro?: SortOrder
    categoria?: SortOrder
    observacao?: SortOrder
    curriculo?: SortOrder
    isLideranca?: SortOrder
    liderancaId?: SortOrder
    criadosEm?: SortOrder
    atualizadosEm?: SortOrder
  }

  export type ColaboradorMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    cpf?: SortOrder
    email?: SortOrder
    telefone?: SortOrder
    dataNascimento?: SortOrder
    cep?: SortOrder
    zona?: SortOrder
    cidade?: SortOrder
    bairro?: SortOrder
    logradouro?: SortOrder
    categoria?: SortOrder
    observacao?: SortOrder
    curriculo?: SortOrder
    isLideranca?: SortOrder
    liderancaId?: SortOrder
    criadosEm?: SortOrder
    atualizadosEm?: SortOrder
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

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumZonaNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Zona | EnumZonaFieldRefInput<$PrismaModel> | null
    in?: $Enums.Zona[] | ListEnumZonaFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Zona[] | ListEnumZonaFieldRefInput<$PrismaModel> | null
    not?: NestedEnumZonaNullableWithAggregatesFilter<$PrismaModel> | $Enums.Zona | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumZonaNullableFilter<$PrismaModel>
    _max?: NestedEnumZonaNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type EnumStatusDefaultFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusDefault | EnumStatusDefaultFieldRefInput<$PrismaModel>
    in?: $Enums.StatusDefault[] | ListEnumStatusDefaultFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusDefault[] | ListEnumStatusDefaultFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusDefaultFilter<$PrismaModel> | $Enums.StatusDefault
  }

  export type DemandaCountOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrder
    intervalo?: SortOrder
    dataInicio?: SortOrder
    dataFim?: SortOrder
    status?: SortOrder
  }

  export type DemandaMaxOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrder
    intervalo?: SortOrder
    dataInicio?: SortOrder
    dataFim?: SortOrder
    status?: SortOrder
  }

  export type DemandaMinOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrder
    intervalo?: SortOrder
    dataInicio?: SortOrder
    dataFim?: SortOrder
    status?: SortOrder
  }

  export type EnumStatusDefaultWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusDefault | EnumStatusDefaultFieldRefInput<$PrismaModel>
    in?: $Enums.StatusDefault[] | ListEnumStatusDefaultFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusDefault[] | ListEnumStatusDefaultFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusDefaultWithAggregatesFilter<$PrismaModel> | $Enums.StatusDefault
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusDefaultFilter<$PrismaModel>
    _max?: NestedEnumStatusDefaultFilter<$PrismaModel>
  }

  export type EnumZonaFilter<$PrismaModel = never> = {
    equals?: $Enums.Zona | EnumZonaFieldRefInput<$PrismaModel>
    in?: $Enums.Zona[] | ListEnumZonaFieldRefInput<$PrismaModel>
    notIn?: $Enums.Zona[] | ListEnumZonaFieldRefInput<$PrismaModel>
    not?: NestedEnumZonaFilter<$PrismaModel> | $Enums.Zona
  }

  export type ProjetoCountOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrder
    data?: SortOrder
    cep?: SortOrder
    zona?: SortOrder
    cidade?: SortOrder
    bairro?: SortOrder
    logradouro?: SortOrder
    colaboradorId?: SortOrder
  }

  export type ProjetoMaxOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrder
    data?: SortOrder
    cep?: SortOrder
    zona?: SortOrder
    cidade?: SortOrder
    bairro?: SortOrder
    logradouro?: SortOrder
    colaboradorId?: SortOrder
  }

  export type ProjetoMinOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrder
    data?: SortOrder
    cep?: SortOrder
    zona?: SortOrder
    cidade?: SortOrder
    bairro?: SortOrder
    logradouro?: SortOrder
    colaboradorId?: SortOrder
  }

  export type EnumZonaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Zona | EnumZonaFieldRefInput<$PrismaModel>
    in?: $Enums.Zona[] | ListEnumZonaFieldRefInput<$PrismaModel>
    notIn?: $Enums.Zona[] | ListEnumZonaFieldRefInput<$PrismaModel>
    not?: NestedEnumZonaWithAggregatesFilter<$PrismaModel> | $Enums.Zona
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumZonaFilter<$PrismaModel>
    _max?: NestedEnumZonaFilter<$PrismaModel>
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

  export type AtendimentoNullableScalarRelationFilter = {
    is?: AtendimentoWhereInput | null
    isNot?: AtendimentoWhereInput | null
  }

  export type ReceitaCountOrderByAggregateInput = {
    id?: SortOrder
    descricao?: SortOrder
    valor?: SortOrder
    data?: SortOrder
    origem?: SortOrder
  }

  export type ReceitaAvgOrderByAggregateInput = {
    valor?: SortOrder
  }

  export type ReceitaMaxOrderByAggregateInput = {
    id?: SortOrder
    descricao?: SortOrder
    valor?: SortOrder
    data?: SortOrder
    origem?: SortOrder
  }

  export type ReceitaMinOrderByAggregateInput = {
    id?: SortOrder
    descricao?: SortOrder
    valor?: SortOrder
    data?: SortOrder
    origem?: SortOrder
  }

  export type ReceitaSumOrderByAggregateInput = {
    valor?: SortOrder
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

  export type EnumStatusEventoFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusEvento | EnumStatusEventoFieldRefInput<$PrismaModel>
    in?: $Enums.StatusEvento[] | ListEnumStatusEventoFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusEvento[] | ListEnumStatusEventoFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusEventoFilter<$PrismaModel> | $Enums.StatusEvento
  }

  export type EnumPrioridadeFilter<$PrismaModel = never> = {
    equals?: $Enums.Prioridade | EnumPrioridadeFieldRefInput<$PrismaModel>
    in?: $Enums.Prioridade[] | ListEnumPrioridadeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Prioridade[] | ListEnumPrioridadeFieldRefInput<$PrismaModel>
    not?: NestedEnumPrioridadeFilter<$PrismaModel> | $Enums.Prioridade
  }

  export type EventoCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    localizacao?: SortOrder
    categoria?: SortOrder
    status?: SortOrder
    prioridade?: SortOrder
    dataInicio?: SortOrder
    dataFim?: SortOrder
  }

  export type EventoMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    localizacao?: SortOrder
    categoria?: SortOrder
    status?: SortOrder
    prioridade?: SortOrder
    dataInicio?: SortOrder
    dataFim?: SortOrder
  }

  export type EventoMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    localizacao?: SortOrder
    categoria?: SortOrder
    status?: SortOrder
    prioridade?: SortOrder
    dataInicio?: SortOrder
    dataFim?: SortOrder
  }

  export type EnumStatusEventoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusEvento | EnumStatusEventoFieldRefInput<$PrismaModel>
    in?: $Enums.StatusEvento[] | ListEnumStatusEventoFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusEvento[] | ListEnumStatusEventoFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusEventoWithAggregatesFilter<$PrismaModel> | $Enums.StatusEvento
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusEventoFilter<$PrismaModel>
    _max?: NestedEnumStatusEventoFilter<$PrismaModel>
  }

  export type EnumPrioridadeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Prioridade | EnumPrioridadeFieldRefInput<$PrismaModel>
    in?: $Enums.Prioridade[] | ListEnumPrioridadeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Prioridade[] | ListEnumPrioridadeFieldRefInput<$PrismaModel>
    not?: NestedEnumPrioridadeWithAggregatesFilter<$PrismaModel> | $Enums.Prioridade
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPrioridadeFilter<$PrismaModel>
    _max?: NestedEnumPrioridadeFilter<$PrismaModel>
  }

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    userName?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    userName?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    userName?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type EnumAtendimentoTipoFilter<$PrismaModel = never> = {
    equals?: $Enums.AtendimentoTipo | EnumAtendimentoTipoFieldRefInput<$PrismaModel>
    in?: $Enums.AtendimentoTipo[] | ListEnumAtendimentoTipoFieldRefInput<$PrismaModel>
    notIn?: $Enums.AtendimentoTipo[] | ListEnumAtendimentoTipoFieldRefInput<$PrismaModel>
    not?: NestedEnumAtendimentoTipoFilter<$PrismaModel> | $Enums.AtendimentoTipo
  }

  export type ReceitaNullableScalarRelationFilter = {
    is?: ReceitaWhereInput | null
    isNot?: ReceitaWhereInput | null
  }

  export type DemandaListRelationFilter = {
    every?: DemandaWhereInput
    some?: DemandaWhereInput
    none?: DemandaWhereInput
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type DemandaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AtendimentoCountOrderByAggregateInput = {
    id?: SortOrder
    descricao?: SortOrder
    tipo?: SortOrder
    receitaId?: SortOrder
    colaboradorId?: SortOrder
    userId?: SortOrder
    criadoEm?: SortOrder
  }

  export type AtendimentoMaxOrderByAggregateInput = {
    id?: SortOrder
    descricao?: SortOrder
    tipo?: SortOrder
    receitaId?: SortOrder
    colaboradorId?: SortOrder
    userId?: SortOrder
    criadoEm?: SortOrder
  }

  export type AtendimentoMinOrderByAggregateInput = {
    id?: SortOrder
    descricao?: SortOrder
    tipo?: SortOrder
    receitaId?: SortOrder
    colaboradorId?: SortOrder
    userId?: SortOrder
    criadoEm?: SortOrder
  }

  export type EnumAtendimentoTipoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AtendimentoTipo | EnumAtendimentoTipoFieldRefInput<$PrismaModel>
    in?: $Enums.AtendimentoTipo[] | ListEnumAtendimentoTipoFieldRefInput<$PrismaModel>
    notIn?: $Enums.AtendimentoTipo[] | ListEnumAtendimentoTipoFieldRefInput<$PrismaModel>
    not?: NestedEnumAtendimentoTipoWithAggregatesFilter<$PrismaModel> | $Enums.AtendimentoTipo
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAtendimentoTipoFilter<$PrismaModel>
    _max?: NestedEnumAtendimentoTipoFilter<$PrismaModel>
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type LoggingCountOrderByAggregateInput = {
    id?: SortOrder
    userName?: SortOrder
    action?: SortOrder
    lastChange?: SortOrder
    updates?: SortOrder
  }

  export type LoggingMaxOrderByAggregateInput = {
    id?: SortOrder
    userName?: SortOrder
    action?: SortOrder
    lastChange?: SortOrder
  }

  export type LoggingMinOrderByAggregateInput = {
    id?: SortOrder
    userName?: SortOrder
    action?: SortOrder
    lastChange?: SortOrder
  }

  export type ColaboradorCreateNestedOneWithoutColaboradoresInput = {
    create?: XOR<ColaboradorCreateWithoutColaboradoresInput, ColaboradorUncheckedCreateWithoutColaboradoresInput>
    connectOrCreate?: ColaboradorCreateOrConnectWithoutColaboradoresInput
    connect?: ColaboradorWhereUniqueInput
  }

  export type ColaboradorCreateNestedManyWithoutLiderancaInput = {
    create?: XOR<ColaboradorCreateWithoutLiderancaInput, ColaboradorUncheckedCreateWithoutLiderancaInput> | ColaboradorCreateWithoutLiderancaInput[] | ColaboradorUncheckedCreateWithoutLiderancaInput[]
    connectOrCreate?: ColaboradorCreateOrConnectWithoutLiderancaInput | ColaboradorCreateOrConnectWithoutLiderancaInput[]
    createMany?: ColaboradorCreateManyLiderancaInputEnvelope
    connect?: ColaboradorWhereUniqueInput | ColaboradorWhereUniqueInput[]
  }

  export type EventoCreateNestedManyWithoutParticipantesInput = {
    create?: XOR<EventoCreateWithoutParticipantesInput, EventoUncheckedCreateWithoutParticipantesInput> | EventoCreateWithoutParticipantesInput[] | EventoUncheckedCreateWithoutParticipantesInput[]
    connectOrCreate?: EventoCreateOrConnectWithoutParticipantesInput | EventoCreateOrConnectWithoutParticipantesInput[]
    connect?: EventoWhereUniqueInput | EventoWhereUniqueInput[]
  }

  export type AtendimentoCreateNestedManyWithoutColaboradorInput = {
    create?: XOR<AtendimentoCreateWithoutColaboradorInput, AtendimentoUncheckedCreateWithoutColaboradorInput> | AtendimentoCreateWithoutColaboradorInput[] | AtendimentoUncheckedCreateWithoutColaboradorInput[]
    connectOrCreate?: AtendimentoCreateOrConnectWithoutColaboradorInput | AtendimentoCreateOrConnectWithoutColaboradorInput[]
    createMany?: AtendimentoCreateManyColaboradorInputEnvelope
    connect?: AtendimentoWhereUniqueInput | AtendimentoWhereUniqueInput[]
  }

  export type ProjetoCreateNestedManyWithoutColaboradorInput = {
    create?: XOR<ProjetoCreateWithoutColaboradorInput, ProjetoUncheckedCreateWithoutColaboradorInput> | ProjetoCreateWithoutColaboradorInput[] | ProjetoUncheckedCreateWithoutColaboradorInput[]
    connectOrCreate?: ProjetoCreateOrConnectWithoutColaboradorInput | ProjetoCreateOrConnectWithoutColaboradorInput[]
    createMany?: ProjetoCreateManyColaboradorInputEnvelope
    connect?: ProjetoWhereUniqueInput | ProjetoWhereUniqueInput[]
  }

  export type ColaboradorUncheckedCreateNestedManyWithoutLiderancaInput = {
    create?: XOR<ColaboradorCreateWithoutLiderancaInput, ColaboradorUncheckedCreateWithoutLiderancaInput> | ColaboradorCreateWithoutLiderancaInput[] | ColaboradorUncheckedCreateWithoutLiderancaInput[]
    connectOrCreate?: ColaboradorCreateOrConnectWithoutLiderancaInput | ColaboradorCreateOrConnectWithoutLiderancaInput[]
    createMany?: ColaboradorCreateManyLiderancaInputEnvelope
    connect?: ColaboradorWhereUniqueInput | ColaboradorWhereUniqueInput[]
  }

  export type EventoUncheckedCreateNestedManyWithoutParticipantesInput = {
    create?: XOR<EventoCreateWithoutParticipantesInput, EventoUncheckedCreateWithoutParticipantesInput> | EventoCreateWithoutParticipantesInput[] | EventoUncheckedCreateWithoutParticipantesInput[]
    connectOrCreate?: EventoCreateOrConnectWithoutParticipantesInput | EventoCreateOrConnectWithoutParticipantesInput[]
    connect?: EventoWhereUniqueInput | EventoWhereUniqueInput[]
  }

  export type AtendimentoUncheckedCreateNestedManyWithoutColaboradorInput = {
    create?: XOR<AtendimentoCreateWithoutColaboradorInput, AtendimentoUncheckedCreateWithoutColaboradorInput> | AtendimentoCreateWithoutColaboradorInput[] | AtendimentoUncheckedCreateWithoutColaboradorInput[]
    connectOrCreate?: AtendimentoCreateOrConnectWithoutColaboradorInput | AtendimentoCreateOrConnectWithoutColaboradorInput[]
    createMany?: AtendimentoCreateManyColaboradorInputEnvelope
    connect?: AtendimentoWhereUniqueInput | AtendimentoWhereUniqueInput[]
  }

  export type ProjetoUncheckedCreateNestedManyWithoutColaboradorInput = {
    create?: XOR<ProjetoCreateWithoutColaboradorInput, ProjetoUncheckedCreateWithoutColaboradorInput> | ProjetoCreateWithoutColaboradorInput[] | ProjetoUncheckedCreateWithoutColaboradorInput[]
    connectOrCreate?: ProjetoCreateOrConnectWithoutColaboradorInput | ProjetoCreateOrConnectWithoutColaboradorInput[]
    createMany?: ProjetoCreateManyColaboradorInputEnvelope
    connect?: ProjetoWhereUniqueInput | ProjetoWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableEnumZonaFieldUpdateOperationsInput = {
    set?: $Enums.Zona | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ColaboradorUpdateOneWithoutColaboradoresNestedInput = {
    create?: XOR<ColaboradorCreateWithoutColaboradoresInput, ColaboradorUncheckedCreateWithoutColaboradoresInput>
    connectOrCreate?: ColaboradorCreateOrConnectWithoutColaboradoresInput
    upsert?: ColaboradorUpsertWithoutColaboradoresInput
    disconnect?: ColaboradorWhereInput | boolean
    delete?: ColaboradorWhereInput | boolean
    connect?: ColaboradorWhereUniqueInput
    update?: XOR<XOR<ColaboradorUpdateToOneWithWhereWithoutColaboradoresInput, ColaboradorUpdateWithoutColaboradoresInput>, ColaboradorUncheckedUpdateWithoutColaboradoresInput>
  }

  export type ColaboradorUpdateManyWithoutLiderancaNestedInput = {
    create?: XOR<ColaboradorCreateWithoutLiderancaInput, ColaboradorUncheckedCreateWithoutLiderancaInput> | ColaboradorCreateWithoutLiderancaInput[] | ColaboradorUncheckedCreateWithoutLiderancaInput[]
    connectOrCreate?: ColaboradorCreateOrConnectWithoutLiderancaInput | ColaboradorCreateOrConnectWithoutLiderancaInput[]
    upsert?: ColaboradorUpsertWithWhereUniqueWithoutLiderancaInput | ColaboradorUpsertWithWhereUniqueWithoutLiderancaInput[]
    createMany?: ColaboradorCreateManyLiderancaInputEnvelope
    set?: ColaboradorWhereUniqueInput | ColaboradorWhereUniqueInput[]
    disconnect?: ColaboradorWhereUniqueInput | ColaboradorWhereUniqueInput[]
    delete?: ColaboradorWhereUniqueInput | ColaboradorWhereUniqueInput[]
    connect?: ColaboradorWhereUniqueInput | ColaboradorWhereUniqueInput[]
    update?: ColaboradorUpdateWithWhereUniqueWithoutLiderancaInput | ColaboradorUpdateWithWhereUniqueWithoutLiderancaInput[]
    updateMany?: ColaboradorUpdateManyWithWhereWithoutLiderancaInput | ColaboradorUpdateManyWithWhereWithoutLiderancaInput[]
    deleteMany?: ColaboradorScalarWhereInput | ColaboradorScalarWhereInput[]
  }

  export type EventoUpdateManyWithoutParticipantesNestedInput = {
    create?: XOR<EventoCreateWithoutParticipantesInput, EventoUncheckedCreateWithoutParticipantesInput> | EventoCreateWithoutParticipantesInput[] | EventoUncheckedCreateWithoutParticipantesInput[]
    connectOrCreate?: EventoCreateOrConnectWithoutParticipantesInput | EventoCreateOrConnectWithoutParticipantesInput[]
    upsert?: EventoUpsertWithWhereUniqueWithoutParticipantesInput | EventoUpsertWithWhereUniqueWithoutParticipantesInput[]
    set?: EventoWhereUniqueInput | EventoWhereUniqueInput[]
    disconnect?: EventoWhereUniqueInput | EventoWhereUniqueInput[]
    delete?: EventoWhereUniqueInput | EventoWhereUniqueInput[]
    connect?: EventoWhereUniqueInput | EventoWhereUniqueInput[]
    update?: EventoUpdateWithWhereUniqueWithoutParticipantesInput | EventoUpdateWithWhereUniqueWithoutParticipantesInput[]
    updateMany?: EventoUpdateManyWithWhereWithoutParticipantesInput | EventoUpdateManyWithWhereWithoutParticipantesInput[]
    deleteMany?: EventoScalarWhereInput | EventoScalarWhereInput[]
  }

  export type AtendimentoUpdateManyWithoutColaboradorNestedInput = {
    create?: XOR<AtendimentoCreateWithoutColaboradorInput, AtendimentoUncheckedCreateWithoutColaboradorInput> | AtendimentoCreateWithoutColaboradorInput[] | AtendimentoUncheckedCreateWithoutColaboradorInput[]
    connectOrCreate?: AtendimentoCreateOrConnectWithoutColaboradorInput | AtendimentoCreateOrConnectWithoutColaboradorInput[]
    upsert?: AtendimentoUpsertWithWhereUniqueWithoutColaboradorInput | AtendimentoUpsertWithWhereUniqueWithoutColaboradorInput[]
    createMany?: AtendimentoCreateManyColaboradorInputEnvelope
    set?: AtendimentoWhereUniqueInput | AtendimentoWhereUniqueInput[]
    disconnect?: AtendimentoWhereUniqueInput | AtendimentoWhereUniqueInput[]
    delete?: AtendimentoWhereUniqueInput | AtendimentoWhereUniqueInput[]
    connect?: AtendimentoWhereUniqueInput | AtendimentoWhereUniqueInput[]
    update?: AtendimentoUpdateWithWhereUniqueWithoutColaboradorInput | AtendimentoUpdateWithWhereUniqueWithoutColaboradorInput[]
    updateMany?: AtendimentoUpdateManyWithWhereWithoutColaboradorInput | AtendimentoUpdateManyWithWhereWithoutColaboradorInput[]
    deleteMany?: AtendimentoScalarWhereInput | AtendimentoScalarWhereInput[]
  }

  export type ProjetoUpdateManyWithoutColaboradorNestedInput = {
    create?: XOR<ProjetoCreateWithoutColaboradorInput, ProjetoUncheckedCreateWithoutColaboradorInput> | ProjetoCreateWithoutColaboradorInput[] | ProjetoUncheckedCreateWithoutColaboradorInput[]
    connectOrCreate?: ProjetoCreateOrConnectWithoutColaboradorInput | ProjetoCreateOrConnectWithoutColaboradorInput[]
    upsert?: ProjetoUpsertWithWhereUniqueWithoutColaboradorInput | ProjetoUpsertWithWhereUniqueWithoutColaboradorInput[]
    createMany?: ProjetoCreateManyColaboradorInputEnvelope
    set?: ProjetoWhereUniqueInput | ProjetoWhereUniqueInput[]
    disconnect?: ProjetoWhereUniqueInput | ProjetoWhereUniqueInput[]
    delete?: ProjetoWhereUniqueInput | ProjetoWhereUniqueInput[]
    connect?: ProjetoWhereUniqueInput | ProjetoWhereUniqueInput[]
    update?: ProjetoUpdateWithWhereUniqueWithoutColaboradorInput | ProjetoUpdateWithWhereUniqueWithoutColaboradorInput[]
    updateMany?: ProjetoUpdateManyWithWhereWithoutColaboradorInput | ProjetoUpdateManyWithWhereWithoutColaboradorInput[]
    deleteMany?: ProjetoScalarWhereInput | ProjetoScalarWhereInput[]
  }

  export type ColaboradorUncheckedUpdateManyWithoutLiderancaNestedInput = {
    create?: XOR<ColaboradorCreateWithoutLiderancaInput, ColaboradorUncheckedCreateWithoutLiderancaInput> | ColaboradorCreateWithoutLiderancaInput[] | ColaboradorUncheckedCreateWithoutLiderancaInput[]
    connectOrCreate?: ColaboradorCreateOrConnectWithoutLiderancaInput | ColaboradorCreateOrConnectWithoutLiderancaInput[]
    upsert?: ColaboradorUpsertWithWhereUniqueWithoutLiderancaInput | ColaboradorUpsertWithWhereUniqueWithoutLiderancaInput[]
    createMany?: ColaboradorCreateManyLiderancaInputEnvelope
    set?: ColaboradorWhereUniqueInput | ColaboradorWhereUniqueInput[]
    disconnect?: ColaboradorWhereUniqueInput | ColaboradorWhereUniqueInput[]
    delete?: ColaboradorWhereUniqueInput | ColaboradorWhereUniqueInput[]
    connect?: ColaboradorWhereUniqueInput | ColaboradorWhereUniqueInput[]
    update?: ColaboradorUpdateWithWhereUniqueWithoutLiderancaInput | ColaboradorUpdateWithWhereUniqueWithoutLiderancaInput[]
    updateMany?: ColaboradorUpdateManyWithWhereWithoutLiderancaInput | ColaboradorUpdateManyWithWhereWithoutLiderancaInput[]
    deleteMany?: ColaboradorScalarWhereInput | ColaboradorScalarWhereInput[]
  }

  export type EventoUncheckedUpdateManyWithoutParticipantesNestedInput = {
    create?: XOR<EventoCreateWithoutParticipantesInput, EventoUncheckedCreateWithoutParticipantesInput> | EventoCreateWithoutParticipantesInput[] | EventoUncheckedCreateWithoutParticipantesInput[]
    connectOrCreate?: EventoCreateOrConnectWithoutParticipantesInput | EventoCreateOrConnectWithoutParticipantesInput[]
    upsert?: EventoUpsertWithWhereUniqueWithoutParticipantesInput | EventoUpsertWithWhereUniqueWithoutParticipantesInput[]
    set?: EventoWhereUniqueInput | EventoWhereUniqueInput[]
    disconnect?: EventoWhereUniqueInput | EventoWhereUniqueInput[]
    delete?: EventoWhereUniqueInput | EventoWhereUniqueInput[]
    connect?: EventoWhereUniqueInput | EventoWhereUniqueInput[]
    update?: EventoUpdateWithWhereUniqueWithoutParticipantesInput | EventoUpdateWithWhereUniqueWithoutParticipantesInput[]
    updateMany?: EventoUpdateManyWithWhereWithoutParticipantesInput | EventoUpdateManyWithWhereWithoutParticipantesInput[]
    deleteMany?: EventoScalarWhereInput | EventoScalarWhereInput[]
  }

  export type AtendimentoUncheckedUpdateManyWithoutColaboradorNestedInput = {
    create?: XOR<AtendimentoCreateWithoutColaboradorInput, AtendimentoUncheckedCreateWithoutColaboradorInput> | AtendimentoCreateWithoutColaboradorInput[] | AtendimentoUncheckedCreateWithoutColaboradorInput[]
    connectOrCreate?: AtendimentoCreateOrConnectWithoutColaboradorInput | AtendimentoCreateOrConnectWithoutColaboradorInput[]
    upsert?: AtendimentoUpsertWithWhereUniqueWithoutColaboradorInput | AtendimentoUpsertWithWhereUniqueWithoutColaboradorInput[]
    createMany?: AtendimentoCreateManyColaboradorInputEnvelope
    set?: AtendimentoWhereUniqueInput | AtendimentoWhereUniqueInput[]
    disconnect?: AtendimentoWhereUniqueInput | AtendimentoWhereUniqueInput[]
    delete?: AtendimentoWhereUniqueInput | AtendimentoWhereUniqueInput[]
    connect?: AtendimentoWhereUniqueInput | AtendimentoWhereUniqueInput[]
    update?: AtendimentoUpdateWithWhereUniqueWithoutColaboradorInput | AtendimentoUpdateWithWhereUniqueWithoutColaboradorInput[]
    updateMany?: AtendimentoUpdateManyWithWhereWithoutColaboradorInput | AtendimentoUpdateManyWithWhereWithoutColaboradorInput[]
    deleteMany?: AtendimentoScalarWhereInput | AtendimentoScalarWhereInput[]
  }

  export type ProjetoUncheckedUpdateManyWithoutColaboradorNestedInput = {
    create?: XOR<ProjetoCreateWithoutColaboradorInput, ProjetoUncheckedCreateWithoutColaboradorInput> | ProjetoCreateWithoutColaboradorInput[] | ProjetoUncheckedCreateWithoutColaboradorInput[]
    connectOrCreate?: ProjetoCreateOrConnectWithoutColaboradorInput | ProjetoCreateOrConnectWithoutColaboradorInput[]
    upsert?: ProjetoUpsertWithWhereUniqueWithoutColaboradorInput | ProjetoUpsertWithWhereUniqueWithoutColaboradorInput[]
    createMany?: ProjetoCreateManyColaboradorInputEnvelope
    set?: ProjetoWhereUniqueInput | ProjetoWhereUniqueInput[]
    disconnect?: ProjetoWhereUniqueInput | ProjetoWhereUniqueInput[]
    delete?: ProjetoWhereUniqueInput | ProjetoWhereUniqueInput[]
    connect?: ProjetoWhereUniqueInput | ProjetoWhereUniqueInput[]
    update?: ProjetoUpdateWithWhereUniqueWithoutColaboradorInput | ProjetoUpdateWithWhereUniqueWithoutColaboradorInput[]
    updateMany?: ProjetoUpdateManyWithWhereWithoutColaboradorInput | ProjetoUpdateManyWithWhereWithoutColaboradorInput[]
    deleteMany?: ProjetoScalarWhereInput | ProjetoScalarWhereInput[]
  }

  export type AtendimentoCreateNestedManyWithoutDemandaInput = {
    create?: XOR<AtendimentoCreateWithoutDemandaInput, AtendimentoUncheckedCreateWithoutDemandaInput> | AtendimentoCreateWithoutDemandaInput[] | AtendimentoUncheckedCreateWithoutDemandaInput[]
    connectOrCreate?: AtendimentoCreateOrConnectWithoutDemandaInput | AtendimentoCreateOrConnectWithoutDemandaInput[]
    connect?: AtendimentoWhereUniqueInput | AtendimentoWhereUniqueInput[]
  }

  export type AtendimentoUncheckedCreateNestedManyWithoutDemandaInput = {
    create?: XOR<AtendimentoCreateWithoutDemandaInput, AtendimentoUncheckedCreateWithoutDemandaInput> | AtendimentoCreateWithoutDemandaInput[] | AtendimentoUncheckedCreateWithoutDemandaInput[]
    connectOrCreate?: AtendimentoCreateOrConnectWithoutDemandaInput | AtendimentoCreateOrConnectWithoutDemandaInput[]
    connect?: AtendimentoWhereUniqueInput | AtendimentoWhereUniqueInput[]
  }

  export type EnumStatusDefaultFieldUpdateOperationsInput = {
    set?: $Enums.StatusDefault
  }

  export type AtendimentoUpdateManyWithoutDemandaNestedInput = {
    create?: XOR<AtendimentoCreateWithoutDemandaInput, AtendimentoUncheckedCreateWithoutDemandaInput> | AtendimentoCreateWithoutDemandaInput[] | AtendimentoUncheckedCreateWithoutDemandaInput[]
    connectOrCreate?: AtendimentoCreateOrConnectWithoutDemandaInput | AtendimentoCreateOrConnectWithoutDemandaInput[]
    upsert?: AtendimentoUpsertWithWhereUniqueWithoutDemandaInput | AtendimentoUpsertWithWhereUniqueWithoutDemandaInput[]
    set?: AtendimentoWhereUniqueInput | AtendimentoWhereUniqueInput[]
    disconnect?: AtendimentoWhereUniqueInput | AtendimentoWhereUniqueInput[]
    delete?: AtendimentoWhereUniqueInput | AtendimentoWhereUniqueInput[]
    connect?: AtendimentoWhereUniqueInput | AtendimentoWhereUniqueInput[]
    update?: AtendimentoUpdateWithWhereUniqueWithoutDemandaInput | AtendimentoUpdateWithWhereUniqueWithoutDemandaInput[]
    updateMany?: AtendimentoUpdateManyWithWhereWithoutDemandaInput | AtendimentoUpdateManyWithWhereWithoutDemandaInput[]
    deleteMany?: AtendimentoScalarWhereInput | AtendimentoScalarWhereInput[]
  }

  export type AtendimentoUncheckedUpdateManyWithoutDemandaNestedInput = {
    create?: XOR<AtendimentoCreateWithoutDemandaInput, AtendimentoUncheckedCreateWithoutDemandaInput> | AtendimentoCreateWithoutDemandaInput[] | AtendimentoUncheckedCreateWithoutDemandaInput[]
    connectOrCreate?: AtendimentoCreateOrConnectWithoutDemandaInput | AtendimentoCreateOrConnectWithoutDemandaInput[]
    upsert?: AtendimentoUpsertWithWhereUniqueWithoutDemandaInput | AtendimentoUpsertWithWhereUniqueWithoutDemandaInput[]
    set?: AtendimentoWhereUniqueInput | AtendimentoWhereUniqueInput[]
    disconnect?: AtendimentoWhereUniqueInput | AtendimentoWhereUniqueInput[]
    delete?: AtendimentoWhereUniqueInput | AtendimentoWhereUniqueInput[]
    connect?: AtendimentoWhereUniqueInput | AtendimentoWhereUniqueInput[]
    update?: AtendimentoUpdateWithWhereUniqueWithoutDemandaInput | AtendimentoUpdateWithWhereUniqueWithoutDemandaInput[]
    updateMany?: AtendimentoUpdateManyWithWhereWithoutDemandaInput | AtendimentoUpdateManyWithWhereWithoutDemandaInput[]
    deleteMany?: AtendimentoScalarWhereInput | AtendimentoScalarWhereInput[]
  }

  export type ColaboradorCreateNestedOneWithoutProjetosInput = {
    create?: XOR<ColaboradorCreateWithoutProjetosInput, ColaboradorUncheckedCreateWithoutProjetosInput>
    connectOrCreate?: ColaboradorCreateOrConnectWithoutProjetosInput
    connect?: ColaboradorWhereUniqueInput
  }

  export type AtendimentoCreateNestedManyWithoutProjetoInput = {
    create?: XOR<AtendimentoCreateWithoutProjetoInput, AtendimentoUncheckedCreateWithoutProjetoInput> | AtendimentoCreateWithoutProjetoInput[] | AtendimentoUncheckedCreateWithoutProjetoInput[]
    connectOrCreate?: AtendimentoCreateOrConnectWithoutProjetoInput | AtendimentoCreateOrConnectWithoutProjetoInput[]
    connect?: AtendimentoWhereUniqueInput | AtendimentoWhereUniqueInput[]
  }

  export type AtendimentoUncheckedCreateNestedManyWithoutProjetoInput = {
    create?: XOR<AtendimentoCreateWithoutProjetoInput, AtendimentoUncheckedCreateWithoutProjetoInput> | AtendimentoCreateWithoutProjetoInput[] | AtendimentoUncheckedCreateWithoutProjetoInput[]
    connectOrCreate?: AtendimentoCreateOrConnectWithoutProjetoInput | AtendimentoCreateOrConnectWithoutProjetoInput[]
    connect?: AtendimentoWhereUniqueInput | AtendimentoWhereUniqueInput[]
  }

  export type EnumZonaFieldUpdateOperationsInput = {
    set?: $Enums.Zona
  }

  export type ColaboradorUpdateOneWithoutProjetosNestedInput = {
    create?: XOR<ColaboradorCreateWithoutProjetosInput, ColaboradorUncheckedCreateWithoutProjetosInput>
    connectOrCreate?: ColaboradorCreateOrConnectWithoutProjetosInput
    upsert?: ColaboradorUpsertWithoutProjetosInput
    disconnect?: ColaboradorWhereInput | boolean
    delete?: ColaboradorWhereInput | boolean
    connect?: ColaboradorWhereUniqueInput
    update?: XOR<XOR<ColaboradorUpdateToOneWithWhereWithoutProjetosInput, ColaboradorUpdateWithoutProjetosInput>, ColaboradorUncheckedUpdateWithoutProjetosInput>
  }

  export type AtendimentoUpdateManyWithoutProjetoNestedInput = {
    create?: XOR<AtendimentoCreateWithoutProjetoInput, AtendimentoUncheckedCreateWithoutProjetoInput> | AtendimentoCreateWithoutProjetoInput[] | AtendimentoUncheckedCreateWithoutProjetoInput[]
    connectOrCreate?: AtendimentoCreateOrConnectWithoutProjetoInput | AtendimentoCreateOrConnectWithoutProjetoInput[]
    upsert?: AtendimentoUpsertWithWhereUniqueWithoutProjetoInput | AtendimentoUpsertWithWhereUniqueWithoutProjetoInput[]
    set?: AtendimentoWhereUniqueInput | AtendimentoWhereUniqueInput[]
    disconnect?: AtendimentoWhereUniqueInput | AtendimentoWhereUniqueInput[]
    delete?: AtendimentoWhereUniqueInput | AtendimentoWhereUniqueInput[]
    connect?: AtendimentoWhereUniqueInput | AtendimentoWhereUniqueInput[]
    update?: AtendimentoUpdateWithWhereUniqueWithoutProjetoInput | AtendimentoUpdateWithWhereUniqueWithoutProjetoInput[]
    updateMany?: AtendimentoUpdateManyWithWhereWithoutProjetoInput | AtendimentoUpdateManyWithWhereWithoutProjetoInput[]
    deleteMany?: AtendimentoScalarWhereInput | AtendimentoScalarWhereInput[]
  }

  export type AtendimentoUncheckedUpdateManyWithoutProjetoNestedInput = {
    create?: XOR<AtendimentoCreateWithoutProjetoInput, AtendimentoUncheckedCreateWithoutProjetoInput> | AtendimentoCreateWithoutProjetoInput[] | AtendimentoUncheckedCreateWithoutProjetoInput[]
    connectOrCreate?: AtendimentoCreateOrConnectWithoutProjetoInput | AtendimentoCreateOrConnectWithoutProjetoInput[]
    upsert?: AtendimentoUpsertWithWhereUniqueWithoutProjetoInput | AtendimentoUpsertWithWhereUniqueWithoutProjetoInput[]
    set?: AtendimentoWhereUniqueInput | AtendimentoWhereUniqueInput[]
    disconnect?: AtendimentoWhereUniqueInput | AtendimentoWhereUniqueInput[]
    delete?: AtendimentoWhereUniqueInput | AtendimentoWhereUniqueInput[]
    connect?: AtendimentoWhereUniqueInput | AtendimentoWhereUniqueInput[]
    update?: AtendimentoUpdateWithWhereUniqueWithoutProjetoInput | AtendimentoUpdateWithWhereUniqueWithoutProjetoInput[]
    updateMany?: AtendimentoUpdateManyWithWhereWithoutProjetoInput | AtendimentoUpdateManyWithWhereWithoutProjetoInput[]
    deleteMany?: AtendimentoScalarWhereInput | AtendimentoScalarWhereInput[]
  }

  export type AtendimentoCreateNestedOneWithoutReceitaInput = {
    create?: XOR<AtendimentoCreateWithoutReceitaInput, AtendimentoUncheckedCreateWithoutReceitaInput>
    connectOrCreate?: AtendimentoCreateOrConnectWithoutReceitaInput
    connect?: AtendimentoWhereUniqueInput
  }

  export type AtendimentoUncheckedCreateNestedOneWithoutReceitaInput = {
    create?: XOR<AtendimentoCreateWithoutReceitaInput, AtendimentoUncheckedCreateWithoutReceitaInput>
    connectOrCreate?: AtendimentoCreateOrConnectWithoutReceitaInput
    connect?: AtendimentoWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AtendimentoUpdateOneWithoutReceitaNestedInput = {
    create?: XOR<AtendimentoCreateWithoutReceitaInput, AtendimentoUncheckedCreateWithoutReceitaInput>
    connectOrCreate?: AtendimentoCreateOrConnectWithoutReceitaInput
    upsert?: AtendimentoUpsertWithoutReceitaInput
    disconnect?: AtendimentoWhereInput | boolean
    delete?: AtendimentoWhereInput | boolean
    connect?: AtendimentoWhereUniqueInput
    update?: XOR<XOR<AtendimentoUpdateToOneWithWhereWithoutReceitaInput, AtendimentoUpdateWithoutReceitaInput>, AtendimentoUncheckedUpdateWithoutReceitaInput>
  }

  export type AtendimentoUncheckedUpdateOneWithoutReceitaNestedInput = {
    create?: XOR<AtendimentoCreateWithoutReceitaInput, AtendimentoUncheckedCreateWithoutReceitaInput>
    connectOrCreate?: AtendimentoCreateOrConnectWithoutReceitaInput
    upsert?: AtendimentoUpsertWithoutReceitaInput
    disconnect?: AtendimentoWhereInput | boolean
    delete?: AtendimentoWhereInput | boolean
    connect?: AtendimentoWhereUniqueInput
    update?: XOR<XOR<AtendimentoUpdateToOneWithWhereWithoutReceitaInput, AtendimentoUpdateWithoutReceitaInput>, AtendimentoUncheckedUpdateWithoutReceitaInput>
  }

  export type ColaboradorCreateNestedManyWithoutEventosInput = {
    create?: XOR<ColaboradorCreateWithoutEventosInput, ColaboradorUncheckedCreateWithoutEventosInput> | ColaboradorCreateWithoutEventosInput[] | ColaboradorUncheckedCreateWithoutEventosInput[]
    connectOrCreate?: ColaboradorCreateOrConnectWithoutEventosInput | ColaboradorCreateOrConnectWithoutEventosInput[]
    connect?: ColaboradorWhereUniqueInput | ColaboradorWhereUniqueInput[]
  }

  export type ColaboradorUncheckedCreateNestedManyWithoutEventosInput = {
    create?: XOR<ColaboradorCreateWithoutEventosInput, ColaboradorUncheckedCreateWithoutEventosInput> | ColaboradorCreateWithoutEventosInput[] | ColaboradorUncheckedCreateWithoutEventosInput[]
    connectOrCreate?: ColaboradorCreateOrConnectWithoutEventosInput | ColaboradorCreateOrConnectWithoutEventosInput[]
    connect?: ColaboradorWhereUniqueInput | ColaboradorWhereUniqueInput[]
  }

  export type EnumStatusEventoFieldUpdateOperationsInput = {
    set?: $Enums.StatusEvento
  }

  export type EnumPrioridadeFieldUpdateOperationsInput = {
    set?: $Enums.Prioridade
  }

  export type ColaboradorUpdateManyWithoutEventosNestedInput = {
    create?: XOR<ColaboradorCreateWithoutEventosInput, ColaboradorUncheckedCreateWithoutEventosInput> | ColaboradorCreateWithoutEventosInput[] | ColaboradorUncheckedCreateWithoutEventosInput[]
    connectOrCreate?: ColaboradorCreateOrConnectWithoutEventosInput | ColaboradorCreateOrConnectWithoutEventosInput[]
    upsert?: ColaboradorUpsertWithWhereUniqueWithoutEventosInput | ColaboradorUpsertWithWhereUniqueWithoutEventosInput[]
    set?: ColaboradorWhereUniqueInput | ColaboradorWhereUniqueInput[]
    disconnect?: ColaboradorWhereUniqueInput | ColaboradorWhereUniqueInput[]
    delete?: ColaboradorWhereUniqueInput | ColaboradorWhereUniqueInput[]
    connect?: ColaboradorWhereUniqueInput | ColaboradorWhereUniqueInput[]
    update?: ColaboradorUpdateWithWhereUniqueWithoutEventosInput | ColaboradorUpdateWithWhereUniqueWithoutEventosInput[]
    updateMany?: ColaboradorUpdateManyWithWhereWithoutEventosInput | ColaboradorUpdateManyWithWhereWithoutEventosInput[]
    deleteMany?: ColaboradorScalarWhereInput | ColaboradorScalarWhereInput[]
  }

  export type ColaboradorUncheckedUpdateManyWithoutEventosNestedInput = {
    create?: XOR<ColaboradorCreateWithoutEventosInput, ColaboradorUncheckedCreateWithoutEventosInput> | ColaboradorCreateWithoutEventosInput[] | ColaboradorUncheckedCreateWithoutEventosInput[]
    connectOrCreate?: ColaboradorCreateOrConnectWithoutEventosInput | ColaboradorCreateOrConnectWithoutEventosInput[]
    upsert?: ColaboradorUpsertWithWhereUniqueWithoutEventosInput | ColaboradorUpsertWithWhereUniqueWithoutEventosInput[]
    set?: ColaboradorWhereUniqueInput | ColaboradorWhereUniqueInput[]
    disconnect?: ColaboradorWhereUniqueInput | ColaboradorWhereUniqueInput[]
    delete?: ColaboradorWhereUniqueInput | ColaboradorWhereUniqueInput[]
    connect?: ColaboradorWhereUniqueInput | ColaboradorWhereUniqueInput[]
    update?: ColaboradorUpdateWithWhereUniqueWithoutEventosInput | ColaboradorUpdateWithWhereUniqueWithoutEventosInput[]
    updateMany?: ColaboradorUpdateManyWithWhereWithoutEventosInput | ColaboradorUpdateManyWithWhereWithoutEventosInput[]
    deleteMany?: ColaboradorScalarWhereInput | ColaboradorScalarWhereInput[]
  }

  export type AtendimentoCreateNestedManyWithoutUserInput = {
    create?: XOR<AtendimentoCreateWithoutUserInput, AtendimentoUncheckedCreateWithoutUserInput> | AtendimentoCreateWithoutUserInput[] | AtendimentoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AtendimentoCreateOrConnectWithoutUserInput | AtendimentoCreateOrConnectWithoutUserInput[]
    createMany?: AtendimentoCreateManyUserInputEnvelope
    connect?: AtendimentoWhereUniqueInput | AtendimentoWhereUniqueInput[]
  }

  export type AtendimentoUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AtendimentoCreateWithoutUserInput, AtendimentoUncheckedCreateWithoutUserInput> | AtendimentoCreateWithoutUserInput[] | AtendimentoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AtendimentoCreateOrConnectWithoutUserInput | AtendimentoCreateOrConnectWithoutUserInput[]
    createMany?: AtendimentoCreateManyUserInputEnvelope
    connect?: AtendimentoWhereUniqueInput | AtendimentoWhereUniqueInput[]
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type AtendimentoUpdateManyWithoutUserNestedInput = {
    create?: XOR<AtendimentoCreateWithoutUserInput, AtendimentoUncheckedCreateWithoutUserInput> | AtendimentoCreateWithoutUserInput[] | AtendimentoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AtendimentoCreateOrConnectWithoutUserInput | AtendimentoCreateOrConnectWithoutUserInput[]
    upsert?: AtendimentoUpsertWithWhereUniqueWithoutUserInput | AtendimentoUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AtendimentoCreateManyUserInputEnvelope
    set?: AtendimentoWhereUniqueInput | AtendimentoWhereUniqueInput[]
    disconnect?: AtendimentoWhereUniqueInput | AtendimentoWhereUniqueInput[]
    delete?: AtendimentoWhereUniqueInput | AtendimentoWhereUniqueInput[]
    connect?: AtendimentoWhereUniqueInput | AtendimentoWhereUniqueInput[]
    update?: AtendimentoUpdateWithWhereUniqueWithoutUserInput | AtendimentoUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AtendimentoUpdateManyWithWhereWithoutUserInput | AtendimentoUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AtendimentoScalarWhereInput | AtendimentoScalarWhereInput[]
  }

  export type AtendimentoUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AtendimentoCreateWithoutUserInput, AtendimentoUncheckedCreateWithoutUserInput> | AtendimentoCreateWithoutUserInput[] | AtendimentoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AtendimentoCreateOrConnectWithoutUserInput | AtendimentoCreateOrConnectWithoutUserInput[]
    upsert?: AtendimentoUpsertWithWhereUniqueWithoutUserInput | AtendimentoUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AtendimentoCreateManyUserInputEnvelope
    set?: AtendimentoWhereUniqueInput | AtendimentoWhereUniqueInput[]
    disconnect?: AtendimentoWhereUniqueInput | AtendimentoWhereUniqueInput[]
    delete?: AtendimentoWhereUniqueInput | AtendimentoWhereUniqueInput[]
    connect?: AtendimentoWhereUniqueInput | AtendimentoWhereUniqueInput[]
    update?: AtendimentoUpdateWithWhereUniqueWithoutUserInput | AtendimentoUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AtendimentoUpdateManyWithWhereWithoutUserInput | AtendimentoUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AtendimentoScalarWhereInput | AtendimentoScalarWhereInput[]
  }

  export type ReceitaCreateNestedOneWithoutAtendimentoInput = {
    create?: XOR<ReceitaCreateWithoutAtendimentoInput, ReceitaUncheckedCreateWithoutAtendimentoInput>
    connectOrCreate?: ReceitaCreateOrConnectWithoutAtendimentoInput
    connect?: ReceitaWhereUniqueInput
  }

  export type ProjetoCreateNestedManyWithoutAtendimentosInput = {
    create?: XOR<ProjetoCreateWithoutAtendimentosInput, ProjetoUncheckedCreateWithoutAtendimentosInput> | ProjetoCreateWithoutAtendimentosInput[] | ProjetoUncheckedCreateWithoutAtendimentosInput[]
    connectOrCreate?: ProjetoCreateOrConnectWithoutAtendimentosInput | ProjetoCreateOrConnectWithoutAtendimentosInput[]
    connect?: ProjetoWhereUniqueInput | ProjetoWhereUniqueInput[]
  }

  export type DemandaCreateNestedManyWithoutAtendimentosInput = {
    create?: XOR<DemandaCreateWithoutAtendimentosInput, DemandaUncheckedCreateWithoutAtendimentosInput> | DemandaCreateWithoutAtendimentosInput[] | DemandaUncheckedCreateWithoutAtendimentosInput[]
    connectOrCreate?: DemandaCreateOrConnectWithoutAtendimentosInput | DemandaCreateOrConnectWithoutAtendimentosInput[]
    connect?: DemandaWhereUniqueInput | DemandaWhereUniqueInput[]
  }

  export type ColaboradorCreateNestedOneWithoutAtendimentosInput = {
    create?: XOR<ColaboradorCreateWithoutAtendimentosInput, ColaboradorUncheckedCreateWithoutAtendimentosInput>
    connectOrCreate?: ColaboradorCreateOrConnectWithoutAtendimentosInput
    connect?: ColaboradorWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutAtendimentosInput = {
    create?: XOR<UserCreateWithoutAtendimentosInput, UserUncheckedCreateWithoutAtendimentosInput>
    connectOrCreate?: UserCreateOrConnectWithoutAtendimentosInput
    connect?: UserWhereUniqueInput
  }

  export type ProjetoUncheckedCreateNestedManyWithoutAtendimentosInput = {
    create?: XOR<ProjetoCreateWithoutAtendimentosInput, ProjetoUncheckedCreateWithoutAtendimentosInput> | ProjetoCreateWithoutAtendimentosInput[] | ProjetoUncheckedCreateWithoutAtendimentosInput[]
    connectOrCreate?: ProjetoCreateOrConnectWithoutAtendimentosInput | ProjetoCreateOrConnectWithoutAtendimentosInput[]
    connect?: ProjetoWhereUniqueInput | ProjetoWhereUniqueInput[]
  }

  export type DemandaUncheckedCreateNestedManyWithoutAtendimentosInput = {
    create?: XOR<DemandaCreateWithoutAtendimentosInput, DemandaUncheckedCreateWithoutAtendimentosInput> | DemandaCreateWithoutAtendimentosInput[] | DemandaUncheckedCreateWithoutAtendimentosInput[]
    connectOrCreate?: DemandaCreateOrConnectWithoutAtendimentosInput | DemandaCreateOrConnectWithoutAtendimentosInput[]
    connect?: DemandaWhereUniqueInput | DemandaWhereUniqueInput[]
  }

  export type EnumAtendimentoTipoFieldUpdateOperationsInput = {
    set?: $Enums.AtendimentoTipo
  }

  export type ReceitaUpdateOneWithoutAtendimentoNestedInput = {
    create?: XOR<ReceitaCreateWithoutAtendimentoInput, ReceitaUncheckedCreateWithoutAtendimentoInput>
    connectOrCreate?: ReceitaCreateOrConnectWithoutAtendimentoInput
    upsert?: ReceitaUpsertWithoutAtendimentoInput
    disconnect?: ReceitaWhereInput | boolean
    delete?: ReceitaWhereInput | boolean
    connect?: ReceitaWhereUniqueInput
    update?: XOR<XOR<ReceitaUpdateToOneWithWhereWithoutAtendimentoInput, ReceitaUpdateWithoutAtendimentoInput>, ReceitaUncheckedUpdateWithoutAtendimentoInput>
  }

  export type ProjetoUpdateManyWithoutAtendimentosNestedInput = {
    create?: XOR<ProjetoCreateWithoutAtendimentosInput, ProjetoUncheckedCreateWithoutAtendimentosInput> | ProjetoCreateWithoutAtendimentosInput[] | ProjetoUncheckedCreateWithoutAtendimentosInput[]
    connectOrCreate?: ProjetoCreateOrConnectWithoutAtendimentosInput | ProjetoCreateOrConnectWithoutAtendimentosInput[]
    upsert?: ProjetoUpsertWithWhereUniqueWithoutAtendimentosInput | ProjetoUpsertWithWhereUniqueWithoutAtendimentosInput[]
    set?: ProjetoWhereUniqueInput | ProjetoWhereUniqueInput[]
    disconnect?: ProjetoWhereUniqueInput | ProjetoWhereUniqueInput[]
    delete?: ProjetoWhereUniqueInput | ProjetoWhereUniqueInput[]
    connect?: ProjetoWhereUniqueInput | ProjetoWhereUniqueInput[]
    update?: ProjetoUpdateWithWhereUniqueWithoutAtendimentosInput | ProjetoUpdateWithWhereUniqueWithoutAtendimentosInput[]
    updateMany?: ProjetoUpdateManyWithWhereWithoutAtendimentosInput | ProjetoUpdateManyWithWhereWithoutAtendimentosInput[]
    deleteMany?: ProjetoScalarWhereInput | ProjetoScalarWhereInput[]
  }

  export type DemandaUpdateManyWithoutAtendimentosNestedInput = {
    create?: XOR<DemandaCreateWithoutAtendimentosInput, DemandaUncheckedCreateWithoutAtendimentosInput> | DemandaCreateWithoutAtendimentosInput[] | DemandaUncheckedCreateWithoutAtendimentosInput[]
    connectOrCreate?: DemandaCreateOrConnectWithoutAtendimentosInput | DemandaCreateOrConnectWithoutAtendimentosInput[]
    upsert?: DemandaUpsertWithWhereUniqueWithoutAtendimentosInput | DemandaUpsertWithWhereUniqueWithoutAtendimentosInput[]
    set?: DemandaWhereUniqueInput | DemandaWhereUniqueInput[]
    disconnect?: DemandaWhereUniqueInput | DemandaWhereUniqueInput[]
    delete?: DemandaWhereUniqueInput | DemandaWhereUniqueInput[]
    connect?: DemandaWhereUniqueInput | DemandaWhereUniqueInput[]
    update?: DemandaUpdateWithWhereUniqueWithoutAtendimentosInput | DemandaUpdateWithWhereUniqueWithoutAtendimentosInput[]
    updateMany?: DemandaUpdateManyWithWhereWithoutAtendimentosInput | DemandaUpdateManyWithWhereWithoutAtendimentosInput[]
    deleteMany?: DemandaScalarWhereInput | DemandaScalarWhereInput[]
  }

  export type ColaboradorUpdateOneWithoutAtendimentosNestedInput = {
    create?: XOR<ColaboradorCreateWithoutAtendimentosInput, ColaboradorUncheckedCreateWithoutAtendimentosInput>
    connectOrCreate?: ColaboradorCreateOrConnectWithoutAtendimentosInput
    upsert?: ColaboradorUpsertWithoutAtendimentosInput
    disconnect?: ColaboradorWhereInput | boolean
    delete?: ColaboradorWhereInput | boolean
    connect?: ColaboradorWhereUniqueInput
    update?: XOR<XOR<ColaboradorUpdateToOneWithWhereWithoutAtendimentosInput, ColaboradorUpdateWithoutAtendimentosInput>, ColaboradorUncheckedUpdateWithoutAtendimentosInput>
  }

  export type UserUpdateOneRequiredWithoutAtendimentosNestedInput = {
    create?: XOR<UserCreateWithoutAtendimentosInput, UserUncheckedCreateWithoutAtendimentosInput>
    connectOrCreate?: UserCreateOrConnectWithoutAtendimentosInput
    upsert?: UserUpsertWithoutAtendimentosInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAtendimentosInput, UserUpdateWithoutAtendimentosInput>, UserUncheckedUpdateWithoutAtendimentosInput>
  }

  export type ProjetoUncheckedUpdateManyWithoutAtendimentosNestedInput = {
    create?: XOR<ProjetoCreateWithoutAtendimentosInput, ProjetoUncheckedCreateWithoutAtendimentosInput> | ProjetoCreateWithoutAtendimentosInput[] | ProjetoUncheckedCreateWithoutAtendimentosInput[]
    connectOrCreate?: ProjetoCreateOrConnectWithoutAtendimentosInput | ProjetoCreateOrConnectWithoutAtendimentosInput[]
    upsert?: ProjetoUpsertWithWhereUniqueWithoutAtendimentosInput | ProjetoUpsertWithWhereUniqueWithoutAtendimentosInput[]
    set?: ProjetoWhereUniqueInput | ProjetoWhereUniqueInput[]
    disconnect?: ProjetoWhereUniqueInput | ProjetoWhereUniqueInput[]
    delete?: ProjetoWhereUniqueInput | ProjetoWhereUniqueInput[]
    connect?: ProjetoWhereUniqueInput | ProjetoWhereUniqueInput[]
    update?: ProjetoUpdateWithWhereUniqueWithoutAtendimentosInput | ProjetoUpdateWithWhereUniqueWithoutAtendimentosInput[]
    updateMany?: ProjetoUpdateManyWithWhereWithoutAtendimentosInput | ProjetoUpdateManyWithWhereWithoutAtendimentosInput[]
    deleteMany?: ProjetoScalarWhereInput | ProjetoScalarWhereInput[]
  }

  export type DemandaUncheckedUpdateManyWithoutAtendimentosNestedInput = {
    create?: XOR<DemandaCreateWithoutAtendimentosInput, DemandaUncheckedCreateWithoutAtendimentosInput> | DemandaCreateWithoutAtendimentosInput[] | DemandaUncheckedCreateWithoutAtendimentosInput[]
    connectOrCreate?: DemandaCreateOrConnectWithoutAtendimentosInput | DemandaCreateOrConnectWithoutAtendimentosInput[]
    upsert?: DemandaUpsertWithWhereUniqueWithoutAtendimentosInput | DemandaUpsertWithWhereUniqueWithoutAtendimentosInput[]
    set?: DemandaWhereUniqueInput | DemandaWhereUniqueInput[]
    disconnect?: DemandaWhereUniqueInput | DemandaWhereUniqueInput[]
    delete?: DemandaWhereUniqueInput | DemandaWhereUniqueInput[]
    connect?: DemandaWhereUniqueInput | DemandaWhereUniqueInput[]
    update?: DemandaUpdateWithWhereUniqueWithoutAtendimentosInput | DemandaUpdateWithWhereUniqueWithoutAtendimentosInput[]
    updateMany?: DemandaUpdateManyWithWhereWithoutAtendimentosInput | DemandaUpdateManyWithWhereWithoutAtendimentosInput[]
    deleteMany?: DemandaScalarWhereInput | DemandaScalarWhereInput[]
  }

  export type LoggingCreateupdatesInput = {
    set: string[]
  }

  export type LoggingUpdateupdatesInput = {
    set?: string[]
    push?: string | string[]
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

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumZonaNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Zona | EnumZonaFieldRefInput<$PrismaModel> | null
    in?: $Enums.Zona[] | ListEnumZonaFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Zona[] | ListEnumZonaFieldRefInput<$PrismaModel> | null
    not?: NestedEnumZonaNullableFilter<$PrismaModel> | $Enums.Zona | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumZonaNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Zona | EnumZonaFieldRefInput<$PrismaModel> | null
    in?: $Enums.Zona[] | ListEnumZonaFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Zona[] | ListEnumZonaFieldRefInput<$PrismaModel> | null
    not?: NestedEnumZonaNullableWithAggregatesFilter<$PrismaModel> | $Enums.Zona | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumZonaNullableFilter<$PrismaModel>
    _max?: NestedEnumZonaNullableFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedEnumStatusDefaultFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusDefault | EnumStatusDefaultFieldRefInput<$PrismaModel>
    in?: $Enums.StatusDefault[] | ListEnumStatusDefaultFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusDefault[] | ListEnumStatusDefaultFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusDefaultFilter<$PrismaModel> | $Enums.StatusDefault
  }

  export type NestedEnumStatusDefaultWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusDefault | EnumStatusDefaultFieldRefInput<$PrismaModel>
    in?: $Enums.StatusDefault[] | ListEnumStatusDefaultFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusDefault[] | ListEnumStatusDefaultFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusDefaultWithAggregatesFilter<$PrismaModel> | $Enums.StatusDefault
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusDefaultFilter<$PrismaModel>
    _max?: NestedEnumStatusDefaultFilter<$PrismaModel>
  }

  export type NestedEnumZonaFilter<$PrismaModel = never> = {
    equals?: $Enums.Zona | EnumZonaFieldRefInput<$PrismaModel>
    in?: $Enums.Zona[] | ListEnumZonaFieldRefInput<$PrismaModel>
    notIn?: $Enums.Zona[] | ListEnumZonaFieldRefInput<$PrismaModel>
    not?: NestedEnumZonaFilter<$PrismaModel> | $Enums.Zona
  }

  export type NestedEnumZonaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Zona | EnumZonaFieldRefInput<$PrismaModel>
    in?: $Enums.Zona[] | ListEnumZonaFieldRefInput<$PrismaModel>
    notIn?: $Enums.Zona[] | ListEnumZonaFieldRefInput<$PrismaModel>
    not?: NestedEnumZonaWithAggregatesFilter<$PrismaModel> | $Enums.Zona
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumZonaFilter<$PrismaModel>
    _max?: NestedEnumZonaFilter<$PrismaModel>
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

  export type NestedEnumStatusEventoFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusEvento | EnumStatusEventoFieldRefInput<$PrismaModel>
    in?: $Enums.StatusEvento[] | ListEnumStatusEventoFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusEvento[] | ListEnumStatusEventoFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusEventoFilter<$PrismaModel> | $Enums.StatusEvento
  }

  export type NestedEnumPrioridadeFilter<$PrismaModel = never> = {
    equals?: $Enums.Prioridade | EnumPrioridadeFieldRefInput<$PrismaModel>
    in?: $Enums.Prioridade[] | ListEnumPrioridadeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Prioridade[] | ListEnumPrioridadeFieldRefInput<$PrismaModel>
    not?: NestedEnumPrioridadeFilter<$PrismaModel> | $Enums.Prioridade
  }

  export type NestedEnumStatusEventoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusEvento | EnumStatusEventoFieldRefInput<$PrismaModel>
    in?: $Enums.StatusEvento[] | ListEnumStatusEventoFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusEvento[] | ListEnumStatusEventoFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusEventoWithAggregatesFilter<$PrismaModel> | $Enums.StatusEvento
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusEventoFilter<$PrismaModel>
    _max?: NestedEnumStatusEventoFilter<$PrismaModel>
  }

  export type NestedEnumPrioridadeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Prioridade | EnumPrioridadeFieldRefInput<$PrismaModel>
    in?: $Enums.Prioridade[] | ListEnumPrioridadeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Prioridade[] | ListEnumPrioridadeFieldRefInput<$PrismaModel>
    not?: NestedEnumPrioridadeWithAggregatesFilter<$PrismaModel> | $Enums.Prioridade
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPrioridadeFilter<$PrismaModel>
    _max?: NestedEnumPrioridadeFilter<$PrismaModel>
  }

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedEnumAtendimentoTipoFilter<$PrismaModel = never> = {
    equals?: $Enums.AtendimentoTipo | EnumAtendimentoTipoFieldRefInput<$PrismaModel>
    in?: $Enums.AtendimentoTipo[] | ListEnumAtendimentoTipoFieldRefInput<$PrismaModel>
    notIn?: $Enums.AtendimentoTipo[] | ListEnumAtendimentoTipoFieldRefInput<$PrismaModel>
    not?: NestedEnumAtendimentoTipoFilter<$PrismaModel> | $Enums.AtendimentoTipo
  }

  export type NestedEnumAtendimentoTipoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AtendimentoTipo | EnumAtendimentoTipoFieldRefInput<$PrismaModel>
    in?: $Enums.AtendimentoTipo[] | ListEnumAtendimentoTipoFieldRefInput<$PrismaModel>
    notIn?: $Enums.AtendimentoTipo[] | ListEnumAtendimentoTipoFieldRefInput<$PrismaModel>
    not?: NestedEnumAtendimentoTipoWithAggregatesFilter<$PrismaModel> | $Enums.AtendimentoTipo
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAtendimentoTipoFilter<$PrismaModel>
    _max?: NestedEnumAtendimentoTipoFilter<$PrismaModel>
  }

  export type ColaboradorCreateWithoutColaboradoresInput = {
    id?: string
    nome: string
    cpf?: string | null
    email?: string | null
    telefone?: string | null
    dataNascimento?: Date | string | null
    cep?: string | null
    zona?: $Enums.Zona | null
    cidade?: string | null
    bairro?: string | null
    logradouro?: string | null
    categoria?: string | null
    observacao?: string | null
    curriculo?: string | null
    isLideranca?: boolean
    criadosEm?: Date | string
    atualizadosEm?: Date | string
    lideranca?: ColaboradorCreateNestedOneWithoutColaboradoresInput
    eventos?: EventoCreateNestedManyWithoutParticipantesInput
    atendimentos?: AtendimentoCreateNestedManyWithoutColaboradorInput
    projetos?: ProjetoCreateNestedManyWithoutColaboradorInput
  }

  export type ColaboradorUncheckedCreateWithoutColaboradoresInput = {
    id?: string
    nome: string
    cpf?: string | null
    email?: string | null
    telefone?: string | null
    dataNascimento?: Date | string | null
    cep?: string | null
    zona?: $Enums.Zona | null
    cidade?: string | null
    bairro?: string | null
    logradouro?: string | null
    categoria?: string | null
    observacao?: string | null
    curriculo?: string | null
    isLideranca?: boolean
    liderancaId?: string | null
    criadosEm?: Date | string
    atualizadosEm?: Date | string
    eventos?: EventoUncheckedCreateNestedManyWithoutParticipantesInput
    atendimentos?: AtendimentoUncheckedCreateNestedManyWithoutColaboradorInput
    projetos?: ProjetoUncheckedCreateNestedManyWithoutColaboradorInput
  }

  export type ColaboradorCreateOrConnectWithoutColaboradoresInput = {
    where: ColaboradorWhereUniqueInput
    create: XOR<ColaboradorCreateWithoutColaboradoresInput, ColaboradorUncheckedCreateWithoutColaboradoresInput>
  }

  export type ColaboradorCreateWithoutLiderancaInput = {
    id?: string
    nome: string
    cpf?: string | null
    email?: string | null
    telefone?: string | null
    dataNascimento?: Date | string | null
    cep?: string | null
    zona?: $Enums.Zona | null
    cidade?: string | null
    bairro?: string | null
    logradouro?: string | null
    categoria?: string | null
    observacao?: string | null
    curriculo?: string | null
    isLideranca?: boolean
    criadosEm?: Date | string
    atualizadosEm?: Date | string
    colaboradores?: ColaboradorCreateNestedManyWithoutLiderancaInput
    eventos?: EventoCreateNestedManyWithoutParticipantesInput
    atendimentos?: AtendimentoCreateNestedManyWithoutColaboradorInput
    projetos?: ProjetoCreateNestedManyWithoutColaboradorInput
  }

  export type ColaboradorUncheckedCreateWithoutLiderancaInput = {
    id?: string
    nome: string
    cpf?: string | null
    email?: string | null
    telefone?: string | null
    dataNascimento?: Date | string | null
    cep?: string | null
    zona?: $Enums.Zona | null
    cidade?: string | null
    bairro?: string | null
    logradouro?: string | null
    categoria?: string | null
    observacao?: string | null
    curriculo?: string | null
    isLideranca?: boolean
    criadosEm?: Date | string
    atualizadosEm?: Date | string
    colaboradores?: ColaboradorUncheckedCreateNestedManyWithoutLiderancaInput
    eventos?: EventoUncheckedCreateNestedManyWithoutParticipantesInput
    atendimentos?: AtendimentoUncheckedCreateNestedManyWithoutColaboradorInput
    projetos?: ProjetoUncheckedCreateNestedManyWithoutColaboradorInput
  }

  export type ColaboradorCreateOrConnectWithoutLiderancaInput = {
    where: ColaboradorWhereUniqueInput
    create: XOR<ColaboradorCreateWithoutLiderancaInput, ColaboradorUncheckedCreateWithoutLiderancaInput>
  }

  export type ColaboradorCreateManyLiderancaInputEnvelope = {
    data: ColaboradorCreateManyLiderancaInput | ColaboradorCreateManyLiderancaInput[]
    skipDuplicates?: boolean
  }

  export type EventoCreateWithoutParticipantesInput = {
    id?: string
    nome: string
    descricao: string
    localizacao: string
    categoria: string
    status?: $Enums.StatusEvento
    prioridade: $Enums.Prioridade
    dataInicio: Date | string
    dataFim: Date | string
  }

  export type EventoUncheckedCreateWithoutParticipantesInput = {
    id?: string
    nome: string
    descricao: string
    localizacao: string
    categoria: string
    status?: $Enums.StatusEvento
    prioridade: $Enums.Prioridade
    dataInicio: Date | string
    dataFim: Date | string
  }

  export type EventoCreateOrConnectWithoutParticipantesInput = {
    where: EventoWhereUniqueInput
    create: XOR<EventoCreateWithoutParticipantesInput, EventoUncheckedCreateWithoutParticipantesInput>
  }

  export type AtendimentoCreateWithoutColaboradorInput = {
    id?: string
    descricao: string
    tipo: $Enums.AtendimentoTipo
    criadoEm?: Date | string
    receita?: ReceitaCreateNestedOneWithoutAtendimentoInput
    projeto?: ProjetoCreateNestedManyWithoutAtendimentosInput
    demanda?: DemandaCreateNestedManyWithoutAtendimentosInput
    user: UserCreateNestedOneWithoutAtendimentosInput
  }

  export type AtendimentoUncheckedCreateWithoutColaboradorInput = {
    id?: string
    descricao: string
    tipo: $Enums.AtendimentoTipo
    receitaId?: string | null
    userId: string
    criadoEm?: Date | string
    projeto?: ProjetoUncheckedCreateNestedManyWithoutAtendimentosInput
    demanda?: DemandaUncheckedCreateNestedManyWithoutAtendimentosInput
  }

  export type AtendimentoCreateOrConnectWithoutColaboradorInput = {
    where: AtendimentoWhereUniqueInput
    create: XOR<AtendimentoCreateWithoutColaboradorInput, AtendimentoUncheckedCreateWithoutColaboradorInput>
  }

  export type AtendimentoCreateManyColaboradorInputEnvelope = {
    data: AtendimentoCreateManyColaboradorInput | AtendimentoCreateManyColaboradorInput[]
    skipDuplicates?: boolean
  }

  export type ProjetoCreateWithoutColaboradorInput = {
    id?: string
    titulo: string
    descricao: string
    data: Date | string
    cep: string
    zona: $Enums.Zona
    cidade: string
    bairro: string
    logradouro: string
    atendimentos?: AtendimentoCreateNestedManyWithoutProjetoInput
  }

  export type ProjetoUncheckedCreateWithoutColaboradorInput = {
    id?: string
    titulo: string
    descricao: string
    data: Date | string
    cep: string
    zona: $Enums.Zona
    cidade: string
    bairro: string
    logradouro: string
    atendimentos?: AtendimentoUncheckedCreateNestedManyWithoutProjetoInput
  }

  export type ProjetoCreateOrConnectWithoutColaboradorInput = {
    where: ProjetoWhereUniqueInput
    create: XOR<ProjetoCreateWithoutColaboradorInput, ProjetoUncheckedCreateWithoutColaboradorInput>
  }

  export type ProjetoCreateManyColaboradorInputEnvelope = {
    data: ProjetoCreateManyColaboradorInput | ProjetoCreateManyColaboradorInput[]
    skipDuplicates?: boolean
  }

  export type ColaboradorUpsertWithoutColaboradoresInput = {
    update: XOR<ColaboradorUpdateWithoutColaboradoresInput, ColaboradorUncheckedUpdateWithoutColaboradoresInput>
    create: XOR<ColaboradorCreateWithoutColaboradoresInput, ColaboradorUncheckedCreateWithoutColaboradoresInput>
    where?: ColaboradorWhereInput
  }

  export type ColaboradorUpdateToOneWithWhereWithoutColaboradoresInput = {
    where?: ColaboradorWhereInput
    data: XOR<ColaboradorUpdateWithoutColaboradoresInput, ColaboradorUncheckedUpdateWithoutColaboradoresInput>
  }

  export type ColaboradorUpdateWithoutColaboradoresInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    dataNascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    zona?: NullableEnumZonaFieldUpdateOperationsInput | $Enums.Zona | null
    cidade?: NullableStringFieldUpdateOperationsInput | string | null
    bairro?: NullableStringFieldUpdateOperationsInput | string | null
    logradouro?: NullableStringFieldUpdateOperationsInput | string | null
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    curriculo?: NullableStringFieldUpdateOperationsInput | string | null
    isLideranca?: BoolFieldUpdateOperationsInput | boolean
    criadosEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadosEm?: DateTimeFieldUpdateOperationsInput | Date | string
    lideranca?: ColaboradorUpdateOneWithoutColaboradoresNestedInput
    eventos?: EventoUpdateManyWithoutParticipantesNestedInput
    atendimentos?: AtendimentoUpdateManyWithoutColaboradorNestedInput
    projetos?: ProjetoUpdateManyWithoutColaboradorNestedInput
  }

  export type ColaboradorUncheckedUpdateWithoutColaboradoresInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    dataNascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    zona?: NullableEnumZonaFieldUpdateOperationsInput | $Enums.Zona | null
    cidade?: NullableStringFieldUpdateOperationsInput | string | null
    bairro?: NullableStringFieldUpdateOperationsInput | string | null
    logradouro?: NullableStringFieldUpdateOperationsInput | string | null
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    curriculo?: NullableStringFieldUpdateOperationsInput | string | null
    isLideranca?: BoolFieldUpdateOperationsInput | boolean
    liderancaId?: NullableStringFieldUpdateOperationsInput | string | null
    criadosEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadosEm?: DateTimeFieldUpdateOperationsInput | Date | string
    eventos?: EventoUncheckedUpdateManyWithoutParticipantesNestedInput
    atendimentos?: AtendimentoUncheckedUpdateManyWithoutColaboradorNestedInput
    projetos?: ProjetoUncheckedUpdateManyWithoutColaboradorNestedInput
  }

  export type ColaboradorUpsertWithWhereUniqueWithoutLiderancaInput = {
    where: ColaboradorWhereUniqueInput
    update: XOR<ColaboradorUpdateWithoutLiderancaInput, ColaboradorUncheckedUpdateWithoutLiderancaInput>
    create: XOR<ColaboradorCreateWithoutLiderancaInput, ColaboradorUncheckedCreateWithoutLiderancaInput>
  }

  export type ColaboradorUpdateWithWhereUniqueWithoutLiderancaInput = {
    where: ColaboradorWhereUniqueInput
    data: XOR<ColaboradorUpdateWithoutLiderancaInput, ColaboradorUncheckedUpdateWithoutLiderancaInput>
  }

  export type ColaboradorUpdateManyWithWhereWithoutLiderancaInput = {
    where: ColaboradorScalarWhereInput
    data: XOR<ColaboradorUpdateManyMutationInput, ColaboradorUncheckedUpdateManyWithoutLiderancaInput>
  }

  export type ColaboradorScalarWhereInput = {
    AND?: ColaboradorScalarWhereInput | ColaboradorScalarWhereInput[]
    OR?: ColaboradorScalarWhereInput[]
    NOT?: ColaboradorScalarWhereInput | ColaboradorScalarWhereInput[]
    id?: StringFilter<"Colaborador"> | string
    nome?: StringFilter<"Colaborador"> | string
    cpf?: StringNullableFilter<"Colaborador"> | string | null
    email?: StringNullableFilter<"Colaborador"> | string | null
    telefone?: StringNullableFilter<"Colaborador"> | string | null
    dataNascimento?: DateTimeNullableFilter<"Colaborador"> | Date | string | null
    cep?: StringNullableFilter<"Colaborador"> | string | null
    zona?: EnumZonaNullableFilter<"Colaborador"> | $Enums.Zona | null
    cidade?: StringNullableFilter<"Colaborador"> | string | null
    bairro?: StringNullableFilter<"Colaborador"> | string | null
    logradouro?: StringNullableFilter<"Colaborador"> | string | null
    categoria?: StringNullableFilter<"Colaborador"> | string | null
    observacao?: StringNullableFilter<"Colaborador"> | string | null
    curriculo?: StringNullableFilter<"Colaborador"> | string | null
    isLideranca?: BoolFilter<"Colaborador"> | boolean
    liderancaId?: StringNullableFilter<"Colaborador"> | string | null
    criadosEm?: DateTimeFilter<"Colaborador"> | Date | string
    atualizadosEm?: DateTimeFilter<"Colaborador"> | Date | string
  }

  export type EventoUpsertWithWhereUniqueWithoutParticipantesInput = {
    where: EventoWhereUniqueInput
    update: XOR<EventoUpdateWithoutParticipantesInput, EventoUncheckedUpdateWithoutParticipantesInput>
    create: XOR<EventoCreateWithoutParticipantesInput, EventoUncheckedCreateWithoutParticipantesInput>
  }

  export type EventoUpdateWithWhereUniqueWithoutParticipantesInput = {
    where: EventoWhereUniqueInput
    data: XOR<EventoUpdateWithoutParticipantesInput, EventoUncheckedUpdateWithoutParticipantesInput>
  }

  export type EventoUpdateManyWithWhereWithoutParticipantesInput = {
    where: EventoScalarWhereInput
    data: XOR<EventoUpdateManyMutationInput, EventoUncheckedUpdateManyWithoutParticipantesInput>
  }

  export type EventoScalarWhereInput = {
    AND?: EventoScalarWhereInput | EventoScalarWhereInput[]
    OR?: EventoScalarWhereInput[]
    NOT?: EventoScalarWhereInput | EventoScalarWhereInput[]
    id?: StringFilter<"Evento"> | string
    nome?: StringFilter<"Evento"> | string
    descricao?: StringFilter<"Evento"> | string
    localizacao?: StringFilter<"Evento"> | string
    categoria?: StringFilter<"Evento"> | string
    status?: EnumStatusEventoFilter<"Evento"> | $Enums.StatusEvento
    prioridade?: EnumPrioridadeFilter<"Evento"> | $Enums.Prioridade
    dataInicio?: DateTimeFilter<"Evento"> | Date | string
    dataFim?: DateTimeFilter<"Evento"> | Date | string
  }

  export type AtendimentoUpsertWithWhereUniqueWithoutColaboradorInput = {
    where: AtendimentoWhereUniqueInput
    update: XOR<AtendimentoUpdateWithoutColaboradorInput, AtendimentoUncheckedUpdateWithoutColaboradorInput>
    create: XOR<AtendimentoCreateWithoutColaboradorInput, AtendimentoUncheckedCreateWithoutColaboradorInput>
  }

  export type AtendimentoUpdateWithWhereUniqueWithoutColaboradorInput = {
    where: AtendimentoWhereUniqueInput
    data: XOR<AtendimentoUpdateWithoutColaboradorInput, AtendimentoUncheckedUpdateWithoutColaboradorInput>
  }

  export type AtendimentoUpdateManyWithWhereWithoutColaboradorInput = {
    where: AtendimentoScalarWhereInput
    data: XOR<AtendimentoUpdateManyMutationInput, AtendimentoUncheckedUpdateManyWithoutColaboradorInput>
  }

  export type AtendimentoScalarWhereInput = {
    AND?: AtendimentoScalarWhereInput | AtendimentoScalarWhereInput[]
    OR?: AtendimentoScalarWhereInput[]
    NOT?: AtendimentoScalarWhereInput | AtendimentoScalarWhereInput[]
    id?: StringFilter<"Atendimento"> | string
    descricao?: StringFilter<"Atendimento"> | string
    tipo?: EnumAtendimentoTipoFilter<"Atendimento"> | $Enums.AtendimentoTipo
    receitaId?: StringNullableFilter<"Atendimento"> | string | null
    colaboradorId?: StringNullableFilter<"Atendimento"> | string | null
    userId?: StringFilter<"Atendimento"> | string
    criadoEm?: DateTimeFilter<"Atendimento"> | Date | string
  }

  export type ProjetoUpsertWithWhereUniqueWithoutColaboradorInput = {
    where: ProjetoWhereUniqueInput
    update: XOR<ProjetoUpdateWithoutColaboradorInput, ProjetoUncheckedUpdateWithoutColaboradorInput>
    create: XOR<ProjetoCreateWithoutColaboradorInput, ProjetoUncheckedCreateWithoutColaboradorInput>
  }

  export type ProjetoUpdateWithWhereUniqueWithoutColaboradorInput = {
    where: ProjetoWhereUniqueInput
    data: XOR<ProjetoUpdateWithoutColaboradorInput, ProjetoUncheckedUpdateWithoutColaboradorInput>
  }

  export type ProjetoUpdateManyWithWhereWithoutColaboradorInput = {
    where: ProjetoScalarWhereInput
    data: XOR<ProjetoUpdateManyMutationInput, ProjetoUncheckedUpdateManyWithoutColaboradorInput>
  }

  export type ProjetoScalarWhereInput = {
    AND?: ProjetoScalarWhereInput | ProjetoScalarWhereInput[]
    OR?: ProjetoScalarWhereInput[]
    NOT?: ProjetoScalarWhereInput | ProjetoScalarWhereInput[]
    id?: StringFilter<"Projeto"> | string
    titulo?: StringFilter<"Projeto"> | string
    descricao?: StringFilter<"Projeto"> | string
    data?: DateTimeFilter<"Projeto"> | Date | string
    cep?: StringFilter<"Projeto"> | string
    zona?: EnumZonaFilter<"Projeto"> | $Enums.Zona
    cidade?: StringFilter<"Projeto"> | string
    bairro?: StringFilter<"Projeto"> | string
    logradouro?: StringFilter<"Projeto"> | string
    colaboradorId?: StringNullableFilter<"Projeto"> | string | null
  }

  export type AtendimentoCreateWithoutDemandaInput = {
    id?: string
    descricao: string
    tipo: $Enums.AtendimentoTipo
    criadoEm?: Date | string
    receita?: ReceitaCreateNestedOneWithoutAtendimentoInput
    projeto?: ProjetoCreateNestedManyWithoutAtendimentosInput
    colaborador?: ColaboradorCreateNestedOneWithoutAtendimentosInput
    user: UserCreateNestedOneWithoutAtendimentosInput
  }

  export type AtendimentoUncheckedCreateWithoutDemandaInput = {
    id?: string
    descricao: string
    tipo: $Enums.AtendimentoTipo
    receitaId?: string | null
    colaboradorId?: string | null
    userId: string
    criadoEm?: Date | string
    projeto?: ProjetoUncheckedCreateNestedManyWithoutAtendimentosInput
  }

  export type AtendimentoCreateOrConnectWithoutDemandaInput = {
    where: AtendimentoWhereUniqueInput
    create: XOR<AtendimentoCreateWithoutDemandaInput, AtendimentoUncheckedCreateWithoutDemandaInput>
  }

  export type AtendimentoUpsertWithWhereUniqueWithoutDemandaInput = {
    where: AtendimentoWhereUniqueInput
    update: XOR<AtendimentoUpdateWithoutDemandaInput, AtendimentoUncheckedUpdateWithoutDemandaInput>
    create: XOR<AtendimentoCreateWithoutDemandaInput, AtendimentoUncheckedCreateWithoutDemandaInput>
  }

  export type AtendimentoUpdateWithWhereUniqueWithoutDemandaInput = {
    where: AtendimentoWhereUniqueInput
    data: XOR<AtendimentoUpdateWithoutDemandaInput, AtendimentoUncheckedUpdateWithoutDemandaInput>
  }

  export type AtendimentoUpdateManyWithWhereWithoutDemandaInput = {
    where: AtendimentoScalarWhereInput
    data: XOR<AtendimentoUpdateManyMutationInput, AtendimentoUncheckedUpdateManyWithoutDemandaInput>
  }

  export type ColaboradorCreateWithoutProjetosInput = {
    id?: string
    nome: string
    cpf?: string | null
    email?: string | null
    telefone?: string | null
    dataNascimento?: Date | string | null
    cep?: string | null
    zona?: $Enums.Zona | null
    cidade?: string | null
    bairro?: string | null
    logradouro?: string | null
    categoria?: string | null
    observacao?: string | null
    curriculo?: string | null
    isLideranca?: boolean
    criadosEm?: Date | string
    atualizadosEm?: Date | string
    lideranca?: ColaboradorCreateNestedOneWithoutColaboradoresInput
    colaboradores?: ColaboradorCreateNestedManyWithoutLiderancaInput
    eventos?: EventoCreateNestedManyWithoutParticipantesInput
    atendimentos?: AtendimentoCreateNestedManyWithoutColaboradorInput
  }

  export type ColaboradorUncheckedCreateWithoutProjetosInput = {
    id?: string
    nome: string
    cpf?: string | null
    email?: string | null
    telefone?: string | null
    dataNascimento?: Date | string | null
    cep?: string | null
    zona?: $Enums.Zona | null
    cidade?: string | null
    bairro?: string | null
    logradouro?: string | null
    categoria?: string | null
    observacao?: string | null
    curriculo?: string | null
    isLideranca?: boolean
    liderancaId?: string | null
    criadosEm?: Date | string
    atualizadosEm?: Date | string
    colaboradores?: ColaboradorUncheckedCreateNestedManyWithoutLiderancaInput
    eventos?: EventoUncheckedCreateNestedManyWithoutParticipantesInput
    atendimentos?: AtendimentoUncheckedCreateNestedManyWithoutColaboradorInput
  }

  export type ColaboradorCreateOrConnectWithoutProjetosInput = {
    where: ColaboradorWhereUniqueInput
    create: XOR<ColaboradorCreateWithoutProjetosInput, ColaboradorUncheckedCreateWithoutProjetosInput>
  }

  export type AtendimentoCreateWithoutProjetoInput = {
    id?: string
    descricao: string
    tipo: $Enums.AtendimentoTipo
    criadoEm?: Date | string
    receita?: ReceitaCreateNestedOneWithoutAtendimentoInput
    demanda?: DemandaCreateNestedManyWithoutAtendimentosInput
    colaborador?: ColaboradorCreateNestedOneWithoutAtendimentosInput
    user: UserCreateNestedOneWithoutAtendimentosInput
  }

  export type AtendimentoUncheckedCreateWithoutProjetoInput = {
    id?: string
    descricao: string
    tipo: $Enums.AtendimentoTipo
    receitaId?: string | null
    colaboradorId?: string | null
    userId: string
    criadoEm?: Date | string
    demanda?: DemandaUncheckedCreateNestedManyWithoutAtendimentosInput
  }

  export type AtendimentoCreateOrConnectWithoutProjetoInput = {
    where: AtendimentoWhereUniqueInput
    create: XOR<AtendimentoCreateWithoutProjetoInput, AtendimentoUncheckedCreateWithoutProjetoInput>
  }

  export type ColaboradorUpsertWithoutProjetosInput = {
    update: XOR<ColaboradorUpdateWithoutProjetosInput, ColaboradorUncheckedUpdateWithoutProjetosInput>
    create: XOR<ColaboradorCreateWithoutProjetosInput, ColaboradorUncheckedCreateWithoutProjetosInput>
    where?: ColaboradorWhereInput
  }

  export type ColaboradorUpdateToOneWithWhereWithoutProjetosInput = {
    where?: ColaboradorWhereInput
    data: XOR<ColaboradorUpdateWithoutProjetosInput, ColaboradorUncheckedUpdateWithoutProjetosInput>
  }

  export type ColaboradorUpdateWithoutProjetosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    dataNascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    zona?: NullableEnumZonaFieldUpdateOperationsInput | $Enums.Zona | null
    cidade?: NullableStringFieldUpdateOperationsInput | string | null
    bairro?: NullableStringFieldUpdateOperationsInput | string | null
    logradouro?: NullableStringFieldUpdateOperationsInput | string | null
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    curriculo?: NullableStringFieldUpdateOperationsInput | string | null
    isLideranca?: BoolFieldUpdateOperationsInput | boolean
    criadosEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadosEm?: DateTimeFieldUpdateOperationsInput | Date | string
    lideranca?: ColaboradorUpdateOneWithoutColaboradoresNestedInput
    colaboradores?: ColaboradorUpdateManyWithoutLiderancaNestedInput
    eventos?: EventoUpdateManyWithoutParticipantesNestedInput
    atendimentos?: AtendimentoUpdateManyWithoutColaboradorNestedInput
  }

  export type ColaboradorUncheckedUpdateWithoutProjetosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    dataNascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    zona?: NullableEnumZonaFieldUpdateOperationsInput | $Enums.Zona | null
    cidade?: NullableStringFieldUpdateOperationsInput | string | null
    bairro?: NullableStringFieldUpdateOperationsInput | string | null
    logradouro?: NullableStringFieldUpdateOperationsInput | string | null
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    curriculo?: NullableStringFieldUpdateOperationsInput | string | null
    isLideranca?: BoolFieldUpdateOperationsInput | boolean
    liderancaId?: NullableStringFieldUpdateOperationsInput | string | null
    criadosEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadosEm?: DateTimeFieldUpdateOperationsInput | Date | string
    colaboradores?: ColaboradorUncheckedUpdateManyWithoutLiderancaNestedInput
    eventos?: EventoUncheckedUpdateManyWithoutParticipantesNestedInput
    atendimentos?: AtendimentoUncheckedUpdateManyWithoutColaboradorNestedInput
  }

  export type AtendimentoUpsertWithWhereUniqueWithoutProjetoInput = {
    where: AtendimentoWhereUniqueInput
    update: XOR<AtendimentoUpdateWithoutProjetoInput, AtendimentoUncheckedUpdateWithoutProjetoInput>
    create: XOR<AtendimentoCreateWithoutProjetoInput, AtendimentoUncheckedCreateWithoutProjetoInput>
  }

  export type AtendimentoUpdateWithWhereUniqueWithoutProjetoInput = {
    where: AtendimentoWhereUniqueInput
    data: XOR<AtendimentoUpdateWithoutProjetoInput, AtendimentoUncheckedUpdateWithoutProjetoInput>
  }

  export type AtendimentoUpdateManyWithWhereWithoutProjetoInput = {
    where: AtendimentoScalarWhereInput
    data: XOR<AtendimentoUpdateManyMutationInput, AtendimentoUncheckedUpdateManyWithoutProjetoInput>
  }

  export type AtendimentoCreateWithoutReceitaInput = {
    id?: string
    descricao: string
    tipo: $Enums.AtendimentoTipo
    criadoEm?: Date | string
    projeto?: ProjetoCreateNestedManyWithoutAtendimentosInput
    demanda?: DemandaCreateNestedManyWithoutAtendimentosInput
    colaborador?: ColaboradorCreateNestedOneWithoutAtendimentosInput
    user: UserCreateNestedOneWithoutAtendimentosInput
  }

  export type AtendimentoUncheckedCreateWithoutReceitaInput = {
    id?: string
    descricao: string
    tipo: $Enums.AtendimentoTipo
    colaboradorId?: string | null
    userId: string
    criadoEm?: Date | string
    projeto?: ProjetoUncheckedCreateNestedManyWithoutAtendimentosInput
    demanda?: DemandaUncheckedCreateNestedManyWithoutAtendimentosInput
  }

  export type AtendimentoCreateOrConnectWithoutReceitaInput = {
    where: AtendimentoWhereUniqueInput
    create: XOR<AtendimentoCreateWithoutReceitaInput, AtendimentoUncheckedCreateWithoutReceitaInput>
  }

  export type AtendimentoUpsertWithoutReceitaInput = {
    update: XOR<AtendimentoUpdateWithoutReceitaInput, AtendimentoUncheckedUpdateWithoutReceitaInput>
    create: XOR<AtendimentoCreateWithoutReceitaInput, AtendimentoUncheckedCreateWithoutReceitaInput>
    where?: AtendimentoWhereInput
  }

  export type AtendimentoUpdateToOneWithWhereWithoutReceitaInput = {
    where?: AtendimentoWhereInput
    data: XOR<AtendimentoUpdateWithoutReceitaInput, AtendimentoUncheckedUpdateWithoutReceitaInput>
  }

  export type AtendimentoUpdateWithoutReceitaInput = {
    id?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    tipo?: EnumAtendimentoTipoFieldUpdateOperationsInput | $Enums.AtendimentoTipo
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    projeto?: ProjetoUpdateManyWithoutAtendimentosNestedInput
    demanda?: DemandaUpdateManyWithoutAtendimentosNestedInput
    colaborador?: ColaboradorUpdateOneWithoutAtendimentosNestedInput
    user?: UserUpdateOneRequiredWithoutAtendimentosNestedInput
  }

  export type AtendimentoUncheckedUpdateWithoutReceitaInput = {
    id?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    tipo?: EnumAtendimentoTipoFieldUpdateOperationsInput | $Enums.AtendimentoTipo
    colaboradorId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    projeto?: ProjetoUncheckedUpdateManyWithoutAtendimentosNestedInput
    demanda?: DemandaUncheckedUpdateManyWithoutAtendimentosNestedInput
  }

  export type ColaboradorCreateWithoutEventosInput = {
    id?: string
    nome: string
    cpf?: string | null
    email?: string | null
    telefone?: string | null
    dataNascimento?: Date | string | null
    cep?: string | null
    zona?: $Enums.Zona | null
    cidade?: string | null
    bairro?: string | null
    logradouro?: string | null
    categoria?: string | null
    observacao?: string | null
    curriculo?: string | null
    isLideranca?: boolean
    criadosEm?: Date | string
    atualizadosEm?: Date | string
    lideranca?: ColaboradorCreateNestedOneWithoutColaboradoresInput
    colaboradores?: ColaboradorCreateNestedManyWithoutLiderancaInput
    atendimentos?: AtendimentoCreateNestedManyWithoutColaboradorInput
    projetos?: ProjetoCreateNestedManyWithoutColaboradorInput
  }

  export type ColaboradorUncheckedCreateWithoutEventosInput = {
    id?: string
    nome: string
    cpf?: string | null
    email?: string | null
    telefone?: string | null
    dataNascimento?: Date | string | null
    cep?: string | null
    zona?: $Enums.Zona | null
    cidade?: string | null
    bairro?: string | null
    logradouro?: string | null
    categoria?: string | null
    observacao?: string | null
    curriculo?: string | null
    isLideranca?: boolean
    liderancaId?: string | null
    criadosEm?: Date | string
    atualizadosEm?: Date | string
    colaboradores?: ColaboradorUncheckedCreateNestedManyWithoutLiderancaInput
    atendimentos?: AtendimentoUncheckedCreateNestedManyWithoutColaboradorInput
    projetos?: ProjetoUncheckedCreateNestedManyWithoutColaboradorInput
  }

  export type ColaboradorCreateOrConnectWithoutEventosInput = {
    where: ColaboradorWhereUniqueInput
    create: XOR<ColaboradorCreateWithoutEventosInput, ColaboradorUncheckedCreateWithoutEventosInput>
  }

  export type ColaboradorUpsertWithWhereUniqueWithoutEventosInput = {
    where: ColaboradorWhereUniqueInput
    update: XOR<ColaboradorUpdateWithoutEventosInput, ColaboradorUncheckedUpdateWithoutEventosInput>
    create: XOR<ColaboradorCreateWithoutEventosInput, ColaboradorUncheckedCreateWithoutEventosInput>
  }

  export type ColaboradorUpdateWithWhereUniqueWithoutEventosInput = {
    where: ColaboradorWhereUniqueInput
    data: XOR<ColaboradorUpdateWithoutEventosInput, ColaboradorUncheckedUpdateWithoutEventosInput>
  }

  export type ColaboradorUpdateManyWithWhereWithoutEventosInput = {
    where: ColaboradorScalarWhereInput
    data: XOR<ColaboradorUpdateManyMutationInput, ColaboradorUncheckedUpdateManyWithoutEventosInput>
  }

  export type AtendimentoCreateWithoutUserInput = {
    id?: string
    descricao: string
    tipo: $Enums.AtendimentoTipo
    criadoEm?: Date | string
    receita?: ReceitaCreateNestedOneWithoutAtendimentoInput
    projeto?: ProjetoCreateNestedManyWithoutAtendimentosInput
    demanda?: DemandaCreateNestedManyWithoutAtendimentosInput
    colaborador?: ColaboradorCreateNestedOneWithoutAtendimentosInput
  }

  export type AtendimentoUncheckedCreateWithoutUserInput = {
    id?: string
    descricao: string
    tipo: $Enums.AtendimentoTipo
    receitaId?: string | null
    colaboradorId?: string | null
    criadoEm?: Date | string
    projeto?: ProjetoUncheckedCreateNestedManyWithoutAtendimentosInput
    demanda?: DemandaUncheckedCreateNestedManyWithoutAtendimentosInput
  }

  export type AtendimentoCreateOrConnectWithoutUserInput = {
    where: AtendimentoWhereUniqueInput
    create: XOR<AtendimentoCreateWithoutUserInput, AtendimentoUncheckedCreateWithoutUserInput>
  }

  export type AtendimentoCreateManyUserInputEnvelope = {
    data: AtendimentoCreateManyUserInput | AtendimentoCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AtendimentoUpsertWithWhereUniqueWithoutUserInput = {
    where: AtendimentoWhereUniqueInput
    update: XOR<AtendimentoUpdateWithoutUserInput, AtendimentoUncheckedUpdateWithoutUserInput>
    create: XOR<AtendimentoCreateWithoutUserInput, AtendimentoUncheckedCreateWithoutUserInput>
  }

  export type AtendimentoUpdateWithWhereUniqueWithoutUserInput = {
    where: AtendimentoWhereUniqueInput
    data: XOR<AtendimentoUpdateWithoutUserInput, AtendimentoUncheckedUpdateWithoutUserInput>
  }

  export type AtendimentoUpdateManyWithWhereWithoutUserInput = {
    where: AtendimentoScalarWhereInput
    data: XOR<AtendimentoUpdateManyMutationInput, AtendimentoUncheckedUpdateManyWithoutUserInput>
  }

  export type ReceitaCreateWithoutAtendimentoInput = {
    id?: string
    descricao: string
    valor?: number
    data: Date | string
    origem?: string | null
  }

  export type ReceitaUncheckedCreateWithoutAtendimentoInput = {
    id?: string
    descricao: string
    valor?: number
    data: Date | string
    origem?: string | null
  }

  export type ReceitaCreateOrConnectWithoutAtendimentoInput = {
    where: ReceitaWhereUniqueInput
    create: XOR<ReceitaCreateWithoutAtendimentoInput, ReceitaUncheckedCreateWithoutAtendimentoInput>
  }

  export type ProjetoCreateWithoutAtendimentosInput = {
    id?: string
    titulo: string
    descricao: string
    data: Date | string
    cep: string
    zona: $Enums.Zona
    cidade: string
    bairro: string
    logradouro: string
    colaborador?: ColaboradorCreateNestedOneWithoutProjetosInput
  }

  export type ProjetoUncheckedCreateWithoutAtendimentosInput = {
    id?: string
    titulo: string
    descricao: string
    data: Date | string
    cep: string
    zona: $Enums.Zona
    cidade: string
    bairro: string
    logradouro: string
    colaboradorId?: string | null
  }

  export type ProjetoCreateOrConnectWithoutAtendimentosInput = {
    where: ProjetoWhereUniqueInput
    create: XOR<ProjetoCreateWithoutAtendimentosInput, ProjetoUncheckedCreateWithoutAtendimentosInput>
  }

  export type DemandaCreateWithoutAtendimentosInput = {
    id?: string
    titulo: string
    descricao: string
    intervalo?: boolean
    dataInicio: Date | string
    dataFim?: Date | string | null
    status?: $Enums.StatusDefault
  }

  export type DemandaUncheckedCreateWithoutAtendimentosInput = {
    id?: string
    titulo: string
    descricao: string
    intervalo?: boolean
    dataInicio: Date | string
    dataFim?: Date | string | null
    status?: $Enums.StatusDefault
  }

  export type DemandaCreateOrConnectWithoutAtendimentosInput = {
    where: DemandaWhereUniqueInput
    create: XOR<DemandaCreateWithoutAtendimentosInput, DemandaUncheckedCreateWithoutAtendimentosInput>
  }

  export type ColaboradorCreateWithoutAtendimentosInput = {
    id?: string
    nome: string
    cpf?: string | null
    email?: string | null
    telefone?: string | null
    dataNascimento?: Date | string | null
    cep?: string | null
    zona?: $Enums.Zona | null
    cidade?: string | null
    bairro?: string | null
    logradouro?: string | null
    categoria?: string | null
    observacao?: string | null
    curriculo?: string | null
    isLideranca?: boolean
    criadosEm?: Date | string
    atualizadosEm?: Date | string
    lideranca?: ColaboradorCreateNestedOneWithoutColaboradoresInput
    colaboradores?: ColaboradorCreateNestedManyWithoutLiderancaInput
    eventos?: EventoCreateNestedManyWithoutParticipantesInput
    projetos?: ProjetoCreateNestedManyWithoutColaboradorInput
  }

  export type ColaboradorUncheckedCreateWithoutAtendimentosInput = {
    id?: string
    nome: string
    cpf?: string | null
    email?: string | null
    telefone?: string | null
    dataNascimento?: Date | string | null
    cep?: string | null
    zona?: $Enums.Zona | null
    cidade?: string | null
    bairro?: string | null
    logradouro?: string | null
    categoria?: string | null
    observacao?: string | null
    curriculo?: string | null
    isLideranca?: boolean
    liderancaId?: string | null
    criadosEm?: Date | string
    atualizadosEm?: Date | string
    colaboradores?: ColaboradorUncheckedCreateNestedManyWithoutLiderancaInput
    eventos?: EventoUncheckedCreateNestedManyWithoutParticipantesInput
    projetos?: ProjetoUncheckedCreateNestedManyWithoutColaboradorInput
  }

  export type ColaboradorCreateOrConnectWithoutAtendimentosInput = {
    where: ColaboradorWhereUniqueInput
    create: XOR<ColaboradorCreateWithoutAtendimentosInput, ColaboradorUncheckedCreateWithoutAtendimentosInput>
  }

  export type UserCreateWithoutAtendimentosInput = {
    id?: string
    userName: string
    name: string
    email: string
    password: string
    role?: $Enums.UserRole
  }

  export type UserUncheckedCreateWithoutAtendimentosInput = {
    id?: string
    userName: string
    name: string
    email: string
    password: string
    role?: $Enums.UserRole
  }

  export type UserCreateOrConnectWithoutAtendimentosInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAtendimentosInput, UserUncheckedCreateWithoutAtendimentosInput>
  }

  export type ReceitaUpsertWithoutAtendimentoInput = {
    update: XOR<ReceitaUpdateWithoutAtendimentoInput, ReceitaUncheckedUpdateWithoutAtendimentoInput>
    create: XOR<ReceitaCreateWithoutAtendimentoInput, ReceitaUncheckedCreateWithoutAtendimentoInput>
    where?: ReceitaWhereInput
  }

  export type ReceitaUpdateToOneWithWhereWithoutAtendimentoInput = {
    where?: ReceitaWhereInput
    data: XOR<ReceitaUpdateWithoutAtendimentoInput, ReceitaUncheckedUpdateWithoutAtendimentoInput>
  }

  export type ReceitaUpdateWithoutAtendimentoInput = {
    id?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    valor?: IntFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    origem?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ReceitaUncheckedUpdateWithoutAtendimentoInput = {
    id?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    valor?: IntFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    origem?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProjetoUpsertWithWhereUniqueWithoutAtendimentosInput = {
    where: ProjetoWhereUniqueInput
    update: XOR<ProjetoUpdateWithoutAtendimentosInput, ProjetoUncheckedUpdateWithoutAtendimentosInput>
    create: XOR<ProjetoCreateWithoutAtendimentosInput, ProjetoUncheckedCreateWithoutAtendimentosInput>
  }

  export type ProjetoUpdateWithWhereUniqueWithoutAtendimentosInput = {
    where: ProjetoWhereUniqueInput
    data: XOR<ProjetoUpdateWithoutAtendimentosInput, ProjetoUncheckedUpdateWithoutAtendimentosInput>
  }

  export type ProjetoUpdateManyWithWhereWithoutAtendimentosInput = {
    where: ProjetoScalarWhereInput
    data: XOR<ProjetoUpdateManyMutationInput, ProjetoUncheckedUpdateManyWithoutAtendimentosInput>
  }

  export type DemandaUpsertWithWhereUniqueWithoutAtendimentosInput = {
    where: DemandaWhereUniqueInput
    update: XOR<DemandaUpdateWithoutAtendimentosInput, DemandaUncheckedUpdateWithoutAtendimentosInput>
    create: XOR<DemandaCreateWithoutAtendimentosInput, DemandaUncheckedCreateWithoutAtendimentosInput>
  }

  export type DemandaUpdateWithWhereUniqueWithoutAtendimentosInput = {
    where: DemandaWhereUniqueInput
    data: XOR<DemandaUpdateWithoutAtendimentosInput, DemandaUncheckedUpdateWithoutAtendimentosInput>
  }

  export type DemandaUpdateManyWithWhereWithoutAtendimentosInput = {
    where: DemandaScalarWhereInput
    data: XOR<DemandaUpdateManyMutationInput, DemandaUncheckedUpdateManyWithoutAtendimentosInput>
  }

  export type DemandaScalarWhereInput = {
    AND?: DemandaScalarWhereInput | DemandaScalarWhereInput[]
    OR?: DemandaScalarWhereInput[]
    NOT?: DemandaScalarWhereInput | DemandaScalarWhereInput[]
    id?: StringFilter<"Demanda"> | string
    titulo?: StringFilter<"Demanda"> | string
    descricao?: StringFilter<"Demanda"> | string
    intervalo?: BoolFilter<"Demanda"> | boolean
    dataInicio?: DateTimeFilter<"Demanda"> | Date | string
    dataFim?: DateTimeNullableFilter<"Demanda"> | Date | string | null
    status?: EnumStatusDefaultFilter<"Demanda"> | $Enums.StatusDefault
  }

  export type ColaboradorUpsertWithoutAtendimentosInput = {
    update: XOR<ColaboradorUpdateWithoutAtendimentosInput, ColaboradorUncheckedUpdateWithoutAtendimentosInput>
    create: XOR<ColaboradorCreateWithoutAtendimentosInput, ColaboradorUncheckedCreateWithoutAtendimentosInput>
    where?: ColaboradorWhereInput
  }

  export type ColaboradorUpdateToOneWithWhereWithoutAtendimentosInput = {
    where?: ColaboradorWhereInput
    data: XOR<ColaboradorUpdateWithoutAtendimentosInput, ColaboradorUncheckedUpdateWithoutAtendimentosInput>
  }

  export type ColaboradorUpdateWithoutAtendimentosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    dataNascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    zona?: NullableEnumZonaFieldUpdateOperationsInput | $Enums.Zona | null
    cidade?: NullableStringFieldUpdateOperationsInput | string | null
    bairro?: NullableStringFieldUpdateOperationsInput | string | null
    logradouro?: NullableStringFieldUpdateOperationsInput | string | null
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    curriculo?: NullableStringFieldUpdateOperationsInput | string | null
    isLideranca?: BoolFieldUpdateOperationsInput | boolean
    criadosEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadosEm?: DateTimeFieldUpdateOperationsInput | Date | string
    lideranca?: ColaboradorUpdateOneWithoutColaboradoresNestedInput
    colaboradores?: ColaboradorUpdateManyWithoutLiderancaNestedInput
    eventos?: EventoUpdateManyWithoutParticipantesNestedInput
    projetos?: ProjetoUpdateManyWithoutColaboradorNestedInput
  }

  export type ColaboradorUncheckedUpdateWithoutAtendimentosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    dataNascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    zona?: NullableEnumZonaFieldUpdateOperationsInput | $Enums.Zona | null
    cidade?: NullableStringFieldUpdateOperationsInput | string | null
    bairro?: NullableStringFieldUpdateOperationsInput | string | null
    logradouro?: NullableStringFieldUpdateOperationsInput | string | null
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    curriculo?: NullableStringFieldUpdateOperationsInput | string | null
    isLideranca?: BoolFieldUpdateOperationsInput | boolean
    liderancaId?: NullableStringFieldUpdateOperationsInput | string | null
    criadosEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadosEm?: DateTimeFieldUpdateOperationsInput | Date | string
    colaboradores?: ColaboradorUncheckedUpdateManyWithoutLiderancaNestedInput
    eventos?: EventoUncheckedUpdateManyWithoutParticipantesNestedInput
    projetos?: ProjetoUncheckedUpdateManyWithoutColaboradorNestedInput
  }

  export type UserUpsertWithoutAtendimentosInput = {
    update: XOR<UserUpdateWithoutAtendimentosInput, UserUncheckedUpdateWithoutAtendimentosInput>
    create: XOR<UserCreateWithoutAtendimentosInput, UserUncheckedCreateWithoutAtendimentosInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAtendimentosInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAtendimentosInput, UserUncheckedUpdateWithoutAtendimentosInput>
  }

  export type UserUpdateWithoutAtendimentosInput = {
    id?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
  }

  export type UserUncheckedUpdateWithoutAtendimentosInput = {
    id?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
  }

  export type ColaboradorCreateManyLiderancaInput = {
    id?: string
    nome: string
    cpf?: string | null
    email?: string | null
    telefone?: string | null
    dataNascimento?: Date | string | null
    cep?: string | null
    zona?: $Enums.Zona | null
    cidade?: string | null
    bairro?: string | null
    logradouro?: string | null
    categoria?: string | null
    observacao?: string | null
    curriculo?: string | null
    isLideranca?: boolean
    criadosEm?: Date | string
    atualizadosEm?: Date | string
  }

  export type AtendimentoCreateManyColaboradorInput = {
    id?: string
    descricao: string
    tipo: $Enums.AtendimentoTipo
    receitaId?: string | null
    userId: string
    criadoEm?: Date | string
  }

  export type ProjetoCreateManyColaboradorInput = {
    id?: string
    titulo: string
    descricao: string
    data: Date | string
    cep: string
    zona: $Enums.Zona
    cidade: string
    bairro: string
    logradouro: string
  }

  export type ColaboradorUpdateWithoutLiderancaInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    dataNascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    zona?: NullableEnumZonaFieldUpdateOperationsInput | $Enums.Zona | null
    cidade?: NullableStringFieldUpdateOperationsInput | string | null
    bairro?: NullableStringFieldUpdateOperationsInput | string | null
    logradouro?: NullableStringFieldUpdateOperationsInput | string | null
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    curriculo?: NullableStringFieldUpdateOperationsInput | string | null
    isLideranca?: BoolFieldUpdateOperationsInput | boolean
    criadosEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadosEm?: DateTimeFieldUpdateOperationsInput | Date | string
    colaboradores?: ColaboradorUpdateManyWithoutLiderancaNestedInput
    eventos?: EventoUpdateManyWithoutParticipantesNestedInput
    atendimentos?: AtendimentoUpdateManyWithoutColaboradorNestedInput
    projetos?: ProjetoUpdateManyWithoutColaboradorNestedInput
  }

  export type ColaboradorUncheckedUpdateWithoutLiderancaInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    dataNascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    zona?: NullableEnumZonaFieldUpdateOperationsInput | $Enums.Zona | null
    cidade?: NullableStringFieldUpdateOperationsInput | string | null
    bairro?: NullableStringFieldUpdateOperationsInput | string | null
    logradouro?: NullableStringFieldUpdateOperationsInput | string | null
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    curriculo?: NullableStringFieldUpdateOperationsInput | string | null
    isLideranca?: BoolFieldUpdateOperationsInput | boolean
    criadosEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadosEm?: DateTimeFieldUpdateOperationsInput | Date | string
    colaboradores?: ColaboradorUncheckedUpdateManyWithoutLiderancaNestedInput
    eventos?: EventoUncheckedUpdateManyWithoutParticipantesNestedInput
    atendimentos?: AtendimentoUncheckedUpdateManyWithoutColaboradorNestedInput
    projetos?: ProjetoUncheckedUpdateManyWithoutColaboradorNestedInput
  }

  export type ColaboradorUncheckedUpdateManyWithoutLiderancaInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    dataNascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    zona?: NullableEnumZonaFieldUpdateOperationsInput | $Enums.Zona | null
    cidade?: NullableStringFieldUpdateOperationsInput | string | null
    bairro?: NullableStringFieldUpdateOperationsInput | string | null
    logradouro?: NullableStringFieldUpdateOperationsInput | string | null
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    curriculo?: NullableStringFieldUpdateOperationsInput | string | null
    isLideranca?: BoolFieldUpdateOperationsInput | boolean
    criadosEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadosEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventoUpdateWithoutParticipantesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    localizacao?: StringFieldUpdateOperationsInput | string
    categoria?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusEventoFieldUpdateOperationsInput | $Enums.StatusEvento
    prioridade?: EnumPrioridadeFieldUpdateOperationsInput | $Enums.Prioridade
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventoUncheckedUpdateWithoutParticipantesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    localizacao?: StringFieldUpdateOperationsInput | string
    categoria?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusEventoFieldUpdateOperationsInput | $Enums.StatusEvento
    prioridade?: EnumPrioridadeFieldUpdateOperationsInput | $Enums.Prioridade
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventoUncheckedUpdateManyWithoutParticipantesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    localizacao?: StringFieldUpdateOperationsInput | string
    categoria?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusEventoFieldUpdateOperationsInput | $Enums.StatusEvento
    prioridade?: EnumPrioridadeFieldUpdateOperationsInput | $Enums.Prioridade
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AtendimentoUpdateWithoutColaboradorInput = {
    id?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    tipo?: EnumAtendimentoTipoFieldUpdateOperationsInput | $Enums.AtendimentoTipo
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    receita?: ReceitaUpdateOneWithoutAtendimentoNestedInput
    projeto?: ProjetoUpdateManyWithoutAtendimentosNestedInput
    demanda?: DemandaUpdateManyWithoutAtendimentosNestedInput
    user?: UserUpdateOneRequiredWithoutAtendimentosNestedInput
  }

  export type AtendimentoUncheckedUpdateWithoutColaboradorInput = {
    id?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    tipo?: EnumAtendimentoTipoFieldUpdateOperationsInput | $Enums.AtendimentoTipo
    receitaId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    projeto?: ProjetoUncheckedUpdateManyWithoutAtendimentosNestedInput
    demanda?: DemandaUncheckedUpdateManyWithoutAtendimentosNestedInput
  }

  export type AtendimentoUncheckedUpdateManyWithoutColaboradorInput = {
    id?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    tipo?: EnumAtendimentoTipoFieldUpdateOperationsInput | $Enums.AtendimentoTipo
    receitaId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjetoUpdateWithoutColaboradorInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    cep?: StringFieldUpdateOperationsInput | string
    zona?: EnumZonaFieldUpdateOperationsInput | $Enums.Zona
    cidade?: StringFieldUpdateOperationsInput | string
    bairro?: StringFieldUpdateOperationsInput | string
    logradouro?: StringFieldUpdateOperationsInput | string
    atendimentos?: AtendimentoUpdateManyWithoutProjetoNestedInput
  }

  export type ProjetoUncheckedUpdateWithoutColaboradorInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    cep?: StringFieldUpdateOperationsInput | string
    zona?: EnumZonaFieldUpdateOperationsInput | $Enums.Zona
    cidade?: StringFieldUpdateOperationsInput | string
    bairro?: StringFieldUpdateOperationsInput | string
    logradouro?: StringFieldUpdateOperationsInput | string
    atendimentos?: AtendimentoUncheckedUpdateManyWithoutProjetoNestedInput
  }

  export type ProjetoUncheckedUpdateManyWithoutColaboradorInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    cep?: StringFieldUpdateOperationsInput | string
    zona?: EnumZonaFieldUpdateOperationsInput | $Enums.Zona
    cidade?: StringFieldUpdateOperationsInput | string
    bairro?: StringFieldUpdateOperationsInput | string
    logradouro?: StringFieldUpdateOperationsInput | string
  }

  export type AtendimentoUpdateWithoutDemandaInput = {
    id?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    tipo?: EnumAtendimentoTipoFieldUpdateOperationsInput | $Enums.AtendimentoTipo
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    receita?: ReceitaUpdateOneWithoutAtendimentoNestedInput
    projeto?: ProjetoUpdateManyWithoutAtendimentosNestedInput
    colaborador?: ColaboradorUpdateOneWithoutAtendimentosNestedInput
    user?: UserUpdateOneRequiredWithoutAtendimentosNestedInput
  }

  export type AtendimentoUncheckedUpdateWithoutDemandaInput = {
    id?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    tipo?: EnumAtendimentoTipoFieldUpdateOperationsInput | $Enums.AtendimentoTipo
    receitaId?: NullableStringFieldUpdateOperationsInput | string | null
    colaboradorId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    projeto?: ProjetoUncheckedUpdateManyWithoutAtendimentosNestedInput
  }

  export type AtendimentoUncheckedUpdateManyWithoutDemandaInput = {
    id?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    tipo?: EnumAtendimentoTipoFieldUpdateOperationsInput | $Enums.AtendimentoTipo
    receitaId?: NullableStringFieldUpdateOperationsInput | string | null
    colaboradorId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AtendimentoUpdateWithoutProjetoInput = {
    id?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    tipo?: EnumAtendimentoTipoFieldUpdateOperationsInput | $Enums.AtendimentoTipo
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    receita?: ReceitaUpdateOneWithoutAtendimentoNestedInput
    demanda?: DemandaUpdateManyWithoutAtendimentosNestedInput
    colaborador?: ColaboradorUpdateOneWithoutAtendimentosNestedInput
    user?: UserUpdateOneRequiredWithoutAtendimentosNestedInput
  }

  export type AtendimentoUncheckedUpdateWithoutProjetoInput = {
    id?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    tipo?: EnumAtendimentoTipoFieldUpdateOperationsInput | $Enums.AtendimentoTipo
    receitaId?: NullableStringFieldUpdateOperationsInput | string | null
    colaboradorId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    demanda?: DemandaUncheckedUpdateManyWithoutAtendimentosNestedInput
  }

  export type AtendimentoUncheckedUpdateManyWithoutProjetoInput = {
    id?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    tipo?: EnumAtendimentoTipoFieldUpdateOperationsInput | $Enums.AtendimentoTipo
    receitaId?: NullableStringFieldUpdateOperationsInput | string | null
    colaboradorId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ColaboradorUpdateWithoutEventosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    dataNascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    zona?: NullableEnumZonaFieldUpdateOperationsInput | $Enums.Zona | null
    cidade?: NullableStringFieldUpdateOperationsInput | string | null
    bairro?: NullableStringFieldUpdateOperationsInput | string | null
    logradouro?: NullableStringFieldUpdateOperationsInput | string | null
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    curriculo?: NullableStringFieldUpdateOperationsInput | string | null
    isLideranca?: BoolFieldUpdateOperationsInput | boolean
    criadosEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadosEm?: DateTimeFieldUpdateOperationsInput | Date | string
    lideranca?: ColaboradorUpdateOneWithoutColaboradoresNestedInput
    colaboradores?: ColaboradorUpdateManyWithoutLiderancaNestedInput
    atendimentos?: AtendimentoUpdateManyWithoutColaboradorNestedInput
    projetos?: ProjetoUpdateManyWithoutColaboradorNestedInput
  }

  export type ColaboradorUncheckedUpdateWithoutEventosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    dataNascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    zona?: NullableEnumZonaFieldUpdateOperationsInput | $Enums.Zona | null
    cidade?: NullableStringFieldUpdateOperationsInput | string | null
    bairro?: NullableStringFieldUpdateOperationsInput | string | null
    logradouro?: NullableStringFieldUpdateOperationsInput | string | null
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    curriculo?: NullableStringFieldUpdateOperationsInput | string | null
    isLideranca?: BoolFieldUpdateOperationsInput | boolean
    liderancaId?: NullableStringFieldUpdateOperationsInput | string | null
    criadosEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadosEm?: DateTimeFieldUpdateOperationsInput | Date | string
    colaboradores?: ColaboradorUncheckedUpdateManyWithoutLiderancaNestedInput
    atendimentos?: AtendimentoUncheckedUpdateManyWithoutColaboradorNestedInput
    projetos?: ProjetoUncheckedUpdateManyWithoutColaboradorNestedInput
  }

  export type ColaboradorUncheckedUpdateManyWithoutEventosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    dataNascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    zona?: NullableEnumZonaFieldUpdateOperationsInput | $Enums.Zona | null
    cidade?: NullableStringFieldUpdateOperationsInput | string | null
    bairro?: NullableStringFieldUpdateOperationsInput | string | null
    logradouro?: NullableStringFieldUpdateOperationsInput | string | null
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    curriculo?: NullableStringFieldUpdateOperationsInput | string | null
    isLideranca?: BoolFieldUpdateOperationsInput | boolean
    liderancaId?: NullableStringFieldUpdateOperationsInput | string | null
    criadosEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadosEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AtendimentoCreateManyUserInput = {
    id?: string
    descricao: string
    tipo: $Enums.AtendimentoTipo
    receitaId?: string | null
    colaboradorId?: string | null
    criadoEm?: Date | string
  }

  export type AtendimentoUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    tipo?: EnumAtendimentoTipoFieldUpdateOperationsInput | $Enums.AtendimentoTipo
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    receita?: ReceitaUpdateOneWithoutAtendimentoNestedInput
    projeto?: ProjetoUpdateManyWithoutAtendimentosNestedInput
    demanda?: DemandaUpdateManyWithoutAtendimentosNestedInput
    colaborador?: ColaboradorUpdateOneWithoutAtendimentosNestedInput
  }

  export type AtendimentoUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    tipo?: EnumAtendimentoTipoFieldUpdateOperationsInput | $Enums.AtendimentoTipo
    receitaId?: NullableStringFieldUpdateOperationsInput | string | null
    colaboradorId?: NullableStringFieldUpdateOperationsInput | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    projeto?: ProjetoUncheckedUpdateManyWithoutAtendimentosNestedInput
    demanda?: DemandaUncheckedUpdateManyWithoutAtendimentosNestedInput
  }

  export type AtendimentoUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    tipo?: EnumAtendimentoTipoFieldUpdateOperationsInput | $Enums.AtendimentoTipo
    receitaId?: NullableStringFieldUpdateOperationsInput | string | null
    colaboradorId?: NullableStringFieldUpdateOperationsInput | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjetoUpdateWithoutAtendimentosInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    cep?: StringFieldUpdateOperationsInput | string
    zona?: EnumZonaFieldUpdateOperationsInput | $Enums.Zona
    cidade?: StringFieldUpdateOperationsInput | string
    bairro?: StringFieldUpdateOperationsInput | string
    logradouro?: StringFieldUpdateOperationsInput | string
    colaborador?: ColaboradorUpdateOneWithoutProjetosNestedInput
  }

  export type ProjetoUncheckedUpdateWithoutAtendimentosInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    cep?: StringFieldUpdateOperationsInput | string
    zona?: EnumZonaFieldUpdateOperationsInput | $Enums.Zona
    cidade?: StringFieldUpdateOperationsInput | string
    bairro?: StringFieldUpdateOperationsInput | string
    logradouro?: StringFieldUpdateOperationsInput | string
    colaboradorId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProjetoUncheckedUpdateManyWithoutAtendimentosInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    cep?: StringFieldUpdateOperationsInput | string
    zona?: EnumZonaFieldUpdateOperationsInput | $Enums.Zona
    cidade?: StringFieldUpdateOperationsInput | string
    bairro?: StringFieldUpdateOperationsInput | string
    logradouro?: StringFieldUpdateOperationsInput | string
    colaboradorId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DemandaUpdateWithoutAtendimentosInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    intervalo?: BoolFieldUpdateOperationsInput | boolean
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumStatusDefaultFieldUpdateOperationsInput | $Enums.StatusDefault
  }

  export type DemandaUncheckedUpdateWithoutAtendimentosInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    intervalo?: BoolFieldUpdateOperationsInput | boolean
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumStatusDefaultFieldUpdateOperationsInput | $Enums.StatusDefault
  }

  export type DemandaUncheckedUpdateManyWithoutAtendimentosInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    intervalo?: BoolFieldUpdateOperationsInput | boolean
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumStatusDefaultFieldUpdateOperationsInput | $Enums.StatusDefault
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