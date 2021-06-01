import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Vehicles from './Components/Vehicles';
import Login from './Components/Login/Login'
import { UserContextProvider } from './Contexts/UserContext';
import HooksExample from './Components/HooksExample/HooksExample';
import Count from './Components/Count/Count';
import Spotify from './Components/Spotify/Spotify';
import SpotifyLoginCallback from './Components/Spotify/Login/SpotifyLoginCallback';
import TODO from './Components/ToDo/ToDo';

const ManufacturerComponent = React.lazy(() => import('./Components/VehicleManufacturer/VehicleManufacturer'));
const Converter = React.lazy(() => import('./Components/Converter/Converter'));


ReactDOM.render(
  <React.StrictMode>
    <UserContextProvider>
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route path='/vehicles' component={Vehicles} />
            <Route path='/login' component={Login} />
            <Route path='/man' component={ManufacturerComponent} />
            <Route path='/hooks' component={HooksExample} />
            <Route path='/count' component={Count} />
            <Route path='/convert' component={Converter} />
            <Route path='/spotify' component={Spotify} />
            <Route path='/spotifycallback' component={SpotifyLoginCallback} />
            <Route path='/todo' component={TODO} />

            spotifycallback
            <Route path='/' component={App} />
          </Switch>
        </Suspense>

      </BrowserRouter>
    </UserContextProvider>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
