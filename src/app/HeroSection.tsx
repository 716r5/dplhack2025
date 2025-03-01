export default function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center py-20 bg-gradient-to-br from-black to-gray-900">
      <img src="/path/to/hero-image.jpg" alt="Shared Wardrobe Concept" className="w-full max-w-2xl mb-8" />
      <h1 className="text-5xl font-bold text-icterine mb-4">
        Borrow. Wear. Return. Lending clothes made simple.
      </h1>
      <p className="text-lg mb-8">
        Your dream outfit is already in your friend's closet. Find it, request it, and borrow with ease.
      </p>
      <div className="flex gap-4">
        <button className="px-6 py-3 bg-icterine text-black rounded-lg shadow-lg hover:bg-orange transition">
          Get Started
        </button>
        <button className="px-6 py-3 bg-orange text-black rounded-lg shadow-lg hover:bg-syracuse-red-orange transition">
          Explore Closets
        </button>
      </div>
    </section>
  );
} 