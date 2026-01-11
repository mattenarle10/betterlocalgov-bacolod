import Section from '../components/ui/Section';
import { Heading } from '../components/ui/Heading';
import { Text } from '../components/ui/Text';
import { governmentActivitCategories } from '../data/yamlLoader';
import * as LucideIcons from 'lucide-react';
import SEO from '../components/SEO';
import { Card, CardContent } from '../components/ui/Card';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { createMarkdownComponents } from '../lib/markdownComponents';
import { getTypographyTheme } from '../lib/typographyThemes';

// Import markdown files directly
import officialsContent from '../../content/government/officials.md?raw';
import departmentsContent from '../../content/government/departments.md?raw';
import barangaysContent from '../../content/government/barangays.md?raw';

const contentMap: { [key: string]: string } = {
  officials: officialsContent,
  departments: departmentsContent,
  barangays: barangaysContent,
};

const Government: React.FC = () => {
  const markdownComponents = createMarkdownComponents(
    getTypographyTheme('default')
  );

  const scrollToSection = (slug: string) => {
    document.getElementById(slug)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <SEO
        title="Government"
        description="Learn about Bacolod City government - officials, departments, and barangays."
        keywords="government, city officials, departments, barangays, Bacolod City"
      />
      <Section>
        <Heading level={2}>Bacolod City Government</Heading>
        <Text className="text-gray-600 mb-6">
          Learn about your city officials, government departments, and
          barangays.
        </Text>

        {/* Category Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
          {governmentActivitCategories.categories.map(cat => {
            const CatIcon = LucideIcons[
              cat.icon as keyof typeof LucideIcons
            ] as React.ComponentType<{ className?: string }>;
            return (
              <Card
                key={cat.slug}
                hoverable
                className="border-t-4 border-primary-500 cursor-pointer"
                onClick={() => scrollToSection(cat.slug)}
              >
                <CardContent className="flex flex-col h-full p-6">
                  <div className="flex gap-2">
                    <div className="bg-primary-100 text-primary-600 p-3 rounded-md mb-4 self-start">
                      {CatIcon && <CatIcon className="h-6 w-6" />}
                    </div>
                    <h3 className="text-lg font-semibold mb-4 text-gray-900 self-center">
                      {cat.category}
                    </h3>
                  </div>
                  <Text className="text-gray-800">{cat.description}</Text>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Content Sections */}
        {governmentActivitCategories.categories.map(cat => (
          <div key={cat.slug} id={cat.slug} className="mb-12 scroll-mt-24">
            <Card className="markdown-content">
              <CardContent className="p-6">
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  components={markdownComponents}
                >
                  {contentMap[cat.slug] || ''}
                </ReactMarkdown>
              </CardContent>
            </Card>
          </div>
        ))}
      </Section>
    </>
  );
};

export default Government;
