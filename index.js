const express = require('express')
const dotenv = require('dotenv')

dotenv.config()
const PORT = process.env.PORT || 8888
const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID
const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET
const REDIRECT_URI = process.env.SPOTIFY_REDIRECT_URI
const app = express()

app.get('/', (req, res) => {
  const data = {
    name: 'abdul',
    isAwesome: true,
  }

  res.json(data)
})

// LOGIN ROUTE
app.get('/login', (req, res) => {
  res.send('login in with spotify')
})

app.listen(PORT, () => {
  console.log('Server listening on http://localhost:' + PORT)
})
