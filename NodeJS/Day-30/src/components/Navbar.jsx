import React from 'react'
import { GiPlagueDoctorProfile } from "react-icons/gi";

const Nevbar = () => {
    return (
        <div className='flex justify-between items-center bg-gray-200 p-2 m-3 rounded-lg shadow-lg'>
            <div className='text-2xl text-gray-800 font-semibold'>
                Logo
            </div>
            <div>
                <input type="text" placeholder='Serach...' className='p-2 bg-white outline-none border rounded shadow' />
            </div>
            <div className='text-3xl font-semibold'>
                <GiPlagueDoctorProfile />
            </div>
        </div>
    )
}

export default Nevbar