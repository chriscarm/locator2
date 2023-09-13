
// This is a placeholder for the mock backend functions.
// In a real-world scenario, these functions would make HTTP requests to an actual backend.

export function fetchUserData(userId) {
    // Simulate fetching user data from backend
    return {
        id: userId,
        name: 'Sample User',
        friends: getFriends() // Using the friend service for mock data
    };
}

export function updateLocationSharing(userId, friendId, shareStatus) {
    // Simulate updating location sharing status in the backend
    // This would make an HTTP request to update the status in the database
}
