
import React from 'react';

export default function FeedbackHistoryScreen() {
    const feedbackHistory = [  // Sample data
        { id: 1, feedback: 'Loved the app!', response: 'Thank you!' },
        { id: 2, feedback: 'Need a dark mode.', response: 'We are working on it.' }
    ];

    return (
        <div>
            <h2>Feedback History</h2>
            {feedbackHistory.map(entry => (
                <div key={entry.id}>
                    <p><strong>Your Feedback:</strong> {entry.feedback}</p>
                    <p><strong>Response:</strong> {entry.response}</p>
                </div>
            ))}
        </div>
    );
}
