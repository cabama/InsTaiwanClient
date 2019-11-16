import { IMockService } from '../Types/Fetch'

export const loginMock: IMockService = (_, fetchProps) => {
  return [{ token: 'holisoyeltoken' }]
}
