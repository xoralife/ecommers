"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Trophy, Swords, Users, Gamepad2, Medal, Coins, Flame, CalendarCheck } from "lucide-react"

const leaderboard = [
  { rank: 1, name: "CyberTech", xp: 28450, badge: "Elite Engineer", color: "#2BA8A2" },
  { rank: 2, name: "FluxMaster", xp: 22130, badge: "Circuit Sage", color: "#FFD23F" },
  { rank: 3, name: "OhmRunner", xp: 19780, badge: "Wiring Wizard", color: "#5DADE2" },
]

const challenges = [
  { name: "30-Day Soldering Sprint", progress: 73, reward: "500 XP + Badge" },
  { name: "Circuit Design Gauntlet", progress: 41, reward: "300 XP + Coins" },
  { name: "IoT Hackathon Prep", progress: 90, reward: "750 XP + Trophy" },
]

const teams = [
  { name: "Voltage Vanguard", members: 12, wins: 8, color: "#2BA8A2" },
  { name: "Resistance Rebels", members: 9, wins: 6, color: "#FFD23F" },
  { name: "Capacitor Crew", members: 15, wins: 11, color: "#5DADE2" },
]

const badges = [
  { icon: Medal, label: "XP System", desc: "Earn XP per lesson", color: "#2BA8A2" },
  { icon: Coins, label: "Coins", desc: "Redeem for perks", color: "#FFD23F" },
  { icon: Flame, label: "Streak Rewards", desc: "Daily login bonus", color: "#EF6C4A" },
  { icon: CalendarCheck, label: "Daily Missions", desc: "Complete tasks", color: "#5DADE2" },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
}

function GlowCard({
  children,
  color = "#2BA8A2",
  className = "",
}: {
  children: React.ReactNode
  color?: string
  className?: string
}) {
  return (
    <div
      className={`glass relative overflow-hidden rounded-2xl border border-white/[0.06] p-6 transition-all duration-300 ${className}`}
      style={
        {
          "--glow-color": color,
          boxShadow: `0 0 0 0 transparent`,
        } as React.CSSProperties
      }
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = `0 0 30px ${color}22, 0 0 60px ${color}11`
        e.currentTarget.style.borderColor = `${color}33`
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = `0 0 0 0 transparent`
        e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)"
      }}
    >
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300"
        style={{
          background: `linear-gradient(135deg, ${color}11, transparent 60%)`,
        }}
        onPointerEnter={(e) => (e.currentTarget.style.opacity = "1")}
        onPointerLeave={(e) => (e.currentTarget.style.opacity = "0")}
      />
      {children}
    </div>
  )
}

export default function Competitive() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-[#0a0a0f] px-4 py-24 md:px-8 lg:px-16"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_50%,rgba(93,173,226,0.04),transparent)]" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <span className="mb-3 inline-block rounded-full border border-[#5DADE2]/20 bg-[#5DADE2]/5 px-4 py-1 text-xs font-semibold tracking-widest uppercase text-[#5DADE2]">
            Gamification
          </span>
          <h2 className="text-gradient-blue text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
            Competitive
            <br />
            Features
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[#8888a0] text-lg">
            Level up your skills through challenges, leaderboards, and team competitions.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {/* Leaderboard */}
          <motion.div variants={cardVariants} className="sm:col-span-2 lg:col-span-1">
            <GlowCard color="#2BA8A2">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex size-9 items-center justify-center rounded-lg bg-[#2BA8A2]/10 text-[#2BA8A2]">
                  <Trophy className="size-4.5" />
                </div>
                <h3 className="text-sm font-semibold text-white">Global Leaderboard</h3>
              </div>
              <div className="space-y-2">
                {leaderboard.map((entry) => {
                  const rankColors = ["#ffd700", "#c0c0c0", "#cd7f32"]
                  return (
                    <div
                      key={entry.rank}
                      className="flex items-center gap-3 rounded-xl border border-white/[0.04] bg-white/[0.02] px-3 py-2.5 transition-all duration-200 hover:bg-white/[0.05]"
                    >
                      <span
                        className="flex size-8 shrink-0 items-center justify-center rounded-lg text-xs font-bold"
                        style={{
                          background: `${entry.color}15`,
                          color: entry.color,
                          border: `1px solid ${entry.color}22`,
                        }}
                      >
                        {entry.rank === 1 ? (
                          <Trophy className="size-4" style={{ color: rankColors[0] }} />
                        ) : entry.rank === 2 ? (
                          <Medal className="size-4" style={{ color: rankColors[1] }} />
                        ) : (
                          <Medal className="size-4" style={{ color: rankColors[2] }} />
                        )}
                      </span>
                      <div className="min-w-0 flex-1">
                        <span className="block truncate text-sm font-semibold text-white">
                          {entry.name}
                        </span>
                        <span className="text-[10px] text-[#8888a0]">{entry.badge}</span>
                      </div>
                      <span className="shrink-0 text-right text-xs font-bold" style={{ color: entry.color }}>
                        {entry.xp.toLocaleString()} XP
                      </span>
                    </div>
                  )
                })}
              </div>
              <button
                className="mt-3 w-full rounded-xl border border-white/[0.06] py-2 text-xs font-medium text-[#8888a0] transition-all hover:border-[#2BA8A2]/20 hover:text-[#2BA8A2]"
                style={{
                  background: "linear-gradient(135deg, rgba(43,168,162,0.03), transparent)",
                }}
              >
                View Full Leaderboard
              </button>
            </GlowCard>
          </motion.div>

          {/* Monthly Challenges */}
          <motion.div variants={cardVariants}>
            <GlowCard color="#FFD23F">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex size-9 items-center justify-center rounded-lg bg-[#FFD23F]/10 text-[#FFD23F]">
                  <Swords className="size-4.5" />
                </div>
                <h3 className="text-sm font-semibold text-white">Monthly Challenges</h3>
              </div>
              <div className="space-y-3">
                {challenges.map((ch) => (
                  <div key={ch.name}>
                    <div className="mb-1.5 flex items-center justify-between">
                      <span className="text-sm text-[#c0c0d0]">{ch.name}</span>
                      <span className="text-[10px] text-[#8888a0]">{ch.progress}%</span>
                    </div>
                    <div className="mb-1 h-2 w-full overflow-hidden rounded-full bg-white/5">
                      <motion.div
                        className="h-full rounded-full"
                        style={{
                          background: `linear-gradient(90deg, #FFD23F, #2BA8A2)`,
                        }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${ch.progress}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                      />
                    </div>
                    <span className="text-[10px] text-[#8888a0]">Reward: {ch.reward}</span>
                  </div>
                ))}
              </div>
            </GlowCard>
          </motion.div>

          {/* Team Competitions */}
          <motion.div variants={cardVariants}>
            <GlowCard color="#5DADE2">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex size-9 items-center justify-center rounded-lg bg-[#5DADE2]/10 text-[#5DADE2]">
                  <Users className="size-4.5" />
                </div>
                <h3 className="text-sm font-semibold text-white">Team Competitions</h3>
              </div>
              <div className="space-y-2.5">
                {teams.map((team) => (
                  <div
                    key={team.name}
                    className="flex items-center justify-between rounded-xl border border-white/[0.04] bg-white/[0.02] px-3 py-2.5"
                  >
                    <div className="flex items-center gap-2.5">
                      <div
                        className="size-3 rounded-full"
                        style={{ background: team.color }}
                      />
                      <span className="text-sm font-medium text-white">{team.name}</span>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-[#8888a0]">
                      <span>{team.members} members</span>
                      <span className="font-semibold" style={{ color: team.color }}>
                        {team.wins}W
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <button
                className="mt-3 w-full rounded-xl border border-white/[0.06] py-2 text-xs font-medium text-[#8888a0] transition-all hover:border-[#5DADE2]/20 hover:text-[#5DADE2]"
                style={{
                  background: "linear-gradient(135deg, rgba(93,173,226,0.03), transparent)",
                }}
              >
                Form or Join a Team
              </button>
            </GlowCard>
          </motion.div>

          {/* Tournaments */}
          <motion.div variants={cardVariants}>
            <GlowCard color="#FF8A6A">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex size-9 items-center justify-center rounded-lg bg-[#FF8A6A]/10 text-[#FF8A6A]">
                  <Gamepad2 className="size-4.5" />
                </div>
                <h3 className="text-sm font-semibold text-white">Tournaments</h3>
              </div>
              <div className="space-y-3">
                <div className="rounded-xl border border-[#FF8A6A]/10 bg-[#FF8A6A]/5 p-3">
                  <span className="text-xs font-semibold text-[#FF8A6A]">⚡ Upcoming</span>
                  <p className="mt-1 text-sm font-medium text-white">
                    ElectroBlitz: Speed Run Challenge
                  </p>
                  <p className="mt-0.5 text-xs text-[#8888a0]">Starts in 3 days · 128 participants</p>
                </div>
                <div className="rounded-xl border border-white/[0.04] bg-white/[0.02] p-3">
                  <span className="text-xs font-semibold text-[#FFD23F]">● Live</span>
                  <p className="mt-1 text-sm font-medium text-white">
                    PCB Design Showdown
                  </p>
                  <p className="mt-0.5 text-xs text-[#8888a0]">Round 2 of 4 · 64 remaining</p>
                </div>
                <div className="rounded-xl border border-white/[0.04] bg-white/[0.02] p-3">
                  <span className="text-xs font-semibold text-[#8888a0]">Ended</span>
                  <p className="mt-1 text-sm font-medium text-white">
                    Firmware Hackathon Q2
                  </p>
                  <p className="mt-0.5 text-xs text-[#8888a0]">Winner: CyberTech · 2,400 XP prize</p>
                </div>
              </div>
            </GlowCard>
          </motion.div>

          {/* Achievement Badges */}
          <motion.div
            variants={cardVariants}
            className="sm:col-span-2 lg:col-span-1"
          >
            <GlowCard color="#EF6C4A">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex size-9 items-center justify-center rounded-lg bg-[#EF6C4A]/10 text-[#EF6C4A]">
                  <Medal className="size-4.5" />
                </div>
                <h3 className="text-sm font-semibold text-white">Achievement Badges</h3>
              </div>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-2">
                {badges.map((badge) => {
                  const Icon = badge.icon
                  return (
                    <div
                      key={badge.label}
                      className="flex flex-col items-center rounded-xl border border-white/[0.04] bg-white/[0.02] p-3 text-center transition-all duration-200 hover:bg-white/[0.05]"
                    >
                      <div
                        className="flex size-10 items-center justify-center rounded-lg"
                        style={{
                          background: `${badge.color}12`,
                          color: badge.color,
                        }}
                      >
                        <Icon className="size-5" />
                      </div>
                      <span className="mt-1.5 text-xs font-semibold text-white">{badge.label}</span>
                      <span className="mt-0.5 text-[10px] text-[#8888a0]">{badge.desc}</span>
                    </div>
                  )
                })}
              </div>
            </GlowCard>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
