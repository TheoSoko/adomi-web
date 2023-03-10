import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

//import {useNavigate} from 'react-router-dom';


export default function Navbar(){
  //const navigate = useNavigate();

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
              A Do Mi
            </Typography>            
            <Button style={styles.navButton} color="inherit">Pourquoi A Do Mi ?</Button>
            <Button style={styles.navButton} color="inherit">Nous contacter</Button>
            <Button style={styles.navButton} color="inherit" href="sign-in">Espace client</Button>
          </Toolbar>
        </AppBar>
      </Box>
    )
}

const styles = {
    homeButton:  {
      marginInlineStart: -760,
      fontSize: 25,
    },
    navButton: {
      marginInline: 11
    }
}