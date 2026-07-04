import React from "react";
import { createRoot } from "react-dom/client";
import { Duotone, FlutedGlass, ImageTexture, Shader } from "shaders/react";
import "./styles.css";

const shaderConfig = {
  "/": {
    label: "Next Dimension footer Wonder shader",
    textureUrl: "/wonder-texture.png",
  },
  "/stats19": {
    label: "Next Dimension stats Wonder shader",
    textureUrl: "/stats19-texture.png",
  },
};

const activeShader = shaderConfig[window.location.pathname] ?? shaderConfig["/"];

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

createRoot(document.getElementById("root")).render(<WonderShader />);
