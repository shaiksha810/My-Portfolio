import React, { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    alert('Message sent! (In real app, connect to backend or service)');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="bg-[#E3E3FF] text-white py-16 px-4" id="contact">
      <div className="max-w-lg mx-auto text-center mt-8">
        <h2 className="text-4xl font-bold text-[#000000] mb-8">Contact Me</h2>

        <form onSubmit={handleSubmit} className="flex flex-col space-y-6">
          <input 
            type="text" 
            name="name" 
            placeholder="Your Name" 
            value={formData.name} 
            onChange={handleChange}
            required
            className="p-3 rounded bg-[#ffffff] border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />

          <input 
            type="email" 
            name="email" 
            placeholder="Your Email" 
            value={formData.email} 
            onChange={handleChange}
            required
            className="p-3 rounded bg-[#ffffff] border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />

          <textarea 
            name="message" 
            placeholder="Your Message" 
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
            className="p-3 rounded bg-[#ffffff] border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          ></textarea>

          <button 
            type="submit" 
            className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-md font-medium hover:bg-yellow-300 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
