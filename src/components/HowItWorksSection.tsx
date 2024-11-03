"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ArrowRight, Sparkles } from "lucide-react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { SparklesCore } from "@/components/ui/sparkles";
import {steps} from "../../data"

const StepButton = ({ children  } : any ) => (
    <div className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 hover:text-slate-100">
        {children}
    </div>
);

const HowItWorksSection = () => {


    return (
        <div className="relative min-h-screen bg-slate-950 overflow-hidden py-24 md:py-32">
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

            {/* Lamp Effect Top */}
            <div className="absolute top-16 left-1/2 -translate-x-1/2 h-48 w-full">
                <motion.div
                    initial={{ opacity: 0.5, width: "15rem" }}
                    whileInView={{ opacity: 1, width: "30rem" }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    className="absolute left-1/2 -translate-x-1/2 h-48 w-[30rem] bg-cyan-500/20 blur-3xl"
                />
            </div>

            {/* Content Container */}
            <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
                {/* Title Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-slate-200 to-cyan-400 bg-clip-text text-transparent mb-4">
                        How It Works
                    </h2>
                    <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto">
                        Your journey from classroom to industry, step by step
                    </p>
                </motion.div>

                {/* Vertical Cards */}
                <div className="relative">
                    {/* Connecting Line */}
                    <div className="absolute left-4 md:left-[31px] top-0 bottom-0 w-px bg-gradient-to-b from-blue-600/40 via-purple-600/40 to-blue-600/40" />

                    {/* Cards */}
                    <div className="space-y-16 md:space-y-24">
                        {steps.map((step, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{
                                    delay: step.delay,
                                    duration: 0.6,
                                }}
                                className="relative"
                            >
                                {/* Timeline Dot */}
                                <div className="absolute left-0 w-8 h-8 md:w-16 md:h-16 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-base md:text-2xl shadow-lg shadow-cyan-500/20">
                                    {step.icon}
                                </div>

                                {/* Card */}
                                <div className="ml-12 md:ml-28">
                                    <CardContainer className="w-full">
                                        <CardBody className="relative group/card hover:shadow-2xl hover:shadow-cyan-500/[0.1] bg-gradient-to-b from-slate-900 to-slate-950 border-slate-800 rounded-xl p-6 md:p-8 border">
                                            <div className="space-y-4 md:space-y-6">
                                                <CardItem
                                                    translateZ="50"
                                                    className="text-xl md:text-2xl font-medium bg-gradient-to-br from-slate-200 to-slate-400 bg-clip-text text-transparent"
                                                >
                                                    {step.title}
                                                </CardItem>
                                                <CardItem
                                                    as="p"
                                                    translateZ="40"
                                                    className="text-slate-400 text-base md:text-lg leading-relaxed"
                                                >
                                                    {step.description}
                                                </CardItem>
                                                <CardItem translateZ="60" className="mt-6 md:mt-8">
                                                    <StepButton>
                                                        <span className="mr-2 text-sm md:text-base">{step.cta}</span>
                                                        <ArrowRight className="w-4 h-4" />
                                                    </StepButton>
                                                </CardItem>
                                            </div>

                                            {/* Decorative Elements */}
                                            <div className="absolute top-4 right-4 text-slate-600">
                                                <Sparkles className="w-4 h-4 md:w-5 md:h-5 opacity-50" />
                                            </div>
                                        </CardBody>
                                    </CardContainer>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Bottom Decorative Element */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="mt-16 md:mt-24 text-center"
                >
                    <div className="inline-flex h-1 w-24 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-20" />
                </motion.div>
            </div>

            <style jsx global>{`
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
        }
      `}</style>
        </div>
    );
};

export default HowItWorksSection;