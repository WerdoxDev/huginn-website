import { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
   openGraph: {
      images: [
         { url: "https://huginn.dev/screenshot.png", alt: "An image of the huginn website", width: 1024, height: 1024 },
      ],
      siteName: "Huginn",
      type: "website",
      title: "Huginn - A feature complete chat application",
      url: "https://huginn.dev",
      description: "A hobby chat application",
   },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
   return (
      <html lang="en" className="h-full">
         <title>Huginn</title>
         <body className="h-full">{children}</body>
      </html>
   );
}
