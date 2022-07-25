import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import basicsOfProgrammingRoutes from './routes/basicOfProgrammingRoutes.js'
import connectDB from './config/db.js'

const app = express()
app.use(express.json())

dotenv.config()

connectDB()

// Configurar CORS
const whitelist = [process.env.FRONTEND_URL]

const corsOptions = {
  origin: function (origin, callback) {
    console.log(origin)
    if (whitelist.includes(origin)) {
      // Puede consultar la API
      callback(null, true)
    } else {
      // No esta permitido
      callback(new Error('Error de CORS'))
    }
  },
}

app.use(cors(corsOptions))

// Routing
app.use('/api/basics-of-programming', basicsOfProgrammingRoutes)

const PORT = process.env.PORT || 4000

app.listen(PORT, () => {
  console.log('Servidor corriendo en el puerto ' + PORT)
})
