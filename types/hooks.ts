import { apierror } from '@/api/gen/protobuf_generated'

type APIReturnType<DataType = unknown> = {
  data: DataType | null
  isLoading: boolean
  errors: apierror.APIError[] | null
}
export type HooksReturnType<DataType> = () => APIReturnType<DataType>
