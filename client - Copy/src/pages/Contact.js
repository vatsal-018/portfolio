import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const subject = encodeURIComponent(`Portfolio contact from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );

    window.location.href = `mailto:vatsalkarani04@gmail.com?subject=${subject}&body=${body}`;

    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
    setLoading(false);
  };

  const contactInfo = [
    {
      icon: FiMail,
      label: 'Email',
      value: 'vatsalkarani04@gmail.com',
      href: 'mailto:vatsalkarani04@gmail.com',
    },
    {
      icon: FiPhone,
      label: 'Phone',
      value: '+91 7304036606',
      href: 'tel:+917304036606',
    },
    {
      icon: FiMapPin,
      label: 'Location',
      value: 'Mumbai, Maharashtra, India',
      href: '#',
    },
  ];

  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Have a project in mind? Let's work together and create something amazing!
          </p>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {contactInfo.map((info, idx) => (
              <motion.a
                key={idx}
                href={info.href}
                whileHover={{ x: 10 }}
                className="glass glass-hover rounded-lg p-6 flex items-start gap-4 group"
              >
                <div className="p-3 rounded-lg bg-blue-500 bg-opacity-20 group-hover:bg-opacity-40 transition">
                  <info.icon className="text-2xl text-blue-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">{info.label}</h3>
                  <p className="text-slate-400">{info.value}</p>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            onSubmit={handleSubmit}
            className="lg:col-span-2 space-y-6"
          >
            <div className="glass rounded-lg p-8">
              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-green-500 bg-opacity-20 border border-green-500 border-opacity-50 rounded-lg text-green-300"
                >
                  ✓ Message sent successfully! I'll get back to you soon.
                </motion.div>
              )}

              {/* Name Field */}
              <div className="mb-6">
                <label className="block text-slate-300 font-semibold mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 outline-none transition"
                  placeholder="Your name"
                />
              </div>

              {/* Email Field */}
              <div className="mb-6">
                <label className="block text-slate-300 font-semibold mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 outline-none transition"
                  placeholder="your@email.com"
                />
              </div>

              {/* Message Field */}
              <div className="mb-6">
                <label className="block text-slate-300 font-semibold mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 outline-none transition resize-none"
                  placeholder="Your message here..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full btn-primary inline-flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {loading ? 'Sending...' : <>
                  Send Message
                  <FiSend />
                </>}
              </button>
            </div>
          </motion.form>
        </div>
      </section>

      {/* Social Links */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold mb-8">Follow Me On</h2>
          <div className="flex justify-center gap-6">
            {[
              { label: 'GitHub', href: 'https://github.com/vatsalk18' },
              { label: 'LinkedIn', href: 'https://www.linkedin.com/in/vatsal-karani/' },
              { label: 'Email', href: 'mailto:vatsalkarani04@gmail.com' },
            ].map((social, idx) => (
              <motion.a
                key={idx}
                href={social.href}
                target={social.href.startsWith('http') ? '_blank' : undefined}
                rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                whileHover={{ y: -5, scale: 1.1 }}
                className="p-4 rounded-lg glass glass-hover"
              >
                <span className="font-semibold text-blue-400">{social.label}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Contact;
