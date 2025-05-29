"use client"

import { useEffect, useState } from "react"
import { motion } from "@/lib/motion-wrapper"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleScrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId)
    if (element) {
      window.scrollTo({
        top: element.getBoundingClientRect().top + window.scrollY - 100,
        behavior: "smooth"
      })
    }
  }

  if (!mounted) return null

  return (
    <section id="home" className="relative min-h-[calc(100vh-4rem)] flex items-center">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background to-muted/30 dark:from-background dark:to-background" />
      
      <div className="container px-4 md:px-6 flex flex-col md:flex-row items-center gap-8 md:gap-16 py-12">
        <motion.div 
          className="flex-1 space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              John Doe
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-primary">
              Full-stack Developer | UI/UX Enthusiast
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl">
              Building intuitive and beautiful web experiences.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="transition-all hover:scale-105"
              onClick={() => handleScrollToSection("#portfolio")}
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="transition-all hover:scale-105"
              onClick={() => handleScrollToSection("#contact")}
            >
              Contact Me
            </Button>
          </div>
        </motion.div>
        
        <motion.div 
          className="flex-1 flex justify-center md:justify-end"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="relative w-[280px] h-[280px] md:w-[400px] md:h-[400px] rounded-full overflow-hidden border-4 border-primary/10 shadow-xl">
            <Image 
              src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
              alt="John Doe"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}