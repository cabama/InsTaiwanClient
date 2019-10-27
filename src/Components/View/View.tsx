
import React from 'react'
import {Drawer} from '../Drawer/Drawer'
import {AppBar} from '../Bar/Bar'
import style from './View.module.css'
import { useTheme } from '@material-ui/core'

type ViewProps = {

}

export const View: React.FC<ViewProps> = (props) => {
  const [drawerState, setDrawerState] = React.useState(false)
  const theme = useTheme()

  return (
    <div className={style.container} style={{ backgroundColor: theme.palette.background.paper }}>
      <AppBar drawerState={drawerState} setDrawerState={(value) => setDrawerState(value)}/>
      <Drawer state={drawerState} setState={setDrawerState}/>
      <div className={style.children} style={{backgroundColor: theme.palette.background.paper}}>
        {props.children}
      </div>
    </div>
  )
}