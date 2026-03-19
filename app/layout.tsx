import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "WealthUp – Plan Your Life Goals",
  description: "WealthUp helps you achieve goals through personalised goal based investing.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-wu-gradient min-h-screen">{children}</body>
    </html>
  );
}
