-- AlterTable
ALTER TABLE "Task" ADD COLUMN     "userUser_id" INTEGER;

-- CreateTable
CREATE TABLE "Message" (
    "message_id" SERIAL NOT NULL,
    "sender_id" INTEGER NOT NULL,
    "recipient_id" INTEGER NOT NULL,
    "message_text" TEXT NOT NULL,
    "sent_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Message_pkey" PRIMARY KEY ("message_id")
);

-- AddForeignKey
ALTER TABLE "Message" ADD CONSTRAINT "Message_sender_id_fkey" FOREIGN KEY ("sender_id") REFERENCES "User"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Message" ADD CONSTRAINT "Message_recipient_id_fkey" FOREIGN KEY ("recipient_id") REFERENCES "User"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;
