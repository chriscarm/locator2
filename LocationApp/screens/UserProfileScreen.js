
import React from 'react';

export default function UserProfileScreen() {
    const user = { name: 'Sample User', phoneNumber: '123-456-7890' };
    return (
        <div>
            <h2>User Profile</h2>
            <div>Name: {user.name}</div>
            <div>Phone Number: {user.phoneNumber}</div>
            {/* Placeholder for edit profile button */}
            <button>Edit Profile</button>
        </div>
    );
}
