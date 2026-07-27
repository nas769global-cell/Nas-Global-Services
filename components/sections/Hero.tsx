import Link from 'next/link'

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-primary-500 via-primary-600 to-primary-700 text-white py-20 md:py-32 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent-500 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-500 rounded-full translate-x-1/4 translate-y-1/4"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Urusan Dunia, Kita Ikhtiarkan Bersama
            </h1>
            <p className="text-xl text-primary-100 mb-8 leading-relaxed">
              NAS Global Services menyediakan solusi profesional untuk Urusan Pusaka, CIDB, Hartanah, Pembinaan, dan Konsultasi. Dengan tim berpengalaman, kami siap membantu kesuksesan bisnis Anda.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/services" className="bg-accent-500 text-primary-900 font-bold py-3 px-8 rounded-lg hover:bg-accent-600 transition-colors text-center">
                Jelajahi Layanan Kami
              </Link>
              <a href="https://wa.me/60134556769" target="_blank" rel="noopener noreferrer" className="border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white hover:text-primary-500 transition-colors text-center">
                Hubungi Kami Sekarang
              </a>
            </div>
          </div>

          {/* Image/Illustration */}
          <div className="relative h-96 md:h-full flex items-center justify-center">
            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl w-full h-full flex items-center justify-center border border-white border-opacity-20">
              <div className="text-center">
                <div className="text-7xl mb-4">💼</div>
                <p className="text-white font-semibold">Solusi Bisnis Profesional</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-16 border-t border-white border-opacity-20">
          <div className="text-center">
            <p className="text-4xl font-bold text-accent-500">500+</p>
            <p className="text-primary-100 mt-2">Klien Puas</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-accent-500">10+</p>
            <p className="text-primary-100 mt-2">Tahun Pengalaman</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-accent-500">1000+</p>
            <p className="text-primary-100 mt-2">Proyek Selesai</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-accent-500">98%</p>
            <p className="text-primary-100 mt-2">Tingkat Kepuasan</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
