import React from 'react'
import { User } from '../Types/User'
import { fetchAuthService } from '../Services/FetchService'

type IUserProvider = {
  value: User,
  setUser: (user: Partial<User>) => void
  setToken: (token: string) => Promise<User>
}

let defaultUser: User = {
  name: '',
  surname: '',
  token: '',
  email: '',
  avatarUrl: ''
}

class UserService {
  private user = defaultUser
  public get userValue () {
    return this.user
  }
  public setToken = async (token: string) => {
    this.user.token = token
    const user = await fetchAuthService<User>({endpoint: '/users/me'}, this.user)
    debugger
    this.user = {...user.json, token: this.user.token}
    return this.user
  }
  public setUser = (user: User) => {
    this.user = {...this.user, ...user}
  }
}

export const UserContext = React.createContext<IUserProvider>({
  value: defaultUser,
  setToken: (token) => Promise.resolve<User>(defaultUser),
  setUser: (cosa) => null
})

export const UserProvider: React.FC = props => {
  const userService = new UserService()
  return (
  <UserContext.Provider value={{
    value: userService.userValue,
    setToken: userService.setToken,
    setUser: userService.setUser
  } as IUserProvider}>
    {props.children}
  </UserContext.Provider>
  )
}