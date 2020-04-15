export const toggleMenu = (menuVisibility) => ({
    type: 'MENU_TOGGLED',
    payload: menuVisibility === 'large' ? 'small' : 'large'
});