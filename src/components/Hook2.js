import React, { useState } from 'react';

export default function Hook2() {
    const initialCount = 0;
    const [count, setCount] = useState(initialCount);

    const incr5 = () => {
        setCount(prevCount => prevCount + 5);
    };

    return (
        <div>
            <div>{count}</div>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
            <button onClick={() => setCount(initialCount)}>Reset</button>
            <button onClick={incr5}>Increment by 5</button>
        </div>
    );
}
