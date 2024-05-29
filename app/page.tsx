import Hero from "@/components/hero/Hero";
import Features from "@/components/features/Features";
import Pricing from "@/components/pricing/Pricing";
import FrequentlyAskedQuestions from "@/components/faq/FrequentlyAskedQuestions";
import Demo from "@/components/demo/Demo";
import SampleComponents from "@/components/SampleComponents/SampleComponents";
import TechStack from "@/components/techstack/TechStack";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 w-full">
        <Hero />
        {/*<Demo />*/}
        <Features />
        <SampleComponents />
        <Pricing />
        <TechStack />
        <FrequentlyAskedQuestions />
    </main>
  );
}
