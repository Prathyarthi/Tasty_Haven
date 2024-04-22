import Image from "next/image"

function Hero() {
    return (
        <section className="hero">
            <div className="py-12">
                <div className="flex flex-col gap-4">
                    <h1 className="text-5xl">Everything gets better with a <span className="text-blue-500">MEAL!</span></h1>
                    <p className="my-6 text-xl font-semibold">Don't worry about any problem in the world. <span className="text-blue-500"> Just eat first!</span></p>
                    <div className="flex gap-4">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full flex gap-2">Order Now
                            <OrderIcon />
                        </button>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full flex gap-2">Learn More
                            <LearnMoreIcon />
                        </button>
                    </div>
                </div>
            </div>
            <div className="relative">
                <Image src={"/meals.png"} alt="hero image" objectFit="contain" layout="fill" />
            </div>
        </section>
    )
}

export default Hero


function OrderIcon() {
    return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672ZM12 2.25V4.5m5.834.166-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243-1.59-1.59" />
    </svg>
}

function LearnMoreIcon() {
    return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061A1.125 1.125 0 0 1 3 16.811V8.69ZM12.75 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061a1.125 1.125 0 0 1-1.683-.977V8.69Z" />
    </svg>
}