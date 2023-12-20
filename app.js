const express = require('express')
const app = express()

app.get('/', async (request, response) => {
  let theDate = new Date()
  response.send(
    `${theDate.getDate()}-${theDate.getMonth() + 1}-${theDate.getFullYear()}`
  )
})
app.listen(3000, () => {
  console.log("It's Running")
})
module.exports = app
