import React from 'react'
import Heading from './Heading'

function Contact() {
    return (
        <section className='mt-8'>
            <Heading title={"Having any issue?"} subHeading={"CONTACT US"} />
            <div className='text-center my-2'>
                <a className='text-blue-500 underline text-2xl' href="mailto:prathyarthi@gmail.com">prathyarthi@gmail.com</a>
            </div>
        </section>
    )
}

export default Contact