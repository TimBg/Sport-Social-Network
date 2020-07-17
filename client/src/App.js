import React from 'react';
import Footer from './Components/Foot/FootContainer';
import Header from './Components/Head/HeadContainer';
import {Provider} from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom';
import AuthPage from './pages/AuthPage';
import s from './App.module.css';

function App(props) {
  const isAuthenticated = false;

  if(isAuthenticated) {
    return (
      <div className={s.global__field_1}>
        <BrowserRouter>
          <div className={s.body__content_1}>
            <Route path="/q" render = {() => (<h1>q</h1>)} />
            <Route path="/w" render = {() => (<div>w</div>)} />
            <Route path="/e/:id" render = {() => (<div>e</div>)} />
          </div>  
        </BrowserRouter>
      </div>  
    );
  }

  return (
    <div className={s.global__field_2}>
      <BrowserRouter>
        <Provider store={props.store}>
          <Header store={props.store} />
          <div className={s.body__content_2}>
            <Route path="/" render = {() => <AuthPage />} />
          </div>
          <Footer store={props.store} />
        </Provider>
      </BrowserRouter>
    </div>  
  );
}

export default App;
