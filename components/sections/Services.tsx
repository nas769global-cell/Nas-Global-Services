import Link from 'next/link'
import ServiceCard from '@/components/ui/ServiceCard'

const Services = () => {
  const services = [
    {
      title: 'Urusan Pusaka',
      description: 'Pengurusan warisan yang profesional dan sesuai hukum Islam serta perundangan Malaysia.',
      icon: '📋',
    },
    {
      title: 'Pendaftaran CIDB',
      description: 'Proses pendaftaran dan pembaharuan grade CIDB G1-G7 yang mudah dan cepat.',
      icon: '🏗️',
    },
    {
      title: 'Carian Hartanah',
      description: 'Layanan pencarian properti dan tanah untuk investasi menguntungkan Anda.',
      icon: '🏘️',
    },
    {
      title: 'Konsultasi Umum',
      description: 'Konsultasi profesional untuk berbagai kebutuhan bisnis dan administrasi.',
      icon: '💡',
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-white to-primary-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 text-primary-500">Layanan Unggulan Kami</h2>
          <p className="text-xl text-neutral-700 max-w-2xl mx-auto">
            Kami menyediakan berbagai layanan profesional untuk memenuhi semua kebutuhan bisnis Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>

        <div className="text-center">
          <Link href="/services" className="bg-primary-500 text-white font-bold py-3 px-8 rounded-lg hover:bg-primary-600 transition-colors inline-block">
            Lihat Semua Layanan
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Services
