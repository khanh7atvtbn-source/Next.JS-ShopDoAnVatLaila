import "./globals.css";

export const metadata = {
  title: "Next.js LAN",
  description: "Deploy Next.js on Ubuntu LAN",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}

