import React from 'react';
import s from './FAQ.module.css';
import q from './../AboutUs/AboutUs.module.css';
import w from './../Auth/Auth.module.css';
import cn from 'classnames'; 

export default function AuthPage(props: any) {
    return (
        <div className={cn(q["row-wrapper"], s["row-wrapper_faq"])}>
            <div className={cn(q["row-wrapper__col"], q["row-wrapper__col_s12"], q["row-wrapper__col_m8"])}>
                <div className={cn(w["row-wrapper__card"], w["row-wrapper__card_blue-grey"])} style={{height:440}}>
                    <div className={cn(
                                        q["row-wrapper__card-content"], 
                                        q["row-wrapper__card-content_white-text"], 
                                        s["row-wrapper__card-content_title-wrapper"]
                    )}>
                        <span className={q["row-wrapper__card-title"]}>Frequently Asked Questions</span>
                    </div>
                    <div>
                        <ol className={s["row-wrapper__rectangle"]}>
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