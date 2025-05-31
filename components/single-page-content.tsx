"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, MessageCircle, Phone, Mail, MapPin, Menu, X, Instagram } from "lucide-react"
import Image from "next/image"
import FloatingHearts from "@/components/animations/floating-hearts"
import AnimalCommunicationDetail from "@/components/animal-communication-detail"

export default function SinglePageContent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")
  const [showDetailPage, setShowDetailPage] = useState(false)

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
  
  const buttonVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.05, transition: { duration: 0.2 } },
    tap: { scale: 0.98, transition: { duration: 0.1 } }
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "introduction", "about", "stories", "services", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navigationItems = [
    { id: "hero", label: "Home", labelCh: "首頁" },
    { id: "introduction", label: "What is Animal Communication", labelCh: "動物溝通介紹" },
    { id: "about", label: "About", labelCh: "關於" },
    { id: "stories", label: "Stories", labelCh: "個案故事" },
    { id: "services", label: "Services", labelCh: "服務" },
    { id: "contact", label: "Contact", labelCh: "聯絡" },
  ]

  return (
    <div className="relative min-h-screen bg-[#fff7e5]">
      {showDetailPage ? (
        <AnimalCommunicationDetail onBack={() => setShowDetailPage(false)} />
      ) : (
        <>
          <FloatingHearts />

          {/* Fixed Header */}
          <header className="fixed top-0 left-0 right-0 z-50 py-4 px-4 md:px-8 bg-white">
            <div className="container mx-auto flex justify-between items-center">
              <div className="flex items-center">
                <div className="w-10 h-10 mr-3">
                  <Image
                    src="/images/hazel-logo.png"
                    alt="Hazel's Animal Talk Logo"
                    width={44}
                    height={44}
                    className="object-contain"
                  />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-[#B47A8F]">Hazel&apos;s Animal Talk</h1>
                 
                </div>
              </div>

              {/* Desktop Navigation */}
              <nav className="hidden md:block">
                <ul className="flex space-x-6">
                  {navigationItems.map((item) => (
                    <li key={item.id}>
                      <motion.div
                        initial="initial"
                        whileHover="hover"
                        whileTap="tap"
                        variants={buttonVariants}
                        className="w-full"
                      >
                        <Button
                          variant="ghost"
                          className="w-full justify-start text-lg text-[#B47A8F] hover:text-[#9D6A7F] hover:bg-transparent"
                          onClick={() => scrollToSection(item.id)}
                        >
                        {item.label}
                      </Button>
                      </motion.div>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Mobile Menu Button */}
              <motion.div
                initial="initial"
                whileHover="hover"
                whileTap="tap"
                variants={buttonVariants}
              >
                <Button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  variant="ghost"
                  className="md:hidden p-2 text-[#B47A8F]"
                >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </Button>
              </motion.div>
            </div>

            {/* Mobile Navigation Menu */}
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="md:hidden mt-4 bg-[#fff7ea]/95 backdrop-blur-sm rounded-lg shadow-lg p-4"
              >
                <ul className="space-y-2">
                  {navigationItems.map((item) => (
                    <li key={item.id}>
                      <motion.div
                        initial="initial"
                        whileHover="hover"
                        whileTap="tap"
                        variants={buttonVariants}
                      >
                        <Button
                          variant="ghost"
                          className={`w-full justify-start text-[#B47A8F] ${
                            activeSection === item.id ? "bg-[#FFE5D9]/50" : ""
                          }`}
                          onClick={() => scrollToSection(item.id)}
                        >
                        <span className="mr-2">{item.label}</span>
                        <span className="text-sm opacity-70">{item.labelCh}</span>
                      </Button>
                      </motion.div>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </header>

          {/* Hero Section */}
          <section id="hero" className="min-h-screen flex items-center justify-center px-4 md:px-8 pt-16">
            <div className="container px-2 mb:px-none mx-auto text-center">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                <div className="mb-8 flex justify-center">
                  <div className="w-48 h-48 md:w-64 md:h-60 relative rounded-full overflow-hidden p-2">
                    <Image
                      src="/images/hazel-logo.png"
                      alt="Hazel's Animal Talk Logo"
                      width={256}
                      height={256}
                      className="object-contain"
                    />
                  </div>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-[#B47A8F] mb-6">Hazel&apos;s Animal Talk</h1>
                <h2 className="text-xl md:text-4xl font-semibold text-[#B47A8F] mb-6">讓每份陪伴，充滿愛與理解。</h2>
                <p className="text-xl md:text-2xl text-[#ebb97a] max-w-2xl mx-auto mb-6 font-medium uppercase tracking-wider">
                  LISTEN. CONNECT. UNDERSTAND.
                </p>
                <a
                  href="https://www.instagram.com/hazel_animaltalk/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.div
                    initial="initial"
                    whileHover="hover"
                    whileTap="tap"
                    variants={buttonVariants}
                  >
                    <Button
                      size="lg"
                      className="bg-[#B47A8F] hover:bg-[#9D6A7F] text-white py-8 px-6"
                    >
                    <div className="flex items-center justify-center gap-4">
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="60" 
                        height="60" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                        className="inline-block"
                      >
                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                        <circle cx="12" cy="12" r="4.5" />
                        <circle cx="17.5" cy="6.5" r="1.5" />
                      </svg>
                      <span className="text-base font-medium flex items-center">Visit Instagram <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg></span>
                    </div>
                  </Button>
                  </motion.div>
                </a>
              </motion.div> 
            </div>
          </section>

          {/* Introduction Section */}
          <section id="introduction" className="py-20 px-4 md:px-8 bg-[#f5ede0]/60">
            <div className="container mx-auto">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-center max-w-4xl mx-auto"
              >
                <motion.div variants={itemVariants}>
                  <h2 className="text-[1.775rem] md:text-5xl font-semibold text-[#B47A8F] mb-4">什麼是動物溝通？</h2>
                  <p className="text-xl md:text-2xl text-[#ebb97a] font-medium italic mb-8 text-left md:text-center">
                    It's not magic. It's listening with the heart.
                  </p>

                  <div className="mb-4 md:mb-8 flex justify-center">
                    <div className="w-[300px] h-[300px] md:w-[30rem] md:h-[23rem] relative overflow-hidden p-2 md:p-4">
                      <Image
                        src="/images/bird.png"
                        alt="Animal Communication Illustration"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>

                  <p className="text-lg md:text-xl text-[#B47A8F] leading-relaxed mb-4 md:mb-8 max-w-6xl text-left">
                  『動物溝通』是一種不依賴語言的心靈對話，透過靜心與直覺，聆聽毛孩內在真正的聲音。溝通師會進入安靜、穩定的狀態，用心去接收動物傳遞來的畫面、感受、情緒，進行一場溫柔的交流。
</p>
<p className="text-lg md:text-xl text-[#B47A8F] leading-relaxed mb-4 md:mb-8 max-w-6xl text-left">
動物擁有細膩的情緒與豐富的內在，只是表達方式不同於人類。透過動物溝通，我們能更貼近牠們的世界，理解牠們的需求與愛，並成為更懂牠的家人。</p>
<p className="text-lg md:text-xl text-[#B47A8F] leading-relaxed mb-4 md:mb-8 max-w-6xl text-left">
這不只是人與動物之間的橋樑，更是一段彼此理解、彼此陪伴的療癒旅程。用心傾聽，就能聽見愛的聲音。
</p>

                  <motion.div
                    initial="initial"
                    whileHover="hover"
                    whileTap="tap"
                    variants={buttonVariants}
                  >
                    <Button
                      size="lg"
                      className="bg-[#B47A8F] hover:bg-[#9D6A7F] text-white px-8 py-8"
                      onClick={() => {
                        // Set a flag in localStorage to indicate we want to scroll to the Q&A section
                        localStorage.setItem('scrollToQA', 'true');
                        // Show the detail page
                        setShowDetailPage(true);
                      }}
                    >
                    <span className="flex items-center text-lg font-medium">
                      了解更多
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </span>
                  </Button>
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </section>

          {/* About Section */}
          <section id="about" className="py-20 px-4 md:px-8 bg-[#f5ede0]/60">
            <div className="container mx-auto">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-col md:flex-row gap-8 items-center"
              >
                <motion.div variants={itemVariants} className="md:w-1/2">
                  <div className="relative w-64 h-64 md:w-80 md:h-80 md:mt-10 mx-auto mb-6">
                    <Image
                      src="/images/hazel.png"
                      alt="Hazel's Animal Talk Logo"
                      fill
                      priority
                      sizes="384px"
                      className="object-cover rounded-full md:rounded-md"
                      style={{
                        objectPosition: 'center',
                        width: '100%',
                        height: '100%'
                      }}
                    />
                  </div>
                </motion.div>

                <motion.div variants={itemVariants} className="md:w-1/2">
                  <h2 className="text-3xl md:text-5xl font-bold text-[#B47A8F] mb-4">About Hazel</h2>
                  <h3 className="text-lg md:text-xl text-[#E8A87C] font-medium tracking-wider mb-8">
                    This more than work - it's a way of loving.
                  </h3>
                  <div className="space-y-4 text-[#B47A8F]">
                    <p>您好，我是 Hazel，一位陪伴人與動物對話的溝通者。
                    </p>
                    <p>
                    真正踏上這條路，是因為陪伴我八年多的白文鳥離開了。那是我第一次那麼深刻地經歷失去。被悲傷困住了好一陣子，直到鼓起勇氣找了一位動物溝通師。
在那場安靜卻深刻的對話裡，我們一起細數相處的點滴，也慢慢與自己的傷痛和解。而動物唯一的願望，是希望我們能好好生活。
                    </p>
                    <p>
                    那時突然懂了，我們不必等到最後才說再見。
如果能在牠們還在的時候，就好好傾聽與分享，就算只是『今天吃了什麼？』、『睡得安不安穩？』，這些平凡小事，對牠們來說，都是深刻的愛。
                    </p>
                    <p>
                    希望幫助更多人與動物，搭建起一個美好的橋樑，讓彼此更靠近、更安心。
同時，每筆收入的 10% 將捐給友善動物團體，希望透過這份能力，讓愛持續流動。
                      </p>
                    {/* <p className="text-xl md:text-2xl text-[#ebb97a] max-w-2xl mx-auto mb-4 font-medium uppercase tracking-wider text-center">
                      LISTEN. CONNECT. UNDERSTAND.
                    </p> */}
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </section>

          {/* Stories Section */}
          <section id="stories" className="py-20 px-4 md:px-8">
            <div className="container mx-auto">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-[1.775rem] md:text-5xl font-bold text-[#B47A8F] mb-4">來自毛孩的悄悄話</h2>
                <p className="text-xl md:text-2xl text-[#ebb97a] max-w-2xl mx-auto mb-0 md:mb-4 font-medium tracking-wider">
                  <span className="block md:inline">Real stories.</span>{" "}
                  <span className="block md:inline">Honest moments.</span>
                </p>
                  <p className="text-xl md:text-2xl text-[#ebb97a] max-w-2xl mx-auto mb-4 font-medium tracking-wider">
                  Gentle connections.
                </p>
              </motion.div>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
              >
                <motion.div variants={itemVariants}>
                  <Card className="bg-[#fff7ea]/90 backdrop-blur-sm border-none shadow-md h-full flex flex-col md:flex-row p-5">
                  <div className="w-32 h-32 relative mx-auto md:mx-4 flex-shrink-0 mb-4 md:mb-0">
                    <Image 
                      src="/images/review1.png" 
                      alt="Pet review" 
                      width={128}
                      height={128}
                      className="rounded-full w-full h-full object-cover"
                    />
                  </div>
                    <CardContent className="pt-4 md:pt-6">
                      <p className="text-[#B47A8F] mb-4">
                        已經相處兩三年的『花屁ㄚ』，卻總是與人保持距離。
這次，花屁ㄚ試著說出自己的感受，家長也表達了對牠的愛，而幾週後悄悄地有了改變……
                      </p>
                    
                      <div className="flex items-center">
                      <div className="text-[#B47A8F] mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                        </svg>
                      </div>
                        <div>
                          <a 
  href="https://www.instagram.com/p/DI0cK1Xz1p2/?igsh=MWdoZzUwdHJ4NDA4ZA==" 
  target="_blank" 
  rel="noopener noreferrer" 
  className="text-sm text-[#B47A8F] flex items-center hover:underline cursor-pointer"
>
  Visit Instagram 
  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
</a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div variants={itemVariants}>
                <Card className="bg-[#fff7ea]/90 backdrop-blur-sm border-none shadow-md h-full flex flex-col md:flex-row p-5">
                <div className="w-32 h-32 relative mx-auto md:mx-4 flex-shrink-0 mb-4 md:mb-0">
                    <Image 
                      src="/images/review2.png" 
                      alt="Pet review" 
                      width={128}
                      height={128}
                      className="rounded-full w-full h-full object-cover"
                    />
                  </div>
                    <CardContent className="pt-4 md:pt-6">
                      <p className="text-[#B47A8F] mb-4">
                      姊姊投餵的流浪貓『小咪』，慢慢地對這裡產生感情了，原來看似保持距離的相處，原來小咪的心中放著滿滿的感謝～

                      </p>
                    
                      <div className="flex items-center">
                      <div className="text-[#B47A8F] mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                        </svg>
                      </div>
                        <div>
                          <a 
  href="https://www.instagram.com/p/DIs4cc_THJ4/?img_index=1&igsh=b2pybmY3MG94c3ls" 
  target="_blank" 
  rel="noopener noreferrer" 
  className="text-sm text-[#B47A8F] flex items-center hover:underline cursor-pointer"
>
  Visit Instagram 
  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
</a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div variants={itemVariants}>
                <Card className="bg-[#fff7ea]/90 backdrop-blur-sm border-none shadow-md h-full flex flex-col md:flex-row p-5">
                  <div className="w-32 h-32 relative mx-auto md:mx-4 flex-shrink-0 mb-4 md:mb-0">
                    <Image 
                      src="/images/review3.png" 
                      alt="Pet review" 
                      width={128}
                      height={128}
                      className="rounded-full w-full h-full object-cover"
                    />
                  </div>
                    <CardContent className="pt-4 md:pt-6">
                      <p className="text-[#B47A8F] mb-4">
                      家長眼中的『動物之間相處不融洽』，原來是因為『糖糖』年紀大了，身體衰退了，找不到喜歡自己的理由了……

                      </p>
                    
                      <div className="flex items-center">
                      <div className="text-[#B47A8F] mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                        </svg>
                      </div>
                        <div>
                          <a 
  href="https://www.instagram.com/p/DI-jbMNToR4/?igsh=MTVpcjUxeDdwd3Jj" 
  target="_blank" 
  rel="noopener noreferrer" 
  className="text-sm text-[#B47A8F] flex items-center hover:underline cursor-pointer"
>
  Visit Instagram 
  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
</a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div variants={itemVariants}>
                <Card className="bg-[#fff7ea]/90 backdrop-blur-sm border-none shadow-md h-full flex flex-col md:flex-row p-5">
                  <div className="w-32 h-32 relative mx-auto md:mx-4 flex-shrink-0 mb-4 md:mb-0">
                    <Image 
                      src="/images/review4.png" 
                      alt="Pet review" 
                      width={128}
                      height={128}
                      className="rounded-full w-full h-full object-cover"
                    />
                  </div>
                    <CardContent className="pt-4 px-5 md:pt-6">
                      <p className="text-[#B47A8F] mb-4">
                      哥哥姊姊帶『泰迪』回家前，心裡偷偷藏的小心思，還真的瞞不過貓咪！而且他還有自己的一套『貓咪哲學』喔！
                      </p>
                    
                      <div className="flex items-center">
                      <div className="text-[#B47A8F] mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                        </svg>
                      </div>
                        <div>
                          <a 
  href="https://www.instagram.com/p/DIlUwwUTtLo/?igsh=MTVpcjUxeDdwd3Jj" 
  target="_blank" 
  rel="noopener noreferrer" 
  className="text-sm text-[#B47A8F] flex items-center hover:underline cursor-pointer"
>
  Visit Instagram 
  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
</a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            </div>
          </section>

          {/* Services Section */}
          <section id="services" className="py-20 px-4 md:px-8">
            <div className="container mx-auto px-2 md:px-none">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-[1.775rem] md:text-5xl font-bold text-[#B47A8F] mb-4">開啟一段屬於你們的對話</h2>
                <p className="text-xl md:text-2xl text-[#ebb97a] font-medium mb-6">
                  Gentle guidance before we begin.
                </p>
                <a
                  href="https://forms.gle/JqMtwd3UaZTMYa9p9"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                    <motion.div
                      initial="initial"
                      whileHover="hover"
                      whileTap="tap"
                      variants={buttonVariants}
                    >
                      <Button
                        size="lg"
                        className="bg-[#B47A8F] hover:bg-[#9D6A7F] text-white py-8"
                      >
                      <div className="text-center">
                        <div className="text-lg font-medium">預約表單</div>
                        <div className="text-sm flex items-center justify-center">Book a session <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg></div>
                      </div>
                    </Button>
                    </motion.div>
                </a>
              </motion.div>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-3 gap-8"
              >
                <motion.div variants={itemVariants}>
                  <Card className="bg-[#fff7ea]/90 backdrop-blur-sm border-none shadow-md h-full">
                    <CardContent className="pt-6">
                      <div className="flex justify-center mb-4">
                        <div className="p-3 bg-[#f0e6d6] rounded-full">
                          <Heart className="h-8 w-8 text-[#B47A8F]" />
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-[#B47A8F] text-center mb-4">服務項目
                      </h3>
                      <p className="text-[#B47A8F] text-center mb-2">
                      — 在世動物溝通 —
                      </p>
                      <p className="text-[#B47A8F] text-center mb-10">
                      收費方式：NT$999/60分鐘。
                      </p>
                      <p className="text-[#B47A8F] text-center mb-2">
                      （每筆訂單10％將捐給友善動物團體。）
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <Card className="bg-[#fff7ea]/90 backdrop-blur-sm border-none shadow-md h-full">
                    <CardContent className="pt-6">
                      <div className="flex justify-center mb-4">
                        <div className="p-3 bg-[#f0e6d6] rounded-full">
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
                      </div>
                      <h3 className="text-xl font-semibold text-[#B47A8F] text-center mb-4">預約流程

                      </h3>
                      <div className="flex flex-col items-center">
                        <div className="inline-block text-left">
                          <p className="text-[#B47A8F] mb-2">
                          1. 了解『什麼是動物溝通？』。</p>
                          <p className="text-[#B47A8F] mb-2">
                          2. <a 
                            href="https://docs.google.com/forms/d/e/1FAIpQLSfFCYgNOFNJhBZd0DFbJ-XjqQ-JYgpQnLBs-XVq9lJBq1DKHA/viewform" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="hover:underline cursor-pointer flex items-center inline-flex"
                          >
                            填寫預約表單
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </a>
                          </p>
                          <p className="text-[#B47A8F] mb-2">
                          3. 確認時段＆付款。</p>
                          <p className="text-[#B47A8F]">
                          4. 付款後即預約成功。</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <Card className="bg-[#fff7ea]/90 backdrop-blur-sm border-none shadow-md h-full">
                    <CardContent className="pt-6">
                      <div className="flex justify-center mb-4">
                        <div className="p-3 bg-[#f0e6d6] rounded-full">
                          <MessageCircle className="h-8 w-8 text-[#B47A8F]" />
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-[#B47A8F] text-center mb-4">溝通須知

                      </h3>
                      <div className="flex flex-col items-center">
                        <div className="inline-block text-left">
                          <p className="text-[#B47A8F] mb-2">
                          1. 提供動物『看向鏡頭的清晰全身照』3-5張。</p>
                          <p className="text-[#B47A8F] mb-2">
                          2. 為線上『即時文字』溝通。</p>
                          <p className="text-[#B47A8F] mb-2">
                          3. 溝通者需為主要照顧者。</p>
                          <p className="text-[#B47A8F] mb-2">
                          4.溝通前，須向動物告知有此次溝通。</p>
                          <p className="text-[#B47A8F] mb-2">
                          5.帶著一顆全然敞開的心，一起聊聊吧！</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="py-16 px-2 md:px-8 bg-[#f5ede0]/60">
            <div className="container mx-auto px-2 md:px-none">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-[1.775rem] md:text-5xl font-semibold text-[#B47A8F] mb-4">您正在找的，也許就是這裡
                </h2>
                <h3 className="text-lg md:text-2xl font-medium text-[#B47A8F] mb-6">無論是預約、提問，都歡迎留下訊息。
                </h3>
                <div className="text-lg px-4 md:text-xl text-[#E8A87C] font-medium tracking-wider text-left md:text-center">
                <p className="mb-4 md:mb-0 md:inline text-center">I'm here —</p>
                <p className="md:inline">Gently, sincerely, always listening.</p>
                </div>
              </motion.div>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex justify-center"
              >
                <motion.div variants={itemVariants} className="max-w-md mx-auto text-center">
                  <div className="flex justify-center mb-8">
                    <div className="rounded-full overflow-hidden shadow-lg w-40 h-40 md:w-56 md:h-56">
                      <Image
                        src="/images/contact.png"
                        alt="Contact"
                        width={224}
                        height={224}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-[#B47A8F] mb-6">Contact Information</h3>
                  <div className="space-y-6">
                    <div className="flex items-center">
                      <div className="text-[#B47A8F] mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                        </svg>
                      </div>
                      <p className="text-[#B47A8F] flex items-center">IG : <a href="https://www.instagram.com/hazel_animaltalk/" target="_blank" rel="noopener noreferrer" className="flex items-center hover:underline">hazel_animaltalk <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg></a></p>
                    </div>
                    <div className="flex items-center">
                      <Mail className="h-5 w-5 text-[#B47A8F] mr-3" />
                      <p className="text-[#B47A8F]">hazel.healing66@gmail.com</p>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="text-[#B47A8F] mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                          <polyline points="14 2 14 8 20 8"></polyline>
                          <line x1="16" y1="13" x2="8" y2="13"></line>
                          <line x1="16" y1="17" x2="8" y2="17"></line>
                          <polyline points="10 9 9 9 8 9"></polyline>
                        </svg>
                      </div>
                      <p className="text-[#B47A8F] flex items-center">預約表單<a href="https://forms.gle/JqMtwd3UaZTMYa9p9" target="_blank" rel="noopener noreferrer" className="flex items-center hover:underline"> - Reservation Form <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg></a></p>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-5 w-5 text-[#B47A8F] mr-3" />
                      <p className="text-[#B47A8F]">Taipei, Taiwan</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </section>

          {/* Footer */}
          <footer className="py-8 px-4 md:px-8 bg-[#fff7ea]/80 backdrop-blur-sm">
            <div className="container mx-auto">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="flex items-center mb-4 md:mb-0">
                  <div className="w-8 h-8 mr-2">
                    <Image
                      src="/images/hazel-logo.png"
                      alt="Hazel's Animal Talk Logo"
                      width={40}
                      height={40}
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-[#B47A8F]">Hazel&apos;s Animal Talk</h2>
                  </div>
                </div>

                <div className="text-center md:text-right">
                  <p className="text-sm text-[#B47A8F]">連結您與毛孩的心靈橋樑</p>
                  <p className="text-xs text-[#B47A8F] mt-1">
                    &copy; {new Date().getFullYear()} Hazel&apos;s Animal Talk. All rights reserved.
                  </p>
                </div>
              </div>
            </div>
          </footer>
        </>
      )}
    </div>
  )
}
