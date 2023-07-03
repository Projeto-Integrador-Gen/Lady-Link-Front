import React from 'react';
import Github from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Typography, Grid } from '@material-ui/core';
import { Box } from '@mui/material';
import './Footer.css'
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import Logo from '../../../assets/Imagem/ladylinkLogo.png'
import Githib from '../../../assets/Imagem/github.gif'




function Footer() {

    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    var footerComponent;

    if (token != "") {
        footerComponent = <Grid container direction="row" justifyContent="center" alignItems="center">
            <Grid alignItems="center" item xs={12}>
                <Box className='box1'>
                    <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                        <img width="70" height="80" src={Logo} alt="Logotipo LadyLink" />
                    </Box>


                    <Box className="redes" display="flex" alignItems="center" justifyContent="center">
                        <a href="https://github.com/Projeto-Integrador-Gen" target="_blank" rel="noopener noreferrer">
                            <img width="45" height="45" src={Githib} alt="Github" />
                        </a>

                    </Box>
                    <Box textAlign={'center'}>
                        <Typography variant="subtitle1" gutterBottom className='espacamento'> Copyright reserved to LadyLink © 2023 </Typography>
                    </Box>

                </Box>
               
            </Grid>
        </Grid>
    }

    return (
        <>
            {footerComponent}
        </>
    )
}

export default Footer;