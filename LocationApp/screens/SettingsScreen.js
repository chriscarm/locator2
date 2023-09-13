
import React from 'react';
import NavigationService from '../services/NavigationService';

function SettingsScreen() {
    return (
        <div>
            <h1>Settings</h1>
            
            <section>
                <h2>Profile Management</h2>
                <Button title= onClick={() => {/* Logic to edit profile */}}>Edit Profile/>
            </section>
            
            <section>
                <h2>App Preferences</h2>
                <label>Theme: 
                    <select>
                        <option>Light</option>
                        <option>Dark</option>
                    </select>
                </label>
                <label>Notifications: 
                    <select>
                        <option>Enabled</option>
                        <option>Disabled</option>
                    </select>
                </label>
            </section>
            
            <section>
                <h2>Blocked Users</h2>
                {/* Placeholder for list of blocked users */}
                <ul>
                    <li>User A <Button title= onClick={() => {/* Logic to unblock user */}}>Unblock/></li>
                    <li>User B <Button title= onClick={() => {/* Logic to unblock user */}}>Unblock/></li>
                </ul>
            </section>
            
            <Button title= onClick={() => NavigationService.goBack()}>Go Back/>
        </div>
    );
}

export default SettingsScreen;
