
const initialState = {
    currentLocation: null
};

export const locationReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_LOCATION':
            return {
                ...state,
                currentLocation: action.payload
            };
        default:
            return state;
    }
}
