import React from 'react';
import {
    Box,
    Grid,
    Container,
    Typography,
} from '@mui/material';

const item = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    px: 5,
};

const Skills = () => {
    return (
        <Box
            component="section"
            sx={{ display: 'flex', overflow: 'hidden' }}
        >
            <Container
                sx={{
                    mt: 10,
                    mb: 15,
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Typography variant="h3" marked="center" component="h3" sx={{ mb: 14 }} color='#DD5F18'>
                    Skills
                </Typography>
                <Grid container spacing={5}>
                    <Grid item xs={12} md={4}>
                        <Box sx={item}>
                            <img
                                style={{ width: "100px", height: "100px" }}
                                alt="javascript"
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                            />
                            <Typography variant="h6" align="center" color='#093D65'>
                                {'JavaScript'}
                                <br />
                                {'Advanced Beginner'}
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Box sx={item}>
                            <img
                                style={{ width: "100px", height: "100px" }}
                                alt="react"
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
                            />
                            <Typography variant="h6" align="center" color='#093D65'>
                                {'React'}
                                <br />
                                {'Advanced Beginner'}
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Box sx={item}>
                            <img
                                style={{ width: "100px", height: "100px" }}
                                alt="jest"
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg"
                            />
                            <Typography variant="h6" align="center" color='#093D65'>
                                {'Jest'}
                                <br />
                                {'Advanced Beginner'}
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Box sx={item}>
                            <img
                                style={{ width: "100px", height: "100px" }}
                                alt="html"
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                            />
                            <Typography variant="h6" align="center" color='#093D65'>
                                {'HTML5'}
                                <br />
                                {'Advanced Beginner'}
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Box sx={item}>
                            <img
                                style={{ width: "100px", height: "100px" }}
                                alt="css"
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                            />
                            <Typography variant="h6" align="center" color='#093D65'>
                                {'CSS3'}
                                <br />
                                {'Advanced Beginner'}
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Box sx={item}>
                            <img
                                style={{ width: "100px", height: "100px" }}
                                alt="python"
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
                            />
                            <Typography variant="h6" align="center" color='#093D65'>
                                {'Python'}
                                <br />
                                {'Advanced Beginner'}
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Box sx={item}>
                            <img
                                style={{ width: "100px", height: "100px" }}
                                alt="flask"
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg"
                            />
                            <Typography variant="h6" align="center" color='#093D65'>
                                {'Flask'}
                                <br />
                                {'Beginner'}
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Box sx={item}>
                            <img
                                style={{ width: "100px", height: "100px" }}
                                alt="mui"
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg"
                            />
                            <Typography variant="h6" align="center" color='#093D65'>
                                {'Material UI'}
                                <br />
                                {'Advanced Beginner'}
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Box sx={item}>
                            <img
                                style={{ width: "100px", height: "100px" }}
                                alt="postgresql"
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
                            />
                            <Typography variant="h6" align="center" color='#093D65'>
                                {'PostgreSQL '}
                                <br />
                                {'Advanced Beginner'}
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Box sx={item}>
                            <img
                                style={{ width: "100px", height: "100px" }}
                                alt="express"
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
                            />
                            <Typography variant="h6" align="center" color='#093D65'>
                                {'Express '}
                                <br />
                                {'Beginner'}
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Box sx={item}>
                            <img
                                style={{ width: "100px", height: "100px" }}
                                alt="node"
                                src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg"
                            />
                            <Typography variant="h6" align="center" color='#093D65'>
                                {'Node '}
                                <br />
                                {'Beginner'}
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Box sx={item}>
                            <img
                                style={{ width: "100px", height: "100px" }}
                                alt="sqlalchemy"
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlalchemy/sqlalchemy-original.svg"
                            />
                            <Typography variant="h6" align="center" color='#093D65'>
                                {'SQL Alchemy '}
                                <br />
                                {'Beginner'}
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4} ml={20}>
                        <Box sx={item}>
                            <img
                                style={{ width: "100px", height: "100px" }}
                                alt="git"
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
                            />
                            <Typography variant="h6" align="center" color='#093D65'>
                                {'Git'}
                                <br />
                                {'Advanced Beginner'}
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Box sx={item}>
                            <img
                                style={{ width: "100px", height: "100px" }}
                                alt="github"
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                            />
                            <Typography variant="h6" align="center" color='#093D65'>
                                {'Github'}
                                <br />
                                {'Advanced Beginner'}
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box >
    )
}

export default Skills;