import { Metadata } from 'next'
import ServiceCard from '@/components/ui/ServiceCard'

export const metadata: Metadata = {
  title: 'Perkhidmatan Kami | NAS Global Services',
  description: 'Jelajahi berbagai layanan profesional dari NAS Global Services termasuk Urusan Pusaka, CIDB, Hartanah, dan Konsultasi.',
}

const services = [
  {
    title: 'Urusan Pusaka',
    description: 'Layanan pengurusan warisan yang komprehensif dan profesional untuk memastikan distribusi warisan sesuai hukum.',
    icon: '📋',
  },
  {
    title: 'Pendaftaran & Pembaharuan CIDB G1–G7',
    description: 'Membantu kontraktor dalam proses pendaftaran dan pembaharuan grade CIDB dengan mudah dan efisien.',
    icon: '🏗️',
  },
  {
    title: 'MOF (Majlis Orang Fakir)',
    description: 'Konsultasi dan pengurusan terkait Majlis Orang Fakir untuk kemudahan administrasi Anda.',
    icon: '🤝',
  },
  {
    title: 'SPKK & PPK',
    description: 'Pemrosesan dokumen SPKK (Sijil Pelepasan Kualiti Kerja) dan PPK (Pegawai Penguasa Kerja) yang handal.',
    icon: '📑',
  },
  {
    title: 'ePerolehan',
    description: 'Pendaftaran dan pengurusan platform ePerolehan untuk memudahkan proses tender elektronik Anda.',
    icon: '💻',
  },
  {
    title: 'Carian Hartanah & Tanah',
    description: 'Layanan pencarian properti dan tanah dengan data lengkap untuk investasi yang menguntungkan.',
    icon: '🏘️',
  },
  {
    title: 'Konsultasi Kontraktor',
    description: 'Konsultasi ahli untuk kontraktor dalam menjalankan bisnis konstruksi yang sukses.',
    icon: '👷',
  },
  {
    title: 'Tender & Dokumen',
    description: 'Persiapan lengkap dokumen tender dan pengurusan proses lelang yang transparan.',
    icon: '📄',
  },
  {
    title: 'Pembinaan Rumah',
    description: 'Konsultasi untuk proyek pembinaan rumah dari perencanaan hingga penyelesaian.',
    icon: '🏠',
  },
  {
    title: 'Khidmat Konsultasi Umum',
    description: 'Konsultasi profesional untuk berbagai kebutuhan bisnis dan administrasi Anda.',
    icon: '💡',
  },
]

export default function Services() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-500 to-primary-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Perkhidmatan Kami</h1>
          <p className="text-xl text-primary-100">Solusi lengkap untuk semua kebutuhan bisnis Anda</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-primary-500">Mengapa Memilih Layanan Kami?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="text-accent-500 text-3xl flex-shrink-0">✓</div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-primary-500">Tim Profesional Berpengalaman</h3>
                <p className="text-neutral-700">Tim kami terdiri dari profesional bersertifikat dengan pengalaman bertahun-tahun di industri.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-accent-500 text-3xl flex-shrink-0">✓</div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-primary-500">Proses Cepat & Efisien</h3>
                <p className="text-neutral-700">Kami memastikan setiap proses diselesaikan dengan cepat tanpa mengorbankan kualitas.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-accent-500 text-3xl flex-shrink-0">✓</div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-primary-500">Harga Kompetitif</h3>
                <p className="text-neutral-700">Kami menawarkan paket layanan dengan harga yang kompetitif dan transparan.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-accent-500 text-3xl flex-shrink-0">✓</div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-primary-500">Kepuasan Klien Terjamin</h3>
                <p className="text-neutral-700">Kepuasan Anda adalah prioritas utama kami dalam setiap layanan yang diberikan.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
