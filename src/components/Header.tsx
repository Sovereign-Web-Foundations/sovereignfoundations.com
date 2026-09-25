import { Link } from '@tanstack/react-router'

export function Header() {
  return (
    <>
      <header className="fixed top-0 w-full z-50 bg-white  text-[#033183] shadow-sm border-b-2 border-[#033183]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">
          <Link className="flex items-center" to="/">
            <div className="h-18 px-4 py-1 rounded-md flex items-center">
              <img
                alt="Sovereign Web Foundations"
                className="h-full w-auto object-contain"
                src="/images/sovereign-web-foundations-banner-logo.png"
              />
            </div>
          </Link>
          <div className="flex items-center gap-8">
            <nav className="hidden md:flex items-center gap-8">
              <Link
                className="hover:text-[#033183]/80 font-medium text-sm transition-colors duration-150"
                to="/philosophy"
              >
                Philosophy
              </Link>
              <a
                className="hover:text-[#033183]/80 font-medium text-sm transition-colors duration-150"
                href="#"
              >
                Products
              </a>
              <a
                className="hover:text-[#033183]/80 font-medium text-sm transition-colors duration-150"
                href="#"
              >
                For Agencies
              </a>
              <a
                className="hover:text-[#033183]/80 font-medium text-sm transition-colors duration-150"
                href="#"
              >
                About
              </a>
            </nav>
            <a
              className="inline-flex items-center justify-center px-4 py-2 rounded-md bg-white text-[#033183] hover:bg-slate-100 font-semibold text-sm transition-all duration-150 shadow-sm border-2 border-[#033183]"
              href="#"
            >
              Get the Assessment
            </a>
          </div>
        </div>
      </header>
    </>
  )
}
