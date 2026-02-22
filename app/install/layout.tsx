import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Install Picky.Editor | Get Started",
    description: "Learn how to install Picky.Editor via the Chrome Web Store or manual developer mode setup.",
};

export default function InstallLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <section>{children}</section>;
}
