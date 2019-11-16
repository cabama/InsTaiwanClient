import React from 'react';
import { ApplyTheme } from './Components/Theme/Theme'
import { default as ThemeProvider } from '@material-ui/styles/ThemeProvider'
import { MuiTheme } from './Components/Theme/MuiTheme'
import { RouterApp } from './Router'
import { UserProvider } from './Services/UserService'


const App: React.FC = () => {
  return (
    <div className="App" style={{width: '100%', height: '100%'}}>
      <ApplyTheme name={'dark'}/>
      <UserProvider>
        <ThemeProvider theme={MuiTheme}>
          <RouterApp />
        </ThemeProvider>        
      </UserProvider>
    </div>
  );
}

export default App;
