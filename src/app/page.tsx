


import FaqSection from "@/components/FaqSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import Landing from "@/components/Landing";
import Navbar from "@/components/Navbar";
import ProblemSolutionSection from "@/components/ProblemSolutionSection ";
import ProgramBenefits from "@/components/ProgramBenefits";
import StudentSuccess from "@/components/StudentSuccess";
import { Lamp } from "@/components/ui/Lamp";



export default function Home() {
  return (
    <div className="bg-slate-950
">
      <Navbar />
       <Lamp />
      <ProblemSolutionSection /> 
       <HowItWorksSection />
      <ProgramBenefits /> 
      <StudentSuccess />
      <FaqSection />

    </div>
    
  );
}
