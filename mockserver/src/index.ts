// 
import express from 'express'
import bodyParser from 'body-parser'
import { setupAPI } from './api/index'

const app = express()
app.set('port', process.env.PORT || 4000)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

console.log('setupAPI: ', setupAPI)
setupAPI(app)

const server = app.listen(app.get('port'), () => {
  console.log('server is running at http:localhost:%d', app.get('port'))
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
