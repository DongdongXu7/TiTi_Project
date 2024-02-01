import { SessionData } from "express-session"

declare module 'express-serve-static-core'{
    interface Response {
        sendData:(data:any,meta?:any)=>void,
        sendMessage:(message:any)=>void
    }
}