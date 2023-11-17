const express = require('express')
const app = express()
const format = require('date-fns/format')

app.get('/', async (request, response) => {
  let theDate = format(new Date(), 'dd-MM-yyyy')
  response.send(theDate)
})
app.listen(3000, ()=>{
    console.log("It's Running")
})
module.exports = app