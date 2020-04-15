const INITIAL_STATE = { visibility: 'large' };

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'MENU_TOGGLED':
            return {
                ...state,
                visibility: action.payload
            } 
        default:
            return state;
    }
}