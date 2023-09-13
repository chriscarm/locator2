
import { ADD_FRIEND, SHARE_LOCATION } from '../actions/friendActions';

const initialState = [];

export default function friendReducer(state = initialState, action) {
    switch(action.type) {
        case ADD_FRIEND:
            return [...state, action.friend];
        case SHARE_LOCATION:
            return state.map(friend => {
                if (friend.id === action.friendId) {
                    friend.locationShared = true;
                }
                return friend;
            });
        default:
            return state;
    }
}
