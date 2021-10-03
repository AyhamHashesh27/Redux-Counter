// Import Redux
import { createStore } from "redux";

// Reducer functions
const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "increment") {
    return { counter: state.counter + 1 };
  } else if (action.type === "decrement") {
    return { counter: state.counter - 1 };
  }
  return state;
};

// Create Store
const store = createStore(counterReducer);

// Provide store to react
export default store;

const counterSubscriber = () => {};

// Apply action
