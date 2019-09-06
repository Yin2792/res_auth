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
        //next  Middelware
        next();
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