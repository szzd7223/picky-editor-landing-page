"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";
import { ChevronRight, Box, Code, Layers, Zap, MousePointer, Target, Scan, Shield } from "lucide-react";
import { cn } from "@/lib/utils";

const sections = [
    { id: "project-structure", title: "Project Structure", icon: Box },
    { id: "core-architecture", title: "Core Architecture", icon: Layers },
    {
        id: "component-breakdown", title: "Component Breakdown", icon: Code, subsections: [
            { id: "background", title: "Background Service" },
            { id: "content-scripts", title: "Content Scripts" },
            { id: "extension-ui", title: "Extension UI" },
        ]
    },
    {
        id: "data-flow", title: "Data Flow and Logic", icon: Zap, subsections: [
            { id: "picking-flow", title: "Element Picking" },
            { id: "editing-flow", title: "Property Editing" },
            { id: "scanning-flow", title: "Page Scanning" },
        ]
    },
    {
        id: "key-mechanisms", title: "Key Mechanisms", icon: Shield, subsections: [
            { id: "element-tracking", title: "Element Tracking" },
            { id: "overlay-highlights", title: "Overlay Highlights" },
        ]
    },
];

export default function DocumentationPage() {
    const [activeTab, setActiveTab] = useState("project-structure");

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveTab(entry.target.id);
                    }
                });
            },
            { threshold: 0.5 }
        );

        sections.forEach((section) => {
            const el = document.getElementById(section.id);
            if (el) observer.observe(el);
            section.subsections?.forEach((sub) => {
                const subEl = document.getElementById(sub.id);
                if (subEl) observer.observe(subEl);
            });
        });

        return () => observer.disconnect();
    }, []);

    const scrollTo = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
            const offset = 80;
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = el.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    };

    return (
        <div className="min-h-screen bg-background font-sans antialiased selection:bg-primary/30 selection:text-primary">
            <Navbar />

            <main className="container mx-auto px-4 md:px-8 py-12 md:py-24">
                <div className="flex flex-col lg:flex-row gap-12 relative">

                    {/* Mobile Table of Contents - Quick Access */}
                    <div className="lg:hidden mb-8 p-4 bg-background-offset/50 border border-border rounded-xl backdrop-blur-sm">
                        <h3 className="text-sm font-bold uppercase tracking-widest mb-4 flex items-center gap-2 text-primary">
                            <Layers className="w-4 h-4" />
                            On this page
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {sections.map((section) => (
                                <button
                                    key={section.id}
                                    onClick={() => scrollTo(section.id)}
                                    className={cn(
                                        "text-xs px-3 py-1.5 rounded-full border transition-all",
                                        activeTab === section.id
                                            ? "bg-primary/10 border-primary text-primary"
                                            : "bg-background border-border text-muted-foreground hover:border-primary/50"
                                    )}
                                >
                                    {section.title}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Sidebar Navigation */}
                    <aside className="hidden lg:block w-64 shrink-0">
                        <div className="sticky top-24 space-y-8">
                            <div>
                                <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground/60 mb-6">
                                    Documentation
                                </h3>
                                <nav className="space-y-1">
                                    {sections.map((section) => (
                                        <div key={section.id} className="space-y-1">
                                            <button
                                                onClick={() => scrollTo(section.id)}
                                                className={cn(
                                                    "w-full flex items-center gap-3 px-3 py-2 text-sm font-medium transition-all group rounded-lg",
                                                    activeTab === section.id || section.subsections?.some(s => s.id === activeTab)
                                                        ? "bg-primary/5 text-primary"
                                                        : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
                                                )}
                                            >
                                                <section.icon className={cn(
                                                    "w-4 h-4 transition-transform",
                                                    activeTab === section.id && "scale-110"
                                                )} />
                                                {section.title}
                                            </button>

                                            {section.subsections && (
                                                <div className="ml-7 border-l border-border/50 pl-4 space-y-1 py-1">
                                                    {section.subsections.map((sub) => (
                                                        <button
                                                            key={sub.id}
                                                            onClick={() => scrollTo(sub.id)}
                                                            className={cn(
                                                                "w-full text-left text-xs py-1.5 transition-colors block",
                                                                activeTab === sub.id
                                                                    ? "text-primary font-medium"
                                                                    : "text-muted-foreground hover:text-foreground"
                                                            )}
                                                        >
                                                            {sub.title}
                                                        </button>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </nav>
                            </div>

                            {/* Quick Links / Help */}
                            <div className="p-4 rounded-2xl bg-linear-to-br from-primary/10 via-transparent to-transparent border border-primary/10">
                                <h4 className="text-xs font-bold mb-2 flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                                    Need more help?
                                </h4>
                                <p className="text-[11px] text-muted-foreground leading-relaxed mb-3">
                                    Check out our GitHub for issues or full source code details.
                                </p>
                                <Link
                                    href="https://github.com/szzd7223/dev-css-picker"
                                    target="_blank"
                                    className="text-[11px] font-bold text-primary hover:underline flex items-center gap-1"
                                >
                                    Visit Repository <ChevronRight className="w-3 h-3" />
                                </Link>
                            </div>
                        </div>
                    </aside>

                    {/* Main Content Area */}
                    <div className="flex-1 max-w-3xl">
                        <header className="mb-16 space-y-4">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <div className="text-primary text-sm font-bold tracking-[0.2em] uppercase mb-2">
                                    Technical Guide
                                </div>
                                <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
                                    Architecture <span className="text-muted-foreground">&</span> Logic
                                </h1>
                                <p className="text-xl text-muted-foreground leading-relaxed">
                                    Deep dive into the internals of Picky.Editor. Learn how we handle DOM manipulation, state sync, and the Chrome Extension lifecycle.
                                </p>
                            </motion.div>
                        </header>

                        <div className="space-y-24">
                            {/* Project Structure */}
                            <section id="project-structure" className="scroll-mt-24 space-y-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary border border-primary/20">
                                        <Box className="w-5 h-5" />
                                    </div>
                                    <h2 className="text-2xl font-bold">Project Structure</h2>
                                </div>
                                <p className="text-muted-foreground leading-relaxed">
                                    The project is divided into two primary directories, separating the core extension logic from the user interface:
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="p-5 rounded-2xl bg-background-offset/50 border border-border group hover:border-primary/30 transition-all">
                                        <h3 className="font-bold mb-2 flex items-center gap-2">
                                            <code className="bg-primary/10 text-primary px-2 py-0.5 rounded text-sm">extension/</code>
                                        </h3>
                                        <p className="text-sm text-muted-foreground leading-relaxed">
                                            Contains the standard Chrome Extension files like <code className="text-foreground">manifest.json</code>, background worker, and vanilla JS content scripts.
                                        </p>
                                    </div>
                                    <div className="p-5 rounded-2xl bg-background-offset/50 border border-border group hover:border-primary/30 transition-all">
                                        <h3 className="font-bold mb-2 flex items-center gap-2">
                                            <code className="bg-primary/10 text-primary px-2 py-0.5 rounded text-sm">extension-ui/</code>
                                        </h3>
                                        <p className="text-sm text-muted-foreground leading-relaxed">
                                            A React application (Vite-powered) acting as the sidebar frontend. Build outputs merge into the main extension folder.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* Core Architecture */}
                            <section id="core-architecture" className="scroll-mt-24 space-y-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary border border-primary/20">
                                        <Layers className="w-5 h-5" />
                                    </div>
                                    <h2 className="text-2xl font-bold">Core Architecture Overview</h2>
                                </div>
                                <div className="prose prose-invert max-w-none">
                                    <p className="text-muted-foreground leading-relaxed">
                                        Picky.Editor relies on Chrome's <strong>Side Panel API</strong>. It injects a suite of modular content scripts into the active tab to read the DOM, extract computed styles, and handle highlights.
                                    </p>
                                </div>

                                {/* Architecture Diagram Visualization */}
                                <div className="p-8 rounded-3xl bg-background-offset/50 border border-border overflow-hidden relative group">
                                    <div className="absolute top-0 right-0 p-4">
                                        <Code className="w-4 h-4 text-muted-foreground/30" />
                                    </div>
                                    <pre className="text-xs md:text-sm font-mono leading-relaxed text-primary/80 overflow-x-auto whitespace-pre">
                                        {`+----------------+                       +-------------------+
| React Sidebar  |   Message Passing     |  Content Scripts  |
| (extension-ui) | <===================> |   (DOM runtime)   |
+--------+-------+                       +---------+---------+
         |                                         |
         |         +-------------------+           |
         +-------- | Background Script | ----------+
                   |  (background.js)  |
                   +-------------------+`}
                                    </pre>
                                </div>
                            </section>

                            {/* Component Breakdown */}
                            <section id="component-breakdown" className="scroll-mt-24 space-y-12">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary border border-primary/20">
                                        <Code className="w-5 h-5" />
                                    </div>
                                    <h2 className="text-2xl font-bold">Component Breakdown</h2>
                                </div>

                                <div className="space-y-8">
                                    <div id="background" className="scroll-mt-24 space-y-4">
                                        <h3 className="text-xl font-bold flex items-center gap-2">
                                            Background Service Worker <span className="text-xs font-mono text-muted-foreground">background.js</span>
                                        </h3>
                                        <ul className="space-y-3">
                                            {[
                                                "Initializes the Side Panel on extension icon click.",
                                                "Maintains reference count of active connections.",
                                                "Broadcasts STOP_PICKING to tabs when panel closes."
                                            ].map((item, i) => (
                                                <li key={i} className="flex gap-3 text-muted-foreground text-sm">
                                                    <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-primary mt-1.5" />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div id="content-scripts" className="scroll-mt-24 space-y-4 pt-8 border-t border-border/50">
                                        <h3 className="text-xl font-bold">Content Scripts</h3>
                                        <p className="text-sm text-muted-foreground mb-4">
                                            Modular scripts running in an IIFE, namespaced under <code className="text-foreground">window.Picky_Editor</code>.
                                        </p>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                                            {[
                                                { name: "init.js", desc: "Re-exports modules and initializes tracking." },
                                                { name: "messaging.js", desc: "Routes messages (SCAN_PAGE, UPDATE_STYLE, etc.)." },
                                                { name: "picking.js", desc: "Global mouse/click listeners for element selection." },
                                                { name: "inspector.js", desc: "DOM Reader - extracts rects, variables, and box-model." },
                                                { name: "overlay.js", desc: "Shadow DOM based highlight box for zero-interference." },
                                                { name: "tracker.js", desc: "Manages original style backups using WeakMap." },
                                            ].map((script) => (
                                                <div key={script.name} className="space-y-1">
                                                    <h4 className="text-sm font-bold text-primary font-mono">{script.name}</h4>
                                                    <p className="text-xs text-muted-foreground">{script.desc}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div id="extension-ui" className="scroll-mt-24 space-y-4 pt-8 border-t border-border/50">
                                        <h3 className="text-xl font-bold">Extension UI (Sidebar App)</h3>
                                        <p className="text-muted-foreground text-sm uppercase font-bold tracking-widest text-[10px] mb-2 opacity-60">Tech Stack: React + Zustand</p>
                                        <p className="text-sm text-muted-foreground leading-relaxed">
                                            Features a tabbed interface (Overview, Inspector, Assets, Layout, Colors). It monitors tab lifecycle events to maintain synchronicity between the UI and the active DOM state.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* Data Flow */}
                            <section id="data-flow" className="scroll-mt-24 space-y-12">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary border border-primary/20">
                                        <Zap className="w-5 h-5" />
                                    </div>
                                    <h2 className="text-2xl font-bold">Data Flow and Logic</h2>
                                </div>

                                <div className="space-y-12">
                                    <div id="picking-flow" className="scroll-mt-24 bg-background-offset/30 p-8 rounded-3xl border border-border">
                                        <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-lg bg-primary/20 text-primary flex items-center justify-center">
                                                <MousePointer className="w-4 h-4" />
                                            </div>
                                            Element Picking Flow
                                        </h3>
                                        <div className="space-y-4">
                                            {[
                                                { step: "Activate", desc: "User turns on Inspect Mode; UI sends START_PICKING." },
                                                { step: "Listen", desc: "Content Script starts mousemove listeners." },
                                                { step: "Hover", desc: "Overlay highlights elements in real-time." },
                                                { step: "Select", desc: "User clicks; inspector.js runs getElementInfo()." },
                                                { step: "Sync", desc: "Data is serialized and sent back to React UI." }
                                            ].map((item, idx) => (
                                                <div key={idx} className="flex gap-4 group">
                                                    <div className="flex flex-col items-center">
                                                        <div className="w-6 h-6 rounded-full bg-primary/10 border border-primary/40 text-[10px] font-bold flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-background transition-colors">
                                                            {idx + 1}
                                                        </div>
                                                        {idx < 4 && <div className="w-px h-full bg-border mt-1" />}
                                                    </div>
                                                    <div className="pb-4">
                                                        <span className="text-sm font-bold block">{item.step}</span>
                                                        <span className="text-xs text-muted-foreground">{item.desc}</span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div id="editing-flow" className="scroll-mt-24 space-y-6">
                                        <h3 className="text-xl font-bold flex items-center gap-2">
                                            Property Editing Flow
                                        </h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 text-sm text-muted-foreground">
                                            <p>
                                                When a user modifies a property (e.g., padding), the UI fires an <code className="text-foreground">UPDATE_STYLE</code> message. The content script finds the element by its assigned temporary ID.
                                            </p>
                                            <p>
                                                Before applying the change, <code className="text-foreground">tracker.js</code> snapshots the original computed style. The new style is then applied as inline CSS with <code className="text-foreground">!important</code> priority.
                                            </p>
                                        </div>
                                    </div>

                                    <div id="scanning-flow" className="scroll-mt-24 space-y-6">
                                        <h3 className="text-xl font-bold">Page Scanning</h3>
                                        <div className="p-6 rounded-2xl border border-border bg-linear-to-r from-background-offset/50 to-transparent">
                                            <p className="text-sm text-muted-foreground leading-relaxed">
                                                Execution: <code className="text-foreground">scanner.js</code> pulls an array of <code className="text-foreground text-xs">document.querySelectorAll('*')</code>, iterates through the first 800 nodes, tallies background/text colors, translates <code className="text-foreground text-xs">rgb/rgba</code> to HEX and tallies font families.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Key Mechanisms */}
                            <section id="key-mechanisms" className="scroll-mt-24 space-y-12">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary border border-primary/20">
                                        <Shield className="w-5 h-5" />
                                    </div>
                                    <h2 className="text-2xl font-bold">Key Mechanisms</h2>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div id="element-tracking" className="scroll-mt-24 p-8 rounded-3xl bg-background-offset/50 border border-border space-y-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                                                <Target className="w-5 h-5" />
                                            </div>
                                            <h3 className="font-bold">Element Tracking</h3>
                                        </div>
                                        <p className="text-sm text-muted-foreground leading-relaxed">
                                            Reverting styles relies on tracking. A <code className="text-foreground">WeakMap</code> maintains a reference to modified elements without causing memory leaks. We snapshot the initial resolved property from <code className="text-foreground text-xs">getComputedStyle</code>.
                                        </p>
                                    </div>

                                    <div id="overlay-highlights" className="scroll-mt-24 p-8 rounded-3xl bg-background-offset/50 border border-border space-y-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                                                <MousePointer className="w-5 h-5" />
                                            </div>
                                            <h3 className="font-bold">Overlay Highlights</h3>
                                        </div>
                                        <p className="text-sm text-muted-foreground leading-relaxed">
                                            To prevent interference, <code className="text-foreground">overlay.js</code> uses a Shadow Root for the highlight box. <code className="text-foreground">pointer-events: none</code> ensures the mouse pointer reads through the overlay.
                                        </p>
                                    </div>
                                </div>
                            </section>
                        </div>

                        <div className="mt-32 pt-12 border-t border-border flex flex-col md:flex-row items-center justify-between gap-8">
                            <div className="space-y-2">
                                <p className="text-sm text-muted-foreground font-medium">Ready to start editing?</p>
                                <div className="flex gap-4">
                                    <button className="px-6 py-2.5 bg-primary text-background font-bold uppercase text-xs tracking-widest hover:bg-primary/90 transition-all">
                                        Install Extension
                                    </button>
                                    <Link href="/" className="px-6 py-2.5 border border-border text-foreground font-bold uppercase text-xs tracking-widest hover:bg-muted/50 transition-all">
                                        Back Home
                                    </Link>
                                </div>
                            </div>
                            <div className="text-[10px] text-muted-foreground/50 font-mono text-center md:text-right">
                                LAST UPDATED: FEB 2026<br />
                                DOCS_VERSION: 1.0.4-STABLE
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
