import express from 'express';
import createError from 'http-errors';
import cookieParser from 'cookie-parser'
import login from './passport/http/login'
import bookmarks from './bookmarks/http/bookmarks'
import indexRouter from './common/http/index'
const logger = require('morgan')
const cors = require('cors')

const app = express()

app.use(logger('dev'))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

// UNPROTECTED ROUTES
app.use(login)

// PROTECTED ROUTES
app.use(indexRouter)
app.use(bookmarks)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.json(err)
})

module.exports = app
