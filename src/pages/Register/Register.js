import React from 'react'

import Login_leftContatiner from '../login/components/Login_leftContatiner'
import Signup_rightContainer from './components/Signup_rightContainer'

const Register = () => {
    return (
        <div class="container-fluid text-center">
            <div class="row login-body">
                <Login_leftContatiner/>
                <div class="col-sm-8 Input_Fields">
                    <Signup_rightContainer/>

                </div>
            </div>
        </div>
    )
}

export default Register