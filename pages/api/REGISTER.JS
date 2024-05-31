import { hash } from 'bcryptjs';
import { useState } from 'react';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [showPassword, setShowPassword] = useState(false); // State untuk menentukan apakah password ditampilkan atau tidak

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Lakukan validasi form jika diperlukan

    try {
      const hashedPassword = await hash(password, 10);

      const newUser = {
        email,
        password: hashedPassword,
        username,
        birthdate,
      };

      console.log('Pengguna baru terdaftar:', newUser);

      // Kirim data pengguna baru ke server
    } catch (error) {
      console.error('Kesalahan saat mendaftarkan pengguna:', error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-sm">
        <h1 className="text-2xl font-bold mb-4 text-center">Register</h1>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block">Email</label>
            <input
              type="email"
              id="email"
              className="w-full border p-2 rounded"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          
          <div>
            <label htmlFor="password" className="block">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"} // Tipe input bergantung pada nilai showPassword
                id="password"
                className="w-full border p-2 rounded"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              <button
              type="button"
              className="absolute inset-y-0 right-0 px-3 py-1"
              onClick={() => setShowPassword(!showPassword)} // Perhatikan bagian ini
              >
              {showPassword ? "Hide" : "Show"}
            </button>


            </div>
          </div>
          
          <div>
            <label htmlFor="username" className="block">Username</label>
            <input
              type="text"
              id="username"
              className="w-full border p-2 rounded"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div>
            <label htmlFor="birthdate" className="block">Birthdate</label>
            <input
              type="date"
              id="birthdate"
              className="w-full border p-2 rounded"
              value={birthdate}
              onChange={(e) => setBirthdate(e.target.value)}
              required
            />
          </div>
          
          <button type="submit" className="bg-blue-500 text-white w-full py-2 rounded">Register</button>
        </form>
      </div>
    </div>
  );
}
