//first importing express
const express=require('express');

// importing all Controllers
const homeController=require('../controllers/homeController');
const createController=require('../controllers/createController');
const deleteController=require('../controllers/deleteController');

const router=express.Router();


router.get("/",homeController);
router.get('/delete',deleteController);
router.post('/create-habit',createController);





module.exports=router;