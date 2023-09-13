
// Enhanced error handler for the app
export function handleAppError(error) {
    console.error("App Error:", error);
    // Integrate with logging services
    // Show user-friendly messages based on the error type
    if (error.code === 'AUTH_ERROR') {
        return 'Authentication failed. Please try again.';
    } else if (error.code === 'PERMISSION_DENIED') {
        return 'Permission denied. Please enable the required permissions to continue.';
    } else if (error.code === 'FRIEND_NOT_FOUND') {
        return 'Friend not found. Please check the name and try again.';
    } else {
        return 'An unexpected error occurred. Please try again later.';
    }
}
