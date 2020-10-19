import React from 'react'

import L from 'leaflet'

import { Map, TileLayer, Marker } from 'react-leaflet'

import Header from '../Header'
import Body from '../Body'

import api from '../../services/api'

import logo from '../../icones/logo.png'

import 'leaflet/dist/leaflet.css'

import './styles.css'

L.Icon.Default.imagePath = `https://unpkg.com/leaflet@1.5.0/dist/images/`

function Contato() {
    async function handleSubmit(event) {
        event = event? event : window.event;

        event.preventDefault();

        let formulario = event.target;

        let { nome, email, assunto, mensagem } = formulario;

        nome = nome.value; email = email.value; assunto = assunto.value; mensagem = mensagem.value;

        if(!nome || !email || !assunto || !mensagem)
            return alert('Todos os campos devem ser preenchidos para que sua menságem seja enviada!');

        await api.post('mensagem', { nome, email, assunto, mensagem });

        alert("A menságem foi enviada com sucesso!");

    }

    return (
        <>
            <Header/>
            <Body>
                <form className="styled-form" style={{maxWidth: '400px'}} onSubmit={handleSubmit}>
                    <fieldset className="form-container">
                        <legend>Mande-nos uma menságem</legend>
                        <p>
                            <label for="nome">Nome</label>
                            <input name="nome" id="nome" placeholder="nome" />
                        </p>
                        <p>
                            <label for="email">E-mail</label>
                            <input name="email" id="email" type="email" placeholder="e-mail" />
                        </p>
                        <p>
                            <label for="assunto">Assunto</label>
                            <input name="assunto" id="assunto" placeholder="assunto" />
                        </p>
                        <p>
                            <label for="mensagem">Mensagem</label>
                            <textarea name="mensagem" id="mensagem" placeholder="mensagem"></textarea>
                        </p>

                        <p>
                            <button type="submit">Enviar</button>
                        </p>
                        
                    </fieldset>
                </form>

                <Map 
                center={[-6.7792787,-43.0068287]} 
                zoom={15}
                style={{ flex: '1', marginTop: '20px', maxWidth: '90vw', minWidth:'250px', minHeight:'250px', borderRadius: '15px', overflow: 'hidden', border: '1px solid #333350' }} 
                >
                    <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />

                    <Marker position={[-6.7792787,-43.0068287]} />
                </Map>  
                <p>Estamos localizadas na cidade de Floriano - Piauí na Avenida Bucar Neto número 2118 cep: 64804-430</p>
            </Body>
        </>
    )
}

export default Contato