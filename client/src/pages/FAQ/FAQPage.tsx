import React from 'react';
import './FAQ.css';
import { MainReturn } from './FAQContainer';

const FAQPage: React.FC<MainReturn> = (): JSX.Element => {
    return (
        <div className='row-wrapper row-wrapper_faq'>
            <div className='row-wrapper__col row-wrapper__col_s12 row-wrapper__col_m8'>
                <div className='row-wrapper__card row-wrapper__card_blue-grey' style={{ height: 440 }}>
                    <div className='row-wrapper__card-content row-wrapper__card-content_white-text row-wrapper__card-content_title-wrapper'>
                        <span className='row-wrapper__card-title'>Frequently Asked Questions</span>
                    </div>
                    <div>
                        <ol className='row-wrapper__rectangle'>
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

export default FAQPage;