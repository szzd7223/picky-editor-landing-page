import Link from "next/link";

export function Footer() {
    return (
        <footer className="border-t border-border bg-background py-10">
            <div className="container mx-auto px-4 md:px-8 flex flex-col items-center justify-between gap-6 md:flex-row uppercase font-bold text-[9px] tracking-[0.3em] opacity-60">
                <div className="flex flex-col items-center gap-4 md:flex-row md:gap-8">
                    <p>
                        SST_SYSTEMS // PICKY_ED © 2026
                    </p>
                    <div className="h-px w-6 bg-border hidden md:block" />
                    <p>
                        CORE_REFINEMENT_LOG
                    </p>
                </div>
                <div className="flex items-center gap-8 text-foreground transition-colors">
                    <Link href="#" className="hover:text-primary transition-colors">{" >> "}INF_OP</Link>
                    <Link href="#" className="hover:text-primary transition-colors">{" >> "}PRIV_LOG</Link>
                </div>
            </div>
        </footer>
    );
}
