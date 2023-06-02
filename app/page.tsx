import { FaFile, FaGithub, FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto grid justify-center gap-10 p-4 md:max-w-2xl lg:max-w-5xl lg:p-10">
      <h1 className="text-6xl">Alistair Pattison</h1>

      <section className="flex flex-col items-center gap-10 lg:flex-row">
        <Image
          className="aspect-square rounded-full object-cover object-left-top"
          src={"/photos/me.jpeg"}
          alt="Dashing gentleman man overlooks valley in the Austrian alps."
          height={280}
          width={280}
        ></Image>
        <div>
          <p id="about" className="">
            I'm Alistair, a student at Carleton College studying math and
            statistics. Recently, I've worked as a research assistant in the
            Privacy and Cryptography lab at the University of Minnesota and as a
            teaching assistant for the math and computer science departments at
            Carleton. My{" "}
            <a href="https://link.springer.com/article/10.1007/BF02187731">
              Erdös
            </a>{" "}
            <a href="https://collaborate.princeton.edu/en/publications/matching-nuts-and-bolts">
              number
            </a>{" "}
            <a href="https://link.springer.com/chapter/10.1007/3-540-39200-9_18">
              is
            </a>{" "}
            <a href="TODO: add arXiv link">four</a>, and my other academic
            interests include artificial intelligence, evolutionary biology, and
            physics. Outside of school, I am an{" "}
            <a
              href="https://athletics.carleton.edu/news/2023/2/11/mens-track-and-field-knights-win-7-times-at-the-meet-of-the-hearts.aspx"
              target="_blank"
            >
              avid runner
            </a>
            {", "}
            <a href="https://github.com/alipatti" target="_blank">
              coder
            </a>
            {", "}
            <Link href="/photos/wilmore.jpg" target="_blank">
              nature enthusiast
            </Link>
            {", "}
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

const getRepos = () => {};
