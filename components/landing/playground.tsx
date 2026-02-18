export function Playground() {
    return (
        <section className="py-24 border-b border-border bg-background">
            <div className="container mx-auto px-4 md:px-8 space-y-16">
                <div className="text-center space-y-3 max-w-2xl mx-auto">
                    <h2 className="text-3xl font-bold tracking-tight uppercase">
                        Live_Lab
                    </h2>
                    <p className="text-sm font-medium uppercase text-muted-foreground tracking-widest">
                        no friction. just refinement.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row h-[550px] w-full border border-border bg-background-offset shadow-2xl">
                    {/* Web Preview Area (2/3) */}
                    <div className="w-full lg:w-2/3 bg-background-offset p-3 border-b lg:border-b-0 lg:border-r border-border relative">
                        <div className="h-full w-full border border-border/50 bg-[#050705] flex items-center justify-center">
                            <div className="absolute inset-0 opacity-[0.05] pointer-events-none"
                                style={{ backgroundImage: 'radial-gradient(#2ECC71 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
                            <span className="text-primary font-bold text-xs uppercase tracking-[0.5em] opacity-30">PREVIEW_ENGINE</span>
                        </div>
                    </div>

                    {/* PickyEditor Sidebar (1/3) */}
                    <div className="w-full lg:w-1/3 bg-background p-6 border-l-0 lg:border-l border-border">
                        <div className="h-full w-full flex flex-col border border-border bg-background-offset p-4 space-y-6">
                            <div className="flex items-center gap-2 border-b border-border/50 pb-3">
                                <div className="h-2 w-2 rounded-full bg-primary/50" />
                                <span className="text-[10px] font-bold uppercase text-muted-foreground tracking-widest">CONTROL_PANEL_v0.1</span>
                            </div>
                            <div className="flex-1 flex flex-col items-center justify-center border border-dashed border-border/30 space-y-2 opacity-40">
                                <div className="h-px w-8 bg-primary/40" />
                                <span className="text-[9px] font-bold uppercase tracking-widest text-center">
                                    sys.controls.locked
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
