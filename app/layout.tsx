import "./globals.css";

export const metadata = {
  title: "Akshansh | Backend Engineer",
  description: "Portfolio of Akshansh",
};

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode;
}) {
  return (
      <html lang="en">
      <body>{children}</body>
      </html>
  );
}