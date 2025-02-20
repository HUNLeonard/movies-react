import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Popular Categories",
      links: [
        { name: "Action Movies", path: "/movies?genres=action" },
        { name: "Adventure", path: "/movies?genres=adventure" },
        { name: "Drama", path: "/movies?genres=drama" },
        { name: "Comedy", path: "/movies?genres=comedy" },
        { name: "Horror", path: "/movies?genres=horror" },
        { name: "Documentaries", path: "/movies?genres=documentary" }
      ]
    },
    {
      title: "Quick Links",
      links: [
        { name: "Latest Releases", path: "/" },
        { name: "Top Rated", path: "/" },
        { name: "Most Popular", path: "/" },
        { name: "Coming Soon", path: "/" }
      ]
    },
    {
      title: "Navigation",
      links: [
        { name: "Home", path: "/" },
        { name: "All Movies", path: "/movies" },
        { name: "About Us", path: "/about" },
        { name: "Privacy Policy", path: "/" },
        { name: "Terms of Service", path: "/" }
      ]
    },
    {
      title: "Connect With Us",
      links: [
        { name: "Twitter", path: "/" },
        { name: "Instagram", path: "/" },
        { name: "Facebook", path: "/" },
        { name: "YouTube", path: "/" }
      ]
    }
  ];

  return (
    <div className="max-w-[90rem] mx-auto px-2 md:px-4 py-12">
      {/* Main Footer Content */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
        {/* Brand Section */}
        <div className="max-xs:mx-2 max-lg:mx-auto lg:col-span-2 space-y-6">
          <Link to="/" className="font-extrabold text-3xl hover:text-secondary transition-colors inline-block">
            Movies
          </Link>
          <div className="space-y-4">
            <p className="text-white-100 text-base lg:max-w-md">
              Your premier destination for discovering exceptional cinema. Explore our vast collection of movies across all genres, from timeless classics to the latest releases.
            </p>
            <div className="max-lg:items-center flex flex-col space-y-2">
              <p className="text-white-100 text-sm">Subscribe to our newsletter</p>
              <div className="flex flex-row flex-nowrap max-w-md">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="min-w-0 w-full flex-1 px-4 py-2 bg-white-100/10 text-white-100 placeholder-white-100/50 rounded-l focus:outline-none focus:ring-1 focus:ring-secondary"
                />
                <button className="px-4 py-2 bg-secondary text-black font-semibold rounded-r hover:bg-secondary-100 transition-colors cursor-pointer">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Links Sections */}
        <div className="max-xs:mx-2 max-md:mx-auto lg:col-span-3 grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-8">
          {footerSections.map((section) => (
            <div key={section.title} className="space-y-4 max-xs:block max-lg:flex max-lg:flex-col max-lg:items-center">
              <h3 className="font-semibold text-lg text-secondary">{section.title}</h3>
              <ul className="space-y-2 ">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-white-100 hover:text-secondary transition-colors text-sm inline-block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-12 pt-8 border-t border-white-100/10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <p className="text-white-100 text-sm">
              © {currentYear} Attila Movies. All rights reserved.
            </p>
            <div className="flex gap-4">
              <Link to="#" className="text-white-100 text-sm hover:text-secondary transition-colors">
                Privacy Policy
              </Link>
              <span className="text-white-100/30">•</span>
              <Link to="#" className="text-white-100 text-sm hover:text-secondary transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
          <div className="text-white-100/50 text-sm">
            Made with React.JS by Attila
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;