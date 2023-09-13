
import React from 'react';

export default function HistoryScreen() {
    const historyEntries = [  // Sample data
        { id: 1, friendName: 'Eve', timestamp: '2023-09-15 15:30' },
        { id: 2, friendName: 'Frank', timestamp: '2023-09-14 12:20' }
    ];

    return (
        <div>
            <h2>Location Share History</h2>
            {historyEntries.map(entry => (
                <div key={entry.id}>
                    Shared location with {entry.friendName} on {entry.timestamp}
                </div>
            ))}
        </div>
    );
}
