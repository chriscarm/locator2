
import React, { useState } from 'react';

export default function RegistrationScreen() {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');

    function handleRegistration() {
        // Placeholder for registration logic
    }

    return (
        <div>
            <h2>Register</h2>
            <input 
                type="text" 
                placeholder="Phone Number" 
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)} 
            />
            <input 
                type="password" 
                placeholder="Password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)} 
            />
            <button onClick={handleRegistration}>Register</button>
        </div>
    );
}
