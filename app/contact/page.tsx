import { Metadata } from 'next'
import ContactForm from '@/components/sections/ContactForm'

export const metadata: Metadata = {
  title: 'Hubungi Kami | NAS Global Services',
  description: 'Hubungi NAS Global Services untuk konsultasi dan informasi lebih lanjut tentang layanan kami.',
}

export default function Contact() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-500 to-primary-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Hubungi Kami</h1>
          <p className="text-xl text-primary-100">Kami siap membantu Anda dengan pertanyaan atau layanan apapun</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-primary-500">Kirim Pesan Kami</h2>
              <ContactForm />
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-primary-500">Informasi Kontak</h2>
              <div className="space-y-6">
                <div className="bg-primary-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-2 text-primary-500 flex items-center gap-2">
                    <span>📞</span> WhatsApp
                  </h3>
                  <p className="text-neutral-700"><a href="https://wa.me/60134556769" className="text-accent-500 hover:text-accent-600 font-semibold">013-455 6769</a></p>
                </div>

                <div className="bg-primary-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-2 text-primary-500 flex items-center gap-2">
                    <span>📧</span> Email
                  </h3>
                  <p className="text-neutral-700"><a href="mailto:nas769global@gmail.com" className="text-accent-500 hover:text-accent-600 font-semibold">nas769global@gmail.com</a></p>
                </div>

                <div className="bg-primary-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-2 text-primary-500 flex items-center gap-2">
                    <span>📱</span> Media Sosial
                  </h3>
                  <p className="text-neutral-700">
                    <a href="https://www.facebook.com/Nasglobal769" target="_blank" rel="noopener noreferrer" className="text-accent-500 hover:text-accent-600 font-semibold">
                      Facebook: NAS Global
                    </a>
                  </p>
                </div>

                <div className="bg-accent-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-2 text-primary-500 flex items-center gap-2">
                    <span>⏰</span> Jam Operasional
                  </h3>
                  <p className="text-neutral-700">Senin - Jumat: 08:30 - 17:30</p>
                  <p className="text-neutral-700">Sabtu: 09:00 - 13:00</p>
                  <p className="text-neutral-700">Minggu & Hari Libur: Tutup</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
