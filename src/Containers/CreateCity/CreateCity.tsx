import React from 'react'
import { View } from '../../Components/View/View'
import { Upload } from '../../Components/Upload/Upload'
import Button from '@material-ui/core/Button'
import Texfield from '@material-ui/core/TextField'
import CloudUploadIcon from '@material-ui/icons/CloudUpload'

type FormInputs = {
  'cityName': string
  'cityDescription': string
  'cityPicture': any,
  'cityPictureName': string
}

export const CreateCityContainer: React.FC = () => {

  const defaultInputs: FormInputs = {
    'cityName': '',
    'cityDescription': '',
    'cityPicture': null,
    'cityPictureName': ''
  }
  const [inputs, setInputs] = React.useState(defaultInputs)


  const handleChange = (field: keyof FormInputs) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value
    setInputs({...inputs, [field]: value})
  }

  return (
    <View>
      <form action="" style={{padding: '5px 20px'}}>
        <Texfield
          id="city-name"
          label="City Name"
          value={inputs.cityName}
          onChange={handleChange('cityName')}
          margin="normal"
          fullWidth
        ></Texfield>

        <Texfield
          id="city-description"
          label="City Description"
          value={inputs.cityDescription}
          onChange={handleChange('cityDescription')}
          margin="normal"
          fullWidth
        ></Texfield>

        <Upload label="Upload Picture" value={inputs.cityPicture} onChange={handleChange('cityPictureName')}/>

        <Button variant="contained" color="secondary" style={{marginTop: '20px'}}>Create</Button>

      </form>
      

    </View>
  )
}