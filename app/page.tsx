import { Navbar } from "@/components/landing/navbar";
import { Hero } from "@/components/landing/hero";
import { Playground } from "@/components/landing/playground";
import { BentoGrid } from "@/components/landing/bento-grid";
import { Workflow } from "@/components/landing/workflow";
import { Footer } from "@/components/landing/footer";

export default function LandingPage() {
    return (
        <div className="min-h-screen bg-background font-sans antialiased">
            <Navbar />
            <main className="flex-1">
                <Hero />
                <Playground />
                <BentoGrid />
                <Workflow />
            </main>
            <Footer />
        </div>
    );
}