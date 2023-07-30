
class UserProjectService{
    constructor(prisma){
        this.prisma = prisma
    }

    async addProjectToUser(userProjRequest){
        const user =await this.prisma.findUnique({where:{id:userProjRequest.userId}})
        const project =await this.prisma.findUnique({where:{id:userProjRequest.projectId}})
        if(!user || !project){
            throw new Error("not found");
        }
        const userProj = await this.prisma.userProject.create({data:{userProjRequest}})
        return userProj
    }

    async getAllProjForUser(userId) {
        const user = await this.prisma.user.findUnique({ where: { user_id: userId } });
        
        if (!user) {
          // Handle the case where the user with the given userId does not exist
          return [];
        }
      
        const userProjects = await this.prisma.userProject.findMany({
          where: { user_id: user.user_id },
          include: { project: true },
        });
      
        return userProjects.map((userProject) => userProject.project);
      }
      
//cors
}

module.exports = UserProjectService