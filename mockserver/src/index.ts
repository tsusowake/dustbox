import express from 'express'
import bodyParser from 'body-parser'
import { setupAPI } from './api/index'
import cors from 'cors'

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

const server = app.listen(app.get('port'), () => {
  console.log('server is running at http://localhost:%d', app.get('port'))
})

const stopServer = async (): Promise<void> => {
  await server.close()
}

process
  .on('SIGTERM', async () => {
    process.exitCode = 1
    await stopServer()
  })
  .on('SIGINT', async () => {
    process.exitCode = 1
    await stopServer()
  })
  .on('uncaughtException', async (err: Error) => {
    console.error('error occured: ', err)
  })

export default server
