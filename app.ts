import express from 'express'
import morgan from 'morgan'
import mongoose from 'mongoose'

const app =express()

app.get('/',(req:any,res:any)=>{
    res.send('hello')
})

app.use(morgan('common'))

mongoose
    .connect('mongodb://localhost:27017/')
    .then(()=>{
        console.log('mongo connect')
    }).catch((err)=>{
        throw err
    })

    app.listen(3000, () => {
        console.log('Server is running on port 3000');
      })