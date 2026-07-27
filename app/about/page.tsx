import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tentang Kami | NAS Global Services',
  description: 'Pelajari tentang NAS Global Services, misi, visi, dan tim profesional kami.',
}

export default function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-500 to-primary-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Tentang Kami</h1>
          <p className="text-xl text-primary-100">Komitmen kami adalah memberikan layanan terbaik untuk kesuksesan Anda</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-primary-500">Perjalanan Kami</h2>
              <p className="text-lg text-neutral-700 mb-4">
                NAS Global Services didirikan dengan visi untuk memberikan solusi profesional dan terpercaya dalam berbagai bidang konsultasi.
              </p>
              <p className="text-lg text-neutral-700 mb-4">
                Dengan pengalaman bertahun-tahun, tim kami telah membantu ribuan klien mencapai tujuan mereka melalui layanan berkualitas tinggi dan konsultasi ahli.
              </p>
            </div>
            <div className="bg-primary-100 rounded-lg h-64 flex items-center justify-center">
              <p className="text-center text-primary-500 font-semibold">Gambar/Ilustrasi</p>
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            <div className="bg-primary-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-primary-500">Misi Kami</h3>
              <p className="text-neutral-700 leading-relaxed">
                Memberikan layanan konsultasi profesional yang mengutamakan kepuasan klien, integritas, dan inovasi dalam setiap aspek bisnis kami.
              </p>
            </div>
            <div className="bg-accent-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-primary-500">Visi Kami</h3>
              <p className="text-neutral-700 leading-relaxed">
                Menjadi mitra terpercaya dan terdepan dalam industri konsultasi di Malaysia, dikenal atas dedikasi, profesionalisme, dan hasil yang luar biasa.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold mb-12 text-center text-primary-500">Nilai-Nilai Kami</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Profesionalisme',
                  description: 'Kami berkomitmen memberikan standar layanan tertinggi dengan etika profesional yang tinggi.'
                },
                {
                  title: 'Integritas',
                  description: 'Kejujuran dan transparansi adalah fondasi dari setiap hubungan klien kami.'
                },
                {
                  title: 'Inovasi',
                  description: 'Kami terus berinovasi untuk memberikan solusi terbaik dan paling efektif.'
                },
                {
                  title: 'Kepercayaan',
                  description: 'Kepercayaan klien adalah aset paling berharga bagi kami.'
                },
                {
                  title: 'Keunggulan',
                  description: 'Kami berusaha mencapai keunggulan dalam setiap proyek dan layanan.'
                },
                {
                  title: 'Komitmen',
                  description: 'Kami berkomitmen penuh untuk kesuksesan jangka panjang klien kami.'
                },
              ].map((value, index) => (
                <div key={index} className="bg-white border-2 border-primary-100 p-6 rounded-lg hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold mb-3 text-accent-500">{value.title}</h3>
                  <p className="text-neutral-700">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
