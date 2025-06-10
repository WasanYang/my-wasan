'use client';

import { useState, useEffect } from 'react';
import { motion } from '@/lib/motion-wrapper';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';
import Image from 'next/image';

const projects = [
  {
    id: 1,
    title: 'Rai Rak Doi Phu Thap Boek',
    shortDescription:
      'A modern resort website for Phu Thap Boek, featuring efficient data management and booking capabilities.',
    longDescription:
      'The official website for Rai Rak Doi Phu Thap Boek resort, built with Next.js, TypeScript, and Tailwind CSS to provide a fast and visually appealing user experience. It integrates Firebase for effective data management and reservation handling. The site showcases detailed information on room types, amenities, stunning photo galleries of scenic views, and a contact system. Designed for responsiveness across all devices, ensuring an optimal experience for all visitors.',
    image: 'https://images.pexels.com/photos/6956903/pexels-photo-6956903.jpeg',
    technologies: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Firebase',
    ],
    role: 'Full-stack Developer',
    github: 'https://github.com/rakdoi/rakdoi-web/tree/dev',
    liveDemo: 'https://rakdoi-web.web.app/home',
  },
  {
    id: 2,
    title: 'Pachara Boutique',
    shortDescription:
      'A modern online store showcasing a variety of fashion accessories, including bags and phone straps.',
    longDescription:
      'An e-commerce platform designed to present and sell various fashion accessories such as bags and phone straps. ' +
      'Key features include product display with images and pricing (bags at $15, phone straps at $35), ' +
      'and a web structure ready for future expansion of ordering and payment functionalities. ' +
      'Built with modern web technologies to ensure a smooth and visually appealing user experience ' +
      '(website established in 2025).',
    image: 'https://images.pexels.com/photos/6956903/pexels-photo-6956903.jpeg',
    technologies: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Firebase',
    ],
    role: 'Full-stack Developer',
    github: 'https://github.com/pheuanpet/web/tree/dev',
    liveDemo: 'https://pacharaboutique.com/',
  },
];

export default function PortfolioSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section id='portfolio' className='py-24'>
      <div className='container px-4 md:px-6'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className='space-y-2 text-center mb-12'>
            <h2 className='text-3xl font-bold tracking-tight sm:text-4xl'>
              My Portfolio
            </h2>
            <Separator className='mx-auto w-24 my-4 bg-primary' />
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8'>
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
  );
}

function ProjectCard({ project, delay }: { project: any; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5, delay }}
    >
      <Card className='overflow-hidden h-full transition-all hover:shadow-lg'>
        <div className='relative h-48 w-full'>
          <Image
            src={project.image}
            alt={project.title}
            fill
            className='object-cover'
          />
        </div>
        <CardHeader>
          <CardTitle>{project.title}</CardTitle>
          <CardDescription>{project.shortDescription}</CardDescription>
        </CardHeader>
        <CardFooter className='flex justify-between'>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant='outline'>View Details</Button>
            </DialogTrigger>
            <DialogContent className='sm:max-w-[725px] max-h-[90vh] overflow-y-auto'>
              <DialogHeader>
                <DialogTitle>{project.title}</DialogTitle>
                <DialogDescription>{project.role}</DialogDescription>
              </DialogHeader>
              <div className='grid gap-6 py-4'>
                <div className='relative h-[250px] w-full rounded-lg overflow-hidden'>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className='object-cover'
                  />
                </div>

                <div className='space-y-4'>
                  <div>
                    <h4 className='text-sm font-medium'>Description</h4>
                    <p className='text-sm text-muted-foreground mt-1'>
                      {project.longDescription}
                    </p>
                  </div>

                  <div>
                    <h4 className='text-sm font-medium'>Technologies Used</h4>
                    <div className='flex flex-wrap gap-2 mt-2'>
                      {project.technologies.map((tech: string) => (
                        <Badge key={tech} variant='secondary'>
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className='flex flex-wrap gap-4'>
                    <Button variant='outline' size='sm' asChild>
                      <a
                        href={project.github}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='flex items-center gap-2'
                      >
                        <Github className='h-4 w-4' />
                        GitHub Repo
                      </a>
                    </Button>
                    <Button size='sm' asChild>
                      <a
                        href={project.liveDemo}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='flex items-center gap-2'
                      >
                        <ExternalLink className='h-4 w-4' />
                        Live Demo
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </DialogContent>
          </Dialog>

          <Button variant='default' asChild>
            <a
              href={project.liveDemo}
              target='_blank'
              rel='noopener noreferrer'
            >
              Live Demo
            </a>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
