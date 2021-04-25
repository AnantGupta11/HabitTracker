const express= require('express');
const app= express();
const path=require('path');
const port=process.env.PORT || 8000;
const expressLayouts=require('express-ejs-layouts');
//importing database
const db=require('./config/mongoose');



//middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.static('./assest'));

app.use(expressLayouts);
//extract styles and scripts from sub pages into the layout
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);

// Set view Engine to ejs
app.set('view engine', 'ejs');
//Set view Path
app.set('views', path.join(__dirname, 'views'));


app.use('/',require('./routes'));



//firing the express server
app.listen(port, function(err){
    if(err){
        console.log(err);
        return;
    }
    console.log('Server is running on port: ',port);
})