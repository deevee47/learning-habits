"use client"
import React, { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import confetti from 'canvas-confetti';
import { cn } from "@/lib/utils";
import {
    GraduationCap,
    Code,
    Database,
    LineChart,
    Cpu,
    Command,
    Play
} from "lucide-react";
import { HoverEffect } from "./ui/card-hover-effect";

import {testimonials, videoTestimonials} from "../../data"



const StudentSuccess = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const triggerConfetti = () => {
        const duration = 2000;
        const end = Date.now() + duration;

        const colors = ['#22D3EE', '#0EA5E9', '#E2E8F0'];

        (function frame() {
            confetti({
                particleCount: 3,
                angle: 60,
                spread: 55,
                origin: { x: 0 },
                colors: colors
            });
            confetti({
                particleCount: 3,
                angle: 120,
                spread: 55,
                origin: { x: 1 },
                colors: colors
            });

            if (Date.now() < end) {
                requestAnimationFrame(frame);
            }
        }());
    };

    useEffect(() => {
        if (isInView) {
            triggerConfetti();
        }
    }, [isInView]);

    const items = testimonials.map(testimonial => ({
        title: testimonial.name,
        description: testimonial.quote,
        link: testimonial.link,
        header: (
            <div className="flex items-center gap-4">
                <div className="relative">
                    <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full border-2 border-slate-800"
                    />
                    <div className="absolute -bottom-2 -right-2 p-1 rounded-full bg-slate-900 border border-slate-800">
                        <testimonial.icon className="w-4 h-4 text-cyan-500" />
                    </div>
                </div>
                <div>
                    <h3 className="text-lg font-medium text-slate-200">{testimonial.name}</h3>
                    <p className="text-sm text-cyan-400">{testimonial.role}</p>
                </div>
            </div>
        )
    }));

    return (
        <div ref={ref} className="w-full bg-dot-white/[0.2] relative py-24 md:py-32">
            {/* Radial gradient for the container to give a spotlight effect */}
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-slate-950">
                <div className="h-full w-full bg-gradient-to-r from-cyan-500/20 via-slate-950 to-cyan-500/20 blur-[80px] opacity-40" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
                {/* Title Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-slate-200 to-cyan-400 bg-clip-text text-transparent mb-4">
                        Student Success Stories
                    </h2>
                    <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto">
                        Real stories from our students who transformed their careers through hands-on learning
                    </p>
                </motion.div>

                {/* Video Testimonials */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mb-24"
                >
                    <h3 className="text-2xl md:text-3xl font-bold text-slate-200 text-center mb-12">
                        Watch Their Journeys
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {videoTestimonials.map((video, index) => (
                            <motion.div
                                key={video.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="relative group"
                            >
                                <div className="relative overflow-hidden rounded-xl">
                                    <img
                                        src={video.thumbnail}
                                        alt={`${video.name}'s testimonial`}
                                        className="w-full aspect-video object-cover transform group-hover:scale-105 transition-transform duration-300"
                                    />
                                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                                        <div className="w-16 h-16 rounded-full bg-cyan-500/80 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                                            <Play className="w-8 h-8 text-white fill-current" />
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-4 flex items-center gap-3">
                                    <div className="p-2 rounded-full bg-slate-900 border border-slate-800">
                                        <video.icon className="w-5 h-5 text-cyan-500" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-medium text-slate-200">{video.name}</h4>
                                        <p className="text-sm text-cyan-400">{video.role}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Written Testimonials */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mb-10"
                >
                    <h3 className="text-2xl md:text-3xl font-bold text-slate-200 text-center mb-12">
                        More Success Stories
                    </h3>
                    <div className="max-w-5xl mx-auto px-8">
                        <HoverEffect items={items} />
                    </div>
                </motion.div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="text-center"
                >
                    <p className="text-white text-lg mb-6">
                        Join our next cohort and transform your career
                    </p>
                    <button className="capitalize px-8 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-cyan-600 text-white font-medium hover:from-cyan-600 hover:to-cyan-700 transition-colors duration-300">
                        I Dont't Want to miss this Opportunity!
                    </button>
                    
                </motion.div>
            </div>
        </div>
    );
};

export default StudentSuccess;