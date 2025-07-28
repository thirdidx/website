'use client';

import { useState } from 'react';

interface ProjectInquiryFormProps {
  variant?: 'default' | 'dialog';
}

export default function ProjectInquiryForm({ variant = 'default' }: ProjectInquiryFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    budget: '',
    timeline: '',
    description: '',
    goals: '',
    techRequirements: '',
    audience: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Project inquiry submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const isDialog = variant === 'dialog';
  const inputClasses = isDialog
    ? "w-full bg-transparent border-0 border-b border-blue-300/30 px-0 py-4 text-xl text-white placeholder:text-blue-200/60 focus:border-white focus:outline-none focus:ring-0 transition-colors"
    : "w-full bg-transparent border-0 border-b border-border px-0 py-4 text-xl text-foreground placeholder:text-muted-foreground focus:border-foreground focus:outline-none focus:ring-0 transition-colors";
  
  const selectClasses = isDialog
    ? "w-full bg-blue-600 border-0 border-b border-blue-300/30 px-0 py-4 text-xl text-white focus:border-white focus:outline-none focus:ring-0 transition-colors"
    : "w-full bg-background border-0 border-b border-border px-0 py-4 text-xl text-foreground focus:border-foreground focus:outline-none focus:ring-0 transition-colors";
  
  const labelClasses = isDialog
    ? "block text-sm font-mono text-blue-200"
    : "block text-sm font-mono text-muted-foreground";
    
  const buttonClasses = isDialog
    ? "w-full bg-white text-blue-600 py-4 px-8 rounded-md text-lg font-medium hover:bg-blue-50 transition-colors"
    : "w-full bg-foreground text-background py-4 px-8 rounded-md text-lg font-medium hover:bg-foreground/90 transition-colors";

  return (
    <form onSubmit={handleSubmit} className="col-span-12 md:col-span-10 md:col-start-2 space-y-12">
      {/* Basic Info */}
      <div className="grid gap-12 md:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="name" className="block text-sm font-mono text-muted-foreground">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full bg-transparent border-0 border-b border-border px-0 py-4 text-xl text-foreground placeholder:text-muted-foreground focus:border-foreground focus:outline-none focus:ring-0 transition-colors"
            placeholder="Your name"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm font-mono text-muted-foreground">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full bg-transparent border-0 border-b border-border px-0 py-4 text-xl text-foreground placeholder:text-muted-foreground focus:border-foreground focus:outline-none focus:ring-0 transition-colors"
            placeholder="your@email.com"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="company" className="block text-sm font-mono text-muted-foreground">
          Company
        </label>
        <input
          type="text"
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          className="w-full bg-transparent border-0 border-b border-border px-0 py-4 text-xl text-foreground placeholder:text-muted-foreground focus:border-foreground focus:outline-none focus:ring-0 transition-colors"
          placeholder="Your company or startup"
        />
      </div>

      {/* Project Details */}
      <div className="grid gap-12 md:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="projectType" className="block text-sm font-mono text-muted-foreground">
            Project Type
          </label>
          <select
            id="projectType"
            name="projectType"
            value={formData.projectType}
            onChange={handleChange}
            required
            className="w-full bg-background border-0 border-b border-border px-0 py-4 text-xl text-foreground focus:border-foreground focus:outline-none focus:ring-0 transition-colors"
          >
            <option value="">Select project type</option>
            <option value="web-app">Web Application</option>
            <option value="saas">SaaS Platform</option>
            <option value="ecommerce">E-commerce Site</option>
            <option value="marketing">Marketing Website</option>
            <option value="mobile">Mobile App</option>
            <option value="blockchain">Web3/Blockchain</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="space-y-2">
          <label htmlFor="budget" className="block text-sm font-mono text-muted-foreground">
            Budget Range
          </label>
          <select
            id="budget"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            required
            className="w-full bg-background border-0 border-b border-border px-0 py-4 text-xl text-foreground focus:border-foreground focus:outline-none focus:ring-0 transition-colors"
          >
            <option value="">Select budget range</option>
            <option value="under-10k">Under $10,000</option>
            <option value="10k-25k">$10,000 - $25,000</option>
            <option value="25k-50k">$25,000 - $50,000</option>
            <option value="50k-100k">$50,000 - $100,000</option>
            <option value="100k-plus">$100,000+</option>
            <option value="equity">Equity Partnership</option>
          </select>
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="timeline" className="block text-sm font-mono text-muted-foreground">
          Desired Timeline
        </label>
        <input
          type="text"
          id="timeline"
          name="timeline"
          value={formData.timeline}
          onChange={handleChange}
          className="w-full bg-transparent border-0 border-b border-border px-0 py-4 text-xl text-foreground placeholder:text-muted-foreground focus:border-foreground focus:outline-none focus:ring-0 transition-colors"
          placeholder="e.g., 3 months, ASAP, flexible"
        />
      </div>

      {/* Project Description */}
      <div className="space-y-2">
        <label htmlFor="description" className="block text-sm font-mono text-muted-foreground">
          Project Description
        </label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
          rows={4}
          className="w-full bg-transparent border-0 border-b border-border px-0 py-4 text-xl text-foreground placeholder:text-muted-foreground focus:border-foreground focus:outline-none focus:ring-0 resize-none transition-colors"
          placeholder="Describe your project idea, features, and functionality..."
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="goals" className="block text-sm font-mono text-muted-foreground">
          Business Goals
        </label>
        <textarea
          id="goals"
          name="goals"
          value={formData.goals}
          onChange={handleChange}
          rows={3}
          className="w-full bg-transparent border-0 border-b border-border px-0 py-4 text-xl text-foreground placeholder:text-muted-foreground focus:border-foreground focus:outline-none focus:ring-0 resize-none transition-colors"
          placeholder="What are you trying to achieve? Revenue goals, user acquisition, etc."
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="audience" className="block text-sm font-mono text-muted-foreground">
          Target Audience
        </label>
        <input
          type="text"
          id="audience"
          name="audience"
          value={formData.audience}
          onChange={handleChange}
          className="w-full bg-transparent border-0 border-b border-border px-0 py-4 text-xl text-foreground placeholder:text-muted-foreground focus:border-foreground focus:outline-none focus:ring-0 transition-colors"
          placeholder="Who will use this product?"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="techRequirements" className="block text-sm font-mono text-muted-foreground">
          Technical Requirements (Optional)
        </label>
        <textarea
          id="techRequirements"
          name="techRequirements"
          value={formData.techRequirements}
          onChange={handleChange}
          rows={3}
          className="w-full bg-transparent border-0 border-b border-border px-0 py-4 text-xl text-foreground placeholder:text-muted-foreground focus:border-foreground focus:outline-none focus:ring-0 resize-none transition-colors"
          placeholder="Any specific tech stack, integrations, or requirements..."
        />
      </div>

      <div className="pt-8">
        <button
          type="submit"
          className="w-full bg-foreground text-background py-4 px-8 rounded-md text-lg font-medium hover:bg-foreground/90 transition-colors"
        >
          Submit Project Inquiry
        </button>
      </div>
    </form>
  );
}