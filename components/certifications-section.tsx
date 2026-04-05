"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Award, ExternalLink, Calendar, Trophy, Star } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const categoryStyles: Record<string, string> = {
  DevOps: "badge-devops",
  Programming: "badge-programming",
  ML: "badge-ml",
  Web: "badge-web",
  Automation: "badge-automation",
}

const certifications = [
  {
    title: "Applied Linux Command Line and Shell Scripting",
    provider: "Udemy",
    date: "Dec 2023",
    category: "DevOps",
    tooltip: "Zero to Elite Linux mastery - command line proficiency",
  },
  {
    title: "Complete Python Programming",
    provider: "Udemy",
    date: "Dec 2023",
    category: "Programming",
    tooltip: "Comprehensive Python fundamentals & best practices",
  },
  {
    title: "Python for Data Science and ML Bootcamp",
    provider: "Great Learning",
    date: "Sep - Nov 2023",
    category: "ML",
    tooltip: "Machine learning algorithms & data science workflows",
  },
  {
    title: "HTML and CSS for Beginners",
    provider: "Udemy",
    date: "Apr - Jun 2023",
    category: "Web",
    tooltip: "Responsive web design & modern CSS techniques",
  },
  {
    title: "RPA Developer Foundation",
    provider: "UiPath Academy",
    date: "Dec 2022 - Feb 2023",
    category: "Automation",
    tooltip: "Enterprise-grade Robotic Process Automation",
  },
  {
    title: "C Programming for Beginners",
    provider: "Infosys",
    date: "Dec 2021",
    category: "Programming",
    tooltip: "Industry-standard C programming certification",
  },
  {
    title: "C for Everyone: Programming Fundamentals",
    provider: "Coursera - UC Santa Cruz",
    date: "Oct 2021",
    category: "Programming",
    tooltip: "University-certified systems programming",
  },
  {
    title: "Data Structures in C",
    provider: "Great Learning",
    date: "Jan 2022",
    category: "Programming",
    tooltip: "Advanced algorithms & data structure implementation",
  },
  {
    title: "Machine Learning Using Python Workshop",
    provider: "AJIET",
    date: "Jun 2021",
    category: "ML",
    tooltip: "Practical ML workshop with real-world projects",
  },
]

const achievements = [
  {
    title: "Highest CGPA - MTech Cybersecurity",
    organization: "Nitte University",
    description: "Secured highest CGPA (8.89) in MTech Cybersecurity batch",
    date: "2025",
    icon: Trophy,
  },
  {
    title: "IEEE Publication",
    organization: "IEEE Journal",
    description: "Deep Learning for IIoT Security research paper",
    date: "2025",
    icon: Star,
  },
  {
    title: "Rashtragaan Participation",
    organization: "Ministry of Culture, Govt of India",
    description: "Azadi Ka Amrit Mahotsav initiative",
    date: "Aug 2021",
    icon: Award,
  },
  {
    title: "Beach Cleaning Volunteer",
    organization: "Beach Rejuvenation Army",
    description: "Tannirbhavi Beach cleanliness drives",
    date: "Sep - Nov 2020",
    icon: Award,
  },
]

export default function CertificationsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [hoveredCert, setHoveredCert] = useState<string | null>(null)

  return (
    <section id="certifications" className="py-16 sm:py-24 relative">
      <div className="container mx-auto px-4 sm:px-6">
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
              <Award className="w-6 h-6 text-primary" />
            </motion.div>
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text">Certifications & Achievements</h2>
              <p className="text-sm text-muted-foreground mt-1">Professional credentials & recognitions</p>
            </div>
            <div className="flex-1 h-px bg-gradient-to-r from-primary/50 to-transparent" />
          </motion.div>

          {/* Certifications Grid */}
          <div className="mb-10 sm:mb-14">
            <motion.h3 
              className="text-base sm:text-lg font-semibold mb-5 sm:mb-6 flex items-center gap-3"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              <motion.div 
                className="p-2 rounded-lg bg-primary/10 border border-primary/20"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <Award className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
              </motion.div>
              Professional Certifications
              <div className="flex-1 h-px bg-gradient-to-r from-primary/30 to-transparent ml-2" />
            </motion.h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  onMouseEnter={() => setHoveredCert(cert.title)}
                  onMouseLeave={() => setHoveredCert(null)}
                  className="relative"
                >
                  {/* Tooltip */}
                  {hoveredCert === cert.title && cert.tooltip && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      className="absolute -top-12 left-1/2 -translate-x-1/2 z-10 px-4 py-2 tooltip-enhanced text-xs rounded-xl whitespace-nowrap font-medium border border-primary/20 max-w-[280px] text-center"
                    >
                      <span className="line-clamp-2">{cert.tooltip}</span>
                      <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-[oklch(0.20_0.02_260)] dark:bg-[oklch(0.95_0.01_260)] rotate-45" />
                    </motion.div>
                  )}
                  
                  <Card className="h-full bg-card/95 dark:bg-card/85 border-border/40 hover:border-primary/30 transition-all duration-350 group card-hover cert-card">
                    <CardHeader className="pb-2 sm:pb-3">
                      <div className="flex items-start justify-between">
                        <motion.span 
                          className={`px-2.5 py-1 text-xs rounded-lg font-medium border ${categoryStyles[cert.category] || 'bg-primary/10 text-primary border-primary/20'}`}
                          whileHover={{ scale: 1.05, y: -1 }}
                          transition={{ type: "spring", stiffness: 400 }}
                        >
                          {cert.category}
                        </motion.span>
                        <motion.div
                          whileHover={{ scale: 1.15, rotate: 5 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Button variant="ghost" size="icon" className="w-7 h-7 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-primary/10">
                            <ExternalLink className="w-3.5 h-3.5 text-primary" />
                          </Button>
                        </motion.div>
                      </div>
                      <CardTitle className="text-sm sm:text-base leading-tight mt-3 group-hover:text-primary transition-colors duration-300 line-clamp-2 font-semibold">
                        {cert.title}
                      </CardTitle>
                      <CardDescription className="text-xs font-medium text-accent">{cert.provider}</CardDescription>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-mono">
                        <Calendar className="w-3.5 h-3.5 text-primary/60" />
                        {cert.date}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <motion.h3 
              className="text-base sm:text-lg font-semibold mb-5 sm:mb-6 flex items-center gap-3"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4 }}
            >
              <motion.div 
                className="p-2 rounded-lg bg-accent/10 border border-accent/20"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <Trophy className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
              </motion.div>
              Achievements
              <div className="flex-1 h-px bg-gradient-to-r from-accent/30 to-transparent ml-2" />
            </motion.h3>
            <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.01 }}
                  className="p-5 sm:p-6 rounded-xl bg-card/95 dark:bg-card/85 border border-border/40 hover:border-primary/30 transition-all duration-350 card-hover achievement-card group relative overflow-hidden"
                >
                  {/* Subtle accent bar */}
                  <div className="absolute top-0 left-0 w-0.5 h-full bg-gradient-to-b from-primary/60 to-primary/30 opacity-40 group-hover:opacity-70 transition-opacity duration-300" />
                  
                  <div className="flex items-start gap-4">
                    <motion.div
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400 }}
                      className="p-2 rounded-lg bg-primary/8 border border-primary/15 flex-shrink-0"
                    >
                      <achievement.icon className="w-4 h-4 text-primary/80" />
                    </motion.div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm sm:text-base font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                        {achievement.title}
                      </h4>
                      <p className="text-accent text-xs sm:text-sm font-semibold mt-0.5">{achievement.organization}</p>
                      <p className="text-muted-foreground text-xs sm:text-sm mt-2 leading-relaxed">{achievement.description}</p>
                      <div className="flex items-center gap-1.5 text-xs text-muted-foreground mt-3 font-mono">
                        <Calendar className="w-3.5 h-3.5 text-primary/60" />
                        {achievement.date}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
