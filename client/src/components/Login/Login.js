import React from 'react';
import { Typography,Button,Grid,Input} from '@material-ui/core';
import './Login.css';


const Login = () => {
    return(
          <div className="Login"> 
            < Grid container>
                <Grid item  xs={12} className="login-form" > 
                    <Grid >
                        <Typography className="login_about_header" variant="h5">
                            EVERYTHING IN ONE PLACE
                        </Typography>
                    </Grid>
                    <Grid>
                        <Typography className="login_about_title" variant="h5">
                            The One Stop Pharmacy
                        </Typography>
                        <Typography className="login_about_title" variant="h5">
                        Subscribe For Deals & Updates
                        </Typography>
                    </Grid>
                        <Grid container>
                            <Grid item className="align_item" xs={12}>
                                <Grid container className=" align_item button-fix">
                                    <Grid item  className="email-radius" xs={8} >
                                        <Input  placeholder="Email" className="login_footer_button btn_email" variant="outlined"  disableUnderline={true} fullWidth/>
                                    </Grid>
                                    <Grid item  className="email-radius" xs={8}>
                                        <Input  placeholder="Password" className="login_footer_button btn_email" variant="outlined"  disableUnderline={true} fullWidth/>
                                    </Grid>
                                    <Grid item xs={8}>
                                    <a href="/login" className="email-forgot">Forgot your password?</a>
                                    </Grid>
                                    <Grid item xs={8} className="align_item login-button">
                                        <Button variant="contained" color="primary" className="login_footer_button btn_login" fullWidth>Login</Button>
                                    </Grid>
                                </Grid>                                
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
        </div>
    );
};

export default Login;