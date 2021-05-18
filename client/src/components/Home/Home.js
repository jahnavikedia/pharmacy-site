import React from 'react'
import Grid from '@material-ui/core/Grid';
import { Typography,Button, Container } from '@material-ui/core';
import './Home.css'

const Home = () => {
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
        </Grid>
    )
}

export default Home;
