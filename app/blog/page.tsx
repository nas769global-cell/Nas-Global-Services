import { Metadata } from 'next'
import BlogCard from '@/components/ui/BlogCard'

export const metadata: Metadata = {
  title: 'Blog & Artikel | NAS Global Services',
  description: 'Baca artikel dan tips terbaru tentang Urusan Pusaka, CIDB, Hartanah, dan Konsultasi.',
}

const blogs = [
  {
    title: 'Panduan Lengkap Pengurusan Warisan di Malaysia',
    excerpt: 'Pelajari cara yang tepat untuk menguruskan warisan sesuai dengan undang-undang Islam dan perundangan Malaysia.',
    category: 'Urusan Pusaka',
    date: '2024-01-15',
  },
  {
    title: 'Cara Daftar CIDB Grade G1 - G7',
    excerpt: 'Langkah-langkah lengkap untuk mendaftar dan memperbarui grade CIDB Anda dengan mudah.',
    category: 'CIDB',
    date: '2024-01-10',
  },
  {
    title: 'Tips Investasi Hartanah di Masa Ekonomi Sulit',
    excerpt: 'Strategi cerdas untuk berinvestasi dalam properti ketika pasar sedang tidak stabil.',
    category: 'Hartanah',
    date: '2024-01-05',
  },
]

export default function Blog() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-500 to-primary-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Blog & Artikel</h1>
          <p className="text-xl text-primary-100">Tips dan informasi terbaru untuk kesuksesan bisnis Anda</p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog, index) => (
              <BlogCard key={index} {...blog} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
