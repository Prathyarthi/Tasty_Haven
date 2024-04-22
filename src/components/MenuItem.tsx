import React from 'react'

function MenuItem({ img }: any) {
    return (
        <div className='bg-slate-800 p-4 rounded-lg text-center m-5 group hover:bg-red-500 hover:shadow-2xl hover:shadow-white transition-all'>
            <div className='flex justify-center'>
                <img className='max-h-auto max-w-auto' src={img} alt="meals" />
            </div>
            <h3 className='text-2xl font-semibold text-white-800 my-2'>Main Course</h3>
            <p className='text-white-200'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            <button className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Add to cart $10</button>
        </div>
    )
}

export default MenuItem