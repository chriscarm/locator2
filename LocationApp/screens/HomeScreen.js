
import React from 'react';
import { Platform, View, Text, Button } from 'react-native';
import LocationShareButton from '../components/LocationShareButton';
import NavigationService from '../services/NavigationService';

function HomeScreen() {
    const greeting = Platform.OS === 'ios' ? 'Welcome iOS User!' : 'Welcome!';
    
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 24, marginBottom: 20 }}>{greeting}</Text>
            <LocationShareButton />
            <Button title="Settings" onPress={() => NavigationService.navigate('SettingsScreen')} />
            <Button title="Friend Requests" onPress={() => NavigationService.navigate('FriendRequestScreen')} />
        </View>
    );
}

export default HomeScreen;
