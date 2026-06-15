const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/10">

      <div className="max-w-7xl mx-auto px-8 py-20">

        <div className="grid lg:grid-cols-4 gap-12">

          <div>
            <h3 className="text-white text-3xl font-bold">
              AgriFarm
            </h3>

            <p className="text-white/60 mt-5 leading-8">
              AI-powered agriculture platform helping farmers
              improve crop health and productivity.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-5">
              Product
            </h4>

            <ul className="space-y-3 text-white/60">
              <li>Dashboard</li>
              <li>Analytics</li>
              <li>Monitoring</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-5">
              Resources
            </h4>

            <ul className="space-y-3 text-white/60">
              <li>Knowledge Hub</li>
              <li>Documentation</li>
              <li>Support</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-5">
              Company
            </h4>

            <ul className="space-y-3 text-white/60">
              <li>About</li>
              <li>Contact</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 mt-16 pt-8 text-center">
          <p className="text-white/40">
            © 2026 AgriFarm AI. All Rights Reserved.
          </p>
        </div>

      </div>

    </footer>
  );
};

export default Footer;