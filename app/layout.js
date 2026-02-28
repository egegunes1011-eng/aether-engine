import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

export const metadata = {
  title: "AETHER — The Experience Engine",
  description: "Describe what you want to feel. Neuroscience-powered AI music.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
