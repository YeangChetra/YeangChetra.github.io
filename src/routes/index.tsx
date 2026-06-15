import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  User, FileText, Eye, Newspaper, Send, ShoppingBag, Menu, Moon,  Code2, Music, Megaphone, Gamepad2, Download, Mail,  GitGraph, X, Facebook, Instagram, Linkedin,  Briefcase, GraduationCap, Quote, Check, MapPin, Phone, Globe,  Facebook,
} from "lucide-react";
import portrait from "@/assets/portrait.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Yeang Chetra — Web & Mobile Developer" },
      { name: "description", content: "Portfolio CV of Yeang Chetra, a freelance Web & Mobile Developer based in Phnom Penh, Cambodia." },
    ],
  }),
  component: Home,
});

const ROLES = ["Web Designer", "Developer", "Freelancer", "Mobile Developer"];

function Typewriter() {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);

  useEffect(() => {
    const full = ROLES[i % ROLES.length];
    const t = setTimeout(() => {
      if (!del) {
        const next = full.slice(0, text.length + 1);
        setText(next);
        if (next === full) setTimeout(() => setDel(true), 1400);
      } else {
        const next = full.slice(0, text.length - 1);
        setText(next);
        if (next === "") { setDel(false); setI((v) => v + 1); }
      }
    }, del ? 45 : 90);
    return () => clearTimeout(t);
  }, [text, del, i]);

  return (
    <span className="text-primary">
      {text}
      <span className="ml-0.5 inline-block w-0.5 animate-pulse bg-primary align-middle" style={{ height: "1em" }} />
    </span>
  );
}

function Home() {
  const [active, setActive] = useState("about");

  const nav = [
    { id: "about", label: "About", icon: User },
    { id: "resume", label: "Resume", icon: FileText },
    { id: "works", label: "Works", icon: Eye },
    { id: "blog", label: "Blog", icon: Newspaper },
    { id: "contact", label: "Contact", icon: Send },
    // { id: "shop", label: "Products", icon: ShoppingBag },
  ];

  return (
    <div className="px-4 py-6 lg:px-8 lg:py-10 ">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-5 lg:grid-cols-[96px_minmax(0,360px)_minmax(0,1fr)]">
        {/* Left column: utility + nav */}
        <div className="order-2 flex flex-row gap-4 lg:order-1 lg:sticky lg:top-6 lg:flex lg:flex-col lg:gap-5 lg:self-start">
          {/* <div className="panel-card hidden flex-col items-stretch gap-1 p-2.5 lg:flex">
            <button className="flex h-12 w-full items-center justify-center rounded-lg text-foreground/65 hover:bg-accent" aria-label="Menu"><Menu size={18} /></button>
            <button className="flex h-12 w-full items-center justify-center rounded-lg text-foreground/65 hover:bg-accent" aria-label="Theme"><Moon size={18} /></button>
            <button className="relative flex h-12 w-full items-center justify-center rounded-lg text-foreground/65 hover:bg-accent" aria-label="Cart">
              <ShoppingBag size={18} />
              <span className="absolute right-1.5 top-1 grid h-4 w-4 place-items-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">0</span>
            </button>
          </div> */}
          {/* <nav className="panel-card flex w-full flex-row items-stretch gap-1 p-2 lg:flex-col lg:p-2.5">
            {nav.map(({ id, label, icon: Icon }) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => setActive(id)}
                className={`flex flex-1 flex-col items-center justify-center gap-1.5 rounded-lg px-2 py-3 text-[10px] font-bold uppercase tracking-wider transition-colors ${active === id ? "bg-primary/10 text-primary" : "text-foreground/55 hover:bg-accent hover:text-foreground"
                  }`}
              >
                <Icon size={18} />
                <span>{label}</span>
              </a>
            ))}
          </nav> */}
        </div>

        {/* Profile card */}
        <section className="panel-card order-1 overflow-hidden lg:order-2 lg:sticky lg:top-6 lg:self-start">
          <div className="p-3">
            <img
              src={portrait}
              alt="Yeang Chetra portrait"
              width={768}
              height={896}
              className="aspect-square w-full rounded-xl object-cover"
            />
          </div>
          <div className="px-6 pb-2 pt-3 text-center">
            <h1 className="text-3xl font-extrabold tracking-tight">Yeang Chetra</h1>
            <p className="mt-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary">Web Development</p>

            <div className="mt-5 flex items-center justify-center gap-5 text-foreground/55">
              {[Dribbble, Twitter, Github, Instagram, Linkedin, Facebook].map((I, idx) => (
                <a key={idx} href="#" className="transition-colors hover:text-primary" aria-label="Social link">
                  <I size={15} />
                </a>
              ))}
            </div>

            <div className="mt-5 flex items-stretch border-t border-border pt-4 text-[11px] font-bold uppercase tracking-wider">
              <a href="#" className="flex flex-1 items-center justify-center gap-2 py-1 text-foreground/70 hover:text-primary">
                Download CV <Download size={14} />
              </a>
              <div className="w-px bg-border" />
              <a href="https://t.me/chetrayeang" target="_blank" rel="noopener noreferrer" className="flex flex-1 items-center justify-center gap-2 py-1 text-foreground/70 hover:text-primary">
                Contact Me <Send size={14} />
              </a>
            </div>
          </div>
        </section>

        {/* Content */}
        <main className="order-3 space-y-6">
          
          {/* Hero / About */}
          <section id="about" className="panel-card relative overflow-hidden p-8 lg:p-10">
            <div className="dot-bg absolute inset-0 opacity-40" aria-hidden />
            <div className="relative">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">Hello</p>
              <h2 className="mt-2 text-4xl font-extrabold leading-tight md:text-5xl">
                I'm Chetra, a <Typewriter />
              </h2>
              <p className="mt-4 max-w-2x2 text-foreground/100 text-justify">
                  Based in Phnom Penh, Cambodia, I build secure, scalable, and user-friendly web applications, management information systems, and data-driven dashboards. Using Laravel, React, Node.js, MySQL, MongoDB, and modern web technologies, I help organizations transform complex requirements into reliable digital solutions—from system architecture and development to deployment and support.
              </p>

              <SectionHeader title="About Me" letter="A" className="mt-10" />
              <div className="mt-6 grid gap-8 md:grid-cols-2">
                <div className="space-y-4 text-foreground/75">
                  <h3 className="text-xl font-bold text-foreground">Hello! I'm Yeang Chetra.</h3>
                  <p className="text-sm  text-justify">
                      I'm a Full-Stack Developer and MIS Specialist with more than 10 years of experience delivering enterprise applications, management information systems (MIS), dashboards, and digital transformation solutions for government agencies, development programs, and private organizations.
                      My expertise spans web development, database design, GIS integration, system architecture, and business process automation. I enjoy building technology that simplifies operations, improves data quality, and helps organizations make informed decisions.
                      Whether developing a custom business platform, an inventory management system, a financial application, or a modern website, I focus on creating secure, efficient, and user-centered solutions that deliver measurable impact.
                      Let's work together to turn your ideas into powerful digital products.
                  </p>
                </div>
                <ul className="space-y-2 text-sm">
                  {[
                    // ["Age", "34"],
                    ["Residence", "Cambodia"],
                    ["Freelance", "Available"],
                    ["Address", "Phnom Penh, Cambodia"],
                  ].map(([k, v]) => (
                    <li key={k} className="flex items-center justify-between rounded-lg bg-accent/60 px-4 py-3">
                      <span className="font-semibold text-primary">{k}:</span>
                      <span className="text-foreground/80">{v}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Services */}
              {/* <SectionHeader title="My Services" letter="M" className="mt-14" />
              <div className="mt-6 grid gap-px overflow-hidden rounded-2xl bg-border sm:grid-cols-2">
                {[
                  { i: Code2, t: "Web Development", d: "Modern, mobile-ready sites that help your marketing actually convert." },
                  { i: Music, t: "Music Writing", d: "Copying, arranging, transcription and composition services." },
                  { i: Megaphone, t: "Advertising", d: "Campaigns across television, radio, print, mail, and web apps." },
                  { i: Gamepad2, t: "Game Development", d: "Memorable, unique mobile (iOS / Android) and indie video games." },
                ].map(({ i: Icon, t, d }) => (
                  <div key={t} className="bg-panel p-6 text-center transition-colors hover:bg-accent/40">
                    <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-primary text-primary-foreground">
                      <Icon size={22} />
                    </div>
                    <h4 className="mt-4 text-lg font-bold">{t}</h4>
                    <p className="mt-2 text-sm text-foreground/65">{d}</p>
                  </div>
                ))}
              </div> */}

              {/* Pricing */}
              {/* <SectionHeader title="Pricing" letter="P" className="mt-14" />
              <div className="mt-6 grid gap-6 md:grid-cols-2">
                {[
                  { name: "Popular", price: 22, features: ["Web Development", "Advertising", "Game Development", "Music Writing", "Photography"], pop: false },
                  { name: "Premium", price: 48, features: ["Web Development", "Advertising", "Game Development", "Music Writing", "Photography"], pop: true },
                ].map((p) => (
                  <div key={p.name} className={`relative rounded-2xl border p-8 ${p.pop ? "border-primary bg-primary/5" : "border-border bg-accent/30"}`}>
                    {p.pop && <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-primary-foreground">Popular</span>}
                    <h4 className="text-xl font-bold">{p.name}</h4>
                    <div className="mt-4 flex items-baseline gap-1 text-primary">
                      <span className="text-lg">$</span>
                      <span className="text-5xl font-extrabold">{p.price}</span>
                      <span className="text-sm text-foreground/60">/ hour</span>
                    </div>
                    <ul className="mt-6 space-y-3 text-sm">
                      {p.features.map((f) => (
                        <li key={f} className="flex items-center gap-2"><Check size={16} className="text-primary" /> {f}</li>
                      ))}
                    </ul>
                    <a href="#contact" className="mt-6 inline-flex w-full items-center justify-center rounded-lg bg-primary px-4 py-3 text-xs font-semibold uppercase tracking-wider text-primary-foreground hover:opacity-90">Order Now</a>
                  </div>
                ))}
              </div> */}

              {/* Fun facts */}
              {/* <SectionHeader title="Fun Facts" letter="F" className="mt-14" />
              <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
                {[["80+", "Albums Listened"], ["15", "Awards Won"], ["1 000+", "Cups of Coffee"], ["10", "Countries Visited"]].map(([n, l]) => (
                  <div key={l} className="rounded-2xl bg-accent/50 p-5 text-center">
                    <div className="text-3xl font-extrabold text-primary">{n}</div>
                    <div className="mt-1 text-xs font-semibold uppercase tracking-wider text-foreground/60">{l}</div>
                  </div>
                ))}
              </div> */}
            </div>
          </section>

          {/* Resume */}
          {/* <section id="resume" className="panel-card p-8 lg:p-10"> */}
            {/* <SectionHeader title="Resume" letter="R" /> */}
            {/* <div className="mt-8 grid gap-10 md:grid-cols-2">
              <ResumeColumn
                icon={Briefcase}
                title="Experience"
                items={[
                  { years: "2019 — Present", role: "Art Director", org: "Google Inc.", desc: "Collaborate with creative and development teams on the execution of ideas." },
                  { years: "2015 — 2019", role: "Front-End Developer", org: "Upwork Inc.", desc: "Monitored technical aspects of the front-end delivery for projects." },
                  { years: "2012 — 2015", role: "Senior Developer", org: "Envato Inc.", desc: "Optimised website performance using the latest technologies." },
                ]}
              />
              <ResumeColumn
                icon={GraduationCap}
                title="Education"
                items={[
                  { years: "2010 — 2012", role: "Art University", org: "New York", desc: "Bachelor's degree in Computer Science at ABC Technical Institute." },
                  { years: "2009 — 2010", role: "Programming Course", org: "Paris", desc: "Coursework: Git, WordPress, JavaScript, iOS, Android." },
                  { years: "2008 — 2009", role: "Web Design Course", org: "London", desc: "Converted layouts to web pages using HTML, CSS and JavaScript." },
                ]}
              />
            </div> */}

            {/* Skills */}
            {/* <div className="mt-12 grid gap-10 md:grid-cols-2">
              <div>
                <h4 className="text-lg font-bold">Design Skills</h4>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {["Web Design", "Write Music", "Photoshop", "Graphic Design", "Figma", "Branding"].map((s) => (
                    <li key={s} className="rounded-full bg-accent px-4 py-1.5 text-xs font-semibold text-foreground/80">{s}</li>
                  ))}
                </ul>
                <h4 className="mt-8 text-lg font-bold">Languages</h4>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {["English", "German", "Italian", "French"].map((s) => (
                    <li key={s} className="rounded-full bg-accent px-4 py-1.5 text-xs font-semibold text-foreground/80">{s}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-bold">Coding</h4>
                <div className="mt-4 space-y-4">
                  {[
                    ["WordPress", 90],
                    ["PHP / MySQL", 75],
                    ["React / JavaScript", 88],
                    ["HTML / CSS", 95],
                  ].map(([name, pct]) => (
                    <div key={name as string}>
                      <div className="mb-1 flex items-center justify-between text-xs font-semibold">
                        <span>{name}</span><span className="text-primary">{pct}%</span>
                      </div>
                      <div className="h-2 overflow-hidden rounded-full bg-accent">
                        <div className="h-full rounded-full bg-primary" style={{ width: `${pct}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div> */}
          {/* </section> */}

          {/* Testimonials */}
          {/* <section className="panel-card relative p-8 lg:p-10">
            <SectionHeader title="Testimonials" letter="T" />
            <Quote className="absolute right-8 top-8 text-primary/15" size={64} />
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {[
                { n: "Robert Chase", r: "CEO, Northwind", q: "A pleasure to work with. Sharp eye for detail and consistently shipped on time." },
                { n: "Helen Floyd", r: "Art Director", q: "Brought our brand vision to life with elegance and zero drama. Highly recommend." },
                { n: "Erica Anderson", r: "Founder", q: "Polished, thoughtful and proactive. The new site exceeded every metric we set." },
              ].map((t) => (
                <figure key={t.n} className="rounded-2xl bg-accent/40 p-6">
                  <blockquote className="text-sm text-foreground/75">"{t.q}"</blockquote>
                  <figcaption className="mt-4">
                    <div className="font-bold">{t.n}</div>
                    <div className="text-xs text-foreground/55">{t.r}</div>
                  </figcaption>
                </figure>
              ))}
            </div>
          </section> */}

          {/* Contact */}
          {/* <section id="contact" className="panel-card p-8 lg:p-10">
            <SectionHeader title="Get in Touch" letter="G" />
            <div className="mt-8 grid gap-10 md:grid-cols-[1fr_1.2fr]">
              <ul className="space-y-4 text-sm">
                {[
                  [MapPin, "Address", "California, USA"],
                  [Phone, "Phone", "+1 (555) 010-2933"],
                  [Mail, "Email", "hello@Chetraadlard.com"],
                  [Globe, "Website", "Chetraadlard.com"],
                ].map(([Icon, k, v], idx) => {
                  const I = Icon as typeof MapPin;
                  return (
                    <li key={idx} className="flex items-center gap-4 rounded-xl bg-accent/50 p-4">
                      <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground"><I size={18} /></div>
                      <div>
                        <div className="text-xs font-semibold uppercase tracking-wider text-foreground/55">{k as string}</div>
                        <div className="font-semibold">{v as string}</div>
                      </div>
                    </li>
                  );
                })}
              </ul>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid gap-4 sm:grid-cols-2">
                  <input className="rounded-lg border border-border bg-background/30 px-4 py-3 text-sm outline-none focus:border-primary" placeholder="Your name" />
                  <input className="rounded-lg border border-border bg-background/30 px-4 py-3 text-sm outline-none focus:border-primary" placeholder="Your email" type="email" />
                </div>
                <input className="w-full rounded-lg border border-border bg-background/30 px-4 py-3 text-sm outline-none focus:border-primary" placeholder="Subject" />
                <textarea rows={5} className="w-full rounded-lg border border-border bg-background/30 px-4 py-3 text-sm outline-none focus:border-primary" placeholder="Your message" />
                <button type="submit" className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-xs font-semibold uppercase tracking-wider text-primary-foreground hover:opacity-90">
                  Send Message <Send size={14} />
                </button>
              </form>
            </div>
          </section> */}

          <footer className="pb-2 pt-2 text-center text-xs text-foreground/60">
            © {new Date().getFullYear()} Yeang Chetra.
          </footer>
        </main>
      </div>
    </div>
  );
}

function SectionHeader({ title, letter, className = "" }: { title: string; letter: string; className?: string }) {
  const rest = title.startsWith(letter) ? title.slice(1) : title;
  return (
    <h3 className={`section-title ${className}`}>
      <span className="relative inline-block">
        <span className="absolute -left-2 -top-2 h-6 w-6 rounded-full bg-primary/25" aria-hidden />
        <span className="relative">{letter}</span>
      </span>
      {rest}
    </h3>
  );
}

function ResumeColumn({
  icon: Icon, title, items,
}: { icon: typeof Briefcase; title: string; items: { years: string; role: string; org: string; desc: string }[] }) {
  return (
    <div>
      <div className="flex items-center gap-3">
        <div className="grid h-10 w-10 place-items-center rounded-full bg-primary text-primary-foreground"><Icon size={18} /></div>
        <h4 className="text-xl font-bold">{title}</h4>
      </div>
      <ol className="mt-6 space-y-6 border-l-2 border-border pl-6">
        {items.map((it) => (
          <li key={it.role} className="relative">
            <span className="absolute -left-[31px] top-1 grid h-4 w-4 place-items-center rounded-full bg-primary ring-4 ring-panel" />
            <div className="text-[11px] font-bold uppercase tracking-wider text-primary">{it.years}</div>
            <div className="mt-1 font-bold">{it.role}</div>
            <div className="text-xs text-foreground/55">{it.org}</div>
            <p className="mt-2 text-sm text-foreground/70">{it.desc}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
