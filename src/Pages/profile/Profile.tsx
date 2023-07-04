import React from 'react'
import {Typography, Grid, Button, Paper} from '@material-ui/core';
import {Box} from '@mui/material';
import './Profile.css';
import Woman from "../../assets/Imagem/woman.png"
import ListaPostagem from '../../components/postagens/listapostagem/ListaPostagem';

function Profile (){
    return (
        <>
            <Grid container spacing={0}>
        <Grid  className='profile' item xs={2}>
            <img className='img' src="https://i.pinimg.com/originals/19/f0/28/19f028da60ba3d850fa03300f9e9d53b.jpg" alt="Foto da rainha charlotte" />
            <h1 className='name'>Username</h1>
        </Grid>
        <Grid className='post' item xs={10}>
        <ListaPostagem/>
        </Grid>
      </Grid>
        </>
    );

}
export default Profile;