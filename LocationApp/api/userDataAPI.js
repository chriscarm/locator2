
export function fetchUserData(userId) {
    // Mocking an API response
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (userId === 1) {
                resolve({ id: 1, name: 'Alice', phoneNumber: '123-456-7890' });
            } else {
                reject('User not found');
            }
        }, 1000);  // Simulate a delay
    });
}
