'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: 'contact',
          ...formData,
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', company: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-6 md:p-8">
        <Link
          href="/"
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="h-5 w-5" />
          <span className="text-sm font-medium">Back</span>
        </Link>
        <Link
          href="/meeting"
          className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
        >
          Schedule a call instead →
        </Link>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 md:px-8 pt-32 pb-16 max-w-4xl">
        <div className="mb-12">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
            Let's talk
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            Tell us about your project and we'll get back to you within 24 hours.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm font-medium text-muted-foreground">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-0 border-b-2 border-muted-foreground/20 px-0 py-4 text-2xl md:text-3xl text-foreground placeholder:text-muted-foreground/40 focus:border-foreground focus:outline-none transition-colors"
                placeholder="Your name"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-muted-foreground">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-0 border-b-2 border-muted-foreground/20 px-0 py-4 text-2xl md:text-3xl text-foreground placeholder:text-muted-foreground/40 focus:border-foreground focus:outline-none transition-colors"
                placeholder="your@email.com"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="company" className="block text-sm font-medium text-muted-foreground">
              Company (optional)
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full bg-transparent border-0 border-b-2 border-muted-foreground/20 px-0 py-4 text-2xl md:text-3xl text-foreground placeholder:text-muted-foreground/40 focus:border-foreground focus:outline-none transition-colors"
              placeholder="Your company"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="block text-sm font-medium text-muted-foreground">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="w-full bg-transparent border-0 border-b-2 border-muted-foreground/20 px-0 py-4 text-2xl md:text-3xl text-foreground placeholder:text-muted-foreground/40 focus:border-foreground focus:outline-none transition-colors resize-none"
              placeholder="Tell us about your project..."
            />
          </div>

          <div className="pt-8">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full md:w-auto bg-foreground text-background py-4 px-12 text-lg font-medium hover:bg-foreground/90 transition-colors disabled:opacity-50"
            >
              {isSubmitting ? 'Sending...' : 'Send message'}
            </button>
          </div>

          {submitStatus === 'success' && (
            <div className="p-4 bg-green-500/10 border border-green-500/20 text-green-600">
              <p className="text-lg">Thanks! We'll be in touch soon.</p>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="p-4 bg-red-500/10 border border-red-500/20 text-red-600">
              <p className="text-lg">Something went wrong. Please try again or email us directly.</p>
            </div>
          )}
        </form>
      </main>
    </div>
  );
}