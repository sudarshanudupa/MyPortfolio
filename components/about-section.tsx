"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { GraduationCap, Briefcase, Award, Code2, User } from "lucide-react"
import Image from "next/image"

const stats = [
  { icon: Briefcase, label: "Years Experience", value: "2+", tooltip: "Professional experience at ANZ" },
  { icon: Code2, label: "Projects", value: "10+", tooltip: "Industry & academic projects" },
  { icon: Award, label: "Certifications", value: "9+", tooltip: "From Udemy, Coursera, UiPath & more" },
  { icon: GraduationCap, label: "Degrees", value: "MTech", tooltip: "Cybersecurity - 8.89 CGPA" },
]

export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-20 sm:py-28 relative hex-pattern">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div 
            className="flex items-center gap-4 mb-12"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.1 }}
          >
            <motion.div 
              className="p-3 rounded-xl bg-primary/10 border border-primary/20"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <User className="w-6 h-6 text-primary" />
            </motion.div>
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text">About Me</h2>
              <p className="text-sm text-muted-foreground mt-1">Get to know my background</p>
            </div>
            <div className="flex-1 h-px bg-gradient-to-r from-primary/50 to-transparent" />
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-10 lg:gap-14 items-start">
            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-2 flex justify-center lg:justify-start"
            >
              <div className="relative group">
                <motion.div
                  className="absolute -inset-2 bg-gradient-to-r from-primary via-accent to-primary rounded-2xl opacity-40 blur-xl group-hover:opacity-60 transition-opacity duration-500"
                  animate={{ 
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                  }}
                  transition={{ duration: 6, repeat: Infinity }}
                />
                <motion.div 
                  className="relative w-52 h-52 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-2xl overflow-hidden border-2 border-primary/30 bg-card glass"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src="/images/profile.jpeg"
                    alt="Sudarshan Udupa"
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                </motion.div>
                {/* Decorative corners */}
                <motion.div
                  className="absolute -top-3 -right-3 w-8 h-8 border-t-2 border-r-2 border-primary rounded-tr-lg"
                  animate={{ opacity: [0.4, 1, 0.4] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                <motion.div
                  className="absolute -bottom-3 -left-3 w-8 h-8 border-b-2 border-l-2 border-accent rounded-bl-lg"
                  animate={{ opacity: [0.4, 1, 0.4] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
                />
              </div>
            </motion.div>

            {/* Text Content */}
            <div className="lg:col-span-3 space-y-5">
              <motion.p 
                className="text-muted-foreground leading-relaxed text-base sm:text-lg"
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 }}
              >
                Cybersecurity professional with{" "}
                <span className="text-primary font-semibold">MTech in Cybersecurity </span> from 
                NMAM Institute of Technology, Nitte University. Currently an Engineer at{" "}
                <span className="text-accent font-semibold">ANZ Support Services</span>, Bangalore.
              </motion.p>
              
              <motion.p 
                className="text-muted-foreground leading-relaxed text-sm sm:text-base"
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.4 }}
              >
                Expertise in SQL operations, VBA automation, and Python scripting. 
                IEEE published researcher in Deep Learning for IIoT security with{" "}
                <span className="text-primary font-semibold">91.03% threat detection accuracy</span>.
              </motion.p>

              {/* Core Technologies */}
              <motion.div 
                className="pt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 }}
              >
                <h3 className="text-xs font-mono text-primary mb-4 flex items-center gap-2">
                  <span className="w-8 h-px bg-primary/50" />
                  Core Technologies
                </h3>
                <div className="flex flex-wrap gap-2">
                  {["SQL", "Python", "VBA", "Linux", "Deep Learning", "AWS", "DevOps", "IIoT Security"].map((skill, index) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.6 + index * 0.05 }}
                      whileHover={{ scale: 1.08, y: -3 }}
                      className="px-3 py-1.5 text-xs sm:text-sm rounded-lg glass border border-primary/20 hover:border-primary/50 text-foreground hover:text-primary font-mono transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>

          {/* Stats Grid */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-12"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.7 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -6 }}
                className="relative p-5 sm:p-6 rounded-xl glass border border-border/50 hover:border-primary/50 transition-all duration-400 group card-hover cursor-default"
                title={stat.tooltip}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
                <stat.icon className="w-7 h-7 sm:w-8 sm:h-8 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                <p className="text-3xl sm:text-4xl font-bold text-foreground mb-1">{stat.value}</p>
                <p className="text-xs sm:text-sm text-muted-foreground">{stat.label}</p>
                {/* Hover tooltip */}
                <motion.div 
                  className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1.5 rounded-lg bg-foreground text-background text-xs font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  initial={{ y: 5 }}
                  whileHover={{ y: 0 }}
                >
                  {stat.tooltip}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
