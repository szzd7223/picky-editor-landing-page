import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Layers, Code, Box, Target } from "lucide-react";

export function BentoGrid() {
    return (
        <section className="py-24 border-b border-border bg-background-offset/50">
            <div className="container mx-auto px-4 md:px-8">
                <div className="flex flex-col items-center justify-center space-y-3 text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight uppercase">
                        Engine Capabilities
                    </h2>
                    <div className="h-1 w-12 bg-primary/40 mb-2" />
                    <p className="max-w-[600px] text-sm font-medium text-muted-foreground uppercase tracking-[0.2em]">
                        precision_logic // modular_design
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Card 1: DOM Hierarchy */}
                    <Card className="rounded-none border border-border bg-background hover:border-primary/50 transition-all group">
                        <CardHeader className="space-y-1">
                            <Layers className="h-5 w-5 text-primary/70 group-hover:text-primary transition-colors" />
                            <CardTitle className="uppercase font-bold text-sm tracking-widest">DOM_MAPPING</CardTitle>
                            <CardDescription className="uppercase text-[9px] font-medium opacity-60">Visual structure trace.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="h-20 border border-border/50 bg-background-offset flex items-center justify-center overflow-hidden">
                                <div className="flex flex-col gap-1.5 w-full p-4">
                                    <div className="h-1 w-2/3 bg-border" />
                                    <div className="h-1 w-full bg-primary/20" />
                                    <div className="h-1 w-1/3 bg-border" />
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Card 2: Visual Style Editing */}
                    <Card className="rounded-none border border-border bg-background hover:border-primary/50 transition-all group">
                        <CardHeader className="space-y-1">
                            <Target className="h-5 w-5 text-primary/70 group-hover:text-primary transition-colors" />
                            <CardTitle className="uppercase font-bold text-sm tracking-widest">NODE_REFINEMENT</CardTitle>
                            <CardDescription className="uppercase text-[9px] font-medium opacity-60">Precision style control.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="h-20 border border-border/50 bg-background-offset flex items-center justify-center p-4">
                                <div className="grid grid-cols-2 gap-3 w-full">
                                    <div className="h-3 bg-border" />
                                    <div className="h-3 bg-primary/20" />
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Card 3: Tailwind Export */}
                    <Card className="rounded-none border border-border bg-background hover:border-primary/50 transition-all group">
                        <CardHeader className="space-y-1">
                            <Code className="h-5 w-5 text-primary/70 group-hover:text-primary transition-colors" />
                            <CardTitle className="uppercase font-bold text-sm tracking-widest">PRODUCTION_OUTPUT</CardTitle>
                            <CardDescription className="uppercase text-[9px] font-medium opacity-60">Optimized tailwind code.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="h-20 border border-border/50 bg-background-offset flex items-center justify-center p-4">
                                <span className="text-[10px] font-mono text-primary/60 font-bold tracking-tight">{" >> "}codebase.v1</span>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Card 4 (Wide): Asset/Image Extraction */}
                    <Card className="md:col-span-3 rounded-none border border-border bg-background hover:border-primary/50 transition-all group">
                        <CardHeader className="flex flex-row items-center gap-6">
                            <div className="h-12 w-12 flex items-center justify-center border border-border bg-background-offset">
                                <Box className="h-6 w-6 text-primary/50 group-hover:text-primary transition-colors" />
                            </div>
                            <div>
                                <CardTitle className="uppercase font-bold text-lg tracking-widest">ASSET_HARVEST_ENGINE</CardTitle>
                                <CardDescription className="uppercase font-bold text-[10px] text-primary/60">Automated asset recovery system.</CardDescription>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="h-24 border border-border/30 bg-background-offset flex items-center justify-around opacity-60 group-hover:opacity-100 transition-opacity">
                                <div className="w-12 h-12 border border-border" />
                                <div className="w-12 h-12 border border-primary/30" />
                                <div className="w-12 h-12 border border-border" />
                                <div className="w-12 h-12 border border-primary/30" />
                                <div className="w-12 h-12 border border-border" />
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}
