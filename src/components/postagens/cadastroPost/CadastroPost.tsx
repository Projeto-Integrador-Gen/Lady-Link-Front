import React, { ChangeEvent, useEffect, useState } from 'react';
import {
    Container,
    Typography,
    TextField,
    Button,
    Select,
    InputLabel,
    MenuItem,
    FormControl,
    FormHelperText,
} from "@material-ui/core";
import './CadastroPost.css';
import { useNavigate, useParams } from 'react-router-dom';
import Tema from '../../../models/Tema';
import Postagem from '../../../models/Postagem';
import { busca, buscaId, post, put } from '../../../services/Service';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { toast } from 'react-toastify';

function CadastroPost() {
    let navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    const [temas, setTemas] = useState<Tema[]>([]);
    const token =  useSelector<TokenState, TokenState["tokens"]>(
        (state) =>state.tokens
    );

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
    }, [token]);

    const [tema, setTema] = useState<Tema>({
        id: 0,
        titulo: ''
    });

    const [postagem, setPostagem] = useState<Postagem>({
        id: 0,
        titulo: '',
        conteudo: '',
        tema: null
    });

    const [alertaCaracteres, setAlertaCaracteres] = useState(false);

    useEffect(() => {
        setPostagem({
            ...postagem,
            tema: tema
        });
    }, [tema]);

    useEffect(() => {
        getTemas();
        if (id !== undefined) {
            findByIdPostagem(id);
        }
    }, [id]);

    async function getTemas() {
        await busca("/temas", setTemas, {
            headers: {
                'Authorization': token
            }
        });
    }

    async function findByIdPostagem(id: string) {
        await buscaId(`postagens/${id}`, setPostagem, {
            headers: {
                'Authorization': token
            }
        });
    }

    function updatedPostagem(e: ChangeEvent<HTMLInputElement>) {
        setPostagem({
            ...postagem,
            [e.target.name]: e.target.value,
            tema: tema
        });

        if (e.target.name === 'conteudo' && e.target.value.length < 10) {
            setAlertaCaracteres(true);
        } else {
            setAlertaCaracteres(false);
        }
    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();

        if (alertaCaracteres) {
            toast.error('O conteudo deve ter pelo menos 10 caracteres.', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined   
               });
            return;
        }

        if (id !== undefined) {
            put(`/postagens/${id}`, postagem, setPostagem, {
                headers: {
                    'Authorization': token
                }
            });
            toast.success('Postagem atualizada com sucesso', {
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
            post(`/postagens`, postagem, setPostagem, {
                headers: {
                    'Authorization': token
                }
            });
            toast.success('Postagem cadastrada com sucesso', {
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
        navigate('/posts');
    }
    return (
        <Container maxWidth="sm" className="topo">
            <form onSubmit={onSubmit}>
                <Typography variant="h3" color="textSecondary" component="h1" align="center" >Formulário de cadastro postagem</Typography>
                <TextField value={postagem.titulo} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPostagem(e)} id="titulo" label="titulo" variant="outlined" name="titulo" margin="normal" fullWidth />
                <TextField value={postagem.conteudo} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPostagem(e)} id="conteudo" label="conteudo" name="conteudo" variant="outlined" margin="normal" fullWidth />

                <FormControl >
                    <InputLabel id="demo-simple-select-helper-label">Tema </InputLabel>
                    <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        onChange={(e) => buscaId(`/temas/${e.target.value}`, setTema, {
                            headers: {
                                'Authorization': token
                            }
                        })}>
                        {
                            temas.map(tema => (
                                <MenuItem value={tema.id}>{tema.titulo}</MenuItem>
                            ))
                        }
                    </Select>
                    <FormHelperText>Escolha um tema para a postagem</FormHelperText>
                    <Button type="submit" variant="contained" color="primary">
                        Finalizar
                    </Button>
                </FormControl>
            </form>
        </Container>
    )
}
export default CadastroPost;