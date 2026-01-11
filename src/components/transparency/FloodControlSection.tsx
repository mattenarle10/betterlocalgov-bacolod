import { ExternalLink } from 'lucide-react';
import floodData from '../../data/transparency/flood-control.json';

export default function FloodControlSection() {
  const { stats, byYear, byType, topContractors, recentProjects } = floodData;

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-blue-50 rounded-lg p-4">
          <p className="text-sm text-blue-600 font-medium">Total Projects</p>
          <p className="text-2xl font-bold text-blue-700">
            {stats.totalProjects}
          </p>
        </div>
        <div className="bg-green-50 rounded-lg p-4">
          <p className="text-sm text-green-600 font-medium">
            Total Contract Cost
          </p>
          <p className="text-2xl font-bold text-green-700">
            ₱{(stats.totalCost / 1000000000).toFixed(2)}B
          </p>
        </div>
        <div className="bg-purple-50 rounded-lg p-4">
          <p className="text-sm text-purple-600 font-medium">
            Unique Contractors
          </p>
          <p className="text-2xl font-bold text-purple-700">
            {stats.uniqueContractors}
          </p>
        </div>
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Projects by Year */}
        <div>
          <h3 className="text-sm font-semibold text-gray-900 mb-3 pb-2 border-b border-gray-300 uppercase tracking-wide">
            Projects by Year
          </h3>
          <div className="space-y-2">
            {byYear.map(item => (
              <div key={item.year} className="flex items-center gap-3">
                <span className="text-sm text-gray-600 w-12">{item.year}</span>
                <div className="flex-1 bg-gray-100 rounded-full h-6 overflow-hidden">
                  <div
                    className="bg-blue-500 h-full rounded-full flex items-center justify-end pr-2"
                    style={{ width: `${(item.count / 23) * 100}%` }}
                  >
                    <span className="text-xs text-white font-medium">
                      {item.count}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Projects by Type */}
        <div>
          <h3 className="text-sm font-semibold text-gray-900 mb-3 pb-2 border-b border-gray-300 uppercase tracking-wide">
            Projects by Type
          </h3>
          <div className="space-y-2">
            {byType.map((item, i) => {
              const colors = ['bg-emerald-500', 'bg-amber-500', 'bg-rose-500'];
              return (
                <div key={item.type} className="flex items-center gap-3">
                  <div className={`w-3 h-3 rounded-full ${colors[i]}`} />
                  <span className="text-sm text-gray-700 flex-1">
                    {item.type}
                  </span>
                  <span className="text-sm font-medium text-gray-900">
                    {item.count}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Top Contractors */}
      <div>
        <h3 className="text-sm font-semibold text-gray-900 mb-3 pb-2 border-b border-gray-300 uppercase tracking-wide">
          Top Contractors
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
          {topContractors.map((c, i) => (
            <div
              key={i}
              className="bg-gray-50 rounded-lg p-3 flex justify-between items-center"
            >
              <span className="text-sm text-gray-700 truncate pr-2">
                {c.name}
              </span>
              <span className="text-sm font-semibold text-primary-600 whitespace-nowrap">
                {c.count} projects
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Projects Table */}
      <div>
        <h3 className="text-sm font-semibold text-gray-900 mb-3 pb-2 border-b border-gray-300 uppercase tracking-wide">
          Recent Major Projects
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-2 text-gray-600 font-medium">
                  Year
                </th>
                <th className="text-left py-2 text-gray-600 font-medium">
                  Project
                </th>
                <th className="text-right py-2 text-gray-600 font-medium">
                  Cost
                </th>
              </tr>
            </thead>
            <tbody>
              {recentProjects.map((p, i) => (
                <tr key={i} className="border-b border-gray-100">
                  <td className="py-2 text-gray-900">{p.year}</td>
                  <td className="py-2 text-gray-700">{p.description}</td>
                  <td className="py-2 text-right text-gray-900 whitespace-nowrap">
                    ₱{(p.cost / 1000000).toFixed(1)}M
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* View More Link */}
      <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-gray-200">
        <a
          href="https://www.bettergov.ph/flood-control-projects?deo=Bacolod+City+District+Engineering+Office"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors text-sm"
        >
          View All Projects on BetterGov <ExternalLink className="h-4 w-4" />
        </a>
        <a
          href="https://visualizations.bettergov.ph/map?deo=Bacolod+City+District+Engineering+Office"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-4 py-2 border border-primary-600 text-primary-600 rounded-lg hover:bg-primary-50 transition-colors text-sm"
        >
          View on Map <ExternalLink className="h-4 w-4" />
        </a>
      </div>

      <p className="text-xs text-gray-500">
        Data source: {floodData.source} • Last updated: {floodData.lastUpdated}
      </p>
    </div>
  );
}
