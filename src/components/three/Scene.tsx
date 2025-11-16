'use client'

import { useRef, useEffect } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { Mesh } from 'three'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { useReducedMotion } from '@/hooks/useReducedMotion'

export default function Scene() {
  const meshRef = useRef<Mesh>(null)
  const { invalidate } = useThree()
  const prefersReducedMotion = useReducedMotion()

  useFrame((state, delta) => {
    if (meshRef.current && !prefersReducedMotion) {
      meshRef.current.rotation.y += delta * 0.1
      meshRef.current.rotation.x += delta * 0.05
    }
  })

  useEffect(() => {
    if (prefersReducedMotion) return

    const handleMouseMove = (e: MouseEvent) => {
      if (!meshRef.current) return

      const { clientX, clientY } = e
      const { innerWidth, innerHeight } = window

      const x = (clientX / innerWidth) * 2 - 1
      const y = (clientY / innerHeight) * 2 - 1

      meshRef.current.rotation.y = x * 0.3
      meshRef.current.rotation.x = y * 0.3

      invalidate()
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [invalidate, prefersReducedMotion])

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 4]} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={0.8} />
      <pointLight position={[-5, -5, -5]} intensity={0.3} />
      
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          metalness={0.3}
          roughness={0.6}
          color="#06B6D4"
        />
      </mesh>

      {!prefersReducedMotion && (
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate={false}
          onChange={() => invalidate()}
        />
      )}
    </>
  )
}

