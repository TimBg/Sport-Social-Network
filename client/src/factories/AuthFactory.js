import React, {useState, useEffect, useContext} from 'react';
import s from './../pages/Auth/Auth.module.css';
import {useHttp} from './../hooks/http.hook';
import {useMessage} from './../hooks/message.hook';
import {AuthContext} from './../context/AuthContext';

const AuthFactory = (urlPrefix, nameOfProcess, nameOfButton) => {
    return function AuthPage(props) {
        const message = useMessage();
        const auth = useContext(AuthContext);
        const {loading, request, error, clearError} = useHttp();
        const [form, setForm] = useState({
            email: '',
            password: ''
        });
    
        useEffect(() => {
            message(error);
            clearError();
        }, [error, message, clearError]);
    
        const changeHandler = event => {
            setForm({...form, [event.target.name]: event.target.value});
        }
    
        const logOrAuthHandler = async () => {
            try {
                const data = await request(urlPrefix, 'POST', {...form});
                if(urlPrefix === '/') {
                    message(data.message);
                } else {
                    auth.login(data.token, data.userId);
                }    
            } catch(e) {}
        }

        return (
            <div className={s["auth-wrapper"]}>
                <div className={s["auth-wrapper__child"]}>
                    <div className={s["auth-wrapper__head"]}>
                        <span className={s["auth-wrapper__title"]}>{nameOfProcess}</span>
                    </div>
                    <div className={s["auth-wrapper__input"]}>
                        <input 
                            placeholder="Enter email address" 
                            id="email" 
                            type="text" 
                            name="email" 
                            onChange={changeHandler}
                        />
                        <label htmlFor="email"></label>
                    </div>
                    <div className={s["auth-wrapper__input"]}>
                        <input 
                            placeholder="Enter password" 
                            id="password"
                            type="password" 
                            name="password" 
                            onChange={changeHandler}
                        />
                        <label htmlFor="email"></label>
                        <div>
                            <button 
                                className={s["auth-button"]} 
                                onClick={logOrAuthHandler}
                                disabled={loading}    
                            >{nameOfButton}</button>
                        </div>
                    </div>   
                </div> 
            </div>
        );
    }
}

export default AuthFactory;