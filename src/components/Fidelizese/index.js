import React from 'react'

import { Link } from 'react-router-dom'

import Header from '../Header'
import Body from '../Body'

import cartaoFidelidade from '../../icones/Cartão fidelidade.png'

import './styles.css'

function Fidelizese() {

    return (
        <>
            <Header/>
            <Body>
                <h1>Adquira o seu cartão Fidelidade</h1>
                <div className="imagem">
                    <img src={cartaoFidelidade} alt="Cartão fidelidade" />
                </div>
                <p>
                    Com o nosso cartão fidelidade você ganha brindes incríveis a cada 10 (dez) <br />
                    compras realizadas. Não perca a chance de conseguir benefícios comprando <br />
                    bolos deliciosos e super baratos.<br />
                    Para conseguir o seu cartão fidelidade: vá até o nosso <Link to="contato" style={{fontSize: '1.4rem'}}>endereço</Link> ou<br /> 
                    <Link to="contato" style={{fontSize: '1.4rem'}}>entre em contato</Link> conosco e faça o pedido. 
                </p>
            </Body>
        </>
    )
}

export default Fidelizese