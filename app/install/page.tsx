"use client";

import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";
import { motion } from "framer-motion";
import { Chrome, Github, Download, Terminal, ChevronRight, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function InstallPage() {
    return (
        <div className="min-h-screen bg-background font-sans antialiased selection:bg-primary/30 selection:text-primary leading-relaxed">
            <Navbar />

            <main className="container mx-auto px-4 md:px-8 py-12 md:py-24">
                <div className="max-w-4xl mx-auto space-y-16">

                    {/* Header */}
                    <header className="space-y-6 text-center lg:text-left">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="space-y-4"
                        >
                            <Link
                                href="/"
                                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors mb-4"
                            >
                                <ArrowLeft className="w-3 h-3" />
                                Back to Landing
                            </Link>
                            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                                Get <span className="text-primary italic">Picky.Editor</span>
                            </h1>
                            <p className="text-xl text-muted-foreground max-w-2xl">
                                Ready to transform your CSS workflow? Choose your preferred installation method below.
                            </p>
                        </motion.div>
                    </header>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                        {/* Primary Method: Manual Install (Main Focus currently) */}
                        <div className="lg:col-span-12 space-y-8">
                            <div className="flex items-center gap-4 mb-2">
                                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary border border-primary/20">
                                    <Terminal className="w-6 h-6" />
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold">Developer Installation</h2>
                                    <p className="text-sm text-muted-foreground uppercase tracking-[0.2em] font-bold">Recommended for Beta</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {/* Step 1 */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 }}
                                    className="p-8 rounded-3xl bg-background-offset/50 border border-border group hover:border-primary/30 transition-all flex flex-col h-full"
                                >
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm mb-6 group-hover:bg-primary group-hover:text-background transition-colors">
                                        01
                                    </div>
                                    <h3 className="text-lg font-bold mb-3">Download Release</h3>
                                    <p className="text-muted-foreground text-sm mb-6 flex-1">
                                        Download the latest release ZIP from our official GitHub releases page.
                                    </p>
                                    <Button asChild className="w-full rounded-none bg-primary text-background font-bold uppercase text-[10px] tracking-widest">
                                        <Link href="https://github.com/szzd7223/dev-css-picker/releases" target="_blank">
                                            GitHub Releases <Github className="ml-2 w-3 h-3" />
                                        </Link>
                                    </Button>
                                </motion.div>

                                {/* Step 2 */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 }}
                                    className="p-8 rounded-3xl bg-background-offset/50 border border-border group hover:border-primary/30 transition-all flex flex-col h-full"
                                >
                                    <div className="w-10 h-10 rounded-full bg-muted/50 flex items-center justify-center text-muted-foreground font-bold text-sm mb-6 group-hover:bg-primary/20 group-hover:text-primary transition-colors">
                                        02
                                    </div>
                                    <h3 className="text-lg font-bold mb-3">Extract & Dev Mode</h3>
                                    <p className="text-muted-foreground text-sm mb-6 flex-1">
                                        Extract the ZIP. Go to <code className="text-foreground bg-muted px-1.5 py-0.5 rounded mx-1">chrome://extensions</code> and toggle <span className="font-bold">Developer mode</span> on the top right.
                                    </p>
                                </motion.div>

                                {/* Step 3 */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                    className="p-8 rounded-3xl bg-background-offset/50 border border-border group hover:border-primary/30 transition-all flex flex-col h-full"
                                >
                                    <div className="w-10 h-10 rounded-full bg-muted/50 flex items-center justify-center text-muted-foreground font-bold text-sm mb-6 group-hover:bg-primary/20 group-hover:text-primary transition-colors">
                                        03
                                    </div>
                                    <h3 className="text-lg font-bold mb-3">Load Unpacked</h3>
                                    <p className="text-muted-foreground text-sm mb-6 flex-1">
                                        Click <span className="font-bold">Load unpacked</span> and select the <code className="text-foreground bg-muted px-1.5 py-0.5 rounded mx-1">extension/</code> directory from the extracted folder.
                                    </p>
                                </motion.div>
                            </div>
                        </div>

                        {/* Secondary Method: Web Store (Coming Soon) */}
                        <div className="lg:col-span-12">
                            <div className="rounded-3xl bg-linear-to-br from-blue-500/5 via-transparent to-transparent border border-blue-500/10 p-8 md:p-12 relative overflow-hidden group grayscale opacity-60">
                                <div className="absolute top-0 right-0 p-8 text-blue-500/10">
                                    <Chrome className="w-32 h-32 rotate-12 group-hover:rotate-0 transition-transform duration-1000" />
                                </div>

                                <div className="max-w-xl space-y-4 relative z-10">
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-500 text-[10px] font-bold uppercase tracking-widest">
                                        Coming Soon
                                    </div>
                                    <h2 className="text-3xl font-bold">Chrome Web Store</h2>
                                    <p className="text-muted-foreground leading-relaxed">
                                        We're currently in the review process. Soon, you'll be able to install Picky.Editor with a single click and receive automatic updates directly through Chrome.
                                    </p>
                                    <div className="pt-4 flex items-center gap-4 text-sm font-bold text-blue-400">
                                        <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                                        Reviewing Manifest V3 compatibility...
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Quick Help Section */}
                    <section className="pt-24 border-t border-border/50">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-2xl font-bold mb-4">Having Trouble?</h2>
                                <p className="text-muted-foreground leading-relaxed mb-6">
                                    Our developer community is here to help. If you encounter any issues during the manual installation, feel free to open a ticket or join the discussion.
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    <Button variant="outline" asChild className="rounded-none border-border hover:bg-muted font-bold uppercase text-xs tracking-widest px-8">
                                        <Link href="https://github.com/szzd7223/dev-css-picker/issues" target="_blank">
                                            Open Issue
                                        </Link>
                                    </Button>
                                    <Button variant="ghost" asChild className="rounded-none text-muted-foreground hover:text-primary font-bold uppercase text-xs tracking-widest">
                                        <Link href="/documentation">
                                            Check Documentation <ChevronRight className="ml-2 w-4 h-4" />
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                            <div className="p-8 rounded-3xl bg-background-offset/30 border border-border flex items-center justify-center">
                                <div className="text-center space-y-4">
                                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto mb-4 border border-primary/20">
                                        <ArrowRight className="w-8 h-8 -rotate-45" />
                                    </div>
                                    <p className="text-sm font-mono text-muted-foreground/60">
                                        Looking for features?
                                    </p>
                                    <Link href="/#features" className="text-lg font-bold hover:text-primary transition-colors block underline underline-offset-8 decoration-primary/30 hover:decoration-primary">
                                        Explore Capabilities
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </section>

                </div>
            </main>

            <Footer />
        </div>
    );
}

// Re-using local component for layout simplicity unless passed as prop
function ArrowRight({ className }: { className?: string }) {
    return (
        <svg
            className={className}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
        </svg>
    );
}
