/* eslint-disable react/no-unescaped-entities */
'use client';

import { useEffect, useState } from 'react';
import { motion } from '@/lib/motion-wrapper';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const skills = [
  'React',
  'Next.js',
  'TypeScript',
  'JavaScript',
  'Tailwind CSS',
  'Node.js',
  'PostgreSQL',
  'MySQL',
  'REST APIs',
  'Git',
  'Firebase',
];

const experience = [
  {
    title: 'Full-stack Developer',
    company: 'Manao Software',
    period: '2021 - Present',
    description:
      'Responsible for the development and maintenance of web applications using React.js and Go (Programming Language), including database design and management. Actively participated in developing new features and improving system performance.',
  },
  {
    title: 'Junior Web Developer',
    company: 'Fissionsoft Co.,Ltd.',
    period: '2018 - 2021',
    description:
      'Developed a variety of web applications using the .NET Framework and managed databases with Microsoft SQL Server. Collaborated effectively with the team to deliver high-quality solutions meeting client requirements.',
  },
];
export default function AboutSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section id='about' className='py-24 bg-muted/30'>
      <div className='container px-4 md:px-6'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className='space-y-2 text-center mb-12'>
            <h2 className='text-3xl font-bold tracking-tight sm:text-4xl'>
              About Me
            </h2>
            <Separator className='mx-auto w-24 my-4 bg-primary' />
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-start'>
            <Card className='border-none shadow-none bg-transparent'>
              <CardContent className='space-y-6 p-0'>
                <div>
                  <h3 className='text-xl font-semibold mb-3'>Who I Am</h3>
                  <p className='text-muted-foreground'>
                    I'm a passionate full-stack developer with a keen eye for
                    design and user experience. My journey in tech began five
                    years ago, and I've been crafting digital experiences ever
                    since.
                  </p>
                </div>

                <div>
                  <p className='text-muted-foreground'>
                    I believe that technology should serve people, not the other
                    way around. That's why I focus on creating intuitive,
                    accessible, and beautiful digital products that solve real
                    problems and bring joy to users. My approach combines
                    technical expertise with design thinking to build solutions
                    that are not just functional but delightful to use.
                  </p>
                </div>

                <div>
                  <p className='text-muted-foreground'>
                    When I'm not coding, you'll find me exploring new hiking
                    trails, experimenting with new recipes in the kitchen, or
                    diving into a good book. These diverse interests help me
                    bring a well-rounded perspective to my work and fuel my
                    creativity.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card className='border-none shadow-none bg-transparent'>
              <CardContent className='space-y-8 p-0'>
                <div>
                  <h3 className='text-xl font-semibold mb-4'>My Skills</h3>
                  <div className='flex flex-wrap gap-2'>
                    {skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant='secondary'
                        className='px-3 py-1 text-sm'
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className='text-xl font-semibold mb-4'>Experience</h3>
                  <div className='space-y-4'>
                    {experience.map((exp) => (
                      <ExperienceCard
                        key={exp.title}
                        title={exp.title}
                        company={exp.company}
                        period={exp.period}
                        description={exp.description}
                      />
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ExperienceCard({
  title,
  company,
  period,
  description,
}: {
  title: string;
  company: string;
  period: string;
  description: string;
}) {
  return (
    <div className='space-y-1'>
      <div className='flex justify-between items-center'>
        <h4 className='font-medium'>{title}</h4>
        <span className='text-sm text-muted-foreground'>{period}</span>
      </div>
      <p className='text-sm font-medium text-primary'>{company}</p>
      <p className='text-sm text-muted-foreground'>{description}</p>
    </div>
  );
}
