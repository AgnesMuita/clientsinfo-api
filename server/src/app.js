const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const clientRouter = require("./routers/clientRouter")

const bodyParser=require("body-parser");

var cors = require('cors');
app.use(cors({ origin: true, credentials: true }));

app.use(express.json({ extended: false }));


app.use(bodyParser.json())
app.use("/api/clients", clientRouter)
app.listen(PORT, ()=>{
  console.log(`API listening on port ${PORT}`)
})