require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const stringSimilarity = require('string-similarity');

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(helmet());

const mongoURI = process.env.MONGO_URI;
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

const QuestionSchema = new mongoose.Schema({
  question: String,
  answer: String,
});

const Question = mongoose.model('Question', QuestionSchema);

app.get('/', (req, res) => {
  res.send('Servidor de chatbot en funcionamiento');
});

app.post('/api/chatbot', async (req, res) => {
  const userQuestion = req.body.question;
  if (typeof userQuestion !== 'string' || userQuestion.trim() === '') {
    return res.status(400).json({ answer: 'Pregunta inválida.' });
  }

  const questions = await Question.find();
  const questionTexts = questions.map(q => q.question);
  const bestMatch = stringSimilarity.findBestMatch(userQuestion, questionTexts);

  if (bestMatch.bestMatch.rating > 0.5) {
    const response = await Question.findOne({ question: bestMatch.bestMatch.target });
    res.json({ answer: response.answer, suggestion: bestMatch.bestMatch.target });
  } else {
    res.json({ answer: 'Lo siento, no entiendo la pregunta.' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
