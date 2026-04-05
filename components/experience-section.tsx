"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Building2, Calendar, MapPin, GraduationCap, Award, Briefcase } from "lucide-react"

const experiences = [
  {
    title: "Engineer",
    company: "ANZ Support Services Pvt. Ltd.",
    location: "Bangalore, India",
    period: "Jan 2024 - Present",
    description: [
      "SQL data extraction and CRUD operations",
      "VBA macros for Excel automation",
      "Email and web interaction scripts",
    ],
    technologies: ["SQL", "VBA", "Excel", "Automation"],
  },
]

const education = [
  {
    degree: "MTech in Cybersecurity",
    institution: "NMAM Institute of Technology, Nitte University",
    period: "2023 - 2025",
    score: "8.89 CGPA",
    highlight: "Highest CGPA in Batch",
    description: "IEEE published research on Deep Learning for IIoT security.",
  },
  {
    degree: "BTech in Information Science",
    institution: "A.J Institute Of Engineering and Technology, VTU",
    period: "Aug 2019 - Jun 2023",
    score: "72.4%",
    description: "Focus on software development and machine learning.",
  },
  {
    degree: "Higher Secondary (12th)",
    institution: "Shree Durgaparameshwari P.U. College, Kateel",
    period: "Jun 2017 - May 2019",
    score: "71.6%",
    description: "Science stream with Mathematics and Computer Science.",
  },
  {
    degree: "SSLC (10th)",
    institution: "Mary Vale High School, Kinnigoli",
    period: "May 2017",
    score: "88.16%",
    description: "Strong academic foundation.",
  },
]

export default function ExperienceSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="experience" className="py-20 sm:py-28 relative">
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
              <Briefcase className="w-6 h-6 text-primary" />
            </motion.div>
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text">Experience & Education</h2>
              <p className="text-sm text-muted-foreground mt-1">My professional journey</p>
            </div>
            <div className="flex-1 h-px bg-gradient-to-r from-primary/50 to-transparent" />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14">
            {/* Work Experience */}
            <div>
              <motion.h3 
                className="text-lg sm:text-xl font-semibold mb-8 flex items-center gap-3"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 }}
              >
                <motion.div 
                  className="p-2 rounded-lg bg-accent/10"
                  whileHover={{ scale: 1.1 }}
                >
                  <Building2 className="w-5 h-5 text-accent" />
                </motion.div>
                Work Experience
              </motion.h3>
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={exp.company}
                    initial={{ opacity: 0, x: -30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.2 }}
                    className="relative pl-6 border-l-2 border-primary/50 group"
                  >
                    <motion.div 
                      className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-background"
                      whileHover={{ scale: 1.4 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    />
                    <motion.div 
                      className="p-5 sm:p-6 rounded-xl bg-card/90 dark:bg-card/70 border border-border/60 hover:border-primary/40 transition-all duration-400 card-hover"
                      whileHover={{ x: 8 }}
                    >
                      <h4 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">{exp.title}</h4>
                      <p className="text-primary font-medium">{exp.company}</p>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mt-3">
                        <motion.span 
                          className="flex items-center gap-1.5 hover:text-primary transition-colors cursor-default"
                          whileHover={{ scale: 1.05 }}
                        >
                          <Calendar className="w-4 h-4" />
                          {exp.period}
                        </motion.span>
                        <motion.span 
                          className="flex items-center gap-1.5 hover:text-primary transition-colors cursor-default"
                          whileHover={{ scale: 1.05 }}
                        >
                          <MapPin className="w-4 h-4" />
                          {exp.location}
                        </motion.span>
                      </div>
                      <ul className="mt-4 space-y-2">
                        {exp.description.map((item, i) => (
                          <motion.li 
                            key={i} 
                            className="text-muted-foreground text-sm flex items-start gap-3"
                            initial={{ opacity: 0, x: -10 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: 0.5 + i * 0.1 }}
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                            {item}
                          </motion.li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-2 mt-4">
                        {exp.technologies.map((tech, i) => (
                          <motion.span
                            key={tech}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ delay: 0.6 + i * 0.05 }}
                            whileHover={{ scale: 1.08, y: -2 }}
                            className="px-2.5 py-1 text-xs rounded-lg bg-primary/10 text-primary font-mono cursor-default"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <motion.h3 
                className="text-lg sm:text-xl font-semibold mb-8 flex items-center gap-3"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 }}
              >
                <motion.div 
                  className="p-2 rounded-lg bg-primary/10"
                  whileHover={{ scale: 1.1 }}
                >
                  <GraduationCap className="w-5 h-5 text-primary" />
                </motion.div>
                Education
              </motion.h3>
              <div className="space-y-5">
                {education.map((edu, index) => (
                  <motion.div
                    key={edu.institution}
                    initial={{ opacity: 0, x: 30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.12 }}
                    whileHover={{ scale: 1.02, x: 4 }}
                    className="p-5 sm:p-6 rounded-xl bg-card/90 dark:bg-card/70 border border-border/60 hover:border-primary/40 transition-all duration-400 card-hover group relative overflow-hidden"
                  >
                    {/* Left accent bar */}
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-accent opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2 pl-2">
                      <h4 className="text-base sm:text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                        {edu.degree}
                      </h4>
                      <motion.span 
                        className="px-3 py-1 text-sm rounded-lg bg-primary/15 text-primary font-mono w-fit"
                        whileHover={{ scale: 1.05 }}
                      >
                        {edu.score}
                      </motion.span>
                    </div>
                    {edu.highlight && (
                      <motion.div 
                        className="flex items-center gap-1.5 mb-2 pl-2"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: 0.5 }}
                      >
                        <Award className="w-3.5 h-3.5 text-accent" />
                        <span className="text-xs text-accent font-semibold">{edu.highlight}</span>
                      </motion.div>
                    )}
                    <p className="text-primary/80 text-sm font-medium pl-2">{edu.institution}</p>
                    <p className="text-xs text-muted-foreground mt-1 font-mono pl-2">{edu.period}</p>
                    <p className="text-muted-foreground text-sm mt-3 pl-2">{edu.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
