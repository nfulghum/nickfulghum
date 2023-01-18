import React from 'react';
import portrait from '../assets/portrait.png'
import { Grid, Typography, Box, IconButton } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';


const Home = () => {
    return (
        <Grid container direction="row" alignItems="left">
            <Grid item>
                <Typography variant="h2" component="h2" sx={{ mt: 14, ml: 4 }} color='#DD5F18'>
                    Nick Fulghum
                </Typography>
                <Typography variant="h4" component="h4" sx={{ mt: 4, ml: 4 }} color='#DD5F18'>
                    Software Engineer
                </Typography>
                <Box sx={{ ml: 12 }} component="a" href='https://www.linkedin.com/in/nick-fulghum-7835a3234/'>
                    <IconButton
                        sx={{ mr: 2 }}
                    >
                        <LinkedInIcon style={{ fontSize: 50 }} />
                    </IconButton>
                </Box>
                <Box component="a" href='https://github.com/nfulghum'>
                    <IconButton
                        sx={{ mr: 2 }}
                    >
                        <GitHubIcon style={{ fontSize: 50 }} />
                    </IconButton>
                </Box>

            </Grid>
            <img
                src={portrait}
                alt="picture"
                width="50%"
                align='right'
            />
        </Grid >
    )
}

export default Home;

<img
    src={portrait}
    alt="picture"
    width="50%"
    align='right'
/>