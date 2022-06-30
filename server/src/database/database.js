const DB = require("./db.json");
const {saveToDatabase} = require("./utils")


const getAllClients = ()=>{
  try{
    return DB;
  }catch(error){
    throw {status: 500, message: error };
  }
}
const getOneClient=(clientId)=>{
  console.log(typeof clientId)
  try{
    const oneclient = DB.find((client)=>client.id===Number(clientId))
    if(!oneclient){
      throw {
          status: 400,
          message: `Can't find client with the id ${clientId}`,
        };
    }
    return oneclient;
  }catch(error){
      throw { status: error?.status || 500, message: error?.message || error };
  }
}
const createNewClient=(newClient)=>{
  try{
  const isAlreadyAdded = DB.findIndex((client)=>client.email===newClient.email)>-1;
  if(isAlreadyAdded){
     throw {
      status: 400,
      message: `Client with the email '${newClient.email}' already exists`,
    };
  }
  DB.push(newClient);
  saveToDatabase(DB)
  return newClient; 
  }catch(error){
      throw { status: error?.status || 500, message: error?.message || error };
  }
}

const deleteOneClient = (clientId)=>{
  try{
    const indexForDeletion = DB.findIndex((client)=>client.id === Number(clientId));
    if(indexForDeletion===-1){
      throw {
        status: 400,
        message: `Can't find client with the id '${clientId}'`,
      };
    }
    DB.splice(indexForDeletion,1)
    saveToDatabase(DB); 
  }catch(error){
    throw { status: error?.status || 500, message: error?.message || error };
  }
}
module.exports = {getAllClients, getOneClient, createNewClient, deleteOneClient}