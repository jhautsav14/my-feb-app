import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>💘 Quick Date</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
