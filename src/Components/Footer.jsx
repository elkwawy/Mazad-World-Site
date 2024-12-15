import { FiMail, FiPhone} from "react-icons/fi";
function Footer() {
  return (
    <footer className="bg-[#191c1f]">
      <div className="containerAK mx-auto px-4 py-12 text-gray-300">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-gray-300">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">MAZAD WORLD</h3>
            <p className="text-sm mb-4">
              64 East Washington Street
              <br />
              El_Mansura, NY 10005
            </p>
            <div className="space-y-2">
              <div className="flex items-center">
                <FiPhone className="mr-2" />
                <span>+20 123 456 789</span>
              </div>
              <div className="flex items-center">
                <FiMail className="mr-2" />
                <span>mazadWorld@info.com</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-secondary text-gray-300">
                  Categories
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary text-gray-300">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary text-gray-300">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary text-gray-300">
                  Products
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary text-gray-300">
                  Login
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Top Category</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-secondary text-gray-300">
                  Varieties
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary text-gray-300">
                  Real estate
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary text-gray-300">
                  Cars
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary text-gray-300">
                  Jewelry
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary text-gray-300">
                  Antiques
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Newsletter</h4>
            <p className="text-sm mb-4">
              Subscribe to our newsletter for regular updates and exclusive
              offers.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 rounded-l text-gray-800 w-full"
              />
              <button className="bg-secondary px-4 py-2 rounded-r text-white">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p>&copy; All rights reserved to © 2024. Design by DragonTeam</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
