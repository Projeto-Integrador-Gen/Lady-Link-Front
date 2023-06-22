import React, { ChangeEvent, useEffect, useState } from "react";
import './Login.css'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Link, useNavigate } from "react-router-dom";
import useLocalStorage from "react-use-localstorage";
import { Box, Button, Grid, TextField, Typography } from "@material-ui/core";
import UserLogin from "../../models/UserLogin";
import { login } from "../../services/Service";




export default function Login() {
	let navigate = useNavigate();
  
	const [token, setToken] = useLocalStorage('token');
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
    if (token != "") {
      navigate("/home");
    }
  }, [token]);

  async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      await login(`usuarios/logar`, userLogin, setToken);
      alert("Bem-vindo, você ja está logado com sucesso");
    } catch (error) {
      alert(
        "Oops, o e-mail ou a senha estão erradas, confira e tente novamente"
      );
    }
  }

  // @ts-ignore
  return (
    <Grid container direction="row" justifyContent="center" alignItems="center">
      <Grid alignItems="center" xs={6}>
        <Box paddingX={20}>
          <form onSubmit={onSubmit}>
            <Typography
              variant="h3"
              gutterBottom
              color="primary"
              align="center"
              style={{ fontWeight: "bold" }}
            >
              Entrar
            </Typography>
            <TextField
              value={userLogin.usuario}
              onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
              id="user"
              label="user"
              variant="outlined"
              name="usuario"
              margin="normal"
              fullWidth
            />
            <TextField
              value={userLogin.senha}
              onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
              id="password"
              label="password"
              variant="outlined"
              name="senha"
              margin="normal"
              type="password"
              fullWidth
            />
            <Box marginTop={2} textAlign="center">
             
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  className="text" >
                  Logar
                </Button>
              
            </Box>
          </form>
          <Box display="flex" justifyContent="center" marginTop={2}>
            <Box marginRight={1}>
              <Typography variant="subtitle1" gutterBottom align="center">
                {" "}
                Não tem uma conta ?
              </Typography>
            </Box>
            <Link to="/cadastrousuario">
              <Typography
                variant="subtitle1"
                gutterBottom
                align="center"
                className="text"
              >
                {" "}
                Cadastre-se agora mesmo
              </Typography>
            </Link>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={6} className="image"></Grid>
    </Grid>
  );
}