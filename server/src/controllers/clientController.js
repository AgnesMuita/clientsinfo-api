const clientService = require("../services/clientService");

const getAllClients=(req,res)=>{
  try{
    const allClients = clientService.getAllClients();
    res.send({status:"OK", data:allClients})
  }catch(err){
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
}
const getOneClient=(req,res)=>{
  const {
    params:{clientId},
  }=req;
  if(!clientId){
    res
      .status(400)
      .send({
        status: "FAILED",
        data: { error: "Parameter ':clientId' can not be empty" },
      });
  }
  try{
    const oneclient = clientService.getOneClient(clientId);
    console.log(oneclient)
    res.send({status:"OK", data:oneclient})
  }catch(error){
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
  }

const createNewClient = (req, res)=>{
  const {body} = req;
  if(
    !body.first_name || !body.last_name || !body.email || !body.gender || !body.image 
  ){
     res
      .status(400)
      .send({
        status: "FAILED",
        data: {
          error:
            "One of the keys is missing or is empty in request body",
        },
      });
    return;
  }
  const newClient = {
    id:body.id,
    first_name:body.first_name,
    last_name:body.last_name,
    email:body.email,
    gender:body.gender,
    image:body.image,
  }
  try{
    const createdClient = clientService.createNewClient(newClient);
    res.status(201).send({status:"OK", data:createdClient})
  }catch(error){
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
}
const deleteOneClient= (req,res)=>{
  const {params:{clientId,}}=req;
  if(!clientId){
    res
      .status(400)
      .send({
        status: "FAILED",
        data: { error: "Parameter ':clientId' can not be empty" },
      });
  }
  try{
    clientService.deleteOneClient(clientId);
    res.status(204).send({status:"OK"})
  }catch(error){
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
}
module.exports = {getAllClients, getOneClient, createNewClient,deleteOneClient};