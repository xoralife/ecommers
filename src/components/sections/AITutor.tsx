"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import {
  Bot,
  Mic,
  Languages,
  Lightbulb,
  CircuitBoard,
  Briefcase,
} from "lucide-react"

import { cn } from "@/lib/utils"

const features = [
  { icon: Mic, label: "Voice Chat" },
  { icon: Languages, label: "Urdu Support" },
  { icon: Languages, label: "English Support" },
  { icon: Lightbulb, label: "Instant Explanations" },
  { icon: CircuitBoard, label: "Circuit Analysis" },
  { icon: Briefcase, label: "Interview Preparation" },
]

const questions = [
  "Why use a 220\u03a9 resistor?",
  "What happens if resistance is increased?",
  "How does PWM work?",
]

const chatMessages = [
  { role: "ai", text: "Hello! I'm your ElectroVerse AI Tutor. Ask me anything about electronics." },
  { role: "user", text: "What is Ohm's Law?" },
  { role: "ai", text: "Ohm's Law states V = IR \u2014 voltage equals current times resistance. It\u2019s the foundation of circuit analysis!" },
]

function FloatingQuestion({ question, index }: { question: string; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85, rotate: index % 2 === 0 ? -3 : 3 }}
      whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.4 + index * 0.15, ease: "easeOut" }}
      whileHover={{
        scale: 1.05,
        rotate: 0,
        boxShadow: "0 0 30px rgba(43,168,162,0.15)",
        transition: { duration: 0.2 },
      }}
      className={cn(
        "glass rounded-2xl border border-white/10",
        "cursor-default px-4 py-3 text-sm text-foreground/80",
        "hover:border-neon-blue/20 hover:text-white",
        "transition-colors duration-200"
      )}
    >
      <span className="mr-2 text-neon-blue">\u2192</span>
      {question}
    </motion.div>
  )
}

export default function AITutor() {
  const headerRef = useRef<HTMLDivElement>(null)
  const headerInView = useInView(headerRef, { once: true, margin: "-80px" })
  const featuresRef = useRef<HTMLDivElement>(null)
  const featuresInView = useInView(featuresRef, { once: true, margin: "-60px" })

  return (
    <section id="ai-tutor" className="relative overflow-hidden px-4 py-16 md:py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div ref={headerRef}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mb-10 md:mb-16 text-center"
          >
            <div className="mb-6 inline-flex items-center justify-center">
              <motion.div
                animate={{ boxShadow: ["0 0 20px rgba(43,168,162,0.3)", "0 0 40px rgba(43,168,162,0.6)", "0 0 20px rgba(43,168,162,0.3)"] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                className="flex size-16 items-center justify-center rounded-2xl bg-neon-blue/10"
              >
                <Bot className="size-8 text-neon-blue" />
              </motion.div>
            </div>

            <span className="mb-3 inline-block rounded-full border border-neon-purple/20 bg-neon-purple/5 px-4 py-1 text-xs font-medium tracking-widest uppercase text-neon-purple">
              Powered by AI
            </span>

            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              <span className="text-gradient">AI Tutor</span>
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Your personal electronics mentor. Get instant answers, circuit
              analysis, and interview prep with voice support in Urdu and English.
            </p>
          </motion.div>
        </div>

        <div className="grid gap-10 lg:grid-cols-5 lg:gap-14">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-3"
          >
            <div className={cn("glass rounded-2xl border border-white/10 overflow-hidden")}>
              <div className="flex items-center gap-3 border-b border-white/5 px-5 py-4">
                <div className="flex gap-2">
                  <span className="size-2.5 rounded-full bg-red-500/70" />
                  <span className="size-2.5 rounded-full bg-yellow-500/70" />
                  <span className="size-2.5 rounded-full bg-green-500/70" />
                </div>
                <div className="ml-2 rounded-full bg-neon-blue/10 px-3 py-0.5 text-xs font-medium text-neon-blue">
                  AI Tutor Online
                </div>
              </div>

              <div className="flex flex-col gap-4 p-5">
                {chatMessages.map((msg, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.5 + i * 0.15 }}
                    className={cn(
                      "max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed",
                      msg.role === "ai"
                        ? "glass border border-white/5 self-start rounded-bl-md"
                        : "bg-neon-blue/10 border border-neon-blue/20 self-end rounded-br-md text-white"
                    )}
                  >
                    {msg.role === "ai" && (
                      <span className="mb-1 flex items-center gap-1.5 text-xs font-medium text-neon-blue">
                        <Bot className="size-3" /> AI Tutor
                      </span>
                    )}
                    {msg.text}
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 1.1 }}
                  className="mt-2 flex items-center gap-2 rounded-xl border border-white/5 bg-white/[0.03] px-4 py-3"
                >
                  <span className="flex-1 text-sm text-muted-foreground">
                    Ask me anything...
                  </span>
                  <span className="flex size-7 items-center justify-center rounded-lg bg-neon-blue/10 text-neon-blue">
                    <Mic className="size-3.5" />
                  </span>
                </motion.div>
              </div>
            </div>
          </motion.div>

          <div className="flex flex-col gap-8 lg:col-span-2">
            <div ref={featuresRef}>
              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                animate={featuresInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="mb-5 text-lg font-semibold text-white"
              >
                Capabilities
              </motion.h3>

              <div className="grid grid-cols-2 gap-3">
                {features.map((feature, i) => {
                  const Icon = feature.icon
                  return (
                    <motion.div
                      key={feature.label}
                      initial={{ opacity: 0, y: 20, scale: 0.95 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.2 + i * 0.08, ease: "easeOut" }}
                      whileHover={{
                        y: -3,
                        borderColor: "rgba(43, 168, 162, 0.3)",
                        transition: { duration: 0.15 },
                      }}
                      className={cn(
                        "glass rounded-2xl border border-white/10",
                        "flex items-center gap-3 p-4",
                        "hover:border-neon-blue/20",
                        "transition-all duration-200"
                      )}
                    >
                      <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-neon-blue/10 text-neon-blue">
                        <Icon className="size-4.5" />
                      </div>
                      <span className="text-sm font-medium text-foreground/90">
                        {feature.label}
                      </span>
                    </motion.div>
                  )
                })}
              </div>
            </div>

            <div>
              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="mb-4 text-lg font-semibold text-white"
              >
                Try Asking
              </motion.h3>

              <div className="flex flex-col gap-3">
                {questions.map((question, i) => (
                  <FloatingQuestion key={question} question={question} index={i} />
                ))}
              </div>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 1 }}
                className="mt-5 text-center text-xs text-muted-foreground"
              >
                Get detailed explanations with circuit diagrams and code examples
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
