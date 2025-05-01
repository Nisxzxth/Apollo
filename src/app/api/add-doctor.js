// pages/api/add-doctor.js

let doctors = []; // Temporary storage; in real use, connect to DB

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { name, specialty, experience, location } = req.body;
    const newDoctor = { id: Date.now(), name, specialty, experience, location };
    doctors.push(newDoctor);
    return res.status(201).json({ message: "Doctor added", doctor: newDoctor });
  }

  return res.status(405).json({ message: "Method not allowed" });
}
