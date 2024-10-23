-- CreateTable
CREATE TABLE "Address" (
    "id" TEXT NOT NULL,
    "region" VARCHAR(100),
    "city" VARCHAR(100),
    "country" VARCHAR(100),
    "roadNo" VARCHAR(100),
    "postalCode" VARCHAR(100),

    CONSTRAINT "Address_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Contact" (
    "id" TEXT NOT NULL,
    "email" VARCHAR(100),
    "phone" VARCHAR(100),
    "alternativePhone" VARCHAR(100),
    "addressId" TEXT,

    CONSTRAINT "Contact_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Person" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "blood" VARCHAR(20),
    "contactId" TEXT,

    CONSTRAINT "Person_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UniPerson" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "department" VARCHAR(100),
    "account" VARCHAR(100),

    CONSTRAINT "UniPerson_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Employee" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "employeeID" TEXT NOT NULL,
    "salary" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "personId" TEXT NOT NULL,

    CONSTRAINT "Employee_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Guardian" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "profession" VARCHAR(100) NOT NULL,
    "income" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "personId" TEXT NOT NULL,

    CONSTRAINT "Guardian_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Contact_addressId_key" ON "Contact"("addressId");

-- CreateIndex
CREATE UNIQUE INDEX "Person_contactId_key" ON "Person"("contactId");

-- AddForeignKey
ALTER TABLE "Contact" ADD CONSTRAINT "Contact_addressId_fkey" FOREIGN KEY ("addressId") REFERENCES "Address"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Person" ADD CONSTRAINT "Person_contactId_fkey" FOREIGN KEY ("contactId") REFERENCES "Contact"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Employee" ADD CONSTRAINT "Employee_personId_fkey" FOREIGN KEY ("personId") REFERENCES "Person"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Guardian" ADD CONSTRAINT "Guardian_personId_fkey" FOREIGN KEY ("personId") REFERENCES "Person"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
