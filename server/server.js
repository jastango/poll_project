const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const mongoose = require('mongoose')

// Load ENV Variables
dotenv.config({ path: './config/config.env' })

//Connect to DB
async function connect() {
    try {
        await await mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })


    } catch (error) {
        console.log(error)
    }
}
connect()

const db = mongoose.connection
db.on('error', (error) => {
    console.log(error)
})

db.once('open', () => {
    console.log('Connected to DB')
})


//Routes
const polls = require('./routes/polls')

const app = express()

// Body Parser
app.use(express.json())

// Cors
const corsOptions = {
    origin: 'http://localhost:8080'
}
app.use(cors(corsOptions))

// Mount routes
app.use('/polls', polls)

const PORT = process.env.PORT || 5000

app.listen(process.env.PORT, () => console.log(`App listing to port: ${process.env.PORT}`))