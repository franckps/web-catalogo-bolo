import React, { useState, useEffect } from 'react';
import './styles.css';

import api from '../../services/api'

import Header from '../AdminHeader'
import Body from '../AdminBody'
import Formulario from '../../components/Formulario'

function AdminUsuario({ match }) {

  async function handleSubmit(event) {
    event = event? event : window.event;
    event.preventDefault();

    const formulario = event.target;
    let { senha } = formulario;

    senha = senha.value;

    let confirmar = document.getElementById('confirmar-senha').value;

    if(!senha || !confirmar) 
      return alert("Os campos 'senha' e 'confirmar' são obrigatórios");
      
    if(senha !== confirmar) 
      return alert("A senha e a confirmação devem ser iguais");

    let request = await api.put(`usuario/${ match.params.id }`, { senha });

    if(!!request.data)
      return alert("Senha alterada com sucesso!");
  }

  return (
    <>
      <Header buscarId="buscar"/>
      <Body>
        <Formulario onSubmit={ handleSubmit } style={{marginTop: '25px'}} >
          <p>
              <label htmlFor ="senha">Senha:</label>
              <input type="password" id="senha" name="senha" placeholder="Senha" />
          </p>
          <p>
              <label htmlFor="confirmar-senha">Confirmar:</label>
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
