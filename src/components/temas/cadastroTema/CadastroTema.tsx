import { useState, useEffect, ChangeEvent } from 'react';
import { Container, Typography, TextField, Button } from "@material-ui/core";
import { useNavigate, useParams } from 'react-router-dom';
import './CadastroTema.css';
import Tema from '../../../models/Tema';
import { buscaId, post, put } from '../../../services/Service';
import {toast} from 'react-toastify'
import { TokenState } from '../../../store/tokens/tokensReducer';
import { useSelector } from 'react-redux';


function CadastroTema() {
  let navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const token =  useSelector<TokenState, TokenState["tokens"]>(
    (state) =>state.tokens
);
  const [tema, setTema] = useState<Tema>({
    id: 0,
    titulo: ''
  });

  useEffect(() => {
    if (token === "") {
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
      navigate("/login");
    }
  }, [token, navigate]);

  useEffect(() => {
    if (id !== undefined) {
      findById(id);
    }
  }, [id]);

  useEffect(() => {
    return () => {
      // Cleanup function to cancel any ongoing tasks or subscriptions
    };
  }, []);

  async function findById(id: string) {
    buscaId(`/temas/${id}`, setTema, {
      headers: {
        'Authorization': token
      }
    });
  }

  function updatedTema(e: ChangeEvent<HTMLInputElement>) {
    setTema({
      ...tema,
      [e.target.name]: e.target.value,
    });
  }

  async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log("tema " + JSON.stringify(tema));

    if (id !== undefined) {
      console.log(tema);
      put(`/temas`, tema, setTema, {
        headers: {
          'Authorization': token
        }
      });
      toast.success('Tema atualizado com sucesso', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: "colored",
        progress: undefined   
       });
    } else {
      post(`/temas`, tema, setTema, {
        headers: {
          'Authorization': token
        }
      });
      toast.success('Tema cadastrado com sucesso', {
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
    back();
  }

  function back() {
    navigate('/temas');
  }

  return (
    <Container maxWidth="sm" className="topo">
      <form onSubmit={onSubmit}>
        <Typography variant="h3" color="textSecondary" component="h1" align="center">New Tema</Typography>
        <TextField value={tema.titulo} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedTema(e)} id="titulo" label="titulo" variant="outlined" name="titulo" margin="normal" fullWidth />
        <Button className='btn-submit' type="submit">
        <img width="40" height="40" src="https://img.icons8.com/ios-glyphs/100/filled-sent.png" alt="Botão de envio"/>
        </Button>
      </form>
    </Container>
  );
}

export default CadastroTema;