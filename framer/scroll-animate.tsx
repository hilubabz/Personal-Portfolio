"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { ReactNode, useEffect, useRef } from "react";

export default function ScrollAnimate({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  const inView = useInView(ref, {
    once: true,
    amount: 0.2,
  });

  const textControls = useAnimation();
  const barControls = useAnimation();

  useEffect(() => {
    if (inView) {
      textControls.start("visible");
      barControls.start("slide");
    }
  }, [inView, textControls, barControls]);

  return (
    <div ref={ref} className="relative overflow-hidden">
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            y: 25,
          },
          visible: {
            opacity: 1,
            y: 0,
          },
        }}
        initial="hidden"
        animate={textControls}
        transition={{
          duration: 0.5,
          delay: 0.25,
          ease: "easeOut",
        }}
      >
        {children}
      </motion.div>

      <motion.div
        className="absolute inset-0 z-20 bg-red-700"
        variants={{
          appear: {
            x: "0%",
          },
          slide: {
            x: "100%",
          },
        }}
        initial="appear"
        animate={barControls}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}
