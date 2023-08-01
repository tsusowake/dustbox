import express from 'express'
import bodyParser from 'body-parser'
import { setupAPI } from './api/index'
import cors from 'cors'

function setupServer(): express.Express {
  const app = express()
  const port = 4000
  app.set('port', process.env.PORT || port)
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: true }))

  const allowList = ['http://localhost:3000']
  app.use(
    cors({
      origin: allowList,
      methods: ['GET', 'POST', 'PUT', 'DELETE'],
      allowedHeaders: ['Origin', 'Authorization', 'Accept', 'Content-Type'],
      credentials: true,
    }),
  )

  setupAPI(app)
  return app
}

async function startServer() {
  const app = setupServer()
  app.listen(app.get('port'), () => {
    console.log('server is running at http://localhost:%d', app.get('port'))
  })
}

startServer()
