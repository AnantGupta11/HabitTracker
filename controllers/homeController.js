const habits=require('../models/habit');

const homeController=function(req,res){
    
    let weekdays=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];

    let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    let date=new Date();

    //finding all habits and send it into habit
    habits.find({},function(err,habit){

        res.render('home',{
            title:"Habit-Tracker",
            habits:habit,
            weekdays:weekdays,
            monthNames:monthNames,
            date:date
        });
    });

}


module.exports=homeController;