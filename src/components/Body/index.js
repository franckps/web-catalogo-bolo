import React from 'react'
import './styles.css'

import api from '../../services/api'

function Body(props) {
    async function handleSubmit(event) {
        event = event? event : window.event;
        event.preventDefault();

        let sugestao = document.getElementById('sugestao').value;

        if(!sugestao)
            return alert('Deve ser escrita alguma sugestão');

        await api.post('sugestao', { sugestao });

        alert("A sugestão foi enviada com sucesso!");

    }

    return (
        <>
            <main className="main">
               { props.children &&  (props.children) }
            </main>

            <footer className="footer" style={{ height: 'auto', padding: '10px 5px' }}>
                <div style={{ width: '100%', maxWidth: '720px', textAlign: 'center' }}>
                    <label htmlFor="sugestao">
                        Deixe sua sugestão para melhorar o nosso trabalho
                        e entregar o melhor possível a você e a todos os nossos clientes
                    </label>
                    <p className="contato-form" style={{width: '100%', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center'}}>
                        <input style={{ flex: '1', padding: '10px', marginBottom: '10px' }} type="text" name="sugestao" id="sugestao" placeholder="Escreva sua sugestão" />
                        <button style={{ padding: '10px', marginBottom: '10px', cursor: 'pointer'  }} type="button" onClick={handleSubmit}>Enviar</button>
                    </p>
                </div>
                <p style={{textAlign: 'center'}}>
                    KP BOLOS | TODOS OS DIREITOS RESERVADOS | 2020
                </p>
            </footer>
        </>
    )
}

export default Body