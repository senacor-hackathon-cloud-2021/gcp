const bunyan = require("bunyan")

const logLevel = process.env.APP_LOG_LEVEL || "info"
const logSrc = process.env.APP_LOG_SRC || false

const logger = (name) => {
  const log = bunyan.createLogger({ name, level: logLevel, src: logSrc })
  return log
}

module.exports = logger
