const { PrismaClient } = require('@prisma/client');



class ProjectService {
  constructor(prisma){
    this.prisma = prisma
  }
  async getProjectById(id) {
    return this.prisma.project.findUnique({
      where: { project_id: parseInt(id) },
    });
  }

  async addProject(projectRequest) {
    return this.prisma.project.create({
      data: {
        projectName: projectRequest.projectName,
        description: projectRequest.description,
        startDate: projectRequest.startDate,
        endDate: projectRequest.endDate,
      },
    });
  }

  async deleteProjectById(id) {
    const project = await this.prisma.project.findUnique({
      where: { id: parseInt(id) },
    });

    if (!project) {
      throw new Error('Project not found');
    }

    return this.prisma.project.delete({
      where: { id: parseInt(id) },
    });
  }
}

module.exports = ProjectService;
