import React from 'react'
import { View } from '../../Components/View/View'
import Button from '@material-ui/core/Button'
import Texfield from '@material-ui/core/TextField'

import { fetchService } from '../../Services/FetchService'
import { UserContext } from '../../Services/UserService'


type FormInputs = {
  'email': string
  'password': string
}


export const LoginContainer: React.FC = () => {

  const defaultInputs: FormInputs = {
    'email': '',
    'password': '',
  }
  const user = React.useContext(UserContext)
  const [inputs, setInputs] = React.useState(defaultInputs)

  const login = async (inputs: FormInputs): Promise<void> => {
    const formData = new FormData()
    formData.append('email', inputs.email)
    formData.append('password', inputs.password)
    const init: RequestInit = {
      method: 'POST',
      body: formData
    }
    fetchService<{ token: string }>({ endpoint: 'users/loginEmail', init })
      .then(response => {
        console.log('First user', user.value)
        if (response.json.token) return response.json.token
        else throw new Error('No token in the response')
      })
      .then(token => {
        user.setToken(token)
        console.log('new user con token', user.value)
      })
      .catch(error => console.error('No token', error))
  } 

  const handleChange = (field: keyof FormInputs) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value
    setInputs({...inputs, [field]: value})
  }

  return (
    <View>
      <form action="" style={{padding: '5px 20px'}}>
        <Texfield
          id="email"
          label="Email"
          value={inputs.email}
          onChange={handleChange('email')}
          margin="normal"
          fullWidth
        ></Texfield>

        <Texfield
          id="password"
          label="Password"
          type="password"
          value={inputs.password}
          onChange={handleChange('password')}
          margin="normal"
          fullWidth
        ></Texfield>

        <Button 
          variant="contained"
          color="secondary"
          style={{ marginTop: '20px' }}
          onClick={() => login(inputs)}
        >
          Create
        </Button>


      </form>
      

    </View>
  )
}