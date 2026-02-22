"use client";

import Image from "next/image";
import React from "react";
import {
    ChevronRight,
    Layers,
    Code2,
    MousePointer2,
    Palette,
    Square,
    Type,
    Layout,
    Maximize,
    Copy,
    Focus,
    Check
} from "lucide-react";

import { TreeInfo } from "./playground";

interface ExtensionSidebarProps {
    inspectMode: boolean;
    setInspectMode: (val: boolean) => void;
    selectedElement: string | null;
    elementTree: TreeInfo | null;
    customStyles: Record<string, { inline: React.CSSProperties, classes: Record<string, string> }>;
    onSelect: (elementId: string | null) => void;
    onUpdateProperty: (prop: string, tailwindClass: string, inlineStyleKey: string, inlineStyleValue: string) => void;
}

export function ExtensionSidebar({
    inspectMode,
    setInspectMode,
    selectedElement,
    elementTree,
    customStyles,
    onSelect,
    onUpdateProperty
}: ExtensionSidebarProps) {
    const [props, setProps] = React.useState({
        width: 100,
        height: 100,
        padding: 0,
        radius: 'none',
        bgColor: '#7C3AED',
        borderW: 0,
        borderColor: '#7C3AED'
    });

    const [copied, setCopied] = React.useState(false);

    const handlePropChange = (key: string, val: any) => {
        setProps(prev => ({ ...prev, [key]: val }));

        let tailwindClass = '';
        let inlineStyleKey = key;
        let inlineStyleValue = val;

        if (key === 'width') { tailwindClass = `w-[${val}%]`; inlineStyleValue = `${val}%`; }
        if (key === 'height') { tailwindClass = `h-[${val}%]`; inlineStyleValue = `${val}%`; }
        if (key === 'padding') { tailwindClass = `p-[${val}px]`; inlineStyleValue = `${val}px`; }
        if (key === 'bgColor') { tailwindClass = `bg-[${val}]`; inlineStyleKey = 'backgroundColor'; }
        if (key === 'borderColor') { tailwindClass = `border-[${val}]`; }
        if (key === 'borderW') { tailwindClass = `border-[${val}px]`; inlineStyleKey = 'borderWidth'; inlineStyleValue = `${val}px`; }

        // Radius already comes in as the tailwind suffix (e.g., 'sm', 'full')
        if (key === 'radius') {
            tailwindClass = val === 'none' ? 'rounded-none' : `rounded-${val}`;
            inlineStyleKey = 'borderRadius';

            // Map Tailwind radius to actual pixels for inline styles (approximate)
            const radiusMap: Record<string, string> = {
                'none': '0px', 'sm': '0.125rem', 'md': '0.375rem', 'lg': '0.5rem',
                'xl': '0.75rem', '2xl': '1rem', '3xl': '1.5rem', 'full': '9999px'
            };
            inlineStyleValue = radiusMap[val] || '0px';
        }

        onUpdateProperty(key, tailwindClass, inlineStyleKey, inlineStyleValue);
    };

    const getTailwindCode = () => {
        if (!selectedElement || !elementTree) return "";

        const uiClasses = [
            "cursor-crosshair", "hover:ring-2", "hover:ring-primary",
            "hover:ring-dashed", "hover:ring-offset-2", "transition-all",
            "ring-2", "ring-primary", "ring-dashed", "ring-offset-2",
            "ring-4", "ring-primary/10", "relative"
        ];

        const currentStyles = customStyles[selectedElement] || { inline: {}, classes: {} };
        const injected = Object.values(currentStyles.classes).filter(Boolean).join(" ");
        const base = elementTree.selected.classNames;

        return Array.from(new Set(`${base} ${injected}`.split(/\s+/)))
            .filter(c => c && !uiClasses.includes(c))
            .join(" ")
            .trim();
    };

    const handleCopy = async (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();

        const payload = getTailwindCode();
        if (!payload) return;

        try {
            if (navigator.clipboard) {
                await navigator.clipboard.writeText(payload);
            } else {
                throw new Error("Clipboard API unavailable");
            }
        } catch (err) {
            const textArea = document.createElement("textarea");
            textArea.value = payload;
            textArea.style.position = "fixed";
            textArea.style.left = "-9999px";
            textArea.style.top = "0";
            document.body.appendChild(textArea);
            textArea.focus();
            textArea.select();
            try {
                document.execCommand("copy");
            } catch (copyErr) {
                console.error("Fallback copy failed:", copyErr);
            }
            document.body.removeChild(textArea);
        }

        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="w-80 h-full bg-background border-l border-border flex flex-col font-mono text-[11px] overflow-hidden shadow-2xl">
            {/* Header */}
            <div className="h-12 border-b border-border flex items-center justify-between px-4 bg-background-offset/30 shrink-0">
                <div className="flex items-center gap-3">
                    <button
                        onClick={() => setInspectMode(!inspectMode)}
                        className={`p-2 rounded-md transition-all ${inspectMode
                            ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                            : "hover:bg-muted text-muted-foreground"
                            }`}
                        title="Toggle Inspect Mode"
                    >
                        <MousePointer2 className="w-4 h-4" />
                    </button>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                        {inspectMode ? "Inspect_On" : "Inspect_Off"}
                    </span>
                </div>
                <div className="flex items-center gap-2 group">
                    <Image
                        src="/logo.png"
                        alt="Logo"
                        width={20}
                        height={20}
                        className="object-contain"
                    />
                    <div className="flex flex-col -space-y-1">
                        <span className="text-[10px] font-black uppercase tracking-tighter text-foreground">Picky.Editor</span>
                        <span className="text-[7px] font-bold text-muted-foreground/60 uppercase tracking-tighter">
                            Env_v0.8.1
                        </span>
                    </div>
                </div>
            </div>

            {/* Sidebar Body */}
            <div className="flex-1 overflow-y-auto divide-y divide-border scrollbar-hide">
                {/* DOM Hierarchy Section */}
                <section className="p-5 space-y-4">
                    <div className="flex items-center justify-between">
                        <h1 className="uppercase tracking-tighter font-black text-[12px] flex items-center gap-2">
                            <Layers className="w-3.5 h-3.5 text-primary" /> dom_hierarchy
                        </h1>
                    </div>

                    {!selectedElement || !elementTree ? (
                        <button
                            onClick={() => {
                                setInspectMode(true);
                            }}
                            className="w-full aspect-video border-2 border-dashed border-border rounded-xl flex flex-col items-center justify-center gap-3 hover:border-primary/50 hover:bg-primary/5 transition-all text-muted-foreground group relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            <div className="w-10 h-10 rounded-full bg-muted/50 flex items-center justify-center group-hover:scale-110 group-hover:bg-primary/10 transition-transform">
                                <Focus className="w-5 h-5 group-hover:text-primary transition-colors" />
                            </div>
                            <div className="text-center space-y-1">
                                <p className="text-[9px] uppercase font-black tracking-widest">Select an element</p>
                                <p className="text-[8px] opacity-60">Hover & click in the lab</p>
                            </div>
                        </button>
                    ) : (
                        <div className="space-y-1 pt-1">
                            {/* Parent */}
                            {elementTree.parent && (
                                <div
                                    onClick={() => elementTree.parent?.nodeId && onSelect(elementTree.parent.nodeId)}
                                    className="flex items-center gap-2 py-1 px-2 rounded-md text-muted-foreground hover:text-foreground transition-colors cursor-pointer group/node"
                                >
                                    <ChevronRight className="w-3 h-3 rotate-90 opacity-40 group-hover/node:opacity-100" />
                                    <span className="text-[9px] opacity-50">&lt;</span>
                                    <span>{elementTree.parent.tag}</span>
                                    {elementTree.parent.nodeId && <span className="text-yellow-500/50">#{elementTree.parent.nodeId}</span>}
                                    <span className="text-[9px] opacity-50">&gt;</span>
                                </div>
                            )}

                            {/* Neighbors (Siblings + Selected) */}
                            <div className={elementTree.parent ? "ml-4 border-l border-border/50 pl-2 space-y-1" : "space-y-1"}>
                                {/* Siblings Before + Selected + Siblings After */}
                                {elementTree.siblings.map((sib, i) => (
                                    <div
                                        key={`sib-${i}`}
                                        onClick={() => sib.nodeId && onSelect(sib.nodeId)}
                                        className="flex items-center gap-2 py-1 px-2 rounded-md text-muted-foreground hover:text-foreground transition-all cursor-pointer group/node"
                                    >
                                        <div className="w-3 h-3" />
                                        <span className="text-[9px] opacity-50">&lt;</span>
                                        <span>{sib.tag}</span>
                                        {sib.nodeId && <span className="text-yellow-500/50">#{sib.nodeId}</span>}
                                        <span className="text-[9px] opacity-50">&gt;</span>
                                    </div>
                                ))}

                                {/* Selected Element */}
                                <div className="flex items-center gap-2 py-2 px-3 rounded-lg bg-primary text-primary-foreground font-bold shadow-lg shadow-primary/20 relative group">
                                    <div className="absolute -left-[13px] top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary ring-2 ring-background" />
                                    <ChevronRight className="w-3.5 h-3.5" />
                                    <span className="opacity-60 text-[10px]">&lt;</span>
                                    <span>{elementTree.selected.tag}</span>
                                    {elementTree.selected.nodeId && <span className="text-yellow-200/90">#{elementTree.selected.nodeId}</span>}
                                    <span className="opacity-60 text-[10px]">&gt;</span>
                                </div>

                                {/* Children */}
                                {elementTree.children.length > 0 && (
                                    <div className="ml-6 border-l border-border/50 pl-3 pt-1 space-y-1">
                                        {elementTree.children.slice(0, 3).map((child, i) => (
                                            <div
                                                key={`child-${i}`}
                                                onClick={() => child.nodeId && onSelect(child.nodeId)}
                                                className="flex items-center gap-2 py-1 px-2 rounded-md text-muted-foreground hover:text-foreground transition-colors cursor-pointer group/node"
                                            >
                                                <ChevronRight className="w-3 h-3 opacity-40 group-hover/node:opacity-100" />
                                                <span className="text-[9px] opacity-50">&lt;</span>
                                                <span>{child.tag}</span>
                                                {child.nodeId && <span className="text-yellow-500/50">#{child.nodeId}</span>}
                                                <span className="text-[9px] opacity-50">&gt;</span>
                                            </div>
                                        ))}
                                        {elementTree.children.length > 3 && (
                                            <div className="text-[8px] text-muted-foreground/50 pl-8 uppercase font-bold tracking-widest py-1">
                                                + {elementTree.children.length - 3} more children
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                </section>

                {/* Properties Section */}
                <section className="p-5 space-y-5">
                    <div className="flex items-center justify-between">
                        <h2 className="uppercase tracking-tighter font-black text-[12px] flex items-center gap-2">
                            <Layout className="w-3.5 h-3.5 text-primary" /> properties
                        </h2>
                        <span className="text-[8px] px-1.5 py-0.5 rounded bg-muted font-bold text-muted-foreground tracking-widest">MODIFIABLE</span>
                    </div>

                    <div className="grid grid-cols-1 gap-6 pt-1">
                        {/* Width & Height Sliders */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-3">
                                <label className="text-[9px] text-muted-foreground font-black uppercase tracking-widest flex items-center justify-between">
                                    <span className="flex items-center gap-1.5"><Maximize className="w-3 h-3" /> Width</span>
                                    <span className="text-primary">{props.width}%</span>
                                </label>
                                <input
                                    type="range" min="10" max="100" value={props.width}
                                    onChange={(e) => handlePropChange('width', e.target.value)}
                                    className="w-full h-1 bg-muted rounded-lg appearance-none cursor-pointer accent-primary"
                                    disabled={!selectedElement}
                                />
                            </div>
                            <div className="space-y-3">
                                <label className="text-[9px] text-muted-foreground font-black uppercase tracking-widest flex items-center justify-between">
                                    <span className="flex items-center gap-1.5"><Maximize className="w-3 h-3 rotate-90" /> Height</span>
                                    <span className="text-primary">{props.height}%</span>
                                </label>
                                <input
                                    type="range" min="10" max="100" value={props.height}
                                    onChange={(e) => handlePropChange('height', e.target.value)}
                                    className="w-full h-1 bg-muted rounded-lg appearance-none cursor-pointer accent-primary"
                                    disabled={!selectedElement}
                                />
                            </div>
                        </div>

                        {/* Colors & Border */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-3">
                                <label className="text-[9px] text-muted-foreground font-black uppercase tracking-widest flex items-center justify-between">
                                    <span className="flex items-center gap-1.5"><Palette className="w-3 h-3" /> BG_Color</span>
                                </label>
                                <div className="flex items-center gap-2">
                                    <input
                                        type="color" value={props.bgColor}
                                        onChange={(e) => handlePropChange('bgColor', e.target.value)}
                                        className="w-8 h-8 rounded bg-transparent cursor-pointer border-none"
                                        disabled={!selectedElement}
                                    />
                                    <div className="flex-1 h-8 bg-muted/40 border border-border rounded flex items-center px-2 text-[9px] font-bold text-muted-foreground uppercase">
                                        {props.bgColor}
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-3">
                                <label className="text-[9px] text-muted-foreground font-black uppercase tracking-widest flex items-center justify-between">
                                    <span className="flex items-center gap-1.5"><Square className="w-3 h-3" /> Border</span>
                                </label>
                                <div className="flex items-center gap-2">
                                    <input
                                        type="number" min="0" max="24" value={props.borderW}
                                        onChange={(e) => handlePropChange('borderW', e.target.value)}
                                        className="w-12 h-8 bg-muted/40 border border-border rounded text-center text-[10px] font-bold text-foreground"
                                        disabled={!selectedElement}
                                    />
                                    <input
                                        type="color" value={props.borderColor}
                                        onChange={(e) => handlePropChange('borderColor', e.target.value)}
                                        className="w-8 h-8 rounded bg-transparent cursor-pointer border-none shrink-0"
                                        disabled={!selectedElement}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Padding & Radius Sliders */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-3">
                                <label className="text-[9px] text-muted-foreground font-black uppercase tracking-widest flex items-center justify-between">
                                    <span className="flex items-center gap-1.5"><Square className="w-3 h-3 scale-75" /> Padding</span>
                                    <span className="text-primary">{props.padding}px</span>
                                </label>
                                <input
                                    type="range" min="0" max="100" value={props.padding}
                                    onChange={(e) => handlePropChange('padding', e.target.value)}
                                    className="w-full h-1 bg-muted rounded-lg appearance-none cursor-pointer accent-primary"
                                    disabled={!selectedElement}
                                />
                            </div>
                            <div className="space-y-3">
                                <label className="text-[9px] text-muted-foreground font-black uppercase tracking-widest flex items-center justify-between">
                                    <span className="flex items-center gap-1.5"><Layout className="w-3 h-3" /> Radius</span>
                                </label>
                                <select
                                    value={props.radius}
                                    onChange={(e) => handlePropChange('radius', e.target.value)}
                                    className="w-full h-8 bg-muted/40 border border-border rounded px-2 text-[10px] font-bold text-foreground cursor-pointer outline-none focus:ring-1 focus:ring-primary"
                                    disabled={!selectedElement}
                                >
                                    <option value="none">none</option>
                                    <option value="sm">sm</option>
                                    <option value="md">md</option>
                                    <option value="lg">lg</option>
                                    <option value="xl">xl</option>
                                    <option value="2xl">2xl</option>
                                    <option value="3xl">3xl</option>
                                    <option value="full">full</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Tailwind Code Section */}
                <section className="p-5 space-y-4">
                    <div className="flex items-center justify-between">
                        <h3 className="uppercase tracking-tighter font-black text-[12px] flex items-center gap-2">
                            <Code2 className="w-3.5 h-3.5 text-primary" /> tailwind_code
                        </h3>
                    </div>

                    <div className="relative group">
                        <div className="absolute -inset-2 bg-primary/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                        <pre className="relative z-10 bg-muted/80 p-4 rounded-xl text-[10px] min-h-[70px] whitespace-pre-wrap break-all pr-12 leading-relaxed border border-border/50 text-foreground/80 font-bold overflow-hidden">
                            {getTailwindCode() || (selectedElement ? "// no classes" : "// no element selected")}
                        </pre>
                        {selectedElement && (
                            <button
                                onClick={handleCopy}
                                className={`absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg transition-all shadow-sm active:scale-95 z-50 ${copied
                                    ? "bg-green-500/20 text-green-500 border border-green-500/30"
                                    : "bg-primary/20 hover:bg-primary/30 text-primary border border-primary/20"
                                    }`}
                                title="Copy Tailwind Code"
                            >
                                {copied ? (
                                    <>
                                        <Check className="w-3.5 h-3.5" />
                                        <span className="text-[10px] font-bold uppercase transition-all">Copied</span>
                                    </>
                                ) : (
                                    <Copy className="w-3.5 h-3.5" />
                                )}
                            </button>
                        )}
                    </div>
                </section>
            </div>

            {/* Bottom Status */}
            <div className="p-4 border-t border-border bg-background-offset/20 shrink-0">
                <div className="flex items-center justify-between text-[8px] font-bold uppercase tracking-[0.2em] text-muted-foreground/40">
                    <span>Engine_Ready</span>
                    <span>v0.8.1-BETA</span>
                </div>
            </div>
        </div>
    );
}
