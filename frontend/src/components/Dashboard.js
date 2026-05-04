import React, { useState } from "react";
import EventList from "./EventList";

export default function Dashboard({ setLoggedIn }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  const categories = ["All", "Tech", "Cultural", "Workshop", "Sports", "Academic"];

  return (
    <div className="flex min-h-screen bg-[#0b1220] text-white">
      
      {/* Sidebar */}
      <aside className="w-64 bg-[#0f172a] p-5">
        <h1 className="text-xl font-bold mb-6">
          Campus<span className="text-yellow-400">Events</span>
        </h1>

        <button
          onClick={() => {
            localStorage.removeItem("token");
            setLoggedIn(false);
          }}
          className="bg-red-500 px-3 py-2 rounded mb-6"
        >
          Logout
        </button>

        <h3 className="text-sm text-gray-400 mb-2">Filters</h3>

        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setCategory(c)}
            className={`block w-full text-left px-3 py-2 mb-2 rounded ${
              category === c
                ? "bg-yellow-400 text-black"
                : "bg-[#1e293b]"
            }`}
          >
            {c}
          </button>
        ))}
      </aside>

      {/* Main */}
      <main className="flex-1 p-6">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">
            Discover & <span className="text-yellow-400">Experience</span>
          </h2>

          <input
            placeholder="Search events..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="bg-[#0f172a] border border-gray-700 px-4 py-2 rounded"
          />
        </div>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          {[
            ["48", "Total Events"],
            ["12", "This Week"],
            ["3.2k", "Students"],
            ["24", "Clubs"],
          ].map(([num, label]) => (
            <div
              key={label}
              className="bg-[#0f172a] p-4 rounded text-center"
            >
              <h3 className="text-yellow-400 text-xl font-bold">{num}</h3>
              <p className="text-gray-400 text-sm">{label}</p>
            </div>
          ))}
        </div>

        {/* Events */}
        <EventList query={query} category={category} />
      </main>
    </div>
  );
}