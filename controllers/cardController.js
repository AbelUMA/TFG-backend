import Card from '../models/Card.js'

const getCards = async (req, res) => {
  const cards = await Card.find().where('type').equals(req.query.type)

  res.json(cards)
}

const addCards = async (req, res) => {
  const card = new Card(req.body)

  try {
    const cardSaved = await card.save()
    res.json(cardSaved)
  } catch (error) {
    console.log(error)
  }
}

export { getCards, addCards }
