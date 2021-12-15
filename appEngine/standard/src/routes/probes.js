var express = require("express")
var router = express.Router()

router.get("/health", (_, res) => {
  res.status(200).send("UP")
})

router.get("/readiness", (_, res) => {
  res.status(200).send("READY")
})

module.exports = router
