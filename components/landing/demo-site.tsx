"use client";

import React from "react";
import { Sparkles, AlertTriangle } from "lucide-react";

interface DemoSiteProps {
    inspectMode: boolean;
    selectedElement: string | null;
    onSelect: (el: HTMLElement) => void;
    customStyles: Record<string, { inline: React.CSSProperties, classes: Record<string, string> }>;
}

export function DemoSite({ inspectMode, selectedElement, onSelect, customStyles }: DemoSiteProps) {
    const getInspectProps = (id: string) => {
        const styles = customStyles[id] || { inline: {}, classes: {} };
        const customClasses = Object.values(styles.classes).filter(Boolean).join(" ");

        return {
            "data-node-id": id,
            onClick: (e: React.MouseEvent) => {
                if (inspectMode) {
                    e.stopPropagation();
                    onSelect(e.currentTarget as HTMLElement);
                }
            },
            className: `${customClasses} ${inspectMode ? "cursor-crosshair hover:ring-2 hover:ring-primary hover:ring-dashed hover:ring-offset-2 transition-all" : ""} ${selectedElement === id && inspectMode ? "ring-2 ring-primary ring-dashed ring-offset-2 ring-4 ring-primary/10" : ""}`,
            style: styles.inline
        };
    };

    return (
        <div className="w-full h-full bg-background text-foreground flex flex-col p-8 overflow-hidden selection:bg-primary/30 relative">
            <main className="relative z-10 flex flex-col gap-10 items-center text-center max-w-4xl mx-auto w-full pt-4">
                {/* Top: Text Content */}
                <div className="space-y-4">
                    <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-primary/10 border border-primary/20 text-[9px] font-bold uppercase tracking-widest text-primary">
                        <Sparkles className="w-3 h-3" /> Live_Simulation
                    </div>
                    <h1
                        {...getInspectProps("h1.title")}
                        className={`text-3xl md:text-5xl font-black tracking-tighter leading-[1.1] uppercase italic ${getInspectProps("h1.title").className}`}
                    >
                        YOU CAN SELECT ANY <span className="text-primary not-italic">ELEMENT</span> ON THE PAGE
                    </h1>
                    <div className="space-y-4 max-w-2xl mx-auto">
                        <p
                            {...getInspectProps("p.description")}
                            className={`text-sm md:text-base font-medium text-muted-foreground leading-relaxed ${getInspectProps("p.description").className}`}
                        >
                            Just toggle <span className="text-foreground font-bold underline decoration-primary/30">Inspect Mode</span> and click on any element. You will see the code, can change properties in real time, and copy the result.
                        </p>
                    </div>
                </div>

                {/* Bottom: Interactive Boxes (Static) */}
                <div className="w-full space-y-6">
                    <div className="flex flex-col items-center gap-2">
                        <h2
                            {...getInspectProps("h2.boxes_title")}
                            className={`text-xl font-bold uppercase tracking-tight ${getInspectProps("h2.boxes_title").className}`}
                        >
                            Interactive_Boxes
                        </h2>
                        <p
                            {...getInspectProps("p.boxes_desc")}
                            className={`text-xs text-muted-foreground font-mono ${getInspectProps("p.boxes_desc").className}`}
                        >
                            "Here are some boxes, have fun try it out"
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
                        {[
                            { color: "bg-blue-500/5", borderColor: "border-blue-500/20", label: "Box_Alpha", icon: "A", id: "box.alpha" },
                            { color: "bg-purple-500/5", borderColor: "border-purple-500/20", label: "Box_Beta", icon: "B", id: "box.beta" },
                            { color: "bg-emerald-500/5", borderColor: "border-emerald-500/20", label: "Box_Gamma", icon: "G", id: "box.gamma" },
                        ].map((box, i) => (
                            <div
                                key={i}
                                {...getInspectProps(box.id)}
                                className={`aspect-square rounded-xl border-2 ${box.color} ${box.borderColor} flex flex-col items-center justify-center gap-2 ${getInspectProps(box.id).className}`}
                            >
                                <div className="w-8 h-8 rounded-lg bg-background border border-border flex items-center justify-center text-xs font-black text-primary shadow-sm">
                                    {box.icon}
                                </div>
                                <span className="text-[9px] font-mono uppercase tracking-widest text-muted-foreground">
                                    {box.label}
                                </span>
                            </div>
                        ))}

                        {/* The Cat Box - Static */}
                        <div
                            {...getInspectProps("box.cat")}
                            className={`aspect-square rounded-xl border-2 border-red-500/20 bg-red-500/5 flex flex-col items-center justify-center gap-2 relative overflow-hidden ${getInspectProps("box.cat").className}`}
                        >
                            <div className="absolute top-0 left-0 w-full h-1 bg-red-500/20" />
                            <div className="text-3xl relative z-10">🐈</div>
                            <div className="flex flex-col items-center gap-0.5 relative z-10">
                                <span className="text-[9px] font-mono font-bold uppercase text-red-500">SYSTEM_CAT</span>
                                <div className="flex items-center gap-1 px-1.5 py-0.5 rounded bg-red-500 text-white text-[8px] font-black uppercase shadow-sm">
                                    <AlertTriangle className="w-2.5 h-2.5" /> NO_TOUCH
                                </div>
                            </div>
                            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-12 h-1 bg-muted rounded-full overflow-hidden opacity-30">
                                <div className="h-full bg-red-500 w-[30%]" />
                            </div>
                        </div>
                    </div>

                    <p
                        {...getInspectProps("p.cat_disclaimer")}
                        className={`text-[10px] text-muted-foreground font-mono italic ${getInspectProps("p.cat_disclaimer").className}`}
                    >
                        "and here is a cat, it is just existing here DO NOT TOUCH IT"
                    </p>
                </div>
            </main>

            {/* Grid Pattern Overlay */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.015]"
                style={{ backgroundImage: 'radial-gradient(circle at 1.5px 1.5px, currentColor 1px, transparent 0)', backgroundSize: '24px 24px' }} />
        </div>
    );
}
