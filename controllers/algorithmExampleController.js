import AlgorithmExample from '../models/AlgorithmExample.js'

const getAlgorithmExample = async (req, res) => {
  const algorithmExample = await AlgorithmExample.find({})

  res.json(algorithmExample)
}

const addAlgorithmExample = async (req, res) => {
  const algorithmExample = new AlgorithmExample(req.body)

  try {
    const algorithmExampleSaved = await algorithmExample.save()
    res.json(algorithmExampleSaved)
  } catch (error) {
    console.log(error)
  }
}

export { getAlgorithmExample, addAlgorithmExample }
