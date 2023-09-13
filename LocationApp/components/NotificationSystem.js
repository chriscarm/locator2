
import React from 'react';
import { showNotification } from '../services/notificationService';

export default function NotificationSystem() {
    function notifyFriendSharingLocation(friendName) {
        showNotification(`${friendName} has started sharing their location with you.`);
    }

    return (
        <div>
            {/* This is a mock component to demonstrate the notification logic */}
            <button onClick={() => notifyFriendSharingLocation('Alice')}>Notify Alice Sharing</button>
        </div>
    );
}
