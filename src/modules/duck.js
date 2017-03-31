export const openMenu = () => ({ type: 'MENU_OPEN' });
export const closeMenu = () => ({ type: 'MENU_CLOSE' });
const initialState = {
    menuOpen: false,
};
export default (state = initialState, action) => {
    switch (action.type) {
        case 'MENU_OPEN': return Object.assign({}, state, { menuOpen: true });
        case 'MENU_CLOSE': return Object.assign({}, state, { menuOpen: false });
        default: return state;
    }
};
//# sourceMappingURL=duck.js.map