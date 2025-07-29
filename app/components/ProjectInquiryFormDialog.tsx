'use client';

import { useState } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export default function ProjectInquiryFormDialog() {
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const inputClasses = "w-full bg-transparent border-0 border-b border-blue-300/30 px-0 py-6 text-2xl text-white placeholder:text-blue-200/60 focus:border-white focus:outline-none focus:ring-0 transition-colors";
  const labelClasses = "block text-base font-mono text-blue-200";
  const buttonClasses = "w-full bg-white text-blue-600 py-6 px-12 rounded-md text-xl font-medium hover:bg-blue-50 transition-colors";

  return (
    <form onSubmit={handleSubmit} className="col-span-12 md:col-span-10 md:col-start-2 space-y-12">
      {/* Basic Info */}
      <div className="grid gap-12 md:grid-cols-2">
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
          Company
        </label>
        <input
          type="text"
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          className={inputClasses}
          placeholder="Your company or startup"
        />
      </div>

      {/* Project Details */}
      <div className="grid gap-12 md:grid-cols-2">
        <div className="space-y-2">
          <label className={labelClasses}>
            Project Type
          </label>
          <Select
            value={formData.projectType}
            onValueChange={(value) => handleSelectChange('projectType', value)}
            required
          >
            <SelectTrigger className="w-full bg-transparent border-0 border-b border-blue-300/30 px-0 py-6 text-2xl text-white focus:border-white focus:ring-0 rounded-none">
              <SelectValue placeholder="Select project type" className="text-blue-200/60" />
            </SelectTrigger>
            <SelectContent className="bg-blue-600 border-blue-400 text-white">
              <SelectItem value="web-app" className="text-lg focus:bg-blue-700 focus:text-white">Web Application</SelectItem>
              <SelectItem value="saas" className="text-lg focus:bg-blue-700 focus:text-white">SaaS Platform</SelectItem>
              <SelectItem value="ecommerce" className="text-lg focus:bg-blue-700 focus:text-white">E-commerce Site</SelectItem>
              <SelectItem value="marketing" className="text-lg focus:bg-blue-700 focus:text-white">Marketing Website</SelectItem>
              <SelectItem value="mobile" className="text-lg focus:bg-blue-700 focus:text-white">Mobile App</SelectItem>
              <SelectItem value="blockchain" className="text-lg focus:bg-blue-700 focus:text-white">Web3/Blockchain</SelectItem>
              <SelectItem value="other" className="text-lg focus:bg-blue-700 focus:text-white">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <label className={labelClasses}>
            Budget Range
          </label>
          <Select
            value={formData.budget}
            onValueChange={(value) => handleSelectChange('budget', value)}
            required
          >
            <SelectTrigger className="w-full bg-transparent border-0 border-b border-blue-300/30 px-0 py-6 text-2xl text-white focus:border-white focus:ring-0 rounded-none">
              <SelectValue placeholder="Select budget range" className="text-blue-200/60" />
            </SelectTrigger>
            <SelectContent className="bg-blue-600 border-blue-400 text-white">
              <SelectItem value="under-10k" className="text-lg focus:bg-blue-700 focus:text-white">Under $10,000</SelectItem>
              <SelectItem value="10k-25k" className="text-lg focus:bg-blue-700 focus:text-white">$10,000 - $25,000</SelectItem>
              <SelectItem value="25k-50k" className="text-lg focus:bg-blue-700 focus:text-white">$25,000 - $50,000</SelectItem>
              <SelectItem value="50k-100k" className="text-lg focus:bg-blue-700 focus:text-white">$50,000 - $100,000</SelectItem>
              <SelectItem value="100k-plus" className="text-lg focus:bg-blue-700 focus:text-white">$100,000+</SelectItem>
              <SelectItem value="equity" className="text-lg focus:bg-blue-700 focus:text-white">Equity Partnership</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="timeline" className={labelClasses}>
          Desired Timeline
        </label>
        <input
          type="text"
          id="timeline"
          name="timeline"
          value={formData.timeline}
          onChange={handleChange}
          className={inputClasses}
          placeholder="e.g., 3 months, ASAP, flexible"
        />
      </div>

      {/* Project Description */}
      <div className="space-y-2">
        <label htmlFor="description" className={labelClasses}>
          Project Description
        </label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
          rows={4}
          className={`${inputClasses} resize-none`}
          placeholder="Describe your project idea, features, and functionality..."
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="goals" className={labelClasses}>
          Business Goals
        </label>
        <textarea
          id="goals"
          name="goals"
          value={formData.goals}
          onChange={handleChange}
          rows={3}
          className={`${inputClasses} resize-none`}
          placeholder="What are you trying to achieve? Revenue goals, user acquisition, etc."
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="audience" className={labelClasses}>
          Target Audience
        </label>
        <input
          type="text"
          id="audience"
          name="audience"
          value={formData.audience}
          onChange={handleChange}
          className={inputClasses}
          placeholder="Who will use this product?"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="techRequirements" className={labelClasses}>
          Technical Requirements (Optional)
        </label>
        <textarea
          id="techRequirements"
          name="techRequirements"
          value={formData.techRequirements}
          onChange={handleChange}
          rows={3}
          className={`${inputClasses} resize-none`}
          placeholder="Any specific tech stack, integrations, or requirements..."
        />
      </div>

      <div className="pt-8">
        <button
          type="submit"
          className={buttonClasses}
        >
          Submit Project Inquiry
        </button>
      </div>
    </form>
  );
}