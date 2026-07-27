interface ServiceCardProps {
  title: string
  description: string
  icon: string
}

const ServiceCard = ({ title, description, icon }: ServiceCardProps) => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-primary-100">
      <div className="text-5xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-3 text-primary-500">{title}</h3>
      <p className="text-neutral-700 leading-relaxed">{description}</p>
    </div>
  )
}

export default ServiceCard
