const express = require('express');
const Role = require('../_helpers/role');
const order_model = require('../model/OrderModel');
let ORDER_CONTROLLER = () =>{};
ORDER_CONTROLLER.prototype = {
       order_add:(req,res,next)=>{
         const currentUserID = req.user.user_id;
         const currentUserRole = req.user.role;
         const {order_id,table_id,discount_id,quantity} = req.body
         
         if(currentUserRole.role!==Role.User){
            res.send({message:"you have no right to access"})
          }
          else{
            const promise = discount_model.add_order(req.body,currentUserID);
            promise.then(data => {
              console.log(data);
              res.send({
                status: true,
                message: `You have updated at id = ${id}`,
                result: data
              })
                .catch(err => console.log(err));
            })
          }

       }







}
module.exports = ORDER_CONTROLLER.prototype


