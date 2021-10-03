import classes from "./Counter.module.css";
import { useSelector, connect } from "react-redux";
// connect will be used to wrap the class component

const Counter = () => {
  const counter = useSelector(state => state.counter);
  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
