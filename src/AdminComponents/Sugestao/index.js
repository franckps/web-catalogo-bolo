import React, { useEffect, useState } from 'react';

import './styles.css';

import api from '../../services/api'

import bolosImage from '../../icones/bolos.jpg'

import Header from '../AdminHeader'
import Body from '../AdminBody'

function Sugestao() {
  const [sugestao, setSugestao] = useState([]);

  async function buscaSugestao() {
    const requestSugestao = await api.get('sugestao');
    if(typeof requestSugestao.data == 'object'){
      setSugestao(requestSugestao.data);
      console.log('requestSugestao.data', requestSugestao.data)
    }else {
      console.log('Erouuuuuu!')
    }
  }

  useEffect(function(){
    buscaSugestao();
  },[]);

  return (
    <>
      <Header imagem={bolosImage} buscarId="buscar"/>
      <Body>
        <div className="table-container">
          <table>
              <thead>
                  <tr>
                      <th style={{paddingLeft: '10px'}}>SUGESTÃO</th>
                      <th>DATA</th>
                  </tr>
              </thead>
              <tbody>
                {
                  sugestao.map(element => (
                    <tr key={element.id}>
                      <td style={{paddingLeft: '10px'}}>{ element.sugestao }</td>
                      <td>
                        {
                            `${ element.data_hora.trim().split(' ')[0].split('-')[2] }/${ element.data_hora.trim().split(' ')[0].split('-')[1] }/${ element.data_hora.trim().split(' ')[0].split('-')[0] } - ${ element.data_hora.trim().split(' ')[1] }`
                        }
                      </td>
                    </tr>
                  ))
                }
              </tbody>
          </table>
        </div>
      </Body>
    </>
  );
}

export default Sugestao;
