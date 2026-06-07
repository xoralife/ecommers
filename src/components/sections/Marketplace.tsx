"use client"

import { motion } from "framer-motion"
import { ShoppingCart, Package, DollarSign, RefreshCw } from "lucide-react"
import { cn } from "@/lib/utils"

const projects = [
  {
    name: "Line Follower Robot",
    components: "IR Sensors, Arduino Uno, Motor Driver, Chassis",
    cost: "$25",
    alternatives: "Use ESP32 instead of Arduino",
  },
  {
    name: "Solar Charger",
    components: "Solar Panel 6V, TP4056, 18650 Battery",
    cost: "$15",
    alternatives: "Use Li-ion instead of 18650",
  },
  {
    name: "Smart Irrigation",
    components: "ESP32, Soil Moisture Sensor, Relay, Pump",
    cost: "$35",
    alternatives: "Use Arduino + Wi-Fi module",
  },
  {
    name: "Home Automation",
    components: "ESP32, 4-Ch Relay, PIR Sensor, DHT22",
    cost: "$50",
    alternatives: "Use Zigbee modules",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
}

export default function Marketplace() {
  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 md:mb-16 text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-white/60">
            <ShoppingCart className="size-4 text-neon-blue" />
            Component Marketplace
          </div>
          <h2 className="mb-4 font-heading text-4xl font-bold tracking-tight md:text-5xl">
            Everything You Need in{" "}
            <span className="text-gradient">One Place</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-white/60">
            Browse curated component lists for every project with pricing and
            alternatives.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {projects.map((project) => (
            <motion.div
              key={project.name}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className={cn(
                "group relative flex flex-col overflow-hidden rounded-2xl",
                "border border-white/10 bg-white/5 p-6",
                "backdrop-blur-xl transition-all duration-300",
                "hover:border-neon-blue/30 hover:bg-white/[0.07]",
                "hover:shadow-[0_0_40px_-8px_rgba(43,168,162,0.15)]",
              )}
            >
              <div className="mb-4 flex items-center justify-between">
                <div className="flex size-10 items-center justify-center rounded-xl bg-neon-blue/10">
                  <Package className="size-5 text-neon-blue" />
                </div>
                <div className="flex items-center gap-1.5 rounded-full bg-neon-green/10 px-3 py-1">
                  <DollarSign className="size-3.5 text-neon-green" />
                  <span className="text-sm font-semibold text-neon-green">
                    {project.cost}
                  </span>
                </div>
              </div>

              <h3 className="mb-3 font-heading text-lg font-bold text-white">
                {project.name}
              </h3>

              <div className="mb-4 flex-1 space-y-3">
                <div className="rounded-xl border border-white/5 bg-white/[0.02] p-3">
                  <span className="mb-1 block text-xs font-medium uppercase tracking-wider text-white/40">
                    Components
                  </span>
                  <p className="text-sm leading-relaxed text-white/70">
                    {project.components}
                  </p>
                </div>

                <div className="flex items-start gap-2 rounded-xl border border-white/5 bg-white/[0.02] p-3">
                  <RefreshCw className="mt-0.5 size-3.5 shrink-0 text-neon-blue/70" />
                  <div>
                    <span className="mb-0.5 block text-xs font-medium uppercase tracking-wider text-white/40">
                      Alternatives
                    </span>
                    <p className="text-sm text-white/60">
                      {project.alternatives}
                    </p>
                  </div>
                </div>
              </div>

              <button
                className={cn(
                  "relative inline-flex w-full items-center justify-center gap-2",
                  "rounded-xl border border-white/10 bg-white/5 px-4 py-2.5",
                  "text-sm font-medium text-white transition-all duration-300",
                  "hover:border-neon-blue/40 hover:bg-neon-blue/10 hover:text-neon-blue",
                  "hover:shadow-[0_0_30px_-4px_rgba(0,212,255,0.2)]",
                  "active:scale-[0.98]",
                )}
              >
                <ShoppingCart className="size-4" />
                Buy Components
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
