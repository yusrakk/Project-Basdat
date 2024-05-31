// components/Navbar.js
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="flex justify-center items-center p-5 bg-white shadow">
      <div className="space-x-4">
        <Link href="/home">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/login">Login</Link>
      </div>
    </nav>
  );
};

export default Navbar;
