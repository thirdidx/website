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
    <div className="bg-background text-foreground min-h-screen">
      {/* Header */}
      <header className="fixed top-0 right-0 left-0 z-50 flex items-center justify-between p-6 md:p-8">
        <Link
          href="/"
          className="text-muted-foreground hover:text-foreground flex items-center gap-2 transition-colors"
        >
          <ArrowLeft className="h-5 w-5" />
          <span className="text-sm font-medium">Back</span>
        </Link>
        <Link
          href="/meeting"
          className="text-muted-foreground hover:text-foreground text-sm font-medium transition-colors"
        >
          Schedule a call instead →
        </Link>
      </header>

      {/* Main Content */}
      <main className="container mx-auto max-w-4xl px-6 pt-32 pb-16 md:px-8">
        <div className="mb-12">
          <h1 className="mb-4 text-4xl md:text-6xl">Let's talk</h1>
          <p className="text-muted-foreground text-lg md:text-xl">
            Tell us about your project and we'll get back to you within 24 hours.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-2">
              <label htmlFor="name" className="text-muted-foreground block text-sm font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="border-muted-foreground/20 text-foreground placeholder:text-muted-foreground/40 focus:border-foreground w-full border-0 border-b-2 bg-transparent px-0 py-4 text-2xl transition-colors focus:outline-none md:text-3xl"
                placeholder="Your name"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-muted-foreground block text-sm font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="border-muted-foreground/20 text-foreground placeholder:text-muted-foreground/40 focus:border-foreground w-full border-0 border-b-2 bg-transparent px-0 py-4 text-2xl transition-colors focus:outline-none md:text-3xl"
                placeholder="your@email.com"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="company" className="text-muted-foreground block text-sm font-medium">
              Company (optional)
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="border-muted-foreground/20 text-foreground placeholder:text-muted-foreground/40 focus:border-foreground w-full border-0 border-b-2 bg-transparent px-0 py-4 text-2xl transition-colors focus:outline-none md:text-3xl"
              placeholder="Your company"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-muted-foreground block text-sm font-medium">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="border-muted-foreground/20 text-foreground placeholder:text-muted-foreground/40 focus:border-foreground w-full border-0 border-b-2 bg-transparent px-0 py-4 text-2xl transition-colors focus:outline-none md:text-3xl"
              placeholder="Tell us about your project..."
            />
          </div>

          <div className="pt-8">
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-foreground text-background hover:bg-foreground/90 w-full px-12 py-4 text-lg font-medium transition-colors disabled:opacity-50 md:w-auto"
            >
              {isSubmitting ? 'Sending...' : 'Send message'}
            </button>
          </div>

          {submitStatus === 'success' && (
            <div className="border border-green-500/20 bg-green-500/10 p-4 text-green-600">
              <p className="text-lg">Thanks! We'll be in touch soon.</p>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="border border-red-500/20 bg-red-500/10 p-4 text-red-600">
              <p className="text-lg">
                Something went wrong. Please try again or email us directly.
              </p>
            </div>
          )}
        </form>
      </main>
    </div>
  );
}
