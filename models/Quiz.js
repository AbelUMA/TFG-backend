import mongoose from 'mongoose'

const quizSchema = mongoose.Schema(
  {
    text: {
      type: String,
      required: true,
    },
    options: [
      {
        type: Object,
        required: true,
      },
    ],
  },
  {
    timestamps: true,
  }
)

const Quiz = mongoose.model('Quiz', quizSchema)

export default Quiz
