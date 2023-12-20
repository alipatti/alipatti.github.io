import "./globals.css";
import { Karla } from "next/font/google";

export const metadata = {
  title: "Alistair Pattison — alipatti.com",
};

const karla = Karla({
  subsets: ["latin"],
  display: "swap",
});
const headerHeight = "3.5rem";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={
          karla.className +
          " bg-brown/10 text-gray-800 dark:bg-gray-800 dark:text-gray-100"
        }
      >
        {/* NAVIGATION BAR */}
        <nav
          className={`bg-lightgreen/10 px-6 py-3 font-mono text-lg h-[${headerHeight}] flex items-center`}
        >
          <ul className="flex items-baseline gap-10">
            <a href="/">
              <li>alipatti.com</li>
            </a>
          </ul>
        </nav>

        {/* MAIN CONTENT */}
        {children}

        <footer className="bg-darkgreen/70 text-lightblue/50 p-5 text-center text-sm font-light">
          <span>© Alistair Pattison, 2023</span>
        </footer>
      </body>
    </html>
  );
}
