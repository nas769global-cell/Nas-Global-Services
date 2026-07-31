'use client'

import { useEffect, useRef, useState } from 'react'

const About = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  const stats = [
    {
      icon: '🏛',
      title: 'Perkhidmatan Profesional',
      description: 'Tim bersertifikat dan berpengalaman siap melayani Anda',
    },
    {
      icon: '🇲🇾',
      title: 'Seluruh Malaysia',
      description: 'Jangkauan layanan di setiap sudut nusantara',
    },
    {
      icon: '⚡',
      title: 'Respons Pantas',
      description: 'Penyelesaian cepat tanpa mengorbankan kualitas',
    },
    {
      icon: '🤝',
      title: 'Khidmat Mesra Pelanggan',
      description: 'Dukungan penuh untuk kepuasan Anda',
    },
  ]

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-28 bg-white relative overflow-hidden"
      aria-label="Tentang NAS Global Services"
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#0B3058] to-[#0B3058] opacity-5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-tr from-[#C4A34A] to-[#C4A34A] opacity-5 rounded-full translate-y-1/2 -translate-x-1/2"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          {/* Left Content */}
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="w-2 h-2 rounded-full bg-[#C4A34A]"></div>
              <span className="text-sm font-bold tracking-widest text-[#C4A34A] uppercase">
                Tentang Kami
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#0B3058] leading-tight">
              NAS GLOBAL
              <br />
              SERVICES
            </h2>

            {/* Description */}
            <div className="space-y-4 text-neutral-700">
              <p className="text-lg leading-relaxed">
                NAS GLOBAL SERVICES menyediakan perkhidmatan profesional dalam
                <span className="font-semibold text-[#0B3058]">
                  {' '}Urusan Pusaka, CIDB, Hartanah, Pembinaan
                </span>
                {' '}dan
                <span className="font-semibold text-[#0B3058]">
                  {' '}Konsultasi
                </span>
                {' '}di seluruh Malaysia.
              </p>
              <p className="text-lg leading-relaxed">
                Dengan pengalaman mengurus pelbagai keperluan pelanggan, kami
                <span className="font-semibold text-[#0B3058]">
                  {' '}komited memberikan penyelesaian
                </span>
                {' '}yang lebih mudah, telus dan tersusun.
              </p>
            </div>

            {/* CTA Button */}
            <div className="mt-8 flex gap-4 flex-wrap">
              <a
                href="/services"
                className="inline-flex items-center justify-center px-8 py-3 bg-[#0B3058] text-white font-semibold rounded-lg hover:bg-[#082244] transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Ketahui Selanjutnya
              </a>
              <a
                href="https://wa.me/60134556769"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-[#C4A34A] text-[#0B3058] font-semibold rounded-lg hover:bg-[#C4A34A] hover:text-white transition-all duration-300"
              >
                Hubungi Kami
              </a>
            </div>
          </div>

          {/* Right Content - Stats Grid */}
          <div
            className={`grid grid-cols-1 sm:grid-cols-2 gap-6 transition-all duration-1000 delay-200 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-8 shadow-md border border-neutral-100 hover:shadow-xl hover:border-[#C4A34A] transition-all duration-300 hover:-translate-y-1 cursor-pointer overflow-hidden"
              >
                {/* Animated background on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#0B3058] to-[#0B3058] opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl"></div>

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-[#0B3058] mb-2 group-hover:text-[#C4A34A] transition-colors duration-300">
                    {stat.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    {stat.description}
                  </p>

                  {/* Decorative bottom line */}
                  <div className="mt-4 h-1 w-12 bg-gradient-to-r from-[#C4A34A] to-transparent rounded-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom divider */}
        <div className="mt-16 pt-16 border-t border-neutral-200 flex items-center justify-center">
          <div className="flex gap-4 text-neutral-400 text-lg">
            <span>✓</span>
            <span>Terpercaya</span>
            <span className="ml-4">✓</span>
            <span>Profesional</span>
            <span className="ml-4">✓</span>
            <span>Berdedikasi</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
