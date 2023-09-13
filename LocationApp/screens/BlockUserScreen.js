
import React, { useState } from 'react';

export default function BlockUserScreen() {
    const [blockedUsers, setBlockedUsers] = useState([
        { id: 1, name: 'Eve' }  // Sample blocked user
    ]);

    function unblockUser(id) {
        setBlockedUsers(blockedUsers.filter(user => user.id !== id));
    }

    return (
        <div>
            <h2>Blocked Users</h2>
            {blockedUsers.map(user => (
                <div key={user.id}>
                    <span>{user.name}</span>
                    <button onClick={() => unblockUser(user.id)}>Unblock</button>
                </div>
            ))}
        </div>
    );
}
