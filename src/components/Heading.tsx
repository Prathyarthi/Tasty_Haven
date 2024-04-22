import React from 'react'

function Heading({ title, subHeading }: any) {
    return (
        <div className='text-center'>
            <h3 className='text-xl font-thin'>{title}</h3>
            <h2 className='text-3xl italic text-blue-500'>{subHeading}</h2>
        </div>
    )
}

export default Heading