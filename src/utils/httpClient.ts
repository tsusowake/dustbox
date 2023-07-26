import { apierror } from '@/api/gen/protobuf_generated'

const baseUrl = 'http://localhost:4000'
const defaultHeaders = {}

type Method = 'GET' | 'POST' | 'PUT' | 'DELETE'

export async function get(path: string, params?: URLSearchParams, headers?: Headers): Promise<ArrayBuffer> {
  const url = new URL(baseUrl)
  url.pathname = path
  if (params) {
    url.search = params.toString()
  }
  const _headers = headers
    ? {
        ...defaultHeaders,
        ...headers,
      }
    : defaultHeaders
  return request(url.toString(), 'GET', new Headers(_headers))
}

// TODO post, put, delete

// TODO input types to RequestInfo?
export async function request<T extends BodyInit>(
  url: string,
  method: Method,
  headers: Headers,
  body?: T,
): Promise<ArrayBuffer> {
  const req = new Request(url, {
    headers: headers,
    credentials: 'include',
    method: method,
    body: body,
  })
  const res = await fetch(req)
  handleError(res)
  return res.arrayBuffer()
}

export class HttpError extends Error {
  status: number | null = null
  apiError: apierror.APIError | null = null

  constructor(message: string) {
    super(message)
  }
}

async function handleError(res: Response) {
  const { ok, status } = res
  if (!ok) {
    const error = new HttpError(`HTTP error: ${res.statusText || res.status}`)
    if (status >= 400 && status <= 499) {
      const errBuf = await res.arrayBuffer()
      error.apiError = apierror.APIError.decode(new Uint8Array(errBuf))
    }
    error.status = status
    throw error
  }

  if (status >= 200 && status <= 299) {
    return
  }

  const error = new HttpError(`Unknown error: ${res.statusText || res.status}`)
  error.status = res.status
  throw error
}
