
import React, { useState } from 'react';

export default function FavoritesScreen() {
    const [favorites, setFavorites] = useState([
        { id: 1, name: 'Eve' },  // Sample favorites
        { id: 2, name: 'Frank' }
    ]);

    return (
        <div>
            <h2>Favorite Friends</h2>
            {favorites.map(friend => (
                <div key={friend.id}>
                    <span>{friend.name}</span>
                </div>
            ))}
        </div>
    );
}
