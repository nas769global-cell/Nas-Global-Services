import Link from 'next/link'

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary-500 to-primary-700 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent-500 rounded-full translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <h2 className="text-5xl font-bold mb-6 leading-tight">
          Siap Memulai Perjalanan Sukses Anda?
        </h2>
        <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
          Hubungi kami hari ini untuk konsultasi gratis dan temukan bagaimana NAS Global Services dapat membantu bisnis Anda berkembang.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://wa.me/60134556769"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent-500 text-primary-900 font-bold py-3 px-8 rounded-lg hover:bg-accent-600 transition-colors text-center"
          >
            Hubungi Kami di WhatsApp
          </a>
          <Link href="/contact" className="border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white hover:text-primary-500 transition-colors text-center">
            Isi Form Kontak
          </Link>
        </div>
      </div>
    </section>
  )
}

export default CTA
