import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

import api from '../../services/api'

import Header from '../AdminHeader'
import Body from '../AdminBody'

import update from '../../icones/update.png'

function AdminBolos() {
  const [bolos, setBolos] = useState([]);

  async function buscaBolos() {
    const requestBolos = await api.get('bolo');
    if(typeof requestBolos.data == 'object'){
      setBolos(requestBolos.data);
    }else {
      console.log('Erouuuuuu!')
    }
  }

  useEffect(function(){
    buscaBolos();
  },[]);

  return (
    <>
      <Header buscarId="buscar"/>
      <Body>
      <Link to="/admin/bolo" style={{textDecoration: 'none', padding: '10px', backgroundColor: '#060', height: '35px', color: '#fff', borderRadius: '2px'}}>Novo bolo</Link>
        <div className="table-container">
          <table>
              <thead>
                  <tr>
                      <th></th>
                      <th className="identify">ID</th>
                      <th>NOME</th>
                      <th>QUANT.</th>
                      <th>PREÇO</th>
                      <th></th>
                  </tr>
              </thead>
              <tbody>
                {
                  bolos.map(element => (
                    <tr key={element.id}>
                      <th><img className="image" src={element.imagem} alt={ element.nome } /></th>
                      <td className="identify">{ element.id }</td>
                      <td>{ element.nome }</td>
                      <td>{ element.quantidade }</td>
                      <td>R$ { parseFloat(element.preco).toFixed(2).replace('.',',') }</td>
                      <td><Link to={`/admin/bolo/${element.id}`}><img src={update} alt="Atualizar" /></Link></td>
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

export default AdminBolos;
