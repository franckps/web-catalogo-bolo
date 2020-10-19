import React from 'react'
import './styles.css'

function Body(props) {
    return (
        <>
            <main className="main">
               { props.children &&  (props.children) }
            </main>

            <footer className="footer">
            </footer>
        </>
    )
}

export default Body