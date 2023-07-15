import { Fetcher } from 'swr'
import { image } from './gen/protobuf_generated'

export const fetchImages: Fetcher<image.ListResponse, string> = async (id) => {
  const res = await fetch('http://localhost:4000/images', {
    credentials: 'include',
    method: 'GET',
  })
  if (!res.ok) {
    throw new Error('NetworkError')
  }
  const data = await res.arrayBuffer()
  const r = image.ListResponse.decode(new Uint8Array(data))
  return r
}
