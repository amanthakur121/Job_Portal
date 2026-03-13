function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-10">

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 p-8">

        {/* About */}

        <div>
          <h2 className="text-xl font-bold mb-3">JobPortal</h2>
          <p className="text-gray-400">
            Find your dream job and connect with top companies around the world.
          </p>
        </div>

        {/* Links */}

        <div>
          <h2 className="text-xl font-bold mb-3">Quick Links</h2>

          <ul className="space-y-2 text-gray-400">
            <li>Jobs</li>
            <li>Post Job</li>
            <li>Login</li>
            <li>Register</li>
          </ul>
        </div>

        {/* Social */}

        <div>
          <h2 className="text-xl font-bold mb-3">Follow Us</h2>

          <div className="flex gap-4 text-gray-400">

            <span>🌐</span>
            <span>🐦</span>
            <span>📘</span>
            <span>📸</span>

          </div>

        </div>

      </div>

      <div className="text-center border-t border-gray-700 py-4 text-gray-400">

        © 2026 JobPortal. All rights reserved.

      </div>

    </footer>
  );
}

export default Footer;