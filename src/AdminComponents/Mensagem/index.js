import React, { useEffect, useState } from 'react';
import './styles.css';

import api from '../../services/api'

import bolosImage from '../../icones/bolos.jpg'

import Header from '../AdminHeader'
import Body from '../AdminBody'
import Detalhes from '../../components/Detalhes'

function Mensagem() {
  const [mensagem, setMensagem] = useState([]);
  const [detalhesMensagem, setDetalhesMensagem] = useState(null);

  async function detalharMensagem(id) {
    const mensagemEspecifica = mensagem.filter(element => element.id === id)
    if(mensagemEspecifica[0].status !== 'L'){
      await api.put(`mensagem/${id}`, {status: 'L'});
      const newMessage = mensagem.map(element => {
        if(element.id === id)
          return {...element, status: 'L'}
        return element
      } )
      setMensagem(newMessage);
      mensagemEspecifica[0].status = 'L'
    }
    setDetalhesMensagem(mensagemEspecifica[0]);
  }

  async function buscaMensagem() {
    const requestMensagem = await api.get('mensagem');
    if(typeof requestMensagem.data === 'object'){
      setMensagem(requestMensagem.data);
      console.log('requestMensagem.data', requestMensagem.data)
    }else {
      console.log('Erouuuuuu!')
    }
  }

  useEffect(function(){
    buscaMensagem();
  },[]);
  return (
    <>
      {detalhesMensagem &&
      <Detalhes header={detalhesMensagem.nome} open={ true } onClose={() => setDetalhesMensagem(null)}>
        <h1>Nome: {detalhesMensagem.nome}</h1>
        <h1>E-mail: {detalhesMensagem.email}</h1>
        <p>{detalhesMensagem.assunto}</p>
        <p>{detalhesMensagem.mensagem}</p>
        <p>
        {
            `${ detalhesMensagem.data_hora.trim().split(' ')[0].split('-')[2] }/${ detalhesMensagem.data_hora.trim().split(' ')[0].split('-')[1] }/${ detalhesMensagem.data_hora.trim().split(' ')[0].split('-')[0] } - ${ detalhesMensagem.data_hora.trim().split(' ')[1] }`
        }
        </p>
        <span>{(detalhesMensagem.status === 'A')? 'Não lida' : 'Lida'}</span>
      </Detalhes>
      }
      <Header imagem={bolosImage} buscarId="buscar"/>
      <Body>
        <div className="table-container">
          <table>
              <thead>
                  <tr>
                      <th></th>
                      <th className="identify">ID</th>
                      <th>NOME</th>
                      <th>ASSUNTO</th>
                      <th>DATA</th>
                  </tr>
              </thead>
              <tbody>
                {
                  mensagem.map(element => (
                    <tr key={element.id} onClick={ () => detalharMensagem( element.id ) } style={{ fontWeight: (element.status === 'A')? 'bold' : 'normal', cursor: 'pointer' }}>
                      <th>{ (element.status === 'A')? 'Não lida' : 'Lida' }</th>
                      <td className="identify">{ element.id }</td>
                      <td>{ element.nome }</td>
                      <td>{ element.assunto }</td>
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

export default Mensagem;
