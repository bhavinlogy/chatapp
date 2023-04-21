import React, { useState } from 'react';

const Login = () => {

    const [focused, setFocus] = useState(false);

    return(
        <div className="Transition full-height is-auth login">
            <div className="Transition Auth Transition__slide Transition__slide--active">
                <div className="Transition__slide Transition__slide--active">
                    <div id="auth-phone-number-form" className="custom-scroll">
                        <div className="auth-form theme-white">
                            <div id="logo"></div>
                            <h1>ChatApp</h1>
                            <p className="note">Please confirm your country code and enter your phone number.</p>
                            <form action="">
                                <div className="DropdownMenu CountryCodeInput">
                                    <div className="input-group touched">
                                        <input className={`form-control${focused ? ' focus' : ''}`} onFocus={() => setFocus(true)} onBlur={() => setFocus(false)} type="text" id="sign-in-phone-code" autoComplete="off" fdprocessedid="msgqjn" />
                                        <label>Country</label>
                                        <i className={`css-icon-down ${focused ? ' open' : ''}`}></i>
                                    </div>
                                    <div className="Menu no-selection compact CountryCodeInput">
                                        {focused ? <div className='backdrop'></div> : ''}
                                        <div role="presentation" className={`bubble menu-container custom-scroll top left opacity-transition fast ${focused ? 'open show' : ''}`} style={{transformOrigin: 'left top'}}>
                                            <div role="menuitem" tabIndex="0" className="MenuItem compact">
                                                <span className="country-flag">
                                                    <img src="https://web.telegram.org/a/img-apple-160/1f1e6-1f1eb.png" className="emoji opacity-transition slow shown open" alt="🇦🇫" data-path="https://web.telegram.org/a/img-apple-160/1f1e6-1f1eb.png" />
                                                </span>
                                                <span className="country-name">Afghanistan</span>
                                                <span className="country-code">+93</span>
                                            </div>
                                            <div role="menuitem" tabIndex="0" className="MenuItem compact">
                                                <span className="country-flag">
                                                    <img src="https://web.telegram.org/a/img-apple-160/1f1e6-1f1f1.png" className="emoji opacity-transition slow shown open" alt="🇦🇱" data-path="https://web.telegram.org/a/img-apple-160/1f1e6-1f1f1.png" />
                                                </span>
                                                <span className="country-name">Albania</span>
                                                <span className="country-code">+355</span>
                                            </div>
                                            <div role="menuitem" tabIndex="0" className="MenuItem selected compact">
                                                <span className="country-flag">
                                                    <img src="https://web.telegram.org/a/img-apple-160/1f1ee-1f1f3.png" className="emoji opacity-transition slow shown open" alt="🇮🇳" data-path="https://web.telegram.org/a/img-apple-160/1f1ee-1f1f3.png" />
                                                </span>
                                                <span className="country-name">India</span>
                                                <span className="country-code">+91</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="input-group touched with-label">
                                    <input className="form-control" type="text" id="sign-in-phone-number" dir="auto" inputMode="tel" aria-label="Your phone number" fdprocessedid="wm7awti" />
                                    <label htmlFor="sign-in-phone-number">Your phone number</label>
                                </div>
                                <label className="Checkbox">
                                    <input type="checkbox" id="sign-in-keep-session" />
                                    <div className="Checkbox-main"><span className="label" dir="auto">Keep me signed in</span></div>
                                </label>
                                <button type="submit" className="Button default primary has-ripple" fdprocessedid="2e1qd">Next<div className="ripple-container"></div></button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;