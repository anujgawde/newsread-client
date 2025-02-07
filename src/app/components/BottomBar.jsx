"use client";
import Link from "next/link";
import SearchBar from "./SearchBar";
import { useState } from "react";

export default function BottomBar() {
  const [isSearchBarVisible, setIsSearchBarVisible] = useState(false);
  return (
    <>
      {isSearchBarVisible && (
        <div className="fixed bottom-[4.5rem] flex justify-center w-full">
          <SearchBar />
        </div>
      )}
      <div className="bg-white rounded-full p flex items-center w-1/2 fixed bottom-5 left-0 right-0 mx-auto">
        <div className="w-1/4 flex justify-center items-center">
          <Link href={`/`}>
            <img src="/icons/house.svg" />
          </Link>
        </div>
        <div className="w-1/4 flex justify-center items-center">
          <Link
            href={{
              pathname: `/`,
              query: {
                s: "trending",
              },
            }}
          >
            <img src="/icons/trending-up.svg" />
          </Link>
        </div>
        <button
          onClick={() => setIsSearchBarVisible(!isSearchBarVisible)}
          className="w-1/4 flex justify-center items-center"
        >
          <img src="/icons/search.svg" />
        </button>
        <div className="w-1/4 flex justify-center items-center bg-red-600 text-white rounded-r-full p-2 tracking-wide font-bangers">
          <Link
            href={{
              pathname: `/`,
              query: {
                s: "latest",
              },
            }}
          >
            NEW!
          </Link>
        </div>
      </div>
    </>
  );
}
