import React from 'react'

import Header from '../Header'
import Body from '../Body'

import './styles.css'

function Sobre() {

    return (
        <>
            <Header/>
            <Body>
                <div className="sobre">
                    <h1>Um pouco da história da KP BOLOS</h1>
                    <p>
                        A iniciativa KP BOLOS surgiu da atual necessidade de se empreender,
                        e busca de estar ainda mais inserido no mundo virtual. Essa necessidade
                        já existe há muito tempo, más se tornou muito mais evidente no momento
                        em que surgiu esse empreendimento: devido ao mal que se alastrou pelo mundo
                        no início do ano de 2020, e forçou muitas empresas a migrarem para o meio
                        digital.
                    </p>
                    <p>
                        Devido a essa mudança, criamos a KP BOLOS para levarmos esse produto tão
                        tradicional na mesa brasileira, que é o nosso querido e amado bolo. Ele que
                        está presente em vários momentos da nossa vida: nas comemorações de aniversário
                        e casamento; no café da manhã, no lanche da tarde, etc. E como diz o ditado:
                        "Se você não vem até o bolo, o bolo vai até você", por isso decidimos ajudar
                        a quem não pode ou não quer sair de casa para poder comprar bolo. 
                    </p>
                    <p>
                        Para isso nás entregamos bolo na sua casa. Use essa plataforma para já ter
                        uma idéia do que você deseja pedir e utilize o telefone disponível acima 
                        para realizar o seu pedido, e bom apetite! Aproveite nossas receitas. 
                    </p>
                </div>
            </Body>
        </>
    )
}

export default Sobre