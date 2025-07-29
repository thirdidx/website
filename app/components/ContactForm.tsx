'use client';

import { cn } from '@/lib/utils';
import { useState } from 'react';

interface ContactFormProps {
  variant?: 'default' | 'dialog';
}

export default function ContactForm({ variant = 'default' }: ContactFormProps) {
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

  const isDialog = variant === 'dialog';
  const inputClasses = isDialog
    ? 'w-full bg-transparent border-0 border-b border-blue-300/30 px-0 py-6 text-2xl text-white placeholder:text-blue-200/60 focus:border-white focus:outline-none focus:ring-0 transition-colors'
    : 'w-full bg-transparent border-0 border-b border-border px-0 py-4 text-xl text-foreground placeholder:text-muted-foreground focus:border-foreground focus:outline-none focus:ring-0 transition-colors';

  const labelClasses = isDialog
    ? 'block text-base font-mono text-blue-200'
    : 'block text-sm font-mono text-muted-foreground';

  const buttonClasses = isDialog
    ? 'w-full bg-white text-[#0066ff] py-6 px-12 rounded-md text-xl font-medium hover:bg-blue-50 transition-colors disabled:opacity-50'
    : 'w-full bg-foreground text-background py-4 px-8 rounded-md text-lg font-medium hover:bg-foreground/90 transition-colors disabled:opacity-50';

  return (
    <form
      onSubmit={handleSubmit}
      className={cn('col-span-12 md:col-span-10 md:col-start-2', { 'space-y-12': isDialog })}
    >
      <div className={`grid md:grid-cols-2 ${isDialog ? 'gap-12' : 'gap-12'}`}>
        <div className="space-y-2">
          <label htmlFor="name" className={labelClasses}>
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className={inputClasses}
            placeholder="Your name"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className={labelClasses}>
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className={inputClasses}
            placeholder="your@email.com"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="company" className={labelClasses}>
          Company (Optional)
        </label>
        <input
          type="text"
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          className={inputClasses}
          placeholder="Your company"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className={labelClasses}>
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={6}
          className={`${inputClasses} resize-none`}
          placeholder="Tell us about your project or question..."
        />
      </div>

      <div className={isDialog ? 'pt-8' : 'pt-8'}>
        <button type="submit" className={buttonClasses} disabled={isSubmitting}>
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
        {submitStatus === 'success' && (
          <p className="mt-2 text-sm text-green-600">Message sent successfully!</p>
        )}
        {submitStatus === 'error' && (
          <p className="mt-2 text-sm text-red-600">Failed to send message. Please try again.</p>
        )}
      </div>
    </form>
  );
}
