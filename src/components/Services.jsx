
import { Search, Download, Globe, RefreshCw } from "lucide-react";
export function Services() {
  return (
    <section className="py-20 px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Our Services
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <Search className="w-10 h-10 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">
              Fast and Accurate Search Engine
            </h3>
            <p className="text-gray-600">
              Quickly find publicly shared Google Drive links for movies, books, music, software, and more. Our powerful search engine indexes and provides direct access to a wide range of content.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <Download className="w-10 h-10 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Easy Access to Shared Content</h3>
            <p className="text-gray-600">
              Access public files with a click. Find and open the content you need directly from Google Drive links, with no hidden obstacles.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <Globe className="w-10 h-10 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">  Global Content Discovery</h3>
            <p className="text-gray-600">
              Whether you're looking for academic materials, entertainment, or software, discover content shared globally on Google Drive, instantly accessible from anywhere.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <RefreshCw className="w-10 h-10 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Fast Results, Always Up-to-Date</h3>
            <p className="text-gray-600">
              Our search results are updated frequently to ensure you're getting the most current links available, improving the efficiency of your search.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
