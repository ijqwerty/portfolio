'use client'

import { Github, Linkedin, Mail, ExternalLink, Code2, Database, Palette } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Home() {
  const skills = [
    {
      category: 'Frontend',
      icon: Palette,
      items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'shadcn/ui']
    },
    {
      category: 'Backend',
      icon: Database,
      items: ['Node.js', 'PostgreSQL', 'REST APIs', 'Authentication', 'Vercel']
    },
    {
      category: 'Tools & Methods',
      icon: Code2,
      items: ['Git', 'Docker', 'Testing', 'DevTools', 'Performance']
    }
  ]

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce application with product catalog, shopping cart, and secure checkout. Built with Next.js, PostgreSQL, and Stripe integration.',
      tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'Stripe'],
      year: '2024'
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management system with real-time updates, user authentication, and team collaboration features using WebSockets.',
      tags: ['React', 'Node.js', 'MongoDB', 'WebSockets'],
      year: '2024'
    },
    {
      title: 'Design System Library',
      description: 'Comprehensive React component library with 50+ reusable components, extensive documentation, and Storybook integration.',
      tags: ['React', 'TypeScript', 'Storybook', 'CSS-in-JS'],
      year: '2023'
    },
    {
      title: 'Analytics Dashboard',
      description: 'Real-time analytics dashboard displaying key metrics with interactive charts, filters, and data export capabilities.',
      tags: ['Next.js', 'Chart.js', 'PostgreSQL', 'Recharts'],
      year: '2023'
    }
  ]

  const experience = [
    {
      period: '2023 — Present',
      role: 'Senior Full-Stack Developer',
      company: 'Tech Startup Inc.',
      description: 'Leading development of core platform features, mentoring junior developers, and architecting scalable solutions.'
    },
    {
      period: '2021 — 2023',
      role: 'Full-Stack Developer',
      company: 'Digital Agency Co.',
      description: 'Developed client websites and web applications, managed databases, and implemented responsive designs.'
    },
    {
      period: '2020 — 2021',
      role: 'Frontend Developer',
      company: 'Web Studio Ltd.',
      description: 'Built interactive user interfaces, optimized performance, and collaborated with design teams.'
    }
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-linear-to-br from-accent to-accent/70 flex items-center justify-center">
              <Code2 className="w-5 h-5 text-accent-foreground" />
             
            </div>
            <span className="font-semibold text-lg hidden sm:block">IJ</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#about" className="text-sm hover:text-accent transition-colors">About</a>
            <a href="#projects" className="text-sm hover:text-accent transition-colors">Projects</a>
            <a href="#skills" className="text-sm hover:text-accent transition-colors">Skills</a>
            <a href="#contact" className="text-sm hover:text-accent transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                Hello, I'm a <span className="text-accent">Full-Stack Developer</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I craft accessible, scalable web applications that solve real problems. Passionate about clean code, modern design, and creating delightful user experiences.
              </p>
            </div>
            <div className="flex gap-4 pt-4">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                Get in Touch
              </Button>
              <Button variant="outline" size="lg">
                View My Work
              </Button>
            </div>
            <div className="flex gap-4 pt-4">
              <a href="#" className="p-2 hover:bg-muted rounded-lg transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 hover:bg-muted rounded-lg transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 hover:bg-muted rounded-lg transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-linear-to-br from-accent/20 to-transparent rounded-2xl blur-3xl" />
            <div className="relative bg-muted/30 rounded-2xl border border-border/40 p-8 backdrop-blur-sm">
              <div className="space-y-4">
                <div className="h-3 bg-accent rounded-full w-1/2" />
                <div className="h-2 bg-muted rounded-full" />
                <div className="h-2 bg-muted rounded-full w-4/5" />
                <div className="h-20 bg-muted rounded mt-6" />
                <div className="h-2 bg-accent/30 rounded-full w-1/3 mt-6" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="border-t border-border/40 bg-muted/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold">About Me</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I'm a full-stack developer with 4+ years of experience building web applications. I specialize in creating intuitive, performant interfaces paired with robust backend solutions.
                </p>
                <p>
                  My journey in tech started with a passion for problem-solving and design. I've worked with startups and established companies, helping them ship products that matter.
                </p>
                <p>
                  When I'm not coding, you'll find me contributing to open source, writing technical articles, or exploring new technologies.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              {experience.map((exp, idx) => (
                <div key={idx} className="border-l-2 border-accent pl-6 pb-6">
                  <p className="text-sm text-accent font-medium">{exp.period}</p>
                  <h3 className="text-xl font-semibold mt-1">{exp.role}</h3>
                  <p className="text-sm text-muted-foreground">{exp.company}</p>
                  <p className="text-sm text-muted-foreground mt-2">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold">Featured Projects</h2>
            <p className="text-muted-foreground">A selection of my recent work showcasing full-stack capabilities</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, idx) => (
              <a
                key={idx}
                href="#"
                className="group bg-card border border-border/40 rounded-xl p-6 hover:border-accent/50 transition-all hover:shadow-lg hover:shadow-accent/5"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold group-hover:text-accent transition-colors">{project.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{project.year}</p>
                  </div>
                  <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
                </div>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span key={tagIdx} className="text-xs bg-accent/10 text-accent px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="border-t border-border/40 bg-muted/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
          <div className="space-y-12">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl font-bold">Skills & Technologies</h2>
              <p className="text-muted-foreground">Tools and technologies I work with regularly</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {skills.map((skillGroup, idx) => {
                const Icon = skillGroup.icon
                return (
                  <div key={idx} className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-accent/10 rounded-lg">
                        <Icon className="w-5 h-5 text-accent" />
                      </div>
                      <h3 className="text-lg font-semibold">{skillGroup.category}</h3>
                    </div>
                    <ul className="space-y-2">
                      {skillGroup.items.map((item, itemIdx) => (
                        <li key={itemIdx} className="text-muted-foreground text-sm flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
        <div className="space-y-8 text-center">
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold">Let's Work Together</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              I'm always interested in hearing about new projects and opportunities. Feel free to reach out if you'd like to collaborate.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              Send Me an Email
            </Button>
            <Button variant="outline" size="lg">
              Schedule a Call
            </Button>
          </div>
          <div className="flex justify-center gap-6 pt-8">
            <a href="#" className="p-3 bg-muted hover:bg-muted/80 rounded-lg transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="#" className="p-3 bg-muted hover:bg-muted/80 rounded-lg transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="p-3 bg-muted hover:bg-muted/80 rounded-lg transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 bg-muted/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>&copy; 2024 All rights reserved.</p>
            {/* <div className="flex gap-6">
              <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
              <a href="#" className="hover:text-foreground transition-colors">Terms</a>
              <a href="#" className="hover:text-foreground transition-colors">Sitemap</a>
            </div> */}
          </div>
        </div>
      </footer>
    </div>
  )
}
