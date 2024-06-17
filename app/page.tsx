"use client";

import { useEffect, useRef, useState } from "react";
import { useWindowSize } from "@uidotdev/usehooks";

import { isMandelbrot, randomLocation } from "./mandelbrot";

import { FaFile, FaFilePdf, FaGithub, FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import CV from "./cv";

export default function Home() {
  const ref = useRef<HTMLCanvasElement>(null);

  let { width, height } = useWindowSize();
  const maxIters = 100;

  const [center, setCenter] = useState([0.2, -1]); // real, im
  const [zoom, setZoom] = useState(20);

  useEffect(() => {
    if (ref.current && width && height) {
      ref.current.height = height;
      ref.current.width = width;

      const ctx = ref.current.getContext("2d")!;

      const imageData = ctx.createImageData(width, height);

      for (let x = 0; x < width; x += 1) {
        for (let y = 0; y < height; y += 1) {
          const i = (x + y * width) * 4;

          let iters = isMandelbrot(
            center[0] + (0.01 / zoom) * (x - width / 2),
            -center[1] + (0.01 / zoom) * (y - height / 2),
            maxIters
          );

          imageData.data[i + 0] = 0; // R
          imageData.data[i + 1] = 0; // G
          imageData.data[i + 2] = 0; // B
          imageData.data[i + 3] = iters == maxIters ? 0 : iters * 4;
        }
      }

      ctx.putImageData(imageData, 0, 0);
    }
  }, [center, zoom, height, width]);

  return (
    <main>
      <section id="bio" className="relative min-h-[calc(100vh-3.5rem)]">
        {/* --- MANDELBROT --- */}
        <canvas
          ref={ref}
          className="absolute top-[-3.5em] z-[-1] blur-[1px] dark:invert"
        />

        {/* --- CARD --- */}
        <div className="mx-auto flex min-w-[40rem] flex-col items-center justify-start gap-10 rounded px-20 pt-20 text-center xl:max-w-6xl xl:gap-5 2xl:pt-40">
          <h1 className="text-6xl">Alistair Pattison</h1>

          <hr className="mx-auto hidden h-px w-60 border-0 bg-gray-700 dark:bg-gray-100 2xl:block" />

          <div className="flex flex-col items-center">
            <div className="flex flex-col items-center gap-20 2xl:flex-row">
              {/* -- HEADSHOT -- */}
              <Image
                className="aspect-square rounded-full object-cover object-left-top shadow-md"
                src={"/me.jpeg"}
                alt="Alistair in the Austrian Alps."
                height={280}
                width={280}
              ></Image>

              {/* -- SHORT BIO -- */}
              <div className="max-w-md space-y-10 text-center">
                <p>
                  I'm a predoctoral fellow for{" "}
                  <a href="https://opportunityinsights.org">
                    Opportunity Insights
                  </a>
                  , a research group at Harvard that uses big data to identify
                  barriers to social mobility in the U.S. with the goal of
                  reviving the American dream. Previously, I studied math and
                  statistics at{" "}
                  <a
                    target="_blank"
                    href="https://www.startribune.com/minnesota-winter-weather-temperature-cold-north-pole/600114153/"
                  >
                    Carleton College
                  </a>{" "}
                  where I also spent a lot of time{" "}
                  <a
                    target="_blank"
                    href="https://athletics.carleton.edu/news/2024/5/10/mens-track-and-field-2024-miac-outdoor-championships-day-1.aspx"
                  >
                    running in circles
                  </a>
                  .
                </p>
                <p>
                  If for some reason you'd like to learn more about me, you can find more
                  at the links below.
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
                  <a
                    className="button hover:shadow"
                    href="https://github.com/alipatti/cv/releases/latest/download/pattison-cv-full.pdf"
                  >
                    <FaFilePdf className="inline" />{" "}
                    <span className="pl-2">cv</span>
                  </a>
                </div>
              </div>
            </div>

            {/*
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
           */}
          </div>
        </div>
      </section>

      {/*  
      <div
        id="bottom"
        className="bg-lightgreen/30 children:py-20 4xl:justify-around children:flex-grow relative flex min-h-screen flex-col items-center px-5 pt-10 2xl:flex-row 2xl:items-start"
      >
        <section
          id="about"
          className="dark:children-p:font-light top-[20%] space-y-3 text-center after:absolute after:right-0 after:top-1/4 after:h-1/2 after:border-r-gray-400/50 dark:after:opacity-50 2xl:sticky 2xl:after:border-r"
        >
          <h1 className="mb-8 text-4xl uppercase tracking-wide">About</h1>
          <div className="mx-auto max-w-lg">
            <p>
              I'm a senior undergraduate with broad interest in work that blends
              the impact of statistics and computer science with the rigor of
              mathematics. Recently, this has taken the form of statistical
              consulting and research in algorithms and cryptography. I'm
              particularly interested in machine learning.
            </p>

            <p>
              Outside of class, I captain the varsity track team where I run
              mid-distance (my main event is the 800m). I'm also an adept
              programmer (my tools of choice are Python, TypeScript, and Rust).
            </p>
          </div>
        </section>

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
      */}
    </main>
  );
}
