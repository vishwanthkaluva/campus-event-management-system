import React, { useState } from "react";
import axios from "axios";

function AddEvent() {
  const [event, setEvent] = useState({
    title: "",
    description: "",
    date: "",
    location: "",
  });

  const handleChange = (e) => {
    setEvent({ ...event, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/events", event);
      alert("Event added successfully!");
      window.location.reload();
    } catch (error) {
      console.error(error);
      alert("Error adding event");
    }
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-md mb-6">
      <h2 className="text-xl font-semibold mb-4 text-gray-700">
        Add New Event
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="title"
          placeholder="Event Title"
          onChange={handleChange}
          className="w-full p-2 border rounded-lg"
          required
        />

        <textarea
          name="description"
          placeholder="Description"
          onChange={handleChange}
          className="w-full p-2 border rounded-lg"
          required
        />

        <input
          type="date"
          name="date"
          onChange={handleChange}
          className="w-full p-2 border rounded-lg"
          required
        />

        <input
          name="location"
          placeholder="Location"
          onChange={handleChange}
          className="w-full p-2 border rounded-lg"
          required
        />

        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
          Add Event
        </button>
      </form>
    </div>
  );
}

export default AddEvent;