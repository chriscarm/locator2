
import React from 'react';
import { getCurrentLocation } from '../services/locationService';

export default function LocationMapComponent() {
    const location = getCurrentLocation();
    return (
        <div>
            <span>Current Location: {location.latitude}, {location.longitude}</span>
            {/* Here, we'll integrate an actual map component to display the location */}
        </div>
    );
}
