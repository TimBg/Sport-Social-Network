import React from 'react';
import s from './FAQ.module.css';

export default function AuthPage(props) {
    const classOfMotherDiv = 'row ' + s.row__wrapper;
    const classOfTitle = 'card-content white-text ' + s.title__wrapper;

    return (
        <div className={classOfMotherDiv}>
            <div className="col s6 offset-s3">
                <div className="card blue-grey" style={{height:440}}>
                    <div className={classOfTitle}>
                        <span className="card-title">Frequently Asked Questions</span>
                    </div>
                    <div>
                        <ol className={s.rectangle}>
                            <li><a href="#">Does the site have an improved version
                                of training analysis? — Yes there is. 
                                It can be purchased for $ 10 a month.
                            </a></li>
                            <li><a href="#">I am a professional athlete and would 
                                like to receive a confirmation icon for my 
                                identity on the site. How do I get it? — Write 
                                to tech support, providing your photo with a passport in hand.
                            </a></li>
                            <li><a href="#">Can I become a sponsor of a company? — Yes,
                                contact the main developer: telegram — @isspolin.
                            </a></li>
                            <li><a href="#">How do I order an advertisement for my product?
                                — Contact technical support.
                            </a></li>
                        </ol>
                    </div>
                </div>
            </div>    
        </div>
    );
}