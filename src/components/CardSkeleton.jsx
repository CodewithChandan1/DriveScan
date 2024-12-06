import React from 'react';

function CourseCardSkeleton() {
    return (
        <div className="flex gap-6 p-4 bg-white rounded-xl animate-pulse">
            <div className="w-24 h-24 bg-gray-300 rounded-full"></div>

            <div className="flex-1">
                <div className="flex flex-col space-y-3">
                    
                    <div className="h-4 bg-gray-300 rounded-md w-3/4"></div>

                    <div className="h-4 bg-gray-200 rounded-md w-1/2"></div>

                    <div className="h-4 bg-gray-200 rounded-md w-1/3"></div>
                </div>
            </div>
        </div>
    );
}

export default CourseCardSkeleton;
