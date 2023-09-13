
import React from 'react';

export default function FriendLocationScreen() {
    const friendName = 'Alice';  // Placeholder name
    const location = { lat: 37.7749, lng: -122.4194 };  // Placeholder location

    return (
        <div>
            <h2>{friendName}'s Location</h2>
            {/* Placeholder for displaying location on a map */}
            <div>Latitude: {location.lat}, Longitude: {location.lng}</div>
        </div>
    );
}
