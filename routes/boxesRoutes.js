import express from 'express'
import checkAuth from '../controllers/middleware/checkAuth.js'
import { getBoxes, addBoxes } from '../controllers/boxController.js'

const router = express.Router()

router.get('/', checkAuth, getBoxes)
router.post('/', checkAuth, addBoxes)

export default router
