import React from "react";
import { createRoot } from "react-dom/client";
import {
  ChromaFlow,
  Duotone,
  FilmGrain,
  FlutedGlass,
  ImageTexture,
  Shader,
  Swirl,
} from "shaders/react";
import "./styles.css";

const shaderConfig = {
  footer: {
    label: "Next Dimension footer Wonder shader",
    textureUrl: "/wonder-texture.png",
  },
  "card-bg1": {
    label: "Next Dimension card background Figma shader",
    textureUrl: "/figma-card-logo.svg",
  },
  "card-bg1-wonder": {
    label: "Next Dimension card one Wonder shader",
  },
  hero: {
    label: "Next Dimension hero Wonder shader",
  },
  stats19: {
    label: "Next Dimension stats Wonder shader",
    textureUrl: "/stats19-texture.png",
  },
};

const shaderName =
  new URLSearchParams(window.location.search).get("shader") ??
  (window.location.pathname === "/hero"
    ? "hero"
    : window.location.pathname === "/stats19"
      ? "stats19"
      : "footer");
const activeShader = shaderConfig[shaderName] ?? shaderConfig.footer;

function WonderShader() {
  return (
    <main className="shader-frame" aria-label={activeShader.label}>
      <Shader className="shader-canvas" style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        <ImageTexture url={activeShader.textureUrl} />
        <Duotone colorA="#181735ff" colorB="#C7BCFFff" />
        <FlutedGlass
          aberration={0}
          angle={142}
          frequency={11}
          highlight={0}
          highlightSoftness={0}
          lightAngle={-90}
          refraction={3.82}
          softness={0.93}
          speed={0.45}
          waveAmplitude={0.5}
          waveFrequency={10}
        />
      </Shader>
    </main>
  );
}

function WonderCardOneShader() {
  return (
    <main className="card-wonder-frame" aria-label={activeShader.label}>
      <Shader className="shader-canvas" style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        <Swirl colorA="#C7BCFFff" colorB="#f0f0f0" detail={1.7} />
        <ChromaFlow
          baseColor="#C7BCFFff"
          downColor="#FFD8CEff"
          leftColor="#FFFBE7ff"
          momentum={13}
          radius={5}
          rightColor="#FFFBE7ff"
          upColor="#FAC5FFff"
        />
        <FlutedGlass
          aberration={0.61}
          angle={136}
          frequency={11}
          highlight={0.12}
          highlightSoftness={0}
          lightAngle={-90}
          refraction={4}
          shape="rounded"
          softness={1}
          speed={0.15}
        />
        <FilmGrain strength={0.05} />
      </Shader>
    </main>
  );
}

function HeroShader() {
  return (
    <main className="hero-shader-frame" aria-label={activeShader.label}>
      <Shader className="shader-canvas" style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        <Swirl colorA="#F1F1FDff" colorB="#f0f0f0" detail={1.7} />
        <ChromaFlow
          baseColor="#B1A1FFff"
          downColor="#FECABDff"
          leftColor="#FFFBE7ff"
          momentum={13}
          radius={2}
          rightColor="#FFFBE7ff"
          upColor="#FAC5FFff"
        />
        <FlutedGlass
          aberration={0.61}
          frequency={20}
          highlight={0.12}
          highlightSoftness={0}
          lightAngle={-90}
          refraction={4}
          shape="rounded"
          softness={1}
          speed={0.15}
        />
        <FilmGrain strength={0} />
      </Shader>
    </main>
  );
}

function FigmaCardShader() {
  return (
    <main className="card-video-frame" aria-label={activeShader.label}>
      <video
        className="card-video-frame__video"
        src="/BG1.webm"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
      />
      <div className="card-video-frame__art-card" aria-hidden="true">
        <svg className="card-video-frame__art" viewBox="0 0 473 499" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g className="card-video-frame__orbit">
            <circle cx="236.337" cy="249.112" r="165.75" stroke="#181735" strokeWidth="1.5" />
            <path
              d="M402.087 249.112C402.087 270.891 383.805 290.825 353.744 305.359C323.736 319.867 282.227 328.862 236.337 328.862C190.447 328.862 148.938 319.867 118.93 305.359C88.8693 290.825 70.5869 270.891 70.5869 249.112C70.5869 227.333 88.8693 207.398 118.93 192.864C148.938 178.356 190.447 169.362 236.337 169.362C282.227 169.362 323.736 178.356 353.744 192.864C383.805 207.398 402.087 227.333 402.087 249.112Z"
              stroke="#181735"
              strokeWidth="1.5"
            />
            <circle cx="355.981" cy="303.804" r="7.5" fill="#181735" />
            <circle cx="116.692" cy="194.419" r="7.5" fill="#181735" />
            <path
              d="M236.337 83.3616C258.116 83.3616 278.05 101.644 292.584 131.704C307.092 161.713 316.087 203.222 316.087 249.112C316.087 295.002 307.092 336.511 292.584 366.519C278.05 396.579 258.116 414.862 236.337 414.862C214.558 414.862 194.624 396.579 180.09 366.519C165.581 336.511 156.587 295.002 156.587 249.112C156.587 203.222 165.581 161.713 180.09 131.704C194.624 101.644 214.558 83.3616 236.337 83.3616Z"
              stroke="#181735"
              strokeWidth="1.5"
            />
            <circle cx="312.55" cy="201.947" r="7.5" fill="#181735" />
            <circle cx="155.837" cy="256.612" r="7.5" fill="#181735" />
          </g>
        </svg>
      </div>
    </main>
  );
}

createRoot(document.getElementById("root")).render(
  shaderName === "card-bg1" ? (
    <FigmaCardShader />
  ) : shaderName === "card-bg1-wonder" ? (
    <WonderCardOneShader />
  ) : shaderName === "hero" ? (
    <HeroShader />
  ) : (
    <WonderShader />
  ),
);
