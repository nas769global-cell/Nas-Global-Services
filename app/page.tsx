import Hero from '@/components/sections/Hero'
import About from '@/components/About'
import Services from '@/components/sections/Services'
import WhyChooseUs from '@/components/sections/WhyChooseUs'
import Testimonials from '@/components/sections/Testimonials'
import CTA from '@/components/sections/CTA'

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <CTA />
    </div>
  )
}
