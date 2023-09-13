
import React from 'react';

export default function RecentSharesScreen() {
    const recentShares = [  // Sample data
        { id: 1, friendName: 'Eve', timestamp: '2023-09-18 10:30' },
        { id: 2, friendName: 'Frank', timestamp: '2023-09-18 09:15' }
    ];

    return (
        <div>
            <h2>Recent Shares</h2>
            {recentShares.map(share => (
                <div key={share.id}>
                    Shared location with {share.friendName} on {share.timestamp}
                </div>
            ))}
        </div>
    );
}
