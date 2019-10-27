import React from 'react';
import { ApplyTheme } from './Components/Theme/Theme'
import { FoodsContainer } from './Containers/FoodsContainer/FoodsContainer'
import { default as ThemeProvider } from '@material-ui/styles/ThemeProvider'
import { MuiTheme } from './Components/Theme/MuiTheme'
import { RouterApp } from './Router'


const App: React.FC = () => {
  return (
    <div className="App" style={{width: '100%', height: '100%'}}>
      <ApplyTheme name={'dark'}/>
      <ThemeProvider theme={MuiTheme}>
        <RouterApp />
      </ThemeProvider>
    </div>
  );
}

export default App;
