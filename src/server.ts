import express, {type Response} from "express";
import dotenv from "dotenv";
import {hello} from "db"
dotenv.config()
const app = express()

app.get("/",(_,res:Response)=>{
    res.send("Server Started !!")
   hello()
})

if(process.env.NODE_ENV!=="production")
{
    const PORT = process.env.PORT ||4000;

    app.listen(PORT,()=>{
        console.log(`Server started on PORT ${PORT}`)
    })
}


export default app;