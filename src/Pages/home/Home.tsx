import React, { useEffect } from 'react'
import { Typography, Grid, Button } from '@material-ui/core';
import { Box } from '@mui/material';
import TabPostagem from '../../components/postagens/tabpostagem/TabPostagem';
import ModalPostagem from '../../components/postagens/modalPostagem/ModalPostagem';
import './Home.css'
import woman3 from "../../assets/Imagem/undraw_software_engineer_re_tnjc.svg";
import unsplash from "../../assets/react.svg";

import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { TokenState } from '../../store/tokens/tokensReducer';
import { toast } from 'react-toastify';

function Home() {
    let navigate = useNavigate();
    const token =  useSelector<TokenState, TokenState["tokens"]>(
        (state) =>state.tokens
    );
    
    useEffect(() => {
        if (token == "") {
            toast.warning('Você precisa estar logado', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined   
               });            
               navigate("/login")

        }
    }, [token])


    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" className='fundao'>
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                        <Typography variant="h2" gutterBottom color="textPrimary" component="h2" align="center" className='titulo1'>Seja Bem Vinda!</Typography>
                        <Typography variant="h4" gutterBottom color="textPrimary" component="h4" align="center" className='titul2'>Lady Link,conectando mulheres ao mercado de trabalho !</Typography>
                    </Box><Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className='titulo3'>Oportunidades!</Typography>
                    
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                            <ModalPostagem />
                        </Box>
                        <Button variant="outlined" className='botao'>Visualizar suas Postagens</Button>
                    </Box>
                </Grid>
                <Grid item xs={6} >
                    <img src={woman3} alt="Mulher sentada na frente do computador" width="600px" height="600px" />
                </Grid>
                <Grid item className='postagens'>
                    <TabPostagem />
                </Grid>

            </Grid>
        </>
    );

}
export default Home;