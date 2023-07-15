type APIReturnType<DataType = unknown> = {
  data: DataType | null
  isLoading: boolean
  errors: Error[] | null
}
export type HooksReturnType<DataType> = () => APIReturnType<DataType>
