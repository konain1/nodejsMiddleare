 const express =require('express')
 

 const app = express();



 function auth(req,res,next){
     const username = req.headers.username;
     const password = req.headers.password;
     console.log(username)
    if(!(username == 'konain' && password == 'pass')){
        res.status(403).json({msg:'invalid input on password'})
        
    }else{
        next();
    }
 }
 function kidneycheck(req,res,next){
    const kidneyId = req.query.kidneyId

    if(kidneyId != 1 && kidneyId != 2){
    res.status(403).json({"msg":'invalid input on kidneys'})

    }else{
        next()
    }
 }

 app.get('/',auth,kidneycheck,(req,res)=>{

    res.json({"msg":'everything is perfect'})
 })

app.listen(3030)