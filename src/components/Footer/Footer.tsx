import Logo from "../../assets/logo-text.png";

const Footer = () => {
  return (
    <footer className="border-t border-slate-100 bg-white">
      <div className="container mx-auto px-6 py-12">
     
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
       
          <div className="max-w-xs">
            <img src={Logo} alt="Dev Stack" className="h-7 w-auto" />

            <p className="mt-4 text-sm leading-relaxed text-slate-500">
              Curated tools, technologies, and resources for developers
              building modern software.
            </p>

            <div className="mt-4 flex gap-4">
              <a href="#" className="text-sm font-medium text-slate-600 hover:text-slate-900">
                GitHub
              </a>
              <a href="#" className="text-sm font-medium text-slate-600 hover:text-slate-900">
                Twitter
              </a>
              <a href="#" className="text-sm font-medium text-slate-600 hover:text-slate-900">
                LinkedIn
              </a>
            </div>
          </div>

          {/* Link columns — 2-per-row on small screens, 3-per-row from sm: up */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:gap-16">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wide text-slate-900">
                Product
              </h4>
              <ul className="mt-4 flex flex-col gap-3">
                <li>
                  <a href="#" className="text-sm text-slate-500 hover:text-slate-900">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-slate-500 hover:text-slate-900">
                    Technologies
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-slate-500 hover:text-slate-900">
                    Projects
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-wide text-slate-900">
                Company
              </h4>
              <ul className="mt-4 flex flex-col gap-3">
                <li>
                  <a href="#" className="text-sm text-slate-500 hover:text-slate-900">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-slate-500 hover:text-slate-900">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-slate-500 hover:text-slate-900">
                    Careers
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-wide text-slate-900">
                Legal
              </h4>
              <ul className="mt-4 flex flex-col gap-3">
                <li>
                  <a href="#" className="text-sm text-slate-500 hover:text-slate-900">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-slate-500 hover:text-slate-900">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

  
        <div className="mt-10 flex flex-col gap-4 border-t border-slate-100 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-slate-400">
            © 2026 Dev Stack. All rights reserved.
          </p>

          <div className="flex gap-6">
            <a href="#" className="text-xs text-slate-400 hover:text-slate-900">
              Privacy
            </a>
            <a href="#" className="text-xs text-slate-400 hover:text-slate-900">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;