const express = require("express");
const router = express.Router();


const { authHandler } = require("../middlewares/authHandler");
const { getcycles, rentalhistory } = require("../controllers/cycleController");
const { bookcycle } = require("../controllers/cycleController");
const { inventory } = require("../controllers/cycleController");
const { detailview } = require("../controllers/cycleController");
const { addcycle } = require("../controllers/cycleController");
const { returncycle } = require("../controllers/cycleController");



router.route("/getcycles").all(authHandler).get(getcycles);//tested
router.route("/bookcycle/:id").all(authHandler).post(bookcycle);//tested
router.route("/inventory").all(authHandler).get(inventory);//tested
router.route("/detailview/:id").all(authHandler).get(detailview);//tested
router.route("/addcycle").all(authHandler).post(addcycle);//tested
router.route("/returncycle/:id").all(authHandler).post(returncycle);//tested
router.route("/history").all(authHandler).get(rentalhistory);//tested

module.exports = router;
//forgot,reset password