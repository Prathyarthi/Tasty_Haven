    import React from 'react'
    import Heading from './Heading'

    function About() {
        return (
            <section className='mt-8'>
                <Heading title={"OUR STORY"} subHeading={"ABOUT US"} />
                <div className='flex flex-col gap-4 max-w-4xl text-center mx-auto m-2'>
                    <p>Welcome to Cafeteria, where passion meets palate in a culinary journey unlike any other. Nestled in the heart of Ballari, our restaurant stands as a beacon of gastronomic excellence, drawing inspiration from both local flavors and global culinary traditions. At Cafeteria, we believe that food is not merely sustenance but a celebration of culture, creativity, and community.</p>
                    <p>Our story begins with a shared love for authentic ingredients and innovative techniques. From farm-fresh produce to carefully sourced spices, each dish atCafeteria is crafted with meticulous attention to detail and a commitment to quality. But beyond the ingredients lies our unwavering dedication to hospitality. Step through our doors, and you'll be greeted with warmth and sincerity, as we strive to create memorable dining experiences for every guest. Whether you're indulging in our chef's tasting menu or simply savoring a cup of artisanal coffee, we invite you to join us on a culinary adventure that tantalizes the senses and nourishes the soul. Welcome to Cafeteria, where every meal tells a story, and every guest is family.</p>
                </div>
            </section>
        )
    }

    export default About