import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen bg-gray-100">

      {/* HERO SECTION */}
      <div
        className="h-[500px] flex flex-col justify-center items-center text-center text-white"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1492724441997-5dc865305da7')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >

        <h1 className="text-5xl font-bold mb-4">
          Find Your Dream Job
        </h1>

        <p className="text-lg mb-6">
          Discover thousands of job opportunities with top companies
        </p>

        <div className="flex gap-4">

          <Link to="/jobs">
            <button className="bg-blue-600 px-6 py-3 rounded-lg text-white font-semibold hover:bg-blue-700">
              Browse Jobs
            </button>
          </Link>

          <Link to="/postjob">
            <button className="bg-white px-6 py-3 rounded-lg text-black font-semibold hover:bg-gray-200">
              Post a Job
            </button>
          </Link>

        </div>
      </div>

      {/* FEATURES SECTION */}

      <div className="grid md:grid-cols-3 gap-8 p-12 text-center">

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-bold mb-2">🔍 Search Jobs</h2>
          <p>Find jobs by company, role, or location easily.</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-bold mb-2">💼 Top Companies</h2>
          <p>Apply to companies like Google, Amazon, Microsoft.</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-bold mb-2">🚀 Fast Hiring</h2>
          <p>Get hired faster with our simple application process.</p>
        </div>

      </div>

    </div>
  );
}

export default Home;