import { FaFile, FaGithub, FaLinkedin } from "react-icons/fa";
import Image from "next/image";

export default function Home() {
  return (
    <div className="container mx-auto my-10 grid justify-center gap-10 px-5 text-center xl:mt-20 xl:gap-5">
      <h1 className="text-6xl">Alistair Pattison</h1>

      <hr className="mx-auto hidden h-px w-60 border-0 bg-gray-700 dark:bg-gray-100 xl:block" />

      <main className="flex flex-col items-center">
        <div className="flex flex-col items-center gap-10 xl:flex-row">
          {/* Headshot image */}
          <Image
            className="aspect-square rounded-full object-cover object-left-top"
            src={"/me.jpeg"}
            alt="Me in Austria."
            height={280}
            width={280}
          ></Image>

          {/* Bio paragraph */}
          <section
            id="bio"
            className="max-w-lg space-y-6 text-center xl:max-w-lg"
          >
            <p>
              I'm a student at{" "}
              <a href="https://www.startribune.com/minnesota-winter-weather-temperature-cold-north-pole/600114153/">
                Carleton College
              </a>{" "}
              where I study math and spend a lot of time{" "}
              <a href="https://athletics.carleton.edu/news/2023/2/11/mens-track-and-field-knights-win-7-times-at-the-meet-of-the-hearts.aspx">
                running in circles
              </a>
              . Sometimes I write <a href="https://github.com/alipatti">code</a>
              .
            </p>

            <p>
              I'm currently looking for work with a broad interest in applying
              my quantitative and analytical chops to problems in the real
              world. If you're hiring,{" "}
              <a href="mailto:pattisona@carleton.edu">send me an email</a>!
            </p>

            {/* Links */}
            <div
              id="links"
              className="px-auto flex flex-wrap items-center justify-center gap-5 sm:gap-10"
            >
              <a
                className="button hover:shadow"
                href="https://github.com/alipatti"
              >
                <FaGithub className="inline" />{" "}
                <span className="pl-2">github</span>
              </a>
              <a
                className="button hover:shadow"
                href="https://linkedin.com/in/alipatti"
              >
                <FaLinkedin className="inline" />{" "}
                <span className="pl-2">linkedin</span>
              </a>
              <a
                className="button hover:shadow"
                href="https://github.com/alipatti/cv/releases/latest/download/pattison-cv-full.pdf"
              >
                <FaFile className="inline" /> <span className="pl-2">cv</span>
              </a>
            </div>
          </section>
        </div>
      </main>

      <section id="github"></section>
    </div>
  );
}
