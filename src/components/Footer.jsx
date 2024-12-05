import { Facebook, Instagram, Megaphone, Twitch, X } from "lucide-react";
import logo from "../assets/logo/welkin.png"
export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-8">
      <div className="max-w-6xl mx-auto">
        {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src={logo} alt="Logo" className="w-12 h-10 rounded-lg" />
              <span className="font-bold text-white">Welkin</span>
            </div>
            <p className="text-sm">
              Making SEO simple and effective for businesses worldwide.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#careers" className="hover:text-white">
                  Careers
                </a>
              </li>
              <li>
                <a href="#press" className="hover:text-white">
                  Press
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#blog" className="hover:text-white">
                  Blog
                </a>
              </li>
              <li>
                <a href="#guides" className="hover:text-white">
                  Guides
                </a>
              </li>
              <li>
                <a href="#help" className="hover:text-white">
                  Help Center
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#privacy" className="hover:text-white">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#terms" className="hover:text-white">
                  Terms
                </a>
              </li>
              <li>
                <a href="#security" className="hover:text-white">
                  Security
                </a>
              </li>
            </ul>
          </div>
        </div> */}
        <div className=" text-white py-6 text-center">
          <img src={logo} alt="Logo" className="w-12 h-10 rounded-lg mx-auto my-4" />
          <p>Powered by DriveScan</p>
          <div className="flex gap-5 justify-center items-center mt-6">
            <a href="#facebook" className="text-white mx-2 hover:text-blue-500"><Facebook/></a>
            <a href="#twitter" className="text-white mx-2 "><X/></a>
            <a href="#instagram" className="text-white mx-2 hover:text-pink-500"><Instagram/></a>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-center">
          © {new Date().getFullYear()} DriveScan. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
