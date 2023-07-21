-- CreateTable
CREATE TABLE "TaskLabel" (
    "task_id" INTEGER NOT NULL,
    "label_id" INTEGER NOT NULL,

    CONSTRAINT "TaskLabel_pkey" PRIMARY KEY ("task_id","label_id")
);

-- AddForeignKey
ALTER TABLE "TaskLabel" ADD CONSTRAINT "TaskLabel_task_id_fkey" FOREIGN KEY ("task_id") REFERENCES "Task"("task_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TaskLabel" ADD CONSTRAINT "TaskLabel_label_id_fkey" FOREIGN KEY ("label_id") REFERENCES "Label"("label_id") ON DELETE RESTRICT ON UPDATE CASCADE;
