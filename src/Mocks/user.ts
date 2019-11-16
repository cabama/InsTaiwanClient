import { IMockService } from '../Types/Fetch'
import { User } from '../Types/User'

export const userMock: IMockService = (_, fetchProps) => {
  debugger
  return [{ name: 'carlos', surname: 'barreiro', avatarUrl: '', email: 'barreymata@gmail.com' } as Partial<User>]
}
