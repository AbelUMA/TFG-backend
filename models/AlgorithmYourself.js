import mongoose from 'mongoose'

const algorithmYourselfSchema = mongoose.Schema(
  {
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

const AlgorithmYourself = mongoose.model(
  'AlgorithmYourself',
  algorithmYourselfSchema
)

export default AlgorithmYourself
