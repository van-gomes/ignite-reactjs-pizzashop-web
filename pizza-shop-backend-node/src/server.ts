import express from 'express'

const app = express()

app.get('/', (req, res) => {
  res.send('Pizza Shop API')
})

app.listen(3333, () => {
  console.log('Server running on http://localhost:3333')
})
