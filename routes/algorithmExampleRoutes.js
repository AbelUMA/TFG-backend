import express from 'express'
import {
  getAlgorithmExample,
  addAlgorithmExample,
} from '../controllers/algorithmExampleController.js'

const router = express.Router()

router.get('/', getAlgorithmExample)
router.post('/', addAlgorithmExample)

export default router
