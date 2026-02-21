"use client";

import React from "react";

interface DemoSiteProps {
    padding?: number;
    bgColor?: string;
    borderRadius?: number;
}

export function DemoSite({
    padding = 24,
    bgColor = "#0ea5e9", // Sky 500 equivalent 
    borderRadius = 12
}: DemoSiteProps) {
    return (
        <div className="w-full h-full bg-background text-foreground font-sans overflow-auto">
            {/* Simple Header */}
            <header className="h-16 border-b border-border flex items-center justify-between px-8 bg-background sticky top-0 z-10">
                <div className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-primary rounded-sm" />
                    <span className="font-bold tracking-tight text-sm uppercase">Minimal_Pro</span>
                </div>
                <nav className="flex items-center gap-6">
                    <span className="text-[10px] font-bold uppercase text-muted-foreground hover:text-foreground cursor-pointer transition-colors">Product</span>
                    <span className="text-[10px] font-bold uppercase text-muted-foreground hover:text-foreground cursor-pointer transition-colors">About</span>
                    <span className="text-[10px] font-bold uppercase text-primary hover:text-primary/80 cursor-pointer transition-colors">Login</span>
                </nav>
            </header>

            {/* Simple Hero */}
            <main className="p-8 space-y-12">

                {/* INTERACTIVE HERO CARD */}
                <div className="w-full max-w-2xl mx-auto mt-4">
                    <div className="relative group/demo">
                        {/* Outline shown on hover, mocking extension behavior */}
                        <div className="absolute -inset-2 border-2 border-emerald-500/0 group-hover/demo:border-emerald-500/50 rounded-xl transition-colors pointer-events-none z-10" />
                        {/* Dimensions label on hover */}
                        <div className="absolute -top-7 left-0 bg-emerald-500 text-white text-[10px] font-bold px-2 py-1 rounded opacity-0 group-hover/demo:opacity-100 transition-opacity z-20 shadow-sm pointer-events-none">
                            div.hero-card (Interactive)
                        </div>

                        <div
                            className="transition-all duration-200 ease-in-out shadow-xl border border-border flex flex-col items-center justify-center text-center gap-6 relative overflow-hidden"
                            style={{
                                padding: `${padding}px`,
                                backgroundColor: bgColor,
                                borderRadius: `${borderRadius}px`
                            }}
                        >
                            {/* Decorative pattern for better contrast perception */}
                            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                                style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)', backgroundSize: '24px 24px' }} />

                            <h1 className="text-3xl md:text-4xl font-black tracking-tighter leading-none text-white drop-shadow-sm relative z-10">
                                Build faster with <span className="italic block mt-2 text-white/90">Precision</span>.
                            </h1>
                            <p className="text-sm text-white/80 leading-relaxed max-w-sm font-medium relative z-10">
                                A clean, minimalist approach to web development.
                                Focus on what matters most.
                            </p>
                            <button className="px-6 py-3 bg-white text-black text-[11px] font-black uppercase tracking-widest rounded shadow-md hover:bg-white/90 transition-colors relative z-10">
                                Get Started
                            </button>
                        </div>
                    </div>
                </div>

                {/* Simple List */}
                <div className="space-y-4 max-w-2xl mx-auto">
                    <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">Latest Updates</h3>
                    <div className="space-y-2">
                        {[1, 2].map((i) => (
                            <div key={i} className="flex items-center justify-between p-4 border border-border bg-card hover:bg-accent/50 transition-colors cursor-pointer rounded-lg">
                                <span className="text-[10px] font-bold">Release_v2.0.{i}</span>
                                <span className="text-[9px] text-muted-foreground uppercase tracking-widest font-medium">Stable</span>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
}
