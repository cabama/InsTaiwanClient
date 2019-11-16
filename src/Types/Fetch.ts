
export type FetchServiceProps = {
  baseUrl?: string
  endpoint: string
  mock?: boolean
  init?: RequestInit
  token?: string
  queryParams?: { [x: string]: any }
}

export interface IApiResponse<T = any> extends Response {
  json<P = T>(): Promise<P>
}

export type IMockService = (
  queryParams: { [x: string]: any },
  fetchProps: FetchServiceProps
) => [any, ResponseInit] | [any]
