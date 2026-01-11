import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code2,
  Terminal,
  Database,
  Cpu,
  ArrowRight,
} from "lucide-react";
import { Container } from "@/components/zippystarter/container";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function Home() {
  const projects = [
    {
      title: "Nebula Dashboard",
      description:
        "Real-time analytics platform for distributed systems. Built with React, WebSocket, and Go.",
      tags: ["React", "Go", "WebSocket", "D3.js"],
      image: "/project-placeholder-1.jpg",
      link: "#",
      repo: "#",
    },
    {
      title: "Void Chain",
      description:
        "Decentralized identity verification protocol. Smart contracts written in Solidity.",
      tags: ["Solidity", "Ethereum", "Web3.js", "Node.js"],
      image: "/project-placeholder-2.jpg",
      link: "#",
      repo: "#",
    },
    {
      title: "Cyber Construct",
      description:
        "3D architectural visualization tool running in the browser using WebGL.",
      tags: ["Three.js", "WebGL", "Vue", "Python"],
      image: "/project-placeholder-3.jpg",
      link: "#",
      repo: "#",
    },
  ];

  const skills = [
    {
      category: "Frontend",
      items: ["React", "TypeScript", "Tailwind CSS", "Three.js", "Next.js"],
    },
    {
      category: "Backend",
      items: ["Node.js", "Go", "PostgreSQL", "Redis", "Docker"],
    },
    {
      category: "Tools",
      items: ["Git", "Linux", "AWS", "Kubernetes", "Figma"],
    },
  ];

  const blogPosts = [
    {
      title: "Optimizing React Render Cycles in High-Frequency Data Apps",
      date: "Oct 12, 2024",
      readTime: "5 min read",
      excerpt:
        "Deep dive into memoization strategies and custom hooks for handling 100+ updates per second.",
    },
    {
      title: "The State of WebAssembly in 2024",
      date: "Sep 28, 2024",
      readTime: "8 min read",
      excerpt:
        "Is WASM ready to replace JavaScript for heavy compute tasks? A performance benchmark.",
    },
    {
      title: "Building a Custom Kubernetes Operator with Go",
      date: "Aug 15, 2024",
      readTime: "12 min read",
      excerpt:
        "Automating stateful application management using the Operator pattern.",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-primary-foreground overflow-x-hidden">
      {/* Navigation / Header */}
      <Container
        component="header"
        wrapperClassName="fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border"
        className="mx-auto max-w-7xl flex items-center justify-between h-16 uppercase"
      >
        <div className="text-xl font-bold font-mono tracking-tighter">
          Marcus<span className="text-primary">_</span>Chen
        </div>
        <nav className="hidden md:flex gap-8 text-sm font-medium text-muted-foreground ">
          <Link
            href="#projects"
            className="hover:text-primary transition-colors"
          >
            Projects
          </Link>
          <Link href="#skills" className="hover:text-primary transition-colors">
            Skills
          </Link>
          <Link href="#blog" className="hover:text-primary transition-colors">
            Logs
          </Link>
          <Link
            href="#contact"
            className="hover:text-primary transition-colors"
          >
            Contact
          </Link>
        </nav>
        <Button
          variant="outline"
          className="font-mono text-xs border-primary/50 hover:bg-primary/10 hover:text-primary hover:border-primary"
        >
          resume_v4.pdf
        </Button>
      </Container>

      {/* Hero Section */}
      <Container
        wrapperClassName="relative min-h-screen flex items-center pt-16 overflow-hidden"
        className="mx-auto max-w-7xl flex-1"
      >
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="relative w-[100vw] h-[100vh] bg-background overflow-hidden">
            <div className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-[url('/hero-bg.jpg')] before:absolute before:inset-0 before:bg-primary before:mix-blend-color" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background" />
        </div>

        <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/5 text-primary text-xs font-mono">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              SYSTEM ONLINE // AVAILABLE FOR HIRE
            </div>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.9]">
              FULL
              <br />
              STACK
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-white">
                DEV_
              </span>
            </h1>
            <p className="md:text-xl text-muted-foreground max-w-md leading-relaxed">
              Architecting digital voids and crafting high-performance web
              experiences. Specialized in scalable distributed systems and
              interactive 3D interfaces.
            </p>
            <div className="flex gap-4 pt-4 items-center">
              <Link
                href="#projects"
                className={cn("uppercase", buttonVariants({ size: "lg" }))}
              >
                View projects <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <div className="flex gap-2">
                <Link
                  href="#"
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "icon" })
                  )}
                >
                  <Github className="h-5 w-5" />
                </Link>
                <Link
                  href="#"
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "icon" })
                  )}
                >
                  <Linkedin className="h-5 w-5" />
                </Link>
                <Link
                  href="#"
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "icon" })
                  )}
                >
                  <Mail className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Decorative Abstract Element */}
          <div className="hidden md:block relative h-[500px] w-full border border-border/30 bg-card/10 backdrop-blur-sm p-8">
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-primary"></div>
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-primary"></div>
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-primary"></div>
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-primary"></div>

            <div className="h-full w-full flex flex-col justify-between font-mono text-xs text-muted-foreground">
              <div className="flex justify-between">
                <span>SYS.STATUS: NORMAL</span>
                <span>UPTIME: 99.9%</span>
              </div>
              <div className="space-y-2">
                <div className="h-1 w-full bg-secondary overflow-hidden">
                  <div className="h-full bg-primary w-[75%]"></div>
                </div>
                <div className="flex justify-between">
                  <span>CPU_LOAD</span>
                  <span>75%</span>
                </div>
                <div className="h-1 w-full bg-secondary overflow-hidden">
                  <div className="h-full bg-primary w-[42%]"></div>
                </div>
                <div className="flex justify-between">
                  <span>MEM_USAGE</span>
                  <span>42%</span>
                </div>
              </div>
              <div className="text-right">
                <span className="block text-4xl font-bold text-foreground">
                  03
                </span>
                <span>ACTIVE_PROJECTS</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
      {/* Projects Section */}
      <Container
        id="projects"
        component="section"
        wrapperClassName="py-24 border-t border-border"
        className="mx-auto max-w-7xl flex-1"
      >
        <div className="grid justify-between items-end mb-16 gap-4">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">
              SELECTED
              <br />
              WORKS
            </h2>
            <div className="h-1 w-24 bg-primary"></div>
          </div>
          <p className="text-muted-foreground max-w-sm text-left">
            A collection of experiments, production apps, and open source
            contributions.
          </p>
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,250px),1fr))] grid-rows-[repeat(3,auto)] gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="pt-0 group bg-card border-border hover:border-primary/50 transition-all duration-300 rounded-none overflow-hidden grid grid-rows-subgrid row-span-3 content-start items-start"
            >
              <div className="image-container relative aspect-square overflow-hidden border-b border-border">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500 grayscale"
                />
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="grid gap-4">
                <CardHeader className="grid gap-4">
                  <CardTitle className="text-2xl font-bold tracking-tight group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="font-mono text-xs"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {project.description}
                  </CardDescription>
                </CardContent>
              </div>
              <CardFooter className="flex justify-between pt-0">
                <Link
                  href={project.link}
                  className="text-xs font-bold flex items-center hover:text-primary transition-colors gap-2"
                >
                  LIVE DEMO <ExternalLink className="size-3" />
                </Link>
                <Link
                  href={project.repo}
                  className="text-xs font-bold flex items-center hover:text-primary transition-colors gap-2"
                >
                  CODE <Github className="size-3" />
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </Container>
      {/* Skills Matrix */}
      <Container
        id="skills"
        component="section"
        wrapperClassName="py-24 bg-secondary/20 border-t border-border"
        className="mx-auto max-w-7xl flex-1"
      >
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <h2 className="text-4xl font-bold tracking-tighter mb-6">
              TECH_STACK
            </h2>
            <p className="text-muted-foreground mb-8">
              My preferred weapons of choice for building digital products.
              Always learning, always evolving.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 border border-border bg-background flex flex-col items-center justify-center aspect-square hover:border-primary transition-colors">
                <Code2 className="h-8 w-8 mb-2 text-primary" />
                <span className="font-mono text-xs">CLEAN_CODE</span>
              </div>
              <div className="p-4 border border-border bg-background flex flex-col items-center justify-center aspect-square hover:border-primary transition-colors">
                <Database className="h-8 w-8 mb-2 text-primary" />
                <span className="font-mono text-xs">SCALABLE_DB</span>
              </div>
              <div className="p-4 border border-border bg-background flex flex-col items-center justify-center aspect-square hover:border-primary transition-colors">
                <Cpu className="h-8 w-8 mb-2 text-primary" />
                <span className="font-mono text-xs">PERFORMANCE</span>
              </div>
              <div className="p-4 border border-border bg-background flex flex-col items-center justify-center aspect-square hover:border-primary transition-colors">
                <Terminal className="h-8 w-8 mb-2 text-primary" />
                <span className="font-mono text-xs">DEVOPS</span>
              </div>
            </div>
          </div>

          <div className="md:col-span-8 grid md:grid-cols-3 gap-8">
            {skills.map((skillGroup, idx) => (
              <div key={idx} className="space-y-6">
                <h3 className="text-xl font-bold border-b border-primary/30 pb-2 inline-block">
                  {skillGroup.category}
                </h3>
                <ul className="space-y-3">
                  {skillGroup.items.map((skill, sIdx) => (
                    <li
                      key={sIdx}
                      className="flex items-center justify-between group"
                    >
                      <span className="font-mono text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                        {skill}
                      </span>
                      <div className="h-[2px] w-12 bg-secondary group-hover:bg-primary transition-colors"></div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Container>
      {/* Blog Section */}
      <Container id="blog" className="py-24 border-t border-border">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold tracking-tighter mb-12 lg:text-center uppercase">
            Transmissions
          </h2>

          <div className="space-y-8 max-w-7xl mx-auto">
            {blogPosts.map((post, index) => (
              <Link href="#" key={index} className="group">
                <div className="grid gap-4 items-baseline justify-between mb-2">
                  <h3 className="text-2xl font-bold group-hover:text-primary transition-colors text-balance">
                    {post.title}
                  </h3>
                  <span className="font-mono text-xs text-muted-foreground whitespace-nowrap">
                    {post.date} / {post.readTime}
                  </span>
                </div>
                <p className="text-muted-foreground mb-4 max-w-2xl">
                  {post.excerpt}
                </p>
                <div className="h-[1px] w-full bg-border group-hover:bg-primary/50 transition-colors"></div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              variant="outline"
              className="rounded-none border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              READ ALL LOGS
            </Button>
          </div>
        </div>
      </Container>
      {/* Contact Section */}
      <Container id="contact" className="py-24 bg-card border-t border-border">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold tracking-tighter mb-4">
              INITIATE_CONTACT
            </h2>
            <p className="text-muted-foreground">
              Have a project in mind or just want to discuss the singularity?
              Send a signal.
            </p>
          </div>

          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="text-xs font-mono text-muted-foreground"
                >
                  NAME
                </label>
                <Input
                  id="name"
                  placeholder="John Doe"
                  className="rounded-none bg-background border-border focus:border-primary"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-xs font-mono text-muted-foreground"
                >
                  EMAIL
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  className="rounded-none bg-background border-border focus:border-primary"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label
                htmlFor="message"
                className="text-xs font-mono text-muted-foreground"
              >
                MESSAGE
              </label>
              <Textarea
                id="message"
                placeholder="Enter your message..."
                className="min-h-[150px] rounded-none bg-background border-border focus:border-primary"
              />
            </div>
            <Button
              type="submit"
              className="w-full rounded-none bg-primary text-primary-foreground hover:bg-primary/90 font-bold py-6"
            >
              SEND TRANSMISSION
            </Button>
          </form>
        </div>
      </Container>
      {/* Footer */}
      <footer className="py-8 border-t border-border bg-background text-center">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-xs font-mono text-muted-foreground">
              © 2025 MARCUS CHEN. ALL RIGHTS RESERVED.
            </div>
            <div className="flex gap-6 text-xs font-mono text-muted-foreground">
              <Link href="#" className="hover:text-primary transition-colors">
                GITHUB
              </Link>
              <Link href="#" className="hover:text-primary transition-colors">
                LINKEDIN
              </Link>
              <Link href="#" className="hover:text-primary transition-colors">
                TWITTER
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
