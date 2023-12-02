import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../../services/products/type';

interface CartState {
  items: Product[];
  count: number;
  quantityById: { [productId: number]: number };
}

const initialState: CartState = {
  items: [],
  count: 0,
  quantityById: {},
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCart(state, action: PayloadAction<Product>) {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        state.count--;
        delete state.quantityById[action.payload.id];
        state.items = state.items.filter(item => item.id !== action.payload.id);
      } else {
        state.count++;
        state.items.push(action.payload);
        state.quantityById = { ...state.quantityById, [action.payload.id]: 1 };
      }
    },
    addToProductQuantity(state, action: PayloadAction<number>) {
      const productId = action.payload;
      if (state.quantityById[productId]) {
        state.quantityById[productId]++;
      } else {
        state.quantityById[productId] = 1;
      }
    },
    removeFromProductQuantity(state, action: PayloadAction<number>) {
      const productId = action.payload;
      if (state.quantityById[productId]) {
        state.quantityById[productId]--;
        if (state.quantityById[productId] === 0) {
          state.count--;
          delete state.quantityById[productId];
          state.items = state.items.filter(item => item.id !== productId);
        }
      }
    },
  },
});

export const { setCart, addToProductQuantity, removeFromProductQuantity } = cartSlice.actions;
export default cartSlice.reducer;
