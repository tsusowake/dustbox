import { Express, Router } from 'express'
import HomeAPI from './home.js'

export interface SetUpper {
  setup(): void
}

export const setupAPI = (e: Express) => {
  const r = Router()
  const homeAPI = new HomeAPI(r)

  homeAPI.setup()
  e.use(r)
}

export default setupAPI
