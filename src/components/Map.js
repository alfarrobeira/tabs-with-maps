// https://react-leaflet.js.org/
import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";

export default ({ lng, lat }) => {
  return (
    <MapContainer center={[lng, lat]} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  );
};
