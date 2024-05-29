import stackData from '../../data/info.json'
import SingleStack from "@/components/techstack/SingleStack";
import {Extension} from "@/types/Extension";

const TechStack = () =>{
    return (
        <section className="text-white w-full flex py-32 justify-center items-center">
            <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 flex flex-col text-center justify-center items-center">
                <div className="max-w-xl">
                    <h2 className="text-3xl font-extrabold text-white sm:text-5xl">Built with Modern Technologies</h2>

                    <p className="mt-4 text-gray-400">
                        Our platform is built using the latest and most reliable technologies.
                    </p>
                </div>
                <div className="mt-8 flex items-center justify-center gap-8 md:mt-16 md:gap-12">
                    {
                        stackData.stack.map((extension:Extension) => (
                            <SingleStack key={extension.id} extension={extension} />
                        ))
                    }
                </div>
            </div>
        </section>

    )
}

export default TechStack;