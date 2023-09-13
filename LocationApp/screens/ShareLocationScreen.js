
import React from 'react';
import NavigationService from '../services/NavigationService';

function ShareLocationScreen() {
    return (
        <div>
            <h1>Share Your Location</h1>
            <label>Select Friend: 
                <select>
                    {/* Placeholder for friend list */}
                    <option>Friend 1</option>
                    <option>Friend 2</option>
                    <option>Friend 3</option>
                </select>
            </label>
            <button onClick={() => {/* Logic to start sharing */}}>Start Sharing</button>
            <button onClick={() => {/* Logic to stop sharing */}}>Stop Sharing</button>
            {/* Placeholder for map interface */}
            <div className="map-placeholder">Map will be displayed here.</div>
            <button onClick={() => NavigationService.goBack()}>Go Back</button>
        </div>
    );
}

export default ShareLocationScreen;
