const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const exphbs = require('express-handlebars')
const connectDB = require('./config/db')

//Load config
dotenv.config({ path: './config/config.env' })

connectDB()

const app = express()

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}

//Handlebars
app.engine('.hbs', exphbs({ extname: '.hbs' }));
app.set('view engine', '.hbs');

// Routes
app.use('/', require('./routes/app.js'))

const PORT = process.env.PORT || 3000

app.listen(
    PORT,
    console.log(`The server is running in ${process.env.NODE_ENV} mode on port ${PORT}`)
)