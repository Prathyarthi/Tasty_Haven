import React from 'react'
import Button from './Button'

function MenuItem({ img }: any) {
    return (
        <div className='bg-gray-500 p-4 rounded-lg text-center m-5'>
            <img src={img} alt="meals" />
            <h3 className='text-2xl font-semibold text-blue-200'>Main Course</h3>
            <p className='text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Add to cart $10</button>
        </div>
    )
}

export default MenuItem