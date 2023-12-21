"use client";

import yaml from "js-yaml";
import { useState, useEffect } from "react";
import { FaGithub } from "react-icons/fa";

const yamlUrl = "https://raw.githubusercontent.com/alipatti/cv/main/main.yml";

interface CVContent {
  about: { name: string };
  sections: CVSection[];
}

interface CVSection {
  title: string;
  summary: string;
  items?: CVItem[];
}

interface CVItem {
  title?: string;
  subtitle?: string;
  dates?: string;
  notes?: string;
  paren?: string;
  github?: string;
  bullets?: string[];
}

export default function CV() {
  const [content, setContent] = useState(undefined as unknown as CVContent);

  useEffect(() => {
    fetch(yamlUrl)
      .then((res) => res.text())
      .then((text) => yaml.load(text) as CVContent)
      .then((data) => setContent(data));
  }, []);

  if (!content) return <p>Loading...</p>;

  return (
    <div>
      {content.sections.map((section, i) => (
        <Section section={section} key={i} />
      ))}
    </div>
  );
}

function Section({ section }: { section: CVSection }) {
  return (
    <div>
      <h2>{section.title}</h2>

      <div className="md:ml-4">
        {section.summary && <p>{section.summary}</p>}

        {section.items &&
          section.items.map((item) => <Item item={item} key={item.title} />)}
      </div>
      <hr className="mx-auto my-8 w-1/2 border-gray-800 opacity-20 dark:border-white" />
    </div>
  );
}

function Item({ item }: { item: CVItem }) {
  // TODO: add citation support
  // http://github.com/digitalheir/bibtex-js

  return (
    <div className="group mt-2 transition-all" tabIndex={100}>
      {/* -- TITLE BLOCK -- */}
      <div className="grid-cols-2 items-baseline space-y-0 md:grid">
        <h3 className="font-lg mb-0">{item.title}</h3>
        {item.subtitle && <p className="col-span-2">{item.subtitle}</p>}
        {item.dates && (
          <p className="col-start-2 row-start-1 text-sm font-light md:text-right">
            {item.dates}
          </p>
        )}
      </div>

      {/* -- GITHUB LINK -- */}
      {item.github && (
        <a
          href={`https://github.com/alipatti/${item.github}`}
          className="ml-3 text-sm italic opacity-80 dark:font-extralight dark:opacity-50"
        >
          <FaGithub className="mr-1.5 inline -translate-y-0.5" />
          /alipatti/{item.github}
        </a>
      )}

      {/* -- BULLETS -- */}
      {(item.paren || item.notes || item.bullets) && (
        <ul className="descendant-li:flex descendant-li:mt-1 descendant-span:mx-2 font-light italic">
          <li>
            <span className="opacity-30">↳</span>
            {item.paren}
            {item.notes}
            {item.bullets && item.bullets[0]}
          </li>

          <div className="max-h-0 overflow-hidden duration-500 group-focus:max-h-56">
            {item.bullets?.slice(1).map((bullet, i) => (
              <li key={i}>
                <span className="opacity-30">↳</span>
                {bullet}
              </li>
            ))}
          </div>
        </ul>
      )}

      {/* -- ARROW TO EXPAND BULLETS -- */}
      {item.bullets?.length && item.bullets.length > 1 && (
        <div className="mb-2 text-center duration-500 group-hover:scale-125 group-hover:animate-pulse group-focus:scale-100 group-focus:animate-none">
          <span className="inline-block scale-x-[3] text-sm duration-500 group-focus:rotate-180">
            ⌄
          </span>
        </div>
      )}
    </div>
  );
}
