
// Manage friend lists and location sharing requests
let friends = [
    { id: 1, name: 'Alice', hasApp: true, locationShared: false },
    { id: 2, name: 'Bob', hasApp: false },
    { id: 3, name: 'Charlie', hasApp: true, locationShared: true },
    { id: 4, name: 'David', hasApp: true, locationShared: false }
];

export function getFriends() {
    return friends;
}

export function searchFriend(name) {
    return friends.filter(friend => friend.name.toLowerCase().includes(name.toLowerCase()));
}

export function handleShareRequest(friendId) {
    let friend = friends.find(f => f.id === friendId);
    if (friend && friend.hasApp) {
        friend.locationShared = !friend.locationShared;
    }
}
