const jwt = require("jsonwebtoken");
const secret = "Akanksha";

const Authentication = (req,res,next)=>{
    if (req.headers.authorization) {
        const token = req.headers.authorization
        if (token) {
            jwt.verify(token, secret, function (err, decoded) {
                if (err) {
                    return res.status(400).json({
                        message: "Not a Valid Token"
                    })
                }
                // console.log(decoded)
                req.user = decoded.data;
                next()
            })
        } else {
            return res.status(401).json({
                message: "Token Missing"
            })
        }

    } else {
        return res.status(403).json({
            message: "Not Authenticated User"
        })
    }
}

module.exports = Authentication;