import express from 'express'
import checkAuth from '../controllers/middleware/checkAuth.js'
import {
  getAlgorithmExample,
  addAlgorithmExample,
} from '../controllers/algorithmExampleController.js'

const router = express.Router()

router.get('/', checkAuth, getAlgorithmExample)
router.post('/', checkAuth, addAlgorithmExample)

export default router
