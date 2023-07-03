import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardActions, CardContent, Button, Typography, Grid } from '@material-ui/core';
import { Box } from '@mui/material';
import Tema from '../../../models/Tema';
import './ListaTema.css';
import { useNavigate } from 'react-router-dom';
import { busca } from '../../../services/Service';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { toast } from 'react-toastify';

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



  return (
    <>
      {temas.map(tema => (
        <Grid item xs={10} className='caixa'>
        <Box m={2} key={tema.id}>
          <Card variant="outlined">
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Temas
              </Typography>
              <Typography variant="h5" component="h2">
                {tema.titulo}
              </Typography>
            </CardContent>
            <CardActions>
              <Box display="flex" justifyContent="center" mb={1.5}>
                <Link to={`/formularioTema/${tema.id}`} className="text-decorator-none">
                  <Box mx={1}>
                    <Button variant="contained" className="marginLeft" size='small' color="primary">
                      atualizar
                    </Button>
                  </Box>
                </Link>
                <Link to={`/deletarTema/${tema.id}`} className="text-decorator-none">
                  <Box mx={1}>
                    <Button variant="contained" size='small' color="secondary">
                      deletar
                    </Button>
                  </Box>
                </Link>
              </Box>
            </CardActions>
          </Card>
        </Box>
        </Grid>
      ))}
    </>
  );
}

export default ListaTema;