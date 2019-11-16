import { FetchServiceProps } from '../Types/Fetch'
import { MockRouter } from '../Mocks'

const splitEndpointQueryParams = (url: string): { endpoint: string, queryParams: string } => {
  if (url.indexOf('?') === -1) return { endpoint: url, queryParams: '' }
  const [endpoint, queryParams] = url.split('?')
  return { endpoint, queryParams }
}

const parseValue = (value: string) => {
  if (!value) return true
  if (value.indexOf(',') > -1) return value.split(',').map(decodeURIComponent)
  return decodeURIComponent(value)
}

const getQueryParamsObject = (queryParamsString: string) => {
  if (!queryParamsString) return {}
  return queryParamsString
    .split('&')
    .reduce((object: any, current) => {
      const [key, value] = current.split('=')
      object[key] = parseValue(value)
      return object
    }, {})
}

export const mockRouterService = <T>(fetchArguments: FetchServiceProps, auth = false) => {
  const unauthorizedResponse = new Response(
    JSON.stringify({ response: 'unauthorizedResponse' }),
    { status: 500 } as ResponseInit
  )
  if (auth && !fetchArguments.token) return Promise.resolve(unauthorizedResponse)

  const { endpoint, queryParams } = splitEndpointQueryParams(fetchArguments.endpoint)
  const queryParamsObject = getQueryParamsObject(queryParams)
  const mock = (MockRouter as any)[endpoint]
    ? (MockRouter as any)[endpoint]
    : (() => { console.warn(endpoint); return '' })
  const [data, init] = mock(queryParamsObject, fetchArguments)
  const response = new Response(
    JSON.stringify(data),
    init || {
      status: 200,
      statusText: 'OK',
      headers: { 'Content-Type': 'application/json' }
    } as ResponseInit)
  return Promise.resolve(response)
}
