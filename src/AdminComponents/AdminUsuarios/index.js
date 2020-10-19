import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

import api from '../../services/api'

import Header from '../AdminHeader'
import Body from '../AdminBody'

function AdminUsuarios() {
  const [usuarios, setUsuarios] = useState([]);

  async function buscaUsuarios() {
    const requestUsuarios = await api.get('usuario');
    if(typeof requestUsuarios.data == 'object'){
      setUsuarios(requestUsuarios.data);
    }else {
      console.log('Erouuuuuu!')
    }
  }

  useEffect(function(){
    buscaUsuarios();
  },[]);

  return (
    <>
      <Header buscarId="buscar"/>
      <Body>
        <Link to="/admin/usuario" style={{textDecoration: 'none', padding: '10px', backgroundColor: '#060', height: '35px', color: '#fff', borderRadius: '2px'}}>Novo usuário</Link>
        <div className="table-container">
          <table>
              <thead>
                  <tr>
                      <th className="identify" style={{paddingLeft: '15px'}}>ID</th>
                      <th>NOME</th>
                      <th>LOGIN</th>
                  </tr>
              </thead>
              <tbody>
                {
                  usuarios.map(element => (
                    <tr key={element.id}>
                      <td className="identify" style={{paddingLeft: '15px'}}>{ element.id }</td>
                      <td>{ element.nome }</td>
                      <td>{ element.login }</td>
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

export default AdminUsuarios;
