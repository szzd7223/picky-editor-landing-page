"use client";

import React from "react";
import {
    Type,
    Layout,
    Palette,
    Square,
    ChevronRight,
    Layers,
    Code2,
    MousePointer2
} from "lucide-react";

export function ExtensionSidebar() {
    return (
        <div className="w-80 h-full bg-background border-l border-border flex flex-col font-mono text-[11px] overflow-hidden shadow-2xl">
            {/* Sidebar Header */}
            <div className="h-12 border-b border-border flex items-center justify-between px-4 bg-background-offset/30">
                <div className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-primary rounded flex items-center justify-center text-primary-foreground text-[8px] font-bold">
                        P
                    </div>
                    <span className="font-bold uppercase tracking-widest text-[10px]">Picky_Editor</span>
                </div>
                <div className="flex items-center gap-1">
                    <button className="p-1.5 hover:bg-muted rounded transition-colors" title="Inspect Mode">
                        <MousePointer2 className="w-3.5 h-3.5" />
                    </button>
                    <button className="p-1.5 hover:bg-muted rounded transition-colors" title="View Code">
                        <Code2 className="w-3.5 h-3.5" />
                    </button>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 overflow-y-auto divide-y divide-border">
                {/* DOM Tree Section */}
                <section className="p-4 space-y-3">
                    <div className="flex items-center justify-between opacity-50 uppercase tracking-tighter font-bold">
                        <span>DOM_Structure</span>
                        <Layers className="w-3 h-3" />
                    </div>
                    <div className="space-y-1.5 pt-2">
                        {[
                            { label: "main#content", depth: 0, active: false },
                            { label: "section.hero", depth: 1, active: true },
                            { label: "div.container", depth: 2, active: false },
                            { label: "h1.headline", depth: 3, active: false },
                            { label: "button.cta", depth: 3, active: false },
                        ].map((node, i) => (
                            <div
                                key={i}
                                className={`flex items-center gap-2 py-1 px-2 rounded-sm cursor-pointer transition-colors ${node.active ? "bg-primary/20 text-primary border-l-2 border-primary" : "hover:bg-muted/50"
                                    }`}
                                style={{ marginLeft: `${node.depth * 12}px` }}
                            >
                                <ChevronRight className={`w-3 h-3 opacity-50 ${node.depth === 3 ? "invisible" : ""}`} />
                                <span>{node.label}</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Properties Section (Scaffold) */}
                <section className="p-4 space-y-4">
                    <div className="flex items-center justify-between opacity-50 uppercase tracking-tighter font-bold">
                        <span>Properties</span>
                        <Layout className="w-3 h-3" />
                    </div>

                    <div className="space-y-4 pt-2">
                        <div className="space-y-2">
                            <label className="flex items-center gap-2 text-muted-foreground uppercase text-[9px]">
                                <Type className="w-3 h-3" /> Tipography
                            </label>
                            <div className="grid grid-cols-2 gap-2">
                                <div className="h-7 bg-muted/30 border border-border rounded flex items-center px-2 opacity-50">Inter</div>
                                <div className="h-7 bg-muted/30 border border-border rounded flex items-center px-2 opacity-50">64px</div>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="flex items-center gap-2 text-muted-foreground uppercase text-[9px]">
                                <Palette className="w-3 h-3" /> Color_System
                            </label>
                            <div className="flex items-center gap-2">
                                <div className="w-6 h-6 rounded bg-primary border border-border shadow-sm" />
                                <div className="flex-1 h-7 bg-muted/30 border border-border rounded flex items-center px-2 opacity-50 font-mono">#7c3aed</div>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="flex items-center gap-2 text-muted-foreground uppercase text-[9px]">
                                <Square className="w-3 h-3" /> Spacing_&_Box
                            </label>
                            <div className="grid grid-cols-4 gap-1.5 h-16 border border-dashed border-border rounded-lg items-center justify-center p-2 opacity-30">
                                <div className="col-start-2 col-end-4 h-6 border border-border rounded" />
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            {/* Footer / Actions */}
            <div className="p-4 border-t border-border bg-background-offset/20 space-y-3">
                <button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-2 rounded-md font-bold transition-all shadow-lg shadow-primary/20 active:scale-[0.98]">
                    COPY_TAILWIND_CODE
                </button>
                <p className="text-[9px] text-center text-muted-foreground italic">
                    v0.4.2-beta • System_Ready
                </p>
            </div>
        </div>
    );
}
