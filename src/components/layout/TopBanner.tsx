import { Phone, CloudSun } from 'lucide-react';
import { useEffect, useState } from 'react';

const TopBanner: React.FC = () => {
  const [weather, setWeather] = useState<{ temp: number; desc: string } | null>(
    null
  );

  useEffect(() => {
    // Bacolod coordinates: 10.6762, 122.9513
    fetch(
      'https://api.open-meteo.com/v1/forecast?latitude=10.6762&longitude=122.9513&current=temperature_2m,weather_code'
    )
      .then(res => res.json())
      .then(data => {
        const code = data.current?.weather_code;
        const desc =
          code === 0
            ? 'Clear'
            : code <= 3
              ? 'Cloudy'
              : code <= 67
                ? 'Rainy'
                : 'Stormy';
        setWeather({ temp: Math.round(data.current?.temperature_2m), desc });
      })
      .catch(() => {});
  }, []);

  return (
    <div className="bg-primary-700 text-white text-xs">
      <div className="container mx-auto px-4 py-1.5 flex items-center justify-between">
        <a
          href="tel:911"
          className="flex items-center gap-1.5 hover:text-primary-200 transition-colors"
        >
          <Phone className="h-3 w-3" />
          <span>
            Emergency: <strong>911</strong>
          </span>
          <span className="hidden sm:inline text-primary-300">
            | CDRRMO: (034) 432-3871
          </span>
        </a>
        <div className="flex items-center gap-4">
          <span className="text-primary-200">
            {new Date().toLocaleDateString('en-PH', {
              weekday: 'short',
              month: 'short',
              day: 'numeric',
            })}
          </span>
          {weather && (
            <div className="flex items-center gap-1.5 text-primary-200">
              <CloudSun className="h-3 w-3" />
              <span>
                {weather.temp}°C, {weather.desc}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TopBanner;
