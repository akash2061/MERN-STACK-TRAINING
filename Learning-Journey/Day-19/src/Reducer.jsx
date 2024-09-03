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
        <div className='p-20 flex flex-col items-center justify-center min-h-screen'>
            <p className='text-2xl text-white'>
                {state.count}
            </p>
            <br />
            <div className='p-20 flex justify-around gap-20'>
                <button className='p-2 bg-sky-200 rounded-md w-32 transform active:scale-95 transition-transform duration-100' onClick={() => {
                    dispatch({ type: "increment" })
                }}>Increment</button>
                <button className='p-2 bg-sky-200 rounded-md w-32 transform active:scale-95 transition-transform duration-100' onClick={() => {
                    dispatch({ type: "decrement" })
                }}>Decrement</button>
            </div>
            <div>
                <Toggle />
            </div>
        </div>
    )
}

export default Reducer