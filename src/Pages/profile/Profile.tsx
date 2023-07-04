import React from 'react'
import {Typography, Grid, Button, Paper} from '@material-ui/core';
import {Box} from '@mui/material';
import './profile.css';
import Woman from "../../assets/Imagem/woman.png"
import ListaPostagem from '../../components/postagens/listapostagem/ListaPostagem';

function Profile (){
    return (
        <>
            <Grid container spacing={0}>
        <Grid  className='profile' item xs={2}>
            <img className='img' src="https://th.bing.com/th/id/R.3c958a0b126f5064c6c3acdef009e782?rik=pNuUKUk%2bh3NSpw&riu=http%3a%2f%2fimagem.band.com.br%2fzoom%2ff_201977.jpg&ehk=l1aFNZItb6jkA6G7DTeCzofO5tJoU%2fSy%2fwGcfCL3%2fZ4%3d&risl=&pid=ImgRaw&r=0" alt="Foto de perfil do usuario" />
            <h1 className='name'>Naldo Benny</h1>
        </Grid>
        <Grid className='post' item xs={10}>
        <ListaPostagem/>
        </Grid>
      </Grid>
        </>
    );

}
export default Profile;