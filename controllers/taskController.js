class TaskService{
    constructor(prisma){
        this.prisma = prisma
    }

    async getTaskByProjId(projectId){
            const project =await this.prisma.project.findUnique({
                where: { project_id: parseInt(projectId) },
            });
            if (!project) {
              throw new Error('Custom needed');
            }
        
            const tasks = await this.prisma.task.findMany({
              where: { project_id: project.project_id },
            });
            const users = [];
            for (const task of tasks) {
              // Retrieve the user for each task's assignee_id
              const user = await this.prisma.user.findUnique({
                where: { user_id: task.assignee_id },
              });
              // Add the user to the users array
              users.push(user);
            }
          
            return {tasks,users};
    }

async getTaskForUser(userId){
    const user = await this.prisma.user.findUnique({
      where: { user_id: userId },
    });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const tasks = await this.prisma.task.findMany({
      where: { assignee_id: userId },
      take: 10, // Limit to 10 tasks, you can customize this based on your pageable settings
      orderBy: { task_id: 'asc' }, // Sort by task_id in ascending order
    });

    return ({ tasks });
}


}
module.exports = TaskService