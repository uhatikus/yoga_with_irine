import React from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

interface Location {
  name: string;
  position: {
    lat: number;
    lng: number;
  };
  description: string;
}

const BarcelonaMap: React.FC = () => {
  const [selectedLocation, setSelectedLocation] =
    React.useState<Location | null>(null);

  const locations: Location[] = [
    {
      name: "Sagrada Familia",
      position: { lat: 41.4036, lng: 2.1744 },
      description: "Gaudí's famous unfinished cathedral",
    },
    {
      name: "Plaça d'Espanya",
      position: { lat: 41.375, lng: 2.1487 },
      description: "One of Barcelona's most important squares",
    },
  ];

  const mapCenter = {
    lat: 41.3893,
    lng: 2.1616,
  };

  const mapStyles = {
    height: "500px",
    width: "100%",
  };

  return (
    <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
      <GoogleMap mapContainerStyle={mapStyles} zoom={13} center={mapCenter}>
        {locations.map((location) => (
          <Marker
            key={location.name}
            position={location.position}
            onClick={() => setSelectedLocation(location)}
          />
        ))}

        {selectedLocation && (
          <InfoWindow
            position={selectedLocation.position}
            onCloseClick={() => setSelectedLocation(null)}
          >
            <div>
              <h3 className="font-bold">{selectedLocation.name}</h3>
              <p>{selectedLocation.description}</p>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </LoadScript>
  );
};

export default BarcelonaMap;
