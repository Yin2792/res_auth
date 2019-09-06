const stuff_model = require('../model/StuffsModel');

let STUFF_CONTROLLER = () => {};

STUFF_CONTROLLER.prototype = {

    stuff_create:(req,res,next)=>{
        //console.log(req.body.user);
        //like these object,have to be typed in postman
            const {userName,password,role,age,address,con_password} = req.body;
             //console.log(req.body);
             const promise = stuff_model.create_stuff(req.body);
              promise.then(data =>{
                  res.send({
                     status:true, 
                     result:data
                    });
              })
              .catch(err=>console.log(err));
        
    },
    stuff_edit :(req,res,next)=>{
        const id = req.params.id;
        const {userName,password,role,age,address,con_password} = req.body;
        const promise = stuff_model.edit_stuff(parseInt(id),req.body);
         promise.then(data=>{
             console.log(data);
             res.send({
                 status:true,
                 message:`You have updated at id = ${id}`,
                 result:data
             })
             .catch(err=>console.log(err));
         })
    },
    stuff_deactivate :(req,res,next)=>{
        const deactivated_id = req.params.id;
        console.log(deactivated_id);
        const promise = stuff_model.deactivate_stuff(deactivated_id);
        console.log(promise);
        promise.then(data=>{
             res.send({
                  message:"your account has been deactivated",
                  result:data
             })
        })
        .catch(err=>res.send(err));

    }
    

}
module.exports = STUFF_CONTROLLER.prototype