"use client";

import yaml from "js-yaml";
import { useState, useEffect } from "react";

const yamlUrl = "https://raw.githubusercontent.com/alipatti/cv/main/main.yml";

interface CVContent {
  about: { name: string };
  sections: CVSection[];
}

interface CVSection {
  title: string;
  items?: CVItem[];
}

interface CVItem {
  title?: string;
  subtitle?: string;
  dates?: string;
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

      {section.items &&
        section.items.map((item) => <Item item={item} key={item.title} />)}
    </div>
  );
}

function Item({ item }: { item: CVItem }) {
  return (
    <div>
      <h3>{item.title}</h3>

      {item.bullets && (
        <ul className="ml-4 list-['-']">
          {item.bullets.map((bullet, i) => (
            <li key={i} className="pl-1">
              {bullet}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
