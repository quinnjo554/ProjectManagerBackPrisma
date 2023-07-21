-- CreateTable
CREATE TABLE "Task" (
    "task_id" SERIAL NOT NULL,
    "project_id" INTEGER NOT NULL,
    "task_name" TEXT NOT NULL,
    "description" TEXT,
    "assignee_id" INTEGER NOT NULL,
    "due_date" TIMESTAMP(3),
    "status" TEXT,
    "priority" TEXT,

    CONSTRAINT "Task_pkey" PRIMARY KEY ("task_id")
);

-- CreateTable
CREATE TABLE "Comment" (
    "comment_id" SERIAL NOT NULL,
    "task_id" INTEGER NOT NULL,
    "user_id" INTEGER NOT NULL,
    "comment_text" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Comment_pkey" PRIMARY KEY ("comment_id")
);

-- CreateTable
CREATE TABLE "Label" (
    "label_id" SERIAL NOT NULL,
    "label_name" TEXT NOT NULL,

    CONSTRAINT "Label_pkey" PRIMARY KEY ("label_id")
);

-- AddForeignKey
ALTER TABLE "Task" ADD CONSTRAINT "Task_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "Project"("project_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Task" ADD CONSTRAINT "Task_assignee_id_fkey" FOREIGN KEY ("assignee_id") REFERENCES "User"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_task_id_fkey" FOREIGN KEY ("task_id") REFERENCES "Task"("task_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;
