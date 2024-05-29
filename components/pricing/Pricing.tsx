import FreePlan from "@/components/pricing/FreePlan";
import ProPlan from "@/components/pricing/ProPlan";
import TeamPlan from "@/components/pricing/TeamPlan";

const Pricing = () => {
    return (
        <div className="mx-auto max-w-5xl justify-center items-center flex flex-col px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
            <div className="max-w-xl text-center">
                <h2 className="text-3xl font-extrabold text-white sm:text-5xl">Flexible Pricing Plans</h2>

                <p className="mt-4 text-gray-400">
                    Choose the plan that best fits your needs. Whether you&rsquo;re a casual user or a power user, we&rsquo;ve got you covered.
                </p>
            </div>
            <div className="grid w-full grid-cols-1 gap-4 lg:grid-cols-3 sm:items-center mt-8">
                <FreePlan />
                <ProPlan />
                <TeamPlan />
            </div>
        </div>
    )
}

export default Pricing;