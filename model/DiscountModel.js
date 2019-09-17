const pool = require('../DbConnection/db');
const SELECT_ALL_DISCOUNT ='SELECT * FROM promotion';
// const moment = require('moment');
// const localTime = moment().format('YYYY-MM-DD HH:mm:ss');
let  DISCOUNT_MODEL = () => {};

DISCOUNT_MODEL.prototype = {
   
    get_discount:()=>{
        const GET_QUERY ="SELECT promo.*,p.product_name FROM promotion as promo INNER JOIN product as p ON promo.product_id = p.id where p.status=1 and MONTH(promo.start_date)>=MONTH(CURDATE()) AND MONTH(promo.end_date)>=MONTH(CURDATE())";
        return new Promise((resolve,reject)=>{
            pool.query(GET_QUERY,(err,result)=>{
                 
                if(err) reject(err)
                resolve(result)
            })
        })
    },
    
    add_discount :body=>{
        let discount_data = body;
            const INSERT_DISCOUNT_QUERY = `INSERT INTO promotion (promo_name,promo_type,amount,product_id,start_date,end_date) VALUES('${discount_data.promo_name}','${discount_data.promo_type}','${discount_data.amount}','${discount_data.prod_id}','${discount_data.start_date}','${discount_data.end_date}')`;
      
           return new Promise((resolve,reject)=>{
               pool.query(INSERT_DISCOUNT_QUERY,(err,result)=>{
                   //console.log(result);
                   if(err) reject(err);
                    resolve(result);
               })
           })
        },
    edit_discount:(id,body)=>{
            const DISCOUNT_EDIT_QUERY = "UPDATE promotion SET promo_name = ?,promo_type = ? ,amount = ?,product_id = ? ,start_date = ?,end_date =? WHERE promo_id = ? ";
            return new Promise((resolve,reject)=>{
             pool.query(DISCOUNT_EDIT_QUERY,[body.promo_name,body.promo_type,body.amount,body.prod_id,body.start_date,body.end_date,id],(err,results)=>{
                 if(err) reject(err);
                 resolve(results);
                 
             })
            })
        },

}
module.exports = DISCOUNT_MODEL.prototype