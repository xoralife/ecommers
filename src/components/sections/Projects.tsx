"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Bot, Sun, Zap, Radio, Sprout, Home, Lock, Wifi } from "lucide-react"

import { cn } from "@/lib/utils"

const projects = [
  {
    title: "Line Follower Robot",
    difficulty: "Intermediate" as const,
    cost: 25,
    components: "IR Sensors, Arduino, Motors, Wheels",
    time: "2 hrs",
    icon: Bot,
  },
  {
    title: "Solar Charger",
    difficulty: "Beginner" as const,
    cost: 15,
    components: "Solar Panel, TP4056, Battery",
    time: "1 hr",
    icon: Sun,
  },
  {
    title: "Power Supply",
    difficulty: "Intermediate" as const,
    cost: 30,
    components: "LM317, Transformer, Capacitors",
    time: "1.5 hrs",
    icon: Zap,
  },
  {
    title: "Metal Detector",
    difficulty: "Advanced" as const,
    cost: 20,
    components: "Coil, NE555, Capacitors, Speaker",
    time: "3 hrs",
    icon: Radio,
  },
  {
    title: "Smart Irrigation System",
    difficulty: "Intermediate" as const,
    cost: 35,
    components: "ESP32, Moisture Sensor, Relay",
    time: "2.5 hrs",
    icon: Sprout,
  },
  {
    title: "Home Automation",
    difficulty: "Advanced" as const,
    cost: 50,
    components: "ESP32, Relay Module, Sensors",
    time: "4 hrs",
    icon: Home,
  },
  {
    title: "Smart Door Lock",
    difficulty: "Intermediate" as const,
    cost: 22,
    components: "Arduino, Servo, Keypad, RFID",
    time: "2 hrs",
    icon: Lock,
  },
  {
    title: "Wi-Fi Controlled LED",
    difficulty: "Beginner" as const,
    cost: 10,
    components: "ESP8266, LED, Resistor",
    time: "45 min",
    icon: Wifi,
  },
]

const difficultyColors: Record<string, string> = {
  Beginner: "text-neon-green border-neon-green/30 bg-neon-green/10",
  Intermediate: "text-neon-blue border-neon-blue/30 bg-neon-blue/10",
  Advanced: "text-neon-purple border-neon-purple/30 bg-neon-purple/10",
}

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[number]
  index: number
}) {
  const Icon = project.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      className={cn(
        "glass rounded-2xl border border-white/10",
        "group relative flex flex-col gap-3 p-6",
        "hover:border-neon-blue/20 hover:shadow-[0_0_30px_rgba(43,168,162,0.08)]",
        "transition-all duration-300"
      )}
    >
      <div className="flex items-center justify-between">
        <div className="flex size-10 items-center justify-center rounded-xl bg-neon-blue/10 text-neon-blue">
          <Icon className="size-5" />
        </div>
        <span
          className={cn(
            "rounded-full border px-3 py-0.5 text-xs font-medium tracking-wide",
            difficultyColors[project.difficulty]
          )}
        >
          {project.difficulty}
        </span>
      </div>

      <h3 className="text-lg font-semibold tracking-tight text-white">
        {project.title}
      </h3>

      <p className="text-sm leading-relaxed text-muted-foreground">
        <span className="text-muted-foreground/60">Components:</span>{" "}
        <span className="text-foreground/80">{project.components}</span>
      </p>

      <div className="mt-auto flex items-center gap-4 text-sm">
        <div className="flex items-center gap-1.5 text-muted-foreground">
          <Zap className="size-3.5 text-neon-blue" />
          <span>${project.cost}</span>
        </div>
        <div className="flex items-center gap-1.5 text-muted-foreground">
          <span className="size-1 rounded-full bg-foreground/20" />
          <span>{project.time}</span>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/5 group-hover:ring-neon-blue/20" />
    </motion.div>
  )
}

export default function Projects() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      ref={ref}
      id="projects"
      className="relative overflow-hidden px-4 py-24 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-14 text-center"
        >
          <span className="mb-3 inline-block rounded-full border border-neon-blue/20 bg-neon-blue/5 px-4 py-1 text-xs font-medium tracking-widest uppercase text-neon-blue">
            Hands-On Learning
          </span>
          <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            <span className="text-gradient">Real Project</span>{" "}
            <span className="text-white">Builder</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Build real electronics projects with step-by-step guidance,
            component lists, and interactive circuit diagrams.
          </p>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
