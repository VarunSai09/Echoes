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
const Forgotpassword = () => {
    const [justifyActive,
        setJustifyActive] = useState('tab1');;
    const [isValidEmail,
        setIsValidEmail] = useState(true);
    const [email,
        setEmail] = useState('');
    const handleJustifyClick = (value) => {
        if (email.length !== 0 && isValidEmail == true) {
            alert("An email has been sent to your registered mail-id")
        }
    };
    const handleEmailChange = (e) => {
        const newEmail = e.target.value;
        setEmail(newEmail);

        // Use regex to check email format
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        setIsValidEmail(emailPattern.test(newEmail));
    };
    const handleSubmit = (e) => {
        e.preventDefault();

        // Check if the email is valid before performing further actions
        if (!isValidEmail) {
            alert('Please enter a valid email address.');
            return;
        }

        // Perform the login logic here
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
                            Forgot Password
                        </MDBTabsLink>
                    </MDBTabsItem>
                </MDBTabs>

                <MDBTabsContent>

                    <MDBTabsPane show={justifyActive === 'tab1'}>
                        <MDBInput
                            wrapperClass='mb-4'
                            placeholder='Email address'
                            id='form1'
                            type='email'
                            value={email}
                            onChange={handleEmailChange}
                            className={!isValidEmail
                            ? 'is-invalid'
                            : ''}/> {!isValidEmail && <div className="invalid-feedback">Please enter a valid email address.</div>}

                        <MDBBtn className="mb-4 w-100" onClick={() => handleJustifyClick()}>Find my account</MDBBtn>
                        <p className="text-center">Remember thr password?
                            <a href="/ ">Login here</a>
                        </p>

                    </MDBTabsPane>

                </MDBTabsContent>

            </MDBContainer>
        </div>
    )
}

export default Forgotpassword