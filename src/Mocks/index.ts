import { loginMock } from './login'
import { userMock } from './user'

export const MockRouter = {
  '/login': loginMock,
  '/users/me': userMock
}
