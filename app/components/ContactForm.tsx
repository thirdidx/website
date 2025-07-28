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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
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
    ? 'w-full bg-white text-[#0066ff] py-6 px-12 rounded-md text-xl font-medium hover:bg-blue-50 transition-colors'
    : 'w-full bg-foreground text-background py-4 px-8 rounded-md text-lg font-medium hover:bg-foreground/90 transition-colors';

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
        <button type="submit" className={buttonClasses}>
          Send Message
        </button>
      </div>
    </form>
  );
}
