import {LatLngTuple} from "leaflet";
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet"; // Re-uses images from ~leaflet package
import "leaflet-defaulticon-compatibility";

import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css";

interface Coordinate {
  id: number;
  name: string;
  coord: LatLngTuple;
  address: string;
}

interface MultipleLocationMapProps {
  coordinates: Coordinate[];
  mapHeight?: string;
}

const MultipleLocationMap = ({
  coordinates,
  mapHeight = "md:h-[245px]",
}: MultipleLocationMapProps) => {
  const center: LatLngTuple =
    coordinates.length > 0 ? coordinates[0].coord : [0, 0];

  return (
    <MapContainer
      center={center}
      zoom={13}
      scrollWheelZoom={false}
      className={`relative z-10 my-4 h-[120px] w-full flex-1 rounded-lg border-4 border-accent ${mapHeight} `}
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
