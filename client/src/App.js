import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import useStyles from './styles';
  

const App = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl); 

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));
  console.log(matches);
  return (
    <div className={classes.root}>
      
      <AppBar position="static"  className={classes.customizeAppbar}>
        <Container>
        <Toolbar className={classes.customizeToolbar}>
          <Typography variant="h5" className={classes.title}>
            Pharmacy Services
          </Typography>
            {matches && <div>
             <IconButton
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
              >
                < ShoppingCartIcon />
              </IconButton>
              <IconButton
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <MenuIcon fontSize="large" className={classes.customMenuButton}/>
              </IconButton>
              <Menu
                className={classes.customMenu}
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Shop</MenuItem>
                <MenuItem onClick={handleClose}>Home</MenuItem>
                <MenuItem onClick={handleClose}>Contact Us</MenuItem>
                <MenuItem onClick={handleClose}>About</MenuItem>
              </Menu>
            </div>
         }
         {!matches && 
            <div className={classes.AppbarButtons}>
                <Button size="large" color="inherit">Shop</Button>
                <Button size="large" color="inherit">Home</Button>
                <Button size="large" color="inherit">Contact Us</Button>
                <Button size="large" color="inherit">About</Button>
                <IconButton
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
              >
                < ShoppingCartIcon/>
              </IconButton>
            </div>
         }
        </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

export default App;