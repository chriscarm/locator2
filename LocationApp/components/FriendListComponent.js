
import React from 'react';
import { getFriends, handleShareRequest } from '../services/friendService';

export default function FriendListComponent() {
    const friends = getFriends();
    return (
        <div>
            <h2>Friends List</h2>
            {friends.map(friend => (
                <div key={friend.id} style={{ border: '1px solid gray', margin: '10px', padding: '10px' }}>
                    <span>{friend.name}</span>
                    {friend.hasApp && 
                        <button onClick={() => handleShareRequest(friend.id)}>
                            {friend.locationShared ? 'Stop Sharing' : 'Share Location'}
                        </button>}
                </div>
            ))}
        </div>
    );
}
