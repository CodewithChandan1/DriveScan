export function FAQ() {
  const faqs = [
    {
      question: "How does the search engine work?",
      answer:
        "Our search engine scans publicly shared Google Drive links and indexes them, allowing you to search for specific content across the internet.",
    },
    {
      question: "Is there a cost to use the website?",
      answer:
        "No, our service is completely free! Just search and access the content you need.",
    },
    {
      question: "What type of content can I find?",
      answer:
        "You can find a variety of public content including movies, books, software, documents, and much more shared via Google Drive links.",
    },
    {
      question: "Is it legal to access these files?",
      answer:
        "We index publicly available content that has been shared by users on Google Drive. We recommend verifying the legality of content before downloading or using it.",
    },
  ];

  return (
    <section className="py-20 px-8 bg-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <details key={index} className="group">
              <summary className="flex justify-between items-center cursor-pointer list-none p-4 bg-gray-50 rounded-lg">
                <span className="font-medium">{faq.question}</span>
                <span className="transition group-open:rotate-180">↓</span>
              </summary>
              <p className="mt-4 px-4 text-gray-600">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
