const oneClient = require("../database/database");
const { v4: uuid } = require("uuid");
const { all } = require("../routers/clientRouter");
const allClients = oneClient.getAllClients();
let newid;
for(let i=0; i<allClients.length; i++){
    newid = allClients[i].id=i+1
}

const getAllClients=()=>{
    try{
        const allClients = oneClient.getAllClients();
        return allClients;
        
    }catch(err){
        throw err;
    }
}
const getOneClient = (clientId)=>{
    try{
        const oneclient = oneClient.getOneClient(clientId);
        return oneclient;   
    }catch(err){
        throw err;
    }
}
const createNewClient = (newClient)=>{
    const clientToInsert = {...newClient,id:newid}
    console.log(clientToInsert)
    try{
        const createdClient= oneClient.createNewClient(clientToInsert)
        return createdClient;
    }catch(err){
        throw err;
    }
}
const deleteOneClient= (clientId)=>{
    try{
        oneClient.deleteOneClient(clientId)
    }catch(err){
        throw err;
    }
  return;
};
module.exports = {getAllClients, getOneClient, createNewClient, deleteOneClient};