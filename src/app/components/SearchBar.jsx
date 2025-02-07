"use client";

import Link from "next/link";
import { useState } from "react";

export default function SearchBar() {
  const [searchText, setSearchText] = useState("");

  return (
    <div className="rounded-full w-4/5 border-gray-50 flex relative">
      <input
        onChange={(e) => setSearchText(e.target.value)}
        className="rounded-full px-4 py-2 w-full outline-red-600 border-none placeholder:text-sm text-red-600"
        placeholder="Search"
      />

      <button className="px-2 bottom-0 top-0 rounded-r-full bg-red-600 absolute text-white right-0">
        <Link
          href={{
            pathname: `/`,
            query: {
              s: searchText,
            },
          }}
        >
          <img className="" src="/icons/search-white.svg" />
        </Link>
      </button>
    </div>
  );
}
