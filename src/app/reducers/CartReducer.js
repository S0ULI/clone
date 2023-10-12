export const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_PRODUCT':
            return [...state, action.product]
        case 'REMOVE_PRODUCT':
            return state.filter((product) => product.id !== action.id)
        case 'ISIN_CART':
            return state.some((product) => product.id === action.id);
        case 'CLEAR_CART':
            return []
        default:
            return state
    }
}