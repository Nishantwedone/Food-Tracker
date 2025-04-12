"use client"

import Image from "next/image"
import Link from "next/link"
import { Utensils, ClipboardList, TruckIcon as TruckDelivery, Users, Star, MessageCircle } from 'lucide-react'
import { Button } from "@/components/ui/Button"
import { poppins } from './fonts'
import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showAIAssistant, setShowAIAssistant] = useState(false);
  const [userMessage, setUserMessage] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  };

  const handleAIAssistant = async (message) => {
    // Add user message to chat
    setMessages(prev => [...prev, {
      type: 'user',
      content: message
    }]);

    // Simulate AI thinking with loading state
    setMessages(prev => [...prev, {
      type: 'assistant',
      content: '...',
      isLoading: true
    }]);

    // Simulate API call delay
    setTimeout(() => {
      let response;
      // Simple response logic based on keywords
      if (message.toLowerCase().includes('hello') || message.toLowerCase().includes('hi')) {
        response = "Hello! How can I help you with the hospital food delivery system today?";
      } else if (message.toLowerCase().includes('food') || message.toLowerCase().includes('meal')) {
        response = "I can help you with meal planning, dietary restrictions, and delivery schedules. What specific information do you need?";
      } else if (message.toLowerCase().includes('delivery')) {
        response = "Our delivery system ensures timely and accurate food delivery to all patients. Would you like to know more about our delivery process?";
      } else if (message.toLowerCase().includes('diet') || message.toLowerCase().includes('dietary')) {
        response = "We handle various dietary requirements including vegetarian, vegan, gluten-free, and specific medical diets. What type of dietary information are you looking for?";
      } else {
        response = "I'm here to help with any questions about our hospital food delivery system. Could you please be more specific about what you'd like to know?";
      }

      // Update messages with AI response
      setMessages(prev => [
        ...prev.slice(0, -1), // Remove loading message
        {
          type: 'assistant',
          content: response
        }
      ]);
    }, 1000);
  };

  // For pages router (_app.tsx)
  if (typeof window !== 'undefined') {
    window.addEventListener('error', e => {
      e.preventDefault()
      console.error(e)
    })
  }

  // Or for app router (layout.tsx)
  // 'use client'
  if (typeof window !== 'undefined') {
    window.addEventListener('error', e => {
      e.preventDefault()
      console.error(e)
    })
  }

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  return (
    <motion.div 
      initial="initial"
      animate="animate"
      className={`min-h-screen bg-gray-50 ${poppins.variable} font-sans scroll-smooth relative`}
    >
      {/* AI Assistant Button */}
      <motion.div 
        className="fixed bottom-4 right-4 z-50"
        whileHover={{ scale: 1.1 }}
      >
        <Button
          className="rounded-full p-4 bg-emerald-500 hover:bg-emerald-600"
          onClick={() => setShowAIAssistant(!showAIAssistant)}
        >
          <MessageCircle className="w-6 h-6" />
        </Button>
      </motion.div>

      {/* AI Assistant Chat Window */}
      {showAIAssistant && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed bottom-20 right-4 w-80 bg-white rounded-lg shadow-xl z-50"
        >
          <div className="p-4 border-b">
            <h3 className="font-semibold">AI Assistant</h3>
          </div>
          <div className="p-4 h-80 overflow-y-auto">
            {messages.map((msg, index) => (
              <div 
                key={index} 
                className={`mb-2 p-2 rounded ${
                  msg.type === 'user' 
                    ? 'bg-emerald-100 ml-auto' 
                    : 'bg-gray-100'
                } ${
                  msg.type === 'user' 
                    ? 'max-w-[80%] text-right' 
                    : 'max-w-[80%]'
                }`}
              >
                {msg.isLoading ? (
                  <span className="animate-pulse">...</span>
                ) : (
                  msg.content
                )}
              </div>
            ))}
          </div>
          <div className="p-4 border-t">
            <input
              type="text"
              value={userMessage}
              onChange={(e) => setUserMessage(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === 'Enter' && userMessage.trim()) {
                  handleAIAssistant(userMessage);
                  setUserMessage("");
                }
              }}
              placeholder="Type your question..."
              className="w-full p-2 border rounded"
            />
          </div>
        </motion.div>
      )}

      <motion.header 
        {...fadeIn}
        className="bg-white shadow-sm sticky top-0 z-10"
      >
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <motion.div
              whileHover={{ rotate: 12 }}
              transition={{ duration: 0.2 }}
            >
              <Utensils className="w-8 h-8 text-emerald-500" />
            </motion.div>
            <span className="text-2xl font-bold bg-gradient-to-r from-sky-600 to-emerald-500 text-transparent bg-clip-text">
              NutriCare
            </span>
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            <motion.div whileHover={{ scale: 1.05 }}>
              <Link href="/" className="text-sm font-medium hover:text-emerald-500 transition-colors">
                Home
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }}>
              <Link href="#features" className="text-sm font-medium hover:text-emerald-500 transition-colors">
                Features
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }}>
              <Link href="#testimonial" className="text-sm font-medium hover:text-emerald-500 transition-colors">
                Testimonials
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }}>
              <Link href="#contact" className="text-sm font-medium hover:text-emerald-500 transition-colors">
                Contact
              </Link>
            </motion.div>
          </nav>
          {isLoggedIn ? (
            <motion.div whileHover={{ scale: 1.05 }}>
              <Button
                className="bg-red-500 hover:bg-red-600 transition-colors"
                onClick={handleLogout}
              >
                Logout
              </Button>
            </motion.div>
          ) : (
            <motion.div whileHover={{ scale: 1.05 }}>
              <Button className="bg-emerald-500 hover:bg-emerald-600 transition-colors">
                <Link href="/signup">Login</Link>
              </Button>
            </motion.div>
          )}
        </div>
      </motion.header>

      {/* Hero Section */}
      <motion.section 
        {...fadeIn}
        className="bg-gradient-to-br from-sky-600 to-emerald-500 text-white"
      >
        <div className="container mx-auto px-4 py-20 md:py-20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <h1 className={`${poppins.className} text-3xl md:text-6xl mx-4 font-bold leading-tight`}>
                Streamline <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-emerald-500 to-indigo-300">
                    Hospital Food
                  </span> Management
              </h1>
              <p className="text-xl md:text-2xl text-sky-100 pl-4">
                Efficiently manage patient diets, assign kitchen tasks, and track food delivery with our comprehensive system.
              </p>
              <motion.div whileHover={{ scale: 1.05 }}>
                <Button size="lg" variant="secondary" className="text-sky-800 bg-white hover:bg-sky-50 ml-4 p-6 text-lg transition-colors">
                  <Link href="/dashboard">View Dashboard</Link>
                </Button>
              </motion.div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative h-[400px] md:h-[400px] bg-transparent"
            >
              <Image
                src="https://i.pinimg.com/736x/3d/ce/a5/3dcea50fdd77a48aa568c7e270d353f2.jpg"
                alt="Hospital Food Management"
                fill
                className="object-fit rounded-lg shadow-2xl"
                priority
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Features */}
      <motion.section 
        {...fadeIn}
        id="features" 
        className="py-20 bg-white"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Key Features</h2>
          <motion.div 
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              { icon: ClipboardList, title: "Patient Diet Management", description: "Easily manage and update patient details and their specific dietary requirements." },
              { icon: Utensils, title: "Kitchen Task Assignment", description: "Efficiently assign and track tasks for the hospital's inner pantry staff." },
              { icon: TruckDelivery, title: "Food Delivery Tracking", description: "Monitor and ensure timely food delivery to patient rooms by delivery personnel." }
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <feature.icon className="w-16 h-16 text-emerald-500 mb-6" />
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section 
        {...fadeIn}
        className="py-20 bg-gray-50"
      >
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <h2 className="text-3xl md:text-4xl font-bold">
                Revolutionizing Hospital Food Service
              </h2>
              <p className="text-xl text-gray-600">
                Our system streamlines the entire process of hospital food management, from patient diet planning to food delivery, ensuring efficiency and patient satisfaction.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center space-x-3"
                >
                  <Users className="w-8 h-8 text-emerald-500" />
                  <span className="font-medium">Multi-user Platform</span>
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center space-x-3"
                >
                  <ClipboardList className="w-8 h-8 text-emerald-500" />
                  <span className="font-medium">Customizable Diet Charts</span>
                </motion.div>
              </div>
              <motion.div whileHover={{ scale: 1.05 }}>
                <Button className="bg-emerald-500 hover:bg-emerald-600 transition-colors">
                  Learn More
                </Button>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative h-[500px]"
              whileHover={{ scale: 1.05 }}
            >
              <Image
                src="https://cdn.dribbble.com/userupload/16156002/file/original-bc57d5af2b5ad1bba18238f1a80ed5c0.jpg?resize=1504x1128&vertical=center"
                alt="Hospital Food Management Dashboard"
                fill
                className="object-cover rounded-xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section 
        {...fadeIn}
        id="testimonial" 
        className="py-20 bg-white"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What Our Clients Say</h2>
          <motion.div 
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            {[1, 2, 3].map((testimonial) => (
              <motion.div
                key={testimonial}
                variants={fadeIn}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-50 rounded-xl overflow-hidden shadow-lg p-8 transition-all hover:shadow-xl"
              >
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6">
                  NutriCare has significantly improved our food service efficiency <br /> Patient satisfaction has increased and our staff finds it easy to use
                </p>
                <div className="flex items-center">
                  <Image
                    src="/placeholder.svg"
                    alt="John Doe"
                    width={48}
                    height={48}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold">John Doe</h4>
                    <p className="text-sm text-gray-500">Hospital Administrator</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer 
        {...fadeIn}
        id="contact" 
        className="bg-gray-800 text-white py-12"
      >
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">About NutriCare</h3>
              <p className="text-gray-400">Revolutionizing hospital food management for better patient care and operational efficiency.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <motion.li whileHover={{ x: 5 }}><Link href="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></motion.li>
                <motion.li whileHover={{ x: 5 }}><Link href="/" className="text-gray-400 hover:text-white transition-colors">About</Link></motion.li>
                <motion.li whileHover={{ x: 5 }}><Link href="/" className="text-gray-400 hover:text-white transition-colors">Features</Link></motion.li>
                <motion.li whileHover={{ x: 5 }}><Link href="/" className="text-gray-400 hover:text-white transition-colors">Contact</Link></motion.li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <p className="text-gray-400">123 Hospital Street<br />Cityville, India 12345<br />contact@nutricare.com</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <motion.a whileHover={{ scale: 1.2 }} href="#" className="text-gray-400 hover:text-white transition-colors"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg></motion.a>
                <motion.a whileHover={{ scale: 1.2 }} href="#" className="text-gray-400 hover:text-white transition-colors"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" /></svg></motion.a>
                <motion.a whileHover={{ scale: 1.2 }} href="#" className="text-gray-400 hover:text-white transition-colors"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg></motion.a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <p className="text-gray-400">&copy; 2025 NutriCare. All rights reserved.</p>
          </div>
        </div>
      </motion.footer>
    </motion.div>
  )
}
