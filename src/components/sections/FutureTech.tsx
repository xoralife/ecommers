"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Camera, Eye, Zap, Scan } from "lucide-react"
import { cn } from "@/lib/utils"

const features = [
  {
    title: "Component Detection",
    description:
      "Point camera at any component, get instant identification",
    icon: Camera,
  },
  {
    title: "Wiring Error Detection",
    description:
      "AI detects wiring mistakes in real-time",
    icon: Eye,
  },
  {
    title: "Voltage Point Visualization",
    description:
      "See voltage levels overlaid on real circuits",
    icon: Zap,
  },
  {
    title: "Breadboard Recognition",
    description:
      "Get schematic from breadboard photo",
    icon: Scan,
  },
]

function HolographicRing({ className }: { className?: string }) {
  return (
    <div className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
      <div
        className={cn(
          "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
          "size-48 rounded-full",
          "border border-neon-blue/20",
          "animate-[spin_8s_linear_infinite]",
          "before:absolute before:inset-[-2px] before:rounded-full",
          "before:bg-[conic-gradient(from_0deg,transparent,theme(colors.neon-blue/0.3),transparent)]",
        )}
        style={{ transformStyle: "preserve-3d", perspective: "800px" }}
      />
      <div
        className={cn(
          "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
          "size-64 rounded-full",
          "border border-neon-green/10",
          "animate-[spin_12s_linear_infinite_reverse]",
          "before:absolute before:inset-[-2px] before:rounded-full",
          "before:bg-[conic-gradient(from_180deg,transparent,theme(colors.neon-green/0.2),transparent)]",
        )}
        style={{ transformStyle: "preserve-3d", perspective: "800px", transform: "rotateX(60deg)" }}
      />
    </div>
  )
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 50, rotateX: 10 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
}

export default function FutureTech() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="relative overflow-hidden py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-white/60">
            <Zap className="size-4 text-neon-purple" />
            Future Technology
          </div>
          <h2 className="mb-4 font-heading text-4xl font-bold tracking-tight md:text-5xl">
            AR-Powered{" "}
            <span className="text-gradient-blue">Learning</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-white/60">
            Point, learn, and build — augmented reality meets electronics
            education.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                variants={cardVariants}
                whileHover={{
                  y: -8,
                  rotateX: 2,
                  rotateY: -2,
                  transition: { duration: 0.3 },
                }}
                className={cn(
                  "group relative overflow-hidden rounded-2xl p-[1px]",
                  "transition-all duration-500",
                  "hover:shadow-[0_0_50px_-6px_rgba(43,168,162,0.15)]",
                )}
                style={{ perspective: "1000px" }}
              >
                <div
                  className={cn(
                    "absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500",
                    "bg-[conic-gradient(from_var(--angle,0deg),theme(colors.neon-blue/0.2),theme(colors.neon-purple/0.2),theme(colors.neon-blue/0.2))]",
                    "group-hover:opacity-100",
                  )}
                  style={{
                    animation: "spin 3s linear infinite",
                    "--angle": "0deg",
                  } as React.CSSProperties}
                />
                <div className="relative flex h-full flex-col rounded-2xl bg-[#0a0a0f] p-6">
                  <HolographicRing />

                  <div className="relative z-10 mb-4 flex items-center justify-between">
                    <div
                      className={cn(
                        "flex size-12 items-center justify-center rounded-xl",
                        "bg-gradient-to-br from-neon-blue/20 to-neon-purple/20",
                        "border border-white/5",
                        "transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_30px_-4px_rgba(43,168,162,0.3)]",
                      )}
                    >
                      <Icon className="size-6 text-neon-blue transition-all duration-300 group-hover:text-neon-purple" />
                    </div>
                      <span
                        className={cn(
                          "rounded-full border border-[#FFD23F]/20 bg-[#FFD23F]/5 px-3 py-1",
                          "text-[11px] font-medium uppercase tracking-wider text-[#FFD23F]",
                          "shadow-[0_0_15px_-2px_rgba(255,210,63,0.15)]",
                        )}
                      >
                      Coming Soon
                    </span>
                  </div>

                  <h3 className="relative z-10 mb-3 font-heading text-lg font-bold text-white">
                    {feature.title}
                  </h3>

                  <p className="relative z-10 text-sm leading-relaxed text-white/50">
                    {feature.description}
                  </p>

                  <div
                    className={cn(
                      "relative z-10 mt-auto pt-6",
                      "bg-gradient-to-r from-transparent via-white/5 to-transparent",
                      "h-px w-full",
                    )}
                  />
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>

      <style>{`
        @property --angle {
          syntax: '<angle>';
          initial-value: 0deg;
          inherits: false;
        }
        @keyframes spin {
          to { --angle: 360deg; }
        }
      `}</style>
    </section>
  )
}
