import { useState } from 'react';
import Section from '../components/ui/Section';
import { Heading } from '../components/ui/Heading';
import { Text } from '../components/ui/Text';
import { Card, CardContent } from '../components/ui/Card';
import SEO from '../components/SEO';
import {
  ChevronRight,
  Droplets,
  Building2,
  FileText,
  ExternalLink,
} from 'lucide-react';
import FloodControlSection from '../components/transparency/FloodControlSection';

const categories = [
  {
    slug: 'flood-control',
    name: 'Flood Control Projects',
    icon: Droplets,
    description: '39 DPWH flood control projects in Bacolod City',
  },
  {
    slug: 'infrastructure',
    name: 'Infrastructure (DIME)',
    icon: Building2,
    description: 'Major infrastructure projects tracking',
  },
  {
    slug: 'reports',
    name: 'Reports & Documents',
    icon: FileText,
    description: 'Budget, audit, and FOI information',
  },
];

const Transparency: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const handleSectionClick = (slug: string) => {
    setActiveSection(activeSection === slug ? null : slug);
  };

  const renderContent = () => {
    if (activeSection === 'flood-control') return <FloodControlSection />;
    if (activeSection === 'infrastructure') return <InfrastructureSection />;
    if (activeSection === 'reports') return <ReportsSection />;
    return null;
  };

  return (
    <>
      <SEO
        title="Transparency"
        description="Government transparency data for Bacolod City - flood control projects, infrastructure, procurement, and public reports."
        keywords="transparency, flood control, infrastructure, procurement, Bacolod City, DPWH"
      />
      <Section className="min-h-[60vh]">
        <div className="text-center mb-6 md:mb-10">
          <Heading level={2}>Transparency</Heading>
          <Text className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
            Access public data on government projects, budgets, and procurement
            in Bacolod City.
          </Text>
        </div>

        {/* Mobile: List Tiles */}
        <div className="lg:hidden space-y-2">
          {categories.map(cat => {
            const Icon = cat.icon;
            const isActive = activeSection === cat.slug;
            return (
              <div key={cat.slug}>
                <button
                  className={`w-full flex items-center gap-4 p-4 rounded-lg border text-left transition-colors ${
                    isActive
                      ? 'border-primary-500 bg-primary-50 rounded-b-none'
                      : 'border-gray-200 bg-white hover:bg-gray-50'
                  }`}
                  onClick={() => handleSectionClick(cat.slug)}
                >
                  <div
                    className={`p-2 rounded-lg ${isActive ? 'bg-primary-600 text-white' : 'bg-gray-100 text-gray-600'}`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900">{cat.name}</h3>
                  </div>
                  <ChevronRight
                    className={`h-5 w-5 text-gray-400 transition-transform ${isActive ? 'rotate-90' : ''}`}
                  />
                </button>
                {isActive && (
                  <Card className="rounded-t-none border-t-0 border-primary-500">
                    <CardContent className="p-4">{renderContent()}</CardContent>
                  </Card>
                )}
              </div>
            );
          })}
        </div>

        {/* Desktop: Card Grid + Content Below */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-3 gap-6">
            {categories.map(cat => {
              const Icon = cat.icon;
              const isActive = activeSection === cat.slug;
              return (
                <Card
                  key={cat.slug}
                  hoverable
                  className={`border-t-4 cursor-pointer transition-all ${isActive ? 'border-primary-600 ring-2 ring-primary-200' : 'border-primary-500'}`}
                  onClick={() => handleSectionClick(cat.slug)}
                >
                  <CardContent className="flex flex-col h-full p-6">
                    <div className="flex gap-3 items-start">
                      <div
                        className={`p-3 rounded-md ${isActive ? 'bg-primary-600 text-white' : 'bg-primary-100 text-primary-600'}`}
                      >
                        <Icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">
                          {cat.name}
                        </h3>
                        <Text className="text-gray-600 text-sm mt-1">
                          {cat.description}
                        </Text>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {activeSection && (
            <Card className="mt-8">
              <CardContent className="p-6">{renderContent()}</CardContent>
            </Card>
          )}
        </div>
      </Section>
    </>
  );
};

// Infrastructure Section - Links to BetterGov DIME
const InfrastructureSection = () => (
  <div className="space-y-4">
    <p className="text-gray-600">
      Track major infrastructure projects in Negros Occidental through the DPWH
      Digital Information for Monitoring and Evaluation (DIME) system.
    </p>
    <a
      href="https://visualizations.bettergov.ph/dime?province=NEGROS+OCCIDENTAL"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
    >
      View DIME Projects <ExternalLink className="h-4 w-4" />
    </a>
    <p className="text-xs text-gray-500 mt-4">
      Data source: DPWH DIME via BetterGov.ph
    </p>
  </div>
);

// Reports Section - Links to official documents
const ReportsSection = () => (
  <div className="space-y-6">
    <div>
      <h3 className="text-sm font-semibold text-gray-900 mb-3 pb-2 border-b border-gray-300 uppercase tracking-wide">
        Budget & Finance
      </h3>
      <ul className="space-y-2 text-sm">
        <li>
          <a
            href="https://transparency.bettergov.ph/budget/regional"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-600 hover:underline flex items-center gap-1"
          >
            Regional Budget Data (GAA) <ExternalLink className="h-3 w-3" />
          </a>
        </li>
        <li>
          <a
            href="https://bacolodcity.gov.ph"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-600 hover:underline flex items-center gap-1"
          >
            City Budget Documents <ExternalLink className="h-3 w-3" />
          </a>
        </li>
      </ul>
    </div>

    <div>
      <h3 className="text-sm font-semibold text-gray-900 mb-3 pb-2 border-b border-gray-300 uppercase tracking-wide">
        Procurement
      </h3>
      <ul className="space-y-2 text-sm">
        <li>
          <a
            href="https://transparency.bettergov.ph/locations/Negros%20Occidental"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-600 hover:underline flex items-center gap-1"
          >
            PhilGEPS Procurement Data (Negros Occidental){' '}
            <ExternalLink className="h-3 w-3" />
          </a>
        </li>
        <li>
          <a
            href="https://www.philgeps.gov.ph"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-600 hover:underline flex items-center gap-1"
          >
            PhilGEPS Official Portal <ExternalLink className="h-3 w-3" />
          </a>
        </li>
      </ul>
    </div>

    <div>
      <h3 className="text-sm font-semibold text-gray-900 mb-3 pb-2 border-b border-gray-300 uppercase tracking-wide">
        Audit & Accountability
      </h3>
      <ul className="space-y-2 text-sm">
        <li>
          <a
            href="https://www.coa.gov.ph"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-600 hover:underline flex items-center gap-1"
          >
            Commission on Audit Reports <ExternalLink className="h-3 w-3" />
          </a>
        </li>
        <li>
          <a
            href="https://www.foi.gov.ph"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-600 hover:underline flex items-center gap-1"
          >
            Freedom of Information Portal <ExternalLink className="h-3 w-3" />
          </a>
        </li>
      </ul>
    </div>

    <p className="text-xs text-gray-500 pt-4 border-t border-gray-200">
      For specific Bacolod City documents, visit the official city website or
      contact the City Information Office.
    </p>
  </div>
);

export default Transparency;
