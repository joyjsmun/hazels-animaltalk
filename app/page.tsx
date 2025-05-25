"use client"

import { useState, useEffect } from "react"
import LoadingScreen from "@/components/loading-screen"
import SinglePageContent from "@/components/single-page-content"
import { Noto_Sans_TC } from "next/font/google"

const notoSansTC = Noto_Sans_TC({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
})

export default function Home() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false)
    }, 4000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <main className={`min-h-screen ${notoSansTC.className}`}>
      {loading ? <LoadingScreen /> : <SinglePageContent />}
    </main>
  )
}
