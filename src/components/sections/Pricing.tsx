"use client"

import { motion } from "framer-motion"
import { Sparkles, Rocket, Building2, Check } from "lucide-react"
import { cn } from "@/lib/utils"

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "/mo",
    description: "Get started with basic simulations and community access.",
    icon: Sparkles,
    features: [
      "Basic simulations",
      "5 projects per month",
      "Community access",
    ],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$19",
    period: "/mo",
    description:
      "Unlock the full learning experience with AI assistance.",
    icon: Rocket,
    features: [
      "Everything in Free",
      "Unlimited projects",
      "AI Tutor",
      "Career tools",
      "Analytics dashboard",
    ],
    cta: "Start Pro",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "$99",
    period: "/mo",
    description:
      "For teams and institutions that need custom solutions.",
    icon: Building2,
    features: [
      "Everything in Pro",
      "Team features",
      "Custom labs",
      "Priority support",
      "White-labeling",
    ],
    cta: "Contact Sales",
    highlighted: false,
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
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

export default function Pricing() {
  return (
    <section id="pricing" className="relative overflow-hidden py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 md:mb-16 text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-white/60">
            <Sparkles className="size-4 text-neon-blue" />
            Pricing
          </div>
          <h2 className="mb-4 font-heading text-4xl font-bold tracking-tight md:text-5xl">
            Choose Your{" "}
            <span className="text-gradient">Learning Path</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-white/60">
            Scale your electronics education with the right plan.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3"
        >
          {plans.map((plan) => {
            const Icon = plan.icon
            return (
              <motion.div
                key={plan.name}
                variants={cardVariants}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.25 },
                }}
                className={cn(
                  "group relative flex flex-col rounded-2xl p-[1px]",
                  plan.highlighted
                    ? "bg-[conic-gradient(from_0deg,theme(colors.neon-blue),theme(colors.neon-green),theme(colors.neon-blue))]"
                    : "bg-transparent",
                )}
              >
                {plan.highlighted && (
                  <div
                    className={cn(
                      "absolute -inset-[2px] z-[-1] rounded-2xl opacity-50 blur-xl",
                      "bg-[conic-gradient(from_0deg,theme(colors.neon-blue),theme(colors.neon-green),theme(colors.neon-blue))]",
                    )}
                  />
                )}
                <div
                  className={cn(
                    "relative flex h-full flex-col rounded-2xl",
                    "border border-white/10 bg-white/5 p-6",
                    "backdrop-blur-xl",
                    plan.highlighted &&
                      "border-transparent bg-[#0a0a0f]",
                  )}
                >
                  {plan.highlighted && (
                    <span
                      className={cn(
                        "absolute -top-3 left-1/2 -translate-x-1/2",
                        "rounded-full bg-gradient-to-r from-neon-blue to-neon-green px-4 py-1",
                        "text-xs font-bold uppercase tracking-wider text-[#0a0a0f]",
                        "shadow-[0_0_20px_-2px_rgba(43,168,162,0.4)]",
                      )}
                    >
                      Most Popular
                    </span>
                  )}

                  <div
                    className={cn(
                      "mb-4 flex size-12 items-center justify-center rounded-xl",
                      plan.highlighted
                        ? "bg-gradient-to-br from-neon-blue/20 to-neon-green/20"
                        : "bg-white/5",
                      "border border-white/5",
                    )}
                  >
                    <Icon
                      className={cn(
                        "size-6",
                        plan.highlighted
                          ? "text-neon-blue"
                          : "text-white/60",
                      )}
                    />
                  </div>

                  <h3
                    className={cn(
                      "mb-1 font-heading text-xl font-bold",
                      plan.highlighted
                        ? "text-gradient"
                        : "text-white",
                    )}
                  >
                    {plan.name}
                  </h3>

                  <div className="mb-1 flex items-baseline gap-0.5">
                    <span className="text-4xl font-bold text-white">
                      {plan.price}
                    </span>
                    <span className="text-sm text-white/40">
                      {plan.period}
                    </span>
                  </div>

                  <p className="mb-6 text-sm text-white/50">
                    {plan.description}
                  </p>

                  <ul className="mb-8 flex-1 space-y-3">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2.5"
                      >
                        <div
                          className={cn(
                            "mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full",
                            plan.highlighted
                              ? "bg-neon-green/10"
                              : "bg-white/5",
                          )}
                        >
                          <Check
                            className={cn(
                              "size-3",
                              plan.highlighted
                                ? "text-neon-green"
                                : "text-white/40",
                            )}
                          />
                        </div>
                        <span className="text-sm text-white/70">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <button
                    className={cn(
                      "inline-flex w-full items-center justify-center gap-2 rounded-xl px-4 py-2.5",
                      "text-sm font-medium transition-all duration-300",
                      "active:scale-[0.98]",
                      plan.highlighted
                        ? "bg-gradient-to-r from-neon-blue to-neon-green text-[#0a0a0f] font-bold shadow-[0_0_25px_-4px_rgba(43,168,162,0.3)] hover:shadow-[0_0_35px_-4px_rgba(43,168,162,0.5)]"
                        : "border border-white/10 bg-white/5 text-white hover:border-white/20 hover:bg-white/10",
                    )}
                  >
                    {plan.cta}
                  </button>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
