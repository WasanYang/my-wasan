/* eslint-disable react/no-unescaped-entities */
'use client';

import { useState, useEffect } from 'react';
import { motion } from '@/lib/motion-wrapper';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Separator } from '@/components/ui/separator';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import z from 'zod';
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  message: z
    .string()
    .min(10, { message: 'Message must be at least 10 characters.' }),
});

export default function ContactSection() {
  const [mounted, setMounted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);

    setTimeout(() => {
      console.log(values);

      toast({
        title: 'Message sent!',
        description: "Thanks for reaching out. I'll get back to you soon.",
        variant: 'success',
      });
      form.reset();
      setIsSubmitting(false);
    }, 1500);
  }

  if (!mounted) return null;

  return (
    <section id='contact' className='py-24 bg-muted/30'>
      <div className='container px-4 md:px-6'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <div className='space-y-2 text-center mb-12'>
            <h2 className='text-3xl font-bold tracking-tight sm:text-4xl'>
              Get in Touch
            </h2>
            <Separator className='mx-auto w-24 my-4 bg-primary' />
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 items-start'>
            <Card className='bg-card shadow-md'>
              <CardContent className='p-6'>
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className='space-y-6'
                  >
                    <FormField
                      control={form.control}
                      name='name'
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input placeholder='Your name' {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name='email'
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input placeholder='Your email' {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name='message'
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder='Your message'
                              className='min-h-[120px]'
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button
                      type='submit'
                      className='w-full'
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>

            <div className='space-y-8'>
              <div className='space-y-4'>
                <h3 className='text-2xl font-semibold'>Connect With Me</h3>
                <p className='text-muted-foreground'>
                  Feel free to reach out through the contact form or connect
                  with me on social media. I'm always open to discussing new
                  projects, creative ideas, or opportunities to be part of your
                  vision.
                </p>
              </div>

              <div className='space-y-4'>
                <h4 className='text-xl font-medium'>Find Me On</h4>
                <div className='flex flex-wrap gap-4'>
                  <Button variant='outline' size='lg' className='gap-2' asChild>
                    <a
                      href='https://github.com/WasanYang'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <Github className='w-5 h-5' />
                      <span>GitHub</span>
                    </a>
                  </Button>

                  <Button variant='outline' size='lg' className='gap-2' asChild>
                    <a
                      href='https://www.linkedin.com/in/wasan-yang/'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <Linkedin className='w-5 h-5' />
                      <span>LinkedIn</span>
                    </a>
                  </Button>

                  <Button variant='outline' size='lg' className='gap-2' asChild>
                    <a href='mailto:evol1996@outlook.com'>
                      <Mail className='w-5 h-5' />
                      <span>Email</span>
                    </a>
                  </Button>
                </div>
              </div>

              <div className='space-y-4'>
                <h4 className='text-xl font-medium'>Current Availability</h4>
                <p className='text-muted-foreground'>
                  I am an experienced Full-stack Web Developer with a strong
                  background in React.js and Go (or .NET), currently
                  contributing to a leading company in the tech sector. I am
                  always open to exploring exciting new opportunities that
                  involve building innovative web applications, interactive
                  websites, and creative digital experiences. Let's connect if
                  you're seeking a seasoned developer to join your team.
                </p>
                <Button variant='default' size='lg' className='gap-2' asChild>
                  <a href='#contact'>
                    <ExternalLink className='w-5 h-5' />
                    <span>Schedule a Call</span>
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
