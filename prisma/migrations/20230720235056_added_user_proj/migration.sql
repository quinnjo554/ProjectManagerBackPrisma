-- CreateTable
CREATE TABLE "UserProject" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "project_id" INTEGER NOT NULL,

    CONSTRAINT "UserProject_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "UserProject" ADD CONSTRAINT "UserProject_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserProject" ADD CONSTRAINT "UserProject_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "Project"("project_id") ON DELETE RESTRICT ON UPDATE CASCADE;
