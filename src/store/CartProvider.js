import React , {useReducer} from  'react';
import CartContext from './CartContext';

const defaultCartState={
    items:[],
    totalAmount:0,
}


const cartReducer = (state, action) => {
  if (action.type === 'ADD') {
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    const existingCartItemIndex = state.items.findIndex(
      (item) => item.title === action.item.title
    );
    const existingCartItem = state.items[existingCartItemIndex];

    let updatedItems;

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  } else if (action.type === 'REMOVE') {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.title === action.title
    );
    const existingCartItem = state.items[existingCartItemIndex];

    if (!existingCartItem) {
      return state; // Item not found, return the current state
    }

    const updatedTotalAmount =
      state.totalAmount - existingCartItem.price * existingCartItem.amount;

    let updatedItems;
    if (existingCartItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.title !== action.title);
    } else {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount - 1,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  return state;
};

// const cartReducer = (state, action) => {
//   if (action.type === 'ADD') {
//     const updatedItem = { ...action.item, amount: 1 }; // Always add one item
//     const updatedItems = [...state.items, updatedItem];

//     const updatedTotalAmount =
//       state.totalAmount + action.item.price * 1; // Update total amount correctly
//       console.log('Adding to cart:', action.item);
//     console.log('Updated items:', updatedItems);
//     console.log('Updated total amount:', updatedTotalAmount)

//     return {
//       items: updatedItems,
//       totalAmount: updatedTotalAmount,
      
//     };
    
    
//   } else if (action.type === 'REMOVE') {
//     const existingCartItemIndex = state.items.findIndex(
//       (item) => item.title === action.title
//     );
//     const existingCartItem = state.items[existingCartItemIndex];

//     if (!existingCartItem) {
//       return state; // Item not found, return the current state
//     }

//     const updatedTotalAmount =
//       state.totalAmount - existingCartItem.price * existingCartItem.amount;

//     let updatedItems;
//     if (existingCartItem.amount === 1) {
//       updatedItems = state.items.filter((item) => item.title !== action.title);
//     } else {
//       const updatedItem = {
//         ...existingCartItem,
//         amount: existingCartItem.amount - 1,
//       };
//       updatedItems = [...state.items];
//       updatedItems[existingCartItemIndex] = updatedItem;
//     }

//     return {
//       items: updatedItems,
//       totalAmount: updatedTotalAmount,
//     };
//   }
//   return state;
// };



const CartProvider=(props)=>{
    const [cartState,dispatchCartAction]=useReducer(cartReducer,defaultCartState);

  const addItemToCartHandler=(item)=>{
  dispatchCartAction({type:'ADD',item:item})
  }

  const removeItemFromCartHandler = (itemTitle) => {
    dispatchCartAction({ type: 'REMOVE', title: itemTitle });
  };

  const cartContext={
    items:cartState.items,
    totalAmount:cartState.totalAmount,
    addItem:addItemToCartHandler,
    removeItem: removeItemFromCartHandler
  }


    return(<CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
    )
}
export default CartProvider;

