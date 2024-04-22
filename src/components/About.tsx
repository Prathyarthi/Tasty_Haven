    import React from 'react'
    import Heading from './Heading'

    function About() {
        return (
            <section className='mt-5'>
                <Heading title={"OUR STORY"} subHeading={"ABOUT US"} />
                <div className='flex flex-col gap-4 max-w-lg text-center mx-auto'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque ea magni veritatis nobis minima velit adipisci natus repellendus veniam laborum consectetur praesentium sint dolorum, eum odio, ex nesciunt. Voluptate accusantium voluptates, pariatur, sunt dolores eos iure repudiandae quod dolore illo assumenda impedit enim repellat quas, facilis expedita harum reprehenderit aliquid.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque ea magni veritatis nobis minima velit adipisci natus repellendus veniam laborum consectetur praesentium sint dolorum, eum odio, ex nesciunt. Voluptate accusantium voluptates, pariatur, sunt dolores eos iure repudiandae quod dolore illo assumenda impedit enim repellat quas, facilis expedita harum reprehenderit aliquid.</p>
                </div>
            </section>
        )
    }

    export default About