
export const ADD_FRIEND = 'ADD_FRIEND';

export function addFriend(friend) {
    return {
        type: ADD_FRIEND,
        friend
    };
}

export const SHARE_LOCATION = 'SHARE_LOCATION';

export function shareLocation(friendId) {
    return {
        type: SHARE_LOCATION,
        friendId
    };
}
