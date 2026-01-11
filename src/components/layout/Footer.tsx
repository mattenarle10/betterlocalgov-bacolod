import { Facebook } from 'lucide-react';
import { footerNavigation } from '../../data/navigation';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 pt-12 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <img
                src="/B-Logo/BetterBacolod Icons_favicon tp.png"
                alt="BetterBacolod"
                className="h-12 w-12 mr-3"
              />
              <div>
                <div className="font-bold">BetterBacolod</div>
                <div className="text-xs text-gray-400">
                  Civic Tech for Bacolod City
                </div>
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Open-source initiative for accessible government information.
            </p>
            <div className="flex space-x-4">
              {footerNavigation.socialLinks.map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-gray-400 hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Facebook className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {footerNavigation.mainSections.map(section => (
            <div key={section.title}>
              <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map(link =>
                  link.href.startsWith('http') ? (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-gray-400 hover:text-white text-sm transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {link.label}
                      </a>
                    </li>
                  ) : (
                    <li key={link.label}>
                      <Link
                        to={link.href}
                        className="text-gray-400 hover:text-white text-sm transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} BetterBacolod · Not an official
            government website
          </p>
          <span className="inline-flex items-center gap-1 px-2 py-1 bg-white text-gray-900 text-xs rounded-full">
            💸 Cost to build this site: ₱435.39
          </span>
          <div className="flex gap-6">
            <a
              href="https://github.com/iyanski/betterlocalgov"
              className="text-gray-400 hover:text-white text-xs transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contribute on GitHub
            </a>
            <Link
              to="/sitemap"
              className="text-gray-400 hover:text-white text-xs transition-colors"
            >
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
