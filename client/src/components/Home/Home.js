import React,{useEffect} from 'react'
import Grid from '@material-ui/core/Grid';
import { Typography,Button, Container, Icon,Input,createMuiTheme,responsiveFontSizes,MuiThemeProvider } from '@material-ui/core';
import CallIcon from '@material-ui/icons/Call';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import EmailIcon from '@material-ui/icons/Email';
import ScheduleIcon from '@material-ui/icons/Schedule';

import Aos from 'aos';
import 'aos/dist/aos.css'
import './Home.css'

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

const GenerateInfo = ({iconName,header,content}) => (
    <Grid container className="mb_30">
        <Grid item xs={12} display="flex" className="align_item">
            <div data-aos="fade-down" data-aos-easing="linear" className="mb_30">
                <span className="home_footer_icons"><Icon>{iconName}</Icon></span>
            </div>
        </Grid>
        <Grid item xs={12} display="flex" className="mb_20 align_item">
            <Typography variant='h6' className="icon_header">{header}</Typography>
        </Grid>
        <Grid item xs={12} display="flex" className="mb_20 icon_content align_item">
         <Typography variant='h6'>{content}</Typography>
        </Grid>
    </Grid>
)

const Home = () => {

    useEffect(() => {
        Aos.init({
          duration : 400,
          once: true
        });
    }, []);

    return (
        <Grid>
            <Grid className="home_header" item xs={12}>
                <Container className="pl_60 home_header_container">
                    <Grid container>
                        <Typography className='home_header_headline' variant='h6'>FREE SHIPPING & 24/7 PICKUP</Typography>
                    </Grid>
                    <Grid container>
                        <Typography className='home_header_title' variant='h1'>Medicine Shop</Typography>
                    </Grid>
                    <Grid container>
                        <Typography variant='h6' className='home_header_description' >Lorem ipsum dolor sit amet, consectetur adipiscing elit,</Typography>
                    </Grid>
                    <Grid container >
                        <Button variant="contained" color="secondary" className="home_header_button">Buy 2 Get 1 Free - Skin</Button>
                        {/* <a className="home_header_button">Buy 2 Get 1 Free - Skin</a> */}
                    </Grid>
                </Container>
            </Grid>

            <Grid className="home_about" item xs={12}></Grid>
            
            <Grid className="home_footer" item xs={12}>
                <Grid container className="home_footer_container" spacing={4}>
                    {/* contact details */}
                    <Grid item xs={12} md={6}>
                        <Grid container className="icons_container">
                            <Grid item xs={12} sm={6}>
                                <GenerateInfo iconName={<CallIcon />} header="Contact" content="78234645454" />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <GenerateInfo iconName={<LocationOnIcon />} header="Location" content="test 123 str." />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <GenerateInfo iconName={<EmailIcon />} header="Email" content="test@fsd.com " />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <GenerateInfo iconName={<ScheduleIcon />} header="Timings" 
                                content="M-F 1-6 p.m. 
                                 M-F 1-6 p.m." />
                            </Grid>
                        </Grid>
                    </Grid>
                    {/* email us */}
                    <Grid item xs={12} md={6}>
                        <Grid container>
                            <Grid item xs={12} sm={6} md={12} className="align_item">
                                <MuiThemeProvider theme={theme}>
                                   <Typography variant='h2' className="subscribe_header">Subscribe For Deals & Updates</Typography>
                                </MuiThemeProvider>
                            </Grid>
                            <Grid item xs={12} sm={6} md={12}>
                                <Grid container>
                                    <Grid item xs={12} className="align_item">
                                        {/* <Button variant="outlined" color="primary" className="home_footer_button btn_email" fullWidth>Email</Button> */}
                                        <Input placeholder="Email" className="home_footer_button btn_email" variant="outlined"  disableUnderline={true} fullWidth/>
                                    </Grid>
                                    <Grid item xs={12} className="align_item">
                                        <Button variant="contained" color="primary" className="home_footer_button btn_subscribe" fullWidth>Subscribe</Button>
                                    </Grid>
                                </Grid>                                
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    ) 
}

export default Home;
