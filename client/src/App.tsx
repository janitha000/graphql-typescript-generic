import React, { Suspense, useCallback, useContext, useEffect, useRef, useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import { QueryClient, QueryClientProvider } from 'react-query'


import { UserContext, UserContextProvider } from './Contexts/UserContext';
import UseEventHandler from './Hooks/useEventListener';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import Vehicles from './Components/Vehicles';
import Login from './Components/Login/Login'
import HooksExample from './Components/HooksExample/HooksExample';
import Count from './Components/Count/Count';
import Spotify from './Components/Spotify/Spotify';
import SpotifyLoginCallback from './Components/Spotify/Login/SpotifyLoginCallback';
import TODO from './Components/ToDo/ToDo';
import Home from './Components/Home/Home';
import GraphQLVehicles from './Components/GraphQL-Vehicle/GraphQLVehicles';

const ManufacturerComponent = React.lazy(() => import('./Components/VehicleManufacturer/VehicleManufacturer'));
const Converter = React.lazy(() => import('./Components/Converter/Converter'));
const BirthDay = React.lazy(() => import('./Components/BirthDay/BirthDay'));
const Profile = React.lazy(() => import('./Components/Profile/Home'));
// const GVehicle = React.lazy(() => import('./Components/GraphQL-Vehicle/GraphQLVehicles'))

const queryClient = new QueryClient()


const App: React.FC = (): JSX.Element => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <UserContextProvider>
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
              <Route path='/gvehicles' component={GraphQLVehicles} />
              <Route path='/birthday' component={BirthDay} />
              <Route path='/profile' component={Profile} />
              <Route path='/' component={Home} />
            </Switch>
          </Suspense>
        </UserContextProvider>
      </BrowserRouter>
    </QueryClientProvider>

  );
}

export default App;


