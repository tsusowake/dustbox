import { Router } from 'express'
import { APISetUpper } from '.'
import data from '../mock/image.json'
import { randomWait } from '../util/random_wait'
import { image } from './gen/protobuf_generated'

export default class ImageAPI implements APISetUpper {
  private router: Router

  constructor(r: Router) {
    this.router = r
  }

  setup(): void {
    this.router.get('/images', async (req, res) => {
      const bunchoes = await images()
      res.send(image.ListResponse.encode({ images: bunchoes }))
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
