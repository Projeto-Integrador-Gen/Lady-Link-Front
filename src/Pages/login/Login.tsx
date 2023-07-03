import React, { ChangeEvent, useEffect, useState } from "react";
import './Login.css'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Link, useNavigate } from "react-router-dom";
import useLocalStorage from "react-use-localstorage";
import { Box, Button, Grid, TextField, Typography } from "@material-ui/core";
import UserLogin from "../../models/UserLogin";
import { cadastroUsuario, login } from "../../services/Service";
import { useDispatch } from "react-redux";
import { addToken } from "../../store/tokens/actions";
import { toast } from "react-toastify";
import User from "../../models/User";


export default function Login() {
  
  let navigate = useNavigate();
  const dispatch = useDispatch();
	const [token, setToken] = useState('');
	const [userLogin, setUserLogin] = useState<UserLogin>({
	  id: 0,
	  usuario: "",
	  senha: "",
	  token: ""
	});

  
function updatedModel(e: ChangeEvent<HTMLInputElement>) {
    setUserLogin({
      ...userLogin,
      [e.target.name]: e.target.value,
    });
    console.log(JSON.stringify(userLogin));
  }

  useEffect(() => {
    if (token !== "") {
      dispatch(addToken(token));
      navigate("/home");
    }
  }, [token]);

  async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      await login(`usuarios/logar`, userLogin, setToken);
      toast.success('Bem-vindo! Usuário logado com sucesso!', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: "colored",
        progress: undefined   
       });  
    } catch (error) {
        toast.error('Oops! E-mail ou senha incorretos!', {
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
    <div className="container" id="container"> 
    <div className="form-container sign-in-container">
        <form onSubmit={onSubmit} className="container.right-panel-active .sign-up-container ">
          <h1>Login</h1>
          <input
            value={userLogin.usuario}
            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
            id="user"
            type="email"
            placeholder="Email"
            name="usuario"
          />
          <input
            value={userLogin.senha}
            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
            id="password"
            type="password"
            placeholder="Password"
            name="senha"
          />
          <button type="submit">Logar</button>
        </form>
      </div>
      <div className="overlay-container">
        <div className="overlay">
         
          <div className="overlay-panel overlay-right">
            <h1>Seja Bem Vinda!</h1>
            <p>Deseja criar uma conta?</p>
            <Link to='/cadastrousuario'>
            <button className="ghost" id="signUp">
              Criar
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
