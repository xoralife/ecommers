"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Wrench, Cpu, CircuitBoard, Wifi, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

const tracks = [
  {
    id: "technician",
    title: "Electronics Technician",
    description: "Master repair, testing, and soldering skills",
    icon: Wrench,
    color: "neon-blue",
    gradient: "from-[#2BA8A2] to-[#3CC4BD]",
    steps: [
      "Fundamentals of Electronics",
      "Diagnostic & Testing Tools",
      "Advanced Soldering Techniques",
      "Industry Certification",
    ],
  },
  {
    id: "embedded",
    title: "Embedded Engineer",
    description: "Build firmware with C/C++, RTOS, and ARM Cortex",
    icon: Cpu,
    color: "neon-green",
    gradient: "from-[#FFD23F] to-[#FFE47A]",
    steps: [
      "C/C++ for Embedded Systems",
      "RTOS & Concurrency",
      "ARM Cortex Architecture",
      "Embedded Systems Capstone",
    ],
  },
  {
    id: "pcb",
    title: "PCB Designer",
    description: "Design boards with Altium, KiCad, and signal integrity",
    icon: CircuitBoard,
    color: "neon-purple",
    gradient: "from-[#5DADE2] to-[#3CC4BD]",
    steps: [
      "Schematic Design Fundamentals",
      "PCB Layout & Routing",
      "Signal Integrity Analysis",
      "Advanced Altium / KiCad",
    ],
  },
  {
    id: "iot",
    title: "IoT Developer",
    description: "Connect devices with MQTT, cloud platforms, and sensors",
    icon: Wifi,
    color: "neon-blue",
    gradient: "from-[#2BA8A2] to-[#5DADE2]",
    steps: [
      "Sensor Interfacing",
      "MQTT & Communication Protocols",
      "Cloud Platforms & Data Pipelines",
      "Full Stack IoT Solution",
    ],
  },
]

const trackVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: "easeOut" as const },
  }),
}

const stepVariants = {
  hidden: { opacity: 0, scale: 0.6 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, delay: i * 0.12, ease: "backOut" as const },
  }),
}

function TimelineLine({ color }: { color: string }) {
  const neonVar = color === "neon-blue" ? "#2BA8A2" : color === "neon-green" ? "#FFD23F" : "#5DADE2"

  return (
    <div className="relative h-1 w-full" aria-hidden>
      <div className="absolute inset-0 rounded-full bg-white/5" />
      <motion.div
        className="absolute inset-y-0 left-0 rounded-full"
        style={{ background: `linear-gradient(90deg, ${neonVar}, ${neonVar}88)` }}
        initial={{ width: "0%" }}
        whileInView={{ width: "100%" }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: 0.3, ease: "easeInOut" }}
      />
    </div>
  )
}

export default function CareerSimulator() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#0a0a0f] px-4 py-24 md:px-8 lg:px-16"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(43,168,162,0.06),transparent)]" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="mb-3 inline-block rounded-full border border-[#2BA8A2]/20 bg-[#2BA8A2]/5 px-4 py-1 text-xs font-semibold tracking-widest uppercase text-[#2BA8A2]">
            Career Paths
          </span>
          <h2 className="text-gradient text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
            Electronics Career
            <br />
            Simulator
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[#8888a0] text-lg">
            Explore four distinct career tracks and follow a curated learning roadmap to your dream
            electronics role.
          </p>
        </motion.div>

        <div className="space-y-12">
          {tracks.map((track, trackIndex) => {
            const Icon = track.icon
            const neonVar =
              track.color === "neon-blue"
                ? "#2BA8A2"
                : track.color === "neon-green"
                  ? "#FFD23F"
                  : "#5DADE2"

            return (
              <motion.div
                key={track.id}
                custom={trackIndex}
                variants={trackVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="glass group relative overflow-hidden rounded-2xl border border-white/[0.06] p-6 transition-all duration-500 hover:border-white/[0.12] md:p-8"
              >
                <div
                  className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-20"
                  style={{ background: neonVar }}
                />

                <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center gap-4">
                    <div
                      className={cn(
                        "flex size-12 shrink-0 items-center justify-center rounded-xl",
                        track.color === "neon-blue" && "bg-[#2BA8A2]/10 text-[#2BA8A2]",
                        track.color === "neon-green" && "bg-[#FFD23F]/10 text-[#FFD23F]",
                        track.color === "neon-purple" && "bg-[#5DADE2]/10 text-[#5DADE2]",
                      )}
                    >
                      <Icon className="size-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white md:text-2xl">{track.title}</h3>
                      <p className="text-sm text-[#8888a0]">{track.description}</p>
                    </div>
                  </div>
                  <motion.button
                    whileHover={{ x: 4 }}
                    className="mt-2 flex items-center gap-1 text-sm font-medium transition-colors sm:mt-0"
                    style={{ color: neonVar }}
                  >
                    View Roadmap <ChevronRight className="size-3.5" />
                  </motion.button>
                </div>

                <TimelineLine color={track.color} />

                <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
                  {track.steps.map((step, stepIndex) => (
                    <motion.div
                      key={stepIndex}
                      custom={stepIndex}
                      variants={stepVariants}
                      initial="hidden"
                      animate={isInView ? "visible" : "hidden"}
                      className="relative"
                    >
                      <div className="flex flex-col items-center text-center">
                        <motion.div
                          className={cn(
                            "flex size-10 items-center justify-center rounded-full border-2 text-sm font-bold",
                            track.color === "neon-blue" &&
                              "border-[#2BA8A2] bg-[#2BA8A2]/10 text-[#2BA8A2]",
                            track.color === "neon-green" &&
                              "border-[#FFD23F] bg-[#FFD23F]/10 text-[#FFD23F]",
                            track.color === "neon-purple" &&
                              "border-[#5DADE2] bg-[#5DADE2]/10 text-[#5DADE2]",
                          )}
                          whileHover={{ scale: 1.15 }}
                        >
                          {stepIndex + 1}
                        </motion.div>
                        <p className="mt-2 text-xs font-medium leading-tight text-[#c0c0d0] md:text-sm">
                          {step}
                        </p>
                      </div>
                      {stepIndex < track.steps.length - 1 && (
                        <div
                          className="absolute top-5 left-[calc(50%+1.25rem)] hidden h-0.5 sm:block"
                          style={{
                            width: "calc(100% - 2.5rem)",
                            background: `linear-gradient(90deg, ${neonVar}44, transparent)`,
                          }}
                        />
                      )}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
