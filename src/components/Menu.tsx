import Image from 'next/image'
import MenuItem from './MenuItem'

function Menu() {
    return (
        <section>
            <div className='absolute left-0 right-0 justify-center'>
                <div className='absolute left-0 -top-[70px] text-left -z-10'>
                    <Image src={"/rightSalad.png"} width={109} height={189} alt="menu image" />
                </div>
                <div className='absolute -top-[100px] right-0 -z-10'>
                    <Image src={"/leftSalad.png"} width={107} height={195} alt="menu image" />
                </div>
            </div>
            <div className='text-center'>
                <h3 className='text-xl font-thin'>Check out</h3>
                <h2 className='text-3xl italic text-blue-500'>MENU</h2>
            </div>
            <div className='grid grid-cols-3 gap-4'>
                <MenuItem img={"/meals.png"} />
                <MenuItem img={"/meals.png"} />
                <MenuItem img={"/meals.png"} />
                <MenuItem img={"/meals.png"} />
                <MenuItem img={"/meals.png"} />
                <MenuItem img={"/meals.png"} />
            </div>
        </section>
    )
}

export default Menu