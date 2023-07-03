import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
import { Card, CardActions, CardContent, Button, Typography, Grid } from '@material-ui/core';
=======
import { Card, CardActions, CardContent, Button, Typography, makeStyles, CardActionArea, CardMedia } from '@material-ui/core';
>>>>>>> 7a29a0a245327f072e32589388916ed5bfa29d5f
import { Box } from '@mui/material';
import Tema from '../../../models/Tema';
import './ListaTema.css';
import { useNavigate } from 'react-router-dom';
import { busca } from '../../../services/Service';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { toast } from 'react-toastify';
import { DeleteOutlineRounded, SyncRounded } from '@material-ui/icons';

function ListaTema() {
  const [temas, setTemas] = useState<Tema[]>([]);
  const token =  useSelector<TokenState, TokenState["tokens"]>(
    (state) =>state.tokens
);  const navigate = useNavigate();

  useEffect(() => {
    if (token == '') {
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


async function getTema() {
    await busca("/temas", setTemas, {
        headers: {
            'Authorization': token
        }
    })
}


  useEffect(() => {
    getTema();
  }, [temas.length]);

  const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });
  const classes = useStyles();



  return (
    <>
      {temas.map(tema => (
<<<<<<< HEAD
        <Grid item xs={10} className='caixa'>
        <Box m={2} key={tema.id}>
          <Card variant="outlined">
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Temas
              </Typography>
              <Typography variant="h5" component="h2">
=======
        <>
          <Card className='teste'>
          <CardActionArea>
          <CardMedia
          className='titulo'
          image="/static/images/cards/contemplative-reptile.jpg"
              title={tema.titulo}
              />
              <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
>>>>>>> 7a29a0a245327f072e32589388916ed5bfa29d5f
                {tema.titulo}
              </Typography>
              </CardContent>
              </CardActionArea>
            
              <CardActions className='btn-right'>
                <Link to={`/formularioTema/${tema.id}`} className="text-decorator-none">
                  <Button className='btn'>
                   <SyncRounded/>
                    </Button>
                </Link>
                <Link to={`/deletarTema/${tema.id}`} className="text-decorator-none">
                <Button className='btn'>
                <DeleteOutlineRounded/>
                    </Button>
                </Link>
            </CardActions>
          </Card>
<<<<<<< HEAD
        </Box>
        </Grid>
=======
        </>
>>>>>>> 7a29a0a245327f072e32589388916ed5bfa29d5f
      ))}
    </>
  );
}

export default ListaTema;