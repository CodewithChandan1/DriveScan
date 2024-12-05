import { Bell, Megaphone } from 'lucide-react';
import logo from "../assets/logo/welkin.png"
import { useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
export function Header() {
  const navigate = useNavigate();
  const [showNotifications, setShowNotifications] = useState(false);
  const dropdownRef = useRef(null);
  const handleClick = () => {
    navigate("/");
  };

  const toggleNotifications = () => {
    setShowNotifications((prev) => !prev);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowNotifications(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);
  return (
    <header className="bg-white py-4 px-6 flex items-center justify-between border-b" ref={dropdownRef}>
      <div className="flex items-center gap-2 cursor-pointer">
        <img src={logo} alt="Logo" className="w-10 h-10 rounded-lg" onClick={handleClick}/>
        <nav className="flex gap-6">
          {["Welkin ",].map(
            (item) => (
              <button key={item} className="text-gray-600 hover:text-gray-900 text-2xl">
                {item}
              </button>
            )
          )}
        </nav>
      </div>

      {/* <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop"
            alt="Profile"
            className="w-8 h-8 rounded-full"
          />
          <span className="text-sm font-medium">Bhanupratap Singh</span>
          <ChevronDown size={16} className="text-gray-500" />
        </div>
        <Bell size={20} className="text-gray-500" />
      </div> */}
      <div className="flex items-center gap-4 z-50">
        <div className="relative">
          <Bell
            size={20}
            className="text-gray-500 cursor-pointer"
            onClick={toggleNotifications}
          />
          {showNotifications && (
            <div className="absolute right-0 mt-2 w-64 bg-white shadow-lg rounded-lg border p-4">
              <h3 className="text-gray-700 font-medium mb-2">
                Notifications
              </h3>
              <ul>
                <li className="flex items-center gap-2 text-sm text-gray-600 py-2 border-b">
                  <div className='w-4 h-4'> <Megaphone size={16} className="text-blue-500 " /></div>
                 
                  New announcement: System update scheduled
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600 py-2 border-b">
                  <div className='w-4 h-4'><Bell size={16} className="text-yellow-500" /> </div>
                  
                  New message from Admin
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600 py-2">
                  <div className='w-4 h-4'> <Megaphone size={16} className="text-blue-500 " /></div>
                  Reminder: Profile update required
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>

    </header>
  );
}