"use client"

import { useState, useEffect } from "react"
import { Progress } from "@/components/ui/progress"
import FloatingHearts from "@/components/animations/floating-hearts"
import PawPrintLoader from "@/components/animations/paw-print-loader"
import Image from "next/image"

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(timer)
          return 100
        }
        return prevProgress + 1
      })
    }, 40) // 4000ms / 100 = 40ms per 1%

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative min-h-screen overflow-hidden flex flex-col items-center justify-center px-4 bg-[#fff7e5]">
      <FloatingHearts />

      <div className="z-10 text-center max-w-3xl">
        <div className="mb-6 flex justify-center">
          <div className="w-48 h-48 md:w-64 md:h-64 relative">
            <Image
              src="/images/hazel-logo.png"
              alt="Hazel's Animal Talk Logo"
              width={256}
              height={256}
              className="object-contain"
              priority
            />
          </div>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold text-[#B47A8F] mb-2">Hazel&apos;s Animal Talk</h1>
        <p className="text-lg md:text-xl text-[#B47A8F] mb-8">連結您與毛孩的心靈橋樑</p>

        <div className="mb-8">
          <PawPrintLoader />
        </div>

        <div className="w-full max-w-md mx-auto mb-4">
          <Progress value={progress} className="h-2 bg-[#f0e6d6]" />
        </div>

        <p className="text-md md:text-lg text-[#B47A8F]">正在準備與您的毛孩展開心靈對話...</p>
        <p className="text-sm text-[#B47A8F] mt-2">{progress}%</p>
      </div>
    </div>
  )
}
