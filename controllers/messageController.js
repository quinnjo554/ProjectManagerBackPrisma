const { PrismaClient } = require("@prisma/client");

class MessageService {
  constructor(prisma) {
    this.prisma = prisma;
  }
  async getMessageByUserEmail(senderEmail, recipientEmail) {
    return this.prisma.message.findMany({
      where: {
        OR: [
          { sender: { email: senderEmail } },
          { recipient: { email: recipientEmail } },
        ],
      },
      orderBy: {
        sent_at: "desc", // or 'desc' depending on your requirement
      },
    });
  }

  async addMessage(messageRequest) {
    return this.prisma.message.create({
      data: {
        sender: {
          connect: { user_id: messageRequest.senderId },
        },
        recipient: {
          connect: { user_id: messageRequest.recipientId },
        },
        message_text: messageRequest.messageText,
      },
    });
  }
}

module.exports = MessageService;
