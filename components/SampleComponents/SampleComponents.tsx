import SectionHeader from "@/components/shared/SectionHeader";

const SampleComponents = () =>{
    return(
        <div className="w-full justify-center items-center flex py-20">
            <div className="items-center flex flex-col justify-center">
                <SectionHeader>
                    Explore Our Components
                </SectionHeader>
                <p className="mt-4 text-gray-400">
                    A preview of the UI components available in our library.
                </p>
            </div>
        </div>
    )
}

export default SampleComponents;