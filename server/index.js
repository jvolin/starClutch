const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const path = require('path')
const PORT = process.env.PORT || 1337
const app = express()

const createApp = () => {
  // logging middleware
  app.use(morgan('dev'))

  // body parsing middleWare
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: true }))

  // api routes
  // app.use('/api')

  // static file-serving middleware
  app.use(express.static(path.join(__dirname, '..', 'public')))

  // any remaining requests with an extension (.js, .css, etc.) send 404
  app.use((req, res, next) => {
    if (path.extname(req.path).length) {
      const err = new Error('Not found')
      err.status = 404
      next(err)
    } else {
      next()
    }
  })

  // sends index.html
  app.use('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public/index.html'))
  })

  // error handling endware
  app.use((err, req, res, next) => {
    console.error(err)
    console.error(err.stack)
    res.status(err.status || 500).send(err.message || 'Internal server error.')
  })
}

const startListening = () => {
  // start listening (and create a 'server' object representing our server)
  const server = app.listen(PORT, () => console.log(`Serving it up on port ${PORT}`))
}

if (require.main === module) {
  createApp()
  startListening()
} else {
  createApp()
}

module.exports = app
