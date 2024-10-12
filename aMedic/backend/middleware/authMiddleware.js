const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET;

function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if(token == null)
        return res.status(401).json({message: "no token"});

    jwt.verify(token, JWT_SECRET, (err, user)=>{
        if(err)
            return res.status(403).json({message: "invalid or expired token"});
        req.user = user;
        next();
    });
}

module.exports = authenticateToken;