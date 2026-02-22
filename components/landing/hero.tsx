import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code2 } from "lucide-react";
import { TerminalAnimation } from "./terminal-animation";

export function Hero() {
    return (
        <section className="relative pt-20 pb-20 border-b border-border bg-[linear-gradient(to_right,#111111_1px,transparent_1px),linear-gradient(to_bottom,#111111_1px,transparent_1px)] bg-size-[40px_40px]">
            <div className="container relative mx-auto px-4 md:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-8">
                        <div className="inline-flex items-center gap-2 border border-primary/30 bg-primary/5 text-primary px-3 py-1 text-[10px] font-bold uppercase tracking-widest">
                            <Image
                                src="/logo.png"
                                alt="Picky.Editor Logo"
                                width={14}
                                height={14}
                                className="object-contain"
                            />
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
                            <Button asChild size="lg" className="h-12 px-8 rounded-none text-sm font-bold uppercase bg-primary text-background hover:opacity-90 transition-all">
                                <Link href="https://github.com/szzd7223/dev-css-picker" target="_blank">
                                    Get Started
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                            <Button asChild variant="outline" size="lg" className="h-12 px-8 rounded-none text-sm font-bold uppercase border-border hover:bg-muted transition-all">
                                <Link href="/documentation">
                                    View Documentation
                                </Link>
                            </Button>
                        </div>

                        <div className="flex items-center gap-6 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                            <span className="flex items-center gap-1.5"><Code2 className="h-3.5 w-3.5 text-primary" /> React Components</span>
                            <span className="flex items-center gap-1.5">
                                <Image
                                    src="/logo.png"
                                    alt="Logo"
                                    width={14}
                                    height={14}
                                    className="object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all"
                                />
                                CLI Integrated
                            </span>
                        </div>
                    </div>

                    <div className="relative max-w-[400px] mx-auto w-full lg:max-w-none">
                        <div className="border border-border bg-card p-1 shadow-2xl">
                            <div className="relative aspect-[4/3] overflow-hidden">
                                <TerminalAnimation />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
