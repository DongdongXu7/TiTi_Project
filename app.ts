import express from 'express'
// import morgan from 'morgan'
import mongoose from 'mongoose'
import  LoggerWaddgt from './src/utils/loggerWaddget'
import apiRouter from './src/router/api'
import sendMessage from './src/utils/send-message'
const app =express()

app.get('/',(req:any,res:any)=>{
    res.send('hello')
})


app.use(express.json())
// app.use(morgan('common'))
// 接入log4日志
app.use(LoggerWaddgt)

app.use(sendMessage)

app.use('/api',apiRouter)
 
mongoose
    .connect('mongodb://localhost:27017/test')
    .then(()=>{
        console.log('mongo connect')
    }).catch((err)=>{
        throw err
    })

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})