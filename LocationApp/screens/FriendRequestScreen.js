
import React from 'react';
import NavigationService from '../services/NavigationService';

function FriendRequestScreen() {
    return (
        <div>
            <h1>Friend Requests</h1>
            
            <section>
                <h2>Incoming Requests</h2>
                <ul>
                    <li>
                        User C 
                        <button onClick={() => {/* Logic to accept request */}}>Accept</button>
                        <button onClick={() => {/* Logic to decline request */}}>Decline</button>
                    </li>
                    <li>
                        User D 
                        <button onClick={() => {/* Logic to accept request */}}>Accept</button>
                        <button onClick={() => {/* Logic to decline request */}}>Decline</button>
                    </li>
                </ul>
            </section>
            
            <section>
                <h2>Sent Requests</h2>
                <ul>
                    <li>User E - Pending</li>
                    <li>User F - Accepted</li>
                </ul>
            </section>
            
            <button onClick={() => NavigationService.goBack()}>Go Back</button>
        </div>
    );
}

export default FriendRequestScreen;
