import React from "react";
import {Box, Typography, bottomNavigationActionClasses} from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
    return (
        <div>

            <Box sx={{textAlign:'center' , bgcolor:"#1A1A19" , color:'white',p:3}}>
                <Box sx={{my:3 ,"& svg":{
                    fontSize:"60px",
                    cursor:'pointer',
                    mr:2
                },
                "& svg:hover":{
                    color:'goldenrod',
                    transform:'translateY(-5px)',
                    transition:'all 400ms'
                }}}>
                    {/* {icons} */}
                    <InstagramIcon/>
                    <TwitterIcon/>
                    <GitHubIcon/>
                    <LinkedInIcon/>
                </Box>
                <Typography variant="h5" sx={{"@media(min-width:600px)":{fontSize:'1rem',}}}>

                    All rights reserved &copy;
                </Typography>
            </Box>
            
            
      </div>
    )
}

export default Footer