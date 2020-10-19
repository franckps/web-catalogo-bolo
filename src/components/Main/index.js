import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

import api from '../../services/api'

import bolosImage from '../../icones/bolos.jpg'

import Header from '../../components/Header'
import Body from '../../components/Body'

function Main() {
  
  const [bolos, setBolos] = useState([{}]);

  const [bolosFiltrados, setBolosFiltrados] = useState([{}]);

  async function buscaBolos() {
    const requestBolos = await api.get('bolo');
    if(typeof requestBolos.data == 'object'){
      setBolos(requestBolos.data);
      setBolosFiltrados(requestBolos.data);
    }
  }

  async function buscaBoloPorNome(event) {
    event = event? event : window.event;
    let valorDigitado = event.target.value;

    if(!!valorDigitado) {
      const requestBolos = await api.get('bolo?nome=' + valorDigitado);
      if(typeof requestBolos.data == 'object'){
        setBolosFiltrados(requestBolos.data);
      }
    }
  }

  useEffect(function(){
    buscaBolos()
  },[]);

  return (
    <>
      <Header imagem={bolosImage} buscarId="buscar"/>

      <Body>
        <h1>Os melhores e mais tradicionais bolos. Você vai provar e amar 
          os nossos mais variados sabores. Bom apetite!</h1>
        { bolos.map(element => {
          return (
            <Link  key={element.id} to={`/bolo/${element.id}`} className="bolo-item">
                <div className="imagem">
                  <img src={element.imagem} alt={element.nome} style={{display: "inline-block", height: '100%'}} />
                </div>
                <div className="nome">
                  <p>{element.nome}</p>
                </div>
                <div className="descricao">
                  <p>
                    {element.descricao}
                  </p>
                </div>
            </Link>
        )})}

        <p>Encontre o bolo que você está procurando</p>

        <div className="bolos-filtrados">

          <p>
            Procure pelo nome <input id="buscar" placeholder="nome" onKeyUp={buscaBoloPorNome} />
          </p>

          { bolosFiltrados.map(element => {
          return (
            <Link  key={element.id} to={`/bolo/${element.id}`} className="bolo-item">
              <div className="imagem">
                <img src={element.imagem}  alt={element.nome} style={{display: "inline-block", height: '100%'}} />
              </div>
              <div className="nome">
                <p>{element.nome}</p>
              </div>
            </Link>
          )})}
        </div>
      </Body>
    </>
  );
}

export default Main;
