import React from 'react';
import Button from './Button';

const Counter = ({ id, value, isRunning, increment, onStart, onStop}) => {
    return (
        <div style={{ margin: '10px' }}>
            <h2>Counter {id}: {value}:</h2>
            <Button
                onClick={onStart}
                disabled={isRunning}
                lable="Stop"
            />
            <Button
                onClick={onStop}
                disabled={!isRunning}
                label="Stop"
            />
        </div>
            
    );
};

export default Counter