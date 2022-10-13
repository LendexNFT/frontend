export const cartReducer = (state, action) => {
	switch (action.type) {
		case 'ADD_TO_CART':
			return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] };
		case 'REMOVE_FROM_CART':
			console.log('REMOVE_FROM_CART', action.payload);
			return {
				...state,
				cart: state.cart.filter((c) => c.id !== action.payload.id),
			};
		// case "CHANGE_CART_QTY":
		//   return {
		//     ...state,
		//     cart: state.cart.filter(
		//       (c) => c.id === action.payload.id
		//       ? (c.qty = action.payload.qty)
		//       : c.qty
		//     ),
		//   };
		default:
			return state;
	}
};

export const productReducer = (state, action) => {
	switch (action.type) {
		case 'SORT_BY_PRICE':
			return { ...state, sort: action.payload };
		case 'FILTER_BY_STOCK':
			return { ...state, byStock: !state.byStock };
		case 'FILTER_BY_DELIVERY':
			return { ...state, byFastDelivery: !state.byFastDelivery };
		case 'FILTER_BY_RATING':
			return { ...state, byRating: action.payload };
		case 'FILTER_BY_SEARCH':
			return { ...state, searchQuery: action.payload };
		case 'CLEAR_FILTER':
			return {
				byStock: false,
				byFastDelivery: false,
				byRating: 0,
				searchQuery: '',
			};

		default:
			return state;
	}
};

// Reducer for
export const yuorSuppliesAssetsReducer = (state, action) => {
	switch (action.type) {
		case 'ADD_TO_CART':
			return { ...state, yourSuppliesCart: [...state.yourSuppliesCart, { ...action.payload, qty: 1 }] };
		case 'REMOVE_FROM_CART___':
			return {
				...state,
				yourSuppliesCart: state.yourSuppliesCart.filter((c) => c.id !== action.payload.id),
			};
		case 'REMOVE_FROM_CART':
			return {
				...state,
				yourSuppliesCart: state.yourSuppliesCart.filter((c) => c.id !== action.payload.id),
			};
		// case "CHANGE_CART_QTY":
		//   return {
		//     ...state,
		//     cart: state.cart.filter(
		//       (c) => c.id === action.payload.id
		//       ? (c.qty = action.payload.qty)
		//       : c.qty
		//     ),
		//   };
		default:
			return state;
	}
};

// Reducer for
export const yourBorrowsAssetsReducer = (state, action) => {
	switch (action.type) {
		case 'ADD_TO_CART':
			return { ...state, yourBorrowsCart: [...state.yourBorrowsCart, { ...action.payload, qty: 1 }] };
		case 'REMOVE_FROM_CART':
			return {
				...state,
				yourBorrowsCart: state.cart.filter((c) => c.id !== action.payload.id),
			};
		// case "CHANGE_CART_QTY":
		//   return {
		//     ...state,
		//     cart: state.cart.filter(
		//       (c) => c.id === action.payload.id
		//       ? (c.qty = action.payload.qty)
		//       : c.qty
		//     ),
		//   };
		default:
			return state;
	}
};
