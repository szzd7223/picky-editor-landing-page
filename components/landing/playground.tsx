"use client";

import { DemoSite } from "./demo-site";
import { ExtensionSidebar } from "./extension-sidebar";

export function Playground() {
    return (
        <section id="demo" className="py-24 border-b border-border bg-background overflow-hidden">
            <div className="container mx-auto px-4 md:px-8 space-y-12">
                <div className="text-center space-y-3 max-w-2xl mx-auto">
                    <h2 className="text-3xl font-bold tracking-tight uppercase">
                        Live_Lab
                    </h2>
                    <p className="text-sm font-medium uppercase text-muted-foreground tracking-widest">
                        Experience Picky_Editor in action.
                    </p>
                </div>

                <div className="relative h-[700px] w-full border border-border bg-background-offset/30 shadow-2xl rounded-2xl overflow-hidden flex backdrop-blur-sm group">
                    {/* Grid Background */}
                    <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                        style={{
                            backgroundImage: 'linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)',
                            backgroundSize: '40px 40px'
                        }} />

                    {/* Demo Website Area */}
                    <div className="flex-1 relative overflow-hidden bg-white/5 dark:bg-black/20 m-2 rounded-xl border border-border/50">
                        <div className="absolute inset-0 overflow-auto">
                            <DemoSite />
                        </div>
                    </div>

                    {/* Extension Sidebar Overlay/Side */}
                    <div className="relative z-20 shrink-0">
                        <ExtensionSidebar />
                    </div>

                    {/* Corner Accent */}
                    <div className="absolute bottom-4 left-4 z-30 pointer-events-none">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-background/80 backdrop-blur border border-border rounded-full text-[9px] font-mono uppercase tracking-widest text-muted-foreground shadow-sm">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                            Simulation_Active
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
