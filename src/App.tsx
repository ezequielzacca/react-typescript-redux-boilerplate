import React from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { INCREMENT, DECREMENT } from "./redux/actions/action-types";

const App: React.FC = () => {
    const counter = useSelector((state: { counter: number }) => state.counter);
    const dispatch = useDispatch();
    const increment = () => dispatch({ type: INCREMENT });
    const decrement = () => dispatch({ type: DECREMENT });
    return (
        <div className="App">
            <h1>counter</h1>
            <span>Counter Value: {counter}</span>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </div>
    );
};

export default App;
