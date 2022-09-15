import dotenv from 'dotenv'
dotenv.config()
import {connectDB} from './Config/db.js'
import express from 'express'
import morgan from 'morgan'
import cors from  'cors'
import bodyParser from 'body-parser'


import ContactRoute from './Routes/ContactRoute.js'
import colors from 'colors'


const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(morgan("dev"))
app.use("/api/v1/contact",ContactRoute)



const start = async(Port)=>{
    try{
        const conn =await connectDB()
        app.listen(Port,(err)=>{
            if(err){
                console.log(err)
            }
            console.log(`server is listening on port ${Port}`.yellow.underline)
        })
        console.log(`server is connected to ${conn.connection.host}`.bgGreen.underline)
    }catch(err){
        console.log(err)
    }
}

const Port = 5001
start(Port)