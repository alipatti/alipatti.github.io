import "./globals.css";
import { Karla } from "next/font/google";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

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
    <html lang="en" className="scroll-smooth motion-reduce:scroll-auto">
      <body
        className={
          karla.className +
          " " +
          "bg-lightgreen/10 flex min-h-screen flex-col text-gray-800 dark:bg-gray-800 dark:text-gray-100"
        }
      >
        {/* NAVIGATION BAR */}
        <nav
          className={`from-lightgreen dark:from-darkgreen bg-gradient-to-br from-30% px-6 py-3 font-mono text-lg h-[${headerHeight}] flex items-center`}
        >
          <ul className="flex items-baseline gap-10">
            <a href="/" className="text-lightblue">
              <li>alipatti.com</li>
            </a>
          </ul>
        </nav>

        {/* MAIN CONTENT */}
        <main className="grow">{children}</main>

        <footer className="bg-darkgreen/70 dark:text-lightblue/50 z-50 p-5 text-center text-sm font-light text-white/60">
          <span className="mb-3 block">
            Made with Next.js and Tailwind CSS (
            <a
              href="https://github.com/alipatti/alipatti.github.io"
              className="hover:underline"
            >
              source
            </a>
            ) .
          </span>

          <hr className="mx-auto mb-3 w-10 opacity-10 dark:opacity-5" />

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

          <hr className="mx-auto mb-3 w-10 opacity-10 dark:opacity-5" />

          <p>© Alistair Pattison, 2023.</p>
        </footer>
      </body>
    </html>
  );
}
