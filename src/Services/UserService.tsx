import React from 'react'
import { User } from '../Types/User'
import { fetchAuthService } from '../Services/FetchService'

type IUserProvider = {
  value: User,
  logged: boolean
  setUser: (user: Partial<User>) => Promise<User>
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
  private logged = false
  public get userValue () {
    return this.user
  }
  public get loggedValue () {
    debugger
    return this.logged
  }
  public setToken = async (token: string) => {
    this.user.token = token
    const user = await fetchAuthService<User>({endpoint: '/users/me'}, this.user)
    this.user = {...user.json, token: this.user.token}
    this.logged = true
    return this.user
  }
  public setUser = (user: Partial<User>) => {
    this.user = {...this.user, ...user}
    return this.user
  }
}

export const UserContext = React.createContext<IUserProvider>({
  value: defaultUser,
  logged: false,
  setToken: (token) => Promise.resolve<User>(defaultUser),
  setUser: (cosa) => Promise.resolve<User>(defaultUser)
})

export const UserProvider: React.FC = props => {
  const userService = new UserService()
  const [logged, setLogged] = React.useState(false)
  const [value, setValue] = React.useState(defaultUser)
  return (
  <UserContext.Provider value={{
    logged,
    value: value,
    setToken: async (token: string) => {
      const user = await userService.setToken(token)
      setLogged(true)
      setValue(user)
      return user
    },
    setUser: async (user: Partial<User>) => {
      const userModified = await userService.setUser(user)
      setValue(userModified)
      return userModified
    }
  } as IUserProvider}>
    {props.children}
  </UserContext.Provider>
  )
}