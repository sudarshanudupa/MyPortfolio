"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Award, ExternalLink, Calendar, Trophy, Star } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const certifications = [
  {
    title: "Applied Linux Command Line and Shell Scripting",
    provider: "Udemy",
    date: "Dec 2023",
    category: "DevOps",
    tooltip: "Zero to Elite Linux mastery",
  },
  {
    title: "Complete Python Programming",
    provider: "Udemy",
    date: "Dec 2023",
    category: "Programming",
    tooltip: "Python fundamentals for beginners",
  },
  {
    title: "Python for Data Science and ML Bootcamp",
    provider: "Great Learning",
    date: "Sep - Nov 2023",
    category: "ML",
    tooltip: "Machine learning with Python",
  },
  {
    title: "HTML and CSS for Beginners",
    provider: "Udemy",
    date: "Apr - Jun 2023",
    category: "Web",
    tooltip: "Building responsive websites",
  },
  {
    title: "RPA Developer Foundation",
    provider: "UiPath Academy",
    date: "Dec 2022 - Feb 2023",
    category: "Automation",
    tooltip: "Robotic Process Automation certification",
  },
  {
    title: "C Programming for Beginners",
    provider: "Infosys",
    date: "Dec 2021",
    category: "Programming",
    tooltip: "C programming on Windows platform",
  },
  {
    title: "C for Everyone: Programming Fundamentals",
    provider: "Coursera - UC Santa Cruz",
    date: "Oct 2021",
    category: "Programming",
    tooltip: "University-certified C programming",
  },
  {
    title: "Data Structures in C",
    provider: "Great Learning",
    date: "Jan 2022",
    category: "Programming",
    tooltip: "Advanced data structures implementation",
  },
  {
    title: "Machine Learning Using Python Workshop",
    provider: "AJIET",
    date: "Jun 2021",
    category: "ML",
    tooltip: "Hands-on ML workshop",
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
          <div className="flex items-center gap-3 sm:gap-4 mb-8 sm:mb-12">
            <Award className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Certifications & Achievements</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-border to-transparent" />
          </div>

          {/* Certifications Grid */}
          <div className="mb-8 sm:mb-12">
            <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6 flex items-center gap-2">
              <Award className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
              Professional Certifications
            </h3>
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
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute bottom-full left-1/2 z-10 mb-3 w-max max-w-[220px] -translate-x-1/2 px-3 py-1.5 bg-foreground text-background text-xs rounded-lg whitespace-normal text-center leading-snug shadow-lg pointer-events-none sm:max-w-[240px]"
                    >
                      {cert.tooltip}
                      <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-foreground rotate-45" />
                    </motion.div>
                  )}
                  
                  <Card className="h-full bg-card border-border hover:border-primary/25 transition-all duration-300 group card-hover">
                    <CardHeader className="pb-2 sm:pb-3">
                      <div className="flex items-start justify-between">
                        <motion.span 
                          className="px-2 py-0.5 text-xs rounded-md bg-primary/10 text-primary font-mono"
                          whileHover={{ scale: 1.05 }}
                        >
                          {cert.category}
                        </motion.span>
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Button variant="ghost" size="icon" className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity">
                            <ExternalLink className="w-3 h-3" />
                          </Button>
                        </motion.div>
                      </div>
                      <CardTitle className="text-xs sm:text-sm leading-tight mt-2 group-hover:text-primary transition-colors line-clamp-2">
                        {cert.title}
                      </CardTitle>
                      <CardDescription className="text-xs">{cert.provider}</CardDescription>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Calendar className="w-3 h-3" />
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
            <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6 flex items-center gap-2">
              <Trophy className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
              Achievements
            </h3>
            <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.005, x: 2 }}
                  className="p-4 sm:p-5 rounded-xl bg-card border border-border hover:border-primary/25 transition-all duration-300 card-hover group"
                >
                  <div className="flex items-start gap-3 sm:gap-4">
                    <motion.div
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      className="p-2 rounded-lg bg-primary/10 flex-shrink-0"
                    >
                      <achievement.icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                    </motion.div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm sm:text-base font-semibold text-foreground group-hover:text-primary transition-colors">
                        {achievement.title}
                      </h4>
                      <p className="text-primary text-xs sm:text-sm font-medium">{achievement.organization}</p>
                      <p className="text-muted-foreground text-xs sm:text-sm mt-1 line-clamp-2">{achievement.description}</p>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground mt-2">
                        <Calendar className="w-3 h-3" />
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
