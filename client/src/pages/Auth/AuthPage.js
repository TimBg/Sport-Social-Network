import React from 'react';
import s from './Auth.module.css';

export default function AuthPage(props) {
    const classOfFirstButton = 'btn gray darken-4 ' + s.auth__wrapper;
    const classOfSecondButton = 'btn gray lighten-1 ' + s.auth__wrapper;
    const classOfMotherDiv = 'row ' + s.row__wrapper;

    return (
        <div className={classOfMotherDiv}>
            <div className="col s6 offset-s3">
                <div className="card blue-grey">
                    <div className="card-content white-text">
                        <span className="card-title">Authorization / Authentication</span>
                        <div>
                            <div class="input-field">
                                <input placeholder="Enter email address" id="email" 
                                        type="text" name="email" />
                                <label htmlFor="email"></label>
                            </div>
                            <div class="input-field">
                                <input placeholder="Enter password" id="password"
                                        type="password" name="password" />
                                <label htmlFor="email"></label>
                            </div>
                        </div>
                    </div>
                    <div className="card-action">
                       <button className={classOfFirstButton} style={{marginRight:10}}>Log In</button>
                       <button className={classOfSecondButton}>Sign Up</button>
                    </div>
                </div>
            </div>    
        </div>
    );
}