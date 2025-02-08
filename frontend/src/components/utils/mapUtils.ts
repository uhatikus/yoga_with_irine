// utils/mapUtils.ts

export interface YogaLocation {
  name: string;
  position: google.maps.LatLngLiteral;
  description: string;
  address: string;
  schedule: string;
  link: string;
}

export interface LatLng {
  lat: number;
  lng: number;
}

/**
 * Calculates the geographic center of given locations.
 */
export function calculateMapCenter(locations: YogaLocation[]): LatLng {
  if (locations.length === 0) return { lat: 0, lng: 0 };

  const latitudes = locations.map((loc) => loc.position.lat);
  const longitudes = locations.map((loc) => loc.position.lng);

  return {
    lat: (Math.min(...latitudes) + Math.max(...latitudes)) / 2,
    lng: (Math.min(...longitudes) + Math.max(...longitudes)) / 2,
  };
}

/**
 * Determines the optimal zoom level based on the spread of locations.
 */
export function calculateZoom(locations: YogaLocation[]): number {
  if (locations.length === 0) return 10; // Default zoom if no locations

  const latitudes = locations.map((loc) => loc.position.lat);
  const longitudes = locations.map((loc) => loc.position.lng);

  const latDiff = Math.max(...latitudes) - Math.min(...latitudes);
  const lngDiff = Math.max(...longitudes) - Math.min(...longitudes);
  const maxDiff = Math.max(latDiff, lngDiff); // Use the largest range

  const zoomLevels = [
    { diff: 0.0005, zoom: 21 },
    { diff: 0.001, zoom: 20 },
    { diff: 0.005, zoom: 18 },
    { diff: 0.01, zoom: 16 },
    { diff: 0.05, zoom: 14 },
    { diff: 0.1, zoom: 12 },
    { diff: 0.5, zoom: 10 },
    { diff: 1, zoom: 8 },
    { diff: 5, zoom: 6 },
    { diff: 10, zoom: 4 },
    { diff: 20, zoom: 3 },
    { diff: 40, zoom: 2 },
    { diff: 80, zoom: 1 },
  ];

  return zoomLevels.find((z) => maxDiff < z.diff)?.zoom || 1;
}
