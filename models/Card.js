import mongoose from 'mongoose'

const cardSchema = mongoose.Schema(
  {
    text: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    class: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

const Card = mongoose.model('Card', cardSchema)

export default Card
