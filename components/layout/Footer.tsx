import Link from 'next/link'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary-500 text-white mt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <span className="bg-accent-500 text-primary-900 px-2 py-1 rounded font-bold">NAS</span>
            </h3>
            <p className="text-primary-100 mb-4">NAS Global Services memberikan layanan profesional dan terpercaya untuk semua kebutuhan bisnis Anda.</p>
            <p className="text-primary-100 font-semibold">"Urusan dunia, kita ikhtiarkan bersama."</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-4 text-accent-500">Akses Cepat</h4>
            <ul className="space-y-2 text-primary-100">
              <li><Link href="/" className="hover:text-accent-500 transition-colors">Beranda</Link></li>
              <li><Link href="/about" className="hover:text-accent-500 transition-colors">Tentang Kami</Link></li>
              <li><Link href="/services" className="hover:text-accent-500 transition-colors">Perkhidmatan</Link></li>
              <li><Link href="/blog" className="hover:text-accent-500 transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-bold mb-4 text-accent-500">Layanan</h4>
            <ul className="space-y-2 text-primary-100 text-sm">
              <li><a href="#" className="hover:text-accent-500 transition-colors">Urusan Pusaka</a></li>
              <li><a href="#" className="hover:text-accent-500 transition-colors">Pendaftaran CIDB</a></li>
              <li><a href="#" className="hover:text-accent-500 transition-colors">Carian Hartanah</a></li>
              <li><a href="#" className="hover:text-accent-500 transition-colors">Konsultasi Kontraktor</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xl font-bold mb-4 text-accent-500">Hubungi Kami</h4>
            <ul className="space-y-3 text-primary-100">
              <li className="flex items-center gap-2">
                <span>📞</span>
                <a href="https://wa.me/60134556769" className="hover:text-accent-500 transition-colors">013-455 6769</a>
              </li>
              <li className="flex items-center gap-2">
                <span>📧</span>
                <a href="mailto:nas769global@gmail.com" className="hover:text-accent-500 transition-colors break-all">nas769global@gmail.com</a>
              </li>
              <li className="flex items-center gap-2">
                <span>📱</span>
                <a href="https://www.facebook.com/Nasglobal769" target="_blank" rel="noopener noreferrer" className="hover:text-accent-500 transition-colors">Facebook</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-primary-400 my-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-primary-100 text-sm">
          <p>&copy; {currentYear} NAS Global Services. Hak Cipta Dilindungi.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-accent-500 transition-colors">Kebijakan Privasi</Link>
            <Link href="#" className="hover:text-accent-500 transition-colors">Syarat & Ketentuan</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
