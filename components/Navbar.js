import Link from 'next/link';
import Image from 'next/image';
<<<<<<< HEAD
=======
import { FaUser } from 'react-icons/fa'; // Impor ikon person
>>>>>>> fec4d51fd910e729239c3ebd80b42066b24f9094

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        <div className="flex items-center">
          <Link href="/" passHref>
            <div className="flex items-center cursor-pointer">
              <Image src="/images/logo.jpeg" alt="Logo" width={55} height={55} />
              <span className="ml-3 text-2xl font-bold text-blue-900">
<<<<<<< HEAD
              BT. <span style={{ color: '#93C5CF' }}>S</span>
</span>

=======
                BT. <span style={{ color: '#93C5CF' }}>S</span>
              </span>
>>>>>>> fec4d51fd910e729239c3ebd80b42066b24f9094
            </div>
          </Link>
        </div>
        <div className="hidden md:flex md:items-center md:space-x-4">
<<<<<<< HEAD
=======
          <Link href="/account" passHref> {/* Tambahkan Link ke account.js */}
            <FaUser className="mr-3 text-gray-700 cursor-pointer hover:text-blue-500" />
          </Link>
>>>>>>> fec4d51fd910e729239c3ebd80b42066b24f9094
          <Link href="/home" passHref>
            <span className="cursor-pointer text-gray-700 hover:text-blue-500">Home</span>
          </Link>
          <Link href="/about" passHref>
            <span className="cursor-pointer text-gray-700 hover:text-blue-500">About</span>
          </Link>
          <Link href="/login" passHref>
            <span className="cursor-pointer text-gray-700 hover:text-blue-500">Login</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
