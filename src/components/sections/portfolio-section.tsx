"use client"

import { useState, useEffect } from "react"
import { motion } from "@/lib/motion-wrapper"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

// Sample project data
const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    shortDescription: "A modern e-commerce platform with advanced filtering and payment integration.",
    longDescription: "A full-featured e-commerce platform built with Next.js and integrated with Stripe payments. Features include product search with advanced filtering, user authentication, shopping cart functionality, order management, and a responsive admin dashboard.",
    image: "https://images.pexels.com/photos/6956903/pexels-photo-6956903.jpeg",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Stripe", "MongoDB"],
    role: "Full-stack Developer",
    github: "#",
    liveDemo: "#",
  },
  {
    id: 2,
    title: "Task Management App",
    shortDescription: "Collaborative task management app with real-time updates.",
    longDescription: "A productivity tool designed for teams to manage projects and tasks efficiently. Features real-time updates, drag-and-drop task organization, deadline notifications, file attachments, and detailed progress analytics to help teams stay on track.",
    image: "https://images.pexels.com/photos/3182774/pexels-photo-3182774.jpeg",
    technologies: ["React", "Node.js", "Socket.io", "PostgreSQL", "Redux", "Express"],
    role: "Frontend Developer",
    github: "#",
    liveDemo: "#",
  },
  {
    id: 3,
    title: "Health & Fitness Tracker",
    shortDescription: "A comprehensive fitness tracking application with personalized insights.",
    longDescription: "A health and fitness application that helps users track their workouts, nutrition, and wellness goals. Includes features like custom workout plans, meal tracking with nutritional information, progress visualization, and integration with popular fitness wearables.",
    image: "https://images.pexels.com/photos/1756959/pexels-photo-1756959.jpeg",
    technologies: ["React Native", "Firebase", "Redux", "Chart.js", "Node.js", "Express"],
    role: "Lead Developer",
    github: "#",
    liveDemo: "#",
  },
  {
    id: 4,
    title: "AI-Powered Content Creator",
    shortDescription: "Content generation tool leveraging AI for marketing teams.",
    longDescription: "An innovative tool that uses AI to help marketing teams generate and optimize content. Features include SEO suggestions, content repurposing, automated social media post generation, and performance analytics to measure engagement across different platforms.",
    image: "https://images.pexels.com/photos/7367/startup-photos.jpg",
    technologies: ["Next.js", "OpenAI API", "Python", "FastAPI", "AWS", "Redis"],
    role: "Backend Developer & AI Integration",
    github: "#",
    liveDemo: "#",
  },
];

export default function PortfolioSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section id="portfolio" className="py-24">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="space-y-2 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">My Portfolio</h2>
            <Separator className="mx-auto w-24 my-4 bg-primary" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8">
            {projects.map((project, index) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                delay={index * 0.1}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function ProjectCard({ project, delay }: { project: any; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
    >
      <Card className="overflow-hidden h-full transition-all hover:shadow-lg">
        <div className="relative h-48 w-full">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
          />
        </div>
        <CardHeader>
          <CardTitle>{project.title}</CardTitle>
          <CardDescription>{project.shortDescription}</CardDescription>
        </CardHeader>
        <CardFooter className="flex justify-between">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">View Details</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[725px] max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>{project.title}</DialogTitle>
                <DialogDescription>
                  {project.role}
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-6 py-4">
                <div className="relative h-[250px] w-full rounded-lg overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium">Description</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      {project.longDescription}
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.technologies.map((tech: string) => (
                        <Badge key={tech} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-4">
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                        <Github className="h-4 w-4" />
                        GitHub Repo
                      </a>
                    </Button>
                    <Button size="sm" asChild>
                      <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                        <ExternalLink className="h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </DialogContent>
          </Dialog>
          
          <Button variant="default" asChild>
            <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
              Live Demo
            </a>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}