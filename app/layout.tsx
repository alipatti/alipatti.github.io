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
      <body className={karla.className + " bg-brown/10 text-gray-800"}>
        {/* NAVIGATION BAR */}
        <nav className="bg-lightgreen/10 px-6 py-3 font-mono text-lg">
          <ul className="flex items-baseline gap-10">
            <a href="/">
              <li>alipatti.com</li>
            </a>
            <a href="/blog">
              <li>blog</li>
            </a>
            <a href="http://github.com/alipatti">
              <li>github</li>
            </a>
            <a href="/cv.pdf">
              <li>cv</li>
            </a>
          </ul>
        </nav>

        {/* MAIN CONTENT */}
        {children}
      </body>
    </html>
  );
}
