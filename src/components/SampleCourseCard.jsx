import React from 'react';
import Breadcrumb from './Breadcrumb';
import { Link, Copy } from 'lucide-react';

function CourseCard({
    title,
    type,
    link,
    path
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
                        {/* <div className="flex items-center gap-6 text-sm text-gray-600 mb-2">
              <div className="flex items-center gap-1">
                <Star className="fill-yellow-400 stroke-yellow-400" size={16} />
                <span>{rating}</span>
                <span className="text-gray-400">({ratingCount} ratings)</span>
              </div>
              <div>Level: {level}</div>
              <div>Time: {duration}</div>
              <div>Students: {students}</div>
            </div> */}
                        <a
                            className="text-gray-600 text-sm mb-2 hover:text-blue-500 flex items-center justify-center gap-2"
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Link className='h-5' /> {link}
                            <button
                                className="text-gray-500 hover:text-blue-500 flex items-center gap-1"
                                onClick={handleCopyToClipboard}
                            >
                                <Copy className="h-5" /> Copy
                            </button>
                        </a>

                        <div className="flex gap-2">
                            {/* {tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-gray-100 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))} */}
                            Path: <Breadcrumb path={path} />
                        </div>
                    </div>

                    {/* <div className="flex flex-col items-end">
            <div className="flex items-center gap-3 mb-2">
              <img
                src={instructor.avatar}
                alt={instructor.name}
                className="w-8 h-8 rounded-full"
              />
              <div className="text-right">
                <div className="text-sm font-medium">{instructor.name}</div>
                <div className="text-xs text-gray-500">{instructor.role}</div>
              </div>
            </div>
            {progress !== undefined && (
              <div className="w-32">
                <div className="text-right text-sm mb-1">Progress:</div>
                <div className="h-2 bg-gray-200 rounded-full">
                  <div
                    className="h-full bg-blue-500 rounded-full"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
              </div>
            )}
          </div> */}
                </div>
            </div>
        </div>
    );
}

export default CourseCard;
