"use client"

import { Mail, Phone, MapPin } from "lucide-react"
import { motion } from "framer-motion"

export default function ContactSection() {
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
            <Mail className="size-4 text-neon-blue" />
            Contact
          </div>
          <h2 className="mb-4 font-heading text-4xl font-bold tracking-tight md:text-5xl">
            Get In{" "}
            <span className="text-gradient">Touch</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-white/60">
            Have a question or want to collaborate? Reach out to me directly.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto max-w-lg"
        >
          <div className="glass relative rounded-2xl border border-white/[0.06] p-8 text-center shadow-[0_0_40px_-8px_rgba(43,168,162,0.15)]">
            <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-[#2BA8A2]/20 via-transparent to-[#FFD23F]/10 opacity-40 pointer-events-none" />

            <div className="relative mx-auto mb-6 size-48 overflow-hidden rounded-2xl ring-2 ring-[#2BA8A2]/30 shadow-lg shadow-[#2BA8A2]/10">
              <img
                src="/p.jpg"
                alt="Abid Hussain"
                className="size-full object-cover scale-125"
              />
            </div>

            <h3 className="relative mb-1 text-xl font-bold text-white">Abid Hussain</h3>
            <p className="relative mb-6 text-sm text-[#8888a0]">Electronics Instructor</p>

            <div className="relative space-y-4">
              <a
                href="tel:+92425624760"
                className="flex items-center gap-3 rounded-xl border border-white/[0.04] bg-white/[0.02] px-4 py-3 text-sm text-[#c0c0d0] transition-all hover:border-[#2BA8A2]/20 hover:bg-[#2BA8A2]/5 hover:text-white"
              >
                <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-[#2BA8A2]/10 text-[#2BA8A2]">
                  <Phone className="size-4" />
                </span>
                <span>+92 425 624760</span>
              </a>

              <a
                href="mailto:abidhussainiou@gmail.com"
                className="flex items-center gap-3 rounded-xl border border-white/[0.04] bg-white/[0.02] px-4 py-3 text-sm text-[#c0c0d0] transition-all hover:border-[#2BA8A2]/20 hover:bg-[#2BA8A2]/5 hover:text-white"
              >
                <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-[#2BA8A2]/10 text-[#2BA8A2]">
                  <Mail className="size-4" />
                </span>
                <span>abidhussainiou@gmail.com</span>
              </a>

              <div className="flex items-center gap-3 rounded-xl border border-white/[0.04] bg-white/[0.02] px-4 py-3 text-sm text-[#c0c0d0]">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-[#2BA8A2]/10 text-[#2BA8A2]">
                  <MapPin className="size-4" />
                </span>
                <span>Pakistan</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
