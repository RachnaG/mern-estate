import express from 'express';
import { test } from '../controllers/user.controller.js';

const router = express.Router();

router.get('/test', test);

export default router;
//controller(routing logic) => route(router.get()) => index.js(app.use)