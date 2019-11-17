import React from 'react'
import { View } from '../../Components/View/View'
// import { Upload } from '../../Components/Upload/Upload'
// import Button from '@material-ui/core/Button'
import Texfield from '@material-ui/core/TextField'
import { UserContext } from '../../Services/UserService'

export const ProfileContainer: React.FC = () => {

  const user = React.useContext(UserContext).value

  return (
    <View>
      <form action="" style={{padding: '5px 20px'}}>
        <Texfield
          id="user-name"
          label="User Name"
          value={user.name}
          margin="normal"
          fullWidth
        ></Texfield>

        <Texfield
          id="user-surname"
          label="User Surname"
          value={user.surname}
          margin="normal"
          fullWidth
        ></Texfield>

        <Texfield
          id="user-email"
          label="User Email"
          value={user.email}
          margin="normal"
          fullWidth
        ></Texfield>

        {/* <Upload label="Upload Picture" value={inputs.cityPicture} onChange={handleChange('cityPictureName')}/> */}

        {/* <Button variant="contained" color="secondary" style={{marginTop: '20px'}}>Create</Button> */}

      </form>
      

    </View>
  )
}