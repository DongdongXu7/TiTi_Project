import UserModel, { type User } from  '../models/Users'


export const getUser=(workerUserId:string):Promise<User|null>=>{
    return UserModel.findOne({workerUserId}).exec()
}

export const createUser=(userInfo:{workerUserId:string,userName:string,age:number}):Promise<User | null>=>{
    const user =new UserModel<User>({
        workerUserId:userInfo.workerUserId,
        userName:userInfo.userName,
        age:userInfo.age,
        updateTime:new Date()
    })

    return user.save()
}