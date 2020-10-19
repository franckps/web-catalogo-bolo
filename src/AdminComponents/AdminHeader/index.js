import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getProfile, getId } from '../../services/auth'

import './styles.css'

import api from '../../services/api'

import logo from '../../icones/logo.png'

function Header(props) {
    const [openedMenu, setOpenedMenu] = useState(false)
    const [quantidadeMensagens, setQuantidadeMensagens] = useState(0);

    async function buscaMensagem() {
        const requestMensagem = await api.get('mensagem');
        if(typeof requestMensagem.data === 'object'){
            let quant = 0
            requestMensagem.data.forEach(element => { if(element.status === 'A') quant++; })
            setQuantidadeMensagens(quant)
        }else {
            console.log('Erouuuuuu!')
        }
    }

    useEffect(function(){
        buscaMensagem();
    },[]);
    
    return (
        <header className="header">
            <ul className="menu">
                <li className="logo"><Link to="/"><img src={logo} alt="logo" /></Link></li>
                <li><Link to="/admin/usuarios">USUARIOS</Link></li>
                <li><Link to="/admin/bolos">BOLOS</Link></li>
                <li><Link to="/admin/mensagem">MENSAGENS
                {(quantidadeMensagens > 0) &&
                    <span style={{marginBottom: '5px', lineHeight:'20px', float: 'right', fontSize: '1rem', height: '20px', width: '20px', textAlign: 'center', backgroundColor: '#f22', borderRadius: '50%'}}>
                        { quantidadeMensagens }
                    </span>
                }
                </Link></li>
                <li><Link to="/admin/sugestao">SUGESTÕES</Link></li>
                <li>
                    <details>
                        <summary>{ getProfile() }</summary>
                        <section>
                            <Link to={`/admin/usuario/${ getId() }`}>Alterar Senha</Link>
                            <Link to="/logout">Sair</Link>
                        </section>
                    </details>
                </li>
            </ul>

            <div className={openedMenu? 'menu-mobile opened' : 'menu-mobile'}>
                <div className="logo"><Link to="/"><img src={logo} alt="logo" /></Link></div>
                <div className="sandwich-icon" onClick={() => setOpenedMenu(!openedMenu)}><span></span><span></span><span></span></div>
                <ul>
                    <li><Link to="/admin/usuarios">USUARIOS</Link></li>
                    <li><Link to="/admin/bolos">BOLOS</Link></li>
                    <li><Link to="/admin/mensagem">MENSAGENS
                    {(quantidadeMensagens > 0) &&
                        <span style={{display:'inline-block', marginBottom: '5px', lineHeight:'20px', fontSize: '1rem', height: '20px', width: '20px', textAlign: 'center', backgroundColor: '#f22', borderRadius: '50%'}}>
                            { quantidadeMensagens }
                        </span>
                    }
                    </Link></li>
                    <li><Link to="/fidelizese">SUGESTÕES</Link></li>
                    <li>
                        <details>
                            <summary>{ getProfile() }</summary>
                            <section>
                                <Link to={`/admin/usuario/${ getId() }`}>Alterar Senha</Link>
                                <Link to="/logout">Sair</Link>
                            </section>
                        </details>
                    </li>
                </ul>
            </div>
      </header>
    );
}

export default Header