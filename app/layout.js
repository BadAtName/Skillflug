import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

// Load the Inter font
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next Gen Learn",
  description: "Groq AI + Next.js 14 setup",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex min-h-screen flex-col`}>
        
        {/* Navbar for Desktop */}
        <div className="navbar bg-transparent backdrop-blur-md fixed top-0 left-0 w-full z-50 shadow-md hidden lg:flex">
          <div className="navbar-start">
            <Link href="/" className="text-2xl font-semibold text-blue-700">NEXT GEN LEARN</Link>
          </div>
          <div className="navbar-center">
            <ul className="flex space-x-4 text-lg">
              <li>
                <Link href="/" className="hover:bg-blue-500 hover:text-white p-3 rounded-lg transition duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/ai" className="hover:bg-blue-500 hover:text-white p-3 rounded-lg transition duration-200">
                  AI
                </Link>
              </li>
              {/* Lessons Dropdown */}
              <li className="dropdown">
                <Link 
                  href="/lesson" 
                  className="hover:bg-blue-500 hover:text-white p-3 rounded-lg transition duration-200"
                >
                  Lessons
                </Link>
                <ul className="dropdown-content menu menu-sm bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                  <li><Link href="/biologi">Biologi</Link></li>
                  <li><Link href="/fisika">Fisika</Link></li>
                  <li><Link href="/kimia">Kimia</Link></li>
                  <li><Link href="/matematika">Matematika</Link></li>
                  <li><Link href="/geografi">Geografi</Link></li>
                  <li><Link href="/sejarah">Sejarah</Link></li>
                  <li><Link href="/ekonomi">Ekonomi</Link></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>

        {/* Mobile Floating Bottom Navigation */}
        <div className="lg:hidden fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
          <div className="bg-white/80 backdrop-blur-md rounded-full shadow-lg p-2">
            <ul className="flex space-x-6 justify-center items-center">
              <li>
                <Link href="/" className="tooltip tooltip-top" data-tip="Home">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                </Link>
              </li>
              <li>
                <Link href="/ai" className="tooltip tooltip-top" data-tip="AI">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </Link>
              </li>
              <li>
                <Link href="/lesson" className="tooltip tooltip-top" data-tip="Lessons">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="w-full flex-1">
          {children}
        </div>
      </body>
    </html>
  );
}
