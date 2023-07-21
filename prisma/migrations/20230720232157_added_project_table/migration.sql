-- CreateTable
CREATE TABLE "Project" (
    "project_id" SERIAL NOT NULL,
    "project_name" TEXT NOT NULL,
    "description" TEXT,
    "start_date" TIMESTAMP(3) NOT NULL,
    "end_date" TIMESTAMP(3),

    CONSTRAINT "Project_pkey" PRIMARY KEY ("project_id")
);
