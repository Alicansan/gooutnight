import { LatLngTuple } from "leaflet";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet-defaulticon-compatibility";

import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css"; // Re-uses images from ~leaflet package
//github.com/ghybs/leaflet-defaulticon-compatibility

interface MapSectionProps {
  coordinates: LatLngTuple;
  venueName?: string;
  address?: string;
}

const MapSection = ({ coordinates, venueName, address }: MapSectionProps) => {
  return (
    <MapContainer
      center={coordinates}
      zoom={13}
      scrollWheelZoom={false}
      className="relative z-10 my-4 w-full flex-1 rounded-lg border-4 border-accent md:h-[55vh] md:max-w-[90vw]"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={coordinates}>
        <Popup>
          <p className="text-center font-bold lg:text-lg">{venueName}</p>
          <span className="text-wrap">Address: {address}</span>
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapSection;
