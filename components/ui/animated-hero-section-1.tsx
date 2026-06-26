import * as React from "react";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";

interface HeroStat {
  value: string;
  label: string;
}

interface AnimatedHeroProps {
  backgroundImageUrl: string;
  mobileBannerUrl?: string;
  title: React.ReactNode;
  description: string;
  ctaButton: {
    text: string;
    onClick: () => void;
  };
  secondaryCta?: {
    text: string;
    onClick: () => void;
  };
  stats?: HeroStat[];
  className?: string;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.16, delayChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  hidden: { y: 24, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.65, ease: "easeOut" as const },
  },
};

export const AnimatedHero = ({
  backgroundImageUrl,
  mobileBannerUrl,
  title,
  description,
  ctaButton,
  secondaryCta,
  stats,
  className,
}: AnimatedHeroProps) => {
  return (
    <section
      id="inicio"
      className={cn(
        "relative min-h-[100svh] overflow-hidden flex flex-col",
        className
      )}
    >
      {/* Desktop banner */}
      <div className="absolute inset-0 z-0 hidden sm:block">
        <Image
          src={backgroundImageUrl}
          alt=""
          fill
          priority
          quality={100}
          className="object-cover object-right"
        />
      </div>

      {/* Mobile banner — portrait, doctor in top ~55%, blank below */}
      {mobileBannerUrl && (
        <div className="absolute inset-0 z-0 sm:hidden">
          <Image
            src={mobileBannerUrl}
            alt=""
            fill
            priority
            quality={100}
            className="object-cover object-top"
          />
        </div>
      )}

      {/*
        Content:
        - Mobile: justify-end so text falls into the blank lower area of mobile.jpg
        - Desktop (sm+): justify-center with pt-28 to clear the floating pill header
      */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex-1 flex flex-col justify-start sm:justify-center px-6 md:px-12 lg:px-20 pt-[58svh] sm:pt-28 pb-4 sm:pb-8 max-w-3xl"
      >
        {/* Eyebrow */}
        <motion.div variants={itemVariants} className="flex items-center justify-center sm:justify-start gap-3 mb-6">
          <div className="w-7 h-px bg-[#bb2017]" />
          <span className="text-[9.5px] font-bold tracking-[0.32em] uppercase text-[#bb2017]">
            Advocacia Especializada · São Paulo
          </span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="font-sans font-black uppercase text-[#1a0603] leading-[1.05] tracking-[-0.01em] text-center sm:text-left
                     text-[1.54rem] sm:text-[2.32rem] md:text-[2.72rem] lg:text-[3.08rem]"
        >
          {title}
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="mt-6 max-w-lg text-[14px] md:text-[15px] leading-relaxed text-[#3d3d3d]/70 text-center sm:text-left"
        >
          {description}
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="mt-9 flex flex-wrap gap-3 justify-center sm:justify-start"
        >
          <button
            type="button"
            onClick={ctaButton.onClick}
            className="bg-[#bb2017] text-white font-bold text-[11px] uppercase tracking-widest px-8 py-4 hover:bg-[#741b16] transition-colors"
          >
            {ctaButton.text}
          </button>
          {secondaryCta && (
            <button
              type="button"
              onClick={secondaryCta.onClick}
              className="border-2 border-[#741b16] text-[#741b16] font-bold text-[11px] uppercase tracking-widest px-8 py-4 hover:bg-[#741b16] hover:text-white transition-colors"
            >
              {secondaryCta.text}
            </button>
          )}
        </motion.div>
      </motion.div>

      {/* Stats ticker */}
      {stats && stats.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6, ease: "easeOut" as const }}
          className="relative z-10 border-t border-[#741b16]/18 bg-white/55 backdrop-blur-sm overflow-hidden py-5"
        >
          <div className="flex items-center whitespace-nowrap animate-ticker">
            {[...stats, ...stats, ...stats, ...stats].map((stat, i) => (
              <div key={i} className="flex items-center gap-10 pl-14">
                <div className="flex items-baseline gap-2.5">
                  <span className="text-[1.65rem] font-black text-[#741b16] leading-none">
                    {stat.value}
                  </span>
                  <span className="text-[11px] font-medium text-[#3d3d3d]/55 tracking-wide uppercase">
                    {stat.label}
                  </span>
                </div>
                <div className="w-1 h-1 rounded-full bg-[#bb2017]/40" />
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </section>
  );
};
