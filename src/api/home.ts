import { Fetcher } from 'swr'
import { homecontent, image } from './gen/protobuf_generated'

export const fetchHomeContents: Fetcher<homecontent.HomeContentResponse, string> = async (id) => {
  const res = await fetch('http://localhost:4000/home/contents', {
    credentials: 'include',
    method: 'GET',
  })
  if (!res.ok) {
    throw new Error('NetworkError')
  }
  const data = await res.arrayBuffer()
  const r = homecontent.HomeContentResponse.decode(new Uint8Array(data))
  return r
}
