"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Quote, Star } from "lucide-react"
import { cn } from "@/lib/utils"

const testimonials = [
  {
    name: "Sarah Ahmed",
    quote:
      "ElectroVerse completely transformed how I understand circuits. The simulations make complex concepts feel intuitive.",
    title: "Embedded Systems Engineer at Siemens",
    rating: 5,
  },
  {
    name: "Usman Khan",
    quote:
      "The AI tutor helped me prepare for my electronics interview in just 2 weeks. Landed my dream job!",
    title: "Electronics Engineer at Dar",
    rating: 5,
  },
  {
    name: "Aisha Malik",
    quote:
      "I built my first PCB after just one month of learning on ElectroVerse. The project builder is incredible!",
    title: "Student at NUST",
    rating: 5,
  },
  {
    name: "Bilal Hassan",
    quote:
      "The career simulator showed me exactly what skills I needed. Now I'm working as an IoT developer.",
    title: "IoT Developer at Systems Ltd",
    rating: 5,
  },
]

export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="relative overflow-hidden py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 md:mb-16 text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-white/60">
            <Quote className="size-4 text-neon-green" />
            Testimonials
          </div>
          <h2 className="mb-4 font-heading text-4xl font-bold tracking-tight md:text-5xl">
            What Our{" "}
            <span className="text-gradient">Community Says</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-white/60">
            Hear from students and engineers who transformed their careers
            with ElectroVerse.
          </p>
        </motion.div>

        <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
          <motion.div
            className="flex gap-6"
            animate={isInView ? { x: ["0%", "-50%"] } : { x: "0%" }}
            transition={{
              duration: 24,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {[...testimonials, ...testimonials].map((item, index) => (
              <motion.div
                key={`${item.name}-${index}`}
                className={cn(
                  "min-w-[340px] max-w-[340px] shrink-0 rounded-2xl",
                  "border border-white/10 bg-white/5 p-6",
                  "backdrop-blur-xl transition-all duration-300",
                  "hover:border-neon-green/30",
                  "hover:shadow-[0_0_40px_-8px_rgba(255,210,63,0.1)]",
                  "md:min-w-[380px] md:max-w-[380px]",
                )}
              >
                <div className="mb-4 flex items-center gap-1">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="size-4 fill-neon-green text-neon-green"
                    />
                  ))}
                </div>

                <div className="relative mb-6">
                  <Quote className="absolute -left-1 -top-1 size-6 text-neon-green/20" />
                  <p className="pl-6 text-sm leading-relaxed text-white/70 italic">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>

                <div className="border-t border-white/5 pt-4">
                  <p className="font-heading text-base font-bold text-white">
                    {item.name}
                  </p>
                  <p className="text-sm text-white/40">{item.title}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
