import React, { useEffect, useState } from 'react';

import './styles.css';

import api from '../../services/api'

import Header from '../AdminHeader'
import Body from '../AdminBody'
import Formulario from '../../components/Formulario'

function Bolo() {
  const [sabores, setSabores] = useState([])

  async function initializaSabores() {
    const request = await api.get('sabor');
    if(!!request.data)
      setSabores(request.data)
  }

  useEffect(() => {
    initializaSabores()
  }, [])

  async function handleSubmit(event) {
    event = event? event : window.event;
    event.preventDefault();

    const formulario = event.target;
    let { nome, quantidade, descricao, s } = formulario;

    nome = nome.value; quantidade = quantidade.value; descricao = descricao.value;
    let checkedSabores = s.value? 
      s.checked? [s.value] : [] : 
      [...s]
      .filter(element => !!element.checked)
      .map(element => element.value);

    checkedSabores = checkedSabores.join(',');

    if(!nome || !quantidade || !descricao) 
      return alert("Os campos 'nome', 'quantidade' e 'descricao' são obrigatórios");

    let newForm = new FormData(formulario);
    newForm.append('sabor',checkedSabores);

    let request = await api.post('bolo', newForm);

    if(!!request.data)
      return alert("Dados cadastrados com sucesso!");
  }

  return (
    <>
      <Header buscarId="buscar"/>
      <Body>
        <Formulario image={ true } onSubmit={ handleSubmit } >
          <p>
              <label for="nome">Nome do bolo:</label>
              <input type="text" id="nome" name="nome" placeholder="Defina o nome do bolo" />
          </p>
          <p>
              <label for="quantidade">Quantidade:</label>
              <input type="number" id="quantidade" name="quantidade" placeholder="Informe a quantidade em estoque" />
          </p>
          <p>
              <label for="descricao">Descrição do produto:</label>
              <textarea id="descricao" name="descricao" placeholder="Descreva o bolo"></textarea>
          </p>

          { sabores[0] &&
            <fieldset className="sabores">
              <legend style={{backgroundColor: '#ccc'}}>Escolha os sabores</legend>
              {sabores.map(element => (
                <label>
                  <input key={element.id} type="checkbox" name="s" value={element.id} />
                  <span>{element.nome}</span>
                </label>
              ))}
            </fieldset>
          }

          <p>
              <button>Cadastrar</button>
          </p>
        </Formulario>
      </Body>
    </>
  );
}

export default Bolo;
