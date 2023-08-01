import { apierror } from 'api/gen/protobuf_generated'

export default function randomErrorOrNull(): apierror.APIError | null {
  const random = Math.random()
  if (random < 0.2) {
    return randomError()
  }
  return null
}

export function randomError(): apierror.APIError {
  const rounded = Math.round(Math.random() * 10) / 10
  switch (rounded) {
    case 0.1:
      return {
        message: 'A random error occurred',
        code: 'RANDOM_ERROR',
      }
    case 0.2:
      return {
        message: 'Internal server error occurred',
        code: 'INTERNAL_SERVER_ERROR',
      }
    default:
      return {
        message: 'A default random error occurred',
        code: 'DEFAULT_RANDOM_ERROR',
      }
  }
}
