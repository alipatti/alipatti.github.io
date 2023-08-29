import { FaFile, FaGithub, FaLinkedin } from "react-icons/fa";
import Image from "next/image";

export default function Home() {
  return (
    <div className="container mx-auto grid justify-center gap-10 p-4 md:max-w-2xl lg:p-10">
      <h1 className="text-6xl">Alistair Pattison</h1>

      <main className="flex flex-col items-center gap-10">
        {/* Headshot image */}
        <section id="headshot">
          <Image
            className="aspect-square rounded-full object-cover object-left-top"
            src={"/photos/me.jpeg"}
            alt="Me in Austria."
            height={280}
            width={280}
          ></Image>
        </section>

        {/* Links */}
        <section
          id="links"
          className="px-auto children:rounded children:bg-[#7C4C5C] children:px-3 children:py-2 flex flex-wrap items-center justify-center gap-10 text-gray-200"
        >
          <a className="hover:shadow" href="https://github.com/alipatti">
            <FaGithub className="inline" /> <span className="pl-2">github</span>
          </a>
          <a className="hover:shadow " href="https://linked.com/in/alipatti">
            <FaLinkedin className="inline" />{" "}
            <span className="pl-2">linkedin</span>
          </a>
          <a className="hover:shadow " href="/cv.pdf">
            <FaFile className="inline" /> <span className="pl-2">cv</span>
          </a>
        </section>

        {/* Bio paragraph */}
        <section id="bio">
          <p className="text-center">
            I'm Alistair, a undergrad at Carleton College studying math,
            statistics, and computer science. Recently, I've worked as a
            researcher at the University of Minnesota, using tools from
            cryptography to develop a privacy-preserving method for reporting
            abuse and misinformation on encrypted messaging platforms like
            WhatsApp and Signal. My{" "}
            <a href="https://link.springer.com/article/10.1007/BF02187731">
              Erdös
            </a>{" "}
            <a href="https://collaborate.princeton.edu/en/publications/matching-nuts-and-bolts">
              number
            </a>{" "}
            <a href="https://link.springer.com/chapter/10.1007/3-540-39200-9_18">
              is
            </a>{" "}
            <a href="https://arxiv.org/abs/2306.01241">four.</a>
          </p>

          <p className="mb-0">Other interests:</p>

          <ul className="list-inside list-disc columns-2 pl-2">
            <li>
              <a href="https://athletics.carleton.edu/news/2023/2/11/mens-track-and-field-knights-win-7-times-at-the-meet-of-the-hearts.aspx">
                running{" "}
              </a>
            </li>
            <li>
              <a href="https://github.com/alipatti">
                unfinished coding projects
              </a>
            </li>
            <li>
              <a href="/photos/wilmore.jpg">being outside</a>
            </li>
            <li>
              <a href="https://observablehq.com/@alipatti/in-passing">
                data visualization
              </a>
            </li>
            <li>
              <a href="https://www.startribune.com/minnesota-winter-weather-temperature-cold-north-pole/600114153/">
                the midwest
              </a>
            </li>
            <li>
              <a href="http://github.com/alipatti/dotfiles">bikeshedding</a>
            </li>
            <li>pickup sports of any kind</li>
          </ul>
        </section>
      </main>

      <section id="github"></section>
    </div>
  );
}
