import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import './styles.css'

import logo from '../../icones/logo.png'
import find from '../../icones/find.png'
import facebook from '../../icones/facebook.png'

function Header(props) {
    const [openedMenu, setOpenedMenu] = useState(false)
    return (
        <header className="header">
            <p className="top">
                <span>ENCOMENDAS: (89) 99440-3502</span>
                <span>
                    {!!props.buscarId && <a href={`#${props.buscarId}`}><img src={find} alt="icone buscar" /></a>}
                    <a href="http://fb.com"><img src={facebook} alt="icone facebook" /></a>
                </span>
            </p>

            <ul className="menu">
                <li><Link to="/sabores">SABORES</Link></li>
                <li><Link to="/sobre">SOBRE</Link></li>
                <li className="logo"><Link to="/"><img src={logo} alt="logo" /></Link></li>
                <li><Link to="/contato">CONTATO</Link></li>
                <li><Link to="/fidelizese">FIDELIZE-SE</Link></li>
            </ul>

            <div className={openedMenu? 'menu-mobile opened' : 'menu-mobile'}>
                <div className="logo"><Link to="/"><img src={logo} alt="logo" /></Link></div>
                <div className="sandwich-icon" onClick={() => setOpenedMenu(!openedMenu)}><span></span><span></span><span></span></div>
                <ul>
                    <li><Link to="/sabores">SABORES</Link></li>
                    <li><Link to="/sobre">SOBRE</Link></li>
                    <li><Link to="/contato">CONTATO</Link></li>
                    <li><Link to="/fidelizese">FIDELIZE-SE</Link></li>
                </ul>
            </div>

            { props.imagem &&
                <div className="bottom">
                    <div className="imagem-fundo" style={{backgroundImage: `url(${props.imagem})`}}></div>
                </div>
            }
      </header>
    );
}

export default Header