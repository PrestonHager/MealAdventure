const express = require('express')
const path = require('path')

const app = express()
const port = 80

app.use('/static', express.static(path.join(__dirname, 'static')))

app.get('/', (req, res) => {
  res.render('index.jade');
})

app.listen(port, () => console.log(`MealAdventure listening on port ${port}!`))
