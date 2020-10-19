import React from 'react';
import './styles.css';

import api from '../../services/api'

import Header from '../AdminHeader'
import Body from '../AdminBody'
import Formulario from '../../components/Formulario'

function AdminUsuario() {

  async function handleSubmit(event) {
    event = event? event : window.event;
    event.preventDefault();

    const formulario = event.target;
    let { nome, login, senha } = formulario;

    nome = nome.value; login = login.value; senha = senha.value;

    let confirmar = document.getElementById('confirmar-senha').value;

    if(!nome || !login || !senha || !confirmar) 
      return alert("Os campos 'nome', 'login', 'senha' e 'confirmar' são obrigatórios");
      
    if(senha !== confirmar) 
      return alert("A senha e a confirmação devem ser iguais");

    //let newForm = new FormData(formulario);

    let request = await api.post('usuario', { nome, login, senha });

    if(!!request.data)
      return alert("Dados cadastrados com sucesso!");
  }

  return (
    <>
      <Header buscarId="buscar"/>
      <Body>
        <Formulario onSubmit={ handleSubmit } style={{marginTop: '25px'}} >
          <p>
              <label for="nome">Nome:</label>
              <input type="text" id="nome" name="nome" placeholder="Digite o nome" />
          </p>
          <p>
              <label for="login">Login:</label>
              <input type="text" id="login" name="login" placeholder="Defina o login" />
          </p>
          <p>
              <label for="senha">Senha:</label>
              <input type="password" id="senha" name="senha" placeholder="Senha" />
          </p>
          <p>
              <label for="confirmar-senha">Confirmar:</label>
              <input type="password" id="confirmar-senha" placeholder="Repita a senha" />
          </p>

          <p>
              <button>Cadastrar</button>
          </p>
        </Formulario>
      </Body>
    </>
  );
}

export default AdminUsuario;
