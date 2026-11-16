"use client";

import { useEffect, useRef, useState } from "react";
import CountUp from "@/components/ui/CountUp";
import { motion } from "framer-motion";
import Image from "next/image";

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(() => {
    if (typeof window !== "undefined") {
      return !sessionStorage.getItem("hasLoaded");
    }
    return true;
  });
  const [isExiting, setIsExiting] = useState(false);
  const hasCalledEnd = useRef(false);

  const handleLoadingComplete = () => {
    if (hasCalledEnd.current) return;
    hasCalledEnd.current = true;
    // Start exit animation sequence
    setIsExiting(true);
    // After exit animation completes, unmount
    setTimeout(() => {
      setIsLoading(false);
      sessionStorage.setItem("hasLoaded", "true");
    }, 1800);
  };

  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isLoading]);

  // Safety fallback
  useEffect(() => {
    if (!isLoading) return;
    const fallback = setTimeout(() => {
      handleLoadingComplete();
    }, 6000);
    return () => clearTimeout(fallback);
  }, [isLoading]);

  if (!isLoading) return null;

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0"
      style={{ zIndex: 99999, pointerEvents: isExiting ? "none" : "auto" }}
    >
      {/* Left curtain */}
      <motion.div
        className="absolute top-0 left-0 w-1/2 h-full bg-background"
        style={{ zIndex: 2, borderRight: isExiting ? '1px solid hsl(var(--primary) / 0.2)' : 'none' }}
        animate={isExiting ? { x: "-100%" } : { x: "0%" }}
        transition={{
          duration: 1.0,
          ease: [0.76, 0, 0.24, 1],
          delay: isExiting ? 0.5 : 0,
        }}
      />
      {/* Right curtain */}
      <motion.div
        className="absolute top-0 right-0 w-1/2 h-full bg-background"
        style={{ zIndex: 2, borderLeft: isExiting ? '1px solid hsl(var(--primary) / 0.2)' : 'none' }}
        animate={isExiting ? { x: "100%" } : { x: "0%" }}
        transition={{
          duration: 1.0,
          ease: [0.76, 0, 0.24, 1],
          delay: isExiting ? 0.5 : 0,
        }}
      />

      {/* Divider line that appears before split */}
      <motion.div
        className="absolute top-0 left-1/2 h-full"
        style={{ zIndex: 3, transform: "translateX(-50%)", width: "2px", background: "linear-gradient(180deg, transparent, hsl(var(--primary)), transparent)" }}
        initial={{ scaleY: 0 }}
        animate={
          isExiting
            ? { scaleY: [0, 1, 1], opacity: [0, 0.8, 0] }
            : { scaleY: 0, opacity: 0 }
        }
        transition={{
          duration: isExiting ? 0.6 : 0,
          ease: "easeOut",
        }}
      />

      {/* Center content - sits above the curtains */}
      <motion.div
        className="absolute inset-0 flex flex-col items-center justify-center"
        style={{ zIndex: 4 }}
        animate={
          isExiting
            ? { scale: 1.15, opacity: 0, filter: "blur(12px)" }
            : { scale: 1, opacity: 1, filter: "blur(0px)" }
        }
        transition={{
          duration: 0.5,
          ease: "easeIn",
        }}
      >
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative flex items-center justify-center mb-12"
        >
          {/* Subtle glow behind logo */}
          <div
            className="absolute rounded-full"
            style={{
              width: 180,
              height: 180,
              background: "radial-gradient(circle, hsl(var(--primary) / 0.15) 0%, transparent 70%)",
              filter: "blur(20px)",
            }}
          />
          <Image
            src="/icon.png"
            alt="Logo"
            width={130}
            height={130}
            className="relative z-10 drop-shadow-[0_0_20px_hsl(var(--primary)/0.3)]"
            priority
          />
        </motion.div>

        {/* Progress section */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="flex flex-col items-center gap-4 w-full max-w-xs"
        >
          {/* Loading text + count */}
          <div className="flex items-center gap-1 text-xl font-medium tracking-widest text-muted-foreground uppercase">
            <span>Loading</span>
            <CountUp
              from={0}
              to={100}
              duration={2}
              className="ml-2 text-primary text-xl font-semibold"
              onStart={undefined}
              //@ts-expect-error tsx to jsx
              onEnd={handleLoadingComplete}
            />
            <span className="text-primary text-xl font-semibold">%</span>
          </div>

          {/* Progress bar */}
          <div className="h-1.5 w-full bg-muted/40 overflow-hidden rounded-full">
            <motion.div
              className="h-full rounded-full bg-primary"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 2.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
