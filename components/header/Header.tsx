"use client"
import Logo from "@/components/Logo";
import Link from "next/link";
import LoginButton from "@/components/LoginButton";

const Header = () =>{
    return (
        <header className="w-full py-4 sticky top-0 bg-black text-white p-4 z-50">
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <div className="flex">
                        <Logo />
                    </div>
                    <div className="flex items-center space-x-5 w-1/4 font-light">
                        <Link href={'/'}>Home</Link>
                        <Link href={'/'}>About</Link>
                        <Link href={'/'}>Features</Link>
                        <Link href={'/'}>Pricing</Link>
                        <Link href={'/'}>Contact</Link>
                    </div>
                    <div className="flex items-center gap-4">
                        <LoginButton />
                    </div>
                </div>
            </div>
        </header>

    )
}

export default Header;