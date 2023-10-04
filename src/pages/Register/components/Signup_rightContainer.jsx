import React, {useState} from 'react'
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
import {useHistory} from "react-router-dom";
const Signup_rightContainer = () => {
    const [name,
        setName] = useState('');
    const [username,
        setUsername] = useState('');
    const [email,
        setEmail] = useState('');
    const [password,
        setPassword] = useState('');
    const [confirmPassword,
        setConfirmPassword] = useState('');
    const [isValidEmail,
        setIsValidEmail] = useState(true);
    const [isValidPassword,
        setIsValidPassword] = useState(true);
    const [passwordsMatch,
        setPasswordsMatch] = useState(true);
    const [showPassword,
        setShowPassword] = useState(false);
    const [justifyActive,
        setJustifyActive] = useState('tab1');
    const [error,
        setError] = useState("")
    const history = useHistory("");

    const handleJustifyClick = (value) => {
        if (value === justifyActive) {
            return;
        }

        setJustifyActive(value);
    };
    const handleEmailChange = (e) => {
        const newEmail = e.target.value;
        setEmail(newEmail);

        // Use regex to check email format
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        setIsValidEmail(emailPattern.test(newEmail));
    };
    const handlePasswordChange = (e) => {
        const newPassword = e.target.value;
        setPassword(newPassword);
        setIsValidPassword(newPassword.length >= 8); // Adjust password validation criteria
        setPasswordsMatch(newPassword === confirmPassword);
    };

    const handleConfirmPasswordChange = (e) => {
        const newConfirmPassword = e.target.value;
        setConfirmPassword(newConfirmPassword);
        setPasswordsMatch(password === newConfirmPassword);
    };
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (name.length == 0 || username.length == 0 || email.length == 0 || password.length == 0) {
            setError("Enter all the required fields")
        }
        // Check if the email and password are valid
        if (!isValidEmail) {
            alert('Please enter a valid email address.');
            return;
        }

        if (!isValidPassword) {
            alert('Password must be at least 8 characters long.');
            return;
        }

        if (!passwordsMatch) {
            alert('Passwords do not match.');
            return;
        } else if (name.length !== 0 && username.length !== 0 && isValidPassword == true && email.length !== 0 && isValidEmail == true && password.length !== 0) {
            localStorage.setItem("name", name)
            history.push("/home")
        }
        // Perform the registration logic here alert('Registration successful!');
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
                            Register
                        </MDBTabsLink>
                    </MDBTabsItem>
                </MDBTabs>

                <MDBTabsContent>

                    <MDBTabsPane show={justifyActive === 'tab1'}>

                        <form onSubmit={handleSubmit}>
                            <MDBInput
                                wrapperClass='mb-4'
                                placeholder='Name'
                                id='form1'
                                type='text'
                                value={name}
                                onChange={(e) => setName(e.target.value)}/>
                            <MDBInput
                                wrapperClass='mb-4'
                                placeholder='Username'
                                id='form2'
                                type='text'
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}/>
                            <MDBInput
                                wrapperClass='mb-4'
                                placeholder='Email address'
                                id='form3'
                                type='email'
                                value={email}
                                onChange={handleEmailChange}
                                className={!isValidEmail
                                ? 'is-invalid'
                                : ''}/> {!isValidEmail && <div className="invalid-feedback">Please enter a valid email address.</div>}
                            <MDBInput
                                wrapperClass='mb-4'
                                placeholder='Enter your Password'
                                id='form4'
                                value={password}
                                onChange={handlePasswordChange}
                                type={showPassword
                                ? 'text'
                                : 'password'}
                                className={!isValidPassword
                                ? 'is-invalid'
                                : ''}/> {!isValidPassword && <div className="invalid-feedback">Password must be at least 8 characters long.</div>}
                            <MDBInput
                                wrapperClass='mb-4'
                                placeholder='Re-enter your Password'
                                id='form5'
                                type={showPassword
                                ? 'text'
                                : 'password'}
                                value={confirmPassword}
                                onChange={handleConfirmPasswordChange}
                                className={!passwordsMatch
                                ? 'is-invalid'
                                : ''}/> {!passwordsMatch && <div className="invalid-feedback">Passwords do not match.</div>}
                            <div className='d-flex justify-content-left mb-4'>
                                <div className='ms-2'>
                                    <input
                                        type='checkbox'
                                        className='form-check-input ms-2'
                                        onChange={togglePasswordVisibility}/>
                                </div>
                                <div className='ms-2'>
                                    <label className='form-label'>{showPassword
                                            ? 'Hide Password'
                                            : 'Show Password'}</label>
                                </div>
                            </div>
                            {error && <p className="ErrorMessage">
                                {error}</p>}
                            <MDBBtn className="mb-4 w-100" type="submit">Sign up</MDBBtn>
                            <p className="text-center " id="Login-Link">Already have an account?
                                <a href="/ ">Login here</a>
                            </p>
                        </form>
                    </MDBTabsPane>

                </MDBTabsContent>

            </MDBContainer>
        </div>
    )
}

export default Signup_rightContainer