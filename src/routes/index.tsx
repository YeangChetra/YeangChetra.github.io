import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  User, FileText, Eye, Newspaper, Send, ShoppingBag, Menu, Moon,
  Code2, Music, Megaphone, Gamepad2, Download, Mail,
  Briefcase, GraduationCap, Quote, Check, MapPin, Phone, Globe,
} from "lucide-react";

// Brand icons removed from lucide-react v1 — use inline SVGs instead
function IconGithub({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}
function IconTwitter({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}
function IconDribbble({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 0C5.374 0 0 5.373 0 12c0 6.628 5.374 12 12 12 6.627 0 12-5.372 12-12 0-6.627-5.373-12-12-12zm7.369 5.453a10.13 10.13 0 0 1 2.348 5.637c-.923-.193-3.927-.791-6.943-.342-.059-.141-.114-.286-.176-.43a30.4 30.4 0 0 0-.518-1.14c3.355-1.367 4.888-3.339 5.29-3.725zM12 2.252c2.44 0 4.674.894 6.377 2.364-.36.352-1.737 2.226-4.975 3.43-1.554-2.856-3.283-5.208-3.549-5.565A10.125 10.125 0 0 1 12 2.252zm-3.912.8c.253.34 1.95 2.7 3.523 5.497-4.44 1.18-8.36 1.156-8.757 1.15a10.18 10.18 0 0 1 5.234-6.647zM2.247 12.02c0-.07.002-.14.004-.21.384.009 4.983.072 9.72-1.351.272.531.529 1.07.768 1.608-.122.034-.246.072-.368.113-4.89 1.579-7.49 5.89-7.716 6.284A10.118 10.118 0 0 1 2.247 12.02zm9.753 9.729a10.12 10.12 0 0 1-6.092-2.032c.18-.375 2.207-4.335 7.6-6.217l.066-.022a35.74 35.74 0 0 1 1.82 6.44 10.118 10.118 0 0 1-3.394 1.831zm5.17-2.937a37.735 37.735 0 0 0-1.686-6.038c2.75-.44 5.169.282 5.468.372a10.16 10.16 0 0 1-3.782 5.666z" />
    </svg>
  );
}
function IconInstagram({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
    </svg>
  );
}
function IconLinkedin({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}
function IconFacebook({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}
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
              {[
                { Icon: IconDribbble, label: "Dribbble" },
                { Icon: IconTwitter, label: "Twitter" },
                { Icon: IconGithub, label: "GitHub" },
                { Icon: IconInstagram, label: "Instagram" },
                { Icon: IconLinkedin, label: "LinkedIn" },
                { Icon: IconFacebook, label: "Facebook" },
              ].map(({ Icon, label }) => (
                <a key={label} href="#" className="transition-colors hover:text-primary" aria-label={label}>
                  <Icon size={15} />
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
                    ["Age", "34"],
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
