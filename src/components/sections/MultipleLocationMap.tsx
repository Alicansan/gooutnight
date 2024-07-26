import { LatLngTuple } from "leaflet";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet-defaulticon-compatibility";

import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css"; // Re-uses images from ~leaflet package

interface Coordinate {
  id: number;
  name: string;
  coord: LatLngTuple;
  address: string;
}

interface MultipleLocationMapProps {
  coordinates: Coordinate[];
}

const MultipleLocationMap = ({ coordinates }: MultipleLocationMapProps) => {
  const center: LatLngTuple =
    coordinates.length > 0 ? coordinates[0].coord : [0, 0];

  return (
    <MapContainer
      center={center}
      zoom={13}
      scrollWheelZoom={false}
      className="md:m-w-[90vw] relative z-10 my-4 h-[420px] w-full flex-1 rounded-lg border-4 border-accent md:h-[645px]"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {coordinates.map((location) => (
        <Marker position={location.coord} key={location.id}>
          <Popup>
            <p className="text-center font-bold lg:text-lg">{location.name}</p>
            <span className="text-wrap">Address: {location.address}</span>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MultipleLocationMap;
