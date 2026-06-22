"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Mammoth() {
  const groupRef = useRef<THREE.Group>(null);
  const headRef = useRef<THREE.Group>(null);
  const trunkRef = useRef<THREE.Group>(null);

  const body = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: "#1a103f",
        emissive: "#4c1d95",
        emissiveIntensity: 1.1,
        roughness: 0.75,
        metalness: 0.12,
      }),
    []
  );

  const wire = useMemo(
    () =>
      new THREE.MeshBasicMaterial({
        color: "#8b5cf6",
        wireframe: true,
        transparent: true,
        opacity: 0.24,
      }),
    []
  );

  const tusk = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: "#ddd6fe",
        emissive: "#a78bfa",
        emissiveIntensity: 1.8,
        roughness: 0.2,
      }),
    []
  );

  const trunkGeo = useMemo(() => {
    const curve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(0, 0, 0),
      new THREE.Vector3(0.03, -0.35, 0.18),
      new THREE.Vector3(0.05, -0.8, 0.1),
      new THREE.Vector3(-0.06, -1.15, 0.28),
    ]);
    return new THREE.TubeGeometry(curve, 18, 0.1, 8, false);
  }, []);

  const leftTuskGeo = useMemo(() => createTusk(-1), []);
  const rightTuskGeo = useMemo(() => createTusk(1), []);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();

    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(t * 0.35) * 0.18;
      groupRef.current.position.y = Math.sin(t * 1.5) * 0.06 - 0.3;
    }

    if (headRef.current) {
      headRef.current.rotation.x = Math.sin(t * 0.9) * 0.05;
    }

    if (trunkRef.current) {
      trunkRef.current.rotation.z = Math.sin(t * 1.2) * 0.12;
    }
  });

  return (
    <group ref={groupRef} position={[0, -0.3, 0]} rotation={[0, -0.15, 0]}>
      <pointLight position={[0, 1.2, 1]} color="#a78bfa" intensity={8} distance={8} />

      <group scale={[1.35, 0.92, 0.82]}>
        <mesh material={body}>
          <sphereGeometry args={[1.1, 32, 18]} />
        </mesh>
        <mesh material={wire}>
          <sphereGeometry args={[1.12, 18, 12]} />
        </mesh>
      </group>

      <mesh position={[0, 0.78, -0.15]} scale={[0.95, 0.5, 0.62]} material={body}>
        <sphereGeometry args={[1, 24, 14]} />
      </mesh>

      <group ref={headRef} position={[0, 0.12, 1.08]}>
        <mesh scale={[0.72, 0.78, 0.82]} material={body}>
          <sphereGeometry args={[0.72, 24, 16]} />
        </mesh>
        <mesh scale={[0.73, 0.79, 0.83]} material={wire}>
          <sphereGeometry args={[0.72, 16, 10]} />
        </mesh>

        <mesh position={[-0.48, 0.12, -0.12]} scale={[0.12, 0.42, 0.34]} material={body}>
          <sphereGeometry args={[1, 12, 8]} />
        </mesh>
        <mesh position={[0.48, 0.12, -0.12]} scale={[0.12, 0.42, 0.34]} material={body}>
          <sphereGeometry args={[1, 12, 8]} />
        </mesh>

        <group ref={trunkRef} position={[0, -0.35, 0.35]}>
          <mesh geometry={trunkGeo} material={body} />
          <mesh geometry={trunkGeo} material={wire} />
        </group>

        <mesh geometry={leftTuskGeo} material={tusk} />
        <mesh geometry={rightTuskGeo} material={tusk} />
      </group>

      {[
        [-0.65, -0.95, 0.52],
        [0.65, -0.95, 0.52],
        [-0.58, -0.95, -0.55],
        [0.58, -0.95, -0.55],
      ].map(([x, y, z], index) => (
        <group key={index} position={[x, y, z]}>
          <mesh material={body}>
            <cylinderGeometry args={[0.18, 0.24, 1.0, 14]} />
          </mesh>
          <mesh position={[0, -0.55, 0.08]} scale={[1.25, 0.45, 1.45]} material={body}>
            <sphereGeometry args={[0.22, 12, 8]} />
          </mesh>
        </group>
      ))}
    </group>
  );
}

function createTusk(side: -1 | 1) {
  const curve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(side * 0.22, -0.18, 0.42),
    new THREE.Vector3(side * 0.58, -0.32, 0.72),
    new THREE.Vector3(side * 0.92, -0.12, 1.05),
    new THREE.Vector3(side * 1.04, 0.25, 1.2),
  ]);

  return new THREE.TubeGeometry(curve, 20, 0.045, 8, false);
}

function Particles() {
  const ref = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const points = new Float32Array(900 * 3);
    for (let i = 0; i < 900; i++) {
      points[i * 3] = (Math.random() - 0.5) * 18;
      points[i * 3 + 1] = (Math.random() - 0.5) * 10;
      points[i * 3 + 2] = (Math.random() - 0.5) * 14;
    }
    return points;
  }, []);

  useFrame(({ clock }) => {
    if (ref.current) ref.current.rotation.y = clock.getElapsedTime() * 0.02;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.025} color="#7c3aed" transparent opacity={0.5} />
    </points>
  );
}

export default function MammothScene() {
  return (
    <Canvas
      camera={{ position: [0, 1.1, 5.1], fov: 48, near: 0.1, far: 50 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      dpr={[1, 1.5]}
      style={{ position: "absolute", inset: 0 }}
    >
      <ambientLight color="#7c3aed" intensity={1.9} />
      <directionalLight position={[4, 6, 4]} color="#ddd6fe" intensity={4.5} />
      <pointLight position={[-4, 2, 3]} color="#06b6d4" intensity={3.2} distance={10} />
      <Mammoth />
      <Particles />
    </Canvas>
  );
}
