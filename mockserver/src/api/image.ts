import { Router } from 'express'
import { APISetUpper } from '.'
import data from '../mock/image.json' assert { type: 'json' }
import { randomWait } from '../util/random_wait.ts'

export default class ImageAPI implements APISetUpper {
  private router: Router

  constructor(r: Router) {
    this.router = r
  }

  setup(): void {
    this.router.get('/images', async (req, res) => {
      const ret = await images()
      res.send(ret)
    })
  }
}

export type BunchoImage = {
  src: string
  alt: string
}

async function images(): Promise<BunchoImage[]> {
  await randomWait(3)
  return data.images
}
