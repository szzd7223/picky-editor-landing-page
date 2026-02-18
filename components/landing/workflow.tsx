export function Workflow() {
    return (
        <section className="py-24 bg-background border-b border-border">
            <div className="container mx-auto px-4 md:px-8">
                <div className="flex flex-col items-center justify-center space-y-3 text-center mb-20">
                    <h2 className="text-3xl font-bold tracking-tight uppercase">
                        System_Logic
                    </h2>
                    <div className="h-0.5 w-10 bg-primary/40" />
                </div>

                <div className="max-w-3xl mx-auto space-y-12 relative">
                    {/* Vertical Line */}
                    <div className="absolute inset-0 left-6 md:left-1/2 h-full w-px bg-border -z-10" />

                    {/* Step 1 */}
                    <div className="relative flex items-center gap-8 md:gap-0 md:justify-between md:odd:flex-row-reverse group">
                        <div className="flex items-center justify-center w-12 h-12 border border-border bg-background-offset text-primary font-bold text-sm z-10 md:absolute md:left-1/2 md:-translate-x-1/2 shadow-lg">
                            01
                        </div>
                        <div className="w-full md:w-[calc(50%-3rem)] bg-background border border-border p-6 hover:border-primary/40 transition-all">
                            <h3 className="font-bold text-sm uppercase mb-2 tracking-widest text-primary">INITIAL_LOAD</h3>
                            <p className="text-muted-foreground font-medium text-xs leading-relaxed uppercase opacity-80">Ingest source files. Build dependency graph.</p>
                        </div>
                        <div className="hidden md:block w-[calc(50%-3rem)]" />
                    </div>

                    {/* Step 2 */}
                    <div className="relative flex items-center gap-8 md:gap-0 md:justify-between md:odd:flex-row-reverse group">
                        <div className="flex items-center justify-center w-12 h-12 border border-border bg-background-offset text-primary font-bold text-sm z-10 md:absolute md:left-1/2 md:-translate-x-1/2 shadow-lg">
                            02
                        </div>
                        <div className="w-full md:w-[calc(50%-3rem)] bg-background border border-border p-6 hover:border-primary/40 transition-all">
                            <h3 className="font-bold text-sm uppercase mb-2 tracking-widest text-primary">VISUAL_EDIT</h3>
                            <p className="text-muted-foreground font-medium text-xs leading-relaxed uppercase opacity-80">Manipulate abstract syntax trees via visual proxy.</p>
                        </div>
                        <div className="hidden md:block w-[calc(50%-3rem)]" />
                    </div>

                    {/* Step 3 */}
                    <div className="relative flex items-center gap-8 md:gap-0 md:justify-between md:odd:flex-row-reverse group">
                        <div className="flex items-center justify-center w-12 h-12 border border-border bg-background-offset text-primary font-bold text-sm z-10 md:absolute md:left-1/2 md:-translate-x-1/2 shadow-lg">
                            03
                        </div>
                        <div className="w-full md:w-[calc(50%-3rem)] bg-background border border-border p-6 hover:border-primary/40 transition-all">
                            <h3 className="font-bold text-sm uppercase mb-2 tracking-widest text-primary">SYNC_EXPORT</h3>
                            <p className="text-muted-foreground font-medium text-xs leading-relaxed uppercase opacity-80">Reconcile changes. emit high-fidelity source code.</p>
                        </div>
                        <div className="hidden md:block w-[calc(50%-3rem)]" />
                    </div>
                </div>
            </div>
        </section>
    );
}
