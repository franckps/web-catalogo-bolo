import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import './App.css';

import Auth, { logout } from './services/auth'

import Main from './components/Main'
import Sabores from './components/Sabores'
import Contato from './components/Contato'
import Fidelizese from './components/Fidelizese'
import Sobre from './components/Sobre'
import Bolo from './components/Bolo'
import Login from './components/Login'

import AdminMain from './AdminComponents/AdminMain'
import Mensagem from './AdminComponents/Mensagem'
import Sugestao from './AdminComponents/Sugestao'
import AdminBolo from './AdminComponents/AdminBolo'
import AdminUpdateBolo from './AdminComponents/AdminUpdateBolo'
import AdminBolos from './AdminComponents/AdminBolos'
import AdminUsuario from './AdminComponents/AdminUsuario'
import AdminUpdateUsuario from './AdminComponents/AdminUpdateUsuario'
import AdminUsuarios from './AdminComponents/AdminUsuarios'

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route 
    {...rest}
    render={props => 
      !!Auth() ?
      ( <Component {...props} /> ) :
      ( <Redirect to={{ pathname: '/login', state: { from: props.location } }} /> )
    }
  />
);

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" component={ Main } exact={ true } />
          <Route path="/sabores" component={ Sabores } />
          <Route path="/contato" component={ Contato } />
          <Route path="/fidelizese" component={ Fidelizese } />
          <Route path="/sobre" component={ Sobre } />
          <Route path="/bolo/:id?" component={ Bolo } />

          <Route path="/login" component={ Login } />
          <Route path="/logout" component={ () => {
            logout();
            return ( <Redirect to="/login" /> )
          } } />

          <PrivateRoute path="/admin" component={ AdminMain } exact={ true } />
          <PrivateRoute path="/admin/mensagem" component={ Mensagem } />
          <PrivateRoute path="/admin/sugestao" component={ Sugestao } />
          <PrivateRoute path="/admin/bolos" component={ AdminBolos } exact={ true } />
          <PrivateRoute path="/admin/bolo" component={ AdminBolo } exact={ true } />
          <PrivateRoute path="/admin/bolo/:id?" component={ AdminUpdateBolo } />
          <PrivateRoute path="/admin/usuario" component={ AdminUsuario } exact={ true } />
          <PrivateRoute path="/admin/usuario/:id" component={ AdminUpdateUsuario } />
          <PrivateRoute path="/admin/usuarios" component={ AdminUsuarios } exact={ true } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
