import Image from 'next/image';
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <h4 className="text-xl font-bold mb-2">Blue Threads</h4>
            <p className="text-gray-400">We have clothes that suit your style and which you're proud to wear. From women to men.</p>
            <div className="flex mt-4 space-x-3">
              <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-linkedin-in"></i></a>
              <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-youtube"></i></a>
              <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <h4 className="text-xl font-bold mb-2">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">About</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Features</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Works</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Career</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <h4 className="text-xl font-bold mb-2">Help</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Customer Support</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Delivery Details</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Terms & Conditions</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-4 flex justify-between items-center">
          <p className="text-gray-400">© 2000-2023 Blue Threads. All Rights Reserved.</p>
          <div className="flex space-x-3">
          <Image src="/images/visa.png" alt="Visa" width={32} height={32} />
          <Image src="/images/paypal.jpg" alt="Paypal" width={32} height={32} />
          <Image src="/images/apel.png" alt="Apple" width={32} height={32} />
          <Image src="/images/googleplay.png" alt="Googleplay" width={32} height={32} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
