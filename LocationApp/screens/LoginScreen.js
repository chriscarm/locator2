
import React, { useState } from 'react';

export default function LoginScreen() {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');

    function handleLogin() {
        // Placeholder for login logic
    }

    return (
        <div>
            <h2>Login</h2>
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
            <button onClick={handleLogin}>Login</button>
        </div>
    );
}
