import { Extension } from "@/types/Extension";
import Image from "next/image";

interface SingleExtensionProps {
    extension: Extension;
}

const SingleStack = ({extension}:SingleExtensionProps) => {
    return (
        <div className="flex items-center justify-center cursor-pointer rounded-lg p-3 space-x-3">
            <Image src={extension.icon} alt={extension.name} width={70} height={70}/>
            <p>{extension.name}</p>
        </div>
    )
}

export default SingleStack;