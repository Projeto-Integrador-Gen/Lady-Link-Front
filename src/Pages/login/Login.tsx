import React from "react";
import './Login.css'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';


function Login() {

    return (
        <div className="main">  	
		<input type="checkbox" id="chk" aria-hidden="true" />
        	<div className="signup">
				<form>
					<label htmlFor="chk"aria-hidden="true"> Criar Conta</label>
					<input type="text" name="nome" placeholder="Nome Completo" />
                    <input type="email" name="email" placeholder="Email" />
					<input type="senha" name="pswd" placeholder="Senha" />
					<button>Criar Conta</button>
				</form>
			</div>

			<div className="login">
				<form>
					<label htmlFor="chk" aria-hidden="true"> Entrar</label>
					<input type="email" name="email" placeholder="Email" />
					<input type="senha" name="pswd" placeholder="Senha" />
                    <button>Entrar</button>
                    <FormControlLabel className="signup"control={<Checkbox value="remember" color="secondary" />}
                     label="Lembrar-me" />
				</form>
			</div>
	</div>
    )

}
export default Login;