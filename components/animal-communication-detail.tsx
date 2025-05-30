"use client"

import { motion } from "framer-motion"
import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Heart } from "lucide-react"
import Image from "next/image"

interface AnimalCommunicationDetailProps {
  onBack: () => void
}

export default function AnimalCommunicationDetail({ onBack }: AnimalCommunicationDetailProps) {
  // Add useEffect to check for localStorage flag and scroll to Q&A section
  useEffect(() => {
    // Check if we need to scroll to the Q&A section
    const shouldScrollToQA = localStorage.getItem('scrollToQA') === 'true';
    
    if (shouldScrollToQA) {
      // Clear the flag
      localStorage.removeItem('scrollToQA');
      
      // Find all h2 elements
      const headings = document.querySelectorAll('h2');
      let qaHeading: HTMLHeadingElement | null = null;
      
      // Find the heading that contains the Q&A text
      headings.forEach(heading => {
        if (heading.textContent && heading.textContent.includes('關於動物溝通 Ｑ&Ａ')) {
          qaHeading = heading;
        }
      });
      
      // Scroll to the Q&A section if found
      if (qaHeading) {
        setTimeout(() => {
          if (qaHeading) {
            qaHeading.scrollIntoView({ behavior: 'smooth' });
          }
        }, 500); // Give some time for the page to render
      }
    }
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  const qaItems = [
    {
      question: "動物溝通是什麼？",
      answer:
        "是一種使用心靈直覺感應與動物進行非語言交流的方式。溝通師透過接收圖像、感受、情緒和想法，再中立的轉述，幫助家長更了解動物的想法。",
    },
    {
      question: "我需要準備什麼嗎？溝通會如何進行呢？",
      answer: "需要提供『動物夥伴』以及『家長』的照片，線上進行即可，不需見面唷！",
    },
    {
      question: "主人或是動物需要做什麼嗎？",
      answer:
        "家長只需在約定好的時間上線，輕鬆地與Hazel對話，並適時的給予回饋，像跟朋友聊天一樣，溝通的當下動物在做什麼並不影響唷！",
    },
    {
      question: "溝通時長大約多久？",
      answer: "首次溝通約60分鐘。",
    },
    {
      question: "溝通後，動物是不是就會乖乖聽話？",
      answer:
        "『溝通不是命令』，動物跟我們一樣，有自己的意願與節奏。我們能做的是『傾聽與理解』，並且尊重牠們是否願意分享，以及願意分享的深度與方式～",
    },
  ]

  const whenToUseItems = [
    "想知道動物對生活或某件事的感受？",
    "想知道動物們彼此之間相處的如何？",
    "想知道動物想對你說什麼？",
    "想對動物表達深深的愛意～",
    "想透過溝通讓彼此的心更貼近～",
    "想單純的閒聊～",
  ]

  return (
    <div className="min-h-screen bg-[#fff7e5]">
      {/* Header */}
      <header className="py-6 px-4 md:px-8 bg-[#fff7ea]/80 backdrop-blur-sm">
        <div className="container mx-auto flex items-center">
          <Button variant="ghost" size="icon" className="text-[#B47A8F] mr-4" onClick={onBack}>
            <ArrowLeft className="h-6 w-6" />
          </Button>
          <div className="flex items-center">
            <div className="w-10 h-10 mr-3">
              <Image
                src="/images/hazel-logo.png"
                alt="Hazel's Animal Talk Logo"
                width={40}
                height={40}
                className="object-contain"
              />
            </div>
            <div>
              <h1 className="text-xl font-bold text-[#B47A8F]">Hazel&apos;s Animal Talk</h1>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 md:px-8 py-2">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto space-y-16"
        >
          {/* About Animal Communication Section */}
          <motion.div variants={itemVariants}>
            <Card className="bg-[#fff7ea]/95 backdrop-blur-sm border-none shadow-lg">
              <CardContent className="p-8 bg-[#f7e1c9]">
                <div className="flex items-center mb-8">
                  <div className="p-3 bg-[#fff]/70 rounded-full mr-4">
                    <Heart className="h-8 w-8 text-[#B47A8F]" />
                  </div>
                  <h2 className="text-2xl md:text-4xl font-bold text-[#B47A8F]">關於動物溝通 Ｑ&Ａ</h2>
                </div>

                <div className="flex flex-col md:flex-row gap-8">
                  <div className="space-y-6 md:w-3/5">
                    {qaItems.map((item, index) => (
                      <motion.div key={index} variants={itemVariants} className="border-l-4 border-[#E8A87C] pl-6 py-4">
                        <h3 className="text-lg font-bold text-[#B47A8F] mb-3">Ｑ：{item.question}</h3>
                        <p className="text-[#B47A8F] leading-relaxed">Ａ：{item.answer}</p>
                      </motion.div>
                    ))}
                  </div>
                  
                  <div className="md:w-2/5 flex items-center justify-center">
                    <div className="relative w-full h-full max-h-[500px]">
                      <Image 
                        src="/images/qna.png" 
                        alt="Animal Communication QnA" 
                        width={400}
                        height={500}
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* When to Use Animal Communication Section */}
          <motion.div variants={itemVariants}>
            <Card className="bg-[#fff7ea]/95 backdrop-blur-sm border-none shadow-lg">
              <CardContent className="p-8 bg-[#f7e1c9]">
                <div className="flex items-center mb-8">
                  <div className="p-3 bg-[#fff]/70 rounded-full mr-4">
                    <svg
                      className="h-8 w-8 text-[#B47A8F]"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 2L14.5 9H22L16 13.5L18.5 20.5L12 16L5.5 20.5L8 13.5L2 9H9.5L12 2Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <h2 className="text-2xl md:text-4xl font-bold text-[#B47A8F]">什麼時候需要動物溝通?</h2>
                </div>

                <div className="mb-8">
                  <p className="text-lg text-[#B47A8F] leading-relaxed">
                    很多人以為，動物溝通只有在出現「問題」時才需要，但其實，它更像是一種日常的「傾聽」。想知道牠在想什麼，或單純想和牠更靠近一點，動物溝通都可以發揮力量。
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {whenToUseItems.map((item, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      className="flex items-center p-4 bg-[#fff]/70 rounded-lg"
                    >
                      <div className="w-2 h-2 bg-[#E8A87C] rounded-full mr-4 flex-shrink-0"></div>
                      <p className="text-[#B47A8F] font-medium">{item}</p>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-8 text-center">
                  <p className="text-lg font-medium text-[#B47A8F] rounded-lg p-4 inline-block">
                  其實，無論什麼時候，只要願意敞開心去傾聽，就是最棒的時機！                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Back Button */}
          <motion.div variants={itemVariants} className="text-center">
            <Button size="lg" className="bg-[#B47A8F] hover:bg-[#9D6A7F] text-white px-8 py-3" onClick={onBack}>
              返回主頁
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
