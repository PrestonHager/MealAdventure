const express = require('express')
const path = require('path')
const http = require('http');
const enforce = require('express-sslify');

const app = express()
const PORT = process.env.PORT || 80;

app.use('/static', express.static(path.join(__dirname, 'static')))

app.get('/', (req, res) => {
  res.render('index.jade');
})

// app.listen(port, () => console.log(`MealAdventure listening on port ${port}!`))
app.use(enforce.HTTPS({ trustProtoHeader: true }));

http.createServer(app).listen(PORT, function() {
    console.log('MealAdventure listening on port ' + PORT);
})
