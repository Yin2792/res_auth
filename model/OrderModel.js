const pool = require('../DbConnection/db');
// const moment = require('moment');
// const localTime = moment().format('YYYY-MM-DD HH:mm:ss');
let  ORDER_MODEL = () => {};
ORDER_MODEL.prototype={

    add_order:(body,id)=>{
        let order ={
            user_id:id,
            order_id:body.order_id,
            table_id:body.table_id,
            discount_id:body.discount_id,
            _qty:body.quantity
        }
        const INSERT_DISCOUNT_QUERY = `INSERT INTO order_item (user_id,table_id,quantity,discount_id) VALUES('${order.user_id}','${order.table_id}','${order._qty}','${order.discount_id}')`;
      
           return new Promise((resolve,reject)=>{
               pool.query(INSERT_DISCOUNT_QUERY,(err,result)=>{
                   //console.log(result);
                   if(err) reject(err);
                    resolve(result);
               })
           })
    }

}
module.exports = ORDER_MODEL.prototype