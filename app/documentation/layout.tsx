import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Documentation | Picky.Editor",
    description: "Learn about the architecture and technical logic behind Picky.Editor, the ultimate CSS inspector and editor.",
};

export default function DocumentationLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
