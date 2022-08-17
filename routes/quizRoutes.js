import express from 'express'
import { getQuiz, addQuiz } from '../controllers/quizController.js'

const router = express.Router()

router.get('/', getQuiz)
router.post('/', addQuiz)

export default router
