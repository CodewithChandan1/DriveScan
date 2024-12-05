import React from 'react';
import Breadcrumb from './Breadcrumb';
import { Star, Link, Copy } from 'lucide-react';

function CourseCard({
  title,
  type,
  link,
  // path
}) {
  const getTypeColor = (type) => {
    const colors = {
      lab: 'bg-emerald-400',
      path: 'bg-indigo-500',
      course: 'bg-sky-400',
    };
    return colors[type];
  };
  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(link).then(() => {
      alert('Link copied to clipboard!');
    });
  };

  return (
    <div className="flex gap-6 p-4 bg-white rounded-xl hover:shadow-lg transition-shadow">
      <div
        className={`w-24 h-24 ${getTypeColor(
          type
        )} rounded-xl flex items-center justify-center`}
      >
        <img
          src={`https://api.multiavatar.com/${encodeURIComponent(title)}.png`}
          alt="Random avatar"
          className="w-full h-full object-cover rounded-xl"
        />
      </div>

      <div className="flex-1">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-lg font-semibold mb-2">{title}</h3>
          
            <a
              className="text-gray-600 text-sm mb-2 hover:text-blue-500 flex items-center justify-center gap-2"
              href={link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Link className='h-5'/> {link}
              <button
                className="text-gray-500 hover:text-blue-500 flex items-center gap-1"
                onClick={handleCopyToClipboard}
              >
                <Copy className="h-5" /> Copy
              </button>
            </a>
           
            {/* <div className="flex gap-2">
             
             Path: <Breadcrumb path={path} />
            </div> */}
          </div>

     
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
