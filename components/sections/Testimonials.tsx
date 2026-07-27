const Testimonials = () => {
  const testimonials = [
    {
      name: 'Ahmad Fauzi',
      company: 'PT Maju Jaya',
      role: 'Pemilik Usaha',
      text: 'Layanan NAS Global Services sangat profesional dan responsif. Mereka membantu saya menyelesaikan urusan CIDB dengan cepat dan efisien.',
      rating: 5,
    },
    {
      name: 'Siti Nurhaliza',
      company: 'Keluarga Nurhaliza',
      role: 'Keluarga',
      text: 'Terima kasih atas bantuan pengurusan warisan yang transparan dan sesuai hukum. Sangat terbantu dengan konsultasi yang diberikan.',
      rating: 5,
    },
    {
      name: 'Mohammad Rizki',
      company: 'PT Konstruksi Indonesia',
      role: 'Direktur',
      text: 'Konsultasi kontraktor yang diberikan sangat membantu dalam mengembangkan bisnis konstruksi kami. Highly recommended!',
      rating: 5,
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 text-primary-500">Testimoni Klien</h2>
          <p className="text-xl text-neutral-700 max-w-2xl mx-auto">
            Dengarkan apa yang klien kami katakan tentang layanan kami.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-primary-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>
              <p className="text-neutral-700 mb-6 leading-relaxed italic">"{testimonial.text}"</p>
              <div className="border-t border-primary-200 pt-4">
                <p className="font-bold text-primary-500">{testimonial.name}</p>
                <p className="text-sm text-neutral-600">{testimonial.role}</p>
                <p className="text-sm text-neutral-600">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
