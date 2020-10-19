import React, {useState, useEffect} from 'react'

import { Link } from 'react-router-dom'

import Header from '../../components/Header'
import Body from '../../components/Body'

import api from '../../services/api'

import './styles.css'

function Sabores() {
    const [bolosFiltrados, setBolosFiltrados] = useState([]);
    const [sabores, setSabores] = useState([]);

    async function buscaSabores() {
        const requestSabores = await api.get('sabor');
        if(typeof requestSabores.data == 'object'){
          setSabores(requestSabores.data);
        }
    }
  
    async function buscaBoloPorSabor(event) {
      event = event? event : window.event;

      let formulario = document.getElementById('formulario-sabores')

      let sabores = [];

       if(!!formulario.sabores) {
            if(!!formulario.sabores.value)
                sabores = [formulario.sabores.value];
            else {
                let arrayAux = [...formulario.sabores];
                arrayAux.forEach(element => {
                    if(!!element.checked)
                        sabores.push(element.value)
                })
            }
       }

      const valores = sabores.join(',');
  
      if(!!valores) {
          console.log(valores)
        const requestBolos = await api.get('bolo?caracteristicas=' + valores);
        if(typeof requestBolos.data == 'object'){
          setBolosFiltrados(requestBolos.data);
        }
      } else
        setBolosFiltrados([]);
    }
  
    useEffect(function(){
        buscaSabores();
    },[]);

    return (
        <>
            <Header/>
            <Body>
                <p>
                    Escolha seus sabores preferidos
                </p>
            <form id="formulario-sabores">
            { sabores.map(element => {
                    return (
                        <div  key={element.id} className="item-sabor">
                            <label>
                                <input type="checkbox" name="sabores" value={element.id} onChange={buscaBoloPorSabor} />
                                <span>{ element.nome }</span>
                            </label>
                        </div>
            )})}
            </form>
            
            { bolosFiltrados.map(element => {
                    return (
                        <Link key={element.id} to={`/bolo/${element.id}`} className="bolo-item">
                            <div className="imagem">
                                <img src={element.imagem}  alt={element.nome} style={{display: "inline-block", height: '100%'}} />
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
            </Body>
        </>
    )
}

export default Sabores