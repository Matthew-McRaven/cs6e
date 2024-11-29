"use client";

import { getTableOfContents } from "@services/book";
import SiteHeader from "../components/site-header";

export default function Page() {
  const tableOfContents = getTableOfContents();

  return (
    <div>
      <SiteHeader />
      <div className="min-h-screen bg-gray-100 py-12">
        <TableOfContents tableOfContents={tableOfContents} />
      </div>
    </div>
  );
}

import { ChevronDown, ChevronRight } from "lucide-react";
import { useState } from "react";

interface TocItem {
  id: string;
  title: string;
  page?: number;
  children?: TocItem[];
}

const TocEntry = ({ item, level = 0 }: { item: TocItem; level: number }) => {
  const [isOpen, setIsOpen] = useState(level === 0);
  const hasChildren = item.children && item.children.length > 0;

  return (
    <li>
      <div className={`flex items-center justify-between py-2 pr-4 ${level === 0 ? "font-semibold" : ""}`}>
        <div className="flex items-center">
          {hasChildren && (
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="mr-2 text-gray-500 hover:text-gray-700"
              aria-expanded={isOpen}
              aria-label={`Toggle ${item.title}`}
            >
              {isOpen ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
            </button>
          )}
          <span className="ml-4" style={{ marginLeft: `${level * 1.5}rem` }}>
            {level === 0 ? `Chapter ${item.id}: ${item.title}` : `${item.id} ${item.title}`}
          </span>
        </div>
        {item.page && <span className="text-gray-500">{item.page}</span>}
      </div>
      {hasChildren && isOpen && (
        <ul className="ml-4">
          {item.children?.map((child) => (
            <TocEntry key={child.id} item={child} level={level + 1} />
          ))}
        </ul>
      )}
    </li>
  );
};

export function TableOfContents({ tableOfContents }: { tableOfContents: ReturnType<typeof getTableOfContents> }) {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-2">Computer Systems</h1>
      <h2 className="text-xl text-gray-600 mb-6">Warford</h2>
      <h3 className="text-2xl font-semibold mb-4">Table of Contents</h3>
      <nav aria-label="Table of Contents">
        <ul className="space-y-2">
          {tableOfContents.chapters.map((chapter) => (
            <TocEntry key={chapter.id} item={chapter} level={0} />
          ))}
        </ul>
      </nav>
    </div>
  );
}
