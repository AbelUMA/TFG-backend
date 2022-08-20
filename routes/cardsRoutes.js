import express from 'express'
import checkAuth from '../controllers/middleware/checkAuth.js'
import { getCards, addCards } from '../controllers/cardController.js'

const router = express.Router()

router.get('/', checkAuth, getCards)
router.post('/', checkAuth, addCards)

export default router
