'use client'

import { Canvas } from '@react-three/fiber'
import { Suspense, useRef, useEffect, useState } from 'react'
import Scene from './Scene'
import { Box } from '@chakra-ui/react'

interface ThreeCanvasProps {
  height?: string
}

export default function ThreeCanvas({ height = '100%' }: ThreeCanvasProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    if (!containerRef.current) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      { threshold: 0.1 }
    )

    observer.observe(containerRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <Box
      ref={containerRef}
      width="100%"
      height={height}
      position="relative"
      style={{ minHeight: '400px' }}
    >
      <Canvas
        style={{ width: '100%', height: '100%' }}
        camera={{ position: [0, 0, 4], fov: 50 }}
        frameloop={isVisible ? 'always' : 'never'}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </Box>
  )
}

