import React from 'react'
import {DarkTheme} from './DarkTheme'
import {LightTheme} from './LightTheme'
import {CommomTheme} from './CommonTheme'

const Themes = {
  'light': LightTheme,
  'dark': DarkTheme
}

type ThemeProps = { name: 'light' | 'dark' }

const setStyles = (styleMap: {[x: string]: string}) => {
  Object.entries(styleMap).forEach(([property, value]) => {
    document.documentElement.style.setProperty(property, value)
  });
}

export const ApplyTheme: React.FunctionComponent<ThemeProps> = (props) => {

  React.useEffect(() => {
    setStyles(CommomTheme)
  }, [])

  const theme = Themes[props.name]
  setStyles(theme)

  return <div className={props.name + " theme"}></div>
};