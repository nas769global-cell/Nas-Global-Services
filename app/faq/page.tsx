import { Metadata } from 'next'
import FAQItem from '@/components/ui/FAQItem'

export const metadata: Metadata = {
  title: 'Pertanyaan Umum (FAQ) | NAS Global Services',
  description: 'Jawaban atas pertanyaan umum tentang layanan NAS Global Services.',
}

const faqs = [
  {
    question: 'Berapa lama proses pengurusan warisan biasanya?',
    answer: 'Waktu pengurusan warisan tergantung kompleksitas kasus dan kelengkapan dokumen. Biasanya berkisar 2-6 bulan. Kami akan memberikan estimasi waktu yang lebih akurat setelah konsultasi awal.',
  },
  {
    question: 'Apa saja syarat untuk mendaftar CIDB?',
    answer: 'Syarat pendaftaran CIDB meliputi bukti kewarganegaraan, pengalaman kerja, modal usaha, dan sertifikat keahlian. Tim kami akan membantu Anda menyiapkan semua dokumen yang diperlukan.',
  },
  {
    question: 'Bagaimana cara memulai konsultasi dengan NAS Global Services?',
    answer: 'Anda dapat menghubungi kami melalui WhatsApp, email, atau mengisi form kontak di website. Tim kami akan segera merespons dan menjadwalkan sesi konsultasi Anda.',
  },
  {
    question: 'Apakah layanan Anda mencakup konsultasi online?',
    answer: 'Ya, kami menyediakan layanan konsultasi online melalui video call atau telepon untuk kemudahan Anda. Anda juga dapat berkonsultasi secara tatap muka di kantor kami.',
  },
  {
    question: 'Berapa biaya untuk layanan Anda?',
    answer: 'Biaya layanan bervariasi tergantung jenis layanan dan kompleksitas kasus. Kami menawarkan paket yang kompetitif dan transparan. Hubungi kami untuk penawaran khusus.',
  },
  {
    question: 'Apakah ada garansi kepuasan untuk layanan Anda?',
    answer: 'Kami sangat percaya pada kualitas layanan kami. Jika Anda tidak puas, kami siap mendiskusikan dan mencari solusi terbaik untuk Anda.',
  },
]

export default function FAQ() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-500 to-primary-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Pertanyaan Umum</h1>
          <p className="text-xl text-primary-100">Temukan jawaban atas pertanyaan Anda tentang layanan kami</p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <FAQItem key={index} {...faq} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
