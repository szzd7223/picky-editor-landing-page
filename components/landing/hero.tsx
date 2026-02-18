import { Button } from "@/components/ui/button";
import { ArrowRight, Terminal, Code2 } from "lucide-react";

export function Hero() {
    return (
        <section className="relative pt-20 pb-20 border-b border-border bg-[linear-gradient(to_right,#111111_1px,transparent_1px),linear-gradient(to_bottom,#111111_1px,transparent_1px)] bg-size-[40px_40px]">
            <div className="container relative mx-auto px-4 md:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-8">
                        <div className="inline-flex items-center gap-2 border border-primary/30 bg-primary/5 text-primary px-3 py-1 text-[10px] font-bold uppercase tracking-widest">
                            <Terminal className="h-3 w-3" />
                            <span>v0.1.0-beta // ready_for_deployment</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1]">
                            Refine your <span className="text-primary italic">workflow</span>.
                            <br />Export clean code.
                        </h1>

                        <p className="max-w-lg text-lg text-muted-foreground font-medium leading-relaxed">
                            A minimalist visual editor for modern developers.
                            Fine-tune layouts, extract assets, and get production-ready Tailwind code instantly.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                            <Button size="lg" className="h-12 px-8 rounded-none text-sm font-bold uppercase bg-primary text-background hover:opacity-90 transition-all">
                                Get Started
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                            <Button variant="outline" size="lg" className="h-12 px-8 rounded-none text-sm font-bold uppercase border-border hover:bg-muted transition-all">
                                View Documentation
                            </Button>
                        </div>

                        <div className="flex items-center gap-6 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                            <span className="flex items-center gap-1.5"><Code2 className="h-3.5 w-3.5 text-primary" /> React Components</span>
                            <span className="flex items-center gap-1.5"><Terminal className="h-3.5 w-3.5 text-primary" /> CLI Integrated</span>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="border border-border bg-card p-1 shadow-2xl">
                            <div className="relative aspect-video bg-[#050705] border border-border flex flex-col p-4 overflow-hidden">
                                <div className="flex items-center justify-between border-b border-border/50 pb-2 mb-4">
                                    <span className="text-[9px] font-bold uppercase text-primary/50 tracking-widest italic">{" >> "}system.terminal</span>
                                    <div className="flex gap-1.5">
                                        <div className="w-2 h-2 rounded-full bg-border" />
                                        <div className="w-2 h-2 rounded-full bg-border" />
                                        <div className="w-2 h-2 rounded-full bg-primary/40" />
                                    </div>
                                </div>
                                <div className="flex-1 border border-dashed border-border/30 flex flex-col items-center justify-center space-y-4">
                                    <div className="bg-background border border-border p-4 shadow-xl">
                                        <div className="flex items-center gap-3">
                                            <div className="h-8 w-8 bg-primary/20 flex items-center justify-center border border-primary/40">
                                                <Code2 className="h-4 w-4 text-primary" />
                                            </div>
                                            <div className="space-y-1">
                                                <div className="h-1.5 w-20 bg-primary/30" />
                                                <div className="h-1.5 w-12 bg-border" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-4 flex gap-1">
                                    <div className="h-1 w-full bg-border/20" />
                                    <div className="h-1 w-8 bg-primary/50" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
