import React, {useState, useEffect, useContext} from 'react';
import s from './../pages/Auth/Auth.module.css';
import q from './../pages/AboutUs/AboutUs.module.css';
import {useHttp} from './../hooks/http.hook';
import {useMessage} from './../hooks/message.hook';
import {AuthContext} from './../context/AuthContext';
import cn from 'classnames';

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
            <div className={cn(q["row-wrapper"], s["row-wrapper_auth"])}>
                <div className={cn(q["row-wrapper__col"], q["row-wrapper__col_s12"], q["row-wrapper__col_m8"])}>
                    <div className={cn(s["row-wrapper__card"], s["row-wrapper__card_blue-grey"])}>
                        <div className={cn(q["row-wrapper__card-content"], q["row-wrapper__card-content_white-text"])}>
                            <span className={q["row-wrapper__card-title"]}>{nameOfProcess}</span>
                            <div>
                                <div className={s["row-wrapper__input-field"]}>
                                    <input 
                                        placeholder="Enter email address" 
                                        id="email" 
                                        type="text" 
                                        name="email" 
                                        onChange={changeHandler}
                                        />
                                    <label htmlFor="email"></label>
                                </div>
                                <div className={s["row-wrapper__input-field"]}>
                                    <input 
                                        placeholder="Enter password" 
                                        id="password"
                                        type="password" 
                                        name="password" 
                                        onChange={changeHandler}
                                        />
                                    <label htmlFor="email"></label>
                                </div>
                            </div>
                        </div>
                        <div className={s["row-wrapper__card-action"]}>
                            <button 
                                className={cn(
                                                s["row-wrapper__btn"], 
                                                s["row-wrapper__btn_grey-lighten-1"], 
                                                s["row-wrapper__btn_wrapper"]
                                )} 
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