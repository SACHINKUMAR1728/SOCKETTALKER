import express from 'express';
import userforsidebar from '../controllers/user.controller.js';
import protectRoute from '../middleware/protectRoute.js';

const router = express.Router();

router.get("/", protectRoute, userforsidebar);

export default router;