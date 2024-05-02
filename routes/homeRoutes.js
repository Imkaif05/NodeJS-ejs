const express = require('express');
const router = express.Router();

const myuser = require('../model/user_model')


// router.get('/',(req,res)=>{
//     res.render('index')
// })

router.get('/add',(req,res)=>{
    res.render('create_form')
})


router.post('/add',(req,res)=>{

      const addUser = new myuser({
         name:req.body.name,
         email:req.body.email,
         phone:req.body.phone
      })

      const saveData = addUser.save();
       if(saveData){
        res.redirect('/')
       }else{
        console.log("eror in code");
       }
})


// get data 
router.get('/',async(req,res)=>{

     myuser.find().then(user=>{

         res.render('index',{
            mydata : user
         })
         
     })

})

// upate my data
router.get('/edit/:id',(req,res)=>{
     
   myuser.findByIdAndUpdate({_id:req.params.id}).then(user=>{
        res.render('update_form',{
             updatedata : user
        })
   })

})


router.post('/update/:id',(req,res)=>{
    
 myuser.findByIdAndUpdate({_id:req.params.id},req.body).then(user=>{
     res.redirect('/')
 })


})

// delte item 

router.get('/delete/:id',(req,res)=>{
    myuser.findByIdAndDelete({_id:req.params.id}).then(user=>{
         res.redirect('/')
    })
})






module.exports = router