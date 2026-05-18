import { useState } from "react";
import { useInView } from "../hooks/useInView.js";

const contactLinks = [
  {
    icon: "✉️",
    label: "Email",
    value: "rj.cuya010@gmail.com",
    href: "mailto:rj.cuya010@gmail.com",
  },
  {
    icon: "📱",
    label: "Phone",
    value: "09760791479",
    href: "tel:+639760791479",
  },
  {
    icon: "🐙",
    label: "GitHub",
    value: "github.com/RommJames",
    href: "https://github.com/RommJames",
  },
  {
    icon: "💼",
    label: "LinkedIn",
    value: "linkedin.com/in/romm-james-cuya",
    href: "https://linkedin.com/in/romm-james-cuya",
  },
  {
    icon: "📄",
    label: "Resume",
    value: "Download CV (PDF)",
    href: "/references/CV-RommJamesCuya.pdf",
  },
];

export default function Contact() {
  const [ref, vis] = useInView();
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, subject, message } = form;
    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
    const mailto = `mailto:rj.cuya010@gmail.com?subject=${encodeURIComponent(subject || "Portfolio Inquiry")}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact">
      <div className="container">
        <div
          className="sec-hdr reveal"
          ref={ref}
          style={vis ? { opacity: 1, transform: "none" } : {}}
        >
          <p className="sec-label">Let's Talk</p>
          <h2 className="sec-title">
            Get In <span>Touch</span>
          </h2>
        </div>

        <div className="contact-grid">
          {/* Left */}
          <div className="contact-info">
            <div className="contact-intro">
              <h3>Open to opportunities</h3>
              <p>
                I&apos;m actively looking for backend, full-stack, or ERP
                development roles. Whether you have a project in mind, a job
                opportunity, or just want to connect — feel free to reach out!
              </p>
            </div>

            <div className="contact-links">
              {contactLinks.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  className="contact-link"
                  target={
                    l.href.startsWith("http") || l.href.endsWith(".pdf")
                      ? "_blank"
                      : undefined
                  }
                  rel="noopener noreferrer"
                >
                  <div className="cl-icon">{l.icon}</div>
                  <div>
                    <p className="cl-lbl">{l.label}</p>
                    <p className="cl-val">{l.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <div className="contact-form-box">
            <form className="c-form" onSubmit={handleSubmit}>
              <div className="c-row">
                <div className="c-grp">
                  <label className="c-lbl">Your Name</label>
                  <input
                    className="c-input"
                    name="name"
                    placeholder="John Doe"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="c-grp">
                  <label className="c-lbl">Email Address</label>
                  <input
                    className="c-input"
                    type="email"
                    name="email"
                    placeholder="john@company.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="c-grp">
                <label className="c-lbl">Subject</label>
                <input
                  className="c-input"
                  name="subject"
                  placeholder="Job Opportunity / Project Inquiry"
                  value={form.subject}
                  onChange={handleChange}
                />
              </div>
              <div className="c-grp">
                <label className="c-lbl">Message</label>
                <textarea
                  className="c-textarea"
                  name="message"
                  placeholder="Tell me about the role or project..."
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                style={{ alignSelf: "flex-start" }}
              >
                {sent ? "✓ Opening mail client…" : "Send Message →"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
