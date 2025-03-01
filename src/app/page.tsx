export default function Home() {
  return (
    <main className="bg-cafeNoir text-white min-h-screen">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-20 px-6">
        <h1 className="text-5xl font-bold text-icterine">Borrow. Wear. Return.</h1>
        <p className="text-lg text-orangeWheel mt-4">
          Your dream outfit is already in your friend’s closet. Find it, request it, and borrow with ease.
        </p>
        <div className="mt-6">
          <button className="bg-icterine text-black px-6 py-3 rounded-lg font-semibold mr-4">
            Get Started
          </button>
          <button className="bg-orangeWheel text-black px-6 py-3 rounded-lg font-semibold">
            Explore Closets
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-myrtleGreen text-center">
        <h2 className="text-3xl font-semibold mb-6">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 bg-cafeNoir rounded-lg">
            <h3 className="text-xl font-bold text-icterine">Upload Your Clothes</h3>
            <p className="text-sm mt-2">Snap a pic or link your wardrobe to Frvr.</p>
          </div>
          <div className="p-6 bg-cafeNoir rounded-lg">
            <h3 className="text-xl font-bold text-icterine">Find Your Friends</h3>
            <p className="text-sm mt-2">Connect and browse their closets in one place.</p>
          </div>
          <div className="p-6 bg-cafeNoir rounded-lg">
            <h3 className="text-xl font-bold text-icterine">Request & Confirm</h3>
            <p className="text-sm mt-2">Send a quick request and get a reply instantly.</p>
          </div>
          <div className="p-6 bg-cafeNoir rounded-lg">
            <h3 className="text-xl font-bold text-icterine">AI-Powered Payments</h3>
            <p className="text-sm mt-2">[Coming Soon] Fair reimbursements, no hassle.</p>
          </div>
        </div>
      </section>

      {/* Call-to-Action */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-6">Ready to Lend & Borrow?</h2>
        <div>
          <button className="bg-icterine text-black px-6 py-3 rounded-lg font-semibold mr-4">
            Sign Up Now
          </button>
          <button className="bg-orangeWheel text-black px-6 py-3 rounded-lg font-semibold">
            Browse Closets
          </button>
        </div>
      </section>

      {/*
