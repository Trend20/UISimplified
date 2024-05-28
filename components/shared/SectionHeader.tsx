import {ReactNode} from "react";

const SectionHeader = ({ children }: { children: ReactNode }) => {
    return <h2 className="text-3xl w-full font-extrabold text-white sm:text-5xl">{children}</h2>
}

export default SectionHeader;