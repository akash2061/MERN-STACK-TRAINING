import React from 'react'

const Deshboard = () => {
    const fetchData = async () => {
        try {

        } catch (c) {

        }
    };
    return (
        <div>
            <div className='flex justify-between m-5'>
                <div>
                    <h1 className='text-2xl font-medium text-gray-100'>
                        User
                    </h1>
                </div>
                <div>
                    <button className='p-2 text-gray-100 border border-gray-100'>Add User</button>
                </div>
            </div>
            <div className='w-[96%] mx-auto h-[69vh] rounded bg-gray-100 overflow-auto'>
                <table className='text-gray-800 w-full rounded bg-gray-100 border-separate border-spacing-x-2 border-spacing-y-3'>
                    <thead>
                        <tr>
                            <th>
                                S.No.
                            </th>
                            <th>
                                Full Name
                            </th>
                            <th>
                                Email
                            </th>
                            <th>
                                Address
                            </th>
                            <th>
                                Gender
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Deshboard