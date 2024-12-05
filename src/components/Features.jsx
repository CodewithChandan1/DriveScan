import { Search, BarChart2, Zap } from "lucide-react";

const features = [
  {
    icon: Search,
    title: "Fast and Efficient",
    description:
      "Get the search results you need instantly. No waiting around for content to load.",
  },
  {
    icon: BarChart2,
    title: "Wide Range of Content",
    description:
      "Find movies, documents, music, software, and more across public Google Drive links.",
  },
  {
    icon: Zap,
    title: "Completely Free",
    description:
      "Access content without any subscription or payment. Just search and find what you need!",
  },
];

export function Features() {
  return (
    <section className="py-20 px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Use Our Search Engine?
         
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors"
            >
              <feature.icon className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
