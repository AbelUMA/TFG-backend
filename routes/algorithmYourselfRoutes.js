import express from 'express'
import checkAuth from '../controllers/middleware/checkAuth.js'
import {
  getAlgorithmYourself,
  addAlgorithmYourself,
} from '../controllers/algorithmYourselfController.js'

const router = express.Router()

router.get('/', checkAuth, getAlgorithmYourself)
router.post('/', checkAuth, addAlgorithmYourself)

export default router
