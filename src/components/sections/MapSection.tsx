"use client"
import { LatLngTuple } from "leaflet";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import { useEffect, useState } from "react";
import "leaflet-defaulticon-compatibility";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css"; // Re-uses images from ~leaflet package

interface MapSectionProps {
  coordinates: LatLngTuple;
  venueName?: string;
  address?: string;
}

const MapSection = ({ coordinates, venueName, address }: MapSectionProps) => {
  const [scrollWheelZoom, setScrollWheelZoom] = useState(false);
  const [dragging, setDragging] = useState(false);

  const MapControl = () => {
    const map = useMap();

    useEffect(() => {
      if (map) {
        map.scrollWheelZoom[scrollWheelZoom ? 'enable' : 'disable']();
        map.dragging[dragging ? 'enable' : 'disable']();
      }
    }, [scrollWheelZoom, dragging, map]);

    return null;
  };

  const handleClick = () => {
    setDragging(prev => !prev);
    setScrollWheelZoom(prev => !prev);
  };

  return (
    <div onClick={handleClick}>
      <MapContainer
        center={coordinates}
        zoom={13}
        className="relative mx-auto z-10 my-4 w-full flex-1 rounded-lg border-4 border-accent md:h-[55vh] md:max-w-[90vw]"
        dragging={dragging}
      >
        <MapControl />
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
    </div>
  );
};

export default MapSection;
