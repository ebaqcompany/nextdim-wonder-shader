import React from "react";
import { createRoot } from "react-dom/client";
import { motion } from "motion/react";
import { Duotone, FlutedGlass, ImageTexture, Shader } from "shaders/react";
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

function FigmaCardShader() {
  return (
    <main className="figma-card-shader" aria-label={activeShader.label}>
      <div className="figma-card-shader__frame">
        <motion.div
          className="figma-card-shader__logo"
          initial={{
            rotate: -360,
          }}
          animate={{
            rotate: [-360, 0],
          }}
          transition={{
            rotate: { duration: 5, times: [0, 1], ease: "linear", repeat: Infinity },
          }}
        >
          <img src={activeShader.textureUrl} alt="" aria-hidden="true" />
        </motion.div>
      </div>
    </main>
  );
}

createRoot(document.getElementById("root")).render(
  shaderName === "card-bg1" ? <FigmaCardShader /> : <WonderShader />,
);
