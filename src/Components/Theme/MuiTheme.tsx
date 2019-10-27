import { createMuiTheme } from '@material-ui/core/styles';

export const MuiTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#282c34',
      light: '#282c34',
      contrastText: '#fff',    
    },
    secondary: {
      main: '#09d3ac'
    },
    text: {
      primary: '#09d3ac',
      secondary: '#fff'
    },
    action: {
      active: '#fff'
    },
    background: {
      default: '#282c34',
      paper: '#282c34',
    },
  },
  
  typography: {
   h1 : {
     color: 'orange',
   }, 
   allVariants: {
     color: '#fff'
   }
  },

  overrides: {

    MuiFormLabel: {
      root:{
        "&.Mui-focused": {
          color: "#09d3ac"
        }
      }
    },
    MuiInputLabel: {
      animated: {
        color: 'white'
      },
    },
    MuiInputBase: {
      input: {
        color: 'white',
        "&:focus": {
          color: '#09d3ac'
        },
      },
      
    },

    MuiInput: {
      underline:{
        color: 'white',
        "&&&&:before": {
          borderBottom: "1px solid white"
        },
        "&&&&:after": {
          borderBottom: "1px solid #09d3ac"
        },
        "&&&&:hover:before": {
          borderBottom: "1px solid #09d3ac"
        }
      }
    }
  }
  
});