import React, { useState } from "react";
import {
  APIProvider,
  Map,
  AdvancedMarker,
  MapCameraChangedEvent,
  Pin,
  InfoWindow,
} from "@vis.gl/react-google-maps";
import { calculateMapCenter, calculateZoom, Location } from "../utils/mapUtils";

const locations: Location[] = [
  {
    name: "ACADEMIA M",
    position: { lat: 41.377603, lng: 2.155058 },
    description: "Cozy yoga studio for 10 students",
    address: "Carrer de Sepúlveda, 57, L'Eixample, 08015 Barcelona",
    schedule: "Sunday: 12:15 - 13:45",
  },
  {
    name: "Yoga Club Barcelona",
    position: { lat: 41.3988579, lng: 2.1596346 },
    description: "Great yoga studio for 20 students",
    address: "Carrer de Francisco Giner, 14, Grácia, 08012 Barcelona",
    schedule: "Tuesday & Friday: 19:30 - 21:00",
  },
];

const BarcelonaMap: React.FC = () => {
  const [googleLoaded, setGoogleLoaded] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(
    null
  );

  const onLoad = () => {
    console.log("Maps API has loaded.");
    setGoogleLoaded(true);
  };

  const mapCenter = calculateMapCenter(locations);
  const zoom = calculateZoom(locations);

  const mapStyles = {
    height: "500px",
    width: "100%",
  };
  return (
    <APIProvider
      apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}
      onLoad={onLoad}
    >
      <Map
        style={mapStyles}
        mapId="Barcelona map"
        defaultZoom={zoom}
        defaultCenter={mapCenter}
        onCameraChanged={(ev: MapCameraChangedEvent) =>
          console.log(
            "camera changed:",
            ev.detail.center,
            "zoom:",
            ev.detail.zoom
          )
        }
      >
        {googleLoaded &&
          locations.map((location) => (
            <AdvancedMarker
              key={location.name}
              position={location.position}
              clickable={true}
              onClick={() => setSelectedLocation(location)}
            >
              <Pin
                background={"#ff4433"}
                glyphColor={"#fff"}
                borderColor={"#000"}
                scale={1.2}
              />
            </AdvancedMarker>
          ))}
        {selectedLocation && (
          <InfoWindow
            position={selectedLocation?.position}
            onCloseClick={() => setSelectedLocation(null)}
          >
            <div
              style={{
                padding: "12px",
                backgroundColor: "white",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                borderRadius: "10px",
                width: "250px",
              }}
            >
              <h3
                style={{
                  fontSize: "16px",
                  fontWeight: "bold",
                  color: "#1E40AF",
                }}
              >
                {selectedLocation?.name}
              </h3>
              <p
                style={{
                  fontSize: "14px",
                  fontStyle: "italic",
                  color: "#4B5563",
                }}
              >
                {selectedLocation?.description}
              </p>
              <p
                style={{ fontSize: "14px", color: "#1F2937", marginTop: "8px" }}
              >
                <strong>📍 Address:</strong> <br></br>
                {selectedLocation?.address}
              </p>
              <p style={{ fontSize: "14px", color: "#1F2937" }}>
                <strong>🕒 Class Schedule:</strong> <br></br>
                {selectedLocation?.schedule}
              </p>
            </div>
          </InfoWindow>
        )}
      </Map>
    </APIProvider>
  );
};

export default BarcelonaMap;
