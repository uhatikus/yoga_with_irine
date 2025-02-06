// import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
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

const customIcon = new L.Icon({
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
  shadowSize: [41, 41],
});

const BarcelonaMap = () => {
  const mapCenter = calculateMapCenter(locations);
  const zoom = calculateZoom(locations);

  return (
    <div style={{ width: "100%", height: "500px" }}>
      <MapContainer
        center={mapCenter}
        zoom={zoom}
        style={{ width: "100%", height: "100%", borderRadius: "10px" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {locations.map((location) => (
          <Marker
            key={location.name}
            position={location.position}
            icon={customIcon}
          >
            <Popup>
              <div style={{ maxWidth: "250px", padding: "10px" }}>
                <h3
                  style={{
                    fontSize: "16px",
                    fontWeight: "bold",
                    color: "#1E40AF",
                  }}
                >
                  {location.name}
                </h3>
                <p
                  style={{
                    fontSize: "14px",
                    fontStyle: "italic",
                    color: "#4B5563",
                  }}
                >
                  {location.description}
                </p>
                <p
                  style={{
                    fontSize: "14px",
                    color: "#1F2937",
                    marginTop: "8px",
                  }}
                >
                  <strong>📍 Address:</strong> <br />
                  {location.address}
                </p>
                <p style={{ fontSize: "14px", color: "#1F2937" }}>
                  <strong>🕒 Class Schedule:</strong> <br />
                  {location.schedule}
                </p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default BarcelonaMap;
