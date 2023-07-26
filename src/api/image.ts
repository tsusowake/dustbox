import { Fetcher } from 'swr'
import { image } from './gen/protobuf_generated'
import { get } from '@/utils/httpClient'

export const fetchImages: Fetcher<image.ListResponse, string> = async (id) => {
  const res = await get('/images')
  return image.ListResponse.decode(new Uint8Array(res))
}
