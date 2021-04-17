//importing the habit model
const habits=require('../models/habit');

//adding a new habit

const createController=function(req,res){
    let newHabit=req.body.name;
    
    let status=new Array(7);

    for(let i=0;i<7;i++){
        status[i]=" ";
    }

    habits.create({
        name:newHabit,
        status:status
    })
    res.redirect('back');
}


module.exports=createController;
