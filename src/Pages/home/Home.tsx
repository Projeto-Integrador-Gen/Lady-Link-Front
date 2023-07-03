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
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className='titulo'>Seja Bem Vinda!</Typography>
                        <Typography variant="h6" gutterBottom color="textPrimary" component="h6" align="center" className='titulo'>Mesmo que as empresas tenham vontade de mudar o cenário atual empregando mais mulheres, é importante lembrar que a igualdade de gênero no mercado de trabalho ainda é um reflexo de um conjunto de crenças e práticas antigas, que necessitam de planejamento e ação para serem definitivamente deixadas de lado.</Typography>
                    </Box><Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className='titulo'>Oportunidades!</Typography>
                    
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                            <ModalPostagem />
                        </Box>
                        <Button variant="outlined" className='botao'>Visualizar suas Postagens</Button>
                    </Box>
                </Grid>
                <Grid item xs={6} >
                    <img src={woman3} alt="" width="600px" height="600px" />
                </Grid>
                <Grid item className='postagens'>
                    <TabPostagem />
                </Grid>

            </Grid>
        </>
    );

}
export default Home;