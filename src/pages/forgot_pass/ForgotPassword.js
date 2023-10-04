import React from 'react'
import Forgotpassword from './components/Forgotpassword'
import Login_leftContatiner from '../login/components/Login_leftContatiner'

const ForgotPassword = () => {
    return (
        <div class="container-fluid text-center">
            <div class="row login-body">
                <Login_leftContatiner/>
                <div class="col-sm-8 Input_Fields">
                    <Forgotpassword/>
                </div>
            </div>
        </div>
    )
}

export default ForgotPassword