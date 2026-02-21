import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Target, Sliders, ScanSearch, Image as ImageIcon, RotateCcw, PanelRight } from "lucide-react";

export function Features() {
    return (
        <section id="features" className="py-24 border-b border-border bg-background-offset/30 relative overflow-hidden">
            {/* Background glowing effects */}
            <div className="absolute top-0 inset-x-0 h-px bg-linear-to-r from-transparent via-primary/20 to-transparent"></div>
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-4 md:px-8 relative z-10">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16 fade-in">
                    <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-2 shadow-[0_0_15px_rgba(var(--primary),0.1)]">
                        <Target className="mr-2 h-4 w-4" />
                        Next-Gen CSS Editing
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-linear-to-b from-foreground to-foreground/70">
                        Features
                    </h2>
                    <p className="max-w-[700px] text-lg text-muted-foreground mt-4">
                        A complete toolkit designed to inspect, edit, and extract website designs directly from your browser's side panel.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Feature 1 */}
                    <Card className="rounded-xl border border-border/50 bg-background/50 backdrop-blur-sm hover:bg-background-offset/50 hover:border-primary/40 transition-all duration-500 group hover:-translate-y-1 hover:shadow-[0_8px_30px_rgb(255,255,255,0.03)] cursor-default">
                        <CardHeader className="space-y-4">
                            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/20 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-500">
                                <Target className="h-6 w-6 text-primary" />
                            </div>
                            <CardTitle className="text-xl">Precision Element Picker</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <CardDescription className="text-sm md:text-base leading-relaxed">
                                Instantly inspect any DOM element with a single click. A non-intrusive highlight box perfectly frames elements, displaying layout type and dimensions in real-time.
                            </CardDescription>
                        </CardContent>
                    </Card>

                    {/* Feature 2 */}
                    <Card className="rounded-xl border border-border/50 bg-background/50 backdrop-blur-sm hover:bg-background-offset/50 hover:border-primary/40 transition-all duration-500 group hover:-translate-y-1 hover:shadow-[0_8px_30px_rgb(255,255,255,0.03)] cursor-default">
                        <CardHeader className="space-y-4">
                            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/20 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-500">
                                <Sliders className="h-6 w-6 text-primary" />
                            </div>
                            <CardTitle className="text-xl">Real-Time CSS Editing</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <CardDescription className="text-sm md:text-base leading-relaxed">
                                Adjust layouts, typography, spacing, and colors on the fly directly from the Chrome Side Panel. See your design changes immediately applied to the live webpage.
                            </CardDescription>
                        </CardContent>
                    </Card>

                    {/* Feature 3 */}
                    <Card className="rounded-xl border border-border/50 bg-background/50 backdrop-blur-sm hover:bg-background-offset/50 hover:border-primary/40 transition-all duration-500 group hover:-translate-y-1 hover:shadow-[0_8px_30px_rgb(255,255,255,0.03)] cursor-default">
                        <CardHeader className="space-y-4">
                            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/20 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-500">
                                <ScanSearch className="h-6 w-6 text-primary" />
                            </div>
                            <CardTitle className="text-xl">Intelligent Site Scanning</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <CardDescription className="text-sm md:text-base leading-relaxed">
                                Extract the entire design system of any website in seconds. With one click, automatically pull the most frequently used font families, text colors, and background palettes.
                            </CardDescription>
                        </CardContent>
                    </Card>

                    {/* Feature 4 */}
                    <Card className="rounded-xl border border-border/50 bg-background/50 backdrop-blur-sm hover:bg-background-offset/50 hover:border-primary/40 transition-all duration-500 group hover:-translate-y-1 hover:shadow-[0_8px_30px_rgb(255,255,255,0.03)] cursor-default">
                        <CardHeader className="space-y-4">
                            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/20 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-500">
                                <ImageIcon className="h-6 w-6 text-primary" />
                            </div>
                            <CardTitle className="text-xl">Instant Asset Extraction</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <CardDescription className="text-sm md:text-base leading-relaxed">
                                Quickly pinpoint and extract embedded images, background visuals, and inline SVGs. Instantly view their exact rendered sizes and computed properties.
                            </CardDescription>
                        </CardContent>
                    </Card>

                    {/* Feature 5 */}
                    <Card className="rounded-xl border border-border/50 bg-background/50 backdrop-blur-sm hover:bg-background-offset/50 hover:border-primary/40 transition-all duration-500 group hover:-translate-y-1 hover:shadow-[0_8px_30px_rgb(255,255,255,0.03)] cursor-default">
                        <CardHeader className="space-y-4">
                            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/20 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-500">
                                <RotateCcw className="h-6 w-6 text-primary" />
                            </div>
                            <CardTitle className="text-xl">Non-Destructive Experimentation</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <CardDescription className="text-sm md:text-base leading-relaxed">
                                Play around with CSS properties with complete confidence. Picky.Editor automatically tracks original element states, allowing you to freely experiment and instantly revert your changes.
                            </CardDescription>
                        </CardContent>
                    </Card>

                    {/* Feature 6 */}
                    <Card className="rounded-xl border border-border/50 bg-background/50 backdrop-blur-sm hover:bg-background-offset/50 hover:border-primary/40 transition-all duration-500 group hover:-translate-y-1 hover:shadow-[0_8px_30px_rgb(255,255,255,0.03)] cursor-default">
                        <CardHeader className="space-y-4">
                            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/20 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-500">
                                <PanelRight className="h-6 w-6 text-primary" />
                            </div>
                            <CardTitle className="text-xl">Native Side Panel Workspace</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <CardDescription className="text-sm md:text-base leading-relaxed">
                                Designed specifically for modern browser workflows. Picky.Editor lives inside Chrome's native Side Panel, providing a dedicated interface that never covers the webpage you're inspecting.
                            </CardDescription>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}
