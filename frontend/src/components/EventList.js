import React, { useEffect, useState } from "react";
import axios from "axios";

export default function EventList({ query, category }) {
  const [events, setEvents] = useState([]);

  // Fetch events
  useEffect(() => {
    axios
      .get("http://localhost:5000/events")
      .then((res) => {
        console.log("EVENTS:", res.data); // debug
        setEvents(res.data);
      })
      .catch((err) => {
        console.error("Error fetching events:", err);
      });
  }, []);

  // Filter events
  const filtered = events.filter((e) => {
    const search = query.toLowerCase();

    const matchSearch =
      e.title?.toLowerCase().includes(search) ||
      e.description?.toLowerCase().includes(search) ||
      e.location?.toLowerCase().includes(search);

    const matchCategory =
      category === "All" ||
      e.category?.toLowerCase() === category.toLowerCase();

    return matchSearch && matchCategory;
  });

  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
      {filtered.length === 0 ? (
        <p className="text-gray-400">No events found</p>
      ) : (
        filtered.map((e) => (
          <div
            key={e.id}
            className="bg-[#0f172a] border border-gray-700 p-5 rounded-xl shadow hover:scale-105 transition"
          >
            {/* Category */}
            <span className="text-xs bg-yellow-400 text-black px-2 py-1 rounded">
              {e.category}
            </span>

            {/* Title */}
            <h3 className="text-lg font-bold text-yellow-400 mt-3">
              {e.title}
            </h3>

            {/* Description */}
            <p className="text-gray-300 mt-2 text-sm">
              {e.description}
            </p>

            {/* Info */}
            <div className="mt-3 text-sm text-gray-400">
              <p>📅 {new Date(e.date).toDateString()}</p>
              <p>📍 {e.location}</p>
            </div>

            {/* Button */}
            <button className="mt-4 bg-yellow-400 text-black px-3 py-1 rounded hover:bg-yellow-300">
              View Details
            </button>
          </div>
        ))
      )}
    </div>
  );
}