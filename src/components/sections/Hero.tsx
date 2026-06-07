"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ArrowRight, CircuitBoard, Zap, Cpu, CheckCircle } from "lucide-react"

const circuitPaths = [
  "M 50 100 L 150 100 L 200 50 L 350 50",
  "M 350 50 L 400 50 L 450 100 L 550 100",
  "M 200 50 L 200 200 L 300 200 L 300 150",
  "M 300 150 L 300 100 L 400 100",
  "M 50 100 L 50 250 L 150 250 L 150 300",
  "M 450 100 L 450 250 L 550 250 L 550 300",
  "M 300 200 L 450 200",
  "M 150 250 L 150 350 L 300 350 L 300 300",
  "M 550 100 L 650 100 L 650 200 L 550 200",
  "M 650 200 L 700 200 L 700 350 L 550 350",
]

const nodePositions = [
  { x: 50, y: 100 },
  { x: 150, y: 100 },
  { x: 200, y: 50 },
  { x: 350, y: 50 },
  { x: 400, y: 50 },
  { x: 450, y: 100 },
  { x: 550, y: 100 },
  { x: 200, y: 200 },
  { x: 300, y: 200 },
  { x: 300, y: 150 },
  { x: 300, y: 100 },
  { x: 50, y: 250 },
  { x: 150, y: 250 },
  { x: 150, y: 300 },
  { x: 450, y: 250 },
  { x: 550, y: 250 },
  { x: 550, y: 300 },
  { x: 450, y: 200 },
  { x: 150, y: 350 },
  { x: 300, y: 350 },
  { x: 300, y: 300 },
  { x: 650, y: 100 },
  { x: 650, y: 200 },
  { x: 550, y: 200 },
  { x: 700, y: 200 },
  { x: 700, y: 350 },
  { x: 550, y: 350 },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
}

const buttonVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: 1 + i * 0.15, ease: [0.22, 1, 0.36, 1] as const },
  }),
}

function CircuitBoardSVG() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
      <svg
        className="w-full h-full opacity-20"
        viewBox="0 0 750 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        {circuitPaths.map((d, i) => (
          <motion.path
            key={`path-${i}`}
            d={d}
            stroke="url(#circuitGrad)"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.6 }}
            transition={{
              duration: 2,
              delay: 0.5 + i * 0.15,
              ease: "easeInOut",
            }}
          />
        ))}

        {nodePositions.map((pos, i) => (
          <motion.circle
            key={`node-${i}`}
            cx={pos.x}
            cy={pos.y}
            r="3"
            fill="#2BA8A2"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: [0, 1.3, 1], opacity: [0, 1, 0.8] }}
            transition={{
              duration: 0.5,
              delay: 1 + i * 0.05,
              ease: "easeOut",
            }}
          />
        ))}

        {circuitPaths.map((d, i) => (
          <motion.circle
            key={`electron-${i}`}
            r="2.5"
            fill="#FFD23F"
            initial={{ offsetDistance: "0%" }}
            animate={{ offsetDistance: "100%" }}
            transition={{
              duration: 3 + (i % 3) * 1.5,
              delay: 0.5 + i * 0.3,
              repeat: Infinity,
              ease: "linear",
              repeatDelay: 1 + (i % 2),
            }}
            style={{ offsetPath: `path('${d}')` }}
          />
        ))}

        <defs>
          <linearGradient id="circuitGrad" x1="0" y1="0" x2="750" y2="400">
            <stop offset="0%" stopColor="#2BA8A2" />
            <stop offset="50%" stopColor="#5DADE2" />
            <stop offset="100%" stopColor="#FFD23F" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}

function FloatingElements() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        className="absolute top-20 left-[15%] text-neon-blue/20"
        animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <CircuitBoard size={48} />
      </motion.div>

      <motion.div
        className="absolute top-40 right-[20%] text-neon-green/15"
        animate={{ y: [0, 12, 0], rotate: [0, -8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <Zap size={36} />
      </motion.div>

      <motion.div
        className="absolute bottom-32 left-[25%] text-neon-purple/15"
        animate={{ y: [0, -10, 0], rotate: [0, 5, -5] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      >
        <Cpu size={40} />
      </motion.div>

      {[...Array(20)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1 h-1 rounded-full bg-primary/40"
          style={{
            left: `${((i * 7 + 3) % 100)}%`,
            top: `${((i * 13 + 5) % 100)}%`,
          }}
          animate={{
            opacity: [0, 0.8, 0],
            scale: [0, 1, 0],
            y: [0, -30 - (i % 5) * 5],
          }}
          transition={{
            duration: 2 + (i % 3),
            repeat: Infinity,
            delay: (i % 5) * 0.8,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  )
}

function TeacherCard() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
      className="absolute right-[5%] top-1/4 z-20 md:right-[8%] md:top-1/3"
    >
      <div className="glass rounded-2xl border border-white/[0.08] p-4 shadow-teal-glow">
        <div className="flex items-center gap-3">
          <div className="size-14 shrink-0 overflow-hidden rounded-full ring-2 ring-[#2BA8A2]/40">
            <img
              src="./p.jpg"
              alt="Instructor"
              width={56}
              height={56}
              className="size-full object-cover"
            />
          </div>
          <div>
            <p className="text-sm font-semibold text-white">Abid Hussain</p>
            <p className="text-xs text-[#8888a0]">Electronics Instructor</p>
          </div>
        </div>
        <div className="mt-3 flex items-center gap-1.5 text-xs text-[#2BA8A2]">
          <CheckCircle className="size-3.5" />
          <span>2,400+ students mentored</span>
        </div>
      </div>
    </motion.div>
  )
}

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      ref={ref}
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
    >
      <CircuitBoardSVG />
        <FloatingElements />
        <TeacherCard />

      <div className="absolute inset-0 bg-gradient-to-b from-dark-elite/0 via-dark-elite/50 to-dark-elite" />

      <motion.div
        className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <div className="glass rounded-2xl p-8 sm:p-12 lg:p-16 text-center">
          <motion.div variants={itemVariants} className="mb-4">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-medium tracking-wide">
              <Zap size={14} className="fill-primary" />
              Electronics Learning Platform
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight mb-6"
          >
            <span className="text-gradient">
              Master Electronics
            </span>
            <br />
            <span className="text-foreground">
              Through Interactive Simulations
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="max-w-2xl mx-auto text-lg sm:text-xl text-muted-foreground leading-relaxed mb-10"
          >
            Dive into circuits, PCB design, embedded systems, Arduino, ESP32, and
            real-world electronics projects with immersive virtual labs and
            real-time simulations.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.a
              custom={0}
              variants={buttonVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              href="/start"
              className="group/btn inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-primary text-primary-foreground font-heading font-semibold text-sm tracking-wider uppercase transition-all hover:bg-primary/90 hover:glow-blue active:scale-95"
            >
              Start Learning
              <ArrowRight
                size={16}
                className="transition-transform group-hover/btn:translate-x-1"
              />
            </motion.a>

            <motion.a
              custom={1}
              variants={buttonVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              href="/labs"
              className="group/btn inline-flex items-center gap-2 px-8 py-3.5 rounded-xl border border-border bg-background/50 text-foreground font-heading font-semibold text-sm tracking-wider uppercase transition-all hover:border-primary/50 hover:bg-primary/5 hover:text-primary active:scale-95"
            >
              Explore Labs
              <CircuitBoard
                size={16}
                className="transition-transform group-hover/btn:translate-x-1"
              />
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
