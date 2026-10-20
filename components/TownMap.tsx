import { serviceAreas } from "@/lib/site";

const points = [
  { name: "Ondangwa", x: 214, y: 118 },
  { name: "Oshakati", x: 168, y: 146 },
  { name: "Ongwediva", x: 196, y: 168 },
  { name: "Windhoek", x: 188, y: 372 },
];

export function TownMap() {
  return (
    <figure className="town-map">
      <svg viewBox="0 0 360 640" role="img" aria-label="Schematic of Windhoek, Ondangwa, Oshakati, and Ongwediva. Not to scale.">
        <path
          d="M118 78 L214 46 L268 92 L246 150 L274 214 L236 286 L258 392 L228 508 L186 586 L132 548 L108 430 L86 300 L96 176 Z"
          className="map-land"
        />
        <path d="M188 372 L196 168 L168 146 L214 118" className="map-route" />
        {points.map((point) => (
          <g key={point.name} className="map-point">
            <circle cx={point.x} cy={point.y} r="8" />
            <text x={point.x + 14} y={point.y + 4}>
              {point.name}
            </text>
          </g>
        ))}
      </svg>
      <figcaption>
        Schematic only. Not to scale. Hofnie Trading CC serves {serviceAreas.map((area) => area.name).join(", ")}.
      </figcaption>
    </figure>
  );
}
