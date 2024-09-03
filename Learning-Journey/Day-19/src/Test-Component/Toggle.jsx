import React, { useState } from 'react';

function ToggleButton() {
    const [isOn, setIsOn] = useState(false);

    return (
        <button className='bg-slate-600 w-20 h-10 m-2 rounded-md text-fuchsia-200 transform active:scale-90 transition-transform duration-100' onClick={() => setIsOn(!isOn)}>
            {isOn ? 'ON' : 'OFF'}
        </button>
    );
}

export default ToggleButton;