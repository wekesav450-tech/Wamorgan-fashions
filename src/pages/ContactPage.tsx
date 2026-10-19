import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Clock,
  Send,
  AlertTriangle,
  CheckCircle2,
  ExternalLink,
  Copy,
  Info,
} from 'lucide-react';
import { BRANCHES_DATA, BRAND_INFO } from '../data/wamorganData';

interface FormState {
  fullName: string;
  phone: string;
  email: string;
  branch: string;
  inquiryType: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  phone?: string;
  email?: string;
  branch?: string;
  inquiryType?: string;
  message?: string;
}

export const ContactPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const prefilledProduct = searchParams.get('product');
  const prefilledSku = searchParams.get('sku');

  const [formData, setFormData] = useState<FormState>({
    fullName: '',
    phone: '',
    email: '',
    branch: 'nakuru',
    inquiryType: prefilledProduct ? 'Product Availability' : 'Wholesale Partnership',
    message: prefilledProduct
      ? `Hello, I am enquiring about the availability and bulk wholesale pricing for ${prefilledProduct} (SKU: ${prefilledSku || 'N/A'}).`
      : '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionModalOpen, setSubmissionModalOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (prefilledProduct) {
      setFormData((prev) => ({
        ...prev,
        inquiryType: 'Product Availability',
        message: `Hello, I am enquiring about the availability and bulk wholesale pricing for ${prefilledProduct} (SKU: ${prefilledSku || 'N/A'}).`,
      }));
    }
  }, [prefilledProduct, prefilledSku]);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name';
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Full name must be at least 2 characters';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Please provide a contact phone number';
    } else if (formData.phone.replace(/[\s+-]/g, '').length < 9) {
      newErrors.phone = 'Please enter a valid phone number (e.g. 0712 345 678)';
    }

    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please provide your message or product enquiry';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate brief client-side validation processing
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmissionModalOpen(true);
    }, 400);
  };

  const selectedBranchData = BRANCHES_DATA.find((b) => b.id === formData.branch) || BRANCHES_DATA[0];

  const formattedEnquiryText = `*Wamorgan Wholesalers Enquiry*\n` +
    `*Customer:* ${formData.fullName}\n` +
    `*Phone:* ${formData.phone}\n` +
    `*Email:* ${formData.email || 'N/A'}\n` +
    `*Target Branch:* ${selectedBranchData.name} (${selectedBranchData.town})\n` +
    `*Topic:* ${formData.inquiryType}\n` +
    `*Message:* ${formData.message}`;

  const whatsappDirectUrl = `https://wa.me/${selectedBranchData.whatsapp.replace('+', '')}?text=${encodeURIComponent(
    formattedEnquiryText
  )}`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(formattedEnquiryText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      {/* Page Title */}
      <div className="border-b border-[#e6e4dc] pb-8">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#ec268f] mb-1">
          <span>Customer & Wholesale Communications</span>
          <span aria-hidden="true">·</span>
          <span>Reach Our Team</span>
        </div>
        <h1 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#070c52]">
          Contact Wamorgan Wholesalers
        </h1>
        <p className="mt-2 text-sm text-slate-600 max-w-2xl leading-relaxed">
          Connect directly with our branch managers in <strong>Nakuru, Kakamega, Eldoret, or Kitale</strong> for wholesale pricing, retail availability, or bulk logistics.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: General Enquiry Form */}
        <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-[#e6e4dc] shadow-xs space-y-6">
          <div>
            <h2 className="font-display text-xl font-bold text-[#070c52]">
              Send a General Enquiry
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              Complete the form below to enquire about products, wholesale minimums, or branch opening hours.
            </p>
          </div>

          <form onSubmit={handleSubmit} noValidate className="space-y-4">
            {/* Full Name */}
            <div>
              <label htmlFor="fullName" className="block text-xs font-semibold text-slate-700 mb-1">
                Full Name <span className="text-[#ec268f]">*</span>
              </label>
              <input
                id="fullName"
                type="text"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                placeholder="e.g. Grace Wanjiku or Peter Ochieng"
                className={`w-full px-3.5 py-2.5 rounded-xl border text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 transition-all ${
                  errors.fullName
                    ? 'border-red-400 focus:ring-red-200 bg-red-50/20'
                    : 'border-[#e6e4dc] focus:ring-[#0c1387] focus:border-transparent'
                }`}
                aria-invalid={!!errors.fullName}
                aria-describedby={errors.fullName ? 'fullName-error' : undefined}
              />
              {errors.fullName && (
                <p id="fullName-error" className="mt-1 text-xs text-red-600">
                  {errors.fullName}
                </p>
              )}
            </div>

            {/* Phone & Email Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="phone" className="block text-xs font-semibold text-slate-700 mb-1">
                  Phone / WhatsApp Number <span className="text-[#ec268f]">*</span>
                </label>
                <input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="e.g. 0712 345 678"
                  className={`w-full px-3.5 py-2.5 rounded-xl border text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 transition-all ${
                    errors.phone
                      ? 'border-red-400 focus:ring-red-200 bg-red-50/20'
                      : 'border-[#e6e4dc] focus:ring-[#0c1387] focus:border-transparent'
                  }`}
                  aria-invalid={!!errors.phone}
                  aria-describedby={errors.phone ? 'phone-error' : undefined}
                />
                {errors.phone && (
                  <p id="phone-error" className="mt-1 text-xs text-red-600">
                    {errors.phone}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-semibold text-slate-700 mb-1">
                  Email Address <span className="text-slate-400 font-normal">(Optional)</span>
                </label>
                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="e.g. trader@example.co.ke"
                  className={`w-full px-3.5 py-2.5 rounded-xl border text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 transition-all ${
                    errors.email
                      ? 'border-red-400 focus:ring-red-200 bg-red-50/20'
                      : 'border-[#e6e4dc] focus:ring-[#0c1387] focus:border-transparent'
                  }`}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                />
                {errors.email && (
                  <p id="email-error" className="mt-1 text-xs text-red-600">
                    {errors.email}
                  </p>
                )}
              </div>
            </div>

            {/* Branch and Topic Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="branch" className="block text-xs font-semibold text-slate-700 mb-1">
                  Preferred Branch <span className="text-[#ec268f]">*</span>
                </label>
                <select
                  id="branch"
                  value={formData.branch}
                  onChange={(e) => setFormData({ ...formData, branch: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#e6e4dc] text-xs sm:text-sm text-slate-800 bg-white focus:outline-none focus:ring-2 focus:ring-[#0c1387] cursor-pointer"
                >
                  {BRANCHES_DATA.map((b) => (
                    <option key={b.id} value={b.id}>
                      {b.town} ({b.name})
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="inquiryType" className="block text-xs font-semibold text-slate-700 mb-1">
                  Enquiry Topic <span className="text-[#ec268f]">*</span>
                </label>
                <select
                  id="inquiryType"
                  value={formData.inquiryType}
                  onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#e6e4dc] text-xs sm:text-sm text-slate-800 bg-white focus:outline-none focus:ring-2 focus:ring-[#0c1387] cursor-pointer"
                >
                  <option value="Wholesale Partnership">Wholesale Partnership / Bulk Lots</option>
                  <option value="Product Availability">Product Availability & Stock</option>
                  <option value="Retail Visit & Fitting">Retail Visit & In-Store Shopping</option>
                  <option value="Bulk School & Home Linens">Bedding & Home Linens Bulk Order</option>
                  <option value="General Question">General Question</option>
                </select>
              </div>
            </div>

            {/* Message Area */}
            <div>
              <label htmlFor="message" className="block text-xs font-semibold text-slate-700 mb-1">
                Your Message / Product Details <span className="text-[#ec268f]">*</span>
              </label>
              <textarea
                id="message"
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Describe your inquiry, required quantities, garment sizes, or visit schedule..."
                className={`w-full px-3.5 py-2.5 rounded-xl border text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 transition-all ${
                  errors.message
                    ? 'border-red-400 focus:ring-red-200 bg-red-50/20'
                    : 'border-[#e6e4dc] focus:ring-[#0c1387] focus:border-transparent'
                }`}
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? 'message-error' : undefined}
              />
              {errors.message && (
                <p id="message-error" className="mt-1 text-xs text-red-600">
                  {errors.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 px-6 rounded-xl bg-[#0c1387] hover:bg-[#070c52] text-white font-semibold text-xs sm:text-sm shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>Processing...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4 text-[#ec268f]" />
                    <span>Validate & Prepare Enquiry</span>
                  </>
                )}
              </button>
            </div>

            {/* Honest Environment Disclaimer */}
            <p className="text-[11px] text-slate-400 text-center leading-normal">
              Note: This is Phase 1 presentation mode. All submissions are validated and can be directly routed to our branch WhatsApp coordinators without requiring an automated backend email account.
            </p>
          </form>
        </div>

        {/* Right Column: 4 Branch Direct Lines & Operating Hours */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-[#070c52] text-white p-6 sm:p-8 rounded-3xl border border-[#0c1387] shadow-lg space-y-5">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#fce7f3] font-semibold">
                Direct Branch Coordinator Lines
              </span>
              <h3 className="font-display text-2xl font-bold text-white mt-1">
                Branch Contacts
              </h3>
              <p className="text-xs text-slate-300 mt-1">
                Prefer direct communication? Click below to chat or call any of our 4 hubs:
              </p>
            </div>

            <div className="space-y-3">
              {BRANCHES_DATA.map((branch) => (
                <div
                  key={branch.id}
                  className="p-3.5 rounded-xl bg-white/10 border border-white/10 flex items-center justify-between gap-3 text-xs"
                >
                  <div>
                    <h4 className="font-bold text-white text-sm">{branch.town}</h4>
                    <span className="text-[11px] text-slate-300 font-mono">
                      {branch.phone}
                    </span>
                  </div>

                  <a
                    href={`https://wa.me/${branch.whatsapp.replace('+', '')}?text=${encodeURIComponent(
                      `Hello Wamorgan ${branch.name}, I would like to inquire about products and opening hours.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-lg bg-[#ec268f] hover:bg-[#d81b7e] text-white font-semibold text-[11px] flex items-center gap-1 transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              ))}
            </div>

            <div className="pt-2 border-t border-white/15 text-xs text-slate-300 space-y-1">
              <span className="font-semibold text-white block">Standard Business Hours:</span>
              <p>Monday – Saturday: 8:00 AM – 6:30 PM</p>
              <p>Sunday: Selected branches open (10:00 AM – 4:00 PM)</p>
            </div>
          </div>
        </div>
      </div>

      {/* Honest Form Submission & Direct Dispatch Modal */}
      {submissionModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
        >
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 border border-[#e6e4dc] shadow-2xl space-y-6">
            <div className="flex items-center gap-3 text-emerald-700">
              <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <h3 className="font-display font-bold text-lg text-slate-900">
                  Enquiry Form Validated
                </h3>
                <span className="text-xs text-slate-500">
                  Ready for direct dispatch to {selectedBranchData.town}
                </span>
              </div>
            </div>

            {/* Honest Phase 1 Explanation */}
            <div className="p-4 rounded-xl bg-[#faf9f6] border border-[#e6e4dc] text-xs text-slate-700 space-y-2">
              <div className="flex items-center gap-1.5 font-bold text-[#070c52]">
                <Info className="w-4 h-4 text-[#ec268f]" />
                <span>Production Environment Notice</span>
              </div>
              <p className="text-slate-600 leading-relaxed text-[11px]">
                In accordance with Phase 1 website guidelines, automated server-side email dispatch (e.g. SendGrid or SMTP) is not yet configured. To ensure your message is delivered immediately without delay, click below to send it directly to the branch WhatsApp line.
              </p>
            </div>

            {/* Pre-formatted Message Preview */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-semibold text-slate-700">
                <span>Formatted Message:</span>
                <button
                  onClick={copyToClipboard}
                  type="button"
                  className="text-[#0c1387] hover:underline flex items-center gap-1 text-[11px] cursor-pointer"
                >
                  <Copy className="w-3 h-3" />
                  <span>{copied ? 'Copied to Clipboard!' : 'Copy text'}</span>
                </button>
              </div>
              <pre className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-[11px] font-mono text-slate-800 whitespace-pre-wrap leading-relaxed max-h-36 overflow-y-auto">
                {formattedEnquiryText}
              </pre>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
              <a
                href={whatsappDirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setSubmissionModalOpen(false)}
                className="w-full sm:flex-1 py-3 px-4 bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold text-xs rounded-xl flex items-center justify-center gap-2 shadow transition-colors text-center cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Send via WhatsApp</span>
              </a>

              <button
                onClick={() => setSubmissionModalOpen(false)}
                type="button"
                className="w-full sm:w-auto py-3 px-5 border border-slate-300 hover:bg-slate-100 text-slate-700 font-semibold text-xs rounded-xl transition-colors cursor-pointer"
              >
                Done / Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
