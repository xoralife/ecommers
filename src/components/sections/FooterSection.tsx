"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { CircuitBoard, Code2, MessageCircle, Briefcase, Mail, ArrowRight } from "lucide-react"

const platformLinks = [
  { label: "About", href: "/about" },
  { label: "Documentation", href: "/docs" },
  { label: "Blog", href: "/blog" },
  { label: "Community", href: "/community" },
]

const learnLinks = [
  { label: "Circuits", href: "/learn/circuits" },
  { label: "PCB Design", href: "/learn/pcb-design" },
  { label: "Embedded Systems", href: "/learn/embedded-systems" },
  { label: "IoT", href: "/learn/iot" },
]

const companyLinks = [
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
]

const socialIcons = [
  { icon: Code2, href: "#", label: "GitHub" },
  { icon: MessageCircle, href: "#", label: "Twitter" },
  { icon: Briefcase, href: "#", label: "LinkedIn" },
  { icon: Mail, href: "#", label: "Email" },
]

function FooterColumn({
  title,
  links,
}: {
  title: string
  links: { label: string; href: string }[]
}) {
  return (
    <div>
      <h3 className="mb-4 text-sm font-semibold text-foreground">{title}</h3>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function FooterSection() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative border-t border-white/5"
    >
      <div className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-neon-blue/50 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 pt-16 pb-8 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link href="/" className="mb-4 flex items-center gap-2">
              <CircuitBoard className="h-6 w-6 text-neon-blue" />
              <span className="text-gradient font-heading text-lg font-bold tracking-wider">
                ElectroVerse
              </span>
            </Link>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Master Electronics Through Interactive Simulations
            </p>
            <div className="mt-5 flex items-center gap-3">
              {socialIcons.map(({ icon: Icon, href, label }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-muted-foreground transition-all hover:border-neon-blue/30 hover:text-neon-blue"
                >
                  <Icon className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </div>

          <FooterColumn title="Platform" links={platformLinks} />
          <FooterColumn title="Learn" links={learnLinks} />
          <FooterColumn title="Company" links={companyLinks} />
        </div>

        <div className="mt-12 rounded-2xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-sm sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-sm font-semibold text-foreground">
                Stay Updated
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Get the latest in electronics delivered to your inbox.
              </p>
            </div>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex w-full max-w-sm gap-2"
            >
              <div className="relative flex-1">
                <Mail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  required
                  className="w-full rounded-lg border border-white/10 bg-white/5 py-2.5 pl-10 pr-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-neon-blue/40 focus:outline-none focus:ring-1 focus:ring-neon-blue/20"
                />
              </div>
              <button
                type="submit"
                className="glow-blue inline-flex items-center gap-1.5 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/80"
              >
                Subscribe
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>

        {/* <div className="mt-8 border-t border-white/5 pt-6 text-center">
          <p className="text-xs text-muted-foreground">
            &copy; 2026 ElectroVerse. All rights reserved.
          </p>
        </div> */}
      </div>
    </motion.footer>
  )
}
