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
      await randomWait(3)

      res.setHeader('Content-Type', 'application/octet-stream')
      res.send(Buffer.from(images()))
    })
  }
}

function images(): Uint8Array {
  const r = image.ListResponse.create({ images: data.images })
  return image.ListResponse.encode(r).finish()
}
