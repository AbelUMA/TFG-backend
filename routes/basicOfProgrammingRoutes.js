import express from 'express'
import checkAuth from '../controllers/middleware/checkAuth.js'
import {
  getBasicsOfProgramming,
  addBasicsOfProgramming,
} from '../controllers/basicOfProgrammingController.js'

const router = express.Router()

router.get('/', checkAuth, getBasicsOfProgramming)
router.post('/', checkAuth, addBasicsOfProgramming)

export default router
