import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = { counter: 0, showCounter: true };

// Slice of our global states
const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    // By default recieve the latest state
    increment(state) {
      // mutate the state
      state.counter++;
      // toolkit packet will update the state automatically
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});


const store = configureStore({
  reducer: counterSlice.reducer,
});
// Provide store to react
export default store;
export const counterActions = counterSlice.actions;
