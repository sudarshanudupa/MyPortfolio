"use client"

import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { Float, Stars, MeshDistortMaterial, Sphere } from "@react-three/drei"
import { useRef, Suspense, useMemo, useEffect, useState } from "react"
import { useTheme } from "next-themes"
import type * as THREE from "three"

function CyberSphere() {
  const meshRef = useRef<THREE.Mesh>(null)
  const { theme } = useTheme()
  const isDark = theme === "dark"

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.06
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.1
    }
  })

  return (
    <Float speed={1.2} rotationIntensity={0.2} floatIntensity={0.6}>
      <Sphere ref={meshRef} args={[1, 100, 200]} scale={1.8}>
        <MeshDistortMaterial
          color={isDark ? "#a855f7" : "#7c3aed"}
          attach="material"
          distort={0.3}
          speed={1.2}
          roughness={0.2}
          metalness={0.85}
        />
      </Sphere>
    </Float>
  )
}

function HexGrid() {
  const gridRef = useRef<THREE.Points>(null)
  const { theme } = useTheme()
  const isDark = theme === "dark"

  useFrame((state) => {
    if (gridRef.current) {
      gridRef.current.rotation.z = state.clock.elapsedTime * 0.015
      const positions = gridRef.current.geometry.attributes.position.array as Float32Array
      for (let i = 0; i < positions.length; i += 3) {
        positions[i + 2] = Math.sin(state.clock.elapsedTime * 0.4 + positions[i] * 0.4) * 0.08
      }
      gridRef.current.geometry.attributes.position.needsUpdate = true
    }
  })

  const positions = useMemo(() => {
    const pos = new Float32Array(600 * 3)
    for (let i = 0; i < 600; i++) {
      const angle = (i / 600) * Math.PI * 2 * 4
      const radius = 2.5 + (i / 600) * 3.5
      pos[i * 3] = Math.cos(angle) * radius
      pos[i * 3 + 1] = Math.sin(angle) * radius
      pos[i * 3 + 2] = (Math.random() - 0.5) * 0.4
    }
    return pos
  }, [])

  return (
    <points ref={gridRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={600}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial 
        color={isDark ? "#c084fc" : "#8b5cf6"}
        size={0.012} 
        transparent 
        opacity={isDark ? 0.5 : 0.4}
        sizeAttenuation
      />
    </points>
  )
}

function DataStreams() {
  const streamRef = useRef<THREE.Points>(null)
  const { theme } = useTheme()
  const isDark = theme === "dark"

  useFrame((state) => {
    if (streamRef.current) {
      const positions = streamRef.current.geometry.attributes.position.array as Float32Array
      for (let i = 0; i < positions.length; i += 3) {
        positions[i + 1] -= 0.015
        if (positions[i + 1] < -5) {
          positions[i + 1] = 5
        }
      }
      streamRef.current.geometry.attributes.position.needsUpdate = true
      streamRef.current.rotation.y = state.clock.elapsedTime * 0.03
    }
  })

  const positions = useMemo(() => {
    const pos = new Float32Array(200 * 3)
    for (let i = 0; i < 200; i++) {
      const angle = Math.random() * Math.PI * 2
      const radius = 3.5 + Math.random() * 2
      pos[i * 3] = Math.cos(angle) * radius
      pos[i * 3 + 1] = (Math.random() - 0.5) * 10
      pos[i * 3 + 2] = Math.sin(angle) * radius
    }
    return pos
  }, [])

  return (
    <points ref={streamRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={200}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial 
        color={isDark ? "#e879f9" : "#d946ef"}
        size={0.018} 
        transparent 
        opacity={isDark ? 0.4 : 0.3}
        sizeAttenuation
      />
    </points>
  )
}

function OrbitalRings() {
  const ring1Ref = useRef<THREE.Mesh>(null)
  const ring2Ref = useRef<THREE.Mesh>(null)
  const ring3Ref = useRef<THREE.Mesh>(null)
  const { theme } = useTheme()
  const isDark = theme === "dark"

  useFrame((state) => {
    const t = state.clock.elapsedTime
    if (ring1Ref.current) ring1Ref.current.rotation.x = t * 0.15
    if (ring2Ref.current) ring2Ref.current.rotation.y = t * 0.12
    if (ring3Ref.current) ring3Ref.current.rotation.z = t * 0.14
  })

  return (
    <group>
      <mesh ref={ring1Ref} rotation={[Math.PI / 3, 0, 0]}>
        <torusGeometry args={[2.8, 0.006, 16, 80]} />
        <meshBasicMaterial color={isDark ? "#a855f7" : "#7c3aed"} transparent opacity={isDark ? 0.4 : 0.3} />
      </mesh>
      <mesh ref={ring2Ref} rotation={[Math.PI / 4, Math.PI / 6, 0]}>
        <torusGeometry args={[3.2, 0.006, 16, 80]} />
        <meshBasicMaterial color={isDark ? "#c084fc" : "#8b5cf6"} transparent opacity={isDark ? 0.35 : 0.25} />
      </mesh>
      <mesh ref={ring3Ref} rotation={[Math.PI / 6, Math.PI / 3, 0]}>
        <torusGeometry args={[3.6, 0.006, 16, 80]} />
        <meshBasicMaterial color={isDark ? "#e879f9" : "#d946ef"} transparent opacity={isDark ? 0.3 : 0.2} />
      </mesh>
    </group>
  )
}

function SceneBackground() {
  const { theme } = useTheme()
  const { scene } = useThree()
  const isDark = theme === "dark"
  
  useEffect(() => {
    scene.background = null
  }, [scene, isDark])
  
  return null
}

export default function HeroScene() {
  const { theme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    setMounted(true)
  }, [])
  
  const isDark = mounted ? (resolvedTheme === "dark") : true
  
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas 
        camera={{ position: [0, 0, 6.5], fov: 45 }}
        dpr={[1, 1.5]}
        performance={{ min: 0.5 }}
        style={{ background: 'transparent' }}
      >
        <Suspense fallback={null}>
          <SceneBackground />
          <ambientLight intensity={isDark ? 0.35 : 0.5} />
          <pointLight position={[10, 10, 10]} intensity={isDark ? 0.7 : 0.6} color={isDark ? "#a855f7" : "#7c3aed"} />
          <pointLight position={[-10, -10, -10]} intensity={isDark ? 0.35 : 0.3} color={isDark ? "#c084fc" : "#8b5cf6"} />
          <spotLight
            position={[0, 5, 0]}
            intensity={isDark ? 0.4 : 0.35}
            color={isDark ? "#e879f9" : "#d946ef"}
            angle={0.5}
            penumbra={1}
          />
          <CyberSphere />
          <HexGrid />
          <DataStreams />
          <OrbitalRings />
          <Stars 
            radius={60} 
            depth={40} 
            count={isDark ? 1200 : 800} 
            factor={2.5} 
            fade 
            speed={0.4} 
          />
        </Suspense>
      </Canvas>
    </div>
  )
}
