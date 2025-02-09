import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import {
  calculateMapCenter,
  calculateZoom,
  YogaLocation,
} from "../utils/mapUtils";
import { useTranslation } from "../../hooks/useTranslation";
import useIsMobile from "../../hooks/useIsMobile";

const customIcon = new L.Icon({
  iconUrl: "assets/images/marker-icon-red.png",
  // "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  // iconSize: [25, 41],
  // iconAnchor: [12, 41],
  iconSize: [60, 60],
  iconAnchor: [30, 60],
  popupAnchor: [1, -50],
  shadowUrl: "assets/images/marker-shadow.png",
  shadowSize: [95, 53],
});

const BarcelonaMap = () => {
  const t = useTranslation();
  const isMobile = useIsMobile();

  const locations: YogaLocation[] = t.locations;

  const mapCenter = calculateMapCenter(locations);
  const zoom = calculateZoom(locations);

  return (
    <div style={{ width: "100%", height: "500px", overflow: "hidden" }}>
      <MapContainer
        scrollWheelZoom={false}
        dragging={!isMobile}
        center={mapCenter}
        zoom={zoom}
        style={{ width: "100%", height: "105%", borderRadius: "10px" }}
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
                  <a href={location.link} style={{ color: "inherit" }}>
                    {location.name}
                  </a>
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
                  <a href={location.link} style={{ color: "inherit" }}>
                    <strong>📍 Address:</strong> <br />
                    {location.address}
                  </a>
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
