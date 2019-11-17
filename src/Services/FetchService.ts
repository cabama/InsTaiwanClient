import { FetchServiceProps, IApiResponse } from '../Types/Fetch'
import { mockRouterService } from './MockService'
import { User } from '../Types/User'

const baseUrl = 'https://taiwan.reshuhormiguero.club/api'

type CustomFetch = <T>(arg: FetchServiceProps) => Promise<IApiResponse<T>>

type QueryParamsObject = {
  [x: string]: any
}

export const buildQueryParams = (queryParams: QueryParamsObject): string => {
  const paramsChar = Object.keys(queryParams)
    .map(key => `${key}=${String(queryParams[key])}`)
    .join('&')
  return `?${paramsChar}`
}

const customFetch: CustomFetch = <T>(fetchArguments: FetchServiceProps, auth: boolean = false) => {
  const base = fetchArguments.baseUrl ? fetchArguments.baseUrl : baseUrl
  if (fetchArguments.queryParams) {
    fetchArguments.endpoint += buildQueryParams(fetchArguments.queryParams)
  }
  const url = base + '/' + fetchArguments.endpoint
  console.error('mock mode', process.env.REACT_APP_MOCK_MODE)
  return fetchArguments.mock || process.env.REACT_APP_MOCK_MODE === 'TRUE'
    ? mockRouterService<T>(fetchArguments, auth) as Promise<IApiResponse<T>>
    : fetchArguments.init
      ? fetch(url, fetchArguments.init) as Promise<IApiResponse<T>>
      : fetch(url) as Promise<IApiResponse<T>>
}

export const fetchService = async <T>(argi: FetchServiceProps) => {
  return customFetch<T>(argi)
    .then(async (response) => {
      const json = await response.json()
      console.log('FETCH')
      console.dir({
        Request: argi,
        Response: response,
        Json: json
      })
      return { response, json }
    })
}

export const fetchAuthService = async <T>(argi: FetchServiceProps, user: User) => {

  const {token} = user
  const headers = { ...(argi.init && argi.init.headers), Authorization: `JWT ${token}` }
  argi.init = {...argi.init, headers}

  return customFetch<T>(argi)
    .then(async (response) => {
      const json = await response.json()
      console.log('FETCH')
      console.dir({
        Request: argi,
        Response: response,
        Json: json
      })
      return { response, json }
    })
}