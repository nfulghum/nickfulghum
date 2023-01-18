import React from 'react';
import { Container, Typography, Button } from '@mui/material';

const About = () => {
    return (
        <Container
            sx={{
                mt: 15,
                mb: 14,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <Typography color="#bf360c" variant='h4' align='center'>
                About Me
            </Typography>

            <Typography color="#DD5F18" variant='h6' align='center'>
                {' My namne is Nick and I am a Full Stack Software Engineer. Previously, I was'}
                {' a Project Controls Specialist at Bay Ltd. an industrial construction company working up and down the'}
                {` Gulf Coast. I've also held titles such as Materials Manager, Materials Coordinator, and Team Lead. While these `}
                {` are my most recent job titles, I've also been a ranch hand on multiple Texas ranches from the coast to the hill country,`}
                {` and a lead at the Townlake YMCA.`}
            </Typography>

            <Typography variant="h6" color="#DD5F18" align='center' sx={{ mt: 2 }}>
                {`Through all these experiences I've learned alot about hard work, grit, determination, and the importance of team work. `}
                {`On top of that I've learned about the importance of attention to detail in a verbal, written, and technical sense. `}
                {`In February of 2022 I took a leap and decided to pursue a career in Software Development as it has always been a dream and side passion of mine.`}
                {` Within my first month at Springboard I realized that this endeavor would be one of my greatest thus far. Not one to shy away from a challenge I've`}
                {` gone head first into the experience of transitioning from a construction worker into a Software Engineer.`}
            </Typography >
            <Typography variant="h6" color="#DD5F18" align='center' sx={{ mt: 2 }}>
                {`While this is a brief look into my journey to where I am now this is not the end nor the climax of my story. If you would like to hear`}
                {` more about me please reach out to me at any of my social links!`}
            </Typography>
            <Button
                style={{ background: '#093D65' }}
                variant="contained"
                size="large"
                component="a"
                href="contact"
                sx={{ minWidth: 200, mt: 3 }}
            >
                Contact
            </Button>
        </Container>
    )
}

export default About;