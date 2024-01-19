


const express =require('express')
const zod = require('zod')
 

const app = express();

app.use(express.json())

app.get('/',(req,res)=>{

    res.json({"msg":'everything is fine'})
 })

 app.post('/',(req,res)=>{
    const kidneys = req.body.kidneys
    const em = req.headers.email
    const schema = zod.array(zod.boolean()).max(2)
    const email = zod.string().email()

    const response = schema.safeParse(kidneys)
    const emailResponse = email.safeParse(em)

    if( !emailResponse.success){
        res.status(411).json({msg:'invalid email input'})
        return
    }
    if(!response.success){
        res.status(411).json({msg:'invalid kidneys input'})
        return
    }

        res.send("both are true")
    

    
 })


//  globale middleware

app.use((err,req,res,next)=>{
    res.json({msg:'sorry something wrong on server'})
})


 app.listen(3030)