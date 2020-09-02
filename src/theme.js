import {createMuiTheme} from '@material-ui/core/styles';

export const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#8d109e'
        },
        secondary:{
            main:'#b88e80'
        }
      },

    overrides: {
        MuiCard:{
            root:{
                // direction:'rtl',
                borderRadius:'10px 10px 10px 10px',
                background:'linear-gradient(to right, #f7c2fdd8 , #ffe3f6de )',
                
            }
        },
        MuiButton: {
            root:{
                height:40,
                // background:'#85858565'
                background:'#b88e8060 ',
                boxShadow:'2px 3px 4px #00000027',
                
            },
            text: {
                borderRadius: '10px 25px 5px 18px',
                border: 0,
                color: '#505050',
                height: 33,
                padding: '0 30px',
                marginBottom:8,
                marginTop:8,
                paddingLeft:10,
                paddingRight:0,
            }
        },
        MuiButtonBase:{
            root:{
                paddingLeft:0,
                paddingRight:0,
            }
        },
        MuiTextField:{
            root:{
                height:'55px',
                borderRadius: '20px 35px ',
                outline:'none',
                border:'2 solid white'
                
            },
        },
        MuiOutlinedInput:{
            root:{
                borderRadius: '20px 35px ',
            },
        },
        MuiAccordion:{
            root:{
                marginRight:'30px',
                background:'linear-gradient(to right, #cae3df , #74c0b9 )',
                borderRadius:'20px 16px 10px 50px'
            },
            MuiAccordionDetails:{
                root:{
                    borderRadius:'20px 16px 10px 50px'
                }
            }
            
        },
        MuiCheckbox:{
            root:{
                borderRadius:'30px'
            }
        },
        MuiListItemIcon:{
            root:{
                width:'20px',
                margin:0,
            }
        }
        
        

    },
    typography: {
        fontFamily: [
            //   '-apple-system',   'BlinkMacSystemFont',   '"Segoe UI"',
            'Yekan',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            //   '"Apple Color Emoji"',   '"Segoe UI Emoji"',   '"Segoe UI Symbol"',
        ].join(',')
    }
});