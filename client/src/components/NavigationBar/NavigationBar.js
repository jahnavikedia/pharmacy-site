import React from 'react';
import {Link,withRouter} from 'react-router-dom';

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
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import useStyles from './styles';
import './NavigationBar.css';

const NavigationBar = () => {
    const classes = useStyles();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));
    const trigger = useScrollTrigger();
    
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl); 

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    
    return(
        <div className={classes.root}>
            <AppBar position="fixed" color="inherit"  className={classes.customizeAppbar}
                  elevation={trigger ? 24 : 0}
                  style={{
                    minHeight: trigger ? "75px" : "90px",
                  }}
            >
            <Container>
                <Toolbar  className={classes.customizeToolbar}
                    elevation={trigger ? 24 : 0}
                    style={{
                      marginTop: trigger ? "0px" : "15px",
                    }}
                >
                <Typography  variant="h5" component={Link} to="/" className={classes.title}>
                    Pharmacy Shop
                </Typography>
                {matches && 
                <div>
                    <IconButton component={Link} to="/cart" aria-controls="menu-appbar" aria-haspopup="true"  color="inherit">
                        < ShoppingCartIcon />
                    </IconButton>
                    <IconButton aria-controls="menu-appbar" aria-haspopup="true" onClick={handleMenu} color="inherit">
                        <MenuIcon fontSize="large" className={classes.customMenuButton}/>
                    </IconButton>
                    <Menu className="customMenu" id="menu-appbar"
                        anchorEl={anchorEl} 
                        anchorOrigin={{
                            vertical: 'top', horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={open} onClose={handleClose} 
                        >
                            <MenuItem component={Link} to="/login" onClick={handleClose}>Login</MenuItem>
                            <MenuItem component={Link} to="/admin" onClick={handleClose}>Admin</MenuItem>
                            <MenuItem component={Link} exact to="/" onClick={handleClose}>Home</MenuItem>
                            <MenuItem component={Link} to="/contactus" onClick={handleClose}>Contact Us</MenuItem>
                            <MenuItem component={Link} to="/aboutus" onClick={handleClose}>About</MenuItem>
                            <MenuItem component={Link} to="/products" onClick={handleClose}>Products</MenuItem>
                    </Menu>
                </div>
                }
                {!matches && 
                    <div className={classes.AppbarButtons}>
                        <Button component={Link} to="/login" size="large" color="inherit">Login</Button>
                        <Button component={Link} to="/admin" size="large" color="inherit" >Admin</Button>
                        <Button component={Link} exact to="/" size="large" color="inherit">Home</Button>
                        <Button component={Link} to="/contactus" size="large" color="inherit" >Contact Us</Button>
                        <Button component={Link} to="/aboutus" size="large" color="inherit">About</Button>
                        <Button component={Link} to="/products" size="large" color="inherit">Products</Button>
                        <IconButton component={Link} to="/cart" aria-controls="menu-appbar" aria-haspopup="true" color="inherit">
                            < ShoppingCartIcon/>
                        </IconButton>
                        
                    </div>
                }
                </Toolbar>
            </Container>
      </AppBar>
    </div>
    );
};

export default withRouter(NavigationBar);