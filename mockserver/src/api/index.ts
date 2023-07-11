import { Express, Router } from 'express'
import HomeAPI from './home'
import ImageAPI from './image'

export interface APISetUpper {
  setup(): void
}

export const setupAPI = (e: Express) => {
  const r = Router()
  const homeAPI = new HomeAPI(r)
  const imageAPI = new ImageAPI(r)

  homeAPI.setup()
  imageAPI.setup()
  e.use(r)
}

export default setupAPI