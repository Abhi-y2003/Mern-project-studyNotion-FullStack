const jwt = require("jsonwebtoken");
require("dotenv").config();
const user =require("../models/User");


//auth
exports.auth = async(req,res,next)=>{
    try {
        //extracting token
        const token = req.cookies.token || req.body.token || req.header("authorization").replace("bearer", " ");

        //if token is missing
        if(!token){
            return res.status(401).json({
                success:false,
                message:"token is missing"
            })
        }

        //verify the token

        try {
            const decode = jwt.verify(token, process.env.JWT_SECRET);
            console.log(decode);
            req.user = decode;
        } catch (error) {
            
            return res.status(401).json({
                success:false,
                message:"Token is invalid"
            })
        }

        next();

    } catch (error) {
        console.error(error)
            return res.status(401).json({
                success:false,
                message:"Something went wrong while validating the token"
            })
    }
}



//isStudent verification

exports.isStudent = async(req,res,next)=>{

    try {

        if(req.user.accountType !== "Student"){
            return res.status(401).json({
                success:false,
                message:"This is a protected route for Students only"
            })
        }

        next();
        
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:"User role cannot be verified"
        })
    }
}



//isInstructor verification

exports.isInstructor = async(req,res,next)=>{

    try {

        if(req.user.accountType !== "Instructor"){
            return res.status(401).json({
                success:false,
                message:"This is a protected route for Instructors only"
            })
        }

        next();
        
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:"User role cannot be verified"
        })
    }
}


//isAdmin

exports.isAdmin = async(req,res,next)=>{

    try {

        console.log(req.user.accountType);
        if(req.user.accountType !== "Admin"){
            return res.status(401).json({
                success:false,
                message:"This is a protected route for Admin only"
            })
        }

        next();
        
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:"User role cannot be verified"
        })
    }
}