const { omit } = require("lodash");
const cartReducer = (state = { items: {}, isOpen: false }, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      {
        const product = action.payload;
        const newState = { ...state };

        if (state.items[product.id]) {
          return {
            ...state,
            items: {
              [product.id]: {
                ...state.items[product.id],
                quantity: state.items[product.id].quantity + 1,
              },
            },
          };
        } else {
          return {
            ...state,
            items: {
              ...items,
              [product.id]: {
                ...product,
                quantity: 1,
              },
            },
          };
        }
      }

      break;
    case "REMOVE_FROM_CART":
      {
        const product = action.payload;
        if (state.items[product.id].quantity <= 1) {
          return {
            ...state,
            items: omit(state.items, [product.id]),
          };
        } else {
          return {
            ...state,
            items: {
              ...state.items,
              [product.id]: {
                ...state.items[product.id],
                quantity: state.items[product.id].quantity - 1,
              },
            },
          };
        }
      }
      break;
    case "SHOW_CART":
      {
        return {
          ...state,
          isOpen: true,
        };
      }
      break;
    case "HIDE_CART": {
      return {
        ...state,
        isOpen: false,
      };
    }
    default:
      break;
  }
};
