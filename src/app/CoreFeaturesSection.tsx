export default function CoreFeaturesSection() {
  return (
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
  );
}