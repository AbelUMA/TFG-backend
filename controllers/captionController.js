import Caption from '../models/Caption.js'

const getCaptions = async (req, res) => {
  const captions = await Caption.find({})

  res.json(captions)
}

const addCaptions = async (req, res) => {
  const caption = new Caption(req.body)

  try {
    const captionSaved = await caption.save()
    res.json(captionSaved)
  } catch (error) {
    console.log(error)
  }
}

export { getCaptions, addCaptions }
