// components/Footer.js
const Footer = () => {
  return (
    <footer className="flex justify-between items-center p-5 bg-gray-100 mt-10">
      <div className="flex justify-start items-center w-full">
        <div className="text-lg font-bold">Blue Threads</div>
      </div>
      <div className="space-x-4">
        <a href="#" aria-label="Facebook">FB</a>
        <a href="#" aria-label="LinkedIn">LI</a>
        <a href="#" aria-label="YouTube">YT</a>
        <a href="#" aria-label="Instagram">IG</a>
      </div>
    </footer>
  );
};

export default Footer;
