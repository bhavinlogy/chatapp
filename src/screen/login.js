import React, { useState } from 'react';
import { redirect } from 'react-router-dom';

const Login = () => {

    const countries = [
        {
            id:1,
            img:'https://web.telegram.org/a/img-apple-160/1f1e6-1f1eb.png',
            name:'Afghanistan',
            short: 'AF',
            code:'+93'
        },
        {
            id:2,
            img:'https://web.telegram.org/a/img-apple-160/1f1e6-1f1f1.png',
            name:'Albania',
            short: 'AL',
            code:'+355'
        },
        {
            id:3,
            img:'https://web.telegram.org/a/img-apple-160/1f1ee-1f1f3.png',
            name:'India',
            short: 'IN',
            code:'+91'
        }
    ]

    const [filteredCountries, setFilteredCountries] = useState(countries);
    const [focused, setFocus] = useState(false);
    const [country, setCountry] = useState('');
    const [mobileNo, setMobileNo] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isnumberValid, setNumberValid] = useState(false);
    const [mobileLableText, setMobileLableText] = useState('Phone number');

    const changCountry = (country,countryCode) => {
        setCountry(country);
        setMobileNo(countryCode);
    }

    React.useEffect(() => {
        document.title = 'ChatApp - Login Page';
        console.log(filteredCountries.length);
       
        const loseInputFocus = (event) => {
            if (!event.target.closest('.countryInput')) {
                setFocus(false);
            }
          };

        document.addEventListener('click', loseInputFocus);
    },[setFocus])

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsSubmitting(true);
        if(mobileNo.length < 9){
            setIsSubmitting(false);
            setNumberValid(true);
            setMobileLableText('Invalid phone number');
        }else{
            setNumberValid(false);
            setMobileLableText('Phone number');
        }
        
        setTimeout(() => {
            setIsSubmitting(false);
            redirect('/verifyMobile')
        }, 2000);
    }

    const changeInputValue = (input) => {
        console.log(isNaN(input.value));
        const pattern = /^[1-9+]+$/;
        if(input.id == 'sign-in-phone-number'){
            if(input.value == ''){
                setCountry('');
                setMobileNo('');
            }else{
                setMobileNo(pattern.test(input.value) && input.value.charAt(0) !== "+" ? `+${input.value}` : input.value);

                const filteredCountries = countries.filter(cntry =>
                    cntry.code.includes(input.value)
                );
                if(filteredCountries.length == 1){
                    setCountry(filteredCountries[0].name);
                }
                // console.log(filteredCountries[0].name);
            }
            
        }else{
            setCountry(input.value);

            const filteredCountries = countries.filter(cntry =>
                cntry.name.toLowerCase().includes(country.toLowerCase()) || cntry.code.toLowerCase().includes(country.toLowerCase())
            );

            setFilteredCountries(filteredCountries);
        }
    }
    
    return(
        <div className="Transition full-height is-auth login">
            <div className="Transition Auth Transition__slide Transition__slide--active">
                <div className="Transition__slide Transition__slide--active">
                    <div id="auth-phone-number-form" className="custom-scroll">
                        <div className="auth-form theme-white">
                            <div id="logo"></div>
                            <h1>ChatApp</h1>
                            <p className="note">Please confirm your country code and enter your phone number.</p>
                            <form onSubmit={handleSubmit}>
                                <div className="DropdownMenu CountryCodeInput">
                                    <div className="input-group">
                                        {/* <input className={`form-control${focused ? ' focus' : ''}`} onFocus={() => setFocus(true)} onBlur={() => setFocus(false)} type="text" id="sign-in-phone-code" autoComplete="off" fdprocessedid="msgqjn" defaultValue={country}/> */}
                                        <input className={`form-control countryInput${focused ? ' focus' : ''}`} onFocus={() => setFocus(true)} type="text" id="sign-in-phone-code" autoComplete="off" fdprocessedid="msgqjn" value={country} onChange={(event) => changeInputValue(event.target)}/>
                                        <label className='labelInput'>Country</label>
                                        <i className={`css-icon-down ${focused ? ' open' : ''}`}></i>
                                    </div>
                                    <div className="Menu no-selection compact CountryCodeInput">
                                        {focused ? <div className='backdrop'></div> : ''}
                                        <div role="presentation" className={`bubble menu-container custom-scroll top left opacity-transition fast ${focused ? 'open show' : ''}`} style={{transformOrigin: 'left top'}}>
                                            {filteredCountries.length > 0 ? filteredCountries.map((cntry)=>{
                                                  return (
                                                <div key={`${cntry.id}`} role="menuitem" tabIndex="0" className="MenuItem compact" onClick={() => changCountry(cntry.name,cntry.code)}>
                                                    <span className="country-flag">
                                                        <img src={`${cntry.img}`} className="emoji opacity-transition slow shown open" alt={`${cntry.short}`} data-path={`${cntry.img}`} />
                                                    </span>
                                                    <span className="country-name">{cntry.name}</span>
                                                    <span className="country-code">{cntry.code}</span>
                                                </div>)
                                            }) : <div role="menuitem" tabIndex="0" className="MenuItem no-results disabled campact">
                                                    <span>No Country Found</span>
                                                </div>}
                                        </div>
                                    </div>
                                </div>
                                <div className="input-group with-label">
                                    <input className={`form-control${isnumberValid ? ' error' : ''}`}  type="text" id="sign-in-phone-number" dir="auto" inputMode="tel" aria-label="Your phone number" fdprocessedid="wm7awti" value={mobileNo} onChange={(event) => changeInputValue(event.target)}/>
                                    <label htmlFor="sign-in-phone-number" className='labelInput'>{mobileLableText}</label>
                                </div>
                                <label className="Checkbox">
                                    <input type="checkbox" id="sign-in-keep-session" />
                                    <div className="Checkbox-main"><span className="label" dir="auto">Keep me signed in</span></div>
                                </label>
                                {mobileNo.length > 6 && (<button type="submit" className="Button sbmt-btn default primary has-ripple" fdprocessedid="2e1qd" disabled={isSubmitting}>
                                    {isSubmitting ? (
                                        <>
                                        <span className='mx-1'>Processing</span>
                                        <span className="processing-dots"></span>
                                        </>
                                    ) : ('Next')}
                                </button>)}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;