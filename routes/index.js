//first importing express
const express=require('express');
const homeController=require('../controllers/homeController');
const createController=require('../controllers/createController');
const deleteController=require('../controllers/deleteController');
// const updateController=require('../controllers/updateController');

const router=express.Router();

//
router.get("/",homeController);
router.get('/delete',deleteController);
router.post('/create-habit',createController);





module.exports=router;