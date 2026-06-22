"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

// ─── Materials ────────────────────────────────────────────────────────────────

function useMaterials() {
  const body = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: new THREE.Color("#1a103f"),
        emissive: new THREE.Color("#3d1a7a"),
        emissiveIntensity: 1.4,
        roughness: 0.88,
        metalness: 0.12,
      }),
    []
  );

  // BackSide fur shell — renders inside-out to create fur depth illusion
  const fur = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: new THREE.Color("#0b0820"),
        roughness: 1.0,
        metalness: 0.0,
        transparent: true,
        opacity: 0.6,
        side: THREE.BackSide,
      }),
    []
  );

  const wire = useMemo(
    () =>
      new THREE.MeshBasicMaterial({
        color: new THREE.Color("#7c3aed"),
        wireframe: true,
        transparent: true,
        opacity: 0.28,
      }),
    []
  );

  const tusk = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: new THREE.Color("#ddd0ff"),
        emissive: new THREE.Color("#8b5cf6"),
        emissiveIntensity: 2.8,
        roughness: 0.12,
        metalness: 0.55,
      }),
    []
  );

  return { body, fur, wire, tusk };
}

// ─── Shared part renderer ────────────────────────────────────────────────────

function Part({
  geo,
  mat,
  fur,
  wire,
  furScale = 1.08,
}: {
  geo: THREE.BufferGeometry;
  mat: THREE.Material;
  fur?: THREE.Material;
  wire: THREE.Material;
  furScale?: number;
}) {
  return (
    <>
      <mesh geometry={geo} material={mat} castShadow />
      {fur && <mesh geometry={geo} material={fur} scale={furScale} />}
      <mesh geometry={geo} material={wire} />
    </>
  );
}

// ─── Trunk — long, hanging, near ground ──────────────────────────────────────

function Trunk({ mat, wire }: { mat: THREE.Material; wire: THREE.Material }) {
  const geo = useMemo(() => {
    const curve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(0, 0, 0),
      new THREE.Vector3(0.05, -0.3, 0.18),
      new THREE.Vector3(0.09, -0.65, 0.26),
      new THREE.Vector3(0.06, -1.05, 0.12),
      new THREE.Vector3(0, -1.38, 0.0),
      new THREE.Vector3(-0.05, -1.6, 0.22),
    ]);
    return new THREE.TubeGeometry(curve, 22, 0.12, 9, false);
  }, []);
  return (
    <>
      <mesh geometry={geo} material={mat} />
      <mesh geometry={geo} material={wire} />
    </>
  );
}

// ─── Tusks — long dramatic sweeping curves ────────────────────────────────────

function Tusk({
  side,
  mat,
  wire,
}: {
  side: -1 | 1;
  mat: THREE.Material;
  wire: THREE.Material;
}) {
  const geo = useMemo(() => {
    const s = side;
    // Start low at jaw → sweep outward-down → arc upward → tip curls slightly inward
    const curve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(s * 0.22, -0.3, 0.4),
      new THREE.Vector3(s * 0.54, -0.5, 0.55),
      new THREE.Vector3(s * 0.9, -0.38, 0.82),
      new THREE.Vector3(s * 1.22, 0.0, 1.18),
      new THREE.Vector3(s * 1.45, 0.35, 1.48),
      new THREE.Vector3(s * 1.55, 0.68, 1.65),
      new THREE.Vector3(s * 1.4, 0.95, 1.72),
    ]);
    return new THREE.TubeGeometry(curve, 20, 0.078, 8, false);
  }, [side]);
  return (
    <>
      <mesh geometry={geo} material={mat} />
      <mesh geometry={geo} material={wire} />
    </>
  );
}

// ─── Full Mammoth ─────────────────────────────────────────────────────────────

function Mammoth() {
  const groupRef = useRef<THREE.Group>(null!);
  const headRef = useRef<THREE.Group>(null!);
  const trunkRef = useRef<THREE.Group>(null!);
  const fl = useRef<THREE.Group>(null!);
  const fr = useRef<THREE.Group>(null!);
  const bl = useRef<THREE.Group>(null!);
  const br = useRef<THREE.Group>(null!);

  const { body, fur, wire, tusk } = useMaterials();

  // Geometries — higher polygon count for smoother silhouette
  const bodyGeo = useMemo(() => new THREE.SphereGeometry(1.32, 20, 14), []);
  const humpGeo = useMemo(() => new THREE.SphereGeometry(1.02, 16, 12), []);
  const rumpGeo = useMemo(() => new THREE.SphereGeometry(0.88, 12, 10), []);
  const headGeo = useMemo(() => new THREE.SphereGeometry(0.6, 14, 10), []);
  const domeGeo = useMemo(() => new THREE.SphereGeometry(0.36, 10, 8), []);
  const neckGeo = useMemo(
    () => new THREE.CylinderGeometry(0.45, 0.57, 1.0, 10),
    []
  );
  const earGeo = useMemo(() => new THREE.SphereGeometry(0.38, 8, 6), []);
  const upperLegGeo = useMemo(
    () => new THREE.CylinderGeometry(0.28, 0.25, 0.88, 10),
    []
  );
  const lowerLegGeo = useMemo(
    () => new THREE.CylinderGeometry(0.25, 0.25, 0.72, 10),
    []
  );
  const footGeo = useMemo(
    () => new THREE.CylinderGeometry(0.31, 0.34, 0.2, 9),
    []
  );
  const tailGeo = useMemo(
    () => new THREE.CylinderGeometry(0.06, 0.025, 0.5, 6),
    []
  );

  const CYCLE = 13;
  const Z_START = -24;
  const Z_END = 13;

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    const progress = (t % CYCLE) / CYCLE;

    groupRef.current.position.z = Z_START + (Z_END - Z_START) * progress;

    const walk = t * Math.PI * 2 * 1.1;
    groupRef.current.position.y = -0.68 + Math.sin(walk * 2) * 0.065;

    // Diagonal gait — FL+BR, FR+BL swing together
    fl.current.rotation.x = Math.sin(walk) * 0.44;
    br.current.rotation.x = Math.sin(walk) * 0.44;
    fr.current.rotation.x = Math.sin(walk + Math.PI) * 0.44;
    bl.current.rotation.x = Math.sin(walk + Math.PI) * 0.44;

    // Slight body roll
    groupRef.current.rotation.z = Math.sin(walk * 2) * 0.018;

    // Head sway
    headRef.current.rotation.y = Math.sin(walk * 0.32) * 0.07;
    headRef.current.rotation.x = Math.sin(walk * 0.25) * 0.04;

    // Trunk pendulum
    trunkRef.current.rotation.x = Math.sin(walk * 0.52 - 0.4) * 0.2 + 0.08;
    trunkRef.current.rotation.z = Math.sin(walk * 0.38) * 0.09;
  });

  // Inline leg helper
  const makeLeg = (
    legRef: React.RefObject<THREE.Group>,
    pos: [number, number, number]
  ) => (
    <group ref={legRef} position={pos}>
      <group position={[0, -0.44, 0]}>
        <mesh geometry={upperLegGeo} material={body} />
        <mesh geometry={upperLegGeo} material={wire} />
      </group>
      <group position={[0, -0.96, 0.06]}>
        <mesh geometry={lowerLegGeo} material={body} />
        <mesh geometry={lowerLegGeo} material={wire} />
      </group>
      <mesh position={[0, -1.36, 0.1]} geometry={footGeo} material={body} />
    </group>
  );

  return (
    <group ref={groupRef} position={[0, -0.68, Z_START]}>
      {/* Inner glow — keeps mammoth vibrant */}
      <pointLight position={[0, 1.5, 0]} color="#a78bfa" intensity={16} distance={18} />
      <pointLight position={[0, -0.3, 2.0]} color="#06b6d4" intensity={8} distance={14} />
      <pointLight position={[0, 2.8, -0.5]} color="#c4b5fd" intensity={5} distance={12} />

      {/* ── BODY — barrel-shaped, elongated front-to-back ── */}
      <group scale={[1.0, 1.06, 1.85]}>
        <Part geo={bodyGeo} mat={body} fur={fur} wire={wire} />
      </group>

      {/* ── SHOULDER HUMP — highest point, real mammoth's defining feature ── */}
      <group position={[0, 1.42, 0.3]} scale={[0.88, 1.08, 0.9]}>
        <Part geo={humpGeo} mat={body} fur={fur} wire={wire} />
      </group>

      {/* ── BACK RUMP — lower than hump ── */}
      <group position={[0, 0.6, -1.0]} scale={[0.82, 0.7, 0.8]}>
        <Part geo={rumpGeo} mat={body} wire={wire} />
      </group>

      {/* ── NECK — thick, angled forward-down from hump to head ── */}
      <mesh
        position={[0, 0.14, 1.55]}
        rotation={[0.4, 0, 0]}
        geometry={neckGeo}
        material={body}
      />
      <mesh
        position={[0, 0.14, 1.55]}
        rotation={[0.4, 0, 0]}
        geometry={neckGeo}
        material={wire}
      />

      {/* ── HEAD — domed skull, hangs lower than hump ── */}
      <group ref={headRef} position={[0, 0.2, 2.2]}>
        {/* Main skull */}
        <mesh scale={[0.86, 0.96, 1.06]} geometry={headGeo} material={body} />
        <mesh scale={[0.86, 0.96, 1.06]} geometry={headGeo} material={wire} />
        {/* Characteristic domed top of mammoth skull */}
        <mesh position={[0, 0.54, -0.08]} scale={[0.88, 0.82, 0.72]} geometry={domeGeo} material={body} />
        <mesh position={[0, 0.54, -0.08]} scale={[0.88, 0.82, 0.72]} geometry={domeGeo} material={wire} />

        {/* Ears — small and flat (unlike African elephants) */}
        <mesh position={[-0.56, 0.2, -0.12]} scale={[0.14, 0.56, 0.46]} geometry={earGeo} material={body} />
        <mesh position={[0.56, 0.2, -0.12]} scale={[0.14, 0.56, 0.46]} geometry={earGeo} material={body} />

        {/* Trunk — long, nearly reaching ground */}
        <group ref={trunkRef} position={[0, -0.3, 0.55]}>
          <Trunk mat={body} wire={wire} />
        </group>

        {/* Tusks — dramatic outward-and-up sweep */}
        <Tusk side={-1} mat={tusk} wire={wire} />
        <Tusk side={1} mat={tusk} wire={wire} />
      </group>

      {/* ── LEGS — thick columnar pillars ── */}
      {makeLeg(fl, [-0.62, -0.72, 0.92])}
      {makeLeg(fr, [0.62, -0.72, 0.92])}
      {makeLeg(bl, [-0.56, -0.72, -0.84])}
      {makeLeg(br, [0.56, -0.72, -0.84])}

      {/* Tail */}
      <mesh
        position={[0, 0.45, -2.2]}
        rotation={[-0.6, 0, 0]}
        geometry={tailGeo}
        material={body}
      />
    </group>
  );
}

// ─── Floating Particles ───────────────────────────────────────────────────────

function Particles() {
  const ref = useRef<THREE.Points>(null!);
  const count = 2200;

  const { positions, sizes } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const sizes = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 45;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 22;
      positions[i * 3 + 2] = Math.random() * -55;
      sizes[i] = Math.random() * 0.05 + 0.02;
    }
    return { positions, sizes };
  }, []);

  useFrame(({ clock }) => {
    ref.current.rotation.y = clock.getElapsedTime() * 0.008;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.04}
        color="#6d28d9"
        transparent
        opacity={0.5}
        sizeAttenuation
      />
    </points>
  );
}

// ─── Ground Grid ─────────────────────────────────────────────────────────────

function Ground() {
  return (
    <>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2.2, -12]}>
        <planeGeometry args={[90, 70]} />
        <meshStandardMaterial
          color="#050507"
          emissive="#0d0820"
          emissiveIntensity={0.35}
          transparent
          opacity={0.92}
        />
      </mesh>
      <gridHelper args={[90, 45, "#1e1040", "#0a061e"]} position={[0, -2.18, -12]} />
    </>
  );
}

// ─── Scene ───────────────────────────────────────────────────────────────────

function Scene() {
  return (
    <>
      <color attach="background" args={["#050507"]} />
      <fog attach="fog" args={["#050507", 20, 52]} />

      <ambientLight color="#3b1a7a" intensity={3.5} />
      <directionalLight position={[4, 12, 6]} color="#ddd6fe" intensity={7} castShadow />
      <directionalLight position={[-6, 4, 8]} color="#06b6d4" intensity={4.5} />
      {/* Rim light from behind for silhouette depth */}
      <pointLight position={[0, 5, -15]} color="#7c3aed" intensity={10} distance={50} />
      <pointLight position={[-12, 6, 0]} color="#06b6d4" intensity={5} distance={45} />
      <pointLight position={[12, -4, 5]} color="#6d28d9" intensity={4} distance={35} />

      <Mammoth />
      <Particles />
      <Ground />
    </>
  );
}

// ─── Export ───────────────────────────────────────────────────────────────────

export default function MammothScene() {
  return (
    <Canvas
      camera={{ position: [0, 1.8, 9], fov: 58, near: 0.1, far: 110 }}
      shadows
      gl={{ antialias: true, alpha: false, preserveDrawingBuffer: true }}
      style={{ position: "absolute", inset: 0 }}
    >
      <Scene />
    </Canvas>
  );
}
