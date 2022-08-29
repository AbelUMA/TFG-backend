import express from 'express'
import checkAuth from '../controllers/middleware/checkAuth.js'
import { getCaptions, addCaptions } from '../controllers/captionController.js'

const router = express.Router()

router.get('/', checkAuth, getCaptions)
router.post('/', checkAuth, addCaptions)

export default router
