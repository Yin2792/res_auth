const pool = require('../DbConnection/db');
//Formate of Token
//Authorization:Bearer <access_token>
const role_controller = require('../controller/RoleController');
const jwt = require('jsonwebtoken');
//secretkey
const key = 'mynewkey';

const verifyToken=(req,res,next)=>{
    //get auth header value
    const bearerHeader = req.headers['authorization'];
    //typeof  checks if var is boolean or number or string
    if(typeof bearerHeader !== 'undefined'){
     //split at the space
       const bearer =bearerHeader.split(' ');
      //get token from array
       const bearerToken = bearer[1];
       //set  the token
        req.token = bearerToken;
        //jwt properties
        const options = {
            expiresIn:'2d',
            issuer:'restaurant.com:5005/'
        }
        let decoded = jwt.verify(bearerToken,`${key}`,options);
        try{
            const users_by_decodeId = `SELECT * FROM user WHERE id = ${decoded.user_id}`;
            pool.query(users_by_decodeId,(err,result)=>{
             if(err) throw err
              else{
                
                   req.user = result
                  
                  }
           })
              req.decoded = decoded;
              
                    //next  Middelware
                    next();
            } catch (err) {
                       // Throw an error just in case anything goes wrong with verification
                       //console.log("crush");
            throw new Error(err);
        }
        
    }
    else{
    //forbidden
    res.status(403).send({
        success:false,
        message:"You're forbidden!You haven't logged in yet"
    })
    }
    }
module.exports = verifyToken