import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

const LoginButton = () =>{
    return (
        <div className="sm:flex sm:gap-4">
            <Link href={'/auth'} className="flex border border-[#06bcc1] rounded-xl p-3 w-36 justify-center items-center space-x-3">
                <span>Sign In</span>
                <span><BsArrowRight /></span>
            </Link>
        </div>
    )
}

export default LoginButton;