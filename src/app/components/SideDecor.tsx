import React from "react";

type SideDecorProps = {
  children: React.ReactNode;
  /** Height of your fixed header in pixels */
  headerHeight?: number;
};

export default function SideDecor({
  children,
  headerHeight = 64, // adjust to your header
}: SideDecorProps) {
  return (
    <div
      className="relative"
      style={{ ["--header-h" as any]: `${headerHeight}px` }}
    >
      {/* Reserve space so content doesn't run under the strips */}
      <div className="px-16 sm:px-20 md:px-28">
        <div className="relative z-10">{children}</div>
      </div>

      <FloralStrip side="left" />
      <FloralStrip side="right" />
    </div>
  );
}

function FloralStrip({ side }: { side: "left" | "right" }) {
  const baseStyle: React.CSSProperties = { color: "var(--plum)", opacity: 0.45 };

  const classes =
    "pointer-events-none absolute z-10 " +
    "top-[var(--header-h)] bottom-0 " +
    "w-16 sm:w-20 md:w-28 " +
    (side === "left" ? "left-0" : "right-0") +
    (side === "right" ? " scale-x-[-1]" : "");

  return (
    <svg
      aria-hidden="true"
      className={classes}
      style={baseStyle}
      viewBox="0 0 100 600"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
    >
      {BLOSSOMS.map((f, i) => (
        <Flower
          key={i}
          x={f.x}
          y={f.y}
          scale={f.s}
          delay={i * 0.7}
          dur={f.dur}
          maxOpacity={f.o}
        />
      ))}
    </svg>
  );
}

function Flower({
  x,
  y,
  scale,
  delay,
  dur,
  maxOpacity,
  petals = 12,
}: {
  x: number;
  y: number;
  scale: number;
  delay: number;
  dur: number;
  maxOpacity: number;
  petals?: number;
}) {
  const petalRx = 2.4;
  const petalRy = 5.4;
  const petalOffset = 6.2;

  const sizeBoost = 1.25;
  const scaled = scale * sizeBoost;

  const minScale = Math.max(0.6, scaled * 0.6);
  const midScale = Math.max(0.95, scaled * 0.9);

  const angleStep = 360 / petals;
  const petalNodes = Array.from({ length: petals }, (_, i) => {
    const angle = i * angleStep;
    return (
      <g key={i} transform={`rotate(${angle})`}>
        <ellipse
          cx="0"
          cy={-petalOffset}
          rx={petalRx}
          ry={petalRy}
          fill="currentColor"
          stroke="#fff"
          strokeOpacity="0.55"
          strokeWidth="0.7"
          opacity="0.98"
        />
      </g>
    );
  });

  const minOpacityRatio = 0.5;

  return (
    <g transform={`translate(${x} ${y})`}>
      <g transform={`scale(${minScale})`} opacity={maxOpacity * minOpacityRatio}>
        <animateTransform
          attributeName="transform"
          attributeType="XML"
          type="scale"
          values={`${minScale}; ${scaled}; ${midScale}; ${minScale}`}
          keyTimes="0; 0.35; 0.7; 1"
          dur={`${dur}s`}
          begin={`${delay}s`}
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          values={`${maxOpacity * minOpacityRatio}; ${maxOpacity}; ${maxOpacity * 0.75}; ${maxOpacity * minOpacityRatio}`}
          keyTimes="0; 0.35; 0.7; 1"
          dur={`${dur}s`}
          begin={`${delay}s`}
          repeatCount="indefinite"
        />

        {petalNodes}

        <circle
          cx="0"
          cy="0"
          r={petalOffset * 0.5}
          fill="var(--lilac)"
          opacity="0.95"
        />

        <circle
          cx="0"
          cy="0"
          r="2.6"
          fill="currentColor"
          stroke="#fff"
          strokeOpacity="0.65"
          strokeWidth="0.7"
          opacity="0.98"
        />
      </g>
    </g>
  );
}


const BLOSSOMS = [
  { x: 48, y: 40, s: 1.25, o: 0.95, dur: 25 },
  { x: 55, y: 120, s: 1.15, o: 0.9, dur: 22},
  { x: 45, y: 210, s: 1.35, o: 0.9, dur: 20 },
  { x: 53, y: 290, s: 1.2, o: 0.95, dur: 23 },
  { x: 47, y: 370, s: 1.4, o: 0.9, dur: 24 },
  { x: 52, y: 450, s: 1.45, o: 0.95, dur: 21 },
  { x: 50, y: 530, s: 1.22, o: 0.9, dur: 22 },
];
