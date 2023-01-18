import React from 'react';
import {
    Link,
    Box,
    AppBar,
    Toolbar
} from '@mui/material'
import { NavLink } from 'react-router-dom';

const Navigation = () => {

    const linkProps = {
        underline: 'hover',
        component: NavLink,
        color: '#fafafa'
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed" style={{ background: '#424242' }}>
                <Toolbar>
                    <Link sx={{ mr: 2 }} {...linkProps} to="/">Home</Link>
                    <Link sx={{ mr: 2 }} {...linkProps} to="about">About</Link>
                    <Link sx={{ mr: 2 }} {...linkProps} to="projects">Projects</Link>
                    <Link sx={{ mr: 2 }} {...linkProps} to="skills">Skills</Link>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Navigation;