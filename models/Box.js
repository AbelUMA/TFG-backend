import mongoose from 'mongoose'

const boxSchema = mongoose.Schema(
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
    type: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

const Box = mongoose.model('Box', boxSchema)

export default Box
