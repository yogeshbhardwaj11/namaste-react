import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: []
  },
  reducers: {
    addItem: (state, action) => {
      // mutating the state

      // In Valina (Older) Redux => DONT MUTATE STATE
      // const newState = [...state];
      // newState.items.push(action.payload)
      // return newState

      // In @reduxjs/toolkit
      // Uses Immer.Js behind the scene.
      // RTK says either mutate state or return a new state
      // We have to mutate state. (There is no option)
      state.items.push(action.payload)
    },
    removeItem: (state, action) => {
      state.items.pop();
    },
    clearCart: (state, action) => {
      console.log(current(state));
      state.items.length = 0;
      // return [] - this will be replaced inside original state
    }
  }
});

export const {addItem, removeItem, clearCart} = cartSlice.actions;

export default cartSlice.reducer;

