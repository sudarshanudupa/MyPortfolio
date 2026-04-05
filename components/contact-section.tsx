"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Mail, Phone, MapPin, Send, Github, Linkedin, Globe, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "sudarshanudupa737@gmail.com",
    href: "mailto:sudarshanudupa737@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 7760887737",
    href: "tel:+917760887737",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Mangalore, India",
    href: null,
  },
]

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/sudarshanudupa",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/sudarshan-udupa-4069221a4",
  },
  {
    icon: Globe,
    label: "Website",
    href: "https://sudarshanudupa.github.io",
  },
]

export default function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const mailtoLink = `mailto:sudarshanudupa737@gmail.com?subject=Portfolio Contact from ${formData.name}&body=${encodeURIComponent(formData.message)}%0A%0AFrom: ${formData.name}%0AEmail: ${formData.email}`
    window.location.href = mailtoLink
  }

  return (
    <section id="contact" className="py-16 sm:py-24 relative">
      <div className="absolute inset-0 cyber-grid opacity-20" />
      <div className="container mx-auto px-4 sm:px-6 relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <div className="flex items-center gap-3 sm:gap-4 mb-8 sm:mb-12">
            <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Get In Touch</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-border to-transparent" />
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Info */}
            <div className="space-y-6 sm:space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2 }}
              >
                <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">Let&apos;s Connect</h3>
                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                  Open to opportunities in Cybersecurity and DevOps. 
                  Reach out for collaborations or discussions.
                </p>
              </motion.div>

              {/* Contact Cards */}
              <div className="space-y-3 sm:space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    whileHover={{ x: 4 }}
                  >
                    <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300 card-hover">
                      <CardContent className="p-3 sm:p-4">
                        {info.href ? (
                          <a
                            href={info.href}
                            className="flex items-center gap-3 sm:gap-4 group"
                          >
                            <motion.div 
                              className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors"
                              whileHover={{ rotate: 5, scale: 1.05 }}
                            >
                              <info.icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                            </motion.div>
                            <div>
                              <p className="text-xs sm:text-sm text-muted-foreground">{info.label}</p>
                              <p className="text-sm sm:text-base font-medium text-foreground group-hover:text-primary transition-colors">
                                {info.value}
                              </p>
                            </div>
                          </a>
                        ) : (
                          <div className="flex items-center gap-3 sm:gap-4">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                              <info.icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                            </div>
                            <div>
                              <p className="text-xs sm:text-sm text-muted-foreground">{info.label}</p>
                              <p className="text-sm sm:text-base font-medium text-foreground">{info.value}</p>
                            </div>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 }}
              >
                <h4 className="text-xs sm:text-sm font-mono text-primary mb-3 sm:mb-4">Find me online</h4>
                <div className="flex gap-3 sm:gap-4">
                  {socialLinks.map((link, index) => (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
                      whileHover={{ scale: 1.1, y: -4 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-card border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-all duration-300"
                      title={link.label}
                    >
                      <link.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card className="bg-card border-border card-hover">
                <CardContent className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">Send a Message</h3>
                  <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                    <div>
                      <label htmlFor="name" className="text-xs sm:text-sm text-muted-foreground mb-1.5 sm:mb-2 block">
                        Your Name
                      </label>
                      <Input
                        id="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="bg-background border-border focus:border-primary transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="text-xs sm:text-sm text-muted-foreground mb-1.5 sm:mb-2 block">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="bg-background border-border focus:border-primary transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="text-xs sm:text-sm text-muted-foreground mb-1.5 sm:mb-2 block">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        placeholder="Your message here..."
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                        className="bg-background border-border focus:border-primary resize-none transition-colors"
                      />
                    </div>
                    <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
                      <Button type="submit" className="w-full gap-2 glow-border group">
                        <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        Send Message
                      </Button>
                    </motion.div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
