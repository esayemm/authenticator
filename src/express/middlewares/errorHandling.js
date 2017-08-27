const logger = require('logger').createLogger(__filename)
import config from 'config'

/*
 * fall back error handler for express server, add to the end of all route
 * definitions so anything that isn't caught will propagate to this handler. Use
 * this at the end of the middleware chain.
 *
 * ex.
 *
 * // apply other stuff to express app
 * app.use(lastErrorHandler)
 */
export default function lastErrorHandler(err, req, res, next) { // eslint-disable-line
  if (config.APP_ENV !== 'test') {
    logger.error(err.message)
  }

  return res.status(500).json({
    message: err.message,
    status : 500,
    stack  : err.stack,
  })
}
