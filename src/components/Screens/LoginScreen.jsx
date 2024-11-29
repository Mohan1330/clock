import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
import './LoginScreenStyle.css';
import user_icon from '../Assets/user.png';
import password_icon from '../Assets/padlock.png';
import email_icon from '../Assets/gmail.png';


export default function LoginScreen() {
    // const navigate = useNavigate(); // Initialize the navigate function

    // const handleLogin = () => {
    //     // Perform any login logic here (e.g., form validation, API calls)

    //     // Navigate to HomeScreen
    //     navigate("/HomeScreen");



    // const [ action, setAction] = useState("Sign Up");
    const [ action, setAction] = useState("Login");
    // };
    return (
        // <div className='Login-Container'>
        //     <div className='Greeting-Message'> {/* Fixed typo from 'Creeting' to 'Greeting' */}
        //         <h1 className='bg-info'>Welcome to Clock</h1>
        //     </div>
        //     <div>
        //         <h3>Please sign in to your account and start your adventure</h3>
        //     </div>
        //     <div className='input'>
        //         <input  className="form-control" type='text' placeholder='User Name' />
        //     </div>
        //     <div className='input'>
        //         <input className="form-control" type='password' placeholder='Password' /> {/* Changed type to 'password' */}
        //     </div>
        //     <div className='password-remember'>
        //         <input type="checkbox" />
        //         <h6>Remember me</h6>
        //         <div>
        //             <h6>Forget Password?</h6>
        //         </div>
        //     </div>
        //     <div className='submit-button'>
        //         <button className='btn bg-info' onClick={handleLogin}>Login</button>
        //     </div>
        //     <div>
        //         <h6>New to our Platform?</h6>
        //         <Link to="/RegisterScreen" className='underline'>Create Account</Link> {/* Updated link for registration */}
        //     </div>
        // </div>
        <div className='Container'>
            <div className="header">
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                <div className="input">
                    <img src={user_icon} alt="" />

                    <input type="text" placeholder='Name' />
                </div>
                <div className="input">
                    <img src={email_icon} alt="" />
                    <input type="email" placeholder='Email' />
                </div>
                <div className="input">
                    <img src={password_icon} alt="" />
                    <input type="password" placeholder='Password' />
                </div>
            </div>
            <div className="forgot-password">Forgot Pasword ?<span>click Here !</span></div>
            <div className="submit_container">
                <div className={action === "Login" ? "submit gray" : "submit"} onClick={() => {setAction("Sign Up")}}>Sign Up</div>
                <div className={action === "Sign Up" ? "submit gray" : "submit"} onClick={() => {setAction("Login")}}>Login</div>
            </div>


        </div>

    );
}
