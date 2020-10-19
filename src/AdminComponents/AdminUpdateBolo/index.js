import React, { useEffect, useState } from 'react';

import './styles.css';

import api from '../../services/api'

import Header from '../AdminHeader'
import Body from '../AdminBody'
import Formulario from '../../components/Formulario'

function UpdateBolo({ match }) {
  const [sabores, setSabores] = useState([])
  const [bolo, setBolo] = useState({})

  async function initializeSabores() {
    const request = await api.get('sabor');
    if(request.data){
        setSabores(request.data);
    }
  }

  useEffect(() => {
    api.get(`bolo/${ match.params.id }`).then(requestBolos => {
      if(!!requestBolos.data){
          setBolo(requestBolos.data);
          initializeSabores();
      }
    })
  })

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

    let request = await api.put(`bolo/${ match.params.id }`, newForm);

    if(!!request.data)
      return alert("Dados atualizados!");
  }

  return (
    <>
      <Header buscarId="buscar"/>
      <Body>
        {bolo &&
        <Formulario image={ true } onSubmit={ handleSubmit } imageURL={ bolo.imagem } >
          <p>
              <label for="nome">Nome do bolo:</label>
              <input type="text" id="nome" name="nome" placeholder="Defina o nome do bolo" value={bolo.nome} />
          </p>
          <p>
              <label for="quantidade">Quantidade:</label>
              <input type="number" id="quantidade" name="quantidade" placeholder="Informe a quantidade em estoque" value={bolo.quantidade} />
          </p>
          <p>
              <label for="descricao">Descrição do bolo:</label>
              <textarea id="descricao" name="descricao" placeholder="Descreva o bolo" value={bolo.descricao} ></textarea>
          </p>

          { sabores[0] &&
            <fieldset className="sabores">
              <legend style={{backgroundColor: '#ccc'}}>Escolha os sabores</legend>
              {sabores.map(element => (
                <label>
                  <input key={element.id} type="checkbox" name="s" value={element.id} { ...bolo.caracteristicas.map(elm => elm.id).includes(element.id)? {defaultChecked: true} : '' } />
                  <span>{element.nome}</span>
                </label>
              ))}
            </fieldset>
          }

          <p>
              <button>Cadastrar</button>
          </p>
        </Formulario>
        }
      </Body>
    </>
  );
}

export default UpdateBolo;
