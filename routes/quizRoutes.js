import express from 'express'
import checkAuth from '../controllers/middleware/checkAuth.js'
import { getQuiz, addQuiz } from '../controllers/quizController.js'

const router = express.Router()

router.get('/', checkAuth, getQuiz)
router.post('/', checkAuth, addQuiz)

export default router
