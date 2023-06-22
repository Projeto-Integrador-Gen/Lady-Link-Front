import React from 'react'
import {Typography, Grid, Button} from '@material-ui/core';
import {Box} from '@mui/material';
import './profile.css';
import Woman from "../../assets/Imagem/woman.png"

function Profile (){
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" className='fundao'>
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                        <Typography variant="h4" gutterBottom color="textPrimary" component="h3" align="center" className='titulo'>Seja Bem Vinda!</Typography>
                        <Typography variant="h6" gutterBottom color="textPrimary" component="h5" align="center" className='titulo'>Seus pensamentos têm o poder de criar impacto. Compartilhe-os e faça a diferença!</Typography>
                        <Typography variant="h4" gutterBottom color="textPrimary" component="h3" align="center" className='titulo'>Seja Bem Vinda!</Typography>
                        <Typography variant="h6" gutterBottom color="textPrimary" component="h5" align="center" className='titulo'>Seus pensamentos têm o poder de criar impacto. Compartilhe-os e faça a diferença!</Typography>
                        <Typography variant="h4" gutterBottom color="textPrimary" component="h3" align="center" className='titulo'>Seja Bem Vinda!</Typography>
                        <Typography variant="h6" gutterBottom color="textPrimary" component="h5" align="center" className='titulo'>Seus pensamentos têm o poder de criar impacto. Compartilhe-os e faça a diferença!</Typography>
                        <Typography variant="h6" gutterBottom color="textPrimary" component="h5" align="center" className='titulo'>Seus pensamentos têm o poder de criar impacto. Compartilhe-os e faça a diferença!</Typography>
                        <Typography variant="h4" gutterBottom color="textPrimary" component="h3" align="center" className='titulo'>Seja Bem Vinda!</Typography>
                        <Typography variant="h6" gutterBottom color="textPrimary" component="h5" align="center" className='titulo'>Seus pensamentos têm o poder de criar impacto. Compartilhe-os e faça a diferença!</Typography>                    
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                        </Box>
                        <Button variant="outlined" className='botao'>Visualizar Perfil</Button>
                    </Box>
                </Grid>
                <Grid item xs={6} >
                    <img src={Woman} alt="" width="50px" height="50px" />
                </Grid>                
                <Grid xs={12} className='postagens'>
                </Grid>
            </Grid>
        </>
    );

}
export default Profile;