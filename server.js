// importing express
const express = require('express')

const connectDB = require('./config/db')

// assigning function express() from express to app
const app = express()

// Connect to database
connectDB()

// Init Middleware
app.use(express.json({ extended: false }))

// Api call to server, sending some data over
app.get('/', (req, res) => res.send('API Running'))

// Define routes
app.use('/api/users', require('./routes/api/users'))
app.use('/api/auth', require('./routes/api/auth'))
app.use('/api/profile', require('./routes/api/profile'))
app.use('/api/posts', require('./routes/api/posts'))

// assinging port to PORT
// this is saying that when deployed, it is going to use that port no., else use 5000
const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))