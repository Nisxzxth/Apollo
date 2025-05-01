// src/components/DoctorCard.jsx

export default function DoctorCard({ doctor }) {
    return (
      <div className="bg-white shadow-md rounded-xl p-5 w-full max-w-md border border-gray-200">
        <div className="flex items-center gap-4 mb-4">
          <img
            src={doctor.image || "/default-doctor.png"}
            alt={doctor.name}
            className="w-16 h-16 rounded-full object-cover border"
          />
          <div>
            <h2 className="text-xl font-semibold">{doctor.name}</h2>
            <p className="text-sm text-gray-600">{doctor.specialization}</p>
          </div>
        </div>
  
        <div className="text-sm text-gray-700 space-y-1">
          <p><strong>Experience:</strong> {doctor.experience} years</p>
          <p><strong>Rating:</strong> ⭐ {doctor.rating}/5</p>
          <p><strong>Available:</strong> {doctor.availability}</p>
          <p><strong>Consultation Fee:</strong> ₹{doctor.fee}</p>
        </div>
  
        <button className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition">
          Book Appointment
        </button>
      </div>
    );
  }
  