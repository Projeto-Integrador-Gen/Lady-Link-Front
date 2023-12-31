import { useEffect, useState } from 'react'
import {Card, CardActions, CardContent, Button, Typography} from '@material-ui/core';
import {Box} from '@mui/material';
import './DeletarTema.css';
import { useNavigate, useParams } from 'react-router-dom';
import { buscaId, deleteId } from '../../../services/Service';
import Tema from '../../../models/Tema';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { toast } from 'react-toastify';


function DeletarTema() {
  let navigate = useNavigate();
  const { id } = useParams<{id: string}>();
  const token =  useSelector<TokenState, TokenState["tokens"]>(
    (state) =>state.tokens
);   const [tema, setTema] = useState<Tema>()

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

  useEffect(() =>{
      if(id !== undefined){
          findById(id)
      }
  }, [id])

  async function findById(id: string) {
      buscaId(`/tema/${id}`, setTema, {
          headers: {
            'Authorization': token
          }
        })
      }

      function sim() {
        navigate('/temas')
          deleteId(`/temas/${id}`, {
            headers: {
              'Authorization': token
            }
          });
          toast.success('Tema deletado com sucesso', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: "colored",
            progress: undefined   
           });
        }
      
        function nao() {
          navigate('/temas')
        }
        
          
  return (
    <>
      <Box m={2}>
        <Card variant="outlined">
          <CardContent>
            <Box justifyContent="center">
              <Typography color="textSecondary" gutterBottom>
                Deseja deletar o Tema:
              </Typography>
              <Typography color="textSecondary">
              {tema?.titulo}
              </Typography>
            </Box>
          </CardContent>
          <CardActions>
            <Box display="flex" justifyContent="start" ml={1.0} mb={2} >
              <Box mx={2}>
                <Button onClick={sim}>
                <img width="30" height="30" src="https://img.icons8.com/material/24/facebook-like--v1.png" alt="Botão confirmar"/>
                </Button>
              </Box>
              <Box mx={2}>
                <Button onClick={nao}>
                <img width="30" height="30" src="https://img.icons8.com/ios-filled/50/cancel.png" alt="Botão cancelar"/>
                </Button>
              </Box>
            </Box>
          </CardActions>
        </Card>
      </Box>
    </>
  );
}
export default DeletarTema;