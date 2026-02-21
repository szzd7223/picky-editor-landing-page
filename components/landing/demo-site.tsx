"use client";

import React, { useState } from "react";

interface DemoSiteProps {
    padding?: number;
    bgColor?: string;
    borderRadius?: number;
}

export function DemoSite({
    padding = 24,
    bgColor = "var(--background)",
    borderRadius = 8
}: DemoSiteProps) {
    const [isTreatDeployed, setIsTreatDeployed] = useState(false);

    const handleDeployTreat = () => {
        setIsTreatDeployed(true);
        setTimeout(() => {
            setIsTreatDeployed(false);
        }, 1500); // Animation duration
    };

    return (
        <div className="w-full h-full bg-background-offset text-foreground font-sans overflow-auto selection:bg-primary/30 selection:text-primary relative overflow-hidden">
            {/* Header */}
            <header className="h-14 border-b border-border flex items-center justify-between px-6 bg-background sticky top-0 z-30">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-primary/10 flex items-center justify-center rounded border border-primary/30">
                        <span className="text-primary text-lg leading-none">🐱</span>
                    </div>
                    <span className="font-mono tracking-tighter text-sm md:text-base uppercase text-primary">Pixel_Cat.exe</span>
                </div>
                <nav className="hidden md:flex items-center gap-6">
                    <span className="text-xs font-mono uppercase text-muted-foreground hover:text-primary cursor-pointer transition-colors">Naps</span>
                    <span className="text-xs font-mono uppercase text-muted-foreground hover:text-primary cursor-pointer transition-colors">Snacks</span>
                    <button className="text-xs font-mono uppercase bg-primary/10 text-primary px-3 py-1.5 rounded-sm cursor-pointer border border-primary hover:bg-primary hover:text-primary-foreground transition-all">
                        Execute Adopt
                    </button>
                </nav>
            </header>

            <main className="p-6 md:p-10 space-y-12 pb-24 relative z-10">
                {/* Hero Section (Interactive Container) */}
                <div className="w-full max-w-3xl mx-auto mt-4">
                    <div className="relative group/demo">
                        {/* Extension Highlight Mock */}
                        <div className="absolute -inset-2 border border-dashed border-primary/0 group-hover/demo:border-primary/50 rounded-lg transition-colors pointer-events-none z-10" />
                        <div className="absolute -top-7 left-0 bg-primary/20 text-primary border border-primary/50 text-[10px] font-mono px-2 py-0.5 rounded opacity-0 group-hover/demo:opacity-100 transition-opacity z-20 pointer-events-none backdrop-blur-sm">
                            <span className="text-muted-foreground">&lt;</span>main container<span className="text-muted-foreground">/&gt;</span>
                        </div>

                        <div
                            className="transition-all duration-300 ease-in-out border border-border flex flex-col items-center justify-center text-center gap-6 relative overflow-hidden bg-background group-hover/demo:border-primary/50"
                            style={{
                                padding: `${padding * 1.5}px ${padding}px`,
                                backgroundColor: bgColor,
                                borderRadius: `${borderRadius}px`
                            }}
                        >
                            {/* Decorative Background Grid */}
                            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                                style={{
                                    backgroundImage: 'linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)',
                                    backgroundSize: '24px 24px'
                                }} />

                            <div className="w-32 h-32 bg-background-offset border border-border rounded-full flex items-center justify-center relative z-20 overflow-hidden group shadow-[0_0_15px_rgba(46,204,113,0.1)]">
                                <span className={`text-7xl transition-all duration-300 cursor-crosshair select-none ${isTreatDeployed ? 'scale-125' : 'scale-100'}`}>
                                    {isTreatDeployed ? '😼' : '😸'}
                                </span>
                            </div>

                            <div className="space-y-4 relative z-10 max-w-lg">
                                <h1 className="text-3xl md:text-5xl font-mono font-bold tracking-tight text-foreground uppercase leading-tight">
                                    Sir Meows<br />
                                    <span className="text-primary">A-Lot</span><span className="animate-pulse">_</span>
                                </h1>
                                <p className="text-sm font-mono text-muted-foreground leading-relaxed border border-border bg-background-offset p-4 rounded-md shadow-inner mt-4">
                                    &gt; A connoisseur of cardboard boxes.<br />
                                    &gt; Highly skilled at knocking glasses off tables.<br />
                                    &gt; Status: {isTreatDeployed ? 'CRUNCH CRUNCH MUNCH...' : 'Awaiting treats...'}
                                </p>
                            </div>

                            <div className="flex flex-wrap items-center justify-center gap-4 relative z-10 mt-2">
                                <button
                                    onClick={handleDeployTreat}
                                    disabled={isTreatDeployed}
                                    className="relative px-5 py-2.5 bg-primary text-primary-foreground text-xs font-mono uppercase tracking-wider rounded border border-primary transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:bg-transparent hover:text-primary group/btn overflow-visible"
                                >
                                    [ Deploy Treat 🐟 ]

                                    {/* The flying fish animation */}
                                    {isTreatDeployed && (
                                        <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 pointer-events-none z-50 text-2xl animate-[fish-fly_1.5s_cubic-bezier(0.5,0,0.5,1)_forwards]">
                                            🐟
                                        </div>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Highly Nested Stats Section */}
                <div className="max-w-3xl mx-auto space-y-6">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-background-offset border border-border rounded-md group hover:border-primary/50 transition-colors cursor-crosshair">
                        <span className="text-primary text-xs font-mono animate-pulse">●</span>
                        <h2 className="text-xs font-mono uppercase tracking-widest text-muted-foreground group-hover:text-primary transition-colors">System Diagnostics: Cat Stats</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Stat Card 1 */}
                        <div className="bg-background-offset border border-border rounded-lg p-5 hover:border-primary/40 transition-all group cursor-crosshair relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/20 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity" />
                            <div className="flex flex-col gap-5 h-full relative z-10">
                                <div className="flex items-start justify-between border-b border-border/50 pb-4">
                                    <div className="space-y-1">
                                        <h3 className="font-mono text-lg text-foreground uppercase">Agility.sys</h3>
                                        <p className="text-[10px] text-muted-foreground font-mono uppercase tracking-wider">Process: 3AM_Zoomies</p>
                                    </div>
                                    <div className="bg-primary/10 text-primary text-[10px] font-mono uppercase px-2 py-1 rounded border border-primary/20">
                                        Maxed Out
                                    </div>
                                </div>
                                <div className="space-y-4 mt-auto">
                                    <div className="flex flex-col gap-2">
                                        <div className="flex justify-between items-center text-[10px] font-mono uppercase text-muted-foreground">
                                            <span>Current Memory</span>
                                            <span className="text-primary">95%</span>
                                        </div>
                                        <div className="h-1.5 w-full bg-background rounded-full overflow-hidden">
                                            <div className="h-full w-[95%] bg-primary shadow-[0_0_10px_rgba(46,204,113,0.5)]"></div>
                                        </div>
                                    </div>
                                    <ul className="text-xs font-mono space-y-2 text-muted-foreground">
                                        <li className="flex items-center gap-2">
                                            <span className="text-primary opacity-50">&gt;</span>
                                            <span className="group-hover:text-foreground transition-colors">Wall bouncing initialized</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <span className="text-primary opacity-50">&gt;</span>
                                            <span className="group-hover:text-foreground transition-colors">Silent landing module loaded</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Stat Card 2 */}
                        <div className="bg-background-offset border border-border rounded-lg p-5 hover:border-primary/40 transition-all group cursor-crosshair relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/20 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity" />
                            <div className="flex flex-col gap-5 h-full relative z-10">
                                <div className="flex items-start justify-between border-b border-border/50 pb-4">
                                    <div className="space-y-1">
                                        <h3 className="font-mono text-lg text-foreground uppercase">Laziness.bin</h3>
                                        <p className="text-[10px] text-muted-foreground font-mono uppercase tracking-wider">Process: Sunbeam_Finder</p>
                                    </div>
                                    <div className="bg-accent/10 text-accent-foreground text-[10px] font-mono uppercase px-2 py-1 rounded border border-accent/20">
                                        Legendary
                                    </div>
                                </div>
                                <div className="space-y-4 mt-auto">
                                    <div className="flex flex-col gap-2">
                                        <div className="flex justify-between items-center text-[10px] font-mono uppercase text-muted-foreground">
                                            <span>Uptime Allocation</span>
                                            <span className="text-foreground">100%</span>
                                        </div>
                                        <div className="h-1.5 w-full bg-background rounded-full overflow-hidden">
                                            <div className="h-full w-[100%] bg-muted-foreground opacity-50 group-hover:opacity-80 transition-opacity"></div>
                                        </div>
                                    </div>
                                    <ul className="text-xs font-mono space-y-2 text-muted-foreground">
                                        <li className="flex items-center gap-2">
                                            <span className="text-muted-foreground opacity-50">&gt;</span>
                                            <span className="group-hover:text-foreground transition-colors">Sleeps 18+ hours/day</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <span className="text-muted-foreground opacity-50">&gt;</span>
                                            <span className="group-hover:text-foreground transition-colors">Liquid state achieved</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
