import mongoose from 'mongoose'

const algorithmExampleSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    tableContent: {
      type: String,
      required: true,
    },
    debuggerContent: {
      type: String,
    },
    extraContent: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
)

const AlgorithmExample = mongoose.model(
  'AlgorithmExample',
  algorithmExampleSchema
)

export default AlgorithmExample
