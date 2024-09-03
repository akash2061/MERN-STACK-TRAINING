import React, { useReducer } from 'react'
import Toggle from './Test-Component/Toggle'

const Reducer = () => {
    const initialState = { count: 0, loading: true };

    function countReducer(state, action) {
        switch (action.type) {
            case "increment":
                return { ...state, count: state.count + 1 };
            case "decrement":
                return { ...state, count: state.count - 1 };
            case "reset":
                return { ...state, count: 0 };
            case "loading":
                return { ...state, loading: !state.loading };
            default:
                return new Error("Unknown Type");
        }
    }
    const [state, dispatch] = useReducer(countReducer, initialState);
    return (
        <div className='p-20 flex flex-col items-center justify-center min-h-screen bg-rose-500'>
            <p className='text-2xl text-white'>
                {state.count}
            </p>
            <br />
            <div className='p-20 flex justify-around gap-20'>
                <button className='p-2 bg-gray-200' onClick={() => {
                    dispatch({ type: "increment" })
                }}>increment</button>
                <button className='p-2 bg-gray-200' onClick={() => {
                    dispatch({ type: "decrement" })
                }}>decrement</button>
            </div>
            <div>
                <Toggle />
            </div>
        </div>
    )
}

export default Reducer