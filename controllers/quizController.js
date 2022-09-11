import Quiz from '../models/Quiz.js'

const getQuiz = async (req, res) => {
  const quiz = await Quiz.find({})
  quiz.sort(() => 0.5 - Math.random())
  const tenQuiz = quiz.slice(0, 10)

  res.json(tenQuiz)
}

const addQuiz = async (req, res) => {
  const quiz = new Quiz(req.body)

  try {
    const quizSaved = await quiz.save()
    res.json(quizSaved)
  } catch (error) {
    console.log(error)
  }
}

export { getQuiz, addQuiz }
