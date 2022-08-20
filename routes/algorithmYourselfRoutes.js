import express from 'express'
import {
  getAlgorithmYourself,
  addAlgorithmYourself,
} from '../controllers/algorithmYourselfController.js'

const router = express.Router()

router.get('/', getAlgorithmYourself)
router.post('/', addAlgorithmYourself)

export default router
