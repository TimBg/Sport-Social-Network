import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom';

import Footer from './Components/Foot/FootContainer';
import Header from './Components/Head/HeadContainer';
import AuthPage from './pages/Auth/AuthPage';
import LoginPage from './pages/Auth/LoginPage';
import AboutUsContainer from './pages/AboutUs/AboutUsContainer';
import FAQContainer from './pages/FAQ/FAQContainer';
import NewsContainer from './pages/News/NewsContainer';
import MainUserContainer from './pages/MainUser/MainUserContainer';
import {AuthContext} from './context/AuthContext';
import {useAuth} from './hooks/auth.hook';

import s from './App.module.css';
import 'materialize-css';

function App(props) {
  const {token, login, logout, userId} = useAuth();
  const isAuthenticated = !!token;

  if(isAuthenticated) {
    return (
      <div className={s.global__field_1}>
        <BrowserRouter>
        <AuthContext.Provider value ={{token, login, logout, userId}}>
          <div className={s.body__content_1}>
            <Route path="/" render = {() => (<MainUserContainer logoutAttr={logout} store={props.store}/>)} />
            <Route path="/w" render = {() => (<div>w</div>)} />
            <Route path="/e" render = {() => (<div>e</div>)} />
          </div>
          </AuthContext.Provider> 
        </BrowserRouter>
      </div>  
    );
  }

  return (
    <div className={s.global__field_2}>
      <BrowserRouter>
        <AuthContext.Provider value ={{token, login, logout, userId}}>
        <Provider store={props.store}>
          <Header store={props.store} />
          <div className={s.body__content_2}>
            <Route path="/" exact render = {() => <AuthPage />} />
            <Route path="/about" render = {() => <AboutUsContainer />} />
            <Route path="/faq" render = {() => <FAQContainer />} />
            <Route path="/news" render = {() => <NewsContainer store={props.store} />}/>
            <Route path="/log" exact render = {() => <LoginPage />} />
            <Route path="/reg" exact render = {() => <AuthPage />} />
          </div>
          <Footer store={props.store} />
        </Provider>
        </AuthContext.Provider>
      </BrowserRouter>
    </div>  
  );
}

export default App;
