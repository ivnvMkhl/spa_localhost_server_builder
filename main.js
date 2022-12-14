const express = require('express')
const path = require('path')
const port = process.env.PORT || 8080
const app = express()

app.use(express.static(__dirname + '/src'))

app.get('*', function (request, response) {
  response.sendFile(path.resolve(__dirname, 'src/index.html'))
})

app.listen(port)
console.log('Server started on port ' + port)
