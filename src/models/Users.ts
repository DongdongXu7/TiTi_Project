import { Schema,model } from "mongoose";

export interface User {
    age: Number;
    workerUserId:String;
    userName:String;
    userNameEn?: String;
    updateTime?:Date;
}

const UserSchema= new Schema<User>({
    userName:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    workerUserId:{
        type:String,
        required:true
    },
    userNameEn:String,
    updateTime:{
        type:Date,
        required:true
    }
})

const UserModel = model('User',UserSchema)

export default UserModel