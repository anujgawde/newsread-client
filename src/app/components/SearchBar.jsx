"use client";
export default function SearchBar() {
  const searchFunc = () => {};

  return (
    <div className="rounded-full w-4/5 border-gray-50 flex relative">
      <input
        className="rounded-full px-4 py-2 w-full outline-red-600 border-none placeholder:text-sm"
        placeholder="Search"
      />

      <button
        onClick={searchFunc}
        className="p-2 rounded-full bg-red-600 absolute text-white right-0"
      >
        <img className="" src="/icons/search-white.svg" />
      </button>
    </div>
  );
}
