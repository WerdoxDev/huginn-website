import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
   return (
      <html lang="en" className="h-full">
         <title>Huginn</title>
         <meta property="og:image" content="https://huginn.dev/screenshot.png" />
         <meta property="og:image:alt" content="An image of the huginn website" />
         <meta property="og:image:width" content="1053" />
         <meta property="og:image:height" content="984" />
         <meta property="og:site_name" content="Huginn" />
         <meta property="og:type" content="object" />
         <meta property="og:title" content="Huginn - A feature complete chat application" />
         <meta property="og:url" content="https://huginn.dev" />
         <meta property="og:description" content="A hobby chat application" />
         <body className="h-full">{children}</body>
      </html>
   );
}
