const mongoose = require('mongoose');

const habitSchema= new mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    status:{
        type:Array
    }
});

const Habit=mongoose.model('Habit', habitSchema);

module.exports= Habit;