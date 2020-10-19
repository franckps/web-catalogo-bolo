import React from 'react';

import './styles.css';

import bolosImage from '../../icones/bolos.jpg'

import Header from '../AdminHeader'
import Body from '../AdminBody'

function Main() {
  return (
    <>
      <Header imagem={bolosImage} buscarId="buscar"/>
      <Body>
        <p></p>
      </Body>
    </>
  );
}

export default Main;
