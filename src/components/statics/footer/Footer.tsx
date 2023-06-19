import React from 'react';
import Github from '@material-ui/icons/LinkedIn';
import {Typography,Grid } from '@material-ui/core';
import {Box} from '@mui/material';
import './Footer.css'

function Footer() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid alignItems="center" item xs={12}>
                    <Box className='fundoFooter1'>
                        <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                            <Typography variant="h5" align="center" gutterBottom style={{ color: "white" }}>Siga-nos nas redes sociais </Typography>
                        </Box>
                        <Box className="redes" display="flex" alignItems="center" justifyContent="center">                            
                            <a href="https://github.com/Projeto-Integrador-Gen" target="_blank" rel="noopener noreferrer">
                            <img width="48" height="48" src="https://img.icons8.com/stickers/48/github.png" alt="github"/>
                            </a>
                        </Box>
                    </Box>
                    <Box className='fundoFooter2'>
                        <Box paddingTop={1}>
                            <Typography variant="subtitle2" align="center" gutterBottom style={{ color: "white" }} >© 2023 Copyright:</Typography>
                        </Box>
                       
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default Footer;