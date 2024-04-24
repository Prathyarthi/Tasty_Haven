'use client'
import Link from "next/link"
import Button from "./Button"
import Image from "next/image"
import { useRouter } from "next/navigation"


function Navbar() {
    const router = useRouter();
    const handleLogin = () => {
        router.push('/login');
    };

    const handleSignup = () => {
        router.push('/signup');
    };
    return (
        <div>
            <header className="flex justify-between items-center">
                <Link className="text-2xl text-blue-100 font-bold" href={"/"}>
                    <div className="flex items-center">
                        <Image src={"/cafeteria.png"} alt="logo" width={150} height={150} />
                    </div>
                </Link>
                <nav className="flex gap-4 items-center font-semibold">
                    <Link href={"/"}>Home</Link>
                    <Link href={"/menu"}>Menu</Link>
                    <Link href={"/about"}>About</Link>
                    <Link href={"/contact"}>Contact</Link>
                    <Button text="Login" onclick={handleLogin} />
                    <Button text="Signup" onclick={handleSignup} />
                </nav>
            </header>
        </div>
    )
}

export default Navbar