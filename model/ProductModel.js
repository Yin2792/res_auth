const pool = require('../DbConnection/db');
const SELECT_ALL_PRODUCT ='SELECT * FROM product';
const moment = require('moment');
const localTime = moment().format('YYYY-MM-DD HH:mm:ss');
let  PRODUCT_MODEL = () => {

};
PRODUCT_MODEL.prototype = {
      
    // get_category:_ =>{
    //     return new Promise((resolve,reject)=>{
    //       pool.query(SELECT_ALL_CATEGORY,(err,resu     lt)=>{
    //           if(err) reject(err);
    //            else resolve(result);
    //         });
    //     })
    //   },
    add_product:(body,file)=>{
        const product_data = body;
        const INSERT_PRODUCT_QUERY = `INSERT INTO product (product_name,product_image,category_id,date) VALUES('${product_data.prod_name}','${file.filename}','${product_data.category_id}','${localTime}')`;
      
           return new Promise((resolve,reject)=>{
               pool.query(INSERT_PRODUCT_QUERY,(err,result)=>{
                   //console.log(result);
                   if(err) reject(err);
                    resolve(result);
               })
           })
        },
        edit_product:(id,body,file)=>{
            const PRODUCT_EDIT_QUERY = "UPDATE product SET product_name = ?,product_image = ?,category_id = ?,date = ? WHERE id = ? ";
            return new Promise((resolve,reject)=>{
             pool.query(PRODUCT_EDIT_QUERY,[body.product_name,file.filename,body.category_id,localTime,id],(err,results)=>{
                 if(err) reject(err);
                 resolve(results);
                 
             })
            })
        },





    

    


}
module.exports = PRODUCT_MODEL.prototype