"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { TrendingUp, AlertTriangle, Zap, BarChart3, Star } from "lucide-react"

const topicsToReview = [
  { name: "Op-Amp Circuits", difficulty: 85, count: 4 },
  { name: "Transistor Biasing", difficulty: 72, count: 3 },
  { name: "Signal Filtering", difficulty: 60, count: 2 },
]

const strengths = [
  { name: "Digital Logic", percentage: 94 },
  { name: "Circuit Analysis", percentage: 88 },
  { name: "PCB Layout", percentage: 82 },
  { name: "Soldering", percentage: 79 },
]

const skills = [
  { label: "Circuit Analysis", value: 92, color: "#2BA8A2" },
  { label: "Embedded C", value: 78, color: "#5DADE2" },
  { label: "PCB Design", value: 65, color: "#FFD23F" },
  { label: "IoT Protocols", value: 45, color: "#FF8A6A" },
  { label: "Signal Integrity", value: 30, color: "#EF6C4A" },
]

const recommendations = [
  "Advanced PCB Layout Techniques",
  "ARM Cortex-M4 Deep Dive",
  "IoT Security Fundamentals",
  "Real-Time Operating Systems",
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
}

function CircularProgress({ percentage }: { percentage: number }) {
  const radius = 58
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (percentage / 100) * circumference

  return (
    <div className="relative flex size-36 items-center justify-center">
      <svg className="size-36 -rotate-90" viewBox="0 0 130 130">
        <defs>
          <linearGradient id="progress-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#2BA8A2" />
            <stop offset="100%" stopColor="#FFD23F" />
          </linearGradient>
        </defs>
        <circle cx="65" cy="65" r={radius} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="8" />
        <motion.circle
          cx="65"
          cy="65"
          r={radius}
          fill="none"
          stroke="url(#progress-grad)"
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          whileInView={{ strokeDashoffset: offset }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeInOut", delay: 0.3 }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-3xl font-bold text-white">{percentage}%</span>
        <span className="text-xs text-[#8888a0]">Complete</span>
      </div>
    </div>
  )
}

function DifficultyBar({ value }: { value: number }) {
  const color =
    value > 75 ? "#EF6C4A" : value > 50 ? "#FFD23F" : "#2BA8A2"

  return (
    <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/5">
      <motion.div
        className="h-full rounded-full"
        style={{ background: color }}
        initial={{ width: 0 }}
        whileInView={{ width: `${value}%` }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />
    </div>
  )
}

function SkillBar({ label, value, color }: { label: string; value: number; color: string }) {
  return (
    <div className="space-y-1">
      <div className="flex items-center justify-between text-sm">
        <span className="text-[#c0c0d0]">{label}</span>
        <span className="font-medium text-white">{value}%</span>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-white/5">
        <motion.div
          className="h-full rounded-full"
          style={{ background: color }}
          initial={{ width: 0 }}
          whileInView={{ width: `${value}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
        />
      </div>
    </div>
  )
}

export default function Analytics() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <section
      ref={ref}
      id="analytics"
      className="relative overflow-hidden bg-[#0a0a0f] px-4 py-16 md:py-24 md:px-8 lg:px-16"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_100%,rgba(43,168,162,0.04),transparent)]" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-10 md:mb-14 text-center"
        >
          <span className="mb-3 inline-block rounded-full border border-[#2BA8A2]/20 bg-[#2BA8A2]/5 px-4 py-1 text-xs font-semibold tracking-widest uppercase text-[#2BA8A2]">
            Insights
          </span>
          <h2 className="text-gradient text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
            Progress Analytics
            <br />
            Dashboard
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[#8888a0] text-lg">
            Track your learning journey with intelligent analytics and personalized recommendations.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {/* Card 1: Learning Progress */}
          <motion.div variants={cardVariants} className="glass group relative rounded-2xl border border-white/[0.06] p-6 pl-7 transition-all duration-300 hover:shadow-teal-glow">
            <div className="absolute left-0 top-4 bottom-4 w-1 rounded-full bg-[#2BA8A2]" />
            <div className="mb-4 flex items-center gap-3">
              <div className="flex size-9 items-center justify-center rounded-lg bg-[#2BA8A2]/10 text-[#2BA8A2]">
                <TrendingUp className="size-4.5" />
              </div>
              <h3 className="text-sm font-semibold text-white">Learning Progress</h3>
            </div>
            <div className="flex justify-center py-2">
              <CircularProgress percentage={72} />
            </div>
            <div className="mt-4 grid grid-cols-3 gap-2 text-center text-xs text-[#8888a0]">
              <div>
                <span className="block text-sm font-semibold text-white">24</span>
                Courses Done
              </div>
              <div>
                <span className="block text-sm font-semibold text-white">8</span>
                In Progress
              </div>
              <div>
                <span className="block text-sm font-semibold text-white">1,280</span>
                Total XP
              </div>
            </div>
          </motion.div>

          {/* Card 2: Weak Topics Detection */}
          <motion.div variants={cardVariants} className="glass group relative rounded-2xl border border-white/[0.06] p-6 pl-7 transition-all duration-300 hover:shadow-coral-glow">
            <div className="absolute left-0 top-4 bottom-4 w-1 rounded-full bg-[#EF6C4A]" />
            <div className="mb-4 flex items-center gap-3">
              <div className="flex size-9 items-center justify-center rounded-lg bg-[#EF6C4A]/10 text-[#EF6C4A]">
                <AlertTriangle className="size-4.5" />
              </div>
              <h3 className="text-sm font-semibold text-white">Weak Topics Detection</h3>
            </div>
            <div className="space-y-3.5">
              {topicsToReview.map((topic) => (
                <div key={topic.name} className="space-y-1">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-[#c0c0d0]">{topic.name}</span>
                    <span className="text-xs text-[#8888a0]">{topic.count} concepts</span>
                  </div>
                  <DifficultyBar value={topic.difficulty} />
                </div>
              ))}
            </div>
          </motion.div>

          {/* Card 3: Strength Analysis */}
          <motion.div variants={cardVariants} className="glass group relative rounded-2xl border border-white/[0.06] p-6 pl-7 transition-all duration-300 hover:shadow-gold-glow">
            <div className="absolute left-0 top-4 bottom-4 w-1 rounded-full bg-[#FFD23F]" />
            <div className="mb-4 flex items-center gap-3">
              <div className="flex size-9 items-center justify-center rounded-lg bg-[#FFD23F]/10 text-[#FFD23F]">
                <Zap className="size-4.5" />
              </div>
              <h3 className="text-sm font-semibold text-white">Strength Analysis</h3>
            </div>
            <div className="space-y-3">
              {strengths.map((s) => (
                <div key={s.name} className="flex items-center gap-3">
                  <span className="w-28 truncate text-sm text-[#c0c0d0]">{s.name}</span>
                  <div className="flex-1">
                    <div className="h-2 w-full overflow-hidden rounded-full bg-white/5">
                      <motion.div
                        className="h-full rounded-full bg-gradient-to-r from-[#FFD23F] to-[#2BA8A2]"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${s.percentage}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                  <span className="w-8 text-right text-xs font-medium text-white">{s.percentage}%</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Card 4: Skill Growth */}
          <motion.div variants={cardVariants} className="glass group relative rounded-2xl border border-white/[0.06] p-6 pl-7 transition-all duration-300 hover:shadow-sky-glow">
            <div className="absolute left-0 top-4 bottom-4 w-1 rounded-full bg-[#5DADE2]" />
            <div className="mb-4 flex items-center gap-3">
              <div className="flex size-9 items-center justify-center rounded-lg bg-[#5DADE2]/10 text-[#5DADE2]">
                <BarChart3 className="size-4.5" />
              </div>
              <h3 className="text-sm font-semibold text-white">Skill Growth</h3>
            </div>
            <div className="space-y-3.5">
              {skills.map((skill) => (
                <SkillBar key={skill.label} {...skill} />
              ))}
            </div>
          </motion.div>

          {/* Card 5: Personalized Recommendations */}
          <motion.div
            variants={cardVariants}
            className="glass group relative rounded-2xl border border-white/[0.06] p-6 pl-7 transition-all duration-300 hover:shadow-gold-glow sm:col-span-2 lg:col-span-1"
          >
            <div className="absolute left-0 top-4 bottom-4 w-1 rounded-full bg-[#FFD23F]" />
            <div className="mb-4 flex items-center gap-3">
              <div className="flex size-9 items-center justify-center rounded-lg bg-[#FFD23F]/10 text-[#FFD23F]">
                <Star className="size-4.5" />
              </div>
              <h3 className="text-sm font-semibold text-white">Personalized Recommendations</h3>
            </div>
            <div className="space-y-2.5">
              {recommendations.map((rec, i) => (
                <motion.div
                  key={rec}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex cursor-pointer items-center gap-3 rounded-xl border border-white/[0.04] bg-white/[0.02] px-4 py-2.5 text-sm text-[#c0c0d0] transition-all duration-200 hover:border-[#FFD23F]/20 hover:bg-[#FFD23F]/5 hover:text-white"
                >
                  <span className="flex size-6 shrink-0 items-center justify-center rounded-md bg-[#FFD23F]/10 text-[10px] font-bold text-[#FFD23F]">
                    {i + 1}
                  </span>
                  {rec}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
