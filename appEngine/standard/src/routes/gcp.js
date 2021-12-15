var express = require("express")
var router = express.Router()

const service = process.env.SERVICE

router.get("/", (_, res) => {
  res.status(200).json({"message": `Endpoint for the ${service} service`})
})


module.exports = router
