const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

const dbConnect = async (DB_URL) => {
    try {

        const conn = await mongoose.connect( DB_URL, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        } )

        console.log( `DB connected. ${ conn.connection.name }`)
        
    } catch (error) {
        console.log('DB Connection Failed.', error.message)
    }
}

const control = require('./routes/control');
app.use('/api',control);

const DB_URL = process.env.DB_URL;
dbConnect(DB_URL);

const PORT = process.env.PORT || 8080;

app.listen(PORT,() => {
    console.log(`Server is running on PORT: ${PORT}`);
}

)

