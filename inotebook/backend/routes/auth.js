const express = require('express');
const router = express.Router();
const User=require('../models/Users')
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

const JWT_SECRET = "Mahiuhthebest";
//post method for usr creation
router.post('/creteuser', [
    body('name').isLength({ min: 3 }),
    body('email').isEmail(),
    body('password').isLength({ min: 5 }),

] , async(req, res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
   try{
    let user = await User.findOne({email : req.body.email})
    if(user){
       return res.status(400).json({error : 'Email already exists'});
    }

   const salt = await bcrypt.genSalt(10);
   secPass = await bcrypt.hashSync(req.body.password, salt);
    user = await User.create({
        
     name: req.body.name,
       email: req.body.email,
       password: secPass,
     })

const data ={
user : {
    id : user.id
}
}

     const authtoken =  jwt.sign(data , JWT_SECRET);
     
//    res.json(user)

res.json({authtoken})
   } catch(e) {
    console.error(e.message);
    res.status(500).send("Something went wrong");
    
   }
})

module.exports = router;





