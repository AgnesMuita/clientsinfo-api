const express = require("express");
const router = express.Router();
const clientController = require("../controllers/clientController")

router.get("/", clientController.getAllClients);
router.get("/:clientId", clientController.getOneClient);
router.post("/", clientController.createNewClient);
router.delete("/:clientId", clientController.deleteOneClient);

module.exports = router;