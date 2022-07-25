import express from 'express'
import {
  getBasicsOfProgramming,
  addBasicsOfProgramming,
} from '../controllers/basicOfProgrammingController.js'

const router = express.Router()

router.get('/', getBasicsOfProgramming)
router.post('/', addBasicsOfProgramming)

export default router
