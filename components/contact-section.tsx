"use client";

import { useState } from "react";
import {
  ArrowUpRight,
  Mail,
  Phone,
  Globe,
  Play,
  PhoneCall,
  CheckCircle2,
} from "lucide-react";

export function ContactSection() {
  const [form, setForm] = useState({
    brand: "",
    name: "",
    designation: "",
    phone: "",
    email: "",
    brief: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[linear-gradient(135deg,#08101c_0%,#0d1626_42%,#0d6b64_100%)] px-4 py-10 text-white md:px-6 md:py-14"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.06),transparent_24%),radial-gradient(circle_at_bottom_left,rgba(45,212,191,0.12),transparent_28%)]" />
      <div className="absolute right-0 top-0 h-56 w-56 rounded-full bg-teal-400/10 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-52 w-52 rounded-full bg-cyan-300/10 blur-3xl" />

      <div className="section-shell relative">
        <div className="grid gap-8 py-2 lg:grid-cols-[1fr_1fr] lg:items-start lg:gap-10">
          <div className="relative max-w-3xl">
            <div className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[180px] lg:hidden">
              <div className="absolute left-1/2 top-1 -translate-x-1/2 select-none text-[110px] font-semibold leading-none tracking-[-0.1em] text-white/[0.04] sm:text-[140px]">
                RR
              </div>
              <div className="absolute right-1 top-1 h-20 w-20 rounded-full border border-white/[0.08]" />
              <div className="absolute right-4 top-4 h-14 w-14 rounded-full border border-white/[0.06]" />
              <div className="absolute left-[-8px] bottom-3 h-16 w-16 rounded-full bg-cyan-300/10 blur-2xl" />
              <div className="absolute right-[-8px] top-7 h-16 w-16 rounded-full bg-teal-300/10 blur-2xl" />
              <svg
                className="absolute inset-0 h-full w-full"
                viewBox="0 0 360 180"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24 146C70 122 102 126 138 102C174 80 204 66 254 68"
                  stroke="rgba(255,255,255,0.12)"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeDasharray="5 9"
                />
                <circle cx="24" cy="146" r="3.5" fill="rgba(45,212,191,0.75)" />
                <circle cx="138" cy="102" r="3.5" fill="rgba(45,212,191,0.45)" />
                <circle cx="254" cy="68" r="3.5" fill="rgba(45,212,191,0.75)" />
              </svg>
            </div>

            <div className="relative z-10 max-w-[560px]">
              <div className="mb-4 inline-flex flex-col">
                <span className="text-[9px] uppercase tracking-[0.38em] text-white/28">
                  Raven Rows
                </span>
                <div className="mt-2 flex items-center gap-3">
                  <span className="h-[6px] w-[6px] rounded-full bg-teal-300/80" />
                  <span className="text-[10px] uppercase tracking-[0.34em] text-white/60">
                    Contact Desk
                  </span>
                  <span className="h-px w-8 bg-white/15" />
                </div>
              </div>

              <h2 className="max-w-[10ch] text-[30px] font-semibold leading-[0.95] tracking-[-0.05em] text-white sm:text-[38px] md:text-[48px]">
                Let's create something unforgettable.
              </h2>

              <p className="mt-3 max-w-[30rem] text-[14px] leading-7 text-white/72 sm:text-[15px]">
                Whether it's a film, event, or campaign, Raven Rows is ready to
                bring your vision to life.
              </p>
            </div>

            <div className="relative z-10 mt-5 overflow-hidden rounded-[22px] border border-white/10 bg-white/[0.08] p-4 shadow-[0_14px_34px_rgba(0,0,0,0.16)] backdrop-blur-xl lg:hidden">
              <div className="absolute right-[-18px] top-[-18px] h-20 w-20 rounded-full bg-teal-300/20 blur-2xl" />
              <div className="absolute bottom-[-8px] left-[-8px] h-16 w-16 rounded-full bg-cyan-300/10 blur-2xl" />
              <div className="relative flex items-start justify-between gap-4">
                <div className="max-w-[14rem]">
                  <p className="text-[10px] uppercase tracking-[0.22em] text-white/52">
                    Enquire Now
                  </p>
                  <h3 className="mt-2 text-[19px] font-semibold leading-[1.08] tracking-[-0.04em] text-white">
                    Film, events, and campaigns built with impact.
                  </h3>
                </div>
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/10">
                  <Play className="h-4 w-4 fill-white text-white" />
                </div>
              </div>
              <div className="mt-4 flex items-center gap-2 text-[13px] text-teal-300">
                <span>Tell us your vision</span>
                <ArrowUpRight className="h-4 w-4" />
              </div>
            </div>

            <div className="relative z-10 mt-5 grid gap-2.5 sm:mt-6">
              <a
                href="mailto:ravenrows@gmail.com"
                className="group flex items-center gap-3 rounded-[16px] border border-white/10 bg-white/[0.06] px-4 py-3 text-sm text-white/88 backdrop-blur-sm transition hover:bg-white/10"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/[0.08] ring-1 ring-white/10">
                  <Mail className="h-4 w-4 text-teal-300" />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-white/45">
                    Email
                  </p>
                  <p className="truncate text-[14px]">ravenrows@gmail.com</p>
                </div>
              </a>

              <a
                href="tel:+917007537270"
                className="group flex items-center gap-3 rounded-[16px] border border-white/10 bg-white/[0.06] px-4 py-3 text-sm text-white/88 backdrop-blur-sm transition hover:bg-white/10"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/[0.08] ring-1 ring-white/10">
                  <Phone className="h-4 w-4 text-teal-300" />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-white/45">
                    Phone
                  </p>
                  <p className="truncate text-[14px]">+91 7007537270</p>
                </div>
              </a>

              <a
                href="https://www.ravenrows.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 rounded-[16px] border border-white/10 bg-white/[0.06] px-4 py-3 text-sm text-white/88 backdrop-blur-sm transition hover:bg-white/10"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/[0.08] ring-1 ring-white/10">
                  <Globe className="h-4 w-4 text-teal-300" />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-white/45">
                    Website
                  </p>
                  <p className="truncate text-[14px]">www.ravenrows.com</p>
                </div>
              </a>
            </div>

            <div className="mt-6 lg:hidden">
              <CallRequestForm
                form={form}
                loading={loading}
                submitted={submitted}
                onChange={handleChange}
                onSubmit={handleSubmit}
              />
            </div>
          </div>

          <div className="hidden lg:block">
            <CallRequestForm
              form={form}
              loading={loading}
              submitted={submitted}
              onChange={handleChange}
              onSubmit={handleSubmit}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

type FormState = {
  brand: string;
  name: string;
  designation: string;
  phone: string;
  email: string;
  brief: string;
};

function CallRequestForm({
  form,
  loading,
  submitted,
  onChange,
  onSubmit,
}: {
  form: FormState;
  loading: boolean;
  submitted: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
}) {
  if (submitted) {
    return (
      <div className="flex min-h-[260px] flex-col items-center justify-center rounded-[22px] border border-white/10 bg-white/[0.05] p-5 text-center backdrop-blur-xl sm:min-h-[340px] sm:rounded-[28px] sm:p-8">
        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-teal-400/30 bg-teal-400/10 sm:h-14 sm:w-14">
          <CheckCircle2 className="h-6 w-6 text-teal-300 sm:h-7 sm:w-7" />
        </div>
        <h3 className="mt-4 text-[20px] font-semibold tracking-[-0.04em] text-white sm:mt-5 sm:text-[22px]">
          Request received!
        </h3>
        <p className="mt-2 max-w-[22ch] text-[13px] leading-6 text-white/60 sm:mt-3 sm:text-[14px] sm:leading-7">
          The Raven Rows team will call you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden rounded-[22px] border border-white/10 bg-white/[0.05] p-4 shadow-[0_18px_40px_rgba(0,0,0,0.18)] backdrop-blur-xl sm:rounded-[28px] sm:p-7 sm:shadow-[0_24px_60px_rgba(0,0,0,0.22)]">
      <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-teal-400/10 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-32 w-32 rounded-full bg-violet-400/8 blur-3xl" />

      <div className="relative">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full border border-teal-400/20 bg-teal-400/10 sm:h-10 sm:w-10">
            <PhoneCall className="h-4 w-4 text-teal-300" />
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-[0.24em] text-white/45">
              Get in touch
            </p>
            <h3 className="text-[17px] font-semibold leading-[1.1] tracking-[-0.04em] text-white sm:text-[20px]">
              Request a call from Raven Rows
            </h3>
          </div>
        </div>

        <div className="mt-1 h-px w-full bg-white/[0.08]" />

        <form onSubmit={onSubmit} className="mt-4 space-y-3 sm:mt-5">
          <div className="grid gap-3 sm:grid-cols-2">
            <Field
              label="Brand / Organisation Name"
              name="brand"
              placeholder="e.g. Raven Rows"
              value={form.brand}
              onChange={onChange}
              required
            />
            <Field
              label="Your Name"
              name="name"
              placeholder="Full name"
              value={form.name}
              onChange={onChange}
              required
            />
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <Field
              label="Designation"
              name="designation"
              placeholder="e.g. Marketing Head"
              value={form.designation}
              onChange={onChange}
            />
            <Field
              label="Contact Number"
              name="phone"
              placeholder="+91 XXXXX XXXXX"
              type="tel"
              value={form.phone}
              onChange={onChange}
              required
            />
          </div>

          <Field
            label="Email ID"
            name="email"
            placeholder="you@example.com"
            type="email"
            value={form.email}
            onChange={onChange}
            required
          />

          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] uppercase tracking-[0.22em] text-white/45">
              Brief Description about Project
            </label>
            <textarea
              name="brief"
              value={form.brief}
              onChange={onChange}
              placeholder="Describe your project — what, when, scale, goals..."
              rows={3}
              className="w-full resize-none rounded-[12px] border border-white/10 bg-white/[0.06] px-3 py-2.5 text-[13px] leading-5 text-white placeholder-white/28 outline-none transition focus:border-teal-400/40 focus:bg-white/[0.09] focus:ring-0 sm:rounded-[14px] sm:px-4 sm:py-3 sm:leading-6"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="mt-1 inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-5 py-2.5 text-[10px] font-medium uppercase tracking-[0.2em] text-black transition hover:bg-white/90 disabled:opacity-60 sm:px-6 sm:py-3 sm:text-[11px] sm:tracking-[0.22em]"
          >
            {loading ? (
              <>
                <span className="h-3.5 w-3.5 animate-spin rounded-full border-2 border-black/20 border-t-black" />
                Sending…
              </>
            ) : (
              <>
                Request a Call
                <PhoneCall className="h-3.5 w-3.5" />
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}

function Field({
  label,
  name,
  placeholder,
  type = "text",
  value,
  onChange,
  required,
}: {
  label: string;
  name: string;
  placeholder: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={name}
        className="text-[10px] uppercase tracking-[0.22em] text-white/45"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="rounded-[12px] border border-white/10 bg-white/[0.06] px-3 py-2 text-[13px] text-white placeholder-white/28 outline-none transition focus:border-teal-400/40 focus:bg-white/[0.09] sm:rounded-[14px] sm:px-4 sm:py-2.5"
      />
    </div>
  );
}