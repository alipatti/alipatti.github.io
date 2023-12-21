import "./globals.css";
import { Karla } from "next/font/google";
import { abort } from "process";
import { FaBeer, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

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
          <p>
            Made with Next.js and Tailwind CSS (
            <a href="https://github.com/alipatti/alipatti.github.io">source</a>)
            .
          </p>

          <hr className="mx-auto mb-3 w-10 opacity-5" />

          <div className="descendant-span:ml-2 hover:descendant-a:underline mx-auto mb-3 flex w-1/2 flex-wrap justify-center gap-x-3 gap-y-1">
            <a href="https://linkedin.com/in/alipatti">
              <FaLinkedin className="inline" />
              <span>linkedin.com/in/alipatti</span>
            </a>

            <a href="https://github.com/alipatti">
              <FaGithub className="inline" />
              <span>github.com/alipatti</span>
            </a>

            <a href="https://instagram.com/a1ipatti">
              <FaInstagram className="inline" />
              <span>instagram.com/a1ipatti</span>
            </a>
          </div>

          <hr className="mx-auto mb-3 w-10 opacity-5" />

          <p>© Alistair Pattison, 2023.</p>
        </footer>
      </body>
    </html>
  );
}
