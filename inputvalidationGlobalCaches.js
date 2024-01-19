


const express =require('express')
 

const app = express();

app.use(express.json())

app.get('/',(req,res)=>{

    res.json({"msg":'everything is fine'})
 })

 app.post('/',(req,res)=>{
    const kidneys = req.body.kidneys
    const k_length = kidneys.length;

    if( typeof kidneys != 'object'){
        res.json({msg:'kidneys must be array'})
    }else{

        res.send(`you have ${k_length} kidneys`)
    }
 })


//  globale middleware

app.use((err,req,res,next)=>{
    res.json({msg:'sorry something wrong on server'})
})


