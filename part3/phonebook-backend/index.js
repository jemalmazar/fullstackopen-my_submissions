const express = require('express')
const morgan = require('morgan')

const app = express()

app.use(express.json())
// morgan format string and POST token creation from: https://stackoverflow.com/a/67254802
app.use(morgan(
  ':method :url :status :res[content-length] - :response-time ms :postData'
))
app.use(express.static('dist'))

morgan.token('postData', (request, response) => {
  if (request.method === 'POST') {
    return JSON.stringify(request.body)
  } else {
    return " "
  }
})

let persons = [
    {
      "id": "1",
      "name": "Arto Hellas",
      "number": "040-123456"
    },
    {
      "id": "2",
      "name": "Ada Lovelace",
      "number": "39-44-5323523"
    },
    {
      "id": "3",
      "name": "Dan Abramov",
      "number": "12-43-234345"
    },
    {
      "id": "4",
      "name": "Mary Poppendieck",
      "number": "39-23-6423122"
    }
]

// ID generation from https://stackoverflow.com/a/19842865
const generateRandomId = () => Math.random().toString(16).slice(2)

app.get('/', (request, response) => { 
  response.send('<h1>Phonebook!</h1>')
})

app.get('/info', (request, response) => {
  const requestTime = new Date()
  
  response.send(`
    <p>Phonebook has info for ${persons.length} people</p>
    <p>${requestTime}</p>  
  `)
})

app.get('/api/persons', (request, response) => {
  response.json(persons)
})

app.get('/api/persons/:id', (request, response) => {
  const id = request.params.id
  const person = persons.find(note => note.id === id)

  if (person) {
    response.json(person)
  } else {
    response.statusMessage = `Person with id:${id} does not exist`
    response.status(404).end()
  }
})

app.post('/api/persons', (request, response) => {
  const isDuplicate = persons.find(person => person.name.toLowerCase() === request.body.name.toLowerCase())

  if (!request.body.name) return response.status(400).json({ error: "name is missing" })
  if (!request.body.number) return response.status(400).json({ error: "number is missing" })
  if (isDuplicate) return response.status(400).json({ error: "name must be unique" })
  
  const person = {
    id: generateRandomId(),
    name: request.body.name,
    number: request.body.number
  }

  response.json(person)
})

app.delete('/api/persons/:id', (request, response) => {
  const id = request.params.id
  persons = persons.filter(person => person.id !== id)

  response.status(204).end()
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})