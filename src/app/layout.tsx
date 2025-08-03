import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  title: "Fametonic",
  description: "Turn Social Media Into a Profitable Career",
  keywords: ["Fametonic", "social media", "content creation", "AI", "influencer", "career", "profitable"],
  authors: [{ name: "Fametonic Team" }],
  icons: {
    icon: "/logo.png",
  },
  openGraph: {
    title: "Fametonic ",
    description: "Turn Social Media Into a Profitable Career",
    url: "https://fametonic.com",
    siteName: "Fametonic",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fametonic",
    description: "Turn Social Media Into a Profitable Career",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        {children}
      </body>
    </html>
  );
}
