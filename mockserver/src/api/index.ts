import { Express, Router } from 'express'
import setupHomeAPI from './home'
import setupImageAPI from './image'

export interface APISetUpper {
  (router: Router): void
}

export const setupAPI = (e: Express) => {
  const r = Router()

  setupHomeAPI(r)
  setupImageAPI(r)
  e.use(r)
}

export default setupAPI
