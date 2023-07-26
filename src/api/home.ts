import { Fetcher } from 'swr'
import { homecontent } from './gen/protobuf_generated'
import { get } from '@/utils/httpClient'

export const fetchHomeContents: Fetcher<homecontent.HomeContentResponse, string> = async () => {
  const res = await get('/home/contents')
  return homecontent.HomeContentResponse.decode(new Uint8Array(res))
}
