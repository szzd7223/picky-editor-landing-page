"use client";

import React from "react";
import { DemoSite } from "./demo-site";
import { ExtensionSidebar } from "./extension-sidebar";

export interface NodeInfo {
    tag: string;
    nodeId: string | null;
    classNames: string;
}

export interface TreeInfo {
    selected: NodeInfo;
    parent: NodeInfo | null;
    children: NodeInfo[];
    siblings: NodeInfo[];
}

export function Playground() {
    const [inspectMode, setInspectMode] = React.useState(false);
    const [selectedElement, setSelectedElement] = React.useState<string | null>(null);
    const [elementTree, setElementTree] = React.useState<TreeInfo | null>(null);

    // customStyles now holds both the inline style object for React rendering
    // and a dict of injected classes for accurate code export.
    const [customStyles, setCustomStyles] = React.useState<Record<string, { inline: React.CSSProperties, classes: Record<string, string> }>>({});

    const handleInspectToggle = (val: boolean) => {
        setInspectMode(val);
        if (!val) {
            setSelectedElement(null);
            setElementTree(null);
        }
    };

    const extractNodeInfo = (el: HTMLElement): NodeInfo => ({
        tag: el.tagName.toLowerCase(),
        nodeId: el.getAttribute("data-node-id"),
        classNames: el.className
    });

    const handleSelect = (input: HTMLElement | string | null) => {
        if (!input) {
            setSelectedElement(null);
            setElementTree(null);
            return;
        }

        let el: HTMLElement | null = null;
        if (typeof input === 'string') {
            el = document.querySelector(`[data-node-id="${input}"]`) as HTMLElement;
        } else {
            el = input;
        }

        if (!el) return;

        const nodeId = el.getAttribute("data-node-id");
        setSelectedElement(nodeId);

        const info: TreeInfo = {
            selected: extractNodeInfo(el),
            parent: el.parentElement && el.parentElement.closest('#demo') === el.closest('#demo')?.parentElement ? null : (el.parentElement && !el.parentElement.id.includes('demo') ? extractNodeInfo(el.parentElement as HTMLElement) : null),
            children: Array.from(el.children).map(child => extractNodeInfo(child as HTMLElement)),
            siblings: el.parentElement
                ? Array.from(el.parentElement.children)
                    .filter(child => child !== el)
                    .map(sibling => extractNodeInfo(sibling as HTMLElement))
                    .slice(0, 4)
                : []
        };

        setElementTree(info);
    };

    const updateProperty = (property: string, tailwindClass: string, inlineStyleKey: string, inlineStyleValue: string) => {
        if (!selectedElement) return;

        setCustomStyles(prev => {
            const currentElementStyles = prev[selectedElement] || { inline: {}, classes: {} };
            return {
                ...prev,
                [selectedElement]: {
                    inline: {
                        ...currentElementStyles.inline,
                        [inlineStyleKey]: inlineStyleValue
                    },
                    classes: {
                        ...currentElementStyles.classes,
                        [property]: tailwindClass
                    }
                }
            };
        });

        // We don't need to refresh the absolute real DOM tree here anymore 
        // since React is driving the styles, but doing it ensures class names are in sync.
        // Wait a tick for React to render the new class before extracting.
        setTimeout(() => {
            const el = document.querySelector(`[data-node-id="${selectedElement}"]`) as HTMLElement;
            if (el) {
                setElementTree(prev => prev ? { ...prev, selected: extractNodeInfo(el) } : null);
            }
        }, 0);
    };

    return (
        <section id="demo" className="py-24 border-b border-border bg-background overflow-hidden relative">
            <div className="container mx-auto px-4 md:px-8 space-y-12">
                <div className="text-center space-y-3 max-w-2xl mx-auto">
                    <h2 className="text-3xl font-bold tracking-tight uppercase">
                        Live_Lab
                    </h2>
                    <p className="text-sm font-medium uppercase text-muted-foreground tracking-widest">
                        Experience Picky_Editor in action.
                    </p>
                </div>

                <div className="relative h-[720px] w-full border border-border bg-background-offset/30 shadow-2xl rounded-2xl overflow-hidden flex backdrop-blur-sm group">
                    {/* Grid Background */}
                    <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                        style={{
                            backgroundImage: 'linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)',
                            backgroundSize: '40px 40px'
                        }} />

                    {/* Demo Website Area */}
                    <div className="flex-1 relative overflow-hidden bg-white/5 dark:bg-black/20 m-2 rounded-xl border border-border/50">
                        <div className="absolute inset-0 overflow-auto">
                            <DemoSite
                                inspectMode={inspectMode}
                                selectedElement={selectedElement}
                                onSelect={handleSelect}
                                customStyles={customStyles}
                            />
                        </div>
                    </div>

                    {/* Extension Sidebar Overlay/Side */}
                    <div className="relative z-20 shrink-0">
                        <ExtensionSidebar
                            inspectMode={inspectMode}
                            setInspectMode={handleInspectToggle}
                            selectedElement={selectedElement}
                            elementTree={elementTree}
                            customStyles={customStyles}
                            onSelect={handleSelect}
                            onUpdateProperty={updateProperty}
                        />
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
