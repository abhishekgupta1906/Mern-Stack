// Middleware for handling auth
const {Admin}=require("../db")
const {secret}=require("../index")
const jwt = require("jsonwebtoken")
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const token=req.headers.authorization;
    // bearer adfggff
    const words=token.split(" ");
    const verification=jwt.verify(words[1],secret);
    try {
        if(verification && verification.username)
        {
            next();
        }
        else{
            res.json({
            msg:"token not valid"
        })}
        
    } catch (error) {
       res.json({
        msg:"incorrect inputs"
       })
        
    }
}

module.exports = adminMiddleware;