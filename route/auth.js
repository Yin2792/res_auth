const model_user = require('../model/UserModel');
//Formate of Token
//Authorization:Bearer <access_token>
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
            expiresIn:'50s',
            issuer:'restaurant.com:5005/'
        }
        try{
        let decoded = jwt.verify(bearerToken,`${key}`,options);

        const get_user_id =model_user.get_users(decoded.user_id,bearerToken);
         get_user_id.then(user=>{
             if(!user){
                throw new Error();
             }
             else{
                 req.user = user
             }
         })
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