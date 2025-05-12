import { Button } from "@/components/ui/button";

export const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -bottom-20 left-1/4 w-80 h-80 bg-teal-500/10 rounded-full mix-blend-screen filter blur-3xl"></div>
      <div className="absolute top-10 right-0 w-64 h-64 bg-cyan-500/10 rounded-full mix-blend-screen filter blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="space-y-4">
            <a href="/">
              <h3 className="text-xl font-bold">
                <span className="bg-gradient-to-r from-cyan-400 to-teal-500 text-transparent bg-clip-text">
                  School Sound
                </span>
              </h3>
            </a>
            <p className="text-gray-300">Professional sound design education</p>
            <div className="space-y-2">
              <p className="text-gray-400 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                contact@schoolsound.pro
              </p>
              <p className="text-gray-400 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                Address
              </p>
              <p className="text-gray-400 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                CRN
              </p>
            </div>
          </div>

          {/* Empty columns for balance */}
          <div className="hidden md:block"></div>
          <div className="hidden md:block"></div>

          {/* Policies - moved to the right */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-200">Policies</h4>
            <div className="space-y-3">
              <a href="/privacy-policy">
                <Button
                  variant="ghost"
                  className="text-gray-300 hover:text-cyan-400 w-full justify-start px-0 hover:bg-transparent"
                >
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                  Privacy Policy
                </Button>
              </a>
              <a href="/refund-policy">
                <Button
                  variant="ghost"
                  className="text-gray-300 hover:text-teal-400 w-full justify-start px-0 hover:bg-transparent"
                >
                  <span className="w-2 h-2 bg-teal-400 rounded-full mr-3"></span>
                  Refund Policy
                </Button>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom line */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} School Sound. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
