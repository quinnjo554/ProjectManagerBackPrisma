
class UserService {
    constructor(prisma) {
      this.prisma = prisma;
    }
  
    async getUserByEmail(email) {
      const user = await this.prisma.user.findUnique({ where: { email } });
      if (!user) {
        throw new Error('User not found');
      }
      return user;
    }
  
    async createUser(userRequest) {
      const existingUser = await this.prisma.user.findUnique({ where: { email: userRequest.email } });
      if (existingUser) {
        throw new Error('User already exists');
      }
      const user = await this.prisma.user.create({ data: userRequest });
      return user;
    }
  
    async deleteUserByEmail(email) {
      const user = await this.prisma.user.findUnique({ where: { email } });
      if (user) {
        await this.prisma.user.delete({ where: { user_id: user.user_id } });
      }
    }
  }
  
  module.exports = UserService;