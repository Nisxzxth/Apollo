'use client';

import { useEffect, useState } from 'react';
import DoctorCard from '@/components/DoctorCard';
import FilterSidebar from '@/components/FilterSidebar';

export default function DestinationPage() {
  const [doctors, setDoctors] = useState([]);
  const [filters, setFilters] = useState({});

  // Fetch doctors
  useEffect(() => {
    async function fetchDoctors() {
      const res = await fetch('/api/list-doctor-with-filter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(filters),
      });
      const data = await res.json();
      setDoctors(data.doctors);
    }

    fetchDoctors();
  }, [filters]);

  return (
    <div className="flex">
      <FilterSidebar setFilters={setFilters} />
      <div className="grid gap-4 p-4 w-full">
        {doctors.map((doc) => (
          <DoctorCard key={doc.id} doctor={doc} />
        ))}
      </div>
    </div>
  );
}
