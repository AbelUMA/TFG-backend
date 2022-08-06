import BasicOfProgramming from '../models/BasicOfProgramming.js'

const getBasicsOfProgramming = async (req, res) => {
  const basicsOfProgramming = await BasicOfProgramming.find({})

  res.json(basicsOfProgramming)
}

const addBasicsOfProgramming = async (req, res) => {
  const basicsOfProgramming = new BasicOfProgramming(req.body)

  try {
    const basicsOfProgrammingSaved = await basicsOfProgramming.save()
    res.json(basicsOfProgrammingSaved)
  } catch (error) {
    console.log(error)
  }
}

export { getBasicsOfProgramming, addBasicsOfProgramming }
