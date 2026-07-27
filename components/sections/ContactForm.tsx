'use client'

import { useState } from 'react'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Handle form submission - dapat dikirim ke email atau database
    console.log('Form Data:', formData)
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    })
    alert('Terima kasih! Pesan Anda telah dikirim. Kami akan segera menghubungi Anda.')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-semibold text-primary-500 mb-2">Nama Lengkap</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-200"
          placeholder="Masukkan nama Anda"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-primary-500 mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-200"
            placeholder="Masukkan email Anda"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-primary-500 mb-2">Nomor Telepon</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-200"
            placeholder="Masukkan nomor telepon Anda"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-primary-500 mb-2">Subjek</label>
        <select
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-200 bg-white"
        >
          <option value="">Pilih Subjek</option>
          <option value="Urusan Pusaka">Urusan Pusaka</option>
          <option value="Pendaftaran CIDB">Pendaftaran CIDB</option>
          <option value="Carian Hartanah">Carian Hartanah</option>
          <option value="Konsultasi Kontraktor">Konsultasi Kontraktor</option>
          <option value="Lainnya">Lainnya</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-semibold text-primary-500 mb-2">Pesan</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={6}
          className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-200 resize-none"
          placeholder="Tuliskan pesan Anda di sini..."
        ></textarea>
      </div>

      <button
        type="submit"
        className="w-full bg-primary-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-primary-600 transition-colors duration-300"
      >
        Kirim Pesan
      </button>
    </form>
  )
}

export default ContactForm
