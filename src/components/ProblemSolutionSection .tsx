// "use client";
// import React from "react";
// import { motion } from "framer-motion";
// import { AlertCircle, CheckCircle2, TrendingUp, Users, Briefcase, Target } from "lucide-react";
// import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
// import { SparklesCore } from "@/components/ui/sparkles";
// import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
// import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

// const ProblemSolutionSection = () => {
//     const testimonials = [
//         {
//             quote: "Learning Habits transformed my career trajectory. I landed my dream job within weeks of completing the program.",
//             name: "Sarah Johnson",
//             title: "Software Engineer at Google"
//         },
//         {
//             quote: "The hands-on experience and mentorship were game-changing. This platform bridges the gap between theory and practice perfectly.",
//             name: "Michael Chen",
//             title: "Product Manager at Microsoft"
//         },
//         {
//             quote: "Best career investment I've made. The results speak for themselves - from junior dev to tech lead in 18 months.",
//             name: "Emily Rodriguez",
//             title: "Tech Lead at Amazon"
//         },
//     ];

//     const problems = [
//         {
//             icon: <AlertCircle className="w-6 h-6 text-cyan-400" />,
//             title: "Lack of Real Experience",
//             description: "Graduate with theoretical knowledge but missing crucial hands-on experience"
//         },
//         {
//             icon: <Users className="w-6 h-6 text-cyan-400" />,
//             title: "Fierce Competition",
//             description: "Standing out in today's competitive tech market is harder than ever"
//         },
//         {
//             icon: <Briefcase className="w-6 h-6 text-cyan-400" />,
//             title: "Job Market Uncertainty",
//             description: "Rapidly evolving industry demands create anxiety about future prospects"
//         }
//     ];

//     const solutions = [
//         {
//             icon: <CheckCircle2 className="w-6 h-6 text-cyan-400" />,
//             title: "Industry-Led Projects",
//             description: "Work on real projects with experienced tech leaders and mentors"
//         },
//         {
//             icon: <TrendingUp className="w-6 h-6 text-cyan-400" />,
//             title: "Accelerated Growth",
//             description: "Build a portfolio that showcases your practical skills to top employers"
//         },
//         {
//             icon: <Target className="w-6 h-6 text-cyan-400" />,
//             title: "Elite Network",
//             description: "Connect with professionals from leading tech companies globally"
//         }
//     ];

//     return (
//         <div className="relative min-h-screen bg-slate-950 overflow-hidden py-24 md:py-32 mt-20">
//             {/* Background Elements */}
//             <div className="absolute inset-0 w-full h-full">
//                 <SparklesCore
//                     id="tsparticlesfullpage"
//                     background="transparent"
//                     minSize={0.6}
//                     maxSize={1.4}
//                     particleDensity={10}
//                     className="w-full h-full"
//                     particleColor="#94a3b8"
//                 />
//             </div>

//             {/* Lamp Effect Top */}
//             <div className="absolute top-16 left-1/2 -translate-x-1/2 h-48 w-full">
//                 <motion.div
//                     initial={{ opacity: 0.5, width: "10rem" }}
//                     whileInView={{ opacity: 1, width: "25rem" }}
//                     transition={{
//                         delay: 0.3,
//                         duration: 0.8,
//                         ease: "easeInOut",
//                     }}
//                     className="absolute left-1/2 -translate-x-1/2 h-48 w-[30rem] bg-cyan-500/20 blur-3xl"
//                 />
//             </div>

//             <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
//                 {/* Main Heading */}
//                 <motion.div
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ duration: 0.5 }}
//                     className="text-center mb-20"
//                 >
//                     <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-slate-200 to-cyan-400 bg-clip-text text-transparent mb-4">
//                         Level Up Your Tech Career
//                     </h2>
//                     <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto">
//                         Bridge the gap between education and industry with our proven pathway to success
//                     </p>
//                 </motion.div>

//                 <div className="grid md:grid-cols-2 gap-8 md:gap-12">
//                     {/* Problems Section */}
//                     <motion.div
//                         initial={{ opacity: 0, x: -20 }}
//                         whileInView={{ opacity: 1, x: 0 }}
//                         viewport={{ once: true }}
//                         transition={{ duration: 0.5 }}
//                     >
//                         <CardContainer className="w-full">
//                             <CardBody className="relative group/card hover:shadow-2xl hover:shadow-cyan-500/[0.1] bg-gradient-to-b from-slate-900 to-slate-950 border-slate-800 rounded-xl p-6 md:p-8 border">
//                                 <CardItem translateZ="50" className="text-2xl font-bold bg-gradient-to-br from-slate-200 to-slate-400 bg-clip-text text-transparent mb-6">
//                                     Common Challenges
//                                 </CardItem>
//                                 <div className="space-y-6">
//                                     {problems.map((problem, index) => (
//                                         <CardItem
//                                             key={index}
//                                             translateZ="40"
//                                             className="flex items-start gap-4 p-4 rounded-lg bg-slate-900/50 hover:bg-slate-900/80 transition-all duration-300"
//                                         >
//                                             {problem.icon}
//                                             <div>
//                                                 <h4 className="font-semibold text-slate-200 mb-1">
//                                                     {problem.title}
//                                                 </h4>
//                                                 <p className="text-slate-400 text-sm">
//                                                     {problem.description}
//                                                 </p>
//                                             </div>
//                                         </CardItem>
//                                     ))}
//                                 </div>
//                             </CardBody>
//                         </CardContainer>
//                     </motion.div>

//                     {/* Solutions Section */}
//                     <motion.div
//                         initial={{ opacity: 0, x: 20 }}
//                         whileInView={{ opacity: 1, x: 0 }}
//                         viewport={{ once: true }}
//                         transition={{ duration: 0.5 }}
//                     >
//                         <CardContainer className="w-full">
//                             <CardBody className="relative group/card hover:shadow-2xl hover:shadow-cyan-500/[0.1] bg-gradient-to-b from-slate-900 to-slate-950 border-slate-800 rounded-xl p-6 md:p-8 border">
//                                 <CardItem translateZ="50" className="text-2xl font-bold bg-gradient-to-br from-slate-200 to-slate-400 bg-clip-text text-transparent mb-6">
//                                     Our Solution
//                                 </CardItem>
//                                 <div className="space-y-6">
//                                     {solutions.map((solution, index) => (
//                                         <CardItem
//                                             key={index}
//                                             translateZ="40"
//                                             className="flex items-start gap-4 p-4 rounded-lg bg-slate-900/50 hover:bg-slate-900/80 transition-all duration-300"
//                                         >
//                                             {solution.icon}
//                                             <div>
//                                                 <h4 className="font-semibold text-slate-200 mb-1">
//                                                     {solution.title}
//                                                 </h4>
//                                                 <p className="text-slate-400 text-sm">
//                                                     {solution.description}
//                                                 </p>
//                                             </div>
//                                         </CardItem>
//                                     ))}
//                                 </div>
//                             </CardBody>
//                         </CardContainer>
//                     </motion.div>
//                 </div>

//                 {/* Testimonials */}
//                 <div className="mt-24 mb-0">
//                     <h3 className="text-2xl font-bold text-center mb-8 bg-gradient-to-r from-cyan-400 to-slate-200 bg-clip-text text-transparent">
//                         Success Stories
//                     </h3>
//                     <InfiniteMovingCards
//                         items={testimonials}
//                         direction="right"
//                         speed="slow"
//                     />
//                 </div>

//                 [Previous code remains the same until the CTA button section, where we update the button className and style]

//                 {/* Call to Action */}
//                 <motion.div
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ duration: 0.5 }}
//                     className="text-center mt-16"
//                 >
//                     <button className="inline-flex hover:border-2 hover:text-white h-12 animate-shimmer items-center justify-center rounded-md border-2 border-slate-800 bg-[linear-gradient(110deg,#000103,45%,rgba(14,116,144,0.3),55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-300 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-950">
//                         Get Me Started! <Target className="w-4 h-4 ml-2" />
//                     </button>
//                     <p className="text-slate-400 mt-4">
//                         Join 10,000+ professionals who accelerated their careers with us
//                     </p>
//                 </motion.div>

//             </div>

//             <style jsx global>{`
//         @keyframes shimmer {
//   from {
//     background-position: 0%;
//   }
//   to {
//     background-position: -200%;
//   }
// }
// .animate-shimmer {
//   animation: shimmer 8s linear infinite;
//   background-image: linear-gradient(110deg,
//     #000103,
//     40%,
//     rgba(14,116,144,0.2),
//     45%,
//     rgba(6,182,212,0.3),
//     55%,
//     rgba(14,116,144,0.2),
//     60%,
//     #000103
//   );
//   background-size: 200% 100%;
//   transition: border-color 0.4s ease;
// }
// .animate-shimmer:hover {
//   border-color: rgba(6,182,212,0.4);
// }
//       `}</style>
//         </div>
//     );
// };

// export default ProblemSolutionSection;


"use client"
import React from "react";
import { motion } from "framer-motion";
import { AlertCircle, CheckCircle2, TrendingUp, Users, Briefcase, Target } from "lucide-react";
import { SparklesCore } from "@/components/ui/sparkles";

const ProblemSolutionSection = () => {
    const testimonials = [
        {
            quote: "Learning Habits transformed my career trajectory. I landed my dream job within weeks of completing the program.",
            name: "Sarah Johnson",
            title: "Software Engineer at Google"
        },
        {
            quote: "The hands-on experience and mentorship were game-changing. This platform bridges the gap between theory and practice perfectly.",
            name: "Michael Chen",
            title: "Product Manager at Microsoft"
        },
        {
            quote: "Best career investment I've made. The results speak for themselves - from junior dev to tech lead in 18 months.",
            name: "Emily Rodriguez",
            title: "Tech Lead at Amazon"
        }
    ];

    const problems = [
        {
            icon: <AlertCircle className="w-6 h-6 text-cyan-400" />,
            title: "Lack of Real Experience",
            description: "Graduate with theoretical knowledge but missing crucial hands-on experience"
        },
        {
            icon: <Users className="w-6 h-6 text-cyan-400" />,
            title: "Fierce Competition",
            description: "Standing out in today's competitive tech market is harder than ever"
        },
        {
            icon: <Briefcase className="w-6 h-6 text-cyan-400" />,
            title: "Job Market Uncertainty",
            description: "Rapidly evolving industry demands create anxiety about future prospects"
        }
    ];

    const solutions = [
        {
            icon: <CheckCircle2 className="w-6 h-6 text-cyan-400" />,
            title: "Industry-Led Projects",
            description: "Work on real projects with experienced tech leaders and mentors"
        },
        {
            icon: <TrendingUp className="w-6 h-6 text-cyan-400" />,
            title: "Accelerated Growth",
            description: "Build a portfolio that showcases your practical skills to top employers"
        },
        {
            icon: <Target className="w-6 h-6 text-cyan-400" />,
            title: "Elite Network",
            description: "Connect with professionals from leading tech companies globally"
        }
    ];

    return (
        <div className="relative min-h-screen bg-slate-950 overflow-hidden py-24 md:py-32 mt-10">
            {/* Background Elements */}
            <div className="absolute inset-0 w-full h-full">
                <SparklesCore
                    id="tsparticlesfullpage"
                    background="transparent"
                    minSize={0.6}
                    maxSize={1.4}
                    particleDensity={10}
                    className="w-full h-full"
                    particleColor="#94a3b8"
                />
            </div>

            {/* Main Content Container */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
                {/* Main Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-slate-200 to-cyan-400 bg-clip-text text-transparent mb-4">
                        Level Up Your Tech Career
                    </h2>
                    <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto">
                        Bridge the gap between education and industry with our proven pathway to success
                    </p>
                </motion.div>

                {/* Problems and Solutions Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                    {/* Problems Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 rounded-xl p-6 md:p-8"
                    >
                        <h3 className="text-2xl font-bold bg-gradient-to-br from-slate-200 to-slate-400 bg-clip-text text-transparent mb-6">
                            Common Challenges
                        </h3>
                        <div className="space-y-6">
                            {problems.map((problem, index) => (
                                <div
                                    key={index}
                                    className="flex items-start gap-4 p-4 rounded-lg bg-slate-900/50 hover:bg-slate-900/80 transition-all duration-300"
                                >
                                    {problem.icon}
                                    <div>
                                        <h4 className="font-semibold text-slate-200 mb-1">
                                            {problem.title}
                                        </h4>
                                        <p className="text-slate-400 text-sm">
                                            {problem.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Solutions Section */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 rounded-xl p-6 md:p-8"
                    >
                        <h3 className="text-2xl font-bold bg-gradient-to-br from-slate-200 to-slate-400 bg-clip-text text-transparent mb-6">
                            Our Solution
                        </h3>
                        <div className="space-y-6">
                            {solutions.map((solution, index) => (
                                <div
                                    key={index}
                                    className="flex items-start gap-4 p-4 rounded-lg bg-slate-900/50 hover:bg-slate-900/80 transition-all duration-300"
                                >
                                    {solution.icon}
                                    <div>
                                        <h4 className="font-semibold text-slate-200 mb-1">
                                            {solution.title}
                                        </h4>
                                        <p className="text-slate-400 text-sm">
                                            {solution.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Testimonials Section */}
                <div className="mt-20">
                    <h3 className="text-2xl font-bold text-center mb-8 bg-gradient-to-r from-cyan-400 to-slate-200 bg-clip-text text-transparent">
                        Success Stories
                    </h3>
                    <div className="overflow-hidden relative">
                        <div className="flex animate-scroll gap-4">
                            {[...testimonials, ...testimonials].map((testimonial, index) => (
                                <div
                                    key={index}
                                    className="flex-shrink-0 w-80 bg-slate-900/50 p-6 rounded-lg border border-slate-800"
                                >
                                    <p className="text-slate-300 mb-4">{testimonial.quote}</p>
                                    <div>
                                        <p className="text-cyan-400 font-semibold">{testimonial.name}</p>
                                        <p className="text-slate-400 text-sm">{testimonial.title}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Call to Action */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mt-20"
                >
                    <button className="inline-flex hover:border-2 hover:text-white h-12 animate-shimmer items-center justify-center rounded-md border-2 border-slate-800 bg-[linear-gradient(110deg,#000103,45%,rgba(14,116,144,0.3),55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-300 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-950">
                        Get Me Started! <Target className="w-4 h-4 ml-2" />
                    </button>
                    <p className="text-slate-400 mt-4">
                        Join 10,000+ professionals who accelerated their careers with us
                    </p>
                </motion.div>
            </div>

            <style jsx>{`
                @keyframes scroll {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }
                .animate-scroll {
                    animation: scroll 30s linear infinite;
                }
                @keyframes shimmer {
                    from {
                        background-position: 0%;
                    }
                    to {
                        background-position: -200%;
                    }
                }
                .animate-shimmer {
                    animation: shimmer 8s linear infinite;
                    background-image: linear-gradient(110deg, 
                        #000103,
                        40%,
                        rgba(14,116,144,0.2),
                        45%,
                        rgba(6,182,212,0.3),
                        55%,
                        rgba(14,116,144,0.2),
                        60%,
                        #000103
                    );
                    background-size: 200% 100%;
                    transition: border-color 0.4s ease;
                }
                .animate-shimmer:hover {
                    border-color: rgba(6,182,212,0.4);
                }
            `}</style>
        </div>
    );
};

export default ProblemSolutionSection;