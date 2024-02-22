import { Map, Marker } from "pigeon-maps";

interface Props {
  height: number;
  width: number;
  defaultCenter: [number, number];
  defaultZoom: number;
  anchor: [number, number];
  markerWidth?: number;
}
export function MyMap({
  height,
  defaultCenter,
  defaultZoom,
  width,
  anchor,
  markerWidth = 30,
}: Props) {
  return (
    <Map
      height={height}
      width={width}
      defaultCenter={defaultCenter}
      defaultZoom={defaultZoom}
    >
      <Marker width={markerWidth} anchor={anchor} />
    </Map>
  );
}
