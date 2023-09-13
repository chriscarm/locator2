
import React, { useState } from 'react';

export default function RealTimeLocationSharing() {
    const [isSharing, setIsSharing] = useState(false);

    function toggleSharing() {
        setIsSharing(!isSharing);
        // Logic to start/stop real-time location sharing goes here
    }

    return (
        <div>
            <h2>Real-time Location Sharing</h2>
            <button onClick={toggleSharing}>
                {isSharing ? 'Stop Sharing' : 'Start Sharing'}
            </button>
        </div>
    );
}
