export function Workflow() {
    return (
        <section id="how-it-works" className="py-24 bg-background border-b border-border relative overflow-hidden">
            {/* Background elements to match features */}
            <div className="absolute top-1/4 -right-20 w-72 h-72 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-4 md:px-8 relative z-10">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-20 fade-in">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight uppercase bg-clip-text text-transparent bg-linear-to-b from-foreground to-foreground/70">
                        How_It_Works
                    </h2>
                    <p className="max-w-[700px] text-lg text-muted-foreground mt-4">
                        A quick peek under the hood. Here's how Picky.Editor magically reads and manipulates any website in real-time.
                    </p>
                    <div className="h-0.5 w-10 bg-primary/40 mt-4" />
                </div>

                <div className="max-w-4xl mx-auto space-y-12 md:space-y-16 relative">
                    {/* Vertical Line */}
                    <div className="absolute inset-0 left-6 md:left-1/2 h-full w-px bg-border/80 -z-10" />

                    {/* Step 1 */}
                    <div className="relative flex items-center gap-8 md:gap-0 md:justify-between group fade-in" style={{ animationDelay: "100ms" }}>
                        <div className="flex items-center justify-center w-12 h-12 border border-border bg-background-offset text-primary font-bold text-sm z-10 md:absolute md:left-1/2 md:-translate-x-1/2 shadow-[0_0_15px_rgba(var(--primary),0.1)] group-hover:scale-110 group-hover:bg-primary/10 transition-all duration-300">
                            01
                        </div>
                        <div className="w-full md:w-[calc(50%-4rem)] bg-background/50 backdrop-blur-sm border border-border p-6 rounded-xl hover:border-primary/40 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgb(255,255,255,0.03)] text-left">
                            <h3 className="font-bold text-sm md:text-base uppercase mb-2 tracking-widest text-primary">The Command Center</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                Once you open the clean <strong>React Side Panel</strong> and click "Inspect," the extension wakes up and sends a hidden message to the webpage you're currently viewing, telling it to prepare for scanning.
                            </p>
                        </div>
                        <div className="hidden md:flex w-[calc(50%-4rem)] items-center justify-start pl-8 opacity-50 text-xs font-mono text-muted-foreground">
                            {'{ action: "START_PICKING" }'}
                        </div>
                    </div>

                    {/* Step 2 */}
                    <div className="relative flex items-center gap-8 md:gap-0 md:justify-between md:flex-row-reverse group fade-in" style={{ animationDelay: "200ms" }}>
                        <div className="flex items-center justify-center w-12 h-12 border border-border bg-background-offset text-primary font-bold text-sm z-10 md:absolute md:left-1/2 md:-translate-x-1/2 shadow-[0_0_15px_rgba(var(--primary),0.1)] group-hover:scale-110 group-hover:bg-primary/10 transition-all duration-300">
                            02
                        </div>
                        <div className="w-full md:w-[calc(50%-4rem)] bg-background/50 backdrop-blur-sm border border-border p-6 rounded-xl hover:border-primary/40 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgb(255,255,255,0.03)] text-left">
                            <h3 className="font-bold text-sm md:text-base uppercase mb-2 tracking-widest text-primary">Invisible Helpers</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                Tiny <strong>Content Scripts</strong> are injected into the page. They follow your mouse, casting a neat shadow-box highlight over everything you hover. Using the Shadow DOM ensures they never accidentally break the site's layout!
                            </p>
                        </div>
                        <div className="hidden md:flex w-[calc(50%-4rem)] items-center justify-end pr-8 opacity-50 text-xs font-mono text-muted-foreground">
                            {'<div id="shadow-root"></div>'}
                        </div>
                    </div>

                    {/* Step 3 */}
                    <div className="relative flex items-center gap-8 md:gap-0 md:justify-between group fade-in" style={{ animationDelay: "300ms" }}>
                        <div className="flex items-center justify-center w-12 h-12 border border-border bg-background-offset text-primary font-bold text-sm z-10 md:absolute md:left-1/2 md:-translate-x-1/2 shadow-[0_0_15px_rgba(var(--primary),0.1)] group-hover:scale-110 group-hover:bg-primary/10 transition-all duration-300">
                            03
                        </div>
                        <div className="w-full md:w-[calc(50%-4rem)] bg-background/50 backdrop-blur-sm border border-border p-6 rounded-xl hover:border-primary/40 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgb(255,255,255,0.03)] text-left">
                            <h3 className="font-bold text-sm md:text-base uppercase mb-2 tracking-widest text-primary">The DOM Reader</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                Click an element, and our DOM Reader kicks in. It captures all the exact colors, fonts, and box models, instantly teleporting that raw CSS data back to your side panel so you can see exactly how it was built.
                            </p>
                        </div>
                        <div className="hidden md:flex w-[calc(50%-4rem)] items-center justify-start pl-8 opacity-50 text-xs font-mono text-muted-foreground">
                            {'window.getComputedStyle()'}
                        </div>
                    </div>

                    {/* Step 4 */}
                    <div className="relative flex items-center gap-8 md:gap-0 md:justify-between md:flex-row-reverse group fade-in" style={{ animationDelay: "400ms" }}>
                        <div className="flex items-center justify-center w-12 h-12 border border-border bg-background-offset text-primary font-bold text-sm z-10 md:absolute md:left-1/2 md:-translate-x-1/2 shadow-[0_0_15px_rgba(var(--primary),0.1)] group-hover:scale-110 group-hover:bg-primary/10 transition-all duration-300">
                            04
                        </div>
                        <div className="w-full md:w-[calc(50%-4rem)] bg-background/50 backdrop-blur-sm border border-border p-6 rounded-xl hover:border-primary/40 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgb(255,255,255,0.03)] text-left">
                            <h3 className="font-bold text-sm md:text-base uppercase mb-2 tracking-widest text-primary">Real-Time Magic</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                Tweak a layout setting in the panel, and the webpage updates instantly! A background tracker remembers the original state, so you can safely undo your changes. Close the panel, and the background worker ensures a clean exit.
                            </p>
                        </div>
                        <div className="hidden md:flex w-[calc(50%-4rem)] items-center justify-end pr-8 opacity-50 text-xs font-mono text-muted-foreground">
                            {'element.style.setProperty()'}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
