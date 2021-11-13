const INITIAL_STATE = {
    currentUser: null
}

const userReducer = (state = INITIAL_STATE, action) => {            // INITIAL_STATE IS THE DEFAULT VALUE
    switch (action.type) {
        case 'SET_CURRENT_USER':
            return {
                ...state,      // we only want to modify the values that we care about, so others remain the same (...state) 
                currentUser: action.payload
            }
        default:
            return state;
    }
};

export default userReducer;