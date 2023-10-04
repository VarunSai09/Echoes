import React from 'react'
import {Switch, Route} from "react-router-dom";
import Login from './pages/login/Login'
import Register from './pages/Register/Register'
import ForgotPassword from './pages/forgot_pass/ForgotPassword';
import homepage from './pages/homepage/homepage';

const App = () => {
    return (
        <Switch>
            <Route exact path="/" component={Login}/>
            <Route exact path="/signup" component={Register}/>
            <Route exact path="/forgotpassword" component={ForgotPassword}/>
            <Route exact path="/home" component={homepage}/>
        </Switch>

    )
}

export default App
