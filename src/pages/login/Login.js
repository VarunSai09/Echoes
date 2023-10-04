import React from 'react'
import Login_leftContatiner from './components/Login_leftContatiner'
import Login_rightContainer from './components/Login_rightContainer'

const Login = () => {

    return (

        <div class="container-fluid text-center">
            <div class="row login-body">
                <Login_leftContatiner/>
                <div class="col-sm-8 Input_Fields">
                    <Login_rightContainer/>

                </div>
            </div>
        </div>

    )
}

export default Login