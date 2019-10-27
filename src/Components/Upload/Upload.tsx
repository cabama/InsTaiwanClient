
import React from 'react'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import Texfield from '@material-ui/core/TextField'
import Camera from '@material-ui/icons/Camera'
import styles from './Upload.module.css'
type UploadProps = {
  label: string,
  value: string,
  onChange: any
}

export const Upload: React.FC<UploadProps> = (props) => {
  return (    
    <div className={styles.container}>
      <Texfield
        className={styles.textField}

        id={`upload-${props.label}`}
        label={props.label}
        value={props.value}
        margin="normal"
        fullWidth
      ></Texfield>

      <input
        accept="image/*"
        className={styles.inputFile}
        id="icon-button-photo"
        onChange={props.onChange}
        type="file"
      />
      <label htmlFor="icon-button-photo">
        <Button
          variant="contained"
          component="span"
          startIcon={<Camera />}
          className={styles.uploadButton}
        >Upload</Button>
      </label>

    </div>
  )
}
