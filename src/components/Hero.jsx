import { Link, useNavigate } from "react-router-dom";
import { Button } from "./Button";


export function Hero() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/search"); 
  };
  return (
    <div className="px-8 py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <h1 className="text-5xl font-bold leading-tight">
              Find Public <span className="text-blue-600">Google Drive</span>{" "}
              Links Instantly!
            </h1>
            <p className="text-gray-600 text-lg">
              Search for the files, movies, music, or documents you need across Google Drive. Fast and easy access to public content, all in one place.
            </p>
            <div className="flex items-center gap-4">
              <Button onClick={handleClick}>Try it Free</Button>
              
              <div className="flex -space-x-2">
                {[...Array(4)].map((_, i) => (
                  <img
                    key={i}
                    src={`https://api.multiavatar.com/${i}.png`}
                    alt="User"
                    className="w-8 h-8 rounded-full border-2 border-white"
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="flex-1">
            <img
              src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80"
              alt="SEO Campaign"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
