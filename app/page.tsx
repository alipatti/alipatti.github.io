import { FaFile, FaGithub, FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto grid justify-center gap-10 p-4 md:max-w-2xl lg:max-w-5xl lg:p-10">
      <h1 className="text-6xl">Alistair Pattison</h1>

      <section className="flex flex-col items-center gap-10 lg:flex-row">
        <Image
          title="Me in Giza."
          className="aspect-square rounded-full object-cover object-left-top"
          src={"/photos/me.jpeg"}
          alt="Me in Giza."
          height={280}
          width={280}
        ></Image>
        <div>
          <p id="about" className="">
            I'm Alistair, a student studying math and statistics at Carleton
            College. Recently, I've worked as a research assistant in the
            Privacy and Cryptography lab at the University of Minnesota, as a
            statistical consultant for ????, and as a teaching assistant for a
            variety of math and computer science classes. Outside of math and
            stats, I'm interested in artificial intelligence, evolutionary
            biology, and physics. Outside of school, I am an{" "}
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
            <Link href="/photos/wilmore.jpeg">nature enthusiast</Link>
            {", "}
            <a href="https://github.com/alipatti/dotfiles" target="_blank">
              chronic bikeshedder
            </a>
            {", "}
            and pickup sport extraordinaire.
          </p>
        </div>
      </section>

      <section
        id="links"
        className="px-auto flex flex-wrap items-center justify-center gap-10 children:rounded children:bg-fuchsia-300 children:px-3 children:py-2"
      >
        <a className="hover:shadow" href="https://github.com/alipatti">
          <FaGithub className="inline" /> <span className="pl-2">github</span>
        </a>
        <a className="hover:shadow " href="https://linked.com/in/alipatti">
          <FaLinkedin className="inline" />{" "}
          <span className="pl-2">linkedin</span>
        </a>
        <a className="hover:shadow " href="/resume/resume.pdf">
          <FaFile className="inline" /> <span className="pl-2">resume</span>
        </a>
      </section>

      {/* <section id="resume" className="hidden lg:block">
        <iframe
          src="/resume/resume.pdf#toolbar=0"
          className="mx-auto aspect-[8.5/11] w-full max-w-2xl"
        ></iframe>
      </section> */}
    </div>
  );
}
