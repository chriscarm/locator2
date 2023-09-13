
import React from 'react';

export default function AnalyticsDashboardScreen() {
    const analyticsData = {  // Sample data
        totalShares: 50,
        activeFriends: 10
    };

    return (
        <div>
            <h2>Analytics Dashboard</h2>
            <div>Total Shares: {analyticsData.totalShares}</div>
            <div>Active Friends: {analyticsData.activeFriends}</div>
        </div>
    );
}
