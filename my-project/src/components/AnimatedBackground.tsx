import React, { useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import noiseImg from '../assets/noise.png';


const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = `
  precision highp float;
  varying vec2 vUv;
  uniform vec2 uMouse;

  float random(vec2 st) {
    return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
  }

  float noise(vec2 st) {
    vec2 i = floor(st);
    vec2 f = fract(st);
    float a = random(i);
    float b = random(i + vec2(1.0, 0.0));
    float c = random(i + vec2(0.0, 1.0));
    float d = random(i + vec2(1.0, 1.0));
    vec2 u = f*f*(3.0-2.0*f);
    return mix(a,b,u.x) +
           (c - a)*u.y*(1.0-u.x) +
           (d - b)*u.x*u.y;
  }

  void main() {
    vec2 st = vUv;

    float dist = distance(vUv, uMouse);
    float influence = smoothstep(0.7, 0.0, dist);

    vec2 distortion = vec2(
      sin((st.y + uMouse.x * 10.0) * 3.0),
      cos((st.x + uMouse.y * 10.0) * 3.0)
    ) * influence * 0.7;

    float n = noise(st + distortion);

    vec3 color1 = vec3(0.01, 0.01, 0.01);
    vec3 color2 = vec3(0.0, 0.2, 0.6);
    vec3 color3 = vec3(0.0, 0.6, 0.7);
    vec3 color4 = vec3(0.7, 0.1, 0.1);

    vec3 color = mix(color1, color2, smoothstep(0.05, 0.5, n));
    color = mix(color, color3, smoothstep(0.4, 0.75, n));
    color = mix(color, color4, smoothstep(0.7, 0.95, n));


    gl_FragColor = vec4(color, 1.0);
  }
`;

function ShaderPlane({ mouseRef }: { mouseRef: React.MutableRefObject<THREE.Vector2> }) {
  const materialRef = useRef<THREE.ShaderMaterial>(null!);
  const uniforms = React.useMemo(() => ({
    uMouse: { value: new THREE.Vector2(0.5, 0.5) },
  }), []);

  useFrame(() => {
    if (materialRef.current) {
      materialRef.current.uniforms.uMouse.value.copy(mouseRef.current);
    }
  });

  // Ajusta o tamanho do plano para cobrir toda a tela baseado no tamanho da viewport
  const width = window.innerWidth;
  const height = window.innerHeight;

  return (
    <mesh scale={[width, height, 1]}>
      <planeGeometry args={[1, 1]} />
      <shaderMaterial
        ref={materialRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
      />
    </mesh>
  );
}

export default function AnimatedBackground() {
  const mouseRef = useRef(new THREE.Vector2(0.5, 0.5));

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      mouseRef.current.set(e.clientX / window.innerWidth, 1 - e.clientY / window.innerHeight);
    };
    window.addEventListener("mousemove", onMouseMove);
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, []);

  return (
    <>
      <Canvas
        orthographic
        camera={{
          left: -window.innerWidth / 2,
          right: window.innerWidth / 2,
          top: window.innerHeight / 2,
          bottom: -window.innerHeight / 2,
          near: 0.1,
          far: 1000,
          position: [0, 0, 10],
        }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          zIndex: -1,
        }}
      >
        <ShaderPlane mouseRef={mouseRef} />
      </Canvas>

      <img
        src={noiseImg}
        alt="Ruído de fundo"
        className="grain-overlay"
      />
    </>
  );
}

