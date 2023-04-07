import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useLocation  } from 'react-router-dom'
import { UserContext } from '../index';
import { useContext } from 'react'


export default function Navbar(){
    let location = useLocation()
    const { credentials, updateCredentials } = useContext(UserContext);

    return (
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
              <Typography style={styles.homeButton} variant="h6" component="div">
                <a href="/" style={styles.homeButtonText}> A Do Mi </a>
              </Typography>
              <div style={styles.rightButtonsDiv}>
                <Button style={styles.navButton} color="inherit" href={location.pathname == '/' ? "#why-join-us" : "/#why-join-us"}>Pourquoi A Do Mi ?</Button>
                <Button style={styles.navButton} color="inherit" href="contact">Nous contacter</Button>
                <Button style={styles.navButton} 
                        color="inherit"
                        href={ credentials?.id ? '/account' : '/account' }>
                        { credentials?.id ? 'Compte' : 'Se connecter' } 
                </Button>
                <Button style={styles.navButton} 
                        color="inherit"
                        href='/calendar'>
                        Calendrier 
                </Button>
              </div>
            </Toolbar>
          </AppBar>
        </Box>
    )
}

const styles = {
    homeButton:  {
      paddingInlineStart: 15,
      fontSize: 25,
    },
    homeButtonText: {
      color:"white", 
      textDecoration: "none"
    },
    navButton: {
      marginInline: 11
    },
    rightButtonsDiv: {
      flex: 1, 
      display: 'flex', 
      justifyContent: 'end',
      paddingRight: 15
    }
}