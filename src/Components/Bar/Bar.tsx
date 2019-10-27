import React from 'react'
import { default as MaterialAppBar } from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import styles from './Bar.module.css'


type AppBarProps = {
  drawerState: boolean
  setDrawerState: (state: boolean) => void
}

export const AppBar: React.FunctionComponent<AppBarProps> = (props) => {

  return (
    <div className={styles.root}>
      <MaterialAppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={styles.menuButton} color="inherit" aria-label="menu" onClick={() => props.setDrawerState(!props.drawerState)}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" style={{fontFamily:'Billabong', fontWeight: 'normal', fontSize: '35px'}} className={styles.title}>
            InsTaiwan
          </Typography>
        </Toolbar>
      </MaterialAppBar>
    </div>
  )
}