import jwt from 'jsonwebtoken'
import User from '../models/userModels.js'

export const auth = async (req,res,next)=>{
    
    try {
        const token = req.header("Authorization").replace("Bearer ", "")
        
        console.log(token)
        if(!token){
            return res.status(401).json({message: "You must be loggedin, Authorization Denied"})
        }
        const decodeToken = jwt.verify(token,process.env.JWT_SEC)// after decode we get the user by id
       // console.log("decoded token" + decodeToken._id)
        const user = await User.findById({_id: decodeToken.id}).select("-password")
       // console.log(user)
        
        req.user = user;
        next()
    } catch (error) {
        res.status(401).json({message: "Invalid Token, Authentication Denied"})
    }
    

}

export const admin = async (req,res,next) =>{
    if(req.user && req.user.isAdmin){
        next()
    }else{
        return res.status(401).json({message: "Authorization Denied Only for admin"})
    }
}
