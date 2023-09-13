
import React from 'react';

export default function LocationShareButton() {
    function handleShare() {
        // Logic to share location goes here
        console.log("Location shared!");
    }

    return (
        <button onClick={handleShare}>
            Share Location
        </button>
    );
}
