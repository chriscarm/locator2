
import React from 'react';

export default function FeedbackComponent({ message, type }) {
    const styles = {
        success: { color: 'green' },
        error: { color: 'red' }
    };

    return (
        <div style={styles[type]}>
            {message}
        </div>
    );
}
