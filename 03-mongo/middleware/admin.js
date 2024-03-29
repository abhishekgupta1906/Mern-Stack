// Middleware for handling auth
const { Admin} = require("../db");
async function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const username = req.headers.username;
    const password = req.headers.password;
    try {
        const value = await Admin.findOne({
            username: username,
            password: password
        });
    
        if (value) {
            console.log("Admin exists")
            next();
        } else {
            res.status(403).json({
                msg: "Admin doesn't exist"
            });
        }
    } catch (error) {
        // Handle any potential errors here
        console.error(error);
    }
}

module.exports = adminMiddleware;