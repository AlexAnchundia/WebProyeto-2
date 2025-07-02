-- CreateTable
CREATE TABLE "EncuestaSatisfaccion" (
    "id" TEXT NOT NULL,
    "fecha" TIMESTAMP(3) NOT NULL,
    "puntuacion" INTEGER NOT NULL,
    "comentario" TEXT NOT NULL,
    "usuarioId" TEXT NOT NULL,

    CONSTRAINT "EncuestaSatisfaccion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Incidente" (
    "id" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,
    "estado" TEXT NOT NULL,
    "fechaReporte" TIMESTAMP(3) NOT NULL,
    "usuarioId" TEXT NOT NULL,

    CONSTRAINT "Incidente_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LogSistema" (
    "id" TEXT NOT NULL,
    "tipo" TEXT NOT NULL,
    "mensaje" TEXT NOT NULL,
    "fecha" TIMESTAMP(3) NOT NULL,
    "modulo" TEXT NOT NULL,

    CONSTRAINT "LogSistema_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ReporteUso" (
    "id" TEXT NOT NULL,
    "fecha" TIMESTAMP(3) NOT NULL,
    "moduloUsado" TEXT NOT NULL,
    "duracionSegundos" INTEGER NOT NULL,
    "usuarioId" TEXT NOT NULL,

    CONSTRAINT "ReporteUso_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SoporteCliente" (
    "id" TEXT NOT NULL,
    "mensaje" TEXT NOT NULL,
    "respuesta" TEXT NOT NULL,
    "fechaContacto" TIMESTAMP(3) NOT NULL,
    "usuarioId" TEXT NOT NULL,

    CONSTRAINT "SoporteCliente_pkey" PRIMARY KEY ("id")
);
