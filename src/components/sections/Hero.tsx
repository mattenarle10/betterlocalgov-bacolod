import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, ArrowRight } from 'lucide-react';
import { Heading } from '../ui/Heading';
import { Text } from '../ui/Text';

export default function Hero() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  const popularServices = [
    { label: 'Business Permit', path: '/services/business' },
    { label: 'Health Services', path: '/services/health-services' },
    { label: 'Waste Collection', path: '/services/garbage-waste-disposal' },
    { label: 'Transportation', path: '/services/transportation' },
  ];

  return (
    <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-12 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left section with title */}
          <div className="animate-fade-in">
            <Text transform="uppercase" className="text-primary-100">
              Welcome to
            </Text>
            <Heading className="text-4xl md:text-5xl font-bold mb-4">
              {import.meta.env.VITE_GOVERNMENT_NAME}
            </Heading>
            <Text className="text-lg text-primary-50">
              {t('hero.subtitle')}
            </Text>
          </div>

          {/* Right section with search box */}
          <div className="animate-fade-in">
            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <Search className="h-6 w-6 text-primary-600" />
                <h3 className="text-2xl font-bold text-gray-900">
                  Find a Service
                </h3>
              </div>

              <form onSubmit={handleSearch} className="mb-6">
                <div className="flex gap-3">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                    placeholder="e.g., birth certificate, business permit"
                    className="flex-1 px-4 py-3 text-gray-900 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent placeholder-gray-400"
                  />
                  <button
                    type="submit"
                    className="bg-primary-600 hover:bg-primary-700 text-white p-3 rounded-xl transition-colors shadow-lg hover:shadow-xl"
                  >
                    <ArrowRight className="h-6 w-6" />
                  </button>
                </div>
              </form>

              <div className="flex flex-wrap gap-2">
                <span className="text-sm text-gray-500 font-medium">
                  Popular:
                </span>
                {popularServices.map(service => (
                  <button
                    key={service.label}
                    onClick={() => navigate(service.path)}
                    className="text-sm px-4 py-2 bg-primary-50 text-primary-700 rounded-full hover:bg-primary-100 transition-colors font-medium"
                  >
                    {service.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
