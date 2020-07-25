import React, {useState, useEffect} from 'react';
import s from './Auth.module.css';
import {useHttp} from './../../hooks/http.hook';
import {useMessage} from './../../hooks/message.hook';

export default function AuthPage(props) {
    const classOfFirstButton = 'btn gray darken-4 ' + s.auth__wrapper;
    const classOfSecondButton = 'btn gray lighten-1 ' + s.auth__wrapper;
    const classOfMotherDiv = 'row ' + s.row__wrapper;
    const message = useMessage();
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

    const registerHandler = async () => {
        try {
            const data = await request('/', 'POST', {...form});
            console.log('Data', data);
        } catch(e) {}
    }

    return (
        <div className={classOfMotherDiv}>
            <div className="col s6 offset-s3">
                <div className="card blue-grey">
                    <div className="card-content white-text">
                        <span className="card-title">Authorization / Authentication</span>
                        <div>
                            <div className="input-field">
                                <input 
                                    placeholder="Enter email address" 
                                    id="email" 
                                    type="text" 
                                    name="email" 
                                    onChange={changeHandler}
                                    />
                                <label htmlFor="email"></label>
                            </div>
                            <div className="input-field">
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
                    <div className="card-action">
                        <button 
                            className={classOfFirstButton} 
                            style={{marginRight:10}}
                            disabled={loading} 
                        >Log In</button>
                        <button 
                            className={classOfSecondButton} 
                            onClick={registerHandler}
                            disabled={loading}    
                        >Sign Up</button>
                    </div>
                </div>
            </div>    
        </div>
    );
}