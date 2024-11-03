"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    link: string;
    header?: React.ReactNode;
  }[];
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10",
        className
      )}
    >
      {items.map((item, idx) => (
        <a
          href={item.link}
          key={item.title + idx}
          className="relative group block p-2 h-full w-full"
        >
          <motion.div
            whileHover={{
              scale: 0.98,
              transition: { duration: 0.2 },
            }}
            className="relative h-full w-full p-4 rounded-xl overflow-hidden bg-slate-800 border border-slate-700"
          >
            <div className="relative z-50">
              <div className="p-4">
                {item.header}
                <p className="mt-8 text-slate-300 text-sm tracking-wide leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          </motion.div>
        </a>
      ))}
    </div>
  );
};