import React from 'react'
import Header from '@/app/components/common/header'
import Footer from '@/app/components/common/footer'
import { Settings, Wrench, Timer } from 'lucide-react'

const AnimatedIcon: React.FC<{ children: React.ReactNode, className?: string }> = ({ children, className }) => (
  <div className={ `animate-bounce ${className}` }>
    { children }
  </div>
)

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col">
      <div id="top" className="sticky top-0 z-50">
        <Header />
      </div>

      <main className="flex-grow flex items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100">
        <div className="max-w-2xl mx-auto p-8">
          <div className="bg-white rounded-lg shadow-xl p-12 transform hover:scale-105 transition-transform duration-300">
            { /* Icons Row */ }
            <div className="flex justify-center space-x-12 mb-8">
              <AnimatedIcon className="delay-0">
                <Settings className="w-12 h-12 text-blue-500" />
              </AnimatedIcon>
              <AnimatedIcon className="delay-100">
                <Wrench className="w-12 h-12 text-purple-500" />
              </AnimatedIcon>
              <AnimatedIcon className="delay-200">
                <Timer className="w-12 h-12 text-pink-500" />
              </AnimatedIcon>
            </div>

            { /* Content */ }
            <div className="text-center space-y-6">
              <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                준비중입니다
              </h1>

              <div className="space-y-4">
                <p className="text-xl text-gray-600 font-medium">
                  This site is currently under construction
                </p>
                <p className="text-lg text-gray-500">
                  곧 다시 찾아뵙겠습니다!
                </p>
              </div>

              { /* Loading animation */ }
              <div className="flex justify-center gap-1 mt-8">
                { [ ...Array(3) ].map((_, i) => (
                  <div
                    key={ i }
                    className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"
                    style={ { animationDelay: `${i * 200}ms` } }
                  />
                )) }
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}