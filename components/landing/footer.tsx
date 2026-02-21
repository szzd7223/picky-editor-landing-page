import Link from "next/link";
import { Github, Twitter, Mail, Target } from "lucide-react";

export function Footer() {
    return (
        <footer className="border-t border-border/50 bg-background-offset/30 relative overflow-hidden pt-16 pb-8">
            {/* Background glowing effects */}
            <div className="absolute top-0 inset-x-0 h-px bg-linear-to-r from-transparent via-primary/30 to-transparent"></div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-32 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-4 md:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">
                    {/* Brand Section */}
                    <div className="col-span-1 md:col-span-2 space-y-4 text-center md:text-left">
                        <div className="flex items-center justify-center md:justify-start gap-2 text-xl font-bold tracking-tighter text-foreground">
                            <Target className="h-6 w-6 text-primary" />
                            <span>
                                Picky<span className="text-primary">.Editor</span>
                            </span>
                        </div>
                        <p className="text-muted-foreground text-sm leading-relaxed max-w-sm mx-auto md:mx-0">
                            The ultimate Chrome Extension for picking, inspecting, and editing CSS directly from your side panel. Make the web your playground!
                        </p>
                        <div className="flex items-center justify-center md:justify-start gap-4 pt-2">
                            <Link href="#" className="h-10 w-10 rounded-full border border-border/50 bg-background/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 hover:bg-primary/10 transition-all duration-300">
                                <Github className="h-5 w-5" />
                                <span className="sr-only">GitHub</span>
                            </Link>
                            <Link href="#" className="h-10 w-10 rounded-full border border-border/50 bg-background/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 hover:bg-primary/10 transition-all duration-300">
                                <Twitter className="h-5 w-5" />
                                <span className="sr-only">Twitter</span>
                            </Link>
                            <Link href="#" className="h-10 w-10 rounded-full border border-border/50 bg-background/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 hover:bg-primary/10 transition-all duration-300">
                                <Mail className="h-5 w-5" />
                                <span className="sr-only">Email</span>
                            </Link>
                        </div>
                    </div>

                    {/* Links Column 1 */}
                    <div className="space-y-4 text-center md:text-left">
                        <h4 className="font-bold text-sm tracking-widest uppercase text-foreground">Product</h4>
                        <ul className="space-y-3">
                            <li>
                                <Link href="#features" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                                    Features
                                </Link>
                            </li>
                            <li>
                                <Link href="#how-it-works" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                                    How it Works
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                                    Chrome Web Store
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Links Column 2 */}
                    <div className="space-y-4 text-center md:text-left">
                        <h4 className="font-bold text-sm tracking-widest uppercase text-foreground">Legal</h4>
                        <ul className="space-y-3">
                            <li>
                                <Link href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                                    Terms of Service
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-muted-foreground/60">
                    <p>
                        {`{ "status": "operational", "year": ${new Date().getFullYear()} }`}
                    </p>
                    <p className="flex items-center gap-1">
                        Designed with <span className="text-primary animate-pulse">♥</span> for developers.
                    </p>
                </div>
            </div>
        </footer>
    );
}
