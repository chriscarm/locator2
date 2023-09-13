
import React, { useState } from 'react';

export default function ForgotPasswordScreen() {
    const [phoneNumber, setPhoneNumber] = useState('');

    function handlePasswordReset() {
        // Placeholder logic for password reset goes here
        console.log(`Reset instructions sent to ${phoneNumber}`);
    }

    return (
        <div>
            <h2>Forgot Password</h2>
            <input 
                type="text" 
                placeholder="Phone Number" 
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)} 
            />
            <button onClick={handlePasswordReset}>Reset Password</button>
        </div>
    );
}
