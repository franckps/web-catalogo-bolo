import React, { useState } from 'react'
import './styles.css'

function Detalhes({ children, onClose, header, open }) {
    const [ opened, setOpened ] = useState(open === false? false : true);

    function close() {
        setOpened(false)
    }
    /* function open() {
        setOpened(true)
    } */

    return (
        <>
            <div className="detalhes" style={{display: opened? 'flex' : 'none' }}>
                <div className="cabecalho">
                <h1>{ header? header : 'Detalhes' }</h1>
                <button onClick={onClose? onClose : () => {close()}} >X</button>
                </div>
                <div className="corpo">
                    { children &&  (children) }
                </div>
            </div>
        </>
    )
}

export default Detalhes