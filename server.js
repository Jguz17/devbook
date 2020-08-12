// importing express
const express = require('express')

const connectDB = require('./config/db')

connectDB()

// assigning function express() from express to app
const app = express()

// Api call to server, sending some data over
app.get('/', (req, res) => res.send('API Running'))

// assinging port to PORT
// this is saying that when deployed, it is going to use that port no., else use 5000
const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))