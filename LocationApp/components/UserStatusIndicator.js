
import React from 'react';

export default function UserStatusIndicator({ status }) {
    const styles = {
        online: { color: 'green' },
        offline: { color: 'grey' },
        sharing: { color: 'blue' }
    };

    return (
        <div style={styles[status]}>
            {status}
        </div>
    );
}
