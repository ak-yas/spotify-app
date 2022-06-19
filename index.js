const express = require('express')

const app = express()

app.get("/", (req, res) => {
  const data = {
    name: "abdul",
    isAwesome: true
  }

  res.json(data)
})

app.get('/awesome-gen', (req, res) => {
  const {name, isAwesome} = req.query;
  res.send(`${name} is ${JSON.parse(isAwesome) ? "really" : "not"} awesome`)
})


const port = 8888
app.listen(port, () => {
  console.log("Server listening on http://localhost:" + port)
})

 
