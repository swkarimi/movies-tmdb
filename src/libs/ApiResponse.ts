export class ApiResponse<T> {
  constructor(
    public success: boolean,
    public data: T | null = null,
    public error: string | null = null
  ) {}

  static success<T>(data: T): ApiResponse<T> {
    return new ApiResponse<T>(true, data, null)
  }

  static error<T>(error: string): ApiResponse<T> {
    return new ApiResponse<T>(false, null as T | null, error)
  }
}
