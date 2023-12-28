import { FaFile, FaGithub, FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import CV from "./cv";

export default function Home() {
  return (
    <main>
      <section
        id="bio"
        className={`flex min-h-[calc(100vh-3.5rem)] flex-col items-center justify-start gap-10 px-5 py-10 text-center xl:gap-5 xl:pt-20`}
      >
        <h1 className="text-6xl">Alistair Pattison</h1>

        <hr className="mx-auto hidden h-px w-60 border-0 bg-gray-700 dark:bg-gray-100 xl:block" />

        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center gap-10 xl:flex-row">
            {/* -- HEADSHOT -- */}
            <Image
              className="aspect-square rounded-full object-cover object-left-top"
              src={"/me.jpeg"}
              alt="Alistair in the Austrian Alps."
              height={280}
              width={280}
            ></Image>

            {/* -- SHORT BIO -- */}
            <section id="bio" className="max-w-lg space-y-10 text-center">
              <p>
                I'm a student at{" "}
                <a
                  target="_blank"
                  href="https://www.startribune.com/minnesota-winter-weather-temperature-cold-north-pole/600114153/"
                >
                  Carleton College
                </a>{" "}
                where I study math and spend a lot of time{" "}
                <a
                  target="_blank"
                  href="https://athletics.carleton.edu/news/2023/2/11/mens-track-and-field-knights-win-7-times-at-the-meet-of-the-hearts.aspx"
                >
                  running in circles
                </a>
                . Sometimes I write{" "}
                <a href="https://github.com/alipatti">code</a>.
              </p>

              {/* -- SOCIAL LINKS -- */}
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
              </div>
            </section>
          </div>

          {/* -- DOWN ARROWS -- */}
          <div className="mt-20">
            <a
              className="text-lightgreen duration-1000 hover:scale-110"
              href="#bottom"
            >
              <p className="-mb-1">More about me</p>
              <div className="mb-2 animate-pulse opacity-80">
                <span className="inline-block scale-x-[8] -space-y-3 text-xl">
                  <span className="block">⌄</span>
                  <span className="block">⌄</span>
                </span>
              </div>
            </a>
          </div>
        </div>
      </section>

      <div
        id="bottom"
        className="bg-lightgreen/30 children:py-20 4xl:justify-around children:flex-grow relative flex min-h-screen flex-col items-center px-5 pt-10 2xl:flex-row 2xl:items-start"
      >
        {/* -- LONGER BIO -- */}
        <section
          id="about"
          className="dark:children-p:font-light top-[20%] space-y-3 text-center after:absolute after:right-0 after:top-1/4 after:h-1/2 after:border-r-gray-400/50 dark:after:opacity-50 2xl:sticky 2xl:after:border-r"
        >
          <h1 className="mb-8 text-4xl uppercase tracking-wide">About</h1>
          <div className="mx-auto max-w-lg">
            <p>
              I'm a senior undergraduate with a broad interest in work that
              blends the real-world impact of statistics and economics with the
              uncompromising rigor of pure mathematics. Recently, this has taken
              the form of statistical consulting and research in algorithms and
              cryptography. I'm particularly interested in machine learning.
            </p>

            <p>
              Outside of class, I captain the varsity track team where I run
              mid-distance (my main event is the 800m). I'm also an adept
              programmer (my tools of choice are Python, TypeScript, and Rust).
            </p>

            <p>
              If you have a job for which you think I'd be a good fit,{" "}
              <a href="mailto:pattisona@carleton.edu">send me an email</a>!
            </p>
          </div>
        </section>

        {/* -- CV -- */}
        <section id="cv" className="space-y-3">
          <h1 className="text-center text-4xl uppercase tracking-wide">
            Curriculum Vitae
          </h1>

          <a
            className="hover:text-blue block text-center text-sm hover:underline"
            href="https://github.com/alipatti/cv/releases/latest/download/pattison-cv-full.pdf"
          >
            <FaFile className="mr-1 inline -translate-y-0.5" /> Download as a
            pdf
          </a>

          <div className="mx-auto max-w-[48rem] pt-5 text-left">
            <CV />
          </div>
        </section>
      </div>
    </main>
  );
}
