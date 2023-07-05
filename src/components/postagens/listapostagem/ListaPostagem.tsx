import React, { useState, useEffect } from 'react'
import { Link,useNavigate,useParams } from 'react-router-dom'
import Postagem from '../../../models/Postagem';
import { busca } from '../../../services/Service'
import {Card, CardActions, CardContent, Button, Typography, makeStyles, CardActionArea, CardMedia } from '@material-ui/core';
import {Box} from '@mui/material';
import './ListaPostagem.css';
import useLocalStorage from 'react-use-localstorage';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { toast } from 'react-toastify';
import { DeleteOutlineRounded, SyncRounded } from '@material-ui/icons';


function ListaPostagem() {
  const [posts, setPosts] = useState<Postagem[]>([])
  const token =  useSelector<TokenState, TokenState["tokens"]>(
    (state) =>state.tokens
);
  let navigate = useNavigate();

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

  async function getPost() {
    await busca("/postagens", setPosts, {
      headers: {
        'Authorization': token
      }
    })
  }

  useEffect(() => {

    getPost()

  }, [posts.length])

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
      {
        posts.map(post => (
          <>
          <Card className='teste'>
          <CardActionArea>
        <CardMedia
          className='titulo'
          image="/static/images/cards/contemplative-reptile.jpg"
          title={post.titulo}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          {post.titulo}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          {post.conteudo}
          </Typography>
        </CardContent>
      </CardActionArea>

      <CardActions className='btn-right'>
      <Link to={`/formularioPostagem/${post.id}`} className="text-decorator-none" >
        <Button className='btn'>
        <SyncRounded/>
        </Button>
      </Link>
      <Link to={`/deletarPostagem/${post.id}`} className="text-decorator-none">
        <Button className='btn'>
        <DeleteOutlineRounded/>
        </Button>
        </Link>
      </CardActions>
      <Typography className='btn-left'><p className='hash'> <img width="20" height="20" src="https://img.icons8.com/ios-filled/40/hashtag.png" alt="hashtag"/> <Link to='/temas'>  {post.tema?.titulo}  </Link> </p></Typography>
              </Card>
              </>
        ))
      }
    </>
  )
}

export default ListaPostagem;