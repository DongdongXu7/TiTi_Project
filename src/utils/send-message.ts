import {Response,Request,NextFunction}from 'express'

export default function sendMessage(
    _req:Request,
    res:Response,
    next:NextFunction
){
    res.sendData= function(data:any,meta:any){
        this.json({
            code: 'success',
            data,
            meta,
        })

    }
   
    res.sendMessage = function(message:any){
        this.json({
            code:'success',
            message
        })
    }

    next()
}