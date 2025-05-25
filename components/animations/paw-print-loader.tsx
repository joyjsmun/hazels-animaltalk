"use client"

import { motion } from "framer-motion"

export default function PawPrintLoader() {
  return (
    <div className="flex justify-center items-center">
      <motion.div
        className="w-16 h-16 relative"
        animate={{
          y: [0, -10, 0],
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path
            d="M50 15C53 15 55.5 17.5 55.5 20.5C55.5 23.5 53 26 50 26C47 26 44.5 23.5 44.5 20.5C44.5 17.5 47 15 50 15Z"
            fill="#B47A8F"
          />
          <path
            d="M35 25C38 25 40.5 27.5 40.5 30.5C40.5 33.5 38 36 35 36C32 36 29.5 33.5 29.5 30.5C29.5 27.5 32 25 35 25Z"
            fill="#B47A8F"
          />
          <path
            d="M65 25C68 25 70.5 27.5 70.5 30.5C70.5 33.5 68 36 65 36C62 36 59.5 33.5 59.5 30.5C59.5 27.5 62 25 65 25Z"
            fill="#B47A8F"
          />
          <path d="M50 40C60 40 68 48 68 58C68 68 60 76 50 76C40 76 32 68 32 58C32 48 40 40 50 40Z" fill="#B47A8F" />
        </svg>
      </motion.div>
    </div>
  )
}
