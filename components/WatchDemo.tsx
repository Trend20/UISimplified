import Link from "next/link";

const WatchDemo = () => {
    return(
        <Link
            target={'_blank'}
            className="flex items-center justify-center space-x-3 w-full rounded-full bg-white text-[#06bcc1] px-12 py-3 text-sm font-medium focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
            href={"https://github.com/Trend20/looper"}
        >
            Demo
        </Link>
    )
}

export default WatchDemo;