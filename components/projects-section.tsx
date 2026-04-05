"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { ExternalLink, Github, FolderOpen, ScanFace, Database, Activity, Shield, FileText } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "Cyber Threat Intelligence for IIoT",
    subtitle: "MTech Research Project",
    icon: Shield,
    period: "2024 - 2025",
    description:
      "CTI framework securing Industrial IoT against DDoS and Ransomware using DNNs and Random Forest, optimized with SMOTE.",
    technologies: ["Deep Learning", "Python", "SMOTE", "Edge-IIoTset"],
    featured: true,
    achievement: "91.03% Accuracy",
    tooltip: "IEEE peer-reviewed ML-based IIoT security research",
  },
  {
    title: "IEEE Publication",
    subtitle: "Deep Learning for IIoT Security",
    icon: FileText,
    period: "2025",
    description:
      "Peer-reviewed paper on Deep Learning for critical infrastructure security with 91.03% threat detection accuracy.",
    technologies: ["IEEE", "Research", "Cybersecurity", "ML"],
    featured: true,
    achievement: "Published",
    tooltip: "Validates expertise as credible Cybersecurity authority",
  },
  {
    title: "Forensic Desk",
    subtitle: "Face Recognition System",
    icon: ScanFace,
    period: "Jan - May 2023",
    description:
      "ML-based composite face sketch construction with Amazon S3 secure storage integration.",
    technologies: ["ML", "JavaScript", "Amazon S3"],
    featured: true,
    achievement: "Star Project",
    tooltip: "College star performer - ML face recognition",
  },
  {
    title: "Warehouse Management",
    subtitle: "Database Solution",
    icon: Database,
    period: "Dec 2021 - Jan 2022",
    description:
      "Comprehensive warehouse inventory system with optimized SQL queries for efficient data management.",
    technologies: ["SQL", "Database Design", "CRUD"],
    featured: false,
    tooltip: "Full-stack database management application",
  },
  {
    title: "COVID Tracker",
    subtitle: "Pandemic Monitoring",
    icon: Activity,
    period: "Jun - Jul 2021",
    description:
      "Global COVID-19 tracking with real-time alerts and data visualization.",
    technologies: ["SQL", "Data Analysis"],
    featured: false,
    tooltip: "Real-time pandemic statistics dashboard",
  },
]

export default function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [hoveredProject, setHoveredProject] = useState<string | null>(null)

  return (
    <section id="projects" className="py-20 sm:py-28 relative hex-pattern">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent pointer-events-none" />
      
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
              <FolderOpen className="w-6 h-6 text-primary" />
            </motion.div>
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text">Featured Projects</h2>
              <p className="text-sm text-muted-foreground mt-1">Showcasing my technical work</p>
            </div>
            <div className="flex-1 h-px bg-gradient-to-r from-primary/50 to-transparent" />
          </motion.div>

          {/* Projects Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                onMouseEnter={() => setHoveredProject(project.title)}
                onMouseLeave={() => setHoveredProject(null)}
                className="relative"
              >
                <Card className="h-full glass border-border/50 hover:border-primary/40 transition-all duration-400 group card-hover overflow-hidden bg-card/80 dark:bg-card/60">
                  {/* Hover tooltip */}
                  {hoveredProject === project.title && project.tooltip && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.95 }}
                      className="absolute -top-14 left-1/2 -translate-x-1/2 z-20 px-4 py-2.5 tooltip-enhanced text-xs rounded-xl whitespace-nowrap font-medium border border-primary/20"
                    >
                      {project.tooltip}
                      <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-[oklch(0.20_0.02_260)] dark:bg-[oklch(0.95_0.01_260)] rotate-45" />
                    </motion.div>
                  )}
                  
                  {/* Gradient overlay on hover */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />
                  
                  <CardHeader className="pb-3 relative">
                    <div className="flex items-center justify-between mb-4">
                      <motion.div
                        whileHover={{ rotate: 15, scale: 1.15 }}
                        transition={{ type: "spring", stiffness: 400 }}
                        className="p-2.5 rounded-xl bg-primary/10 border border-primary/20"
                      >
                        <project.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                      </motion.div>
                      <div className="flex gap-1.5 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                        <motion.div whileHover={{ scale: 1.2, y: -3 }} whileTap={{ scale: 0.95 }}>
                          <Button variant="ghost" size="icon" className="w-8 h-8 hover:bg-primary/15 text-muted-foreground hover:text-primary border border-transparent hover:border-primary/30 transition-all duration-300">
                            <Github className="w-4 h-4" />
                          </Button>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.2, y: -3 }} whileTap={{ scale: 0.95 }}>
                          <Button variant="ghost" size="icon" className="w-8 h-8 hover:bg-primary/15 text-muted-foreground hover:text-primary border border-transparent hover:border-primary/30 transition-all duration-300">
                            <ExternalLink className="w-4 h-4" />
                          </Button>
                        </motion.div>
                      </div>
                    </div>
                    <CardTitle className="text-base sm:text-lg group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-accent/80">
                      {project.subtitle}
                    </CardDescription>
                    {project.achievement && (
                      <motion.span 
                        className="inline-flex items-center gap-1.5 mt-3 px-3 py-1.5 text-xs rounded-lg bg-gradient-to-r from-primary/15 to-accent/10 text-primary font-bold w-fit border border-primary/20"
                        whileHover={{ scale: 1.05, x: 4 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                        {project.achievement}
                      </motion.span>
                    )}
                  </CardHeader>
                  <CardContent className="space-y-4 relative">
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {project.description}
                    </p>
                    <p className="text-xs text-muted-foreground font-mono">{project.period}</p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.technologies.map((tech, i) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : {}}
                          transition={{ delay: 0.4 + i * 0.05 }}
                          whileHover={{ scale: 1.1, y: -3 }}
                          className="px-2.5 py-1 text-xs rounded-lg glass border border-primary/20 hover:border-primary/50 text-foreground hover:text-primary font-mono transition-all duration-300 cursor-default"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* GitHub Link */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-center mt-12"
          >
            <motion.div 
              whileHover={{ scale: 1.03 }} 
              whileTap={{ scale: 0.98 }}
            >
              <Button size="lg" asChild className="group bg-primary text-primary-foreground hover:bg-primary/90 border-0 shadow-lg shadow-primary/20 hover:shadow-primary/30">
                <a
                  href="https://github.com/sudarshanudupa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gap-2"
                >
                  <Github className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
                  View More on GitHub
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
