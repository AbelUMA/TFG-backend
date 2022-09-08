import Box from '../models/Box.js'

const getBoxes = async (req, res) => {
  const boxes = await Box.find().where('type').equals(req.query.type)

  res.json(boxes)
}

const addBoxes = async (req, res) => {
  const box = new Box(req.body)

  try {
    const boxSaved = await box.save()
    res.json(boxSaved)
  } catch (error) {
    console.log(error)
  }
}

export { getBoxes, addBoxes }
