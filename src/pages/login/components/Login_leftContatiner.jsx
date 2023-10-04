import React from 'react'
import Abstraction from "../../../resources/Abstraction.png"
const Login_leftContatiner = () => {
    return (
        <div class="col-sm-4" id="LeftContainer">
            <div className='Logo_Container'>
                <img
                    id='Logo'
                    src="https://echoescreative.com/wp-content/uploads/2023/01/EchoesC_Logo-2.png"/>
            </div>
            <div className='logo_desc'>
                <label className='desc'>Accelerate Your Growth by connecting with us</label>
            </div>
            <div className='animation_design'>
                <img src={Abstraction} className='design'></img>
            </div>

        </div>
    )
}

export default Login_leftContatiner