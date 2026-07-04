import React from "react";
import { createRoot } from "react-dom/client";
import { Duotone, FlutedGlass, ImageTexture, Shader } from "shaders/react";
import "./styles.css";

const textureUrl = "/wonder-texture.png";

function WonderShader() {
  return (
    <main className="shader-frame" aria-label="Next Dimension Wonder shader">
      <Shader className="shader-canvas" style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        <ImageTexture url={textureUrl} />
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
