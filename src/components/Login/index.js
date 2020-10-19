import React from 'react'

import api from '../../services/api'

import { login as logar } from '../../services/auth'

import './styles.css'

function Login() {
    async function handleSubmit(event) {
        event = event? event : window.event;
        event.preventDefault();

        let formulario = document.getElementById('logar-usuario');
        let login = formulario.login.value;
        let password = formulario.password.value;

        let response = await api.post('login', {login, senha: password});

        if(!!response.data.message)
            return alert(response.data.message)


        console.log(response)

        logar(response.data.token, response.data.nome, response.data.id);

        window.location.assign("/admin");

    }

    return (
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: '70px', minHeight: '100vh'}}>
            <form id="logar-usuario" className="styled-form" onSubmit={handleSubmit}>
                <fieldset className="form-container">
                    <p className="profile"></p>

                    <p>
                        <label htmlFor ="login">Login:</label>
                        <input type="text" id="login" name="login" placeholder="Informe o login" />
                    </p>
                    <p>
                        <label htmlFor="password">Senha:</label>
                        <input type="password" id="password" name="password" placeholder="Informe a senha" />
                    </p>

                    <p>
                        <button>Entrar</button>
                    </p>
                </fieldset>
            </form>
        </div>
    )
}

export default Login