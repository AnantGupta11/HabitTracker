//first importing express
const express=require('express');
const homeController=require('../controllers/homeController');
const createController=require('../controllers/createController');
const deleteController=require('../controllers/deleteController');
const weekController=require('../controllers/weekController');

const router=express.Router();

//
router.get("/",homeController);
router.get('/delete',deleteController);
router.post('/create-habit',createController);
// router.get('/week',weekController);




module.exports=router;