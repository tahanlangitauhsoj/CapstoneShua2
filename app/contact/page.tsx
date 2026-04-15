"use client";
import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message sent! We'll get back to you soon.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black text-zinc-900 dark:text-zinc-100">
      <main className="max-w-lg mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold mb-2">📬 Contact Us</h1>
        <p className="text-zinc-500 dark:text-zinc-400 mb-8">Have a question or feedback? We'd love to hear from you.</p>

        <form onSubmit={handleSubmit} className="space-y-4 bg-white dark:bg-zinc-900 p-8 rounded-2xl shadow">
          <div>
            <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">Name</label>
            <input
              type="text"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full px-4 py-2 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
              placeholder="Juan dela Cruz"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">Email</label>
            <input
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full px-4 py-2 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">Message</label>
            <textarea
              required
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full px-4 py-2 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white resize-none"
              placeholder="Write your message here..."
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 rounded-full bg-black text-white dark:bg-white dark:text-black font-medium hover:opacity-80 transition"
          >
            Send Message
          </button>
        </form>

        <div className="mt-8 text-sm text-zinc-500 dark:text-zinc-400 space-y-1">
          <p>📍 123 Adobo Street, Manila, Philippines</p>
          <p>📞 +63 912 345 6789</p>
          <p>✉️ hello@adobohan.com</p>
        </div>
      </main>
    </div>
  );
}
