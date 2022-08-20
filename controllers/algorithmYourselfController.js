import AlgorithmYourself from '../models/AlgorithmYourself.js'

const getAlgorithmYourself = async (req, res) => {
  const algorithmYourself = await AlgorithmYourself.find({})

  res.json(algorithmYourself)
}

const addAlgorithmYourself = async (req, res) => {
  const algorithmYourself = new AlgorithmYourself(req.body)

  try {
    const algorithmYourselfSaved = await algorithmYourself.save()
    res.json(algorithmYourselfSaved)
  } catch (error) {
    console.log(error)
  }
}

export { getAlgorithmYourself, addAlgorithmYourself }
