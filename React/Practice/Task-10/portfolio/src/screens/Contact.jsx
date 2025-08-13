import React, { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Enter a valid email";
    if (!form.message.trim()) e.message = "Message is required";
    else if (form.message.trim().length < 10)
      e.message = "Message should be at least 10 characters";
    return e;
  };

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors((prev) => ({ ...prev, [e.target.name]: undefined }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validation = validate();
    if (Object.keys(validation).length) {
      setErrors(validation);
      return;
    }

    // Simulate send (replace with real API / email handler)
    setTimeout(() => {
      setSent(true);
      setForm({ name: "", email: "", message: "" });
      setErrors({});
      setTimeout(() => setSent(false), 4000); // hide success after 4s
    }, 600);
  };

  return (
    <section className="min-h-[85vh] bg-white text-black flex items-center justify-center px-6 py-20">
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left: Contact Info */}
        <div className="flex flex-col justify-center gap-6">
          <h2 className="text-4xl font-bold">Get in touch</h2>
          <p className="text-gray-700">
            Got a project, question, or just want to say hi? Send a message — I’ll
            reply within a couple of days.
          </p>

          <div className="space-y-4">
            <div>
              <h4 className="text-sm text-gray-500">Email</h4>
              <a
                href="mailto:diprajrajput54@gmail.com"
                className="block text-lg font-medium hover:underline"
              >
                dipraj@gmail.com
              </a>
            </div>

            <div>
              <h4 className="text-sm text-gray-500">Phone</h4>
              <a href="tel:+911234567890" className="block text-lg font-medium hover:underline">
                +91 97867 58765
              </a>
            </div>

            <div>
              <h4 className="text-sm text-gray-500">Location</h4>
              <p className="text-lg">Bhopal, India</p>
            </div>
          </div>

          <div className="flex items-center gap-4 mt-4">
            {/* Simple social placeholders */}
            <a href="https://x.com/dipraj52" aria-label="Twitter" className="text-gray-600 hover:text-black">Twitter</a>
            <a href="https://www.linkedin.com/in/diprajgirase/" aria-label="LinkedIn" className="text-gray-600 hover:text-black">LinkedIn</a>
            <a href="https://github.com/diprajgirase" aria-label="GitHub" className="text-gray-600 hover:text-black">GitHub</a>
          </div>
        </div>

        {/* Right: Form */}
        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 shadow-sm">
          <form onSubmit={handleSubmit} noValidate>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Name</label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.name ? "border-red-400" : "border-gray-200"
                } focus:outline-none focus:ring-2 focus:ring-black/10`}
                placeholder="Your name"
              />
              {errors.name && <p className="text-sm text-red-500 mt-1">{errors.name}</p>}
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.email ? "border-red-400" : "border-gray-200"
                } focus:outline-none focus:ring-2 focus:ring-black/10`}
                placeholder="you@domain.com"
              />
              {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email}</p>}
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={5}
                className={`w-full px-4 py-3 rounded-lg border resize-y ${
                  errors.message ? "border-red-400" : "border-gray-200"
                } focus:outline-none focus:ring-2 focus:ring-black/10`}
                placeholder="Tell me about your project..."
              />
              {errors.message && <p className="text-sm text-red-500 mt-1">{errors.message}</p>}
            </div>

            <div className="flex items-center gap-3">
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-black text-white font-medium hover:opacity-90 transition"
              >
                Send Message
              </button>

              {sent && (
                <span className="text-green-600 font-medium">Message sent ✅</span>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
