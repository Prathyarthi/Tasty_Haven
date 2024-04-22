import Link from "next/link";

export const Signup = () => {
    return <div className="flex justify-center">
        <div className="flex flex-col justify-center">
            <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
                <div className='font-bold text-4xl pt-6 text-gray-600'>
                    Signup
                </div>
                <div className='p-4 text-gray-600 text-md'>Enter your information to create an account</div>
                <div className='text-sm font-medium text-left py-2 text-gray-600'>
                    First Name
                </div>
                <input type="text" placeholder={"John"} className='w-full p-2 border rounded border-slate-200' />
                <div className='text-sm font-medium text-left py-2 text-gray-600'>
                    Email
                </div>
                <input type="text" placeholder={"john@gmail.com"} className='w-full p-2 border rounded boder-slate-200' />
                <div className='text-sm font-medium text-left py-2 text-gray-600'>
                    Password
                </div>
                <input type="text" placeholder={"John@123#"} className='w-full p-2 border rounded boder-slate-200' />

                <div className="pt-4">
                    <button className='w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2'>
                        Signup
                    </button>
                </div>

                <div className="py-2 text-sm flex justify-center text-gray-600">
                    <div>
                        Already have an account?
                    </div>
                    <Link className="pointer underline pl-1 cursor-pointer" href={"/login"}>
                        Sign in
                    </Link>
                </div>
            </div>
        </div>
    </div>
}

