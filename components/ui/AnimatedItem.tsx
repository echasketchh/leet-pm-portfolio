"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";

interface AnimatedItemProps {
  children: React.ReactNode;
  className?: string;
  variant?: "fadeUp" | "fadeIn" | "scaleIn";
}

export function AnimatedItem({ children, className = "" }: AnimatedItemProps) {
  return (
    <motion.div variants={fadeUp} className={className}>
      {children}
    </motion.div>
  );
}
