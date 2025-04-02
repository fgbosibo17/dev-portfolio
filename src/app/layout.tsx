import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fope Gbosibo - Dev Portfolio",
  description: "Portfolio showcasing development projects and experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
