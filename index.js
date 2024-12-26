const express = require('express');

const app = express();

require('dotenv').config();

const bodyparser = require('body-parser');

const cors = require('cors');

const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use(express.urlencoded({extended:true}));

app.use(cors({
    origin:"https://messkatta-frontend.vercel.app",
    methods:'POST,GET,PUT,DELETE',
    credentials:true
}));

app.options('*', (req, res) => {
    res.header('Access-Control-Allow-Origin', 'https://messkatta-frontend.vercel.app');
    res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.sendStatus(204); // Respond without body
});


require('./Models/config');

app.get('/',(req,res)=>{
    res.json('Hello');
});

app.use('/auth',require('./Routes/Auth'));

app.use('/profile',require('./Routes/Profile'));

app.use('/menu',require('./Routes/Menu'));

app.listen(PORT,()=>{
    console.log('Server started');
})
