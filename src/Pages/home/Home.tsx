import React from 'react'
import {Typography, Grid, Button} from '@material-ui/core';
import {Box} from '@mui/material';
import './Home.css'
import Woman from "../../assets/Imagem/woman.png"

function Home (){
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" className='fundao'>
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                        <Typography variant="h4" gutterBottom color="textPrimary" component="h3" align="center" className='titulo'>Seja Bem Vinda!</Typography>
                        <Typography variant="h6" gutterBottom color="textPrimary" component="h5" align="center" className='titulo'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ratione aspernatur, amet labore consequatur perferendis cupiditate placeat deserunt libero, excepturi repellendus ex ad minus sit tenetur reiciendis adipisci expedita iusto?</Typography>
                    </Box><Typography variant="h4" gutterBottom color="textPrimary" component="h3" align="center" className='titulo'>Seja Bem Vinda!</Typography>
                        <Typography variant="h6" gutterBottom color="textPrimary" component="h5" align="center" className='titulo'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis aut aperiam, aliquid numquam ullam unde, eum quia dolorum optio illum dolorem, ratione impedit et similique quasi eos ab maxime tempore.</Typography>
                        <Typography variant="h4" gutterBottom color="textPrimary" component="h3" align="center" className='titulo'>Seja Bem Vinda!</Typography>
                        <Typography variant="h6" gutterBottom color="textPrimary" component="h5" align="center" className='titulo'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis voluptatem quisquam ratione odit in incidunt placeat quaerat. Reprehenderit nobis eius cum, esse earum optio! Eos officia ratione ipsa numquam iure.</Typography>
                        <Typography variant="h4" gutterBottom color="textPrimary" component="h3" align="center" className='titulo'>Seja Bem Vinda!</Typography>
                        <Typography variant="h6" gutterBottom color="textPrimary" component="h5" align="center" className='titulo'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas aperiam veniam consequatur veritatis unde alias vero mollitia porro voluptates, quod natus sapiente nam eligendi necessitatibus ex ea quibusdam temporibus expedita.</Typography>
                        <Typography variant="h4" gutterBottom color="textPrimary" component="h3" align="center" className='titulo'>Seja Bem Vinda!</Typography>
                        <Typography variant="h6" gutterBottom color="textPrimary" component="h5" align="center" className='titulo'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, quaerat eligendi inventore exercitationem incidunt aperiam mollitia, officiis iusto tenetur ad earum aut non praesentium beatae. Laboriosam explicabo dolorem amet aperiam.</Typography>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                        </Box>
                        <Button variant="outlined" className='botao'>Visualizar suas Postagens</Button>
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
export default Home;