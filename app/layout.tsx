import "./globals.css";
import { Karla } from "next/font/google";

export const metadata = {
  title: "Alistair Pattison — alipatti.com",
};

const karla = Karla({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={karla.className}>{children}</body>
    </html>
  );
}
