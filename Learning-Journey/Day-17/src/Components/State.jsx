import React, { useState } from 'react';

const State = () => {
    // Hooks , useState
    const [count, setCount] = useState(0);
    // let count = 0;
    console.log(count);
    return (
        <div className='bg-green-300 p-10 w-full text-gray-800 text-center'>
            <p>The Value of Count is: {count}</p>
            <button className='p-2 bg-slate-200 shadow rounded text-gray-800 m-4 active:bg-slate-400' onClick={() => {
                setCount(count - 1);
            }}>Dec Count(-)</button>
            <button className='p-2 bg-slate-200 shadow rounded text-gray-800 m-4 active:bg-slate-400' onClick={() => {
                setCount(count + 1);
            }}>Inc Count(+)</button>
            <p>The Value of Count is: {count}</p>
        </div>
    )
}

export default State