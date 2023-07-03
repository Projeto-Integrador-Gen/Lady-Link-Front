import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardActions, CardContent, Button, Typography, makeStyles, CardActionArea, CardMedia } from '@material-ui/core';
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
        </>
      ))}
    </>
  );
}

export default ListaTema;