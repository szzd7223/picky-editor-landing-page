import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Github, Terminal } from "lucide-react";

export function Navbar() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-sm">
            <div className="container mx-auto flex h-14 items-center justify-between px-4 md:px-8">
                <Link href="/" className="flex items-center gap-2 group transition-opacity hover:opacity-80">
                    <Terminal className="h-5 w-5 text-primary stroke-[2px]" />
                    <span className="text-sm font-bold tracking-widest uppercase">
                        Picky.Editor
                    </span>
                </Link>

                <nav className="flex items-center gap-4">
                    <Link
                        href="https://github.com"
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
