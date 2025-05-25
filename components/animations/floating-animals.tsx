"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

interface Animal {
  id: number
  emoji: string
  x: number
  y: number
  size: number
  duration: number
  delay: number
  rotate: number
}

export default function FloatingAnimals() {
  const [animals, setAnimals] = useState<Animal[]>([])

  useEffect(() => {
    const emojis = ["🐱", "🐶", "🐰", "🐦"]

    // Generate random animals
    const newAnimals = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      emoji: emojis[i % emojis.length],
      x: Math.random() * 100, // random x position (0-100%)
      y: Math.random() * 100, // random y position (0-100%)
      size: Math.random() * 20 + 20, // random size (20-40px)
      duration: Math.random() * 20 + 20, // random duration (20-40s)
      delay: Math.random() * 5, // random delay (0-5s)
      rotate: Math.random() * 360, // random rotation (0-360deg)
    }))

    setAnimals(newAnimals)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {animals.map((animal) => (
        <motion.div
          key={animal.id}
          className="absolute text-opacity-20"
          style={{
            left: `${animal.x}%`,
            top: `${animal.y}%`,
            fontSize: `${animal.size}px`,
          }}
          animate={{
            x: [0, 20, 0, -20, 0],
            y: [0, 15, 0, -15, 0],
            rotate: [animal.rotate, animal.rotate + 10, animal.rotate - 10, animal.rotate],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: animal.duration,
            delay: animal.delay,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          {animal.emoji}
        </motion.div>
      ))}
    </div>
  )
}
