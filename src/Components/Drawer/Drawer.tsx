import React from 'react'
import { default as MaterialDrawer} from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import style from './Drawer.module.css'
import { CommonList } from './CommonList'
import { AdminList } from './AdminList'
import { Link } from 'react-router-dom'
import { useTheme, Typography } from '@material-ui/core'
import { useHistory } from 'react-router-dom'

type BarListProps = {
  onClose: Function
}

const BarList: React.FunctionComponent<BarListProps> = (props) => {
  const location = useHistory().location
  const theme = useTheme()
  const primaryText = theme.palette.text.primary
  const secondaryText = theme.palette.text.secondary
  console.log('location', location)
  return (
    <div
      role="presentation"
      onClick={() => props.onClose()}
      onKeyDown={() => props.onClose()}
    >
      <List>
        { CommonList.map((element, index) => {
          const match = element.path.startsWith(location.pathname)
          const color = match ? primaryText : secondaryText
          return (
            <ListItem button key={index}>
              <ListItemIcon style={{ color }}>{element.icon}</ListItemIcon>
              <Link to={element.path}>
                <Typography style={{ color }}>{element.title}</Typography>
              </Link>
            </ListItem>
          )}
        )}
      </List>
      <Divider />
      <List>
        { AdminList.map((element, index) => (
          <ListItem button key={index}>
            <ListItemIcon>{element.icon}</ListItemIcon>
            <ListItemText primary={element.title} />
          </ListItem>
        ))}
      </List>
    </div>
  )
}

type DrawerProps = {
  state: boolean,
  setState: (state: boolean) => void
}

export const Drawer: React.FunctionComponent<DrawerProps> = (props) => {

  return (
    <MaterialDrawer open={props.state} onClose={() => props.setState(false)}>
      <BarList onClose={() => props.setState(false)}/>
    </MaterialDrawer>
  )
}

