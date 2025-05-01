export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { specialization, location } = req.body;

  const allDoctors = [
    {
      id: 1,
      name: 'Dr. Aishwarya Raman',
      specialization: 'Cardiologist',
      location: 'Chennai',
      experience: '8 years',
    },
    {
      id: 2,
      name: 'Dr. Kiran R',
      specialization: 'Dentist',
      location: 'Bangalore',
      experience: '5 years',
    },
    
  ];

  const filtered = allDoctors.filter((doc) => {
    return (
      (!specialization || doc.specialization === specialization) &&
      (!location || doc.location.toLowerCase().includes(location.toLowerCase()))
    );
  });

  res.status(200).json({ doctors: filtered });
}
