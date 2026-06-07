"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Monitor, Wrench, Swords, Cpu, Microchip } from "lucide-react"

interface FeatureItem {
  icon: typeof Monitor
  title: string
  features: string[]
  color: "blue" | "green" | "purple" | "orange" | "pink"
}

const features: FeatureItem[] = [
  {
    icon: Monitor,
    title: "Interactive Learning",
    features: [
      "Step-by-step guided labs",
      "Real-time circuit simulations",
      "Animated current flow visualization",
      "Instant feedback & hints",
    ],
    color: "blue",
  },
  {
    icon: Wrench,
    title: "Virtual Instruments Lab",
    features: [
      "Digital Multimeter (DMM)",
      "Oscilloscope & waveform analysis",
      "Function generator",
      "Logic analyzer probes",
    ],
    color: "green",
  },
  {
    icon: Swords,
    title: "Challenge Modes",
    features: [
      "Time Attack — race the clock",
      "Budget Mode — minimize cost",
      "Repair Mode — fix broken circuits",
      "Survival Mode — escalating difficulty",
    ],
    color: "purple",
  },
  {
    icon: Cpu,
    title: "PCB Design Training",
    features: [
      "Schematic capture & editing",
      "PCB routing & trace optimization",
      "Component placement strategies",
      "Design rule checking",
    ],
    color: "orange",
  },
  {
    icon: Microchip,
    title: "Embedded Systems",
    features: [
      "Arduino simulator & IDE",
      "ESP32 dev board emulation",
      "IoT project sandbox",
      "Sensor & actuator integration",
    ],
    color: "pink",
  },
]

const colorMap = {
  blue: {
    border: "hover:border-neon-blue/50",
    glow: "group-hover/card:shadow-[0_0_30px_rgba(43,168,162,0.15)]",
    text: "text-neon-blue",
    badge: "bg-neon-blue/10 text-neon-blue border-neon-blue/20",
    gradient: "from-neon-blue/10 to-transparent",
  },
  green: {
    border: "hover:border-neon-green/50",
    glow: "group-hover/card:shadow-[0_0_30px_rgba(255,210,63,0.15)]",
    text: "text-neon-green",
    badge: "bg-neon-green/10 text-neon-green border-neon-green/20",
    gradient: "from-neon-green/10 to-transparent",
  },
  purple: {
    border: "hover:border-neon-purple/50",
    glow: "group-hover/card:shadow-[0_0_30px_rgba(93,173,226,0.15)]",
    text: "text-neon-purple",
    badge: "bg-neon-purple/10 text-neon-purple border-neon-purple/20",
    gradient: "from-neon-purple/10 to-transparent",
  },
  orange: {
    border: "hover:border-chart-4/50",
    glow: "group-hover/card:shadow-[0_0_30px_rgba(255,138,106,0.15)]",
    text: "text-chart-4",
    badge: "bg-chart-4/10 text-chart-4 border-chart-4/20",
    gradient: "from-chart-4/10 to-transparent",
  },
  pink: {
    border: "hover:border-destructive/50",
    glow: "group-hover/card:shadow-[0_0_30px_rgba(239,108,74,0.15)]",
    text: "text-destructive",
    badge: "bg-destructive/10 text-destructive border-destructive/20",
    gradient: "from-destructive/10 to-transparent",
  },
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
}

function FeatureCard({ feature }: { feature: FeatureItem }) {
  const Icon = feature.icon
  const colors = colorMap[feature.color]

  return (
    <motion.div
      variants={cardVariants}
      className={`group/card relative flex flex-col rounded-2xl border border-border bg-card p-6 sm:p-8 transition-all duration-300 ${colors.border} ${colors.glow} hover:-translate-y-1`}
    >
      <div
        className={`absolute inset-0 rounded-2xl bg-gradient-to-b ${colors.gradient} opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 pointer-events-none`}
      />

      <div className="relative z-10 flex items-start gap-4 mb-5">
        <div
          className={`flex items-center justify-center w-12 h-12 rounded-xl border ${colors.badge} shrink-0`}
        >
          <Icon size={22} />
        </div>
        <h3 className="text-xl font-heading font-bold text-foreground pt-1">
          {feature.title}
        </h3>
      </div>

      <ul className="relative z-10 space-y-2.5">
        {feature.features.map((feat, i) => (
          <li key={i} className="flex items-start gap-3 text-muted-foreground text-sm">
            <span
              className={`inline-block w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 ${colors.text}`}
            />
            {feat}
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

export default function Features() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-120px" })

  return (
    <section ref={ref} id="features" className="relative py-16 md:py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-50" />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
          className="text-center mb-10 md:mb-16 sm:mb-20"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/30 bg-accent/5 text-accent text-sm font-medium tracking-wide mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            Everything You Need
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-foreground leading-tight">
            Explore Powerful{" "}
            <span className="text-gradient">Learning Tools</span>
          </h2>
          <p className="max-w-xl mx-auto mt-4 text-muted-foreground text-base sm:text-lg">
            From circuit basics to advanced embedded systems — master electronics
            with hands-on virtual labs.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
        >
          {features.slice(0, 3).map((feature) => (
            <FeatureCard key={feature.title} feature={feature} />
          ))}
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 mt-5 sm:mt-6 max-w-2xl mx-auto lg:max-w-none"
        >
          {features.slice(3).map((feature) => (
            <FeatureCard key={feature.title} feature={feature} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
