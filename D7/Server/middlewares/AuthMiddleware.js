const jwt = require('jsonwebtoken');
const jwtSecretKey = process.env.APP_JWT_SECRET_KEY;


const AuthMiddleware = (req, res, next) => {
    //console.log(req);
    // Verifico la presenza di un token negli headers della request
    
    let token = req.headers.authorization;
    console.log(token);
    //console.log(token)
    if(!token) {
        const err = new Error('Unauthorized');
        err.status = 401;
        return next(err);
    } else {
        token = token.split(' ')[1];
        jwt.verify(token, jwtSecretKey, (err, data) => {
            if(err) {
                //return res.status(401).json({error: 'Invalid token'}) 
                err.message = 'Invalid token'; // di default 'invalid signature'
                err.status = 401;
                return next(err);
            } else {
                next();
                console.log(data)
            }
        })
    }
}

module.exports = AuthMiddleware;