import React, { useState, useEffect, useContext } from 'react';

import './../pages/Auth/Auth.css';
import { useHttp } from '../hooks/http.hook';
import { useMessage } from '../hooks/message.hook';
import { AuthContext } from './../context/AuthContext';

type ReturnAuthFactory = () => JSX.Element;

const AuthFactory = (urlPrefix: string, nameOfProcess: string, nameOfButton: string): ReturnAuthFactory => {
    return function AuthPage() {
        const message = useMessage();
        const auth = useContext(AuthContext);
        const { loading, request, error, clearError } = useHttp();
        const [form, setForm] = useState({
            email: '',
            password: ''
        });

        useEffect(() => {
            message(error);
            clearError();
        }, [error, message, clearError]);

        const changeHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
            setForm({ ...form, [event.target.name]: event.target.value });
        }

        const logOrAuthHandler = async () => {
            try {
                const data = await request(urlPrefix, 'POST', { ...form });
                if (urlPrefix === '/') {
                    message(data.message);
                } else {
                    auth.login(data.token!, data.userId!);
                }
            } catch (e) { }
        }

        return (
            <div className='row-wrapper row-wrapper_auth'>
                <div className='row-wrapper__col row-wrapper__col_s12 row-wrapper__col_m8'>
                    <div className='row-wrapper__card row-wrapper__card_blue-grey'>
                        <div className='row-wrapper__card-content row-wrapper__card-content_white-text'>
                            <span className='row-wrapper__card-title'>{nameOfProcess}</span>
                            <div>
                                <div className='row-wrapper__input-field'>
                                    <input
                                        placeholder='Enter email address'
                                        id='email'
                                        type='text'
                                        name='email'
                                        onChange={changeHandler}
                                        className='row-wrapper__input'
                                    />
                                    <label
                                        htmlFor='email'
                                        className='row-wrapper__label'
                                    ></label>
                                </div>
                                <div className='row-wrapper__input-field'>
                                    <input
                                        placeholder='Enter password'
                                        id='password'
                                        type='password'
                                        name='password'
                                        onChange={changeHandler}
                                        className='row-wrapper__input'
                                    />
                                    <label
                                        htmlFor='email'
                                        className='row-wrapper__label'
                                    ></label>
                                </div>
                            </div>
                        </div>
                        <div className='row-wrapper__card-action'>
                            <button
                                className='row-wrapper__btn row-wrapper__btn_wrapper'
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