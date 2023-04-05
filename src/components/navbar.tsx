import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useLocation, useNavigate } from 'react-router-dom';




export default function Navbar(){
  const location = useLocation()
  const navigate = useNavigate()


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
              <Typography style={styles.homeButton} variant="h6" component="div" sx={{ flexGrow: 1 }}>
                <a href="home" style={{color:"white", textDecoration: "none"}}> A Do Mi </a>        
              </Typography>    
            <Button style={styles.navButton} color="inherit" href={location.pathname == '/home' ? "#why-join-us" : "/home#why-join-us"}>Pourquoi A Do Mi ?</Button>
            <Button style={styles.navButton} color="inherit" href="/contact_test">Nous contacter</Button>
            <Button style={styles.navButton} color="inherit" href='/client'>Espace client</Button>
          </Toolbar>
        </AppBar>
      </Box>
    )
}

const styles = {
    homeButton:  {
      // marginInlineStart: -785,
      fontSize: 25,
    },
    navButton: {
      marginInline: 11
    }
}