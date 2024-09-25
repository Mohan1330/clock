import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Ensure you import Link

export default function LoginScreen() {
    const navigate = useNavigate(); // Initialize the navigate function

    const handleLogin = () => {
        // Perform any login logic here (e.g., form validation, API calls)
        
        // Navigate to HomeScreen
        navigate("/HomeScreen");
    };
    return (
        <div className='Login-Container'>
            <div className='Greeting-Message'> {/* Fixed typo from 'Creeting' to 'Greeting' */}
                <h1>Welcome to Clock</h1>
            </div>
            <div>
                <h3>Please sign in to your account and start your adventure</h3>
            </div>
            <div className='input'>
                <input type='text' placeholder='User Name' />
            </div>
            <div className='input'>
                <input type='password' placeholder='Password' /> {/* Changed type to 'password' */}
            </div>
            <div className='password-remember'>
                <input type="checkbox" />
                <h6>Remember me</h6>
                <div>
                    <h6>Forget Password?</h6>
                </div>
            </div>
            <div className='submit-button'>
            <button onClick={handleLogin}>Login</button>
            </div>
            <div>
                <h6>New to our Platform?</h6>
                <Link to="/RegisterScreen" className='underline'>Create Account</Link> {/* Updated link for registration */}
            </div>
        </div>
    );
}
