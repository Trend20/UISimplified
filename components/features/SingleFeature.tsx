import Image from "next/image";
import {Feature} from "@/types/feature";

interface SingleFeatureProps {
    feature: Feature;
}

const SingleFeature = ({feature}: SingleFeatureProps) => {
    return (
        <div className="flex items-center justify-center gap-4 flex-col">
            <span className="shrink-0 rounded-lg bg-[#06bcc1] p-4">
                <Image src={feature.imageUrl} alt={feature.title} width={30} height={30}/>
            </span>
            <div className="flex items-center justify-center flex-col">
                <h2 className="text-lg font-bold">{feature.title}</h2>

                <p className="mt-1 text-sm text-gray-400 text-center">
                    {feature.description}
                </p>
            </div>
        </div>
    )
}

export default SingleFeature;