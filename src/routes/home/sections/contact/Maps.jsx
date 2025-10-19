import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import { MapContainer, TileLayer } from "react-leaflet";
import { Marker } from "react-leaflet";

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});
L.Marker.prototype.options.icon = DefaultIcon;
const position = [-33.429676751729566, -70.62382316012021];

const Maps = () => {
  return (
    <div className="map" aria-label="Company Location">
      <MapContainer
        id="map"
        center={position}
        zoom={9}
        scrollWheelZoom={false}
        loading="lazy">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">Abrir Mapa</a> con OpenStreetMap'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}></Marker>
      </MapContainer>
    </div>
  );
};

export default Maps;

