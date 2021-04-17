const express= require('express');
const path=require('path');

//importing router
const router=require('./routes');

const port=process.env.PORT || 8000;

//importing database
const db=require('./config/mongoose');
// const Habit=require('./models/habit');
const app= express();

// Set view Engine to ejs
app.set('view engine', 'ejs');
//Set view Path
app.set('views', path.join(__dirname, 'views'));


//middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.static('assest'));

app.use('/',router);



//firing the express server
app.listen(port, function(err){
    if(err){
        console.log(err);
        return;
    }
    console.log('Server is running on port: ',port);
})