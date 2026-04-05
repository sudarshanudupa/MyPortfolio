"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import {
  Database,
  Code2,
  Brain,
  Shield,
  Globe,
  Settings,
  Users,
  Wrench,
} from "lucide-react"

const skillCategories = [
  {
    title: "Programming",
    icon: Code2,
    skills: [
      { name: "SQL", level: 90 },
      { name: "Python", level: 80 },
      { name: "VBA/Macros", level: 85 },
      { name: "JavaScript", level: 70 },
    ],
  },
  {
    title: "Database & Data",
    icon: Database,
    skills: [
      { name: "MySQL/SQL Server", level: 90 },
      { name: "Data Analysis", level: 80 },
      { name: "Excel Advanced", level: 85 },
    ],
  },
  {
    title: "DevOps & Security",
    icon: Shield,
    skills: [
      { name: "Linux/Shell", level: 75 },
      { name: "AWS S3", level: 70 },
      { name: "IIoT Security", level: 80 },
      { name: "Automation", level: 85 },
    ],
  },
  {
    title: "ML & AI",
    icon: Brain,
    skills: [
      { name: "Deep Learning", level: 75 },
      { name: "Random Forest", level: 80 },
      { name: "Data Preprocessing", level: 85 },
    ],
  },
]

const softSkills = [
  { name: "Time Management", icon: Settings },
  { name: "Adaptability", icon: Users },
  { name: "Initiative", icon: Shield },
  { name: "Presentation", icon: Globe },
]

export default function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="skills" className="py-20 sm:py-28 relative">
      <div className="absolute inset-0 cyber-grid opacity-30" />
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/[0.02] to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
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
              <Wrench className="w-6 h-6 text-primary" />
            </motion.div>
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text">Skills & Expertise</h2>
              <p className="text-sm text-muted-foreground mt-1">Technical proficiency overview</p>
            </div>
            <div className="flex-1 h-px bg-gradient-to-r from-primary/50 to-transparent" />
          </motion.div>

          {/* Technical Skills Grid */}
          <div className="grid sm:grid-cols-2 gap-5 sm:gap-6 mb-12">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + categoryIndex * 0.1 }}
                whileHover={{ y: -2 }}
                className="p-5 sm:p-6 rounded-xl glass border border-border/50 hover:border-primary/25 transition-all duration-300 card-hover"
              >
                <div className="flex items-center gap-3 mb-6">
                  <motion.div
                    whileHover={{ rotate: 15, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400 }}
                    className="p-2.5 rounded-xl bg-primary/10 border border-primary/20"
                  >
                    <category.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </motion.div>
                  <h3 className="text-base sm:text-lg font-semibold">{category.title}</h3>
                </div>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div 
                      key={skill.name}
                      initial={{ opacity: 0, x: -15 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.2 + categoryIndex * 0.1 + skillIndex * 0.05 }}
                      className="group"
                    >
                      <div className="flex justify-between mb-2">
                        <span className="text-sm text-muted-foreground font-mono group-hover:text-foreground transition-colors duration-300">
                          {skill.name}
                        </span>
                        <motion.span 
                          className="text-sm text-primary font-mono font-semibold"
                          whileHover={{ scale: 1.1 }}
                        >
                          {skill.level}%
                        </motion.span>
                      </div>
                      <div className="h-2 bg-secondary/50 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : {}}
                          transition={{
                            duration: 1.2,
                            delay: 0.3 + categoryIndex * 0.1 + skillIndex * 0.1,
                            ease: [0.25, 0.46, 0.45, 0.94],
                          }}
                          className="h-full bg-gradient-to-r from-primary to-accent rounded-full relative overflow-hidden"
                        >
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                            animate={{ x: ["-100%", "200%"] }}
                            transition={{ duration: 2.5, repeat: Infinity, delay: skillIndex * 0.3 }}
                          />
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Soft Skills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <h3 className="text-lg font-semibold mb-6 text-center flex items-center justify-center gap-2">
              <span className="w-12 h-px bg-gradient-to-r from-transparent to-primary/50" />
              Soft Skills
              <span className="w-12 h-px bg-gradient-to-l from-transparent to-primary/50" />
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {softSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.03, y: -2 }}
                  className="p-4 rounded-xl glass border border-border/50 text-center hover:border-primary/20 transition-all duration-300 group cursor-default card-hover"
                >
                  <motion.div
                    whileHover={{ rotate: 15 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="inline-block"
                  >
                    <skill.icon className="w-7 h-7 sm:w-8 sm:h-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                  </motion.div>
                  <p className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                    {skill.name}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
