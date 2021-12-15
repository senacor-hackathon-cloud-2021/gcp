var express = require("express")
var router = express.Router()

router.get("/", (_, res) => {
  res.status(202).send("Foo")
})

module.exports = router
