import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom';

import Footer from './Components/Foot/FootContainer';
import Header from './Components/Head/HeadContainer';
import MainPage from './pages/MainPage/MainPage';
import AuthPage from './pages/Auth/AuthPage';
import LoginPage from './pages/Auth/LoginPage';
import AboutUsContainer from './pages/AboutUs/AboutUsContainer';
import FAQContainer from './pages/FAQ/FAQContainer';
import NewsContainer from './pages/News/NewsContainer';
import MainUserContainer from './pages/MainUser/MainUserContainer';
import NewsExemplarContainer from './Components/NewsExemplar/NewsExemplarContainer';
import {AuthContext} from './context/AuthContext';
import {useAuth} from './hooks/auth.hook';
import {StoreWrapperType} from './redux/store';

import cn from 'classnames';
import s from './App.module.css';


const App: React.FC<StoreWrapperType> = ({store}): JSX.Element => {
  const {token, login, logout, userId} = useAuth();
  const isAuthenticated : boolean = !!token;

  if(isAuthenticated) {
    return (
      <div className={cn(s.global, s.global_user)}>
        <BrowserRouter>
        <AuthContext.Provider value={{token, login, logout, userId}}>
          <Header logoutAttr={logout} isAuth={true} />
          <div className={cn(s.global__body, s.global__body_first)}>
            <Route path="/user/:id" render = {() => (<MainUserContainer />)} />
            <Route path="/w" render = {() => (<div>w</div>)} />
            <Route path="/e" render = {() => (<div>e</div>)} />
          </div>
          <Footer  />
        </AuthContext.Provider> 
        </BrowserRouter>
      </div>  
    );
  }

  return (
    <div className={cn(s.global, s.global_visitor)}>
      <BrowserRouter>
        <AuthContext.Provider value ={{token, login, logout, userId}}>
        <Provider store={store}>
          <Header isAuth={false} />
          <div className={cn(s.global__body, s.global__body_second)}>
            <Route path="/" exact render = {() => <MainPage />} />
            <Route path="/about" exact render = {() => <AboutUsContainer />} />
            <Route path="/faq" exact render = {() => <FAQContainer />} />
            <Route path="/news" exact render = {() => <NewsContainer />}/>
            <Route path="/log" exact render = {() => <LoginPage />} />
            <Route path="/reg" exact render = {() => <AuthPage />} />
            <Route path="/news/:id" exact render = {() => <NewsExemplarContainer />} />
          </div>
          <Footer />
        </Provider>
        </AuthContext.Provider>
      </BrowserRouter>
    </div>  
  );
}

export default App;
