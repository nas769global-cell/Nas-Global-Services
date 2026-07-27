const WhyChooseUs = () => {
  const reasons = [
    {
      title: 'Tim Profesional Bersertifikat',
      description: 'Tim kami terdiri dari profesional berpengalaman dan bersertifikat di bidangnya.',
      icon: '👨‍💼',
    },
    {
      title: 'Proses Cepat & Efisien',
      description: 'Kami memastikan setiap proses diselesaikan dengan cepat tanpa mengorbankan kualitas.',
      icon: '⚡',
    },
    {
      title: 'Harga Kompetitif',
      description: 'Paket layanan dengan harga yang kompetitif dan transparan tanpa biaya tersembunyi.',
      icon: '💰',
    },
    {
      title: 'Kepuasan Klien Prioritas',
      description: 'Kepuasan Anda adalah prioritas utama kami dalam setiap layanan yang diberikan.',
      icon: '😊',
    },
  ]

  return (
    <section className="py-20 bg-primary-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 text-primary-500">Mengapa Memilih Kami?</h2>
          <p className="text-xl text-neutral-700 max-w-2xl mx-auto">
            Kami memberikan nilai terbaik dan komitmen penuh untuk kesuksesan bisnis Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="text-5xl mb-4">{reason.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-primary-500">{reason.title}</h3>
              <p className="text-neutral-700">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
