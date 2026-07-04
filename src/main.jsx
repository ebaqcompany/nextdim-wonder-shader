import React from "react";
import { createRoot } from "react-dom/client";
import { Duotone, FlutedGlass, ImageTexture, Shader } from "shaders/react";
import "./styles.css";

const shaderConfig = {
  footer: {
    label: "Next Dimension footer Wonder shader",
    textureUrl: "/wonder-texture.png",
  },
  stats19: {
    label: "Next Dimension stats Wonder shader",
    textureUrl: "/stats19-texture.png",
  },
};

const shaderName =
  new URLSearchParams(window.location.search).get("shader") ??
  (window.location.pathname === "/stats19" ? "stats19" : "footer");
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

function CardBackgroundShader() {
  return (
    <main className="card-bg-shader" aria-label="Next Dimension card background shader">
      <div className="card-bg-orb card-bg-orb-a" />
      <div className="card-bg-orb card-bg-orb-b" />
      <div className="card-bg-orb card-bg-orb-c" />
      <div className="card-bg-orb card-bg-orb-d" />
      <div className="card-bg-glass" />
      <div className="card-bg-ridges" />
      <div className="card-bg-noise" />
      <div className="card-bg-vignette" />
    </main>
  );
}

const App = shaderName === "card-bg1" ? CardBackgroundShader : WonderShader;

createRoot(document.getElementById("root")).render(<App />);
