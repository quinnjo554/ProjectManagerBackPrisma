const ProjectService = require('../controllers/projectController');
const express = require("express");
const { PrismaClient } = require('@prisma/client');
const router = express.Router();

const prisma = new PrismaClient();
const projectService = new ProjectService(prisma);
router.get('/id/:id', async (req, res) => {
  try {
    const projectId = parseInt(req.params.id);
    const project = await projectService.getProjectById(projectId);

    if (!project) {
      return res.status(404).json({ error: 'Project not found' });
    }

    return res.json(project);
  } catch (error) {
    console.error('Error fetching project:', error);
    return res.status(500).json({ error: 'Something went wrong' });
  }
});

router.post('/post', async (req, res) => {
  try {
    const project = await projectService.addProject(req.body);
    return res.json(project);
  } catch (error) {
    console.error('Error creating project:', error);
    return res.status(500).json({ error: 'Something went wrong' });
  }
});

router.delete('/delete/:id', async (req, res) => {
  try {
    const projectId = parseInt(req.params.id);
    await projectService.deleteProjectById(projectId);
    return res.json({ message: 'Project deleted successfully' });
  } catch (error) {
    console.error('Error deleting project:', error);
    return res.status(500).json({ error: 'Something went wrong' });
  }
});
module.exports= router;