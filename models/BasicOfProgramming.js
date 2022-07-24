import mongoose from 'mongoose'

const basicOfProgrammingSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    extra: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
)

const BasicOfProgramming = mongoose.model(
  'BasicOfProgramming',
  basicOfProgrammingSchema
)

export default BasicOfProgramming
