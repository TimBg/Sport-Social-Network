import React from 'react';
import Footer from './Components/Foot/FootContainer';
import {Provider} from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom';
import AuthPage from './pages/AuthPage';
import s from './App.module.css';

function App(props) {
  const isAuthenticated = false;

  if(isAuthenticated) {
    return (
      <BrowserRouter>
        <Route path="/q" exact>
          <h1>q</h1>
        </Route>
        <Route path="/w" render = {() => (<div></div>)} />
        <Route path="/e/:id" render = {() => (<div></div>)} />
      </BrowserRouter>
    );
  }

  return (
    <div>
      <BrowserRouter>
        <Provider store={props.store}>
          <Route path="/" render = {() => <AuthPage />} />
          <Footer store={props.store} />
        </Provider>
      </BrowserRouter>
    </div>  
  );
}

export default App;
