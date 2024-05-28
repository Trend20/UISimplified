"use client"
import Logo from "@/components/Logo";
import WatchDemo from "@/components/WatchDemo";
import Link from "next/link";

const Header = () =>{
    return (
        <header className="w-full py-4 sticky top-0 bg-black text-white p-4 z-50">
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <Logo />

                    <div className="flex items-center space-x-3">
                        <Link href={'/'}>Home</Link>
                        <Link href={'/'}>About</Link>
                        <Link href={'/'}>Features</Link>
                        <Link href={'/'}>Pricing</Link>
                        <Link href={'/'}>Contact</Link>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="sm:flex sm:gap-4">
                            <WatchDemo />
                        </div>
                    </div>
                </div>
            </div>
        </header>

    )
}

export default Header;