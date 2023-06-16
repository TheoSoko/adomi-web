import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Drawer, Link, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useEffect, useState } from "react";
import { useLocation, Link as RouterLink } from 'react-router-dom'
import { UserContext } from '../index';
import { useContext } from 'react';
import { signOutTest } from '../api/http';




export default function Navbar(){

  let location = useLocation()

  const { credentials, updateCredentials } = useContext(UserContext);

    const headersData = [
    {
      href: "/",
      label:"Accueil"
    },

    {
      href: location.pathname == '/' ? "#why-join-us" : "/#why-join-us",
      label: "Pourquoi Adomi ?"
    },

    {
      href:"/contact",
      label:"Nous contacter"
    },

    {
      href: credentials?.id ? '/account' : '/sign-in',
      label: credentials?.id ? 'Compte' : 'Se connecter' 
    }
  ]

  const [state, setState] = useState({mobileView:false, drawerOpen:false});

  //On récupère la prop mobileView dans une const
  const {mobileView, drawerOpen} = state;

  useEffect(()=>{

    const setResponsiveness = ()=>{
      return window.innerWidth < 900 ?
      setState((prevState)=> ({...prevState, mobileView: true})) :
      setState((prevState)=>({...prevState, mobileView: false}))
    }

    setResponsiveness();
    window.addEventListener("resize", ()=> setResponsiveness());

  }, []);



    const displayMobile = ()=>{

      const handleDrawerOpen = ()=>{

        setState((prevState)=>({...prevState, drawerOpen : true}));

      }

      const handleDrawerClose = () =>{

        setState((prevState) => ({ ...prevState, drawerOpen: false }));
    
      }

      const getDrawerChoices = () => {
        return headersData.map(({ label, href }) => {
          return (
            <Link
              {...{
                component: RouterLink,
                to: href,
                color: "inherit",
                style: { textDecoration: "none" },
                key: label,
              }}
            >
              <MenuItem>{label}</MenuItem>
            </Link>
          );
        });
      }

      return(

        <Toolbar style={styles.navbarContainerMobile}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick= {handleDrawerOpen}
            aria-haspopup = "true"
          >
            <MenuIcon />
          </IconButton>

          <Drawer
            anchor="left"
            open={drawerOpen}
            onClose= {handleDrawerClose}
          >
            <div>
              
              {getDrawerChoices()}
              
              <Link
                href="#"
                style={ credentials?.id ? styles.sideNavButton : {display: 'none'}} 
                color="inherit"
                onClick={signOutTest}
              >
                Déconnexion
              </Link>
            
            </div>
          </Drawer>

          <Typography style={styles.homeButton} variant="h6" component="div">
            <a href="/" style={styles.homeButtonTextMobile}> A Do Mi </a>
          </Typography>

        </Toolbar>

      )
    }

    const displayDesktop = ()=>{

      return(

        <Toolbar>
          <Typography style={styles.homeButton} variant="h6" component="div">
            <a href="/" style={styles.homeButtonText}> A Do Mi </a>
          </Typography>
          <div style={styles.rightButtonsDiv}>
            <Button style={styles.navButton} color="inherit" href={location.pathname == '/' ? "#why-join-us" : "/#why-join-us"}>Pourquoi A Do Mi ?</Button>
            <Button style={styles.navButton} color="inherit" href="contact">Nous contacter</Button>
            <Button style={styles.navButton} 
                    color="inherit"
                    href={ credentials?.id ? '/account' : '/sign-in' }>
                    { credentials?.id ? 'Compte' : 'Se connecter' } 
            </Button>

            <Button
              style={ credentials?.id ? styles.navButton : {display: 'none'}} 
              color="inherit"
              onClick={signOutTest}
            >Déconnexion
            </Button>

          </div>
        </Toolbar>
      )

    }

    return (
        <Box sx={{ flexGrow: 1 }}>

          <AppBar position="fixed">
            {mobileView? displayMobile() : displayDesktop()}
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
      textDecoration: "none",
    },
    navButton: {
      marginInline: 11,
      textDecoration: 'none',
    },
    sideNavButton: {
      textDecoration: "none", 
      display:'inline-block', 
      paddingLeft: "1rem", 
      marginTop:'0.3rem'

    },
    rightButtonsDiv: {
      flex: 1, 
      display: 'flex', 
      justifyContent: 'end',
      paddingRight: 15
    },
    navbarContainerMobile:{
      display: "flex",
      justifyContent: "center"
    },
    homeButtonTextMobile:{
      fontSize: "2.4rem",
      color:"white", 
      textDecoration: "none",
    },
    drawerStyle:{
      backgroundColor: 'blue'
    }

}