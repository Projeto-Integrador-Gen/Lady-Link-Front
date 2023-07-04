import React, { useState, useEffect, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import User from '../../models/User';
import { cadastroUsuario } from '../../services/Service';
import { Grid, Typography, Button, TextField } from '@material-ui/core';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import './CadastroUsuario.css';
import { toast } from 'react-toastify';


function CadastroUsuario() {

    let navigate = useNavigate();
    const [confirmarSenha, setConfirmarSenha] = useState<String>("")
    const [user, setUser] = useState<User>(
        {
            id: 0,
            nome: '',
            usuario: '',
            senha: ''
        })

    const [userResult, setUserResult] = useState<User>(
        {
            id: 0,
            nome: '',
            usuario: '',
            senha: ''
        })

    useEffect(() => {
        if (userResult.id != 0) {
            navigate("/login")
        }
    }, [userResult])


    function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>) {
        setConfirmarSenha(e.target.value)
    }


    function updatedModel(e: ChangeEvent<HTMLInputElement>) {

        setUser({
            ...user,
            [e.target.name]: e.target.value
        })

    }
    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()

        if (user.nome.length < 3) {
            toast.info('O nome deve ter pelo menos 3 caracteres.', {
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

        if (!user.usuario.includes('@') && !user.usuario.includes('.')) {
            toast.info('e-mail inválido para cadastro', {
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

        if (user.usuario.length <= 6) {
            toast.info('digite no mínimo 6 caracteres no seu usuario.', {
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

        if (user.senha.length < 8) {
            toast.info('A senha deve ter pelo menos 8 caracteres.', {
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

        if (confirmarSenha == user.senha) {
            cadastroUsuario(`/usuarios/cadastrar`, user, setUserResult)
            toast.success('Sucesso, bem vindo a LadyLink.', {
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
            toast.info('Oops, as senhas não são as mesmas.', {
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
    }
    return (
        <Grid className="bodi">
        <div className="container" id="container">
           <div className="form-container sign-in-container">            
            <form onSubmit={onSubmit}>
                <h1>Criar Conta</h1>
                <input
                    value={user.nome}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                    id='nome'
                    type="text"
                    placeholder="Nome Completo"
                    name='nome'
                />
                <input
                    value={user.usuario}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                    id='user'
                    type="email"
                    placeholder="Email"
                    name='usuario'
                />
                <input
                    value={user.senha}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                    id='senha'
                    type="password"
                    placeholder="Senha"
                    name='senha'
                />
                <input
                    value={confirmarSenha}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(e)}
                    id='confirmarSenha'
                    type="password"
                    placeholder="Confirmar Senha"
                    name='confirmarSenha'
                />
                <button type="submit">Criar</button>
            </form>
            </div>
            <div className="overlay-container">
                <div className="overlay">
                    <div className="overlay-panel overlay-right">
                        <h1>Que Saudades!</h1>
                        <p>Vamos se conectar e publicar para o mundo todo ver?</p>
                        <Link to='/login'>
                            <button className="ghost" id="signIn">
                                Logar
                            </button>
                        </Link>
                    </div>
                   
                </div>
                </div>
            </div>
            </Grid>
            );
}

            export default CadastroUsuario;