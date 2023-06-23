import { FaFile, FaGithub, FaLinkedin } from "react-icons/fa";
import Image from "next/image";

export default function Home() {
  return (
    <div className="container mx-auto grid justify-center gap-10 p-4 md:max-w-2xl lg:p-10">
      <h1 className="text-6xl">Alistair Pattison</h1>

      <section className="flex flex-col items-center gap-10">
        <Image
          className="aspect-square rounded-full object-cover object-left-top"
          src={"/photos/me.jpeg"}
          alt="Me in Austria."
          height={280}
          width={280}
        ></Image>
        <div>
          <p id="about" className="">
            I'm Alistair, a undergrad at Carleton College studying math,
            statistics, and computer science. Recently, I've worked as a
            researcher in the Privacy and Cryptography lab at the University of
            Minnesota, where my work has focused on using tools from cryptography to
            develop ways of moderateing encrypted messaging platforms while
            respecting users' anonymity and privacy. My{" "}
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

          <p>
            Outside of school, I am a captain of Carleton's{" "}
            <a
              href="https://athletics.carleton.edu/news/2023/2/11/mens-track-and-field-knights-win-7-times-at-the-meet-of-the-hearts.aspx"
              target="_blank"
            >
              track and field team
            </a>
            {", "}
            <a href="https://github.com/alipatti" target="_blank">
              an avid coder
            </a>
            {", "}nature enthusiast,{" "}
            <a href="https://github.com/alipatti/dotfiles" target="_blank">
              chronic bikeshedder
            </a>
            {", "}
            proud midwesterner, and pickup sport extraordinaire.
          </p>
        </div>
      </section>

      <section
        id="links"
        className="px-auto flex flex-wrap items-center justify-center gap-10 text-gray-200 children:rounded children:bg-[#7C4C5C] children:px-3 children:py-2"
      >
        <a className="hover:shadow" href="https://github.com/alipatti">
          <FaGithub className="inline" /> <span className="pl-2">github</span>
        </a>
        <a className="hover:shadow " href="https://linked.com/in/alipatti">
          <FaLinkedin className="inline" />{" "}
          <span className="pl-2">linkedin</span>
        </a>
        <a className="hover:shadow " href="/resume.pdf">
          <FaFile className="inline" /> <span className="pl-2">resume</span>
        </a>
      </section>

      <section id="github"></section>
    </div>
  );
}

const getRepos = () => { };
