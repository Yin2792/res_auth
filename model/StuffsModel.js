const pool = require('../DbConnection/db');
const moment = require('moment');
const localTime = moment().format('YYYY-MM-DD HH:mm:ss');
const SELECT_ALL_STUFFS = "SELECT * FROM stuffs";
const  statuscode = ['Activate','Deactivate'];
//console.log(localTime);
let  STUFF_MODEL = () => {};
STUFF_MODEL.prototype = {

 create_stuff:body=>{
     let personal_data = body;
     const INSERT_STUFF_QUERY = `INSERT INTO stuff (stuff_name,stuff_position,stuff_age,stuff_address,password,confirm_password,status,date) VALUES('${personal_data.userName}','${personal_data.role}','${personal_data.age}','${personal_data.address}','${personal_data.password}','${personal_data.con_password}','${statuscode[0]}','${localTime}')`;

        return new Promise((resolve,reject)=>{
            pool.query(INSERT_STUFF_QUERY,(err,result)=>{
                //console.log(result);
                if(err) reject(err);
                 resolve(result);
            })
        })
     },
     edit_stuff :(id,body)=>{
         const STUFF_EDIT_QUERY = "UPDATE stuff SET stuff_name = ?,stuff_position = ?,stuff_age = ?,stuff_address = ? ,password = ? ,confirm_password =?,date = ? WHERE stuff_id = ? ";
         return new Promise((resolve,reject)=>{
          pool.query(STUFF_EDIT_QUERY,[body.userName,body.role,body.age,body.address,body.password,body.con_password,localTime,id],(err,results)=>{
              if(err) reject(err);
              console.log(body.userName);
              resolve(results);
              
          })
         })
     },
     deactivate_stuff :id =>{
         console.log(id);
        const STUFF_DEACTIVATE_QUERY = "UPDATE stuff SET status = ? , date = ? WHERE stuff_id = ? ";
        return new Promise((resolve,reject)=>{
            pool.query(STUFF_DEACTIVATE_QUERY,[statuscode[1],localTime,id],(err,results)=>{
                if(err) reject(err);
                resolve(results);
            })
        })
    
}
}

module.exports = STUFF_MODEL.prototype;
