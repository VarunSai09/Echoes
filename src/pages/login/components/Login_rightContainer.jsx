import React, {useEffect, useState} from 'react'
import {
    MDBContainer,
    MDBTabs,
    MDBTabsItem,
    MDBTabsLink,
    MDBTabsContent,
    MDBTabsPane,
    MDBBtn,
    MDBIcon,
    MDBInput,
    MDBCheckbox
} from 'mdb-react-ui-kit';
import "./Login_Backdrop.css"
import {useHistory} from "react-router-dom";
const Login_rightContainer = () => {

    const [email,
        setEmail] = useState('');
    const [password,
        setPassword] = useState('');
    const [isValidEmail,
        setIsValidEmail] = useState(true); // To track email validation
    const [justifyActive,
        setJustifyActive] = useState('tab1');;
    const [showPassword,
        setShowPassword] = useState(false);
    const [error,
        setError] = useState("")
    const history = useHistory("");
    useEffect(() => {
        localStorage.removeItem("name")
    })
    const handleJustifyClick = (value) => {
        if (value === justifyActive) {
            return;
        }

        setJustifyActive(value);
    };
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        console.log(password)
    };
    const handleEmailChange = (e) => {

        setEmail(e.target.value);
        console.log(email)

        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        setIsValidEmail(emailPattern.test(email));
    };
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email.length == 0 || password.length == 0) {
            setError("Enter all the required fields")
        }
        if (email.length !== 0 && isValidEmail == true && password.length !== 0) {
            const userName = email.split('@')
            const userNameRetreived = userName[0]
            localStorage.setItem("name", userNameRetreived)
            history.push("/home")
        }
    };

    return (
        <div className="d-flex justify-content-center login-fields-box1 vh-100">
            <MDBContainer className="p-3 my-5 d-flex login-fields-box2 flex-column w-50 ">
                <MDBTabs
                    pills
                    justify
                    className='mb-3 d-flex flex-row flex-column align-items-center justify-content-between'>
                    <MDBTabsItem>
                        <MDBTabsLink
                            onClick={() => handleJustifyClick('tab1')}
                            active={justifyActive === 'tab1'}>
                            Login
                        </MDBTabsLink>
                    </MDBTabsItem>
                </MDBTabs>

                <MDBTabsContent>

                    <MDBTabsPane show={justifyActive === 'tab1'}>
                        <form onSubmit={handleSubmit}>
                            <MDBInput
                                wrapperClass='mb-4'
                                placeholder='Email address'
                                id='form1'
                                type='email'
                                value={email}
                                isValidEmail={false}
                                onChange={handleEmailChange}
                                className={!isValidEmail
                                ? 'is-invalid'
                                : ''}/> {!isValidEmail && <div className="invalid-feedback">Please enter a valid email address.</div>}
                            <MDBInput
                                wrapperClass='mb-4'
                                placeholder='Password'
                                id='form2'
                                type={showPassword
                                ? 'text'
                                : 'password'}
                                value={password}
                                onChange={handlePasswordChange}/>

                            <div className="d-flex justify-content-between checkbox-login mx-4 mb-4">
                                <div className='d-flex justify-content-left form-checks'>
                                    <div className='ms-2'>
                                        <input
                                            type='checkbox'
                                            className='form-check-input ms-2'
                                            onChange={togglePasswordVisibility}
                                            id="showPassword"/>
                                    </div>
                                    <div className='ms-2 '>
                                        <label className='form-label'>{showPassword
                                                ? 'Hide Password'
                                                : 'Show Password'}</label>
                                    </div>
                                </div>
                                <a className="forgot-links" href="/forgotpassword">Forgot password?</a>
                            </div>
                            {error && <p className="ErrorMessage">
                                {error}</p>}
                            <MDBBtn className="mb-4 w-100 h-auto" onClick={handleSubmit}>Sign in</MDBBtn>
                            <p className="text-center" id="Login-Link">Not a member?
                                <a href="/signup">Register</a>
                            </p>
                        </form>
                    </MDBTabsPane>

                </MDBTabsContent>

            </MDBContainer>
        </div>
    )
}

export default Login_rightContainer