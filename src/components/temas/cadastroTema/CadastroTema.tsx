import { useState, useEffect, ChangeEvent } from 'react';
import { Container, Typography, TextField, Button } from "@material-ui/core";
import { useNavigate, useParams } from 'react-router-dom';
import './CadastroTema.css';
import useLocalStorage from 'react-use-localstorage';
import Tema from '../../../models/Tema';
import { buscaId, post, put } from '../../../services/Service';

function CadastroTema() {
  let navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [token, setToken] = useLocalStorage('token');
  const [tema, setTema] = useState<Tema>({
    id: 0,
    titulo: ''
  });

  useEffect(() => {
    if (token === "") {
      alert("Você precisa estar logado");
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
      alert('Tema atualizado com sucesso');
    } else {
      post(`/temas`, tema, setTema, {
        headers: {
          'Authorization': token
        }
      });
      alert('Tema cadastrado com sucesso');
    }
    back();
  }

  function back() {
    navigate('/temas');
  }

  return (
    <Container maxWidth="sm" className="topo">
      <form onSubmit={onSubmit}>
        <Typography variant="h3" color="textSecondary" component="h1" align="center">Formulário de cadastro tema</Typography>
        <TextField value={tema.titulo} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedTema(e)} id="titulo" label="titulo" variant="outlined" name="titulo" margin="normal" fullWidth />
        <Button type="submit" variant="contained" color="primary">
          Finalizar
        </Button>
      </form>
    </Container>
  );
}

export default CadastroTema;
