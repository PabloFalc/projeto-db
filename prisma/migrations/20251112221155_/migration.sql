-- CreateEnum
CREATE TYPE "StatusDefault" AS ENUM ('PENDENTE', 'CONCLUIDO');

-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('ADMIN', 'DEFAULT');

-- CreateEnum
CREATE TYPE "Prioridade" AS ENUM ('ALTA', 'MEDIA', 'BAIXA');

-- CreateEnum
CREATE TYPE "StatusEvento" AS ENUM ('CANCELADO', 'AGENDADO', 'ACONTECENDO', 'CONCLUIDO');

-- CreateEnum
CREATE TYPE "Zona" AS ENUM ('NORTE', 'SUL', 'LESTE', 'OESTE', 'CENTRO', 'RURAL', 'SUDESTE');

-- CreateEnum
CREATE TYPE "AtendimentoTipo" AS ENUM ('PRESENCIAL', 'WHATSAPP', 'EMAIL', 'TELEFONE');

-- CreateEnum
CREATE TYPE "Despesa" AS ENUM ('FIXA', 'AVULSA');

-- CreateTable
CREATE TABLE "Colaboradores" (
    "id" TEXT NOT NULL,
    "nome" VARCHAR(100) NOT NULL,
    "cpf" CHAR(14),
    "email" VARCHAR(254),
    "telefone" VARCHAR(15),
    "dataNascimento" TIMESTAMP(3),
    "cep" VARCHAR(9),
    "zona" "Zona",
    "cidade" VARCHAR(75),
    "bairro" VARCHAR(100),
    "logradouro" VARCHAR(100),
    "categoria" VARCHAR(50),
    "observacao" VARCHAR(150),
    "curriculo" VARCHAR(75),
    "isLideranca" BOOLEAN NOT NULL DEFAULT false,
    "liderancaId" TEXT,
    "criadosEm" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "atualizadosEm" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Colaboradores_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Demandas" (
    "id" TEXT NOT NULL,
    "titulo" VARCHAR(75) NOT NULL,
    "descricao" VARCHAR(150) NOT NULL,
    "intervalo" BOOLEAN NOT NULL DEFAULT false,
    "dataInicio" TIMESTAMP(3) NOT NULL,
    "dataFim" TIMESTAMP(3),
    "status" "StatusDefault" NOT NULL DEFAULT 'PENDENTE',

    CONSTRAINT "Demandas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Projetos" (
    "id" TEXT NOT NULL,
    "titulo" VARCHAR(75) NOT NULL,
    "descricao" VARCHAR(150) NOT NULL,
    "data" TIMESTAMP(3) NOT NULL,
    "cep" VARCHAR(9) NOT NULL,
    "zona" "Zona" NOT NULL,
    "cidade" VARCHAR(75) NOT NULL,
    "bairro" VARCHAR(100) NOT NULL,
    "logradouro" VARCHAR(100) NOT NULL,
    "colaboradorId" TEXT,

    CONSTRAINT "Projetos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Receitas" (
    "id" TEXT NOT NULL,
    "descricao" VARCHAR(150) NOT NULL,
    "valor" INTEGER NOT NULL DEFAULT 0,
    "data" TIMESTAMP(3) NOT NULL,
    "origem" VARCHAR(25),

    CONSTRAINT "Receitas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Eventos" (
    "id" TEXT NOT NULL,
    "nome" VARCHAR(75) NOT NULL,
    "descricao" VARCHAR(200) NOT NULL,
    "localizacao" VARCHAR(50) NOT NULL,
    "categoria" VARCHAR(20) NOT NULL,
    "status" "StatusEvento" NOT NULL DEFAULT 'AGENDADO',
    "prioridade" "Prioridade" NOT NULL,
    "dataInicio" TIMESTAMP(3) NOT NULL,
    "dataFim" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Eventos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Usuarios" (
    "id" TEXT NOT NULL,
    "userName" VARCHAR(30) NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "email" VARCHAR(254) NOT NULL,
    "password" VARCHAR(254) NOT NULL,
    "role" "UserRole" NOT NULL DEFAULT 'DEFAULT',

    CONSTRAINT "Usuarios_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Atendimentos" (
    "id" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "tipo" "AtendimentoTipo" NOT NULL,
    "receitaId" TEXT,
    "colaboradorId" TEXT,
    "userId" TEXT NOT NULL,
    "criadoEm" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Atendimentos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Logging" (
    "id" TEXT NOT NULL,
    "userName" VARCHAR(30) NOT NULL,
    "action" VARCHAR(150) NOT NULL,
    "lastChange" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updates" TEXT[],

    CONSTRAINT "Logging_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ColaboradorToEvento" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_ColaboradorToEvento_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "_ProjetoAtendimento" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_ProjetoAtendimento_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "_DemandaAtendimento" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_DemandaAtendimento_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuarios_email_key" ON "Usuarios"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Atendimentos_receitaId_key" ON "Atendimentos"("receitaId");

-- CreateIndex
CREATE INDEX "_ColaboradorToEvento_B_index" ON "_ColaboradorToEvento"("B");

-- CreateIndex
CREATE INDEX "_ProjetoAtendimento_B_index" ON "_ProjetoAtendimento"("B");

-- CreateIndex
CREATE INDEX "_DemandaAtendimento_B_index" ON "_DemandaAtendimento"("B");

-- AddForeignKey
ALTER TABLE "Colaboradores" ADD CONSTRAINT "Colaboradores_liderancaId_fkey" FOREIGN KEY ("liderancaId") REFERENCES "Colaboradores"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Projetos" ADD CONSTRAINT "Projetos_colaboradorId_fkey" FOREIGN KEY ("colaboradorId") REFERENCES "Colaboradores"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Atendimentos" ADD CONSTRAINT "Atendimentos_receitaId_fkey" FOREIGN KEY ("receitaId") REFERENCES "Receitas"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Atendimentos" ADD CONSTRAINT "Atendimentos_colaboradorId_fkey" FOREIGN KEY ("colaboradorId") REFERENCES "Colaboradores"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Atendimentos" ADD CONSTRAINT "Atendimentos_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Usuarios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ColaboradorToEvento" ADD CONSTRAINT "_ColaboradorToEvento_A_fkey" FOREIGN KEY ("A") REFERENCES "Colaboradores"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ColaboradorToEvento" ADD CONSTRAINT "_ColaboradorToEvento_B_fkey" FOREIGN KEY ("B") REFERENCES "Eventos"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProjetoAtendimento" ADD CONSTRAINT "_ProjetoAtendimento_A_fkey" FOREIGN KEY ("A") REFERENCES "Atendimentos"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProjetoAtendimento" ADD CONSTRAINT "_ProjetoAtendimento_B_fkey" FOREIGN KEY ("B") REFERENCES "Projetos"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DemandaAtendimento" ADD CONSTRAINT "_DemandaAtendimento_A_fkey" FOREIGN KEY ("A") REFERENCES "Atendimentos"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DemandaAtendimento" ADD CONSTRAINT "_DemandaAtendimento_B_fkey" FOREIGN KEY ("B") REFERENCES "Demandas"("id") ON DELETE CASCADE ON UPDATE CASCADE;
