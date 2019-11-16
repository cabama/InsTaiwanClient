import { loginMock } from './login'
import { userMock } from './user'

export const MockRouter = {
  '/users/loginEmail': loginMock,
  '/users/me': userMock
}
