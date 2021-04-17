const habits=require('../models/habit');


//function to delete the habit
const deleteController=function(req,res){
    let id=req.query.id;
    habits.findByIdAndDelete(id,function(err){
        if(err){
            console.log('Error in deliting',err);
        }

        res.redirect('back');
    })
}

module.exports=deleteController;