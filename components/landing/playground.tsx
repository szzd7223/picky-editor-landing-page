"use client";

import { useState } from "react";
import { DemoSite } from "./demo-site";
import { ExtensionSidebar } from "./extension-sidebar";

export function Playground() {
    const [padding, setPadding] = useState(32);
    const [bgColor, setBgColor] = useState("#0f172a"); // slate-900 as default
    const [borderRadius, setBorderRadius] = useState(16);

    return (
        <section id="demo" className="py-24 border-b border-border bg-background">
            <div className="container mx-auto px-4 md:px-8 space-y-16">
                <div className="text-center space-y-3 max-w-2xl mx-auto">
                    <h2 className="text-3xl font-bold tracking-tight uppercase">
                        Live_Lab
                    </h2>
                    <p className="text-sm font-medium uppercase text-muted-foreground tracking-widest">
                        no friction. just refinement.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row h-[800px] w-full border border-border bg-background-offset shadow-2xl rounded-xl overflow-hidden">
                    {/* Web Preview Area (2/3) */}
                    <div className="w-full lg:w-2/3 bg-background-offset p-4 border-b lg:border-b-0 lg:border-r border-border relative overflow-hidden flex flex-col">
                        <div className="h-full w-full border border-border/50 bg-background relative flex flex-col shadow-2xl overflow-hidden rounded-lg">
                            {/* Browser Top Bar Mockup */}
                            <div className="h-10 border-b border-border bg-muted/30 flex items-center justify-between px-4 shrink-0">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-border hover:bg-red-500/50 transition-colors" />
                                    <div className="w-3 h-3 rounded-full bg-border hover:bg-yellow-500/50 transition-colors" />
                                    <div className="w-3 h-3 rounded-full bg-border hover:bg-green-500/50 transition-colors" />
                                </div>
                                <div className="h-6 w-1/2 bg-background border border-border rounded-md mx-auto flex items-center px-3 shadow-inner">
                                    <div className="w-2.5 h-2.5 rounded-full bg-primary/20 mr-2" />
                                    <div className="h-1.5 w-32 bg-muted-foreground/20 rounded-full" />
                                </div>
                            </div>

                            <div className="flex-1 relative overflow-auto bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-[length:240px_240px]">
                                <DemoSite
                                    padding={padding}
                                    bgColor={bgColor}
                                    borderRadius={borderRadius}
                                />
                            </div>
                        </div>
                    </div>

                    {/* PickyEditor Sidebar (1/3) */}
                    <div className="w-full lg:w-[400px] bg-background p-0 border-none shrink-0 border-l-0 lg:border-l lg:border-border">
                        <ExtensionSidebar
                            padding={padding}
                            setPadding={setPadding}
                            bgColor={bgColor}
                            setBgColor={setBgColor}
                            borderRadius={borderRadius}
                            setBorderRadius={setBorderRadius}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
