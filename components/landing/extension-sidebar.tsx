"use client";

import React, { useState } from "react";
import { Copy, Check, ChevronDown, ChevronRight, Monitor, Smartphone, Tablet } from "lucide-react";

interface ExtensionSidebarProps {
    padding: number;
    setPadding: (val: number) => void;
    bgColor: string;
    setBgColor: (val: string) => void;
    borderRadius: number;
    setBorderRadius: (val: number) => void;
}

export function ExtensionSidebar({
    padding,
    setPadding,
    bgColor,
    setBgColor,
    borderRadius,
    setBorderRadius,
}: ExtensionSidebarProps) {
    const [copied, setCopied] = useState(false);
    const [activeDevice, setActiveDevice] = useState<"mobile" | "tablet" | "desktop">("desktop");

    // Basic RGB conversion for the display (mocking actual extraction)
    const hexToRgb = (hex: string) => {
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ?
            `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}`
            : "255, 255, 255";
    };

    const copyToClipboard = () => {
        const tailwindClass = `bg-[${bgColor}] p-[${padding}px] rounded-[${borderRadius}px]`;
        navigator.clipboard.writeText(tailwindClass);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="h-full w-full bg-[#09090b] text-[#fafafa] flex flex-col font-mono text-xs overflow-y-auto border border-border/50 rounded-xl overflow-hidden shadow-2xl relative select-none">

            {/* Top Header - Inspect Mode */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-[#27272a] bg-[#09090b] sticky top-0 z-10">
                <div className="flex items-center gap-3">
                    <div className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" defaultChecked />
                        <div className="w-9 h-5 bg-[#27272a] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-white after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-emerald-500"></div>
                    </div>
                    <span className="font-semibold text-sm tracking-tight text-white">Inspect Mode</span>
                </div>

                <div className="flex items-center gap-1 bg-[#18181b] p-1 rounded-md border border-[#27272a]">
                    <button
                        onClick={() => setActiveDevice("mobile")}
                        className={`p-1.5 rounded-sm transition-colors ${activeDevice === "mobile" ? "bg-[#27272a] text-white" : "text-[#a1a1aa] hover:text-white"}`}>
                        <Smartphone className="w-3.5 h-3.5" />
                    </button>
                    <button
                        onClick={() => setActiveDevice("tablet")}
                        className={`p-1.5 rounded-sm transition-colors ${activeDevice === "tablet" ? "bg-[#27272a] text-white" : "text-[#a1a1aa] hover:text-white"}`}>
                        <Tablet className="w-3.5 h-3.5" />
                    </button>
                    <button
                        onClick={() => setActiveDevice("desktop")}
                        className={`p-1.5 rounded-sm transition-colors ${activeDevice === "desktop" ? "bg-[#27272a] text-white" : "text-[#a1a1aa] hover:text-white"}`}>
                        <Monitor className="w-3.5 h-3.5" />
                    </button>
                </div>
            </div>

            <div className="p-4 space-y-6">

                {/* URL section */}
                <div className="space-y-1">
                    <h2 className="text-xl font-bold text-white tracking-tight">Demo Site</h2>
                    <div className="flex items-center gap-2 text-emerald-500 text-[11px] hover:underline cursor-pointer">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        <span className="truncate">localhost:3000/demo</span>
                    </div>
                </div>

                {/* DOM Hierarchy */}
                <div className="space-y-3">
                    <div className="flex justify-between items-center text-[#a1a1aa]">
                        <h3 className="font-bold text-sm text-white">DOM Hierarchy</h3>
                        <span className="text-[10px] px-2 py-1 rounded border border-[#27272a] hover:bg-[#18181b] cursor-pointer">Shallow View</span>
                    </div>
                    <div className="bg-[#18181b] border border-[#27272a] rounded-lg p-3 space-y-2 font-mono text-[11px]">
                        <div className="flex items-center gap-2 text-[#a1a1aa]">
                            <ChevronRight className="w-3 h-3" />
                            <span className="text-emerald-400">{"<body>"}</span>
                            <span className="truncate opacity-50">..__className_24d...</span>
                        </div>
                        <div className="flex items-center gap-2 text-[#a1a1aa] pl-4">
                            <ChevronRight className="w-3 h-3" />
                            <span className="text-emerald-400">{"<div>"}</span>
                            <span className="truncate opacity-50">..w-full..min-h-...</span>
                        </div>
                        <div className="flex items-center justify-between text-[#a1a1aa] pl-8 bg-[#27272a]/50 p-1.5 rounded border border-[#3f3f46]">
                            <div className="flex items-center gap-2">
                                <ChevronDown className="w-3 h-3 text-white" />
                                <span className="text-emerald-400 font-bold">{"<div>"}</span>
                                <span className="truncate opacity-80 text-white">..bg-[{bgColor}]..p-[{padding}...</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Colors Section */}
                <div className="space-y-3">
                    <div className="flex justify-between items-center text-[#a1a1aa]">
                        <h3 className="font-bold text-sm text-white">Extracted Colors</h3>
                        <button className="text-[10px] text-emerald-500 font-bold hover:text-emerald-400">COPY ALL</button>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                        <div className="bg-[#18181b] border border-[#27272a] rounded-lg p-3 flex items-center gap-3">
                            <div className="w-8 h-8 rounded shrink-0 border border-[#3f3f46]" style={{ backgroundColor: bgColor }} />
                            <div className="overflow-hidden">
                                <div className="font-bold text-white uppercase truncate">{bgColor}</div>
                                <div className="text-[9px] text-[#a1a1aa] tracking-widest uppercase">Target</div>
                            </div>
                        </div>
                        <div className="bg-[#18181b] border border-[#27272a] rounded-lg p-3 flex items-center gap-3">
                            <div className="w-8 h-8 rounded shrink-0 border border-[#3f3f46]" style={{ backgroundColor: "#09090b" }} />
                            <div className="overflow-hidden">
                                <div className="font-bold text-white uppercase truncate">#09090b</div>
                                <div className="text-[9px] text-[#a1a1aa] tracking-widest uppercase">Background</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Spacing & Layout Controls */}
                <div className="space-y-3">
                    <div className="flex items-center gap-2 text-[#a1a1aa]">
                        <div className="w-3 h-3 border border-current rounded-[2px]" />
                        <h3 className="font-bold text-sm text-white">Spacing & Layout</h3>
                    </div>

                    <div className="bg-[#18181b] border border-[#27272a] rounded-lg p-4 space-y-5">

                        {/* Padding Control */}
                        <div className="space-y-3">
                            <div className="flex justify-between items-center">
                                <label className="text-[10px] font-bold text-[#a1a1aa] uppercase tracking-widest">Padding</label>
                                <div className="flex items-center gap-1 bg-[#09090b] border border-[#27272a] rounded px-2 py-1 text-white">
                                    <span>{padding}</span>
                                    <span className="text-[#a1a1aa] text-[9px]">px</span>
                                </div>
                            </div>
                            <input
                                type="range"
                                min="0"
                                max="64"
                                value={padding}
                                onChange={(e) => setPadding(Number(e.target.value))}
                                className="w-full h-1 bg-[#27272a] rounded-lg appearance-none cursor-pointer accent-emerald-500"
                            />
                        </div>

                        {/* Border Radius Control */}
                        <div className="space-y-3">
                            <div className="flex justify-between items-center">
                                <label className="text-[10px] font-bold text-[#a1a1aa] uppercase tracking-widest">Border Radius</label>
                                <div className="flex items-center gap-1 bg-[#09090b] border border-[#27272a] rounded px-2 py-1 text-white">
                                    <span>{borderRadius}</span>
                                    <span className="text-[#a1a1aa] text-[9px]">px</span>
                                </div>
                            </div>
                            <input
                                type="range"
                                min="0"
                                max="48"
                                value={borderRadius}
                                onChange={(e) => setBorderRadius(Number(e.target.value))}
                                className="w-full h-1 bg-[#27272a] rounded-lg appearance-none cursor-pointer accent-emerald-500"
                            />
                        </div>

                        {/* Color Control */}
                        <div className="space-y-3">
                            <div className="flex justify-between items-center">
                                <label className="text-[10px] font-bold text-[#a1a1aa] uppercase tracking-widest">Background</label>
                                <div className="flex items-center gap-2 bg-[#09090b] border border-[#27272a] rounded px-2 py-1">
                                    <div className="w-3 h-3 rounded-sm border border-[#3f3f46]" style={{ backgroundColor: bgColor }} />
                                    <input
                                        type="text"
                                        value={bgColor}
                                        onChange={(e) => setBgColor(e.target.value)}
                                        className="bg-transparent border-none outline-none w-16 text-white text-xs uppercase"
                                    />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Code Export */}
                <div className="space-y-3">
                    <h3 className="font-bold text-sm text-white">Tailwind Export</h3>
                    <div className="relative group">
                        <div className="bg-[#18181b] border border-[#27272a] rounded-lg p-3 pr-10 text-emerald-400 font-mono text-[11px] leading-relaxed break-all">
                            bg-[{bgColor}] p-[{padding}px] rounded-[{borderRadius}px] shadow-xl border border-border flex flex-col items-center justify-center transition-all duration-200
                        </div>
                        <button
                            onClick={copyToClipboard}
                            className="absolute right-2 top-2 p-1.5 rounded-md text-[#a1a1aa] hover:text-white hover:bg-[#27272a] transition-colors"
                            title="Copy classes"
                        >
                            {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
}
