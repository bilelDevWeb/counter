import React, { useReducer, useEffect } from 'react';
import Counter from './Counter';

// --- Reducer et État Initial ---
const initialState = {
    counters: [
        { id: 1, value: 0, isRunning: false, increment: 1 },
        { id: 2, value: 0, isRunning: false, increment: 2 },
    ],
};

const counterReducer = (state, action) => {
    switch (action.type) {
        case 'START_COUNTER':
            return {
                ...state,
                counters: state.counters.map((counter) =>
                    counter.id === action.id ? { ...counter, isRunning: true } : counter
                ),
            };
        case 'STOP_COUNTER':
            return {
                ...state,
                counters: state.counters.map((counter) =>
                    counter.id === action.id ? { ...counter, isRunning: false } : counter
                ),
            };
        case 'INCREMENT_COUNTER':
            return {
                ...state,
                counters: state.counters.map((counter) =>
                    counter.isRunning
                        ? { ...counter, value: counter.value + counter.increment }
                        : counter
                ),
            };
        default:
            return state;
    }
};


const App = () => {
    const [state, dispatch] = useReducer(counterReducer, initialState);

    useEffect(() => {
        const interval = setInterval(() => {
            dispatch({ type: 'INCREMENT_COUNTER' });
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <h1>React Challenge 01: Counter with Buttons</h1>
            {state.counters.map((counter) => (
                <Counter
                    key={counter.id}
                    id={counter.id}
                    value={counter.value}
                    isRunning={counter.isRunning}
                    increment={counter.increment}
                    onStart={() => dispatch({ type: 'START_COUNTER', id: counter.id })}
                    onStop={() => dispatch({ type: 'STOP_COUNTER', id: counter.id })}
                />
            ))}
        </div>
    );
};

export default App;
