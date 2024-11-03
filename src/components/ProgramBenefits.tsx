"use client"
import React from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import {
    Briefcase,
    Users,
    BookOpen,
    Trophy,
    Target
} from "lucide-react";

const benefits = [
    {
        title: "Real Industry Projects",
        description: "Work on actual projects from leading companies, building a portfolio that showcases real-world problem-solving skills.",
        icon: Briefcase,
        className: "md:col-span-2",
        header: "Popular"
    },
    {
        title: "Expert Mentorship",
        description: "Learn directly from industry professionals who guide you through technical challenges and career development.",
        icon: Users,
        className: "md:col-span-1",
        header: "New"
    },
    {
        title: "Project-Based Learning",
        description: "Master practical skills through hands-on experience, not just theory. Build, test, and deploy real solutions.",
        icon: BookOpen,
        className: "md:col-span-1",
        header: "Featured"
    },
    {
        title: "Career Advancement",
        description: "Gain the skills and confidence needed to accelerate your career growth and land your dream role.",
        icon: Target,
        className: "md:col-span-2",
        header: "Must Try"
    },
    {
        title: "Industry Recognition",
        description: "Graduate with a portfolio and credentials recognized by top employers in the technology sector.",
        icon: Trophy,
        className: "md:col-span-2",
        header: "Essential"
    },
    {
        title: "Industry Recognition",
        description: "Graduate with a portfolio and credentials recognized by top employers in the technology sector.",
        icon: Trophy,
        className: "md:col-span-1",
        header: "Essential"
    }
];

const ProgramBenefits = () => {
    return (
        <div className="relative min-h-screen w-full bg-slate-950 py-24 md:py-32 overflow-hidden">
            <div className="absolute inset-0 w-full h-full">
                <BackgroundBeams />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
                {/* Title Section with Framer Motion */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-slate-200 to-cyan-400 bg-clip-text text-transparent mb-4">
                        Program Benefits
                    </h2>
                    <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto">
                        Transform your career with hands-on experience and expert guidance
                    </p>
                </motion.div>


                {/* Bento Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(240px,auto)] mx-auto">
                    {benefits.map((benefit, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1, duration: 0.6 }}
                            className={cn(
                                "group relative rounded-xl border border-slate-800 bg-gradient-to-b from-slate-900 to-slate-950 p-6 md:p-8",
                                "hover:shadow-2xl hover:shadow-cyan-500/[0.1] transition-all duration-300",
                                "hover:border-slate-700",
                                benefit.className
                            )}
                        >
                            <div className="relative z-10 h-full flex flex-col">
                                {/* Header Badge */}
                                <div className="inline-flex items-center rounded-full bg-slate-900 border border-slate-800 px-2.5 py-0.5 text-xs text-slate-400 mb-4 w-fit">
                                    {benefit.header}
                                </div>

                                {/* Title with Icon */}
                                <div className="flex items-start gap-3 mb-4">
                                    <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 flex-shrink-0">
                                        <benefit.icon className="w-5 h-5 text-cyan-500" />
                                    </div>
                                    <h3 className="text-xl font-medium bg-gradient-to-br from-slate-200 to-slate-400 bg-clip-text text-transparent">
                                        {benefit.title}
                                    </h3>
                                </div>

                                {/* Description */}
                                <p className="text-slate-400 text-sm md:text-base leading-relaxed flex-grow">
                                    {benefit.description}
                                </p>
                            </div>

                            {/* Gradient Overlay on Hover */}
                            <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Decoration */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="mt-16 md:mt-24 text-center"
                >
                    <div className="inline-flex h-1 w-24 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-20" />
                </motion.div>
            </div>
        </div>
    );
};

export default ProgramBenefits;