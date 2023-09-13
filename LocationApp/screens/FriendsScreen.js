
import React, { useState } from 'react';
import { getFriends, searchFriend } from '../services/friendService';

export default function FriendsScreen() {
    const [searchTerm, setSearchTerm] = useState('');
    const friends = searchTerm ? searchFriend(searchTerm) : getFriends().filter(f => f.locationShared);
    return (
        <div>
            <h2>Friends with Shared Location</h2>
            <input 
                type="text" 
                placeholder="Search Friend" 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)} 
            />
            {friends.map(friend => (
                <div key={friend.id}>
                    <span>{friend.name}</span>
                </div>
            ))}
        </div>
    );
}
