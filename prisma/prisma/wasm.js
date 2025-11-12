
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.6.0
 * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
 */
Prisma.prismaVersion = {
  client: "6.6.0",
  engine: "f676762280b54cd07c770017ed3711ddde35f37a"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.ColaboradorScalarFieldEnum = {
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

exports.Prisma.DemandaScalarFieldEnum = {
  id: 'id',
  titulo: 'titulo',
  descricao: 'descricao',
  intervalo: 'intervalo',
  dataInicio: 'dataInicio',
  dataFim: 'dataFim',
  status: 'status'
};

exports.Prisma.ProjetoScalarFieldEnum = {
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

exports.Prisma.ReceitaScalarFieldEnum = {
  id: 'id',
  descricao: 'descricao',
  valor: 'valor',
  data: 'data',
  origem: 'origem'
};

exports.Prisma.EventoScalarFieldEnum = {
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

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  userName: 'userName',
  name: 'name',
  email: 'email',
  password: 'password',
  role: 'role'
};

exports.Prisma.AtendimentoScalarFieldEnum = {
  id: 'id',
  descricao: 'descricao',
  tipo: 'tipo',
  receitaId: 'receitaId',
  colaboradorId: 'colaboradorId',
  userId: 'userId',
  criadoEm: 'criadoEm'
};

exports.Prisma.LoggingScalarFieldEnum = {
  id: 'id',
  userName: 'userName',
  action: 'action',
  lastChange: 'lastChange',
  updates: 'updates'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};
exports.Zona = exports.$Enums.Zona = {
  NORTE: 'NORTE',
  SUL: 'SUL',
  LESTE: 'LESTE',
  OESTE: 'OESTE',
  CENTRO: 'CENTRO',
  RURAL: 'RURAL',
  SUDESTE: 'SUDESTE'
};

exports.StatusDefault = exports.$Enums.StatusDefault = {
  PENDENTE: 'PENDENTE',
  CONCLUIDO: 'CONCLUIDO'
};

exports.StatusEvento = exports.$Enums.StatusEvento = {
  CANCELADO: 'CANCELADO',
  AGENDADO: 'AGENDADO',
  ACONTECENDO: 'ACONTECENDO',
  CONCLUIDO: 'CONCLUIDO'
};

exports.Prioridade = exports.$Enums.Prioridade = {
  ALTA: 'ALTA',
  MEDIA: 'MEDIA',
  BAIXA: 'BAIXA'
};

exports.UserRole = exports.$Enums.UserRole = {
  ADMIN: 'ADMIN',
  DEFAULT: 'DEFAULT'
};

exports.AtendimentoTipo = exports.$Enums.AtendimentoTipo = {
  PRESENCIAL: 'PRESENCIAL',
  WHATSAPP: 'WHATSAPP',
  EMAIL: 'EMAIL',
  TELEFONE: 'TELEFONE'
};

exports.Prisma.ModelName = {
  Colaborador: 'Colaborador',
  Demanda: 'Demanda',
  Projeto: 'Projeto',
  Receita: 'Receita',
  Evento: 'Evento',
  User: 'User',
  Atendimento: 'Atendimento',
  Logging: 'Logging'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }

        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
