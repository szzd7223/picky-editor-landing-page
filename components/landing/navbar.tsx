import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

export function Navbar() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-sm">
            <div className="container mx-auto flex h-14 items-center justify-between px-4 md:px-8">
                <Link href="/" className="flex items-center gap-3 group transition-opacity hover:opacity-80">
                    <Image
                        src="/logo.png"
                        alt="Picky.Editor Logo"
                        width={28}
                        height={28}
                        className="object-contain"
                    />
                    <span className="text-sm font-bold tracking-widest uppercase">
                        Picky.Editor
                    </span>
                </Link>

                <nav className="hidden md:flex items-center gap-8 mr-6">
                    <Link
                        href="/#demo"
                        className="text-xs font-bold uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors"
                    >
                        Live_Lab
                    </Link>

                    <Link
                        href="/#features"
                        className="text-xs font-bold uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors"
                    >
                        Features
                    </Link>

                    <Link
                        href="/#how-it-works"
                        className="text-xs font-bold uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors"
                    >
                        How_it_works
                    </Link>
                </nav>

                <nav className="flex items-center gap-6">
                    <Link
                        href="/documentation"
                        className="text-xs font-bold uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors"
                    >
                        Docs
                    </Link>
                    <Link
                        href="https://github.com/szzd7223/dev-css-picker"
                        target="_blank"
                        rel="noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                    >
                        <Github className="h-5 w-5" />
                        <span className="sr-only">GitHub</span>
                    </Link>
                    <Button
                        size="sm"
                        className="h-9 px-4 rounded-none font-bold uppercase transition-all border border-primary bg-transparent text-primary hover:bg-primary hover:text-background"
                    >
                        Install
                    </Button>
                </nav>
            </div>
        </header>
    );
}
