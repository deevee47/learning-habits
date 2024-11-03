"use client"
import React from "react";
import { motion } from "framer-motion";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { faqData } from "../../data"
import { ArrowRight } from "lucide-react";

const GradientButton = ({ children }: { children: String }) => (
    <div className="relative w-fit mx-auto group">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 rounded-md opacity-75 blur-sm group-hover:opacity-100 animate-gradient-x"></div>
        <button className="relative px-8 py-3 bg-slate-950 rounded-md font-medium flex items-center gap-2 text-white transition-all duration-300 group-hover:bg-slate-900">
            {children}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </button>
    </div>
);

const FaqSection = () => {
    return (
        <div className="w-full bg-dot-white/[0.2] relative py-24 md:py-32">


            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
                {/* Title Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-slate-200 to-cyan-400 bg-clip-text text-transparent mb-4">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto">
                        Addressing your concerns to help you take the next step in your tech career.
                    </p>
                </motion.div>

                {/* Accordion Section */}
                <Accordion type="single" collapsible className="w-full space-y-4">
                    {faqData.map((faq, index) => (
                        <AccordionItem value={index.toString()} key={index} className="border border-cyan-950 rounded-lg shadow-sm">
                            <AccordionTrigger className="flex justify-between items-center p-4 bg-slate-800 text-white rounded-lg cursor-pointer hover:bg-slate-700 transition-colors duration-300">
                                <span>{faq.question}</span>
                            </AccordionTrigger>
                            <AccordionContent className="p-4 rounded-b-lg text-slate-200 transition-all duration-300">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="text-center mt-10"
                >
                    <p className="text-slate-400 text-lg mb-6">
                        Join our next cohort and transform your career
                    </p>
                        <GradientButton>Let's Get Started</GradientButton>
                </motion.div>
            </div>
        </div>
    );
};

export default FaqSection;
