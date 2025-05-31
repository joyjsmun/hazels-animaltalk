"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Heart, MessageCircle, Phone, Mail, MapPin } from "lucide-react"
import Image from "next/image"

export default function MainContent() {
  const [activeTab, setActiveTab] = useState("services")

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFE5D9] via-[#FFF5EB] to-[#E8A87C]">
      {/* Header */}
      <header className="py-6 px-4 md:px-8 bg-white/30 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
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
              <h1 className="text-2xl font-bold text-[#B47A8F]">Hazel&apos;s Animal Talk</h1>
            </div>
          </div>

          <nav>
            <ul className="flex space-x-6">
              <li>
                <Button
                  variant="ghost"
                  className={`text-[#B47A8F] ${activeTab === "services" ? "bg-[#FFE5D9]/50" : ""}`}
                  onClick={() => setActiveTab("services")}
                >
                  Services
                </Button>
              </li>
              <li>
                <Button
                  variant="ghost"
                  className={`text-[#B47A8F] ${activeTab === "about" ? "bg-[#FFE5D9]/50" : ""}`}
                  onClick={() => setActiveTab("about")}
                >
                  About
                </Button>
              </li>
              <li>
                <Button
                  variant="ghost"
                  className={`text-[#B47A8F] ${activeTab === "testimonials" ? "bg-[#FFE5D9]/50" : ""}`}
                  onClick={() => setActiveTab("testimonials")}
                >
                  Stories
                </Button>
              </li>
              <li>
                <Button
                  variant="ghost"
                  className={`text-[#B47A8F] ${activeTab === "contact" ? "bg-[#FFE5D9]/50" : ""}`}
                  onClick={() => setActiveTab("contact")}
                >
                  Contact
                </Button>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4 md:px-8">
        <div className="container mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="mb-8 flex justify-center">
              <div className="w-40 h-40 md:w-48 md:h-48 relative">
                <Image
                  src="/images/hazel-logo.png"
                  alt="Hazel's Animal Talk Logo"
                  width={192}
                  height={192}
                  className="object-contain"
                />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-[#B47A8F] mb-4">Hazel&apos;s Animal Talk</h1>
            <p className="text-xl md:text-2xl text-[#B47A8F] max-w-2xl mx-auto mb-4">連結您與寵物的心靈橋樑</p>
            <p className="text-lg md:text-xl text-[#E8A87C] font-medium uppercase tracking-wider mb-8">
              Listen. Connect. Understand.
            </p>
            <Button
              size="lg"
              className="bg-[#B47A8F] hover:bg-[#9D6A7F] text-white"
              onClick={() => setActiveTab("contact")}
            >
              Book a Session
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="container mx-auto px-4 md:px-8 pb-16">
        <TabsList className="hidden">
          <TabsTrigger value="services">Services</TabsTrigger>
          <TabsTrigger value="about">About</TabsTrigger>
          <TabsTrigger value="testimonials">Stories</TabsTrigger>
          <TabsTrigger value="contact">Contact</TabsTrigger>
        </TabsList>

        {/* Services Section */}
        <TabsContent value="services">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <motion.div variants={itemVariants}>
              <Card className="bg-white/70 backdrop-blur-sm border-none shadow-md h-full">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-[#FFE5D9] rounded-full">
                      <Heart className="h-8 w-8 text-[#B47A8F]" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-[#B47A8F] text-center mb-4">Animal Communication</h3>
                  <p className="text-[#B47A8F] text-center">
                  服務項目：在世動物溝通。
                  </p>
                  <p className="text-[#B47A8F] text-center">
                  收費方式：NT$999/60分鐘。
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="bg-white/70 backdrop-blur-sm border-none shadow-md h-full">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-[#FFE5D9] rounded-full">
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
                  <h3 className="text-xl font-bold text-[#B47A8F] text-center mb-4">Energy Healing</h3>
                  <p className="text-[#B47A8F] text-center">
                    Gentle energy work to help your pet release physical and emotional blockages, promoting overall
                    wellbeing and supporting recovery from illness or trauma.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="bg-white/70 backdrop-blur-sm border-none shadow-md h-full">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-[#FFE5D9] rounded-full">
                      <MessageCircle className="h-8 w-8 text-[#B47A8F]" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-[#B47A8F] text-center mb-4">End-of-Life Support</h3>
                  <p className="text-[#B47A8F] text-center">
                    Compassionate guidance for both pets and their humans during the transition process, helping to ease
                    anxiety and facilitate peaceful goodbyes.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </TabsContent>

        {/* About Section */}
        <TabsContent value="about">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col md:flex-row gap-8 items-center"
          >
            <motion.div variants={itemVariants} className="md:w-1/2">
              <div className="rounded-full overflow-hidden w-64 h-64 mx-auto mb-6 bg-[#FFE5D9] p-4">
                <div className="w-full h-full relative">
                  <Image src="/images/hazel-logo.png" alt="Hazel's Animal Talk Logo" fill className="object-contain" />
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="md:w-1/2">
              <h2 className="text-3xl font-bold text-[#B47A8F] mb-4">About Hazel</h2>
              <div className="space-y-4 text-[#B47A8F]">
                <p>
                  Hazel has been communicating with animals since childhood, but only realized her gift was special when
                  she helped a neighbor's anxious cat overcome its fear of strangers.
                </p>
                <p>
                  With over 15 years of experience and training in various energy healing modalities, Hazel has helped
                  thousands of pets and their humans establish deeper connections and resolve issues that conventional
                  methods couldn't address.
                </p>
                <p>
                  Her approach combines telepathic communication, energy work, and intuitive guidance to create a
                  holistic healing experience for both animals and their human companions.
                </p>
                <p className="font-medium">Hazel believes in three core principles: Listen. Connect. Understand.</p>
              </div>
            </motion.div>
          </motion.div>
        </TabsContent>

        {/* Stories Section */}
        <TabsContent value="testimonials">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            <motion.div variants={itemVariants}>
              <Card className="bg-white/70 backdrop-blur-sm border-none shadow-md h-full">
                <CardContent className="pt-6">
                  <p className="text-[#B47A8F] italic mb-4">
                    "After our session with Hazel, my cat's behavior completely changed. She stopped hiding when guests
                    came over and became much more affectionate. Hazel helped me understand what was causing her anxiety
                    and how to help her feel safe."
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-[#FFE5D9] flex items-center justify-center mr-3">
                      <span className="text-[#B47A8F] font-bold">LT</span>
                    </div>
                    <div>
                      <p className="font-bold text-[#B47A8F]">Lisa T.</p>
                      <p className="text-sm text-[#B47A8F]">and Mochi the cat</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="bg-white/70 backdrop-blur-sm border-none shadow-md h-full">
                <CardContent className="pt-6">
                  <p className="text-[#B47A8F] italic mb-4">
                    "I was skeptical at first, but Hazel knew things about my dog that she couldn't possibly have known.
                    The energy healing session helped with his arthritis more than the medications did. We're now
                    regular clients!"
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-[#FFE5D9] flex items-center justify-center mr-3">
                      <span className="text-[#B47A8F] font-bold">JW</span>
                    </div>
                    <div>
                      <p className="font-bold text-[#B47A8F]">James W.</p>
                      <p className="text-sm text-[#B47A8F]">and Buddy the dog</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="bg-white/70 backdrop-blur-sm border-none shadow-md h-full">
                <CardContent className="pt-6">
                  <p className="text-[#B47A8F] italic mb-4">
                    "Hazel's end-of-life support for our elderly rabbit was a gift beyond words. She helped us
                    understand when he was ready to go and facilitated such a peaceful transition. We felt guided and
                    supported through the entire process."
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-[#FFE5D9] flex items-center justify-center mr-3">
                      <span className="text-[#B47A8F] font-bold">MC</span>
                    </div>
                    <div>
                      <p className="font-bold text-[#B47A8F]">Maria C.</p>
                      <p className="text-sm text-[#B47A8F]">and Thumper the rabbit</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="bg-white/70 backdrop-blur-sm border-none shadow-md h-full">
                <CardContent className="pt-6">
                  <p className="text-[#B47A8F] italic mb-4">
                    "My parrot had been plucking his feathers for years despite vet visits and environmental changes.
                    After one session with Hazel, we understood the emotional root cause and within weeks, the plucking
                    decreased dramatically. It's been amazing!"
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-[#FFE5D9] flex items-center justify-center mr-3">
                      <span className="text-[#B47A8F] font-bold">KL</span>
                    </div>
                    <div>
                      <p className="font-bold text-[#B47A8F]">Kevin L.</p>
                      <p className="text-sm text-[#B47A8F]">and Rio the parrot</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </TabsContent>

        {/* Contact Section */}
        <TabsContent value="contact">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl font-bold text-[#B47A8F] mb-6">您正在找的，也許就是這裡。
              </h2>
              <div className="space-y-6">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-[#B47A8F] mr-3" />
                  <p className="text-[#B47A8F]">+886 123 456 789</p>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-[#B47A8F] mr-3" />
                  <p className="text-[#B47A8F]">hazel@hazelhealing.life</p>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-[#B47A8F] mr-3" />
                  <p className="text-[#B47A8F]">Taipei, Taiwan</p>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-bold text-[#B47A8F] mb-4">Session Types</h3>
                <ul className="space-y-2 text-[#B47A8F]">
                  <li>• Initial Consultation (60 minutes)</li>
                  <li>• Follow-up Session (45 minutes)</li>
                  <li>• Emergency Session (30 minutes)</li>
                  <li>• End-of-Life Support (as needed)</li>
                </ul>
                <p className="mt-4 text-[#B47A8F]">
                  Sessions available in-person (Taipei area) or remotely via video call.
                </p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="bg-white/70 backdrop-blur-sm border-none shadow-md">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold text-[#B47A8F] mb-4">Send a Message</h3>

                  <form className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Input
                          placeholder="Your Name"
                          className="bg-white/50 border-[#E8A87C] focus:border-[#B47A8F]"
                        />
                      </div>
                      <div>
                        <Input
                          placeholder="Your Email"
                          type="email"
                          className="bg-white/50 border-[#E8A87C] focus:border-[#B47A8F]"
                        />
                      </div>
                    </div>
                    <div>
                      <Input
                        placeholder="Your Pet's Name and Type"
                        className="bg-white/50 border-[#E8A87C] focus:border-[#B47A8F]"
                      />
                    </div>
                    <div>
                      <Textarea
                        placeholder="How can we help you and your pet?"
                        className="bg-white/50 border-[#E8A87C] focus:border-[#B47A8F]"
                        rows={5}
                      />
                    </div>
                    <Button type="submit" className="w-full bg-[#B47A8F] hover:bg-[#9D6A7F] text-white">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </TabsContent>
      </Tabs>

      {/* Footer */}
      <footer className="py-8 px-4 md:px-8 bg-white/30 backdrop-blur-sm">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <div className="w-8 h-8 mr-2">
                <Image
                  src="/images/hazel-logo.png"
                  alt="Hazel's Animal Talk Logo"
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <div>
                <h2 className="text-lg font-bold text-[#B47A8F]">Hazel&apos;s Animal Talk</h2>
              </div>
            </div>

            <div className="text-center md:text-right">
              <p className="text-sm text-[#B47A8F]">連結您與寵物的心靈橋樑</p>
              <p className="text-xs text-[#B47A8F] mt-1">
                &copy; {new Date().getFullYear()} Hazel&apos;s Animal Talk. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
