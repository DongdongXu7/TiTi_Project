import { Request} from "express";
import { defaultLogger } from "../common/logger"

const whiteList:any[] = []

const LoggerWaddgt = (
    req:Request,
    res:any,
    next:any
)=>{
    if(whiteList.includes(req.path)){
        next()
    }
    
    const {method,url,hostname,headers,query,body,baseUrl } = req
    defaultLogger.info({method,url,hostname,baseUrl,headers,query,body })
    const oldSend = res.send
    res.send = function(data:any){
        defaultLogger.info(data)
        res.send = oldSend
        res.send(data)
    }
    next()
}

export default LoggerWaddgt