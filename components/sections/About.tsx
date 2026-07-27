const About = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary-500">Tentang NAS Global Services</h2>
            <p className="text-lg text-neutral-700 mb-4 leading-relaxed">
              NAS Global Services adalah perusahaan konsultasi profesional yang berkomitmen memberikan solusi terbaik dalam berbagai bidang termasuk Urusan Pusaka, CIDB, Hartanah, Pembinaan, dan Konsultasi.
            </p>
            <p className="text-lg text-neutral-700 mb-4 leading-relaxed">
              Dengan tim profesional berpengalaman lebih dari 10 tahun, kami telah membantu ribuan klien mencapai tujuan bisnis mereka melalui layanan berkualitas tinggi dan konsultasi ahli.
            </p>
            <p className="text-lg text-neutral-700 mb-8 leading-relaxed">
              Komitmen kami adalah memberikan hasil maksimal dengan harga yang kompetitif dan proses yang efisien.
            </p>
            <div className="flex gap-4">
              <div>
                <p className="text-3xl font-bold text-accent-500">500+</p>
                <p className="text-neutral-700">Klien Puas</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-accent-500">1000+</p>
                <p className="text-neutral-700">Proyek Selesai</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-accent-500">10+</p>
                <p className="text-neutral-700">Tahun Pengalaman</p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="bg-gradient-to-br from-primary-100 to-accent-100 rounded-2xl h-96 flex items-center justify-center">
            <div className="text-center">
              <div className="text-7xl mb-4">🤝</div>
              <p className="text-primary-500 font-semibold">Mitra Terpercaya Anda</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
