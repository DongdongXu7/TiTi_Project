import express,{Response,Request,NextFunction} from 'express'
import * as UserRequset from '../service/User'
const router = express.Router()

router.get('/user',async(
    req:Request,
    res:Response,
    next:NextFunction
)=>{
    console.log(req)
    const  {workerUserId } = req.query
    console.log(workerUserId)
    try {
        const userInfo= await UserRequset.getUser(workerUserId as string)
        res.sendData(userInfo)
    } catch (error) {
        next(error)
    }
})

export default router