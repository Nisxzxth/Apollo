'use client';

import { useState } from 'react';

export default function FilterSidebar({ setFilters }) {
  const [specialization, setSpecialization] = useState('');
  const [location, setLocation] = useState('');

  const handleFilterChange = () => {
    setFilters({
      specialization,
      location,
    });
  };

  return (
    <div className="w-[250px] p-4 border-r border-gray-300">
      <h2 className="font-bold mb-4">Filter</h2>

      <div className="mb-4">
        <label className="block mb-1">Specialization</label>
        <select
          value={specialization}
          onChange={(e) => setSpecialization(e.target.value)}
          className="w-full border p-2"
        >
          <option value="">All</option>
          <option value="Cardiologist">Cardiologist</option>
          <option value="Dentist">Dentist</option>
          <option value="Dermatologist">Dermatologist</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block mb-1">Location</label>
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Enter city"
          className="w-full border p-2"
        />
      </div>

      <button
        onClick={handleFilterChange}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Apply Filters
      </button>
    </div>
  );
}
