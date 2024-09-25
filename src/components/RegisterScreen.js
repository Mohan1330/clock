import React from 'react'

export default function RegisterScreen() {
    return (
        <dive>
            <div className='text'>Signup</div>
            <label htmlFor="username">Username</label>

            <div className='input'>
                <input type='text' />
            </div>
            <label htmlFor="username">Email</label>

            <div className='input'>
                <input type='email' />
            </div>
            <label htmlFor="username">Mobile Number</label>

            <div className='input'>
                <input type='number' />
            </div>
            <label htmlFor="username">Password</label>

            <div className='input'>
                <input type='text' />
            </div>
            <label htmlFor="username">Confirm Password</label>

            <div className='input'>
                <input type='text' />
            </div>
        </dive>
    )
}
