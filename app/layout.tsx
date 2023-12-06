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
      <body className={karla.className + " bg-brown/10 text-gray-800 dark:text-gray-100 dark:bg-gray-800"}>
        {/* NAVIGATION BAR */}
        <nav className="bg-lightgreen/10 px-6 py-3 font-mono text-lg">
          <ul className="flex items-baseline gap-10">
            <a href="/">
              <li>alipatti.com</li>
            </a>
          </ul>
        </nav>

        {/* MAIN CONTENT */}
        {children}
      </body>
    </html>
  );
}
