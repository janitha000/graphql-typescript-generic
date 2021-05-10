import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Vehicles from './Components/Vehicles';
import Login from './Components/Login/Login'
import { UserContextProvider } from './Contexts/UserContext';

ReactDOM.render(
  <React.StrictMode>
    <UserContextProvider>
      <BrowserRouter>
        <Switch>
          <Route path='/vehicles' component={Vehicles} />
          <Route path='/login' component={Login} />
          <Route path='/' component={App} />
        </Switch>
      </BrowserRouter>
    </UserContextProvider>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
