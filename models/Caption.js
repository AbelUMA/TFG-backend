import mongoose from 'mongoose'

const captionSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

const Caption = mongoose.model('Caption', captionSchema)

export default Caption
