interface BlogCardProps {
  title: string
  excerpt: string
  category: string
  date: string
}

const BlogCard = ({ title, excerpt, category, date }: BlogCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden hover:-translate-y-1">
      <div className="bg-gradient-to-r from-primary-400 to-primary-500 h-40 flex items-center justify-center">
        <span className="text-6xl">📝</span>
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <span className="bg-accent-100 text-accent-700 px-3 py-1 rounded-full text-sm font-semibold">{category}</span>
          <span className="text-xs text-neutral-500">{new Date(date).toLocaleDateString('id-ID')}</span>
        </div>
        <h3 className="text-xl font-bold mb-3 text-primary-500 line-clamp-2">{title}</h3>
        <p className="text-neutral-700 text-sm line-clamp-3 mb-4">{excerpt}</p>
        <a href="#" className="text-accent-500 font-semibold hover:text-accent-600 transition-colors">
          Baca Selengkapnya →
        </a>
      </div>
    </div>
  )
}

export default BlogCard
