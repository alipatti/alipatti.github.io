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
            {/* Headshot image */}
            <Image
              className="aspect-square rounded-full object-cover object-left-top"
              src={"/me.jpeg"}
              alt="Alistair in the Austrian Alps."
              height={280}
              width={280}
            ></Image>

            {/* Bio paragraph */}
            <section id="bio" className="max-w-lg space-y-6 text-center">
              <p>
                I'm a student at{" "}
                <a href="https://www.startribune.com/minnesota-winter-weather-temperature-cold-north-pole/600114153/">
                  Carleton College
                </a>{" "}
                where I study math and spend a lot of time{" "}
                <a href="https://athletics.carleton.edu/news/2023/2/11/mens-track-and-field-knights-win-7-times-at-the-meet-of-the-hearts.aspx">
                  running in circles
                </a>
                . Sometimes I write{" "}
                <a href="https://github.com/alipatti">code</a>.
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

            <a className="text-lightgreen mt-20 hover:scale-110 duration-1000" href="#cv">
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

      <section id="cv" className="bg-lightgreen/30 min-h-screen p-5 md:p-20">
        <div className="mb-10 flex flex-col items-center gap-3">
          <h1 className="text-center text-4xl tracking-wide">
            CURRICULUM VITAE
          </h1>

          <a
            className="hover:text-blue text-sm hover:underline"
            href="https://github.com/alipatti/cv/releases/latest/download/pattison-cv-full.pdf"
          >
            <FaFile className="mr-1 inline -translate-y-0.5" /> Download as a
            pdf
          </a>
        </div>

        <div className="mx-auto max-w-[48rem]">
          <CV />
        </div>
      </section>
    </main>
  );
}
