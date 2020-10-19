import React, {useState, useEffect} from 'react'

import Header from '../Header'
import Body from '../Body'

import api from '../../services/api'

import './styles.css'

function Bolo({ match }) {
    const [bolo, setBolo] = useState({})

    async function buscaBolo() {
        const requestBolos = await api.get(`bolo/${ match.params.id }`);
        if(typeof requestBolos.data == 'object'){
            setBolo(requestBolos.data);
        }
    }

    useEffect(() => {
        buscaBolo()
    })

    return (
        <>
            <Header/>
            <Body>
                {
                    !!bolo.id &&
                    <div className="bolo-container">
                        <div className="imagem">
                            <img src={bolo.imagem}  alt={bolo.nome}/>
                        </div>
                        <div className="nome">
                            <p>{bolo.nome}</p>
                        </div>
                        <div className="descricao">
                            <p>{bolo.descricao}</p>
                        </div>
                        <div className="sabores">
                            <p>Sabores: </p>
                            {
                                bolo.caracteristicas.map((element, key) => (
                                    <>{(key > 0) && <i>+</i>} <span>{element.nome}</span></>
                                ))
                            }
                        </div>
                        <div className="quantidade">
                            <p>Quantidade: <span>{bolo.quantidade}</span></p>
                        </div>
                        <div className="preco">
                            <p>Preço: R$ <span>{parseFloat(bolo.preco).toFixed(2).replace('.',',')}</span></p>
                        </div>
                    </div>
                }
            </Body>
        </>
    )
}

export default Bolo